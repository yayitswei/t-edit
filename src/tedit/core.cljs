(ns tedit.core
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string]
            [cljs.core.async :as async
             :refer [>! <! alts! chan sliding-buffer put! close!]])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]]))

(enable-console-print!)

;; mouse events

(defn single-event-channel []
  (let [c (chan (sliding-buffer 1))]
    {:channel c
     :mult (async/mult c)}))

(def single-event-channels #{:mouse-move :mouse-down :mouse-up
                             :text-change :selection-change
                             :file-drag-over :file-drop})

(defonce comms (into {} (map #(vector % (single-event-channel)) single-event-channels)))

(defn get-channel [channel-name]
  (get-in comms [channel-name :channel]))

(defn get-mult [mult-name]
  (get-in comms [mult-name :mult]))

;; state

(defonce config {:canvas-width 1170
                 :canvas-height 700
                 :shirt-dimensions [575 675]
                 :art [{:d "M85.376,11.704C86.28500000000001,10.055,86.491,8.237,85.967,6.426000000000001C85.073,3.339000000000001,82.472,1.258000000000001,78.446,0.40600000000000147C74.979,-0.3259999999999985,70.617,-0.059999999999998554,66.479,1.1370000000000013C62.989,2.1480000000000015,59.709,3.4820000000000015,55.86,5.455000000000001C52.588,4.773000000000001,47.842,4.910000000000001,43.125,5.823000000000001C38.407,4.910000000000001,33.662,4.7730000000000015,30.39,5.455000000000001C26.54,3.4810000000000008,23.261000000000003,2.147000000000001,19.772,1.1370000000000013C15.633999999999999,-0.05999999999999872,11.271999999999998,-0.3269999999999986,7.804999999999998,0.40600000000000136C3.777999999999998,1.2580000000000013,1.1769999999999978,3.3390000000000013,0.28399999999999803,6.426000000000001C-0.239000000000002,8.238000000000001,-0.03300000000000197,10.055000000000001,0.874999999999998,11.704C2.195999999999998,14.104000000000001,5.016999999999999,16.124000000000002,8.417999999999997,17.109C11.518999999999998,18.006,15.860999999999997,18.397000000000002,18.754999999999995,16.802000000000003C20.048999999999996,16.089000000000002,20.899999999999995,15.057000000000002,21.280999999999995,13.737000000000004C22.272999999999996,10.309000000000005,19.219999999999995,7.346000000000004,15.842999999999996,6.298000000000004C13.365999999999996,5.546000000000004,10.704999999999997,5.635000000000003,9.060999999999996,6.527000000000004C8.110999999999997,7.044000000000004,7.485999999999996,7.798000000000004,7.203999999999996,8.772000000000004C6.826999999999996,10.076000000000004,7.610999999999996,11.199000000000003,8.192999999999996,11.600000000000003C8.526999999999996,11.829000000000002,8.874999999999996,11.950000000000003,9.089999999999996,11.986000000000002C9.077999999999996,11.984000000000002,9.081999999999997,11.986000000000002,9.084999999999996,11.986000000000002C9.098999999999995,11.991000000000003,9.118999999999996,11.997000000000002,9.143999999999995,12.002000000000002C9.705999999999994,12.116000000000003,10.260999999999996,12.027000000000003,10.664999999999996,11.759000000000002C10.944999999999995,11.573000000000002,11.124999999999996,11.318000000000001,11.184999999999995,11.022000000000002C11.245999999999995,10.725000000000001,11.178999999999995,10.420000000000002,10.993999999999994,10.139000000000003C10.725999999999994,9.735000000000003,10.248999999999995,9.437000000000003,9.684999999999995,9.323000000000002C9.121,9.207,8.565,9.295,8.161,9.563C8.058,9.631,7.976,9.712,7.899,9.796C7.859,9.552,7.858,9.27,7.946,8.964C8.844,5.86,14.396,7.296,15.501,7.6160000000000005C18.491,8.481,21.338,10.698,20.522,13.517C19.43,17.288999999999998,13.753999999999998,17.785,8.711999999999998,16.326C5.422999999999998,15.374,2.8279999999999976,13.541,1.5909999999999975,11.298000000000002C0.776,9.818,0.6,8.257,1.064,6.652C2.926,0.22,12.171,0.423,19.522,2.551C22.354999999999997,3.371,25.275,4.4990000000000006,28.656999999999996,6.072C26.752999999999997,6.797,25.487999999999996,7.946,25.078999999999997,9.36C24.695999999999998,10.677999999999999,25.266,11.818,26.011999999999997,12.116C26.386999999999997,12.276,26.775999999999996,12.254999999999999,27.071999999999996,12.056C27.087999999999994,12.046999999999999,27.104999999999997,12.036,27.122999999999994,12.023L27.128999999999994,12.019C27.146999999999995,12.004,27.151999999999994,11.999,27.151999999999994,11.999C27.399999999999995,11.81,27.466999999999995,11.515,27.466999999999995,11.197000000000001C27.466999999999995,11.13,27.355999999999995,11.058000000000002,27.355999999999995,10.983V10.985000000000001V10.983V10.96C27.355999999999995,10.956000000000001,27.429999999999996,10.946000000000002,27.429999999999996,10.946000000000002L27.458999999999996,10.760000000000002H27.415999999999997C27.241999999999997,10.760000000000002,26.907999999999998,10.192000000000002,26.526999999999997,10.192000000000002C26.212999999999997,10.192000000000002,25.935,10.330000000000002,25.747999999999998,10.553000000000003C25.702999999999996,10.274000000000003,25.712999999999997,9.941000000000003,25.817999999999998,9.578000000000003C26.211,8.217000000000002,27.566,7.140000000000002,29.630999999999997,6.543000000000003C31.129999999999995,7.259000000000003,32.589,7.991000000000003,33.976,8.696000000000003C30.567999999999998,10.283000000000003,29.089,11.961000000000004,29.589,13.689000000000004C29.770999999999997,14.310000000000004,30.166999999999998,14.790000000000003,30.772,15.117000000000004C32.888999999999996,16.260000000000005,36.992999999999995,15.263000000000005,39.25,14.566000000000004C40.448,14.195000000000004,41.717,13.722000000000005,43.125,13.127000000000004C44.533,13.723000000000004,45.803,14.195000000000004,46.999,14.566000000000004C49.257000000000005,15.262000000000004,53.36,16.259000000000004,55.478,15.117000000000004C56.082,14.790000000000004,56.480000000000004,14.309000000000005,56.660000000000004,13.689000000000004C57.160000000000004,11.960000000000004,55.682,10.282000000000004,52.274,8.695000000000004C53.661,7.990000000000004,55.120000000000005,7.257000000000004,56.620000000000005,6.541000000000004C58.68300000000001,7.139000000000004,60.040000000000006,8.213000000000005,60.43300000000001,9.574000000000003C60.543000000000006,9.956000000000003,60.54800000000001,10.298000000000004,60.495000000000005,10.583000000000004C60.309000000000005,10.337000000000003,60.017,10.177000000000003,59.685,10.177000000000003C59.123000000000005,10.177000000000003,58.665,10.634000000000004,58.665,11.198000000000004C58.665,11.706000000000003,59.047,12.140000000000004,59.554,12.205000000000004C59.767,12.245000000000003,60.010000000000005,12.215000000000003,60.243,12.115000000000004C60.984,11.818000000000003,61.553000000000004,10.678000000000004,61.172000000000004,9.360000000000003C60.76200000000001,7.946000000000003,59.49700000000001,6.797000000000002,57.594,6.072000000000003C60.975,4.499000000000002,63.896,3.3710000000000027,66.72800000000001,2.551000000000003C74.08000000000001,0.4230000000000027,83.32500000000002,0.22000000000000286,85.18700000000001,6.653000000000003C85.65200000000002,8.257000000000003,85.47400000000002,9.819000000000003,84.66000000000001,11.299000000000003C83.424,13.542000000000003,80.82800000000002,15.375000000000004,77.53900000000002,16.327C72.49700000000001,17.786,66.82200000000002,17.291,65.72900000000001,13.518C64.91400000000002,10.699000000000002,67.75900000000001,8.482000000000001,70.75000000000001,7.617000000000001C71.85400000000001,7.297000000000001,77.40500000000002,5.860000000000001,78.30400000000002,8.965000000000002C78.38400000000001,9.240000000000002,78.39100000000002,9.533000000000001,78.34000000000002,9.822000000000001C77.98100000000002,9.382000000000001,77.28300000000002,9.170000000000002,76.52800000000002,9.322000000000001C75.53500000000003,9.524000000000001,74.87500000000001,10.269,75.02600000000002,11.021C75.18000000000002,11.772,76.07800000000003,12.203000000000001,77.07000000000002,12.001000000000001L77.08400000000002,11.998000000000001C77.10500000000002,11.993,77.11700000000002,11.989,77.11700000000002,11.989C77.11800000000002,11.988000000000001,77.12100000000002,11.988000000000001,77.12100000000002,11.987L77.08100000000002,11.994C77.29600000000002,11.975,77.68000000000002,11.861,78.06000000000002,11.599C78.64200000000001,11.198,79.42500000000001,10.075,79.04800000000002,8.771C78.76700000000001,7.797000000000001,78.14200000000001,7.042000000000001,77.19000000000001,6.526000000000001C75.54700000000001,5.634,72.88500000000002,5.546000000000001,70.41100000000002,6.297000000000001C67.03200000000001,7.346,63.97700000000002,10.309000000000001,64.97100000000002,13.736C65.35300000000002,15.056000000000001,66.20300000000002,16.089000000000002,67.49800000000002,16.801000000000002C70.39100000000002,18.396,74.73400000000002,18.005000000000003,77.83400000000002,17.108C81.234,16.124,84.054,14.104,85.376,11.704ZM31.522,6.013C34.149,5.628,37.534,5.716,41.102999999999994,6.266C40.577999999999996,6.394,40.065999999999995,6.527,39.581999999999994,6.668C38.01599999999999,7.12,36.596999999999994,7.604,35.352999999999994,8.104C34.19,7.455,32.875,6.728,31.522,6.013ZM39.025,13.832C35.455,14.957,32.504,15.189,31.131999999999998,14.455C30.698999999999998,14.223,30.429,13.904,30.307999999999996,13.482C29.891999999999996,12.046,31.417999999999996,10.584,34.840999999999994,9.136L35.044,9.238999999999999C37.485,10.482999999999999,39.802,11.655999999999999,42.089,12.671999999999999C40.999,13.144,39.988,13.528,39.025,13.832ZM36.23,8.591C37.294999999999995,8.196,38.477999999999994,7.81,39.842999999999996,7.414C40.87,7.117,41.968999999999994,6.853,43.126,6.6209999999999996C44.281,6.853,45.378,7.116999999999999,46.384,7.409C47.769,7.808,48.953,8.196,50.019,8.591C47.634,9.92,45.37,11.174,43.123999999999995,12.213C40.88,11.174,38.614,9.92,36.23,8.591ZM55.942,13.482C55.819,13.904,55.549,14.222,55.118,14.455C53.746,15.189,50.796,14.957,47.224000000000004,13.832C46.261,13.528,45.25000000000001,13.144,44.161,12.672C46.447,11.656,48.763000000000005,10.484,51.205,9.239L51.408,9.136000000000001C54.83,10.584,56.357,12.047,55.942,13.482ZM50.896,8.104C49.654,7.603999999999999,48.234,7.1209999999999996,46.667,6.667999999999999C46.183,6.525999999999999,45.671,6.393999999999999,45.146,6.265999999999999C48.715,5.715999999999999,52.101,5.627999999999999,54.726,6.012999999999999C53.392,6.72,52.108,7.427,50.896,8.104Z" :name "Decorative Art"}
                       {:d "M59.405,21.782L35.148,21.782L35.148,0L24.258,0L24.258,21.782L0,21.782L0,32.673L24.258,32.673L24.258,100L35.148,100L35.148,32.673L59.405,32.673Z" :name "Cross"}
                       {:d "M0,53.572C-0.016,40.7,5.321,30.962,10.48,24.78L10.48,24.78C15.667000000000002,18.547,20.704,15.544,21.156,15.264000000000001L21.156,15.264000000000001C24.523999999999997,13.271,28.852999999999998,14.415000000000001,30.823,17.819000000000003L30.823,17.819000000000003C32.789,21.211000000000002,31.674,25.566000000000003,28.334,27.569000000000003L28.334,27.569000000000003L28.335,27.570000000000004C28.335,27.570000000000004,28.331,27.571000000000005,28.32,27.578000000000003L28.32,27.578000000000003C28.311,27.582000000000004,28.297,27.592000000000002,28.278,27.604000000000003L28.278,27.604000000000003C28.209999999999997,27.646000000000004,28.084,27.729000000000003,27.910999999999998,27.848000000000003L27.910999999999998,27.848000000000003C27.56,28.082000000000004,27.014999999999997,28.473000000000003,26.339,29.01L26.339,29.01C24.99,30.083000000000002,23.137,31.75,21.311,33.955L21.311,33.955C17.642,38.422,14.145,44.753,14.129,53.56999999999999L14.129,53.56999999999999C14.132,62.459999999999994,17.676,70.45299999999999,23.442999999999998,76.29299999999999L23.442999999999998,76.29299999999999C29.223,82.12299999999999,37.129999999999995,85.70899999999999,45.922,85.71099999999998L45.922,85.71099999999998C54.714999999999996,85.70899999999999,62.620999999999995,82.12299999999999,68.401,76.29299999999998L68.401,76.29299999999998C74.17,70.45299999999997,77.714,62.45999999999998,77.716,53.56999999999998L77.716,53.56999999999998C77.69999999999999,45.02299999999998,74.422,38.827999999999975,70.87899999999999,34.375999999999976L70.87899999999999,34.375999999999976C67.50599999999999,30.154999999999976,63.89799999999999,27.803999999999977,63.53799999999999,27.584999999999976L63.53799999999999,27.584999999999976C63.53399999999999,27.581999999999976,63.52899999999999,27.580999999999975,63.52599999999999,27.578999999999976L63.52599999999999,27.578999999999976C63.52099999999999,27.575999999999976,63.51799999999999,27.573999999999977,63.514999999999986,27.572999999999976L63.514999999999986,27.572999999999976C63.511999999999986,27.569999999999975,63.506999999999984,27.569999999999975,63.506999999999984,27.569999999999975L63.506999999999984,27.569999999999975L63.506999999999984,27.569999999999975C60.170999999999985,25.564999999999976,59.05599999999998,21.209999999999976,61.01999999999998,17.817999999999977L61.01999999999998,17.817999999999977C62.99199999999998,14.413999999999977,67.31999999999998,13.269999999999976,70.68699999999998,15.262999999999977L70.68699999999998,15.262999999999977C71.14099999999998,15.541999999999977,76.17799999999998,18.544999999999977,81.36499999999998,24.778999999999975L81.36499999999998,24.778999999999975C86.52699999999999,30.961999999999975,91.86099999999998,40.69899999999998,91.84599999999998,53.57099999999998L91.84599999999998,53.57099999999998C91.843,79.208,71.283,99.991,45.924,100L45.924,100C20.565,99.991,0.006,79.208,0,53.572L0,53.572ZM38.859,50.001V28.570999999999998V7.143C38.859,3.199,42.022,0,45.925,0L45.925,0C49.824,0,52.988,3.199,52.988,7.143L52.988,7.143V28.571V50.001000000000005H52.99C52.99,53.941,49.825,57.14300000000001,45.926,57.14300000000001L45.926,57.14300000000001C42.022,57.143,38.859,53.941,38.859,50.001L38.859,50.001Z" :name "Power"}]
                 :fonts [["Helvetica Neue", "sans-serif"]
                         ["Permanent Marker" "cursive"]
                         ["Codystar" "cursive"]
                         ["Fredericka the Great" "cursive"]
                         ["Josefin Sans" "sans-serif"]
                         ["Anton" "sans-serif"]
                         ["Shadows Into Light" "cursive"]
                         ["Gloria Hallelujah" "cursive"]
                         ["Calligraffitti" "cursive"]
                         ["Tangerine" "cursive"]
                         ["Amatic SC" "cursive"]
                         ["Orbitron" "sans-serif"]
                         ["Damion" "cursive"]
                         ["Homemade Apple" "cursive"]
                         ["Spirax" "cursive"]
                         ["Sancreek" "cursive"]
                         ["Mountains of Christmas" "cursive"]]
                 :shirt-colors [["#ffffff" "White"]
                                ["#1a1a1a" "Black"]
                                ["#141525" "Navy"]
                                ["#d4cfc3" "Ash"]
                                ["#1a2f78" "Deep Royal"]
                                ["#9f0110" "Deep Red"]
                                ["#142510" "Deep Forest"]
                                ["#e54d09" "Orange"]
                                ["#4b256e" "Purple"]
                                ["#a7fc5c" "Lime"]]
                 :elem-colors ["rgb(175,175,175)"
                               "rgb(255,255,255)"
                               "rgb(220,36,31)"
                               "rgb(253,66,56)"
                               "rgb(192,54,44)"
                               "rgb(226,56,40)"
                               "rgb(159,45,32)"
                               "rgb(227,78,53)"
                               "rgb(112,50,34)"
                               "rgb(55,43,39)"
                               "rgb(78,38,20)"
                               "rgb(232,186,165)"
                               "rgb(255,82,0)"
                               "rgb(255,90,0)"
                               "rgb(240,208,187)"
                               "rgb(177,127,92)"
                               "rgb(205,88,6)"
                               "rgb(42,38,35)"
                               "rgb(251,195,153)"
                               "rgb(255,181,123)"
                               "rgb(192,114,47)"
                               "rgb(171,156,143)"
                               "rgb(231,111,0)"
                               "rgb(241,124,14)"
                               "rgb(152,143,134)"
                               "rgb(185,156,107)"
                               "rgb(202,179,136)"
                               "rgb(255,179,0)"
                               "rgb(218,214,203)"
                               "rgb(198,146,0)"
                               "rgb(170,157,113)"
                               "rgb(212,204,170)"
                               "rgb(245,211,18)"
                               "rgb(155,137,0)"
                               "rgb(250,230,0)"
                               "rgb(243,237,134)"
                               "rgb(202,202,200)"
                               "rgb(91,221,69)"
                               "rgb(47,137,39)"
                               "rgb(35,93,55)"
                               "rgb(67,217,199)"
                               "rgb(123,221,216)"
                               "rgb(0,175,173)"
                               "rgb(54,204,218)"
                               "rgb(102,207,230)"
                               "rgb(0,160,226)"
                               "rgb(66,180,230)"
                               "rgb(0,103,198)"
                               "rgb(0,35,76)"
                               "rgb(140,180,232)"
                               "rgb(0,48,130)"
                               "rgb(212,221,237)"
                               "rgb(59,96,175)"
                               "rgb(97,98,101)"
                               "rgb(170,148,222)"
                               "rgb(122,82,199)"
                               "rgb(74,33,126)"
                               "rgb(172,4,129)"
                               "rgb(230,83,188)"
                               "rgb(229,26,155)"
                               "rgb(250,159,204)"
                               "rgb(242,85,138)"
                               "rgb(248,119,158)"
                               "rgb(195,12,62)"
                               "rgb(250,175,194)"
                               "rgb(158,27,52)"
                               "rgb(210,16,52)"
                               "rgb(124,34,48)"]})

(defonce elems (atom {}))
(defonce transients (atom {}))
(defonce highlighted (atom nil))
(defonce selected (atom nil))
(defonce debug (atom {}))
(defonce id-counter (atom 0))
(defonce options (atom {:text-field ""
                        :shirt-color "#fff"
                        :shirt-color-preview "#fff"}))
(defonce active-options (atom :text))
(defonce bounding-boxes (atom {}))

;; util

(defn gen-id! [] (swap! id-counter inc) @id-counter)

(defn selected-elem [] (when @selected (assoc (@elems @selected) :id @selected)))
(defn highlighted-elem [] (when @highlighted (assoc (@elems @highlighted) :id @highlighted)))

(defn swap-selected-elem! [f & args]
  (if @selected
;    (apply (partial (swap! elems update-in [@selected])) args)
    (let [new-elem (apply (partial f (selected-elem)) args)]
      (swap! elems assoc @selected new-elem))
    (println "ERROR: No element selected")))

(def default-elem-props
  (atom {:x (/ (:canvas-width config) 4)
         :y 200
         :color "#333"
         :text ""
         :dragging false
         :highlight true}))

(def default-text-elem-props
  (atom {:text ""
         :type :text
         :font-size 25
         :font (first (config :fonts))}))

(def default-art-elem-props
  (atom {:type :art
         :scale 1}))

(defn create-elem! [props]
  (let [id (gen-id!)]
    (swap! elems assoc id props)
    (reset! selected id)))

(defn delete-elem! [id]
  (swap! elems dissoc id)
  (reset! selected nil))

(defn font->font-family-str [[font style]]
  (str "'" font "', " style))

(defn set-cursor! [cursor-type]
  (aset js/document "body" "style" "cursor" (name cursor-type)))

; dev only
;(def pattern (merge @default-elem-props @default-art-elem-props (first (:art config))))
;(create-elem! pattern)
;(reset! selected nil)

;; drag fns

(defn mouse-delta [e mouse-start-state]
  [(- (.. e -pageX) (:x mouse-start-state))
   (- (.. e -pageY) (:y mouse-start-state))])

(defn drag-start [e]
  (reset! transients {:mouse-start-state {:x (.-pageX e) :y (.-pageY e)}
                      :elem-start-state (selected-elem)})
  (swap-selected-elem! merge {:dragging true})
  (swap! bounding-boxes dissoc @selected)
  (set-cursor! :move))

(defn transform-matrix [elem]
  [(:scale-x elem 1) 0 0 (:scale-y elem 1) (:x elem 0) (:y elem 0)])

(defn transform-str [& args]
  (str "matrix(" (clojure.string/join "," args) ")"))

(defn get-element [id] (. js/document (getElementById id)))

(defn constrain [v min-v max-v]
  (cond (< v min-v) min-v
        (> v max-v) max-v
        :else v))

(defn e->translation [e {:keys [mouse-start-state elem-start-state]}]
  (let [[delta-x delta-y] (mouse-delta e mouse-start-state)]
    {:x (constrain (+ (:x elem-start-state) delta-x) 0 (:canvas-width config))
     :y (constrain (+ (:y elem-start-state) delta-y) 0 (:canvas-height config))}))

(defn dominant [f values]
  (apply (partial max-key Math/abs) values))

(defn e->scale [e {:keys [mouse-start-state elem-start-state]}]
  (let [deltas (mouse-delta e mouse-start-state)]
    #_(swap! debug merge {:font-size new-font-size :deltas (print-str deltas)
                        :dominant-delta (dominant Math/abs deltas)})
    (case (:type elem-start-state)
      :text {:font-size (max (+ (:font-size elem-start-state)
                                (dominant Math/abs deltas)) 10)}
      :art {:scale (max (+ (:scale elem-start-state)
                           (/ (dominant Math/abs deltas) 100)) 0.1)})))

(defn drag-move [e]
  (when (:dragging (selected-elem))
    (swap-selected-elem! merge (e->translation e @transients))))

(defn drag-end [e]
  (when (:dragging (selected-elem))
    (swap-selected-elem! merge (e->translation e @transients) {:dragging false})
    (set-cursor! :auto)))

(defn resize-start [e]
  (reset! transients {:mouse-start-state {:x (.-pageX e) :y (.-pageY e)}
                      :elem-start-state (selected-elem)})
  (swap-selected-elem! merge {:resizing true})
  (swap! bounding-boxes dissoc @selected)
  (set-cursor! :se-resize))

(defn resize-move [e]
  (when (:resizing (selected-elem))
    (swap-selected-elem! merge (e->scale e @transients))))

(defn resize-end [e]
  (when (:resizing (selected-elem))
    (swap-selected-elem! merge (e->scale e @transients) {:resizing false})
    (set-cursor! :auto)))

(defn debug-component []
  (if-not (empty? @debug)
    [:div
     [:div "Elem IDs: " (print-str (keys @elems))]
     [:span "debug"]
     (for [[prop v] @debug]
       [:div {:key prop}
        [:span (name prop) ": "]
        [:span (str v)]])]))

(defmulti render-elem :type)

(defmethod render-elem :art
  [{:keys [d scale x y color color-preview outline-color id]}]
  [:g
   [:path {:fill (or color-preview color)
           :stroke (or outline-color color-preview color)
           :d d
           :transform (when (or x y scale)
                        (apply transform-str
                               (transform-matrix
                                {:x x
                                 :y y :scale-x scale :scale-y scale})))}]])

(defmethod render-elem :text
  [{:keys [type color color-preview x y outline-color
           font font-preview font-size text]}]
  [:text {:fill (or color-preview color)
          :stroke (or outline-color color-preview color)
          :x x
          :y y
          :text-anchor "middle"
          :style {:font-family (font->font-family-str (or font-preview font))
                  :font-size font-size}}
   [:tspan text]])

(defmethod render-elem :default
  [{:keys [x y]}]
  [:text {:x x :y y} "INVALID TYPE"])

(defn rect-component []
  (let [this (reagent/current-component)
        {id :id :as elem} (reagent/props this)]
    [:g {:key id
         :id (str "elem-" id)
         :on-mouse-down (fn [e]
                          (.preventDefault e)
                          (.stopPropagation e)
                          (reset! selected id)
                          (drag-start e))
         :pointer-events "boundingBox" ; doesn't work
         :on-mouse-up (fn [e] (drag-end e))
         :on-mouse-over (fn [e] (reset! highlighted id))
         :on-mouse-out (fn [e] (reset! highlighted nil))}
     (render-elem elem)]))

(defn -bounding-box [this]
  (let [bb (.getBBox (reagent/dom-node this))]
    {:x (.-x bb) :y (.-y bb) :width (.-width bb) :height (.-height bb)}))

(defn -update-bounding-box [this]
  (let [{:keys [id dragging resizing]} (reagent/props this)]
    (when-not (or dragging resizing)
      (swap! bounding-boxes assoc id (-bounding-box this)))))

(def rect-component-with-meta
  (with-meta rect-component
    {:component-did-mount -update-bounding-box
     :component-did-update -update-bounding-box}))

(defn drag-button []
  (let [move (async/tap (get-mult :mouse-move) (chan))
        up (async/tap (get-mult :mouse-up) (chan))]
    (go (while true
          (alt! move ([e] (drag-move e))
                up ([e] (drag-end e)))))
    (fn [bb]
      [:image {:key "drag-button"
               :on-mouse-down (fn [e]
                                (.preventDefault e)
                                (.stopPropagation e)
                                (drag-start e))

               :on-mouse-up (fn [e] (drag-end e))

               :xlink-href "drag.png"

               :x (- (:x bb) 20)
               :y (- (:y bb) 20)
               :height 20 :width 20}])))

(defn resize-button []
  (let [move (async/tap (get-mult :mouse-move) (chan))
        up (async/tap (get-mult :mouse-up) (chan))]
    (go (while true
          (alt! move ([e] (resize-move e))
                up ([e] (resize-end e)))))
    (fn [bb]
      [:image {:key "resize-button"
               :on-mouse-down (fn [e]
                                (.preventDefault e)
                                (.stopPropagation e)
                                (resize-start e))

               :on-mouse-up (fn [e] (resize-end e))

               :xlink-href "scale.png"

               :x (+ (:x bb) (:width bb))
               :y (+ (:y bb) (:height bb))
               :height 20 :width 20}])))

(defn delete-button [bb]
  [:image {:key "delete-button"
           :style {:cursor "pointer"}
           :on-mouse-down (fn [e]
                            (.preventDefault e)
                            (.stopPropagation e)
                            (delete-elem! @selected))

           :xlink-href "delete.png"

           :x (- (:x bb) 20)
           :y (+ (:y bb) (:height bb))
           :height 20 :width 20}])

(defn rotate-button [bb]
  [:image {:key "rotate-button"
           :on-mouse-down (fn [e]
                            (.preventDefault e)
                            (.stopPropagation e)
                                        ; nop
                            )

           :xlink-href "rotate.png"

           :x (+ (:x bb) (:width bb))
           :y (- (:y bb) 20)
           :height 20 :width 20}])

(defn controls-component []
  (fn [bounding-box]
    [:g
     [:rect (merge bounding-box
                   {:fill :none
                    :stroke-dasharray "4,3"
                    :stroke "#000000"})]
     [drag-button bounding-box]
     [resize-button bounding-box]
     [delete-button bounding-box]
     [rotate-button bounding-box]]))

(defn highlight-box [bb]
  [:rect (merge bb {:fill :none :stroke "#000000"})])

(defn text-field []
  [:div {:class "form-group"}
   [:input {:type "text" :placeholder "Add your text here"
            :class "form-control input-lg"
            :style {:width "300px"}
            :on-change (fn [e]
                         (swap! options assoc :text-field (.. e -target -value))
                         (put! (get-channel :text-change) (.. e -target -value)))
            :value (:text (selected-elem) "")}]])

(def text-field-with-meta
  (with-meta text-field
    {:component-will-mount
     (fn []
       (go (let [text-change (async/tap (get-mult :text-change) (chan))
                 selection-change (async/tap (get-mult :selection-change) (chan))]
             (while true
               (alt! text-change
                     ([v] (if @selected
                            (swap-selected-elem! assoc :text v)
                            (create-elem! (merge @default-elem-props
                                                 @default-text-elem-props
                                                 {:text v}))))
                     selection-change
                     ([_]
                        (swap! options assoc
                               :text-field (:text (selected-elem)))))))))}))

(def fudge [10 1])

(defn shirt-img [filename x-offset]
  (let [[width height] (get-in config [:shirt-dimensions])
        shirt-color (:shirt-color-preview @options)
        [fudge-x fudge-y] fudge]
   [:g
    [:rect {:class "shirt-background"
            :stroke shirt-color
            :fill shirt-color
            :x (+ x-offset fudge-x)
            :width (- width (* 2 fudge-x))
            :height (- height (* 2 fudge-y))}]
    [:image {:xlink-href filename
             :x x-offset
             :width width
             :height height}]]))

(defn shirts []
  (let [width (get-in config [:shirt-dimensions 0])
        canvas-width (get-in config [:canvas-width])]
    [:g {:key "shirts"}
     (shirt-img "shirt.png" (- (/ canvas-width 4) (/ width 2)))
     (shirt-img "shirt-back.png" (- canvas-width (/ canvas-width 4) (/ width 2)))]))

(defn shirt-color-selection [[color title]]
  [:li {:class "color-selection"
        :style {:background color}
        :on-mouse-down (fn [_]
                         (swap! options assoc
                                :shirt-color color
                                :shirt-color-preview color))
        :on-mouse-over (fn [_]
                         (swap! options assoc
                                :shirt-color-preview color))
        :on-mouse-out (fn [_]
                        (swap! options assoc
                               :shirt-color-preview (:shirt-color @options)))}])

(defn shirt-color-selector []
  [:ul {:class "shirt-color-selector color-selector"
        :style {:position "absolute"
                :bottom "80px"
                :left (str (- (/ (get-in config [:canvas-width]) 2) 12) "px")}}
   (for [[color title :as s] (:shirt-colors config)]
     ^{:key color} [shirt-color-selection s])])

;; elem-color-selection
(defn color-selection [color]
  [:li {:class "elem-color-selection color-selection"
        :style {:background color}
        :on-mouse-over (fn [_]
                         (when @selected
                           (swap-selected-elem! assoc :color-preview color)))
        :on-click (fn [_]
                    (if @selected
                      (swap-selected-elem! assoc :color color)
                      (swap! default-elem-props assoc :color color)))
        :on-mouse-out (fn [_]
                        (when @selected
                          (swap-selected-elem! dissoc :color-preview)))}])

;; elem-color-selector
(defn color-selector []
  [:div {:class "form-group"}
   [:div {:class "btn-group dropup"}
    [:button {:type "button"
              :class "btn btn-default btn-lg dropdown-toggle"
              :data-toggle "dropdown"}
     [:div {:id "color-selector-label"}
      [:div {:class "color-selection"
             :style {:display "inline-block"
                     :margin "2px 0 -2px 0"
                     :background (or (:color (selected-elem))
                                     (:color @default-elem-props))}}]
      [:span.caret.with-margin]]]
    [:ul {:class "dropdown-menu elem-color-selector color-selector" :role "menu"}
     (for [c (:elem-colors config)] ^{:key c} [color-selection c])]]])

(defn font-selection [[font style :as f]]
  [:li {:class ""
        :role "presentation"
        :style {:font-family (font->font-family-str f)}
        }
   [:a {:role "menuitem"
        :on-mouse-over (fn [_]
                         (when @selected
                           (swap-selected-elem! assoc :font-preview f)))
        :on-click (fn [e]
                    (.preventDefault e)
                    (if @selected
                      (swap-selected-elem! assoc :font f)
                      (swap! default-text-elem-props assoc :font f)))
        :on-mouse-out (fn [_]
                        (when @selected
                          (swap-selected-elem! dissoc :font-preview)))} font]])

(defn font-selector []
  [:div {:class "form-group"}
   [:div {:class "btn-group dropup" :style {:height "46px"}}
    [:button {:type "button"
              :class "btn btn-default btn-lg dropdown-toggle"
              :data-toggle "dropdown"}
     (let [[font-name _ :as displayed-font] (or (:font (selected-elem))
                                                (:font @default-text-elem-props))]
       [:div {:class "font-selection"
              :id "font-selector-label"
              :style {:display "inline-block"
                      :font-family (font->font-family-str displayed-font)
                      :margin 0}}
        font-name
        [:span.caret.with-margin]])]
    [:ul {:class "dropdown-menu font-selector"
          :role "menu"
          :aria-labelledby "font-selector-label"}
     (for [[font-name :as f] (:fonts config)] ^{:key font-name} [font-selection f])]]])

(defn switcher []
  [:div {:class "form-group right-align-group"}
   [:div {:class "btn btn-default btn-lg"
          :on-click (fn [e]
                      (reset! active-options
                              (case @active-options :text :art :art :text))
                      (reset! selected nil))}
    (case @active-options :text "Add art" :art "Add text")]])

(defn text-options []
  [:form {:id "options" :class "form-inline"}
   [text-field-with-meta]
   [color-selector]
   [font-selector]
   [switcher]])

(defn art-selection [art]
  [:li {:class ""
        :role "presentation"}
   [:a {:role "menuitem"
        :on-click (fn [e]
                    (.preventDefault e)
                    (create-elem! (merge @default-elem-props
                                         @default-art-elem-props
                                         art)))}
    [:svg (render-elem (merge art {:type :art :color "#000"}))]]])

(defn art-selector []
  [:div {:class "form-group"}
   [:div {:class "btn-group dropup" :style {:height "46px"}}
    [:button {:type "button"
              :class "btn btn-default btn-lg dropdown-toggle"
              :data-toggle "dropdown"}
     (let [a 1]
       [:div {:id "art-selector-label"
              :style {:display "inline-block"
                      :margin 0}}
        "Library"
        [:span.caret.with-margin]])]
    [:ul {:class "dropdown-menu art-selector"
          :role "menu"
          :aria-labelledby "art-selector-label"}
     (for [[idx a] (map-indexed #(vector %1 %2) (:art config))]
       ^{:key idx} [art-selection (assoc a :art-id idx)])]]])

(defn art-options []
  [:form {:id "options" :class "form-inline"}
   [art-selector]
   [color-selector]
   [switcher]])

(defn options-component []
  (case @active-options :text (text-options) :art (art-options)))

(defn canvas-component []
  [:div {:id "the-editor"}
   [:div {:style {:display :inline-block}}
    [:svg {:width (:canvas-width config) :height (:canvas-height config)
           :on-mouse-down (fn [e] (reset! selected nil))
           :class "unselectable"}
     ^{:key "shirts"} [shirts]
     (for [[id elem] @elems]
       ^{:key (str "elem-" id)} [rect-component-with-meta (assoc elem :id id)])
     (when (and @highlighted (not= @selected @highlighted))
       (when-let [bb (@bounding-boxes @highlighted)] [highlight-box bb]))
     (when-let [{:keys [id dragging resizing]} (selected-elem)]
       (when-let [bb (@bounding-boxes id)]
         (when-not (or dragging resizing)
           [controls-component bb])))]]
   [options-component]
   [shirt-color-selector]])

(defn route-event-to-channel! [event-type channel-name &
                               [{:keys [prevent-default?] :as opts}]]
  (js/window.addEventListener (name event-type)
                              (fn [e]
                                (when prevent-default? (.preventDefault e))
                                (put! (get-channel channel-name) e))))

(defn init-events! []
  (route-event-to-channel! :mousedown :mouse-down)
  (route-event-to-channel! :mouseup :mouse-up)
  (route-event-to-channel! :mousemove :mouse-move)

  (route-event-to-channel! :dragover :file-drag-over {:prevent-default? true})
  (route-event-to-channel! :drop :file-drop {:prevent-default? true})

  (js/window.addEventListener "keydown"
                              (fn [e] (case (.-keyCode e)
                                        13
                                        (do (.preventDefault e)
                                            (println "prevented submission"))
                                        8
                                        (when (not= "text" (aget e "target" "type"))
                                          (.preventDefault e)
                                          (when @selected
                                            (delete-elem! @selected)))
                                        #_(println "Key pressed: " (.-keyCode e))
                                        :nop)))

  (add-watch selected :selection-change
             (fn [k r o n]
               (when-not (= o n)
                 (put! (get-channel :selection-change)
                       {:old o
                        :new n}))))

  (let [text-change (async/tap (get-mult :text-change) (chan))
        selection-change (async/tap (get-mult :selection-change) (chan))
        file-drag-over (async/tap (get-mult :file-drag-over) (chan))
        file-drop (async/tap (get-mult :file-drop) (chan))]
      (go (while true
            (alt! text-change
                  ([v]
                   (swap! debug assoc :text v))
                  selection-change
                  ([{:keys [old new]}]
                     ;(swap! debug assoc :selection-old old :selection-new new)
                     (reset! debug (dissoc (selected-elem) :d))
                     (when (= old @highlighted) (reset! highlighted nil))
                     (when (and (not (nil? new))
                                (not= (:type (selected-elem)) @active-options))
                       (reset! active-options (:type (selected-elem)))))
                  file-drag-over
                  ([e] (println "file drag over"))
                  file-drop
                  ([e] (println "file drop")))))))


(defn init! []
  (init-events!)

  (reagent/render-component [canvas-component] (get-element "editor"))
  (reagent/render-component [debug-component] (get-element "debug"))

  (println "Initialized"))

(aset js/window "onload" init!)

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
                             :text-change :selection-change})

(defonce comms (into {} (map #(vector % (single-event-channel)) single-event-channels)))

(defn get-channel [channel-name]
  (get-in comms [channel-name :channel]))

(defn get-mult [mult-name]
  (get-in comms [mult-name :mult]))

;; state

(defonce config {:canvas-width 1170
                 :canvas-height 700
                 :shirt-dimensions [530 630]})

(defonce elems
  (atom {0 {:x 250 :y 100
            :text "test long text here we go"
            :dragging false
            :font-size 25
            :highlight true}}))

(defonce transients (atom {}))

(defonce highlighted (atom nil))
(defonce selected (atom nil))

(defonce debug (atom {}))

(defonce id-counter (atom 0))

(defonce options (atom {:text-field ""}))

;; util

(defn gen-id! [] (swap! id-counter inc) @id-counter)

(defn selected-elem [] (@elems @selected))

(defn swap-selected-elem! [f & args]
  (if @selected
;    (apply (partial (swap! elems update-in [@selected])) args)
    (let [new-elem (apply (partial f (selected-elem)) args)]
      (swap! elems assoc @selected new-elem))
    (println "ERROR: No element selected")))

(def default-text-elem-props
  {:x 250 :y 100
   :text ""
   :dragging false
   :font-size 25
   :highlight true})

(defn create-elem! [props]
  (let [id (gen-id!)]
    (swap! elems assoc id props)
    (reset! selected id)))

(defn delete-elem! [id]
  (swap! elems dissoc id)
  (reset! selected nil))

;; drag fns

(defn mouse-delta [e mouse-start-state]
  [(- (.. e -pageX) (:x mouse-start-state))
   (- (.. e -pageY) (:y mouse-start-state))])

(defn drag-start [e]
  (reset! transients {:mouse-start-state {:x (.-pageX e) :y (.-pageY e)}
                      :elem-start-state (selected-elem)})
  (swap-selected-elem! merge {:dragging true}))

(defn transform-matrix [elem]
  [(:scale-x elem 1) 0 0 (:scale-y elem 1) (:x elem 0) (:y elem 0)])

(defn transform-str [& args]
  (str "matrix(" (clojure.string/join "," args) ")"))

(defn get-element [id] (. js/document (getElementById id)))

(def text-padding 20)

(defn text-measurements [elem]
  (let [text-node (get-element "measure-text")
        tspan-node (get-element "measure-tspan")
        _ (.setAttribute text-node "font-size" (:font-size elem))
        _ (aset tspan-node "textContent" (:text elem))
        bb (.getBBox text-node)
        bounding-box {:width (.-width bb) :height (.-height bb)}]
    bounding-box))

(defn text-bounding-box [elem]
  (let [m (text-measurements elem)]
    {:x (- (:x elem) (/ (:width m) 2))
     :y (- (:y elem) (:height m))
     :width (:width m)
     :height (* (:height m) 1.2)}))

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
  (let [deltas (mouse-delta e mouse-start-state)
        new-font-size (max (+ (:font-size elem-start-state) (dominant Math/abs deltas)) 10)]
    #_(reset! debug {:font-size new-font-size :deltas (print-str deltas)
                   :dominant-delta (dominant Math/abs deltas)})
    {:font-size new-font-size}))

(defn drag-move [e]
  (when (:dragging (selected-elem))
    (swap-selected-elem! merge (e->translation e @transients))))

(defn drag-end [e]
  (when (:dragging (selected-elem))
    (swap-selected-elem! merge (e->translation e @transients) {:dragging false})))

(defn resize-start [e]
  (reset! transients {:mouse-start-state {:x (.-pageX e) :y (.-pageY e)}
                      :elem-start-state (selected-elem)})
  (swap-selected-elem! merge {:resizing true}))

(defn resize-move [e]
  (when (:resizing (selected-elem))
    (swap-selected-elem! merge (e->scale e @transients))))

(defn resize-end [e]
  (when (:resizing (selected-elem))
    (swap-selected-elem! merge (e->scale e @transients) {:resizing false})))

(defn debug-component []
  [:div
   (for [[prop v] @debug]
     [:div {:key prop}
      [:span (name prop) ": "]
      [:span v]])])

(defn rect-component [id]
  (let [move (async/tap (get-mult :mouse-move) (chan))
        up (async/tap (get-mult :mouse-up) (chan))]
    (go (while true
          (alt! move ([e] (drag-move e))
                up ([e] (drag-end e)))))

    (fn []
      (let [elem (@elems id)]
        [:g {:key id}
         [:text {:on-mouse-down (fn [e]
                                  (.preventDefault e)
                                  (.stopPropagation e)
                                  (reset! selected id)
                                  (drag-start e))

                 :on-mouse-up (fn [e]
                                (drag-end e))

                 :on-mouse-over (fn [e] (reset! highlighted true))
                 :on-mouse-out (fn [e] (reset! highlighted false))

                 :x (:x elem)
                 :y (:y elem)
                 :text-anchor "middle"
                 :height (:height elem)
                 :width (:width elem)
                 :style {:border "black"
                         :font-size (:font-size elem)}}
          [:tspan (:text elem)]]]))))

(defn drag-button []
  (let [move (async/tap (get-mult :mouse-move) (chan))
        up (async/tap (get-mult :mouse-up) (chan))]
    (go (while true
          (alt! move ([e] (drag-move e))
                up ([e] (drag-end e)))))
    (fn []
      (let [bb (text-bounding-box (selected-elem))]
        [:image {:on-mouse-down (fn [e]
                                  (.preventDefault e)
                                  (.stopPropagation e)
                                  (drag-start e))

                 :on-mouse-up (fn [e] (drag-end e))

                 :xlink-href "drag.png"

                 :x (- (:x bb) 20)
                 :y (- (:y bb) 20)
                 :height 20 :width 20}]))))

(defn resize-button []
  (let [move (async/tap (get-mult :mouse-move) (chan))
        up (async/tap (get-mult :mouse-up) (chan))]
    (go (while true
          (alt! move ([e] (resize-move e))
                up ([e] (resize-end e)))))
    (fn []
      (let [bb (text-bounding-box (selected-elem))]
        [:image {:on-mouse-down (fn [e]
                                  (.preventDefault e)
                                  (.stopPropagation e)
                                  (resize-start e))

                 :on-mouse-up (fn [e] (resize-end e))

                 :xlink-href "scale.png"

                 :x (+ (:x bb) (:width bb))
                 :y (+ (:y bb) (:height bb))
                 :height 20 :width 20}]))))

(defn delete-button []
  (let [bb (text-bounding-box (selected-elem))]
    [:image {
             :on-mouse-down (fn [e]
                              (.preventDefault e)
                              (.stopPropagation e)
                              (delete-elem! @selected))

             :xlink-href "delete.png"

             :x (- (:x bb) 20)
             :y (+ (:y bb) (:height bb))
             :height 20 :width 20}]))

(defn controls-component []
  (fn [] [:g
          [:rect (merge (text-bounding-box (selected-elem))
                        {:fill :none
                         :stroke-dasharray "4,3"
                         :stroke "#000000"})]
          [drag-button]
          [resize-button]
          [delete-button]]))

(defn highlight-box []
  [:rect (merge (text-bounding-box (selected-elem))
                {:fill :none
                 :stroke "#000000"})])

(defn text-field []
  (let [text-change (async/tap (get-mult :text-change) (chan))
        selection-change (async/tap (get-mult :selection-change) (chan))]
    (go (while true
          (alt! text-change
                ([v] (if @selected
                       (swap-selected-elem! assoc :text v)
                       (create-elem! (assoc default-text-elem-props :text v))))
                selection-change
                ([_]
                 (swap! options assoc :text-field (:text (selected-elem)))))))
    (fn []
      [:input {:type "text" :placeholder "Add your text here"
               :on-change (fn [e]
                            (swap! options assoc :text-field (.. e -target -value))
                            (put! (get-channel :text-change) (.. e -target -value))
                            )
               :value (:text (selected-elem) "")}])))

(defn canvas-component []
  [:div
   [:div {:id "options"}
    [text-field]]
   [:div {:style {:border "1px solid black" :display :inline-block}}
    [:svg {:width (:canvas-width config) :height (:canvas-height config)
           :on-mouse-down (fn [e] (reset! selected nil))
           :class "unselectable"}
     (when @selected [controls-component])
     (when (and @highlighted (not @selected)) [highlight-box])
     (for [[id elem] @elems]
       [rect-component id])]]
   [debug-component]])

(reagent/render-component [canvas-component] (get-element "editor"))

(defn init-events! []
  (js/window.addEventListener "mousedown" #(put! (get-channel :mouse-down) %))
  (js/window.addEventListener "mouseup"   #(put! (get-channel :mouse-up)   %))
  (js/window.addEventListener "mousemove" #(put! (get-channel :mouse-move) %))

  (add-watch selected :selection-change
             (fn [k r o n]
               (when-not (= o n)
                 (put! (get-channel :selection-change)
                       {:old o
                        :new n}))))

  (let [text-change (async/tap (get-mult :text-change) (chan))
        selection-change (async/tap (get-mult :selection-change) (chan))]
      (go (while true
            (alt! text-change
                  ([v]
                   (swap! debug assoc :text v))
                  selection-change
                  ([{:keys [old new]}] (swap! debug assoc :selection-old old :selection-new new)))
            )))
  )


(defn init! []
  (init-events!)
  (println "Initialized"))

(aset js/window "onload" init!)

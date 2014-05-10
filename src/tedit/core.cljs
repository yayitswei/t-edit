(ns tedit.core
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string]
            [cljs.core.async :as async
             :refer [>! <! alts! chan sliding-buffer put! close!]])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]]))

(enable-console-print!)

;; mouse events

(def mouse-move-ch
  (chan (sliding-buffer 1)))

(def mouse-down-ch
  (chan (sliding-buffer 1)))

(def mouse-up-ch
  (chan (sliding-buffer 1)))

(js/window.addEventListener "mousedown" #(put! mouse-down-ch %))
(js/window.addEventListener "mouseup"   #(put! mouse-up-ch   %))
(js/window.addEventListener "mousemove" #(put! mouse-move-ch %))

;; state

(defonce config {:canvas-width 500
                 :canvas-height 750})

(defonce component (atom {:x 250 :y 100
                          :text "test long text here we go"
                          :dragging false
                          :font-size 25
                          :highlight true}))

(defonce comms {:mouse-move (async/mult mouse-move-ch)
                :mouse-down (async/mult mouse-down-ch)
                :mouse-up (async/mult mouse-up-ch)})

(defonce transients (atom {}))

(defonce highlighted (atom true))
(defonce selected (atom false))

(defonce debug (atom {}))

;; drag fns

(defn mouse-delta [e mouse-start-state]
  [(- (.. e -pageX) (:x mouse-start-state))
   (- (.. e -pageY) (:y mouse-start-state))])

(defn drag-start [e]
  (reset! transients {:mouse-start-state {:x (.-pageX e) :y (.-pageY e)}
                      :elem-start-state @component})
  (swap! component merge {:dragging true}))

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
  (when (:dragging @component)
    (swap! component merge (e->translation e @transients))))

(defn drag-end [e]
  (when (:dragging @component)
    (swap! component merge (e->translation e @transients) {:dragging false})))

(defn resize-start [e]
  (reset! transients {:mouse-start-state {:x (.-pageX e) :y (.-pageY e)}
                      :elem-start-state @component})
  (swap! component merge {:resizing true}))

(defn resize-move [e]
  (when (:resizing @component)
    (swap! component merge (e->scale e @transients))))

(defn resize-end [e]
  (when (:resizing @component)
    (swap! component merge (e->scale e @transients) {:resizing false})))

(defn debug-component []
  [:div
   (for [[prop v] @debug]
     [:div
      [:span (name prop) ": "]
      [:span v]])])

(defn rect-component []
  (let [move (async/tap (:mouse-move comms) (chan))
        up (async/tap (:mouse-up comms) (chan))]
    (go (while true
          (alt! move ([e] (drag-move e))
                up ([e] (drag-end e)))))

    (fn []
      [:g
       [:text {:on-mouse-down (fn [e]
                                (.preventDefault e)
                                (.stopPropagation e)
                                (drag-start e))

               :on-mouse-up (fn [e]
                              (drag-end e)
                              (reset! selected true))

               :on-mouse-over (fn [e] (reset! highlighted true))
               :on-mouse-out (fn [e] (reset! highlighted false))

               :x (:x @component)
               :y (:y @component)
               :text-anchor "middle"
               :height (:height @component)
               :width (:width @component)
               :style {:border "black"
                       :font-size (:font-size @component)}}
        [:tspan (:text @component)]]])))


(defn resize-button []
  (let [move (async/tap (:mouse-move comms) (chan))
        up (async/tap (:mouse-up comms) (chan))]
    (go (while true
          (alt! move ([e] (resize-move e))
                up ([e] (resize-end e)))))
    (fn []
      (let [bb (text-bounding-box @component)]
        [:image {:on-mouse-down (fn [e]
                                  (.preventDefault e)
                                  (.stopPropagation e)
                                  (resize-start e))

                 :on-mouse-up (fn [e] (resize-end e))

                 :xlink-href "scale.png"

                 :x (+ (:x bb) (:width bb))
                 :y (+ (:y bb) (:height bb))
                 :height 20 :width 20}]))))

(defn controls-component []
  (fn [] [:g
          [:rect (merge (text-bounding-box @component)
                        {:fill :none
                         :stroke-dasharray "4,3"
                         :stroke "#000000"})]
          [resize-button]]))

(defn highlight-box []
  [:rect (merge (text-bounding-box @component)
                {:fill :none
                 :stroke "#000000"})])

(defn canvas-component []
  [:div
   [:h1 "tEdit"]
   [debug-component]
   [:div {:style {:border "1px solid black" :display :inline-block}}
    [:svg {:width (:canvas-width config) :height (:canvas-height config)
           :on-mouse-down
           (fn [e] (reset! selected false))}
     (when @selected [controls-component])
     (when (and @highlighted (not @selected)) [highlight-box])
     [rect-component]]]])

(reagent/render-component [canvas-component] (get-element "editor"))

;; global select listener

#_(let [up (async/tap (:mouse-up comms) (chan))]
  (go (while true
        (alt! up ([e] (reset! selected false))))))


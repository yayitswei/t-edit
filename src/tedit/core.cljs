(ns tedit.core
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string]
            [cljs.core.async :as async
             :refer [>! <! alts! chan sliding-buffer put! close!]])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]]))

(enable-console-print!)

;; mouse events

;; Overcome some of the browser limitations around DnD
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

(def config {:canvas-width 500
             :canvas-height 500})

(def component (atom {:x 100 :y 100
                      :height 50 :width 200
                      :text "test long text here we go"
                      :dragging false :rel-x 0 :rel-y 0
                      :highlight true}))

(def comms {:mouse-move (async/mult mouse-move-ch)
            :mouse-down (async/mult mouse-down-ch)
            :mouse-up (async/mult mouse-up-ch)})

(def transients (atom {}))

(def highlighted (atom true))
(def selected (atom false))

(def debug (atom {}))

;; drag fns

(defn mouse-delta [e mouse-start-state]
  [(- (.. e -pageX) (:x mouse-start-state))
   (- (.. e -pageY) (:y mouse-start-state))])

(defn drag-start [e]
  (reset! transients {:mouse-start-state {:x (.-pageX e) :y (.-pageY e)}
                      :elem-start-state @component})
  (swap! component merge {:dragging true}))

(defn constrain [v min-v max-v]
  (cond (< v min-v) min-v
        (> v max-v) max-v
        :else v))

(defn e->translation [e {:keys [mouse-start-state elem-start-state]}]
  (let [[delta-x delta-y] (mouse-delta e mouse-start-state)]
    {:x (constrain (+ (:x elem-start-state) delta-x)
                   (- (/ (:width elem-start-state) 2))
                   (- (:canvas-width config) (/ (:width elem-start-state) 2)))
     :y (constrain (+ (:y elem-start-state) delta-y)
                   (- (/ (:height elem-start-state) 2))
                   (- (:canvas-height config) (/ (:height elem-start-state) 2)))}))

(defn e->scale [e {:keys [mouse-start-state elem-start-state]}]
  (let [[delta-x delta-y] (mouse-delta e mouse-start-state)]
    {:height (+ (:height elem-start-state) delta-y)
     :width (+ (:width elem-start-state) delta-x)}))

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

(defn resize-button []
  (let [move (async/tap (:mouse-move comms) (chan))
        up (async/tap (:mouse-up comms) (chan))]
    (go (while true
          (alt! move ([e] (resize-move e))
                up ([e] (resize-end e)))))
    (fn []
      [:image {:on-mouse-down (fn [e]
                                (.preventDefault e)
                                (.stopPropagation e)
                                (resize-start e))

               :on-mouse-up (fn [e] (resize-end e))

               :xlink-href "scale.png"

               :x (+ (:x @component) (:width @component))
               :y (+ (:y @component) (:height @component))
               :height 20 :width 20}])))

(defn transform-matrix [elem]
  [(:scale-x elem 1) 0 0 (:scale-y elem 1) (:x elem 0) (:y elem 0)])

(defn transform-str [& args]
  (str "matrix(" (clojure.string/join "," args) ")"))

(defn get-element [id] (. js/document (getElementById id)))

(def text-padding 20)

(defn text-transform [text width height]
  (let [text-node (get-element "measure-text")
        _ (aset text-node "textContent" text)
        bb (.getBBox text-node)
        width-transform (/ (- width text-padding) (.-width bb))
        height-transform (/ (- height text-padding) (.-height bb))
        scale-value (min width-transform height-transform)
        new-width (* scale-value (.-width bb))
        new-height (* scale-value (.-height bb))
        x-offset (/ width 2)
        y-offset (+ (/ height 2) (/ new-height 2))]
    (reset! debug {:width-transform width-transform
                   :height-transform height-transform
                   :new-width new-width
                   :new-height new-height
                   :x-offset x-offset
                   :y-offset y-offset})
    {:scale-x scale-value
     :scale-y scale-value
     :x x-offset
     :y y-offset}))

(defn text-transform-str [{:keys [width height text]}]
  (apply transform-str (transform-matrix (text-transform text width height))))

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
       [:svg {
              :on-mouse-down (fn [e]
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
              :style {:border "black"}}
        [:text {:transform (text-transform-str @component)
                :dominant-baseline "hanging"} (:text @component)]]])))

(defn controls-component []
  (fn [] [:g
          [:rect {:fill :none
                  :stroke-dasharray "4,3"
                  :stroke "#000000"
                  :x (:x @component)
                  :y (:y @component)
                  :width (:width @component)
                  :height (:height @component)
;          :style {:pointer-events :none}
                  }]
          [resize-button]]))

(defn highlight-box []
  [:rect {:fill :none
          :stroke "#000000"
          :x (:x @component)
          :y (:y @component)
          :width (:width @component)
          :height (:height @component)
;          :style {:pointer-events :none}
          }])

(defn canvas-component []
  [:div
   [:h1 "TEdit"]
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


(ns tedit.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(println "Hello world!!!")

(def component (atom {:x 10 :y 10
                      :height 100 :width 100}))

(def my-html (atom ""))

(defn rect-component []
  [:rect {;:on-click #(swap! component update-in [:x] inc 10)
          :on-mouse-down #(swap! component update-in [:y] + 10)
          :on-mouse-move #(println "moved")
          :x (get-in @component [:x]) :y (get-in @component [:y])
          :height 200 :width 100
          :style {:stroke "#ff0000" :fill "#ff0000"}}])

(def draggable-component
  (with-meta rect-component
    {:component-did-mount (fn [this] (println "BLAH")
                            (reset! my-html (.-innerHTML (reagent/dom-node this))))
     :component-did-update (fn [this] (println "HI, mounted"))}))

(defn canvas-component []
  [:div
   [:h1 "TEdit"]
   [:svg
    (draggable-component)]])

(reagent/render-component [canvas-component] (.-body js/document))

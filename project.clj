(defproject tedit "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [reagent "0.4.2"]
                 [org.clojure/core.async "0.1.301.0-deb34a-alpha"]
                 [org.clojure/clojurescript "0.0-2202"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "tedit"
              :source-paths ["src"]
              :compiler {
                :output-to "tedit.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})

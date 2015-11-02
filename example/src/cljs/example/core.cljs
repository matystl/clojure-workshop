(ns example.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [example.handlers]
              [example.subs]
              [example.views :as views]))


(def whole-db-dont-use (re-frame/subscribe [:whole-db-dont-use]))

(enable-console-print!)


(defn mount-root [] ; [views/main-panel]
  (reagent/render [views/comp-with-state]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))

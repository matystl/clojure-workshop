(ns example.views
    (:require [re-frame.core :as re-frame]))

(defn main-panel []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [:div "Hello from " @name])))


(defn counter [state-from-props]
  [:div "Value of counter is:" state-from-props])


(defn my-first-component [{:keys [name address]}]
  [:div "This is my component " name address])


(defn comp-with-state []
  (let [counter (re-frame/subscribe [:counter])]
    (fn []
      [:div
       "With local state Value of counter is:"  @counter
       [:button {:on-click #(re-frame/dispatch [:inc-counter-by 1])} "inc by 1"]
       [:button {:on-click #(re-frame/dispatch [:inc-counter-by 2])} "inc by 2"]
       ])))


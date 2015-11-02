(ns example.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :name
 (fn [db]
   (reaction (:name @db))))


(re-frame/register-sub
 :counter
 (fn [db]
   (reaction (:counter @db))))

(re-frame/register-sub
 :whole-db-dont-use
 (fn [db]
   db))

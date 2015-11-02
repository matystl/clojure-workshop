(ns example.handlers
    (:require [re-frame.core :as re-frame]
              [example.db :as db]))


[:action-type arguments]

(re-frame/register-handler
 :initialize-db
 (fn  [db [type args]]
   db/default-db))



(re-frame/register-handler
 :inc-counter-by
 (fn  [db [_ by]]
   (update-in db [:counter] + by)))

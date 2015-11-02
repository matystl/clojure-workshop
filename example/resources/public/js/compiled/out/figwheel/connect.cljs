(ns figwheel.connect (:require [example.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload (fn [& x] (if js/example.core.mount-root (apply js/example.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'example.core/mount-root' is missing"))), :build-id "dev"})


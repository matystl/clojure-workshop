// Compiled by ClojureScript 0.0-3211 {}
goog.provide('example.core');
goog.require('cljs.core');
goog.require('example.views');
goog.require('example.subs');
goog.require('example.handlers');
goog.require('re_frame.core');
goog.require('reagent.core');
example.core.whole_db_dont_use = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whole-db-dont-use","whole-db-dont-use",-963225719)], null));
cljs.core.enable_console_print_BANG_.call(null);
example.core.mount_root = (function example$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.views.comp_with_state], null),document.getElementById("app"));
});
example.core.init = (function example$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return example.core.mount_root.call(null);
});
goog.exportSymbol('example.core.init', example.core.init);

//# sourceMappingURL=core.js.map?rel=1446472443948
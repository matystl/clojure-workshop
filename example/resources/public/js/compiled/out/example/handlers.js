// Compiled by ClojureScript 0.0-3211 {}
goog.provide('example.handlers');
goog.require('cljs.core');
goog.require('example.db');
goog.require('re_frame.core');
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),example.handlers.arguments], null);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (db,p__21497){
var vec__21498 = p__21497;
var type = cljs.core.nth.call(null,vec__21498,(0),null);
var args = cljs.core.nth.call(null,vec__21498,(1),null);
return example.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"inc-counter-by","inc-counter-by",-851838045),(function (db,p__21499){
var vec__21500 = p__21499;
var _ = cljs.core.nth.call(null,vec__21500,(0),null);
var by = cljs.core.nth.call(null,vec__21500,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counter","counter",804008177)], null),cljs.core._PLUS_,by);
}));

//# sourceMappingURL=handlers.js.map?rel=1446471602006
// Compiled by ClojureScript 0.0-3211 {}
goog.provide('example.views');
goog.require('cljs.core');
goog.require('re_frame.core');
example.views.main_panel = (function example$views$main_panel(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
return ((function (name){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello from ",cljs.core.deref.call(null,name)], null);
});
;})(name))
});
example.views.counter = (function example$views$counter(state_from_props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Value of counter is:",state_from_props], null);
});
example.views.my_first_component = (function example$views$my_first_component(p__21520){
var map__21522 = p__21520;
var map__21522__$1 = ((cljs.core.seq_QMARK_.call(null,map__21522))?cljs.core.apply.call(null,cljs.core.hash_map,map__21522):map__21522);
var address = cljs.core.get.call(null,map__21522__$1,new cljs.core.Keyword(null,"address","address",559499426));
var name = cljs.core.get.call(null,map__21522__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is my component ",name,address], null);
});
example.views.comp_with_state = (function example$views$comp_with_state(){
var counter = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counter","counter",804008177)], null));
return ((function (counter){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"With local state Value of counter is:",cljs.core.deref.call(null,counter),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (counter){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-counter-by","inc-counter-by",-851838045),(1)], null));
});})(counter))
], null),"inc by 1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (counter){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-counter-by","inc-counter-by",-851838045),(2)], null));
});})(counter))
], null),"inc by 2"], null)], null);
});
;})(counter))
});

//# sourceMappingURL=views.js.map?rel=1446471764053
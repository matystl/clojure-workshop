// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28384__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28384 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28385__i = 0, G__28385__a = new Array(arguments.length -  0);
while (G__28385__i < G__28385__a.length) {G__28385__a[G__28385__i] = arguments[G__28385__i + 0]; ++G__28385__i;}
  args = new cljs.core.IndexedSeq(G__28385__a,0);
} 
return G__28384__delegate.call(this,args);};
G__28384.cljs$lang$maxFixedArity = 0;
G__28384.cljs$lang$applyTo = (function (arglist__28386){
var args = cljs.core.seq(arglist__28386);
return G__28384__delegate(args);
});
G__28384.cljs$core$IFn$_invoke$arity$variadic = G__28384__delegate;
return G__28384;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28387){
var map__28389 = p__28387;
var map__28389__$1 = ((cljs.core.seq_QMARK_.call(null,map__28389))?cljs.core.apply.call(null,cljs.core.hash_map,map__28389):map__28389);
var class$ = cljs.core.get.call(null,map__28389__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__28389__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18160__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18148__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18148__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18148__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21384__auto___28518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___28518,ch){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___28518,ch){
return (function (state_28492){
var state_val_28493 = (state_28492[(1)]);
if((state_val_28493 === (7))){
var inst_28488 = (state_28492[(2)]);
var state_28492__$1 = state_28492;
var statearr_28494_28519 = state_28492__$1;
(statearr_28494_28519[(2)] = inst_28488);

(statearr_28494_28519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (1))){
var state_28492__$1 = state_28492;
var statearr_28495_28520 = state_28492__$1;
(statearr_28495_28520[(2)] = null);

(statearr_28495_28520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (4))){
var inst_28456 = (state_28492[(7)]);
var inst_28456__$1 = (state_28492[(2)]);
var state_28492__$1 = (function (){var statearr_28496 = state_28492;
(statearr_28496[(7)] = inst_28456__$1);

return statearr_28496;
})();
if(cljs.core.truth_(inst_28456__$1)){
var statearr_28497_28521 = state_28492__$1;
(statearr_28497_28521[(1)] = (5));

} else {
var statearr_28498_28522 = state_28492__$1;
(statearr_28498_28522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (13))){
var state_28492__$1 = state_28492;
var statearr_28499_28523 = state_28492__$1;
(statearr_28499_28523[(2)] = null);

(statearr_28499_28523[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (6))){
var state_28492__$1 = state_28492;
var statearr_28500_28524 = state_28492__$1;
(statearr_28500_28524[(2)] = null);

(statearr_28500_28524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (3))){
var inst_28490 = (state_28492[(2)]);
var state_28492__$1 = state_28492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28492__$1,inst_28490);
} else {
if((state_val_28493 === (12))){
var inst_28463 = (state_28492[(8)]);
var inst_28476 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28463);
var inst_28477 = cljs.core.first.call(null,inst_28476);
var inst_28478 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28477);
var inst_28479 = console.warn("Figwheel: Not loading code with warnings - ",inst_28478);
var state_28492__$1 = state_28492;
var statearr_28501_28525 = state_28492__$1;
(statearr_28501_28525[(2)] = inst_28479);

(statearr_28501_28525[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (2))){
var state_28492__$1 = state_28492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28492__$1,(4),ch);
} else {
if((state_val_28493 === (11))){
var inst_28472 = (state_28492[(2)]);
var state_28492__$1 = state_28492;
var statearr_28502_28526 = state_28492__$1;
(statearr_28502_28526[(2)] = inst_28472);

(statearr_28502_28526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (9))){
var inst_28462 = (state_28492[(9)]);
var inst_28474 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28462,opts);
var state_28492__$1 = state_28492;
if(cljs.core.truth_(inst_28474)){
var statearr_28503_28527 = state_28492__$1;
(statearr_28503_28527[(1)] = (12));

} else {
var statearr_28504_28528 = state_28492__$1;
(statearr_28504_28528[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (5))){
var inst_28462 = (state_28492[(9)]);
var inst_28456 = (state_28492[(7)]);
var inst_28458 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28459 = (new cljs.core.PersistentArrayMap(null,2,inst_28458,null));
var inst_28460 = (new cljs.core.PersistentHashSet(null,inst_28459,null));
var inst_28461 = figwheel.client.focus_msgs.call(null,inst_28460,inst_28456);
var inst_28462__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28461);
var inst_28463 = cljs.core.first.call(null,inst_28461);
var inst_28464 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28462__$1,opts);
var state_28492__$1 = (function (){var statearr_28505 = state_28492;
(statearr_28505[(8)] = inst_28463);

(statearr_28505[(9)] = inst_28462__$1);

return statearr_28505;
})();
if(cljs.core.truth_(inst_28464)){
var statearr_28506_28529 = state_28492__$1;
(statearr_28506_28529[(1)] = (8));

} else {
var statearr_28507_28530 = state_28492__$1;
(statearr_28507_28530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (14))){
var inst_28482 = (state_28492[(2)]);
var state_28492__$1 = state_28492;
var statearr_28508_28531 = state_28492__$1;
(statearr_28508_28531[(2)] = inst_28482);

(statearr_28508_28531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (10))){
var inst_28484 = (state_28492[(2)]);
var state_28492__$1 = (function (){var statearr_28509 = state_28492;
(statearr_28509[(10)] = inst_28484);

return statearr_28509;
})();
var statearr_28510_28532 = state_28492__$1;
(statearr_28510_28532[(2)] = null);

(statearr_28510_28532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (8))){
var inst_28463 = (state_28492[(8)]);
var inst_28466 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28467 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28463);
var inst_28468 = cljs.core.async.timeout.call(null,(1000));
var inst_28469 = [inst_28467,inst_28468];
var inst_28470 = (new cljs.core.PersistentVector(null,2,(5),inst_28466,inst_28469,null));
var state_28492__$1 = state_28492;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28492__$1,(11),inst_28470);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21384__auto___28518,ch))
;
return ((function (switch__21322__auto__,c__21384__auto___28518,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____0 = (function (){
var statearr_28514 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28514[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__);

(statearr_28514[(1)] = (1));

return statearr_28514;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____1 = (function (state_28492){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e28515){if((e28515 instanceof Object)){
var ex__21326__auto__ = e28515;
var statearr_28516_28533 = state_28492;
(statearr_28516_28533[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28534 = state_28492;
state_28492 = G__28534;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__ = function(state_28492){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____1.call(this,state_28492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21323__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___28518,ch))
})();
var state__21386__auto__ = (function (){var statearr_28517 = f__21385__auto__.call(null);
(statearr_28517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___28518);

return statearr_28517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___28518,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28535_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28535_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28542 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28542){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28540 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28541 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28540,_STAR_print_newline_STAR_28541,base_path_28542){
return (function() { 
var G__28543__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28544__i = 0, G__28544__a = new Array(arguments.length -  0);
while (G__28544__i < G__28544__a.length) {G__28544__a[G__28544__i] = arguments[G__28544__i + 0]; ++G__28544__i;}
  args = new cljs.core.IndexedSeq(G__28544__a,0);
} 
return G__28543__delegate.call(this,args);};
G__28543.cljs$lang$maxFixedArity = 0;
G__28543.cljs$lang$applyTo = (function (arglist__28545){
var args = cljs.core.seq(arglist__28545);
return G__28543__delegate(args);
});
G__28543.cljs$core$IFn$_invoke$arity$variadic = G__28543__delegate;
return G__28543;
})()
;})(_STAR_print_fn_STAR_28540,_STAR_print_newline_STAR_28541,base_path_28542))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28541;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28540;
}}catch (e28539){if((e28539 instanceof Error)){
var e = e28539;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28542], null));
} else {
var e = e28539;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28542))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28546){
var map__28551 = p__28546;
var map__28551__$1 = ((cljs.core.seq_QMARK_.call(null,map__28551))?cljs.core.apply.call(null,cljs.core.hash_map,map__28551):map__28551);
var opts = map__28551__$1;
var build_id = cljs.core.get.call(null,map__28551__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28551,map__28551__$1,opts,build_id){
return (function (p__28552){
var vec__28553 = p__28552;
var map__28554 = cljs.core.nth.call(null,vec__28553,(0),null);
var map__28554__$1 = ((cljs.core.seq_QMARK_.call(null,map__28554))?cljs.core.apply.call(null,cljs.core.hash_map,map__28554):map__28554);
var msg = map__28554__$1;
var msg_name = cljs.core.get.call(null,map__28554__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28553,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28553,map__28554,map__28554__$1,msg,msg_name,_,map__28551,map__28551__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28553,map__28554,map__28554__$1,msg,msg_name,_,map__28551,map__28551__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28551,map__28551__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28558){
var vec__28559 = p__28558;
var map__28560 = cljs.core.nth.call(null,vec__28559,(0),null);
var map__28560__$1 = ((cljs.core.seq_QMARK_.call(null,map__28560))?cljs.core.apply.call(null,cljs.core.hash_map,map__28560):map__28560);
var msg = map__28560__$1;
var msg_name = cljs.core.get.call(null,map__28560__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28559,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28561){
var map__28569 = p__28561;
var map__28569__$1 = ((cljs.core.seq_QMARK_.call(null,map__28569))?cljs.core.apply.call(null,cljs.core.hash_map,map__28569):map__28569);
var on_compile_fail = cljs.core.get.call(null,map__28569__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__28569__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__28569,map__28569__$1,on_compile_fail,on_compile_warning){
return (function (p__28570){
var vec__28571 = p__28570;
var map__28572 = cljs.core.nth.call(null,vec__28571,(0),null);
var map__28572__$1 = ((cljs.core.seq_QMARK_.call(null,map__28572))?cljs.core.apply.call(null,cljs.core.hash_map,map__28572):map__28572);
var msg = map__28572__$1;
var msg_name = cljs.core.get.call(null,map__28572__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28571,(1));
var pred__28573 = cljs.core._EQ_;
var expr__28574 = msg_name;
if(cljs.core.truth_(pred__28573.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28574))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28573.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28574))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28569,map__28569__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__,msg_hist,msg_names,msg){
return (function (state_28775){
var state_val_28776 = (state_28775[(1)]);
if((state_val_28776 === (7))){
var inst_28709 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
var statearr_28777_28818 = state_28775__$1;
(statearr_28777_28818[(2)] = inst_28709);

(statearr_28777_28818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (20))){
var inst_28737 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28775__$1 = state_28775;
if(cljs.core.truth_(inst_28737)){
var statearr_28778_28819 = state_28775__$1;
(statearr_28778_28819[(1)] = (22));

} else {
var statearr_28779_28820 = state_28775__$1;
(statearr_28779_28820[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (27))){
var inst_28749 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28750 = figwheel.client.heads_up.display_warning.call(null,inst_28749);
var state_28775__$1 = state_28775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28775__$1,(30),inst_28750);
} else {
if((state_val_28776 === (1))){
var inst_28697 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28775__$1 = state_28775;
if(cljs.core.truth_(inst_28697)){
var statearr_28780_28821 = state_28775__$1;
(statearr_28780_28821[(1)] = (2));

} else {
var statearr_28781_28822 = state_28775__$1;
(statearr_28781_28822[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (24))){
var inst_28765 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
var statearr_28782_28823 = state_28775__$1;
(statearr_28782_28823[(2)] = inst_28765);

(statearr_28782_28823[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (4))){
var inst_28773 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28775__$1,inst_28773);
} else {
if((state_val_28776 === (15))){
var inst_28725 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28726 = figwheel.client.format_messages.call(null,inst_28725);
var inst_28727 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28728 = figwheel.client.heads_up.display_error.call(null,inst_28726,inst_28727);
var state_28775__$1 = state_28775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28775__$1,(18),inst_28728);
} else {
if((state_val_28776 === (21))){
var inst_28767 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
var statearr_28783_28824 = state_28775__$1;
(statearr_28783_28824[(2)] = inst_28767);

(statearr_28783_28824[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (31))){
var inst_28756 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28775__$1 = state_28775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28775__$1,(34),inst_28756);
} else {
if((state_val_28776 === (32))){
var state_28775__$1 = state_28775;
var statearr_28784_28825 = state_28775__$1;
(statearr_28784_28825[(2)] = null);

(statearr_28784_28825[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (33))){
var inst_28761 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
var statearr_28785_28826 = state_28775__$1;
(statearr_28785_28826[(2)] = inst_28761);

(statearr_28785_28826[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (13))){
var inst_28715 = (state_28775[(2)]);
var inst_28716 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28717 = figwheel.client.format_messages.call(null,inst_28716);
var inst_28718 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28719 = figwheel.client.heads_up.display_error.call(null,inst_28717,inst_28718);
var state_28775__$1 = (function (){var statearr_28786 = state_28775;
(statearr_28786[(7)] = inst_28715);

return statearr_28786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28775__$1,(14),inst_28719);
} else {
if((state_val_28776 === (22))){
var inst_28739 = figwheel.client.heads_up.clear.call(null);
var state_28775__$1 = state_28775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28775__$1,(25),inst_28739);
} else {
if((state_val_28776 === (29))){
var inst_28763 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
var statearr_28787_28827 = state_28775__$1;
(statearr_28787_28827[(2)] = inst_28763);

(statearr_28787_28827[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (6))){
var inst_28705 = figwheel.client.heads_up.clear.call(null);
var state_28775__$1 = state_28775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28775__$1,(9),inst_28705);
} else {
if((state_val_28776 === (28))){
var inst_28754 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28775__$1 = state_28775;
if(cljs.core.truth_(inst_28754)){
var statearr_28788_28828 = state_28775__$1;
(statearr_28788_28828[(1)] = (31));

} else {
var statearr_28789_28829 = state_28775__$1;
(statearr_28789_28829[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (25))){
var inst_28741 = (state_28775[(2)]);
var inst_28742 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28743 = figwheel.client.heads_up.display_warning.call(null,inst_28742);
var state_28775__$1 = (function (){var statearr_28790 = state_28775;
(statearr_28790[(8)] = inst_28741);

return statearr_28790;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28775__$1,(26),inst_28743);
} else {
if((state_val_28776 === (34))){
var inst_28758 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
var statearr_28791_28830 = state_28775__$1;
(statearr_28791_28830[(2)] = inst_28758);

(statearr_28791_28830[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (17))){
var inst_28769 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
var statearr_28792_28831 = state_28775__$1;
(statearr_28792_28831[(2)] = inst_28769);

(statearr_28792_28831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (3))){
var inst_28711 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28775__$1 = state_28775;
if(cljs.core.truth_(inst_28711)){
var statearr_28793_28832 = state_28775__$1;
(statearr_28793_28832[(1)] = (10));

} else {
var statearr_28794_28833 = state_28775__$1;
(statearr_28794_28833[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (12))){
var inst_28771 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
var statearr_28795_28834 = state_28775__$1;
(statearr_28795_28834[(2)] = inst_28771);

(statearr_28795_28834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (2))){
var inst_28699 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28775__$1 = state_28775;
if(cljs.core.truth_(inst_28699)){
var statearr_28796_28835 = state_28775__$1;
(statearr_28796_28835[(1)] = (5));

} else {
var statearr_28797_28836 = state_28775__$1;
(statearr_28797_28836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (23))){
var inst_28747 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28775__$1 = state_28775;
if(cljs.core.truth_(inst_28747)){
var statearr_28798_28837 = state_28775__$1;
(statearr_28798_28837[(1)] = (27));

} else {
var statearr_28799_28838 = state_28775__$1;
(statearr_28799_28838[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (19))){
var inst_28734 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28735 = figwheel.client.heads_up.append_message.call(null,inst_28734);
var state_28775__$1 = state_28775;
var statearr_28800_28839 = state_28775__$1;
(statearr_28800_28839[(2)] = inst_28735);

(statearr_28800_28839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (11))){
var inst_28723 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28775__$1 = state_28775;
if(cljs.core.truth_(inst_28723)){
var statearr_28801_28840 = state_28775__$1;
(statearr_28801_28840[(1)] = (15));

} else {
var statearr_28802_28841 = state_28775__$1;
(statearr_28802_28841[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (9))){
var inst_28707 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
var statearr_28803_28842 = state_28775__$1;
(statearr_28803_28842[(2)] = inst_28707);

(statearr_28803_28842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (5))){
var inst_28701 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28775__$1 = state_28775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28775__$1,(8),inst_28701);
} else {
if((state_val_28776 === (14))){
var inst_28721 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
var statearr_28804_28843 = state_28775__$1;
(statearr_28804_28843[(2)] = inst_28721);

(statearr_28804_28843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (26))){
var inst_28745 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
var statearr_28805_28844 = state_28775__$1;
(statearr_28805_28844[(2)] = inst_28745);

(statearr_28805_28844[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (16))){
var inst_28732 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28775__$1 = state_28775;
if(cljs.core.truth_(inst_28732)){
var statearr_28806_28845 = state_28775__$1;
(statearr_28806_28845[(1)] = (19));

} else {
var statearr_28807_28846 = state_28775__$1;
(statearr_28807_28846[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (30))){
var inst_28752 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
var statearr_28808_28847 = state_28775__$1;
(statearr_28808_28847[(2)] = inst_28752);

(statearr_28808_28847[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (10))){
var inst_28713 = figwheel.client.heads_up.clear.call(null);
var state_28775__$1 = state_28775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28775__$1,(13),inst_28713);
} else {
if((state_val_28776 === (18))){
var inst_28730 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
var statearr_28809_28848 = state_28775__$1;
(statearr_28809_28848[(2)] = inst_28730);

(statearr_28809_28848[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (8))){
var inst_28703 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
var statearr_28810_28849 = state_28775__$1;
(statearr_28810_28849[(2)] = inst_28703);

(statearr_28810_28849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21384__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21322__auto__,c__21384__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____0 = (function (){
var statearr_28814 = [null,null,null,null,null,null,null,null,null];
(statearr_28814[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__);

(statearr_28814[(1)] = (1));

return statearr_28814;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____1 = (function (state_28775){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e28815){if((e28815 instanceof Object)){
var ex__21326__auto__ = e28815;
var statearr_28816_28850 = state_28775;
(statearr_28816_28850[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28851 = state_28775;
state_28775 = G__28851;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__ = function(state_28775){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____1.call(this,state_28775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__,msg_hist,msg_names,msg))
})();
var state__21386__auto__ = (function (){var statearr_28817 = f__21385__auto__.call(null);
(statearr_28817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_28817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__,msg_hist,msg_names,msg))
);

return c__21384__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21384__auto___28914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___28914,ch){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___28914,ch){
return (function (state_28897){
var state_val_28898 = (state_28897[(1)]);
if((state_val_28898 === (8))){
var inst_28889 = (state_28897[(2)]);
var state_28897__$1 = (function (){var statearr_28899 = state_28897;
(statearr_28899[(7)] = inst_28889);

return statearr_28899;
})();
var statearr_28900_28915 = state_28897__$1;
(statearr_28900_28915[(2)] = null);

(statearr_28900_28915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28898 === (7))){
var inst_28893 = (state_28897[(2)]);
var state_28897__$1 = state_28897;
var statearr_28901_28916 = state_28897__$1;
(statearr_28901_28916[(2)] = inst_28893);

(statearr_28901_28916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28898 === (6))){
var state_28897__$1 = state_28897;
var statearr_28902_28917 = state_28897__$1;
(statearr_28902_28917[(2)] = null);

(statearr_28902_28917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28898 === (5))){
var inst_28885 = (state_28897[(8)]);
var inst_28887 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28885);
var state_28897__$1 = state_28897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28897__$1,(8),inst_28887);
} else {
if((state_val_28898 === (4))){
var inst_28885 = (state_28897[(8)]);
var inst_28885__$1 = (state_28897[(2)]);
var state_28897__$1 = (function (){var statearr_28903 = state_28897;
(statearr_28903[(8)] = inst_28885__$1);

return statearr_28903;
})();
if(cljs.core.truth_(inst_28885__$1)){
var statearr_28904_28918 = state_28897__$1;
(statearr_28904_28918[(1)] = (5));

} else {
var statearr_28905_28919 = state_28897__$1;
(statearr_28905_28919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28898 === (3))){
var inst_28895 = (state_28897[(2)]);
var state_28897__$1 = state_28897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28897__$1,inst_28895);
} else {
if((state_val_28898 === (2))){
var state_28897__$1 = state_28897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28897__$1,(4),ch);
} else {
if((state_val_28898 === (1))){
var state_28897__$1 = state_28897;
var statearr_28906_28920 = state_28897__$1;
(statearr_28906_28920[(2)] = null);

(statearr_28906_28920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21384__auto___28914,ch))
;
return ((function (switch__21322__auto__,c__21384__auto___28914,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21323__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21323__auto____0 = (function (){
var statearr_28910 = [null,null,null,null,null,null,null,null,null];
(statearr_28910[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21323__auto__);

(statearr_28910[(1)] = (1));

return statearr_28910;
});
var figwheel$client$heads_up_plugin_$_state_machine__21323__auto____1 = (function (state_28897){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e28911){if((e28911 instanceof Object)){
var ex__21326__auto__ = e28911;
var statearr_28912_28921 = state_28897;
(statearr_28912_28921[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28922 = state_28897;
state_28897 = G__28922;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21323__auto__ = function(state_28897){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21323__auto____1.call(this,state_28897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21323__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21323__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___28914,ch))
})();
var state__21386__auto__ = (function (){var statearr_28913 = f__21385__auto__.call(null);
(statearr_28913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___28914);

return statearr_28913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___28914,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_28943){
var state_val_28944 = (state_28943[(1)]);
if((state_val_28944 === (2))){
var inst_28940 = (state_28943[(2)]);
var inst_28941 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28943__$1 = (function (){var statearr_28945 = state_28943;
(statearr_28945[(7)] = inst_28940);

return statearr_28945;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28943__$1,inst_28941);
} else {
if((state_val_28944 === (1))){
var inst_28938 = cljs.core.async.timeout.call(null,(3000));
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28943__$1,(2),inst_28938);
} else {
return null;
}
}
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____0 = (function (){
var statearr_28949 = [null,null,null,null,null,null,null,null];
(statearr_28949[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__);

(statearr_28949[(1)] = (1));

return statearr_28949;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____1 = (function (state_28943){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e28950){if((e28950 instanceof Object)){
var ex__21326__auto__ = e28950;
var statearr_28951_28953 = state_28943;
(statearr_28951_28953[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28954 = state_28943;
state_28943 = G__28954;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__ = function(state_28943){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____1.call(this,state_28943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21323__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_28952 = f__21385__auto__.call(null);
(statearr_28952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_28952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28955){
var map__28961 = p__28955;
var map__28961__$1 = ((cljs.core.seq_QMARK_.call(null,map__28961))?cljs.core.apply.call(null,cljs.core.hash_map,map__28961):map__28961);
var ed = map__28961__$1;
var cause = cljs.core.get.call(null,map__28961__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__28961__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__28961__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28962_28966 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28963_28967 = null;
var count__28964_28968 = (0);
var i__28965_28969 = (0);
while(true){
if((i__28965_28969 < count__28964_28968)){
var msg_28970 = cljs.core._nth.call(null,chunk__28963_28967,i__28965_28969);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28970);

var G__28971 = seq__28962_28966;
var G__28972 = chunk__28963_28967;
var G__28973 = count__28964_28968;
var G__28974 = (i__28965_28969 + (1));
seq__28962_28966 = G__28971;
chunk__28963_28967 = G__28972;
count__28964_28968 = G__28973;
i__28965_28969 = G__28974;
continue;
} else {
var temp__4126__auto___28975 = cljs.core.seq.call(null,seq__28962_28966);
if(temp__4126__auto___28975){
var seq__28962_28976__$1 = temp__4126__auto___28975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28962_28976__$1)){
var c__18945__auto___28977 = cljs.core.chunk_first.call(null,seq__28962_28976__$1);
var G__28978 = cljs.core.chunk_rest.call(null,seq__28962_28976__$1);
var G__28979 = c__18945__auto___28977;
var G__28980 = cljs.core.count.call(null,c__18945__auto___28977);
var G__28981 = (0);
seq__28962_28966 = G__28978;
chunk__28963_28967 = G__28979;
count__28964_28968 = G__28980;
i__28965_28969 = G__28981;
continue;
} else {
var msg_28982 = cljs.core.first.call(null,seq__28962_28976__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28982);

var G__28983 = cljs.core.next.call(null,seq__28962_28976__$1);
var G__28984 = null;
var G__28985 = (0);
var G__28986 = (0);
seq__28962_28966 = G__28983;
chunk__28963_28967 = G__28984;
count__28964_28968 = G__28985;
i__28965_28969 = G__28986;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28987){
var map__28989 = p__28987;
var map__28989__$1 = ((cljs.core.seq_QMARK_.call(null,map__28989))?cljs.core.apply.call(null,cljs.core.hash_map,map__28989):map__28989);
var w = map__28989__$1;
var message = cljs.core.get.call(null,map__28989__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18148__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18148__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18148__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28996 = cljs.core.seq.call(null,plugins);
var chunk__28997 = null;
var count__28998 = (0);
var i__28999 = (0);
while(true){
if((i__28999 < count__28998)){
var vec__29000 = cljs.core._nth.call(null,chunk__28997,i__28999);
var k = cljs.core.nth.call(null,vec__29000,(0),null);
var plugin = cljs.core.nth.call(null,vec__29000,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29002 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28996,chunk__28997,count__28998,i__28999,pl_29002,vec__29000,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29002.call(null,msg_hist);
});})(seq__28996,chunk__28997,count__28998,i__28999,pl_29002,vec__29000,k,plugin))
);
} else {
}

var G__29003 = seq__28996;
var G__29004 = chunk__28997;
var G__29005 = count__28998;
var G__29006 = (i__28999 + (1));
seq__28996 = G__29003;
chunk__28997 = G__29004;
count__28998 = G__29005;
i__28999 = G__29006;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28996);
if(temp__4126__auto__){
var seq__28996__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28996__$1)){
var c__18945__auto__ = cljs.core.chunk_first.call(null,seq__28996__$1);
var G__29007 = cljs.core.chunk_rest.call(null,seq__28996__$1);
var G__29008 = c__18945__auto__;
var G__29009 = cljs.core.count.call(null,c__18945__auto__);
var G__29010 = (0);
seq__28996 = G__29007;
chunk__28997 = G__29008;
count__28998 = G__29009;
i__28999 = G__29010;
continue;
} else {
var vec__29001 = cljs.core.first.call(null,seq__28996__$1);
var k = cljs.core.nth.call(null,vec__29001,(0),null);
var plugin = cljs.core.nth.call(null,vec__29001,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29011 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28996,chunk__28997,count__28998,i__28999,pl_29011,vec__29001,k,plugin,seq__28996__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29011.call(null,msg_hist);
});})(seq__28996,chunk__28997,count__28998,i__28999,pl_29011,vec__29001,k,plugin,seq__28996__$1,temp__4126__auto__))
);
} else {
}

var G__29012 = cljs.core.next.call(null,seq__28996__$1);
var G__29013 = null;
var G__29014 = (0);
var G__29015 = (0);
seq__28996 = G__29012;
chunk__28997 = G__29013;
count__28998 = G__29014;
i__28999 = G__29015;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__29017 = arguments.length;
switch (G__29017) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19200__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19200__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29020){
var map__29021 = p__29020;
var map__29021__$1 = ((cljs.core.seq_QMARK_.call(null,map__29021))?cljs.core.apply.call(null,cljs.core.hash_map,map__29021):map__29021);
var opts = map__29021__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29019){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29019));
});

//# sourceMappingURL=client.js.map?rel=1446435322083
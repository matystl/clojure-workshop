// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_25697){
var state_val_25698 = (state_25697[(1)]);
if((state_val_25698 === (7))){
var inst_25682 = (state_25697[(2)]);
var state_25697__$1 = (function (){var statearr_25699 = state_25697;
(statearr_25699[(7)] = inst_25682);

return statearr_25699;
})();
var statearr_25700_25720 = state_25697__$1;
(statearr_25700_25720[(2)] = null);

(statearr_25700_25720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25698 === (1))){
var state_25697__$1 = state_25697;
var statearr_25701_25721 = state_25697__$1;
(statearr_25701_25721[(2)] = null);

(statearr_25701_25721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25698 === (4))){
var inst_25669 = (state_25697[(8)]);
var inst_25669__$1 = (state_25697[(2)]);
var inst_25670 = cljs.core.meta.call(null,inst_25669__$1);
var inst_25671 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_25670);
var state_25697__$1 = (function (){var statearr_25702 = state_25697;
(statearr_25702[(8)] = inst_25669__$1);

return statearr_25702;
})();
if(cljs.core.truth_(inst_25671)){
var statearr_25703_25722 = state_25697__$1;
(statearr_25703_25722[(1)] = (5));

} else {
var statearr_25704_25723 = state_25697__$1;
(statearr_25704_25723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25698 === (6))){
var inst_25678 = cljs.core.async.timeout.call(null,(0));
var state_25697__$1 = state_25697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25697__$1,(9),inst_25678);
} else {
if((state_val_25698 === (3))){
var inst_25695 = (state_25697[(2)]);
var state_25697__$1 = state_25697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25697__$1,inst_25695);
} else {
if((state_val_25698 === (12))){
var inst_25669 = (state_25697[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25697,(11),Object,null,(10));
var inst_25690 = re_frame.handlers.handle.call(null,inst_25669);
var state_25697__$1 = state_25697;
var statearr_25705_25724 = state_25697__$1;
(statearr_25705_25724[(2)] = inst_25690);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25697__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25698 === (2))){
var state_25697__$1 = state_25697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25697__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_25698 === (11))){
var inst_25683 = (state_25697[(2)]);
var inst_25684 = re_frame.router.purge_chan.call(null);
var inst_25685 = re_frame$router$router_loop.call(null);
var inst_25686 = (function(){throw inst_25683})();
var state_25697__$1 = (function (){var statearr_25706 = state_25697;
(statearr_25706[(9)] = inst_25685);

(statearr_25706[(10)] = inst_25684);

return statearr_25706;
})();
var statearr_25707_25725 = state_25697__$1;
(statearr_25707_25725[(2)] = inst_25686);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25697__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25698 === (9))){
var inst_25680 = (state_25697[(2)]);
var state_25697__$1 = state_25697;
var statearr_25708_25726 = state_25697__$1;
(statearr_25708_25726[(2)] = inst_25680);

(statearr_25708_25726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25698 === (5))){
var inst_25673 = reagent.core.flush.call(null);
var inst_25674 = cljs.core.async.timeout.call(null,(20));
var state_25697__$1 = (function (){var statearr_25709 = state_25697;
(statearr_25709[(11)] = inst_25673);

return statearr_25709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25697__$1,(8),inst_25674);
} else {
if((state_val_25698 === (10))){
var inst_25692 = (state_25697[(2)]);
var state_25697__$1 = (function (){var statearr_25710 = state_25697;
(statearr_25710[(12)] = inst_25692);

return statearr_25710;
})();
var statearr_25711_25727 = state_25697__$1;
(statearr_25711_25727[(2)] = null);

(statearr_25711_25727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25698 === (8))){
var inst_25676 = (state_25697[(2)]);
var state_25697__$1 = state_25697;
var statearr_25712_25728 = state_25697__$1;
(statearr_25712_25728[(2)] = inst_25676);

(statearr_25712_25728[(1)] = (7));


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
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__21323__auto__ = null;
var re_frame$router$router_loop_$_state_machine__21323__auto____0 = (function (){
var statearr_25716 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25716[(0)] = re_frame$router$router_loop_$_state_machine__21323__auto__);

(statearr_25716[(1)] = (1));

return statearr_25716;
});
var re_frame$router$router_loop_$_state_machine__21323__auto____1 = (function (state_25697){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_25697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e25717){if((e25717 instanceof Object)){
var ex__21326__auto__ = e25717;
var statearr_25718_25729 = state_25697;
(statearr_25718_25729[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25730 = state_25697;
state_25697 = G__25730;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__21323__auto__ = function(state_25697){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__21323__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__21323__auto____1.call(this,state_25697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__21323__auto____0;
re_frame$router$router_loop_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__21323__auto____1;
return re_frame$router$router_loop_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_25719 = f__21385__auto__.call(null);
(statearr_25719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_25719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1446435319905
// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t25736 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25736 = (function (f,fn_handler,meta25737){
this.f = f;
this.fn_handler = fn_handler;
this.meta25737 = meta25737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25736.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25736.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25736.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25738){
var self__ = this;
var _25738__$1 = this;
return self__.meta25737;
});

cljs.core.async.t25736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25738,meta25737__$1){
var self__ = this;
var _25738__$1 = this;
return (new cljs.core.async.t25736(self__.f,self__.fn_handler,meta25737__$1));
});

cljs.core.async.t25736.cljs$lang$type = true;

cljs.core.async.t25736.cljs$lang$ctorStr = "cljs.core.async/t25736";

cljs.core.async.t25736.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t25736");
});

cljs.core.async.__GT_t25736 = (function cljs$core$async$fn_handler_$___GT_t25736(f__$1,fn_handler__$1,meta25737){
return (new cljs.core.async.t25736(f__$1,fn_handler__$1,meta25737));
});

}

return (new cljs.core.async.t25736(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__25740 = buff;
if(G__25740){
var bit__18834__auto__ = null;
if(cljs.core.truth_((function (){var or__18160__auto__ = bit__18834__auto__;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return G__25740.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25740.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25740);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25740);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__25742 = arguments.length;
switch (G__25742) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__25745 = arguments.length;
switch (G__25745) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25747 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25747);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25747,ret){
return (function (){
return fn1.call(null,val_25747);
});})(val_25747,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__25749 = arguments.length;
switch (G__25749) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19045__auto___25751 = n;
var x_25752 = (0);
while(true){
if((x_25752 < n__19045__auto___25751)){
(a[x_25752] = (0));

var G__25753 = (x_25752 + (1));
x_25752 = G__25753;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25754 = (i + (1));
i = G__25754;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25758 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25758 = (function (flag,alt_flag,meta25759){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25759 = meta25759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25758.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25760){
var self__ = this;
var _25760__$1 = this;
return self__.meta25759;
});})(flag))
;

cljs.core.async.t25758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25760,meta25759__$1){
var self__ = this;
var _25760__$1 = this;
return (new cljs.core.async.t25758(self__.flag,self__.alt_flag,meta25759__$1));
});})(flag))
;

cljs.core.async.t25758.cljs$lang$type = true;

cljs.core.async.t25758.cljs$lang$ctorStr = "cljs.core.async/t25758";

cljs.core.async.t25758.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t25758");
});})(flag))
;

cljs.core.async.__GT_t25758 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25758(flag__$1,alt_flag__$1,meta25759){
return (new cljs.core.async.t25758(flag__$1,alt_flag__$1,meta25759));
});})(flag))
;

}

return (new cljs.core.async.t25758(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25764 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25764 = (function (cb,flag,alt_handler,meta25765){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25765 = meta25765;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25764.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25764.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25764.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25766){
var self__ = this;
var _25766__$1 = this;
return self__.meta25765;
});

cljs.core.async.t25764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25766,meta25765__$1){
var self__ = this;
var _25766__$1 = this;
return (new cljs.core.async.t25764(self__.cb,self__.flag,self__.alt_handler,meta25765__$1));
});

cljs.core.async.t25764.cljs$lang$type = true;

cljs.core.async.t25764.cljs$lang$ctorStr = "cljs.core.async/t25764";

cljs.core.async.t25764.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t25764");
});

cljs.core.async.__GT_t25764 = (function cljs$core$async$alt_handler_$___GT_t25764(cb__$1,flag__$1,alt_handler__$1,meta25765){
return (new cljs.core.async.t25764(cb__$1,flag__$1,alt_handler__$1,meta25765));
});

}

return (new cljs.core.async.t25764(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25767_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25767_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25768_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25768_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18160__auto__ = wport;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25769 = (i + (1));
i = G__25769;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18160__auto__ = ret;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18148__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18148__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18148__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19200__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19200__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25772){
var map__25773 = p__25772;
var map__25773__$1 = ((cljs.core.seq_QMARK_.call(null,map__25773))?cljs.core.apply.call(null,cljs.core.hash_map,map__25773):map__25773);
var opts = map__25773__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25770){
var G__25771 = cljs.core.first.call(null,seq25770);
var seq25770__$1 = cljs.core.next.call(null,seq25770);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25771,seq25770__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__25775 = arguments.length;
switch (G__25775) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21384__auto___25824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___25824){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___25824){
return (function (state_25799){
var state_val_25800 = (state_25799[(1)]);
if((state_val_25800 === (7))){
var inst_25795 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
var statearr_25801_25825 = state_25799__$1;
(statearr_25801_25825[(2)] = inst_25795);

(statearr_25801_25825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (1))){
var state_25799__$1 = state_25799;
var statearr_25802_25826 = state_25799__$1;
(statearr_25802_25826[(2)] = null);

(statearr_25802_25826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (4))){
var inst_25778 = (state_25799[(7)]);
var inst_25778__$1 = (state_25799[(2)]);
var inst_25779 = (inst_25778__$1 == null);
var state_25799__$1 = (function (){var statearr_25803 = state_25799;
(statearr_25803[(7)] = inst_25778__$1);

return statearr_25803;
})();
if(cljs.core.truth_(inst_25779)){
var statearr_25804_25827 = state_25799__$1;
(statearr_25804_25827[(1)] = (5));

} else {
var statearr_25805_25828 = state_25799__$1;
(statearr_25805_25828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (13))){
var state_25799__$1 = state_25799;
var statearr_25806_25829 = state_25799__$1;
(statearr_25806_25829[(2)] = null);

(statearr_25806_25829[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (6))){
var inst_25778 = (state_25799[(7)]);
var state_25799__$1 = state_25799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25799__$1,(11),to,inst_25778);
} else {
if((state_val_25800 === (3))){
var inst_25797 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25799__$1,inst_25797);
} else {
if((state_val_25800 === (12))){
var state_25799__$1 = state_25799;
var statearr_25807_25830 = state_25799__$1;
(statearr_25807_25830[(2)] = null);

(statearr_25807_25830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (2))){
var state_25799__$1 = state_25799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25799__$1,(4),from);
} else {
if((state_val_25800 === (11))){
var inst_25788 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
if(cljs.core.truth_(inst_25788)){
var statearr_25808_25831 = state_25799__$1;
(statearr_25808_25831[(1)] = (12));

} else {
var statearr_25809_25832 = state_25799__$1;
(statearr_25809_25832[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (9))){
var state_25799__$1 = state_25799;
var statearr_25810_25833 = state_25799__$1;
(statearr_25810_25833[(2)] = null);

(statearr_25810_25833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (5))){
var state_25799__$1 = state_25799;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25811_25834 = state_25799__$1;
(statearr_25811_25834[(1)] = (8));

} else {
var statearr_25812_25835 = state_25799__$1;
(statearr_25812_25835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (14))){
var inst_25793 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
var statearr_25813_25836 = state_25799__$1;
(statearr_25813_25836[(2)] = inst_25793);

(statearr_25813_25836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (10))){
var inst_25785 = (state_25799[(2)]);
var state_25799__$1 = state_25799;
var statearr_25814_25837 = state_25799__$1;
(statearr_25814_25837[(2)] = inst_25785);

(statearr_25814_25837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25800 === (8))){
var inst_25782 = cljs.core.async.close_BANG_.call(null,to);
var state_25799__$1 = state_25799;
var statearr_25815_25838 = state_25799__$1;
(statearr_25815_25838[(2)] = inst_25782);

(statearr_25815_25838[(1)] = (10));


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
});})(c__21384__auto___25824))
;
return ((function (switch__21322__auto__,c__21384__auto___25824){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_25819 = [null,null,null,null,null,null,null,null];
(statearr_25819[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_25819[(1)] = (1));

return statearr_25819;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_25799){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_25799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e25820){if((e25820 instanceof Object)){
var ex__21326__auto__ = e25820;
var statearr_25821_25839 = state_25799;
(statearr_25821_25839[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25840 = state_25799;
state_25799 = G__25840;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_25799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_25799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___25824))
})();
var state__21386__auto__ = (function (){var statearr_25822 = f__21385__auto__.call(null);
(statearr_25822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___25824);

return statearr_25822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___25824))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26024){
var vec__26025 = p__26024;
var v = cljs.core.nth.call(null,vec__26025,(0),null);
var p = cljs.core.nth.call(null,vec__26025,(1),null);
var job = vec__26025;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21384__auto___26207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___26207,res,vec__26025,v,p,job,jobs,results){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___26207,res,vec__26025,v,p,job,jobs,results){
return (function (state_26030){
var state_val_26031 = (state_26030[(1)]);
if((state_val_26031 === (2))){
var inst_26027 = (state_26030[(2)]);
var inst_26028 = cljs.core.async.close_BANG_.call(null,res);
var state_26030__$1 = (function (){var statearr_26032 = state_26030;
(statearr_26032[(7)] = inst_26027);

return statearr_26032;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26030__$1,inst_26028);
} else {
if((state_val_26031 === (1))){
var state_26030__$1 = state_26030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26030__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21384__auto___26207,res,vec__26025,v,p,job,jobs,results))
;
return ((function (switch__21322__auto__,c__21384__auto___26207,res,vec__26025,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0 = (function (){
var statearr_26036 = [null,null,null,null,null,null,null,null];
(statearr_26036[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__);

(statearr_26036[(1)] = (1));

return statearr_26036;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1 = (function (state_26030){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26037){if((e26037 instanceof Object)){
var ex__21326__auto__ = e26037;
var statearr_26038_26208 = state_26030;
(statearr_26038_26208[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26209 = state_26030;
state_26030 = G__26209;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = function(state_26030){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1.call(this,state_26030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___26207,res,vec__26025,v,p,job,jobs,results))
})();
var state__21386__auto__ = (function (){var statearr_26039 = f__21385__auto__.call(null);
(statearr_26039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___26207);

return statearr_26039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___26207,res,vec__26025,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26040){
var vec__26041 = p__26040;
var v = cljs.core.nth.call(null,vec__26041,(0),null);
var p = cljs.core.nth.call(null,vec__26041,(1),null);
var job = vec__26041;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19045__auto___26210 = n;
var __26211 = (0);
while(true){
if((__26211 < n__19045__auto___26210)){
var G__26042_26212 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26042_26212) {
case "async":
var c__21384__auto___26214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26211,c__21384__auto___26214,G__26042_26212,n__19045__auto___26210,jobs,results,process,async){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (__26211,c__21384__auto___26214,G__26042_26212,n__19045__auto___26210,jobs,results,process,async){
return (function (state_26055){
var state_val_26056 = (state_26055[(1)]);
if((state_val_26056 === (7))){
var inst_26051 = (state_26055[(2)]);
var state_26055__$1 = state_26055;
var statearr_26057_26215 = state_26055__$1;
(statearr_26057_26215[(2)] = inst_26051);

(statearr_26057_26215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (6))){
var state_26055__$1 = state_26055;
var statearr_26058_26216 = state_26055__$1;
(statearr_26058_26216[(2)] = null);

(statearr_26058_26216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (5))){
var state_26055__$1 = state_26055;
var statearr_26059_26217 = state_26055__$1;
(statearr_26059_26217[(2)] = null);

(statearr_26059_26217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (4))){
var inst_26045 = (state_26055[(2)]);
var inst_26046 = async.call(null,inst_26045);
var state_26055__$1 = state_26055;
if(cljs.core.truth_(inst_26046)){
var statearr_26060_26218 = state_26055__$1;
(statearr_26060_26218[(1)] = (5));

} else {
var statearr_26061_26219 = state_26055__$1;
(statearr_26061_26219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (3))){
var inst_26053 = (state_26055[(2)]);
var state_26055__$1 = state_26055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26055__$1,inst_26053);
} else {
if((state_val_26056 === (2))){
var state_26055__$1 = state_26055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26055__$1,(4),jobs);
} else {
if((state_val_26056 === (1))){
var state_26055__$1 = state_26055;
var statearr_26062_26220 = state_26055__$1;
(statearr_26062_26220[(2)] = null);

(statearr_26062_26220[(1)] = (2));


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
});})(__26211,c__21384__auto___26214,G__26042_26212,n__19045__auto___26210,jobs,results,process,async))
;
return ((function (__26211,switch__21322__auto__,c__21384__auto___26214,G__26042_26212,n__19045__auto___26210,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0 = (function (){
var statearr_26066 = [null,null,null,null,null,null,null];
(statearr_26066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__);

(statearr_26066[(1)] = (1));

return statearr_26066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1 = (function (state_26055){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26067){if((e26067 instanceof Object)){
var ex__21326__auto__ = e26067;
var statearr_26068_26221 = state_26055;
(statearr_26068_26221[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26222 = state_26055;
state_26055 = G__26222;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = function(state_26055){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1.call(this,state_26055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__;
})()
;})(__26211,switch__21322__auto__,c__21384__auto___26214,G__26042_26212,n__19045__auto___26210,jobs,results,process,async))
})();
var state__21386__auto__ = (function (){var statearr_26069 = f__21385__auto__.call(null);
(statearr_26069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___26214);

return statearr_26069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(__26211,c__21384__auto___26214,G__26042_26212,n__19045__auto___26210,jobs,results,process,async))
);


break;
case "compute":
var c__21384__auto___26223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26211,c__21384__auto___26223,G__26042_26212,n__19045__auto___26210,jobs,results,process,async){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (__26211,c__21384__auto___26223,G__26042_26212,n__19045__auto___26210,jobs,results,process,async){
return (function (state_26082){
var state_val_26083 = (state_26082[(1)]);
if((state_val_26083 === (7))){
var inst_26078 = (state_26082[(2)]);
var state_26082__$1 = state_26082;
var statearr_26084_26224 = state_26082__$1;
(statearr_26084_26224[(2)] = inst_26078);

(statearr_26084_26224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (6))){
var state_26082__$1 = state_26082;
var statearr_26085_26225 = state_26082__$1;
(statearr_26085_26225[(2)] = null);

(statearr_26085_26225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (5))){
var state_26082__$1 = state_26082;
var statearr_26086_26226 = state_26082__$1;
(statearr_26086_26226[(2)] = null);

(statearr_26086_26226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (4))){
var inst_26072 = (state_26082[(2)]);
var inst_26073 = process.call(null,inst_26072);
var state_26082__$1 = state_26082;
if(cljs.core.truth_(inst_26073)){
var statearr_26087_26227 = state_26082__$1;
(statearr_26087_26227[(1)] = (5));

} else {
var statearr_26088_26228 = state_26082__$1;
(statearr_26088_26228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26083 === (3))){
var inst_26080 = (state_26082[(2)]);
var state_26082__$1 = state_26082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26082__$1,inst_26080);
} else {
if((state_val_26083 === (2))){
var state_26082__$1 = state_26082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26082__$1,(4),jobs);
} else {
if((state_val_26083 === (1))){
var state_26082__$1 = state_26082;
var statearr_26089_26229 = state_26082__$1;
(statearr_26089_26229[(2)] = null);

(statearr_26089_26229[(1)] = (2));


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
});})(__26211,c__21384__auto___26223,G__26042_26212,n__19045__auto___26210,jobs,results,process,async))
;
return ((function (__26211,switch__21322__auto__,c__21384__auto___26223,G__26042_26212,n__19045__auto___26210,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0 = (function (){
var statearr_26093 = [null,null,null,null,null,null,null];
(statearr_26093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__);

(statearr_26093[(1)] = (1));

return statearr_26093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1 = (function (state_26082){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26094){if((e26094 instanceof Object)){
var ex__21326__auto__ = e26094;
var statearr_26095_26230 = state_26082;
(statearr_26095_26230[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26231 = state_26082;
state_26082 = G__26231;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = function(state_26082){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1.call(this,state_26082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__;
})()
;})(__26211,switch__21322__auto__,c__21384__auto___26223,G__26042_26212,n__19045__auto___26210,jobs,results,process,async))
})();
var state__21386__auto__ = (function (){var statearr_26096 = f__21385__auto__.call(null);
(statearr_26096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___26223);

return statearr_26096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(__26211,c__21384__auto___26223,G__26042_26212,n__19045__auto___26210,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26232 = (__26211 + (1));
__26211 = G__26232;
continue;
} else {
}
break;
}

var c__21384__auto___26233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___26233,jobs,results,process,async){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___26233,jobs,results,process,async){
return (function (state_26118){
var state_val_26119 = (state_26118[(1)]);
if((state_val_26119 === (9))){
var inst_26111 = (state_26118[(2)]);
var state_26118__$1 = (function (){var statearr_26120 = state_26118;
(statearr_26120[(7)] = inst_26111);

return statearr_26120;
})();
var statearr_26121_26234 = state_26118__$1;
(statearr_26121_26234[(2)] = null);

(statearr_26121_26234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (8))){
var inst_26104 = (state_26118[(8)]);
var inst_26109 = (state_26118[(2)]);
var state_26118__$1 = (function (){var statearr_26122 = state_26118;
(statearr_26122[(9)] = inst_26109);

return statearr_26122;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26118__$1,(9),results,inst_26104);
} else {
if((state_val_26119 === (7))){
var inst_26114 = (state_26118[(2)]);
var state_26118__$1 = state_26118;
var statearr_26123_26235 = state_26118__$1;
(statearr_26123_26235[(2)] = inst_26114);

(statearr_26123_26235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (6))){
var inst_26099 = (state_26118[(10)]);
var inst_26104 = (state_26118[(8)]);
var inst_26104__$1 = cljs.core.async.chan.call(null,(1));
var inst_26105 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26106 = [inst_26099,inst_26104__$1];
var inst_26107 = (new cljs.core.PersistentVector(null,2,(5),inst_26105,inst_26106,null));
var state_26118__$1 = (function (){var statearr_26124 = state_26118;
(statearr_26124[(8)] = inst_26104__$1);

return statearr_26124;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26118__$1,(8),jobs,inst_26107);
} else {
if((state_val_26119 === (5))){
var inst_26102 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26118__$1 = state_26118;
var statearr_26125_26236 = state_26118__$1;
(statearr_26125_26236[(2)] = inst_26102);

(statearr_26125_26236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (4))){
var inst_26099 = (state_26118[(10)]);
var inst_26099__$1 = (state_26118[(2)]);
var inst_26100 = (inst_26099__$1 == null);
var state_26118__$1 = (function (){var statearr_26126 = state_26118;
(statearr_26126[(10)] = inst_26099__$1);

return statearr_26126;
})();
if(cljs.core.truth_(inst_26100)){
var statearr_26127_26237 = state_26118__$1;
(statearr_26127_26237[(1)] = (5));

} else {
var statearr_26128_26238 = state_26118__$1;
(statearr_26128_26238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (3))){
var inst_26116 = (state_26118[(2)]);
var state_26118__$1 = state_26118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26118__$1,inst_26116);
} else {
if((state_val_26119 === (2))){
var state_26118__$1 = state_26118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26118__$1,(4),from);
} else {
if((state_val_26119 === (1))){
var state_26118__$1 = state_26118;
var statearr_26129_26239 = state_26118__$1;
(statearr_26129_26239[(2)] = null);

(statearr_26129_26239[(1)] = (2));


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
});})(c__21384__auto___26233,jobs,results,process,async))
;
return ((function (switch__21322__auto__,c__21384__auto___26233,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0 = (function (){
var statearr_26133 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__);

(statearr_26133[(1)] = (1));

return statearr_26133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1 = (function (state_26118){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26134){if((e26134 instanceof Object)){
var ex__21326__auto__ = e26134;
var statearr_26135_26240 = state_26118;
(statearr_26135_26240[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26241 = state_26118;
state_26118 = G__26241;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = function(state_26118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1.call(this,state_26118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___26233,jobs,results,process,async))
})();
var state__21386__auto__ = (function (){var statearr_26136 = f__21385__auto__.call(null);
(statearr_26136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___26233);

return statearr_26136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___26233,jobs,results,process,async))
);


var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__,jobs,results,process,async){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__,jobs,results,process,async){
return (function (state_26174){
var state_val_26175 = (state_26174[(1)]);
if((state_val_26175 === (7))){
var inst_26170 = (state_26174[(2)]);
var state_26174__$1 = state_26174;
var statearr_26176_26242 = state_26174__$1;
(statearr_26176_26242[(2)] = inst_26170);

(statearr_26176_26242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26175 === (20))){
var state_26174__$1 = state_26174;
var statearr_26177_26243 = state_26174__$1;
(statearr_26177_26243[(2)] = null);

(statearr_26177_26243[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26175 === (1))){
var state_26174__$1 = state_26174;
var statearr_26178_26244 = state_26174__$1;
(statearr_26178_26244[(2)] = null);

(statearr_26178_26244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26175 === (4))){
var inst_26139 = (state_26174[(7)]);
var inst_26139__$1 = (state_26174[(2)]);
var inst_26140 = (inst_26139__$1 == null);
var state_26174__$1 = (function (){var statearr_26179 = state_26174;
(statearr_26179[(7)] = inst_26139__$1);

return statearr_26179;
})();
if(cljs.core.truth_(inst_26140)){
var statearr_26180_26245 = state_26174__$1;
(statearr_26180_26245[(1)] = (5));

} else {
var statearr_26181_26246 = state_26174__$1;
(statearr_26181_26246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26175 === (15))){
var inst_26152 = (state_26174[(8)]);
var state_26174__$1 = state_26174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26174__$1,(18),to,inst_26152);
} else {
if((state_val_26175 === (21))){
var inst_26165 = (state_26174[(2)]);
var state_26174__$1 = state_26174;
var statearr_26182_26247 = state_26174__$1;
(statearr_26182_26247[(2)] = inst_26165);

(statearr_26182_26247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26175 === (13))){
var inst_26167 = (state_26174[(2)]);
var state_26174__$1 = (function (){var statearr_26183 = state_26174;
(statearr_26183[(9)] = inst_26167);

return statearr_26183;
})();
var statearr_26184_26248 = state_26174__$1;
(statearr_26184_26248[(2)] = null);

(statearr_26184_26248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26175 === (6))){
var inst_26139 = (state_26174[(7)]);
var state_26174__$1 = state_26174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26174__$1,(11),inst_26139);
} else {
if((state_val_26175 === (17))){
var inst_26160 = (state_26174[(2)]);
var state_26174__$1 = state_26174;
if(cljs.core.truth_(inst_26160)){
var statearr_26185_26249 = state_26174__$1;
(statearr_26185_26249[(1)] = (19));

} else {
var statearr_26186_26250 = state_26174__$1;
(statearr_26186_26250[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26175 === (3))){
var inst_26172 = (state_26174[(2)]);
var state_26174__$1 = state_26174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26174__$1,inst_26172);
} else {
if((state_val_26175 === (12))){
var inst_26149 = (state_26174[(10)]);
var state_26174__$1 = state_26174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26174__$1,(14),inst_26149);
} else {
if((state_val_26175 === (2))){
var state_26174__$1 = state_26174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26174__$1,(4),results);
} else {
if((state_val_26175 === (19))){
var state_26174__$1 = state_26174;
var statearr_26187_26251 = state_26174__$1;
(statearr_26187_26251[(2)] = null);

(statearr_26187_26251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26175 === (11))){
var inst_26149 = (state_26174[(2)]);
var state_26174__$1 = (function (){var statearr_26188 = state_26174;
(statearr_26188[(10)] = inst_26149);

return statearr_26188;
})();
var statearr_26189_26252 = state_26174__$1;
(statearr_26189_26252[(2)] = null);

(statearr_26189_26252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26175 === (9))){
var state_26174__$1 = state_26174;
var statearr_26190_26253 = state_26174__$1;
(statearr_26190_26253[(2)] = null);

(statearr_26190_26253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26175 === (5))){
var state_26174__$1 = state_26174;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26191_26254 = state_26174__$1;
(statearr_26191_26254[(1)] = (8));

} else {
var statearr_26192_26255 = state_26174__$1;
(statearr_26192_26255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26175 === (14))){
var inst_26152 = (state_26174[(8)]);
var inst_26154 = (state_26174[(11)]);
var inst_26152__$1 = (state_26174[(2)]);
var inst_26153 = (inst_26152__$1 == null);
var inst_26154__$1 = cljs.core.not.call(null,inst_26153);
var state_26174__$1 = (function (){var statearr_26193 = state_26174;
(statearr_26193[(8)] = inst_26152__$1);

(statearr_26193[(11)] = inst_26154__$1);

return statearr_26193;
})();
if(inst_26154__$1){
var statearr_26194_26256 = state_26174__$1;
(statearr_26194_26256[(1)] = (15));

} else {
var statearr_26195_26257 = state_26174__$1;
(statearr_26195_26257[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26175 === (16))){
var inst_26154 = (state_26174[(11)]);
var state_26174__$1 = state_26174;
var statearr_26196_26258 = state_26174__$1;
(statearr_26196_26258[(2)] = inst_26154);

(statearr_26196_26258[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26175 === (10))){
var inst_26146 = (state_26174[(2)]);
var state_26174__$1 = state_26174;
var statearr_26197_26259 = state_26174__$1;
(statearr_26197_26259[(2)] = inst_26146);

(statearr_26197_26259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26175 === (18))){
var inst_26157 = (state_26174[(2)]);
var state_26174__$1 = state_26174;
var statearr_26198_26260 = state_26174__$1;
(statearr_26198_26260[(2)] = inst_26157);

(statearr_26198_26260[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26175 === (8))){
var inst_26143 = cljs.core.async.close_BANG_.call(null,to);
var state_26174__$1 = state_26174;
var statearr_26199_26261 = state_26174__$1;
(statearr_26199_26261[(2)] = inst_26143);

(statearr_26199_26261[(1)] = (10));


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
});})(c__21384__auto__,jobs,results,process,async))
;
return ((function (switch__21322__auto__,c__21384__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0 = (function (){
var statearr_26203 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__);

(statearr_26203[(1)] = (1));

return statearr_26203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1 = (function (state_26174){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26204){if((e26204 instanceof Object)){
var ex__21326__auto__ = e26204;
var statearr_26205_26262 = state_26174;
(statearr_26205_26262[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26263 = state_26174;
state_26174 = G__26263;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__ = function(state_26174){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1.call(this,state_26174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21323__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__,jobs,results,process,async))
})();
var state__21386__auto__ = (function (){var statearr_26206 = f__21385__auto__.call(null);
(statearr_26206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_26206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__,jobs,results,process,async))
);

return c__21384__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__26265 = arguments.length;
switch (G__26265) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__26268 = arguments.length;
switch (G__26268) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__26271 = arguments.length;
switch (G__26271) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21384__auto___26323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___26323,tc,fc){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___26323,tc,fc){
return (function (state_26297){
var state_val_26298 = (state_26297[(1)]);
if((state_val_26298 === (7))){
var inst_26293 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
var statearr_26299_26324 = state_26297__$1;
(statearr_26299_26324[(2)] = inst_26293);

(statearr_26299_26324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (1))){
var state_26297__$1 = state_26297;
var statearr_26300_26325 = state_26297__$1;
(statearr_26300_26325[(2)] = null);

(statearr_26300_26325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (4))){
var inst_26274 = (state_26297[(7)]);
var inst_26274__$1 = (state_26297[(2)]);
var inst_26275 = (inst_26274__$1 == null);
var state_26297__$1 = (function (){var statearr_26301 = state_26297;
(statearr_26301[(7)] = inst_26274__$1);

return statearr_26301;
})();
if(cljs.core.truth_(inst_26275)){
var statearr_26302_26326 = state_26297__$1;
(statearr_26302_26326[(1)] = (5));

} else {
var statearr_26303_26327 = state_26297__$1;
(statearr_26303_26327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (13))){
var state_26297__$1 = state_26297;
var statearr_26304_26328 = state_26297__$1;
(statearr_26304_26328[(2)] = null);

(statearr_26304_26328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (6))){
var inst_26274 = (state_26297[(7)]);
var inst_26280 = p.call(null,inst_26274);
var state_26297__$1 = state_26297;
if(cljs.core.truth_(inst_26280)){
var statearr_26305_26329 = state_26297__$1;
(statearr_26305_26329[(1)] = (9));

} else {
var statearr_26306_26330 = state_26297__$1;
(statearr_26306_26330[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (3))){
var inst_26295 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26297__$1,inst_26295);
} else {
if((state_val_26298 === (12))){
var state_26297__$1 = state_26297;
var statearr_26307_26331 = state_26297__$1;
(statearr_26307_26331[(2)] = null);

(statearr_26307_26331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (2))){
var state_26297__$1 = state_26297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26297__$1,(4),ch);
} else {
if((state_val_26298 === (11))){
var inst_26274 = (state_26297[(7)]);
var inst_26284 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26297__$1,(8),inst_26284,inst_26274);
} else {
if((state_val_26298 === (9))){
var state_26297__$1 = state_26297;
var statearr_26308_26332 = state_26297__$1;
(statearr_26308_26332[(2)] = tc);

(statearr_26308_26332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (5))){
var inst_26277 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26278 = cljs.core.async.close_BANG_.call(null,fc);
var state_26297__$1 = (function (){var statearr_26309 = state_26297;
(statearr_26309[(8)] = inst_26277);

return statearr_26309;
})();
var statearr_26310_26333 = state_26297__$1;
(statearr_26310_26333[(2)] = inst_26278);

(statearr_26310_26333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (14))){
var inst_26291 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
var statearr_26311_26334 = state_26297__$1;
(statearr_26311_26334[(2)] = inst_26291);

(statearr_26311_26334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (10))){
var state_26297__$1 = state_26297;
var statearr_26312_26335 = state_26297__$1;
(statearr_26312_26335[(2)] = fc);

(statearr_26312_26335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (8))){
var inst_26286 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
if(cljs.core.truth_(inst_26286)){
var statearr_26313_26336 = state_26297__$1;
(statearr_26313_26336[(1)] = (12));

} else {
var statearr_26314_26337 = state_26297__$1;
(statearr_26314_26337[(1)] = (13));

}

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
});})(c__21384__auto___26323,tc,fc))
;
return ((function (switch__21322__auto__,c__21384__auto___26323,tc,fc){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_26318 = [null,null,null,null,null,null,null,null,null];
(statearr_26318[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_26318[(1)] = (1));

return statearr_26318;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_26297){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26319){if((e26319 instanceof Object)){
var ex__21326__auto__ = e26319;
var statearr_26320_26338 = state_26297;
(statearr_26320_26338[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26339 = state_26297;
state_26297 = G__26339;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_26297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_26297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___26323,tc,fc))
})();
var state__21386__auto__ = (function (){var statearr_26321 = f__21385__auto__.call(null);
(statearr_26321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___26323);

return statearr_26321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___26323,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_26386){
var state_val_26387 = (state_26386[(1)]);
if((state_val_26387 === (7))){
var inst_26382 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
var statearr_26388_26404 = state_26386__$1;
(statearr_26388_26404[(2)] = inst_26382);

(statearr_26388_26404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (6))){
var inst_26372 = (state_26386[(7)]);
var inst_26375 = (state_26386[(8)]);
var inst_26379 = f.call(null,inst_26372,inst_26375);
var inst_26372__$1 = inst_26379;
var state_26386__$1 = (function (){var statearr_26389 = state_26386;
(statearr_26389[(7)] = inst_26372__$1);

return statearr_26389;
})();
var statearr_26390_26405 = state_26386__$1;
(statearr_26390_26405[(2)] = null);

(statearr_26390_26405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (5))){
var inst_26372 = (state_26386[(7)]);
var state_26386__$1 = state_26386;
var statearr_26391_26406 = state_26386__$1;
(statearr_26391_26406[(2)] = inst_26372);

(statearr_26391_26406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (4))){
var inst_26375 = (state_26386[(8)]);
var inst_26375__$1 = (state_26386[(2)]);
var inst_26376 = (inst_26375__$1 == null);
var state_26386__$1 = (function (){var statearr_26392 = state_26386;
(statearr_26392[(8)] = inst_26375__$1);

return statearr_26392;
})();
if(cljs.core.truth_(inst_26376)){
var statearr_26393_26407 = state_26386__$1;
(statearr_26393_26407[(1)] = (5));

} else {
var statearr_26394_26408 = state_26386__$1;
(statearr_26394_26408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (3))){
var inst_26384 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26386__$1,inst_26384);
} else {
if((state_val_26387 === (2))){
var state_26386__$1 = state_26386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26386__$1,(4),ch);
} else {
if((state_val_26387 === (1))){
var inst_26372 = init;
var state_26386__$1 = (function (){var statearr_26395 = state_26386;
(statearr_26395[(7)] = inst_26372);

return statearr_26395;
})();
var statearr_26396_26409 = state_26386__$1;
(statearr_26396_26409[(2)] = null);

(statearr_26396_26409[(1)] = (2));


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
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21323__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21323__auto____0 = (function (){
var statearr_26400 = [null,null,null,null,null,null,null,null,null];
(statearr_26400[(0)] = cljs$core$async$reduce_$_state_machine__21323__auto__);

(statearr_26400[(1)] = (1));

return statearr_26400;
});
var cljs$core$async$reduce_$_state_machine__21323__auto____1 = (function (state_26386){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26401){if((e26401 instanceof Object)){
var ex__21326__auto__ = e26401;
var statearr_26402_26410 = state_26386;
(statearr_26402_26410[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26411 = state_26386;
state_26386 = G__26411;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21323__auto__ = function(state_26386){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21323__auto____1.call(this,state_26386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21323__auto____0;
cljs$core$async$reduce_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21323__auto____1;
return cljs$core$async$reduce_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_26403 = f__21385__auto__.call(null);
(statearr_26403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_26403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__26413 = arguments.length;
switch (G__26413) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_26438){
var state_val_26439 = (state_26438[(1)]);
if((state_val_26439 === (7))){
var inst_26420 = (state_26438[(2)]);
var state_26438__$1 = state_26438;
var statearr_26440_26464 = state_26438__$1;
(statearr_26440_26464[(2)] = inst_26420);

(statearr_26440_26464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (1))){
var inst_26414 = cljs.core.seq.call(null,coll);
var inst_26415 = inst_26414;
var state_26438__$1 = (function (){var statearr_26441 = state_26438;
(statearr_26441[(7)] = inst_26415);

return statearr_26441;
})();
var statearr_26442_26465 = state_26438__$1;
(statearr_26442_26465[(2)] = null);

(statearr_26442_26465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (4))){
var inst_26415 = (state_26438[(7)]);
var inst_26418 = cljs.core.first.call(null,inst_26415);
var state_26438__$1 = state_26438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26438__$1,(7),ch,inst_26418);
} else {
if((state_val_26439 === (13))){
var inst_26432 = (state_26438[(2)]);
var state_26438__$1 = state_26438;
var statearr_26443_26466 = state_26438__$1;
(statearr_26443_26466[(2)] = inst_26432);

(statearr_26443_26466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (6))){
var inst_26423 = (state_26438[(2)]);
var state_26438__$1 = state_26438;
if(cljs.core.truth_(inst_26423)){
var statearr_26444_26467 = state_26438__$1;
(statearr_26444_26467[(1)] = (8));

} else {
var statearr_26445_26468 = state_26438__$1;
(statearr_26445_26468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (3))){
var inst_26436 = (state_26438[(2)]);
var state_26438__$1 = state_26438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26438__$1,inst_26436);
} else {
if((state_val_26439 === (12))){
var state_26438__$1 = state_26438;
var statearr_26446_26469 = state_26438__$1;
(statearr_26446_26469[(2)] = null);

(statearr_26446_26469[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (2))){
var inst_26415 = (state_26438[(7)]);
var state_26438__$1 = state_26438;
if(cljs.core.truth_(inst_26415)){
var statearr_26447_26470 = state_26438__$1;
(statearr_26447_26470[(1)] = (4));

} else {
var statearr_26448_26471 = state_26438__$1;
(statearr_26448_26471[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (11))){
var inst_26429 = cljs.core.async.close_BANG_.call(null,ch);
var state_26438__$1 = state_26438;
var statearr_26449_26472 = state_26438__$1;
(statearr_26449_26472[(2)] = inst_26429);

(statearr_26449_26472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (9))){
var state_26438__$1 = state_26438;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26450_26473 = state_26438__$1;
(statearr_26450_26473[(1)] = (11));

} else {
var statearr_26451_26474 = state_26438__$1;
(statearr_26451_26474[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (5))){
var inst_26415 = (state_26438[(7)]);
var state_26438__$1 = state_26438;
var statearr_26452_26475 = state_26438__$1;
(statearr_26452_26475[(2)] = inst_26415);

(statearr_26452_26475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (10))){
var inst_26434 = (state_26438[(2)]);
var state_26438__$1 = state_26438;
var statearr_26453_26476 = state_26438__$1;
(statearr_26453_26476[(2)] = inst_26434);

(statearr_26453_26476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26439 === (8))){
var inst_26415 = (state_26438[(7)]);
var inst_26425 = cljs.core.next.call(null,inst_26415);
var inst_26415__$1 = inst_26425;
var state_26438__$1 = (function (){var statearr_26454 = state_26438;
(statearr_26454[(7)] = inst_26415__$1);

return statearr_26454;
})();
var statearr_26455_26477 = state_26438__$1;
(statearr_26455_26477[(2)] = null);

(statearr_26455_26477[(1)] = (2));


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
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_26459 = [null,null,null,null,null,null,null,null];
(statearr_26459[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_26459[(1)] = (1));

return statearr_26459;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_26438){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26460){if((e26460 instanceof Object)){
var ex__21326__auto__ = e26460;
var statearr_26461_26478 = state_26438;
(statearr_26461_26478[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26479 = state_26438;
state_26438 = G__26479;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_26438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_26438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_26462 = f__21385__auto__.call(null);
(statearr_26462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_26462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj26481 = {};
return obj26481;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18148__auto__ = _;
if(and__18148__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18148__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18796__auto__ = (((_ == null))?null:_);
return (function (){var or__18160__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26483 = {};
return obj26483;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t26705 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26705 = (function (cs,ch,mult,meta26706){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26706 = meta26706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26705.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26705.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26705.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26705.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26705.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26707){
var self__ = this;
var _26707__$1 = this;
return self__.meta26706;
});})(cs))
;

cljs.core.async.t26705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26707,meta26706__$1){
var self__ = this;
var _26707__$1 = this;
return (new cljs.core.async.t26705(self__.cs,self__.ch,self__.mult,meta26706__$1));
});})(cs))
;

cljs.core.async.t26705.cljs$lang$type = true;

cljs.core.async.t26705.cljs$lang$ctorStr = "cljs.core.async/t26705";

cljs.core.async.t26705.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t26705");
});})(cs))
;

cljs.core.async.__GT_t26705 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26705(cs__$1,ch__$1,mult__$1,meta26706){
return (new cljs.core.async.t26705(cs__$1,ch__$1,mult__$1,meta26706));
});})(cs))
;

}

return (new cljs.core.async.t26705(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21384__auto___26926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___26926,cs,m,dchan,dctr,done){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___26926,cs,m,dchan,dctr,done){
return (function (state_26838){
var state_val_26839 = (state_26838[(1)]);
if((state_val_26839 === (7))){
var inst_26834 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26840_26927 = state_26838__$1;
(statearr_26840_26927[(2)] = inst_26834);

(statearr_26840_26927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (20))){
var inst_26739 = (state_26838[(7)]);
var inst_26749 = cljs.core.first.call(null,inst_26739);
var inst_26750 = cljs.core.nth.call(null,inst_26749,(0),null);
var inst_26751 = cljs.core.nth.call(null,inst_26749,(1),null);
var state_26838__$1 = (function (){var statearr_26841 = state_26838;
(statearr_26841[(8)] = inst_26750);

return statearr_26841;
})();
if(cljs.core.truth_(inst_26751)){
var statearr_26842_26928 = state_26838__$1;
(statearr_26842_26928[(1)] = (22));

} else {
var statearr_26843_26929 = state_26838__$1;
(statearr_26843_26929[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (27))){
var inst_26710 = (state_26838[(9)]);
var inst_26781 = (state_26838[(10)]);
var inst_26786 = (state_26838[(11)]);
var inst_26779 = (state_26838[(12)]);
var inst_26786__$1 = cljs.core._nth.call(null,inst_26779,inst_26781);
var inst_26787 = cljs.core.async.put_BANG_.call(null,inst_26786__$1,inst_26710,done);
var state_26838__$1 = (function (){var statearr_26844 = state_26838;
(statearr_26844[(11)] = inst_26786__$1);

return statearr_26844;
})();
if(cljs.core.truth_(inst_26787)){
var statearr_26845_26930 = state_26838__$1;
(statearr_26845_26930[(1)] = (30));

} else {
var statearr_26846_26931 = state_26838__$1;
(statearr_26846_26931[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (1))){
var state_26838__$1 = state_26838;
var statearr_26847_26932 = state_26838__$1;
(statearr_26847_26932[(2)] = null);

(statearr_26847_26932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (24))){
var inst_26739 = (state_26838[(7)]);
var inst_26756 = (state_26838[(2)]);
var inst_26757 = cljs.core.next.call(null,inst_26739);
var inst_26719 = inst_26757;
var inst_26720 = null;
var inst_26721 = (0);
var inst_26722 = (0);
var state_26838__$1 = (function (){var statearr_26848 = state_26838;
(statearr_26848[(13)] = inst_26722);

(statearr_26848[(14)] = inst_26719);

(statearr_26848[(15)] = inst_26721);

(statearr_26848[(16)] = inst_26756);

(statearr_26848[(17)] = inst_26720);

return statearr_26848;
})();
var statearr_26849_26933 = state_26838__$1;
(statearr_26849_26933[(2)] = null);

(statearr_26849_26933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (39))){
var state_26838__$1 = state_26838;
var statearr_26853_26934 = state_26838__$1;
(statearr_26853_26934[(2)] = null);

(statearr_26853_26934[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (4))){
var inst_26710 = (state_26838[(9)]);
var inst_26710__$1 = (state_26838[(2)]);
var inst_26711 = (inst_26710__$1 == null);
var state_26838__$1 = (function (){var statearr_26854 = state_26838;
(statearr_26854[(9)] = inst_26710__$1);

return statearr_26854;
})();
if(cljs.core.truth_(inst_26711)){
var statearr_26855_26935 = state_26838__$1;
(statearr_26855_26935[(1)] = (5));

} else {
var statearr_26856_26936 = state_26838__$1;
(statearr_26856_26936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (15))){
var inst_26722 = (state_26838[(13)]);
var inst_26719 = (state_26838[(14)]);
var inst_26721 = (state_26838[(15)]);
var inst_26720 = (state_26838[(17)]);
var inst_26735 = (state_26838[(2)]);
var inst_26736 = (inst_26722 + (1));
var tmp26850 = inst_26719;
var tmp26851 = inst_26721;
var tmp26852 = inst_26720;
var inst_26719__$1 = tmp26850;
var inst_26720__$1 = tmp26852;
var inst_26721__$1 = tmp26851;
var inst_26722__$1 = inst_26736;
var state_26838__$1 = (function (){var statearr_26857 = state_26838;
(statearr_26857[(13)] = inst_26722__$1);

(statearr_26857[(18)] = inst_26735);

(statearr_26857[(14)] = inst_26719__$1);

(statearr_26857[(15)] = inst_26721__$1);

(statearr_26857[(17)] = inst_26720__$1);

return statearr_26857;
})();
var statearr_26858_26937 = state_26838__$1;
(statearr_26858_26937[(2)] = null);

(statearr_26858_26937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (21))){
var inst_26760 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26862_26938 = state_26838__$1;
(statearr_26862_26938[(2)] = inst_26760);

(statearr_26862_26938[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (31))){
var inst_26786 = (state_26838[(11)]);
var inst_26790 = done.call(null,null);
var inst_26791 = cljs.core.async.untap_STAR_.call(null,m,inst_26786);
var state_26838__$1 = (function (){var statearr_26863 = state_26838;
(statearr_26863[(19)] = inst_26790);

return statearr_26863;
})();
var statearr_26864_26939 = state_26838__$1;
(statearr_26864_26939[(2)] = inst_26791);

(statearr_26864_26939[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (32))){
var inst_26780 = (state_26838[(20)]);
var inst_26781 = (state_26838[(10)]);
var inst_26778 = (state_26838[(21)]);
var inst_26779 = (state_26838[(12)]);
var inst_26793 = (state_26838[(2)]);
var inst_26794 = (inst_26781 + (1));
var tmp26859 = inst_26780;
var tmp26860 = inst_26778;
var tmp26861 = inst_26779;
var inst_26778__$1 = tmp26860;
var inst_26779__$1 = tmp26861;
var inst_26780__$1 = tmp26859;
var inst_26781__$1 = inst_26794;
var state_26838__$1 = (function (){var statearr_26865 = state_26838;
(statearr_26865[(20)] = inst_26780__$1);

(statearr_26865[(10)] = inst_26781__$1);

(statearr_26865[(21)] = inst_26778__$1);

(statearr_26865[(22)] = inst_26793);

(statearr_26865[(12)] = inst_26779__$1);

return statearr_26865;
})();
var statearr_26866_26940 = state_26838__$1;
(statearr_26866_26940[(2)] = null);

(statearr_26866_26940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (40))){
var inst_26806 = (state_26838[(23)]);
var inst_26810 = done.call(null,null);
var inst_26811 = cljs.core.async.untap_STAR_.call(null,m,inst_26806);
var state_26838__$1 = (function (){var statearr_26867 = state_26838;
(statearr_26867[(24)] = inst_26810);

return statearr_26867;
})();
var statearr_26868_26941 = state_26838__$1;
(statearr_26868_26941[(2)] = inst_26811);

(statearr_26868_26941[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (33))){
var inst_26797 = (state_26838[(25)]);
var inst_26799 = cljs.core.chunked_seq_QMARK_.call(null,inst_26797);
var state_26838__$1 = state_26838;
if(inst_26799){
var statearr_26869_26942 = state_26838__$1;
(statearr_26869_26942[(1)] = (36));

} else {
var statearr_26870_26943 = state_26838__$1;
(statearr_26870_26943[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (13))){
var inst_26729 = (state_26838[(26)]);
var inst_26732 = cljs.core.async.close_BANG_.call(null,inst_26729);
var state_26838__$1 = state_26838;
var statearr_26871_26944 = state_26838__$1;
(statearr_26871_26944[(2)] = inst_26732);

(statearr_26871_26944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (22))){
var inst_26750 = (state_26838[(8)]);
var inst_26753 = cljs.core.async.close_BANG_.call(null,inst_26750);
var state_26838__$1 = state_26838;
var statearr_26872_26945 = state_26838__$1;
(statearr_26872_26945[(2)] = inst_26753);

(statearr_26872_26945[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (36))){
var inst_26797 = (state_26838[(25)]);
var inst_26801 = cljs.core.chunk_first.call(null,inst_26797);
var inst_26802 = cljs.core.chunk_rest.call(null,inst_26797);
var inst_26803 = cljs.core.count.call(null,inst_26801);
var inst_26778 = inst_26802;
var inst_26779 = inst_26801;
var inst_26780 = inst_26803;
var inst_26781 = (0);
var state_26838__$1 = (function (){var statearr_26873 = state_26838;
(statearr_26873[(20)] = inst_26780);

(statearr_26873[(10)] = inst_26781);

(statearr_26873[(21)] = inst_26778);

(statearr_26873[(12)] = inst_26779);

return statearr_26873;
})();
var statearr_26874_26946 = state_26838__$1;
(statearr_26874_26946[(2)] = null);

(statearr_26874_26946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (41))){
var inst_26797 = (state_26838[(25)]);
var inst_26813 = (state_26838[(2)]);
var inst_26814 = cljs.core.next.call(null,inst_26797);
var inst_26778 = inst_26814;
var inst_26779 = null;
var inst_26780 = (0);
var inst_26781 = (0);
var state_26838__$1 = (function (){var statearr_26875 = state_26838;
(statearr_26875[(20)] = inst_26780);

(statearr_26875[(10)] = inst_26781);

(statearr_26875[(21)] = inst_26778);

(statearr_26875[(27)] = inst_26813);

(statearr_26875[(12)] = inst_26779);

return statearr_26875;
})();
var statearr_26876_26947 = state_26838__$1;
(statearr_26876_26947[(2)] = null);

(statearr_26876_26947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (43))){
var state_26838__$1 = state_26838;
var statearr_26877_26948 = state_26838__$1;
(statearr_26877_26948[(2)] = null);

(statearr_26877_26948[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (29))){
var inst_26822 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26878_26949 = state_26838__$1;
(statearr_26878_26949[(2)] = inst_26822);

(statearr_26878_26949[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (44))){
var inst_26831 = (state_26838[(2)]);
var state_26838__$1 = (function (){var statearr_26879 = state_26838;
(statearr_26879[(28)] = inst_26831);

return statearr_26879;
})();
var statearr_26880_26950 = state_26838__$1;
(statearr_26880_26950[(2)] = null);

(statearr_26880_26950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (6))){
var inst_26770 = (state_26838[(29)]);
var inst_26769 = cljs.core.deref.call(null,cs);
var inst_26770__$1 = cljs.core.keys.call(null,inst_26769);
var inst_26771 = cljs.core.count.call(null,inst_26770__$1);
var inst_26772 = cljs.core.reset_BANG_.call(null,dctr,inst_26771);
var inst_26777 = cljs.core.seq.call(null,inst_26770__$1);
var inst_26778 = inst_26777;
var inst_26779 = null;
var inst_26780 = (0);
var inst_26781 = (0);
var state_26838__$1 = (function (){var statearr_26881 = state_26838;
(statearr_26881[(20)] = inst_26780);

(statearr_26881[(29)] = inst_26770__$1);

(statearr_26881[(30)] = inst_26772);

(statearr_26881[(10)] = inst_26781);

(statearr_26881[(21)] = inst_26778);

(statearr_26881[(12)] = inst_26779);

return statearr_26881;
})();
var statearr_26882_26951 = state_26838__$1;
(statearr_26882_26951[(2)] = null);

(statearr_26882_26951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (28))){
var inst_26797 = (state_26838[(25)]);
var inst_26778 = (state_26838[(21)]);
var inst_26797__$1 = cljs.core.seq.call(null,inst_26778);
var state_26838__$1 = (function (){var statearr_26883 = state_26838;
(statearr_26883[(25)] = inst_26797__$1);

return statearr_26883;
})();
if(inst_26797__$1){
var statearr_26884_26952 = state_26838__$1;
(statearr_26884_26952[(1)] = (33));

} else {
var statearr_26885_26953 = state_26838__$1;
(statearr_26885_26953[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (25))){
var inst_26780 = (state_26838[(20)]);
var inst_26781 = (state_26838[(10)]);
var inst_26783 = (inst_26781 < inst_26780);
var inst_26784 = inst_26783;
var state_26838__$1 = state_26838;
if(cljs.core.truth_(inst_26784)){
var statearr_26886_26954 = state_26838__$1;
(statearr_26886_26954[(1)] = (27));

} else {
var statearr_26887_26955 = state_26838__$1;
(statearr_26887_26955[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (34))){
var state_26838__$1 = state_26838;
var statearr_26888_26956 = state_26838__$1;
(statearr_26888_26956[(2)] = null);

(statearr_26888_26956[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (17))){
var state_26838__$1 = state_26838;
var statearr_26889_26957 = state_26838__$1;
(statearr_26889_26957[(2)] = null);

(statearr_26889_26957[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (3))){
var inst_26836 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26838__$1,inst_26836);
} else {
if((state_val_26839 === (12))){
var inst_26765 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26890_26958 = state_26838__$1;
(statearr_26890_26958[(2)] = inst_26765);

(statearr_26890_26958[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (2))){
var state_26838__$1 = state_26838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26838__$1,(4),ch);
} else {
if((state_val_26839 === (23))){
var state_26838__$1 = state_26838;
var statearr_26891_26959 = state_26838__$1;
(statearr_26891_26959[(2)] = null);

(statearr_26891_26959[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (35))){
var inst_26820 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26892_26960 = state_26838__$1;
(statearr_26892_26960[(2)] = inst_26820);

(statearr_26892_26960[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (19))){
var inst_26739 = (state_26838[(7)]);
var inst_26743 = cljs.core.chunk_first.call(null,inst_26739);
var inst_26744 = cljs.core.chunk_rest.call(null,inst_26739);
var inst_26745 = cljs.core.count.call(null,inst_26743);
var inst_26719 = inst_26744;
var inst_26720 = inst_26743;
var inst_26721 = inst_26745;
var inst_26722 = (0);
var state_26838__$1 = (function (){var statearr_26893 = state_26838;
(statearr_26893[(13)] = inst_26722);

(statearr_26893[(14)] = inst_26719);

(statearr_26893[(15)] = inst_26721);

(statearr_26893[(17)] = inst_26720);

return statearr_26893;
})();
var statearr_26894_26961 = state_26838__$1;
(statearr_26894_26961[(2)] = null);

(statearr_26894_26961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (11))){
var inst_26719 = (state_26838[(14)]);
var inst_26739 = (state_26838[(7)]);
var inst_26739__$1 = cljs.core.seq.call(null,inst_26719);
var state_26838__$1 = (function (){var statearr_26895 = state_26838;
(statearr_26895[(7)] = inst_26739__$1);

return statearr_26895;
})();
if(inst_26739__$1){
var statearr_26896_26962 = state_26838__$1;
(statearr_26896_26962[(1)] = (16));

} else {
var statearr_26897_26963 = state_26838__$1;
(statearr_26897_26963[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (9))){
var inst_26767 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26898_26964 = state_26838__$1;
(statearr_26898_26964[(2)] = inst_26767);

(statearr_26898_26964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (5))){
var inst_26717 = cljs.core.deref.call(null,cs);
var inst_26718 = cljs.core.seq.call(null,inst_26717);
var inst_26719 = inst_26718;
var inst_26720 = null;
var inst_26721 = (0);
var inst_26722 = (0);
var state_26838__$1 = (function (){var statearr_26899 = state_26838;
(statearr_26899[(13)] = inst_26722);

(statearr_26899[(14)] = inst_26719);

(statearr_26899[(15)] = inst_26721);

(statearr_26899[(17)] = inst_26720);

return statearr_26899;
})();
var statearr_26900_26965 = state_26838__$1;
(statearr_26900_26965[(2)] = null);

(statearr_26900_26965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (14))){
var state_26838__$1 = state_26838;
var statearr_26901_26966 = state_26838__$1;
(statearr_26901_26966[(2)] = null);

(statearr_26901_26966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (45))){
var inst_26828 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26902_26967 = state_26838__$1;
(statearr_26902_26967[(2)] = inst_26828);

(statearr_26902_26967[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (26))){
var inst_26770 = (state_26838[(29)]);
var inst_26824 = (state_26838[(2)]);
var inst_26825 = cljs.core.seq.call(null,inst_26770);
var state_26838__$1 = (function (){var statearr_26903 = state_26838;
(statearr_26903[(31)] = inst_26824);

return statearr_26903;
})();
if(inst_26825){
var statearr_26904_26968 = state_26838__$1;
(statearr_26904_26968[(1)] = (42));

} else {
var statearr_26905_26969 = state_26838__$1;
(statearr_26905_26969[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (16))){
var inst_26739 = (state_26838[(7)]);
var inst_26741 = cljs.core.chunked_seq_QMARK_.call(null,inst_26739);
var state_26838__$1 = state_26838;
if(inst_26741){
var statearr_26906_26970 = state_26838__$1;
(statearr_26906_26970[(1)] = (19));

} else {
var statearr_26907_26971 = state_26838__$1;
(statearr_26907_26971[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (38))){
var inst_26817 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26908_26972 = state_26838__$1;
(statearr_26908_26972[(2)] = inst_26817);

(statearr_26908_26972[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (30))){
var state_26838__$1 = state_26838;
var statearr_26909_26973 = state_26838__$1;
(statearr_26909_26973[(2)] = null);

(statearr_26909_26973[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (10))){
var inst_26722 = (state_26838[(13)]);
var inst_26720 = (state_26838[(17)]);
var inst_26728 = cljs.core._nth.call(null,inst_26720,inst_26722);
var inst_26729 = cljs.core.nth.call(null,inst_26728,(0),null);
var inst_26730 = cljs.core.nth.call(null,inst_26728,(1),null);
var state_26838__$1 = (function (){var statearr_26910 = state_26838;
(statearr_26910[(26)] = inst_26729);

return statearr_26910;
})();
if(cljs.core.truth_(inst_26730)){
var statearr_26911_26974 = state_26838__$1;
(statearr_26911_26974[(1)] = (13));

} else {
var statearr_26912_26975 = state_26838__$1;
(statearr_26912_26975[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (18))){
var inst_26763 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26913_26976 = state_26838__$1;
(statearr_26913_26976[(2)] = inst_26763);

(statearr_26913_26976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (42))){
var state_26838__$1 = state_26838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26838__$1,(45),dchan);
} else {
if((state_val_26839 === (37))){
var inst_26797 = (state_26838[(25)]);
var inst_26710 = (state_26838[(9)]);
var inst_26806 = (state_26838[(23)]);
var inst_26806__$1 = cljs.core.first.call(null,inst_26797);
var inst_26807 = cljs.core.async.put_BANG_.call(null,inst_26806__$1,inst_26710,done);
var state_26838__$1 = (function (){var statearr_26914 = state_26838;
(statearr_26914[(23)] = inst_26806__$1);

return statearr_26914;
})();
if(cljs.core.truth_(inst_26807)){
var statearr_26915_26977 = state_26838__$1;
(statearr_26915_26977[(1)] = (39));

} else {
var statearr_26916_26978 = state_26838__$1;
(statearr_26916_26978[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (8))){
var inst_26722 = (state_26838[(13)]);
var inst_26721 = (state_26838[(15)]);
var inst_26724 = (inst_26722 < inst_26721);
var inst_26725 = inst_26724;
var state_26838__$1 = state_26838;
if(cljs.core.truth_(inst_26725)){
var statearr_26917_26979 = state_26838__$1;
(statearr_26917_26979[(1)] = (10));

} else {
var statearr_26918_26980 = state_26838__$1;
(statearr_26918_26980[(1)] = (11));

}

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
});})(c__21384__auto___26926,cs,m,dchan,dctr,done))
;
return ((function (switch__21322__auto__,c__21384__auto___26926,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21323__auto__ = null;
var cljs$core$async$mult_$_state_machine__21323__auto____0 = (function (){
var statearr_26922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26922[(0)] = cljs$core$async$mult_$_state_machine__21323__auto__);

(statearr_26922[(1)] = (1));

return statearr_26922;
});
var cljs$core$async$mult_$_state_machine__21323__auto____1 = (function (state_26838){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_26838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e26923){if((e26923 instanceof Object)){
var ex__21326__auto__ = e26923;
var statearr_26924_26981 = state_26838;
(statearr_26924_26981[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26982 = state_26838;
state_26838 = G__26982;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21323__auto__ = function(state_26838){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21323__auto____1.call(this,state_26838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21323__auto____0;
cljs$core$async$mult_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21323__auto____1;
return cljs$core$async$mult_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___26926,cs,m,dchan,dctr,done))
})();
var state__21386__auto__ = (function (){var statearr_26925 = f__21385__auto__.call(null);
(statearr_26925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___26926);

return statearr_26925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___26926,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__26984 = arguments.length;
switch (G__26984) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj26987 = {};
return obj26987;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18148__auto__ = m;
if(and__18148__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18796__auto__ = (((m == null))?null:m);
return (function (){var or__18160__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19200__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19200__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26992){
var map__26993 = p__26992;
var map__26993__$1 = ((cljs.core.seq_QMARK_.call(null,map__26993))?cljs.core.apply.call(null,cljs.core.hash_map,map__26993):map__26993);
var opts = map__26993__$1;
var statearr_26994_26997 = state;
(statearr_26994_26997[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26993,map__26993__$1,opts){
return (function (val){
var statearr_26995_26998 = state;
(statearr_26995_26998[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26993,map__26993__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26996_26999 = state;
(statearr_26996_26999[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26988){
var G__26989 = cljs.core.first.call(null,seq26988);
var seq26988__$1 = cljs.core.next.call(null,seq26988);
var G__26990 = cljs.core.first.call(null,seq26988__$1);
var seq26988__$2 = cljs.core.next.call(null,seq26988__$1);
var G__26991 = cljs.core.first.call(null,seq26988__$2);
var seq26988__$3 = cljs.core.next.call(null,seq26988__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26989,G__26990,G__26991,seq26988__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27119 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27119 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27120){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27120 = meta27120;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27119.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27119.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27119.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27119.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27119.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27119.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27119.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27119.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27119.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27121){
var self__ = this;
var _27121__$1 = this;
return self__.meta27120;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27121,meta27120__$1){
var self__ = this;
var _27121__$1 = this;
return (new cljs.core.async.t27119(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27120__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27119.cljs$lang$type = true;

cljs.core.async.t27119.cljs$lang$ctorStr = "cljs.core.async/t27119";

cljs.core.async.t27119.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27119");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27119 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27119(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27120){
return (new cljs.core.async.t27119(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27120));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27119(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21384__auto___27238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___27238,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___27238,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27191){
var state_val_27192 = (state_27191[(1)]);
if((state_val_27192 === (7))){
var inst_27135 = (state_27191[(7)]);
var inst_27140 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27135);
var state_27191__$1 = state_27191;
var statearr_27193_27239 = state_27191__$1;
(statearr_27193_27239[(2)] = inst_27140);

(statearr_27193_27239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (20))){
var inst_27150 = (state_27191[(8)]);
var state_27191__$1 = state_27191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27191__$1,(23),out,inst_27150);
} else {
if((state_val_27192 === (1))){
var inst_27125 = (state_27191[(9)]);
var inst_27125__$1 = calc_state.call(null);
var inst_27126 = cljs.core.seq_QMARK_.call(null,inst_27125__$1);
var state_27191__$1 = (function (){var statearr_27194 = state_27191;
(statearr_27194[(9)] = inst_27125__$1);

return statearr_27194;
})();
if(inst_27126){
var statearr_27195_27240 = state_27191__$1;
(statearr_27195_27240[(1)] = (2));

} else {
var statearr_27196_27241 = state_27191__$1;
(statearr_27196_27241[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (24))){
var inst_27143 = (state_27191[(10)]);
var inst_27135 = inst_27143;
var state_27191__$1 = (function (){var statearr_27197 = state_27191;
(statearr_27197[(7)] = inst_27135);

return statearr_27197;
})();
var statearr_27198_27242 = state_27191__$1;
(statearr_27198_27242[(2)] = null);

(statearr_27198_27242[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (4))){
var inst_27125 = (state_27191[(9)]);
var inst_27131 = (state_27191[(2)]);
var inst_27132 = cljs.core.get.call(null,inst_27131,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27133 = cljs.core.get.call(null,inst_27131,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27134 = cljs.core.get.call(null,inst_27131,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27135 = inst_27125;
var state_27191__$1 = (function (){var statearr_27199 = state_27191;
(statearr_27199[(11)] = inst_27132);

(statearr_27199[(12)] = inst_27133);

(statearr_27199[(7)] = inst_27135);

(statearr_27199[(13)] = inst_27134);

return statearr_27199;
})();
var statearr_27200_27243 = state_27191__$1;
(statearr_27200_27243[(2)] = null);

(statearr_27200_27243[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (15))){
var state_27191__$1 = state_27191;
var statearr_27201_27244 = state_27191__$1;
(statearr_27201_27244[(2)] = null);

(statearr_27201_27244[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (21))){
var inst_27143 = (state_27191[(10)]);
var inst_27135 = inst_27143;
var state_27191__$1 = (function (){var statearr_27202 = state_27191;
(statearr_27202[(7)] = inst_27135);

return statearr_27202;
})();
var statearr_27203_27245 = state_27191__$1;
(statearr_27203_27245[(2)] = null);

(statearr_27203_27245[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (13))){
var inst_27187 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
var statearr_27204_27246 = state_27191__$1;
(statearr_27204_27246[(2)] = inst_27187);

(statearr_27204_27246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (22))){
var inst_27185 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
var statearr_27205_27247 = state_27191__$1;
(statearr_27205_27247[(2)] = inst_27185);

(statearr_27205_27247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (6))){
var inst_27189 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27191__$1,inst_27189);
} else {
if((state_val_27192 === (25))){
var state_27191__$1 = state_27191;
var statearr_27206_27248 = state_27191__$1;
(statearr_27206_27248[(2)] = null);

(statearr_27206_27248[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (17))){
var inst_27165 = (state_27191[(14)]);
var state_27191__$1 = state_27191;
var statearr_27207_27249 = state_27191__$1;
(statearr_27207_27249[(2)] = inst_27165);

(statearr_27207_27249[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (3))){
var inst_27125 = (state_27191[(9)]);
var state_27191__$1 = state_27191;
var statearr_27208_27250 = state_27191__$1;
(statearr_27208_27250[(2)] = inst_27125);

(statearr_27208_27250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (12))){
var inst_27151 = (state_27191[(15)]);
var inst_27146 = (state_27191[(16)]);
var inst_27165 = (state_27191[(14)]);
var inst_27165__$1 = inst_27146.call(null,inst_27151);
var state_27191__$1 = (function (){var statearr_27209 = state_27191;
(statearr_27209[(14)] = inst_27165__$1);

return statearr_27209;
})();
if(cljs.core.truth_(inst_27165__$1)){
var statearr_27210_27251 = state_27191__$1;
(statearr_27210_27251[(1)] = (17));

} else {
var statearr_27211_27252 = state_27191__$1;
(statearr_27211_27252[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (2))){
var inst_27125 = (state_27191[(9)]);
var inst_27128 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27125);
var state_27191__$1 = state_27191;
var statearr_27212_27253 = state_27191__$1;
(statearr_27212_27253[(2)] = inst_27128);

(statearr_27212_27253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (23))){
var inst_27176 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
if(cljs.core.truth_(inst_27176)){
var statearr_27213_27254 = state_27191__$1;
(statearr_27213_27254[(1)] = (24));

} else {
var statearr_27214_27255 = state_27191__$1;
(statearr_27214_27255[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (19))){
var inst_27173 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
if(cljs.core.truth_(inst_27173)){
var statearr_27215_27256 = state_27191__$1;
(statearr_27215_27256[(1)] = (20));

} else {
var statearr_27216_27257 = state_27191__$1;
(statearr_27216_27257[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (11))){
var inst_27150 = (state_27191[(8)]);
var inst_27156 = (inst_27150 == null);
var state_27191__$1 = state_27191;
if(cljs.core.truth_(inst_27156)){
var statearr_27217_27258 = state_27191__$1;
(statearr_27217_27258[(1)] = (14));

} else {
var statearr_27218_27259 = state_27191__$1;
(statearr_27218_27259[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (9))){
var inst_27143 = (state_27191[(10)]);
var inst_27143__$1 = (state_27191[(2)]);
var inst_27144 = cljs.core.get.call(null,inst_27143__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27145 = cljs.core.get.call(null,inst_27143__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27146 = cljs.core.get.call(null,inst_27143__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_27191__$1 = (function (){var statearr_27219 = state_27191;
(statearr_27219[(16)] = inst_27146);

(statearr_27219[(10)] = inst_27143__$1);

(statearr_27219[(17)] = inst_27145);

return statearr_27219;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27191__$1,(10),inst_27144);
} else {
if((state_val_27192 === (5))){
var inst_27135 = (state_27191[(7)]);
var inst_27138 = cljs.core.seq_QMARK_.call(null,inst_27135);
var state_27191__$1 = state_27191;
if(inst_27138){
var statearr_27220_27260 = state_27191__$1;
(statearr_27220_27260[(1)] = (7));

} else {
var statearr_27221_27261 = state_27191__$1;
(statearr_27221_27261[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (14))){
var inst_27151 = (state_27191[(15)]);
var inst_27158 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27151);
var state_27191__$1 = state_27191;
var statearr_27222_27262 = state_27191__$1;
(statearr_27222_27262[(2)] = inst_27158);

(statearr_27222_27262[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (26))){
var inst_27181 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
var statearr_27223_27263 = state_27191__$1;
(statearr_27223_27263[(2)] = inst_27181);

(statearr_27223_27263[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (16))){
var inst_27161 = (state_27191[(2)]);
var inst_27162 = calc_state.call(null);
var inst_27135 = inst_27162;
var state_27191__$1 = (function (){var statearr_27224 = state_27191;
(statearr_27224[(18)] = inst_27161);

(statearr_27224[(7)] = inst_27135);

return statearr_27224;
})();
var statearr_27225_27264 = state_27191__$1;
(statearr_27225_27264[(2)] = null);

(statearr_27225_27264[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (10))){
var inst_27151 = (state_27191[(15)]);
var inst_27150 = (state_27191[(8)]);
var inst_27149 = (state_27191[(2)]);
var inst_27150__$1 = cljs.core.nth.call(null,inst_27149,(0),null);
var inst_27151__$1 = cljs.core.nth.call(null,inst_27149,(1),null);
var inst_27152 = (inst_27150__$1 == null);
var inst_27153 = cljs.core._EQ_.call(null,inst_27151__$1,change);
var inst_27154 = (inst_27152) || (inst_27153);
var state_27191__$1 = (function (){var statearr_27226 = state_27191;
(statearr_27226[(15)] = inst_27151__$1);

(statearr_27226[(8)] = inst_27150__$1);

return statearr_27226;
})();
if(cljs.core.truth_(inst_27154)){
var statearr_27227_27265 = state_27191__$1;
(statearr_27227_27265[(1)] = (11));

} else {
var statearr_27228_27266 = state_27191__$1;
(statearr_27228_27266[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (18))){
var inst_27151 = (state_27191[(15)]);
var inst_27146 = (state_27191[(16)]);
var inst_27145 = (state_27191[(17)]);
var inst_27168 = cljs.core.empty_QMARK_.call(null,inst_27146);
var inst_27169 = inst_27145.call(null,inst_27151);
var inst_27170 = cljs.core.not.call(null,inst_27169);
var inst_27171 = (inst_27168) && (inst_27170);
var state_27191__$1 = state_27191;
var statearr_27229_27267 = state_27191__$1;
(statearr_27229_27267[(2)] = inst_27171);

(statearr_27229_27267[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (8))){
var inst_27135 = (state_27191[(7)]);
var state_27191__$1 = state_27191;
var statearr_27230_27268 = state_27191__$1;
(statearr_27230_27268[(2)] = inst_27135);

(statearr_27230_27268[(1)] = (9));


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
});})(c__21384__auto___27238,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21322__auto__,c__21384__auto___27238,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21323__auto__ = null;
var cljs$core$async$mix_$_state_machine__21323__auto____0 = (function (){
var statearr_27234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27234[(0)] = cljs$core$async$mix_$_state_machine__21323__auto__);

(statearr_27234[(1)] = (1));

return statearr_27234;
});
var cljs$core$async$mix_$_state_machine__21323__auto____1 = (function (state_27191){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_27191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e27235){if((e27235 instanceof Object)){
var ex__21326__auto__ = e27235;
var statearr_27236_27269 = state_27191;
(statearr_27236_27269[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27270 = state_27191;
state_27191 = G__27270;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21323__auto__ = function(state_27191){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21323__auto____1.call(this,state_27191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21323__auto____0;
cljs$core$async$mix_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21323__auto____1;
return cljs$core$async$mix_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___27238,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21386__auto__ = (function (){var statearr_27237 = f__21385__auto__.call(null);
(statearr_27237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___27238);

return statearr_27237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___27238,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj27272 = {};
return obj27272;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18148__auto__ = p;
if(and__18148__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18148__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18796__auto__ = (((p == null))?null:p);
return (function (){var or__18160__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18148__auto__ = p;
if(and__18148__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18148__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18796__auto__ = (((p == null))?null:p);
return (function (){var or__18160__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__27274 = arguments.length;
switch (G__27274) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18148__auto__ = p;
if(and__18148__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18148__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18796__auto__ = (((p == null))?null:p);
return (function (){var or__18160__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18148__auto__ = p;
if(and__18148__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18148__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18796__auto__ = (((p == null))?null:p);
return (function (){var or__18160__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18796__auto__)]);
if(or__18160__auto__){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18160__auto____$1){
return or__18160__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__27278 = arguments.length;
switch (G__27278) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18160__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18160__auto__,mults){
return (function (p1__27276_SHARP_){
if(cljs.core.truth_(p1__27276_SHARP_.call(null,topic))){
return p1__27276_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27276_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18160__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27279 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27279 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta27280){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta27280 = meta27280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27279.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27279.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27279.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t27279.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27279.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27279.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27279.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27281){
var self__ = this;
var _27281__$1 = this;
return self__.meta27280;
});})(mults,ensure_mult))
;

cljs.core.async.t27279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27281,meta27280__$1){
var self__ = this;
var _27281__$1 = this;
return (new cljs.core.async.t27279(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta27280__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27279.cljs$lang$type = true;

cljs.core.async.t27279.cljs$lang$ctorStr = "cljs.core.async/t27279";

cljs.core.async.t27279.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27279");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27279 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27279(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27280){
return (new cljs.core.async.t27279(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27280));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27279(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21384__auto___27402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___27402,mults,ensure_mult,p){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___27402,mults,ensure_mult,p){
return (function (state_27353){
var state_val_27354 = (state_27353[(1)]);
if((state_val_27354 === (7))){
var inst_27349 = (state_27353[(2)]);
var state_27353__$1 = state_27353;
var statearr_27355_27403 = state_27353__$1;
(statearr_27355_27403[(2)] = inst_27349);

(statearr_27355_27403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (20))){
var state_27353__$1 = state_27353;
var statearr_27356_27404 = state_27353__$1;
(statearr_27356_27404[(2)] = null);

(statearr_27356_27404[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (1))){
var state_27353__$1 = state_27353;
var statearr_27357_27405 = state_27353__$1;
(statearr_27357_27405[(2)] = null);

(statearr_27357_27405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (24))){
var inst_27332 = (state_27353[(7)]);
var inst_27341 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27332);
var state_27353__$1 = state_27353;
var statearr_27358_27406 = state_27353__$1;
(statearr_27358_27406[(2)] = inst_27341);

(statearr_27358_27406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (4))){
var inst_27284 = (state_27353[(8)]);
var inst_27284__$1 = (state_27353[(2)]);
var inst_27285 = (inst_27284__$1 == null);
var state_27353__$1 = (function (){var statearr_27359 = state_27353;
(statearr_27359[(8)] = inst_27284__$1);

return statearr_27359;
})();
if(cljs.core.truth_(inst_27285)){
var statearr_27360_27407 = state_27353__$1;
(statearr_27360_27407[(1)] = (5));

} else {
var statearr_27361_27408 = state_27353__$1;
(statearr_27361_27408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (15))){
var inst_27326 = (state_27353[(2)]);
var state_27353__$1 = state_27353;
var statearr_27362_27409 = state_27353__$1;
(statearr_27362_27409[(2)] = inst_27326);

(statearr_27362_27409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (21))){
var inst_27346 = (state_27353[(2)]);
var state_27353__$1 = (function (){var statearr_27363 = state_27353;
(statearr_27363[(9)] = inst_27346);

return statearr_27363;
})();
var statearr_27364_27410 = state_27353__$1;
(statearr_27364_27410[(2)] = null);

(statearr_27364_27410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (13))){
var inst_27308 = (state_27353[(10)]);
var inst_27310 = cljs.core.chunked_seq_QMARK_.call(null,inst_27308);
var state_27353__$1 = state_27353;
if(inst_27310){
var statearr_27365_27411 = state_27353__$1;
(statearr_27365_27411[(1)] = (16));

} else {
var statearr_27366_27412 = state_27353__$1;
(statearr_27366_27412[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (22))){
var inst_27338 = (state_27353[(2)]);
var state_27353__$1 = state_27353;
if(cljs.core.truth_(inst_27338)){
var statearr_27367_27413 = state_27353__$1;
(statearr_27367_27413[(1)] = (23));

} else {
var statearr_27368_27414 = state_27353__$1;
(statearr_27368_27414[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (6))){
var inst_27332 = (state_27353[(7)]);
var inst_27284 = (state_27353[(8)]);
var inst_27334 = (state_27353[(11)]);
var inst_27332__$1 = topic_fn.call(null,inst_27284);
var inst_27333 = cljs.core.deref.call(null,mults);
var inst_27334__$1 = cljs.core.get.call(null,inst_27333,inst_27332__$1);
var state_27353__$1 = (function (){var statearr_27369 = state_27353;
(statearr_27369[(7)] = inst_27332__$1);

(statearr_27369[(11)] = inst_27334__$1);

return statearr_27369;
})();
if(cljs.core.truth_(inst_27334__$1)){
var statearr_27370_27415 = state_27353__$1;
(statearr_27370_27415[(1)] = (19));

} else {
var statearr_27371_27416 = state_27353__$1;
(statearr_27371_27416[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (25))){
var inst_27343 = (state_27353[(2)]);
var state_27353__$1 = state_27353;
var statearr_27372_27417 = state_27353__$1;
(statearr_27372_27417[(2)] = inst_27343);

(statearr_27372_27417[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (17))){
var inst_27308 = (state_27353[(10)]);
var inst_27317 = cljs.core.first.call(null,inst_27308);
var inst_27318 = cljs.core.async.muxch_STAR_.call(null,inst_27317);
var inst_27319 = cljs.core.async.close_BANG_.call(null,inst_27318);
var inst_27320 = cljs.core.next.call(null,inst_27308);
var inst_27294 = inst_27320;
var inst_27295 = null;
var inst_27296 = (0);
var inst_27297 = (0);
var state_27353__$1 = (function (){var statearr_27373 = state_27353;
(statearr_27373[(12)] = inst_27295);

(statearr_27373[(13)] = inst_27297);

(statearr_27373[(14)] = inst_27319);

(statearr_27373[(15)] = inst_27294);

(statearr_27373[(16)] = inst_27296);

return statearr_27373;
})();
var statearr_27374_27418 = state_27353__$1;
(statearr_27374_27418[(2)] = null);

(statearr_27374_27418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (3))){
var inst_27351 = (state_27353[(2)]);
var state_27353__$1 = state_27353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27353__$1,inst_27351);
} else {
if((state_val_27354 === (12))){
var inst_27328 = (state_27353[(2)]);
var state_27353__$1 = state_27353;
var statearr_27375_27419 = state_27353__$1;
(statearr_27375_27419[(2)] = inst_27328);

(statearr_27375_27419[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (2))){
var state_27353__$1 = state_27353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27353__$1,(4),ch);
} else {
if((state_val_27354 === (23))){
var state_27353__$1 = state_27353;
var statearr_27376_27420 = state_27353__$1;
(statearr_27376_27420[(2)] = null);

(statearr_27376_27420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (19))){
var inst_27284 = (state_27353[(8)]);
var inst_27334 = (state_27353[(11)]);
var inst_27336 = cljs.core.async.muxch_STAR_.call(null,inst_27334);
var state_27353__$1 = state_27353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27353__$1,(22),inst_27336,inst_27284);
} else {
if((state_val_27354 === (11))){
var inst_27308 = (state_27353[(10)]);
var inst_27294 = (state_27353[(15)]);
var inst_27308__$1 = cljs.core.seq.call(null,inst_27294);
var state_27353__$1 = (function (){var statearr_27377 = state_27353;
(statearr_27377[(10)] = inst_27308__$1);

return statearr_27377;
})();
if(inst_27308__$1){
var statearr_27378_27421 = state_27353__$1;
(statearr_27378_27421[(1)] = (13));

} else {
var statearr_27379_27422 = state_27353__$1;
(statearr_27379_27422[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (9))){
var inst_27330 = (state_27353[(2)]);
var state_27353__$1 = state_27353;
var statearr_27380_27423 = state_27353__$1;
(statearr_27380_27423[(2)] = inst_27330);

(statearr_27380_27423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (5))){
var inst_27291 = cljs.core.deref.call(null,mults);
var inst_27292 = cljs.core.vals.call(null,inst_27291);
var inst_27293 = cljs.core.seq.call(null,inst_27292);
var inst_27294 = inst_27293;
var inst_27295 = null;
var inst_27296 = (0);
var inst_27297 = (0);
var state_27353__$1 = (function (){var statearr_27381 = state_27353;
(statearr_27381[(12)] = inst_27295);

(statearr_27381[(13)] = inst_27297);

(statearr_27381[(15)] = inst_27294);

(statearr_27381[(16)] = inst_27296);

return statearr_27381;
})();
var statearr_27382_27424 = state_27353__$1;
(statearr_27382_27424[(2)] = null);

(statearr_27382_27424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (14))){
var state_27353__$1 = state_27353;
var statearr_27386_27425 = state_27353__$1;
(statearr_27386_27425[(2)] = null);

(statearr_27386_27425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (16))){
var inst_27308 = (state_27353[(10)]);
var inst_27312 = cljs.core.chunk_first.call(null,inst_27308);
var inst_27313 = cljs.core.chunk_rest.call(null,inst_27308);
var inst_27314 = cljs.core.count.call(null,inst_27312);
var inst_27294 = inst_27313;
var inst_27295 = inst_27312;
var inst_27296 = inst_27314;
var inst_27297 = (0);
var state_27353__$1 = (function (){var statearr_27387 = state_27353;
(statearr_27387[(12)] = inst_27295);

(statearr_27387[(13)] = inst_27297);

(statearr_27387[(15)] = inst_27294);

(statearr_27387[(16)] = inst_27296);

return statearr_27387;
})();
var statearr_27388_27426 = state_27353__$1;
(statearr_27388_27426[(2)] = null);

(statearr_27388_27426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (10))){
var inst_27295 = (state_27353[(12)]);
var inst_27297 = (state_27353[(13)]);
var inst_27294 = (state_27353[(15)]);
var inst_27296 = (state_27353[(16)]);
var inst_27302 = cljs.core._nth.call(null,inst_27295,inst_27297);
var inst_27303 = cljs.core.async.muxch_STAR_.call(null,inst_27302);
var inst_27304 = cljs.core.async.close_BANG_.call(null,inst_27303);
var inst_27305 = (inst_27297 + (1));
var tmp27383 = inst_27295;
var tmp27384 = inst_27294;
var tmp27385 = inst_27296;
var inst_27294__$1 = tmp27384;
var inst_27295__$1 = tmp27383;
var inst_27296__$1 = tmp27385;
var inst_27297__$1 = inst_27305;
var state_27353__$1 = (function (){var statearr_27389 = state_27353;
(statearr_27389[(12)] = inst_27295__$1);

(statearr_27389[(17)] = inst_27304);

(statearr_27389[(13)] = inst_27297__$1);

(statearr_27389[(15)] = inst_27294__$1);

(statearr_27389[(16)] = inst_27296__$1);

return statearr_27389;
})();
var statearr_27390_27427 = state_27353__$1;
(statearr_27390_27427[(2)] = null);

(statearr_27390_27427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (18))){
var inst_27323 = (state_27353[(2)]);
var state_27353__$1 = state_27353;
var statearr_27391_27428 = state_27353__$1;
(statearr_27391_27428[(2)] = inst_27323);

(statearr_27391_27428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27354 === (8))){
var inst_27297 = (state_27353[(13)]);
var inst_27296 = (state_27353[(16)]);
var inst_27299 = (inst_27297 < inst_27296);
var inst_27300 = inst_27299;
var state_27353__$1 = state_27353;
if(cljs.core.truth_(inst_27300)){
var statearr_27392_27429 = state_27353__$1;
(statearr_27392_27429[(1)] = (10));

} else {
var statearr_27393_27430 = state_27353__$1;
(statearr_27393_27430[(1)] = (11));

}

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
});})(c__21384__auto___27402,mults,ensure_mult,p))
;
return ((function (switch__21322__auto__,c__21384__auto___27402,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_27397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27397[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_27397[(1)] = (1));

return statearr_27397;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_27353){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_27353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e27398){if((e27398 instanceof Object)){
var ex__21326__auto__ = e27398;
var statearr_27399_27431 = state_27353;
(statearr_27399_27431[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27432 = state_27353;
state_27353 = G__27432;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_27353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_27353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___27402,mults,ensure_mult,p))
})();
var state__21386__auto__ = (function (){var statearr_27400 = f__21385__auto__.call(null);
(statearr_27400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___27402);

return statearr_27400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___27402,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__27434 = arguments.length;
switch (G__27434) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__27437 = arguments.length;
switch (G__27437) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__27440 = arguments.length;
switch (G__27440) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21384__auto___27510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___27510,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___27510,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27479){
var state_val_27480 = (state_27479[(1)]);
if((state_val_27480 === (7))){
var state_27479__$1 = state_27479;
var statearr_27481_27511 = state_27479__$1;
(statearr_27481_27511[(2)] = null);

(statearr_27481_27511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (1))){
var state_27479__$1 = state_27479;
var statearr_27482_27512 = state_27479__$1;
(statearr_27482_27512[(2)] = null);

(statearr_27482_27512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (4))){
var inst_27443 = (state_27479[(7)]);
var inst_27445 = (inst_27443 < cnt);
var state_27479__$1 = state_27479;
if(cljs.core.truth_(inst_27445)){
var statearr_27483_27513 = state_27479__$1;
(statearr_27483_27513[(1)] = (6));

} else {
var statearr_27484_27514 = state_27479__$1;
(statearr_27484_27514[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (15))){
var inst_27475 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
var statearr_27485_27515 = state_27479__$1;
(statearr_27485_27515[(2)] = inst_27475);

(statearr_27485_27515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (13))){
var inst_27468 = cljs.core.async.close_BANG_.call(null,out);
var state_27479__$1 = state_27479;
var statearr_27486_27516 = state_27479__$1;
(statearr_27486_27516[(2)] = inst_27468);

(statearr_27486_27516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (6))){
var state_27479__$1 = state_27479;
var statearr_27487_27517 = state_27479__$1;
(statearr_27487_27517[(2)] = null);

(statearr_27487_27517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (3))){
var inst_27477 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27479__$1,inst_27477);
} else {
if((state_val_27480 === (12))){
var inst_27465 = (state_27479[(8)]);
var inst_27465__$1 = (state_27479[(2)]);
var inst_27466 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27465__$1);
var state_27479__$1 = (function (){var statearr_27488 = state_27479;
(statearr_27488[(8)] = inst_27465__$1);

return statearr_27488;
})();
if(cljs.core.truth_(inst_27466)){
var statearr_27489_27518 = state_27479__$1;
(statearr_27489_27518[(1)] = (13));

} else {
var statearr_27490_27519 = state_27479__$1;
(statearr_27490_27519[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (2))){
var inst_27442 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27443 = (0);
var state_27479__$1 = (function (){var statearr_27491 = state_27479;
(statearr_27491[(7)] = inst_27443);

(statearr_27491[(9)] = inst_27442);

return statearr_27491;
})();
var statearr_27492_27520 = state_27479__$1;
(statearr_27492_27520[(2)] = null);

(statearr_27492_27520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (11))){
var inst_27443 = (state_27479[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27479,(10),Object,null,(9));
var inst_27452 = chs__$1.call(null,inst_27443);
var inst_27453 = done.call(null,inst_27443);
var inst_27454 = cljs.core.async.take_BANG_.call(null,inst_27452,inst_27453);
var state_27479__$1 = state_27479;
var statearr_27493_27521 = state_27479__$1;
(statearr_27493_27521[(2)] = inst_27454);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27479__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (9))){
var inst_27443 = (state_27479[(7)]);
var inst_27456 = (state_27479[(2)]);
var inst_27457 = (inst_27443 + (1));
var inst_27443__$1 = inst_27457;
var state_27479__$1 = (function (){var statearr_27494 = state_27479;
(statearr_27494[(7)] = inst_27443__$1);

(statearr_27494[(10)] = inst_27456);

return statearr_27494;
})();
var statearr_27495_27522 = state_27479__$1;
(statearr_27495_27522[(2)] = null);

(statearr_27495_27522[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (5))){
var inst_27463 = (state_27479[(2)]);
var state_27479__$1 = (function (){var statearr_27496 = state_27479;
(statearr_27496[(11)] = inst_27463);

return statearr_27496;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27479__$1,(12),dchan);
} else {
if((state_val_27480 === (14))){
var inst_27465 = (state_27479[(8)]);
var inst_27470 = cljs.core.apply.call(null,f,inst_27465);
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27479__$1,(16),out,inst_27470);
} else {
if((state_val_27480 === (16))){
var inst_27472 = (state_27479[(2)]);
var state_27479__$1 = (function (){var statearr_27497 = state_27479;
(statearr_27497[(12)] = inst_27472);

return statearr_27497;
})();
var statearr_27498_27523 = state_27479__$1;
(statearr_27498_27523[(2)] = null);

(statearr_27498_27523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (10))){
var inst_27447 = (state_27479[(2)]);
var inst_27448 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27479__$1 = (function (){var statearr_27499 = state_27479;
(statearr_27499[(13)] = inst_27447);

return statearr_27499;
})();
var statearr_27500_27524 = state_27479__$1;
(statearr_27500_27524[(2)] = inst_27448);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27479__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (8))){
var inst_27461 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
var statearr_27501_27525 = state_27479__$1;
(statearr_27501_27525[(2)] = inst_27461);

(statearr_27501_27525[(1)] = (5));


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
});})(c__21384__auto___27510,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21322__auto__,c__21384__auto___27510,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_27505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27505[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_27505[(1)] = (1));

return statearr_27505;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_27479){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_27479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e27506){if((e27506 instanceof Object)){
var ex__21326__auto__ = e27506;
var statearr_27507_27526 = state_27479;
(statearr_27507_27526[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27527 = state_27479;
state_27479 = G__27527;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_27479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_27479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___27510,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21386__auto__ = (function (){var statearr_27508 = f__21385__auto__.call(null);
(statearr_27508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___27510);

return statearr_27508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___27510,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__27530 = arguments.length;
switch (G__27530) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21384__auto___27585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___27585,out){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___27585,out){
return (function (state_27560){
var state_val_27561 = (state_27560[(1)]);
if((state_val_27561 === (7))){
var inst_27540 = (state_27560[(7)]);
var inst_27539 = (state_27560[(8)]);
var inst_27539__$1 = (state_27560[(2)]);
var inst_27540__$1 = cljs.core.nth.call(null,inst_27539__$1,(0),null);
var inst_27541 = cljs.core.nth.call(null,inst_27539__$1,(1),null);
var inst_27542 = (inst_27540__$1 == null);
var state_27560__$1 = (function (){var statearr_27562 = state_27560;
(statearr_27562[(7)] = inst_27540__$1);

(statearr_27562[(9)] = inst_27541);

(statearr_27562[(8)] = inst_27539__$1);

return statearr_27562;
})();
if(cljs.core.truth_(inst_27542)){
var statearr_27563_27586 = state_27560__$1;
(statearr_27563_27586[(1)] = (8));

} else {
var statearr_27564_27587 = state_27560__$1;
(statearr_27564_27587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (1))){
var inst_27531 = cljs.core.vec.call(null,chs);
var inst_27532 = inst_27531;
var state_27560__$1 = (function (){var statearr_27565 = state_27560;
(statearr_27565[(10)] = inst_27532);

return statearr_27565;
})();
var statearr_27566_27588 = state_27560__$1;
(statearr_27566_27588[(2)] = null);

(statearr_27566_27588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (4))){
var inst_27532 = (state_27560[(10)]);
var state_27560__$1 = state_27560;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27560__$1,(7),inst_27532);
} else {
if((state_val_27561 === (6))){
var inst_27556 = (state_27560[(2)]);
var state_27560__$1 = state_27560;
var statearr_27567_27589 = state_27560__$1;
(statearr_27567_27589[(2)] = inst_27556);

(statearr_27567_27589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (3))){
var inst_27558 = (state_27560[(2)]);
var state_27560__$1 = state_27560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27560__$1,inst_27558);
} else {
if((state_val_27561 === (2))){
var inst_27532 = (state_27560[(10)]);
var inst_27534 = cljs.core.count.call(null,inst_27532);
var inst_27535 = (inst_27534 > (0));
var state_27560__$1 = state_27560;
if(cljs.core.truth_(inst_27535)){
var statearr_27569_27590 = state_27560__$1;
(statearr_27569_27590[(1)] = (4));

} else {
var statearr_27570_27591 = state_27560__$1;
(statearr_27570_27591[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (11))){
var inst_27532 = (state_27560[(10)]);
var inst_27549 = (state_27560[(2)]);
var tmp27568 = inst_27532;
var inst_27532__$1 = tmp27568;
var state_27560__$1 = (function (){var statearr_27571 = state_27560;
(statearr_27571[(11)] = inst_27549);

(statearr_27571[(10)] = inst_27532__$1);

return statearr_27571;
})();
var statearr_27572_27592 = state_27560__$1;
(statearr_27572_27592[(2)] = null);

(statearr_27572_27592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (9))){
var inst_27540 = (state_27560[(7)]);
var state_27560__$1 = state_27560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27560__$1,(11),out,inst_27540);
} else {
if((state_val_27561 === (5))){
var inst_27554 = cljs.core.async.close_BANG_.call(null,out);
var state_27560__$1 = state_27560;
var statearr_27573_27593 = state_27560__$1;
(statearr_27573_27593[(2)] = inst_27554);

(statearr_27573_27593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (10))){
var inst_27552 = (state_27560[(2)]);
var state_27560__$1 = state_27560;
var statearr_27574_27594 = state_27560__$1;
(statearr_27574_27594[(2)] = inst_27552);

(statearr_27574_27594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (8))){
var inst_27540 = (state_27560[(7)]);
var inst_27541 = (state_27560[(9)]);
var inst_27539 = (state_27560[(8)]);
var inst_27532 = (state_27560[(10)]);
var inst_27544 = (function (){var c = inst_27541;
var v = inst_27540;
var vec__27537 = inst_27539;
var cs = inst_27532;
return ((function (c,v,vec__27537,cs,inst_27540,inst_27541,inst_27539,inst_27532,state_val_27561,c__21384__auto___27585,out){
return (function (p1__27528_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27528_SHARP_);
});
;})(c,v,vec__27537,cs,inst_27540,inst_27541,inst_27539,inst_27532,state_val_27561,c__21384__auto___27585,out))
})();
var inst_27545 = cljs.core.filterv.call(null,inst_27544,inst_27532);
var inst_27532__$1 = inst_27545;
var state_27560__$1 = (function (){var statearr_27575 = state_27560;
(statearr_27575[(10)] = inst_27532__$1);

return statearr_27575;
})();
var statearr_27576_27595 = state_27560__$1;
(statearr_27576_27595[(2)] = null);

(statearr_27576_27595[(1)] = (2));


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
});})(c__21384__auto___27585,out))
;
return ((function (switch__21322__auto__,c__21384__auto___27585,out){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_27580 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27580[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_27580[(1)] = (1));

return statearr_27580;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_27560){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_27560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e27581){if((e27581 instanceof Object)){
var ex__21326__auto__ = e27581;
var statearr_27582_27596 = state_27560;
(statearr_27582_27596[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27597 = state_27560;
state_27560 = G__27597;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_27560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_27560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___27585,out))
})();
var state__21386__auto__ = (function (){var statearr_27583 = f__21385__auto__.call(null);
(statearr_27583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___27585);

return statearr_27583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___27585,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__27599 = arguments.length;
switch (G__27599) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21384__auto___27647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___27647,out){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___27647,out){
return (function (state_27623){
var state_val_27624 = (state_27623[(1)]);
if((state_val_27624 === (7))){
var inst_27605 = (state_27623[(7)]);
var inst_27605__$1 = (state_27623[(2)]);
var inst_27606 = (inst_27605__$1 == null);
var inst_27607 = cljs.core.not.call(null,inst_27606);
var state_27623__$1 = (function (){var statearr_27625 = state_27623;
(statearr_27625[(7)] = inst_27605__$1);

return statearr_27625;
})();
if(inst_27607){
var statearr_27626_27648 = state_27623__$1;
(statearr_27626_27648[(1)] = (8));

} else {
var statearr_27627_27649 = state_27623__$1;
(statearr_27627_27649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (1))){
var inst_27600 = (0);
var state_27623__$1 = (function (){var statearr_27628 = state_27623;
(statearr_27628[(8)] = inst_27600);

return statearr_27628;
})();
var statearr_27629_27650 = state_27623__$1;
(statearr_27629_27650[(2)] = null);

(statearr_27629_27650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (4))){
var state_27623__$1 = state_27623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27623__$1,(7),ch);
} else {
if((state_val_27624 === (6))){
var inst_27618 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
var statearr_27630_27651 = state_27623__$1;
(statearr_27630_27651[(2)] = inst_27618);

(statearr_27630_27651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (3))){
var inst_27620 = (state_27623[(2)]);
var inst_27621 = cljs.core.async.close_BANG_.call(null,out);
var state_27623__$1 = (function (){var statearr_27631 = state_27623;
(statearr_27631[(9)] = inst_27620);

return statearr_27631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27623__$1,inst_27621);
} else {
if((state_val_27624 === (2))){
var inst_27600 = (state_27623[(8)]);
var inst_27602 = (inst_27600 < n);
var state_27623__$1 = state_27623;
if(cljs.core.truth_(inst_27602)){
var statearr_27632_27652 = state_27623__$1;
(statearr_27632_27652[(1)] = (4));

} else {
var statearr_27633_27653 = state_27623__$1;
(statearr_27633_27653[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (11))){
var inst_27600 = (state_27623[(8)]);
var inst_27610 = (state_27623[(2)]);
var inst_27611 = (inst_27600 + (1));
var inst_27600__$1 = inst_27611;
var state_27623__$1 = (function (){var statearr_27634 = state_27623;
(statearr_27634[(10)] = inst_27610);

(statearr_27634[(8)] = inst_27600__$1);

return statearr_27634;
})();
var statearr_27635_27654 = state_27623__$1;
(statearr_27635_27654[(2)] = null);

(statearr_27635_27654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (9))){
var state_27623__$1 = state_27623;
var statearr_27636_27655 = state_27623__$1;
(statearr_27636_27655[(2)] = null);

(statearr_27636_27655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (5))){
var state_27623__$1 = state_27623;
var statearr_27637_27656 = state_27623__$1;
(statearr_27637_27656[(2)] = null);

(statearr_27637_27656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (10))){
var inst_27615 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
var statearr_27638_27657 = state_27623__$1;
(statearr_27638_27657[(2)] = inst_27615);

(statearr_27638_27657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (8))){
var inst_27605 = (state_27623[(7)]);
var state_27623__$1 = state_27623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27623__$1,(11),out,inst_27605);
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
});})(c__21384__auto___27647,out))
;
return ((function (switch__21322__auto__,c__21384__auto___27647,out){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_27642 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27642[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_27642[(1)] = (1));

return statearr_27642;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_27623){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_27623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e27643){if((e27643 instanceof Object)){
var ex__21326__auto__ = e27643;
var statearr_27644_27658 = state_27623;
(statearr_27644_27658[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27659 = state_27623;
state_27623 = G__27659;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_27623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_27623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___27647,out))
})();
var state__21386__auto__ = (function (){var statearr_27645 = f__21385__auto__.call(null);
(statearr_27645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___27647);

return statearr_27645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___27647,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27667 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27667 = (function (ch,f,map_LT_,meta27668){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27668 = meta27668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27667.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27667.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27667.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27667.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27670 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27670 = (function (fn1,_,meta27668,map_LT_,f,ch,meta27671){
this.fn1 = fn1;
this._ = _;
this.meta27668 = meta27668;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27671 = meta27671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27670.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27670.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27670.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27660_SHARP_){
return f1.call(null,(((p1__27660_SHARP_ == null))?null:self__.f.call(null,p1__27660_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27672){
var self__ = this;
var _27672__$1 = this;
return self__.meta27671;
});})(___$1))
;

cljs.core.async.t27670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27672,meta27671__$1){
var self__ = this;
var _27672__$1 = this;
return (new cljs.core.async.t27670(self__.fn1,self__._,self__.meta27668,self__.map_LT_,self__.f,self__.ch,meta27671__$1));
});})(___$1))
;

cljs.core.async.t27670.cljs$lang$type = true;

cljs.core.async.t27670.cljs$lang$ctorStr = "cljs.core.async/t27670";

cljs.core.async.t27670.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27670");
});})(___$1))
;

cljs.core.async.__GT_t27670 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27670(fn1__$1,___$2,meta27668__$1,map_LT___$1,f__$1,ch__$1,meta27671){
return (new cljs.core.async.t27670(fn1__$1,___$2,meta27668__$1,map_LT___$1,f__$1,ch__$1,meta27671));
});})(___$1))
;

}

return (new cljs.core.async.t27670(fn1,___$1,self__.meta27668,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18148__auto__ = ret;
if(cljs.core.truth_(and__18148__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18148__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27667.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27667.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27667.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27669){
var self__ = this;
var _27669__$1 = this;
return self__.meta27668;
});

cljs.core.async.t27667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27669,meta27668__$1){
var self__ = this;
var _27669__$1 = this;
return (new cljs.core.async.t27667(self__.ch,self__.f,self__.map_LT_,meta27668__$1));
});

cljs.core.async.t27667.cljs$lang$type = true;

cljs.core.async.t27667.cljs$lang$ctorStr = "cljs.core.async/t27667";

cljs.core.async.t27667.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27667");
});

cljs.core.async.__GT_t27667 = (function cljs$core$async$map_LT__$___GT_t27667(ch__$1,f__$1,map_LT___$1,meta27668){
return (new cljs.core.async.t27667(ch__$1,f__$1,map_LT___$1,meta27668));
});

}

return (new cljs.core.async.t27667(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27676 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27676 = (function (ch,f,map_GT_,meta27677){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27677 = meta27677;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27676.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27676.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27676.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27676.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27676.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27676.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27678){
var self__ = this;
var _27678__$1 = this;
return self__.meta27677;
});

cljs.core.async.t27676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27678,meta27677__$1){
var self__ = this;
var _27678__$1 = this;
return (new cljs.core.async.t27676(self__.ch,self__.f,self__.map_GT_,meta27677__$1));
});

cljs.core.async.t27676.cljs$lang$type = true;

cljs.core.async.t27676.cljs$lang$ctorStr = "cljs.core.async/t27676";

cljs.core.async.t27676.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27676");
});

cljs.core.async.__GT_t27676 = (function cljs$core$async$map_GT__$___GT_t27676(ch__$1,f__$1,map_GT___$1,meta27677){
return (new cljs.core.async.t27676(ch__$1,f__$1,map_GT___$1,meta27677));
});

}

return (new cljs.core.async.t27676(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27682 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27682 = (function (ch,p,filter_GT_,meta27683){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27683 = meta27683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27682.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27682.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27682.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27682.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27682.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27682.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27682.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27684){
var self__ = this;
var _27684__$1 = this;
return self__.meta27683;
});

cljs.core.async.t27682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27684,meta27683__$1){
var self__ = this;
var _27684__$1 = this;
return (new cljs.core.async.t27682(self__.ch,self__.p,self__.filter_GT_,meta27683__$1));
});

cljs.core.async.t27682.cljs$lang$type = true;

cljs.core.async.t27682.cljs$lang$ctorStr = "cljs.core.async/t27682";

cljs.core.async.t27682.cljs$lang$ctorPrWriter = (function (this__18739__auto__,writer__18740__auto__,opt__18741__auto__){
return cljs.core._write.call(null,writer__18740__auto__,"cljs.core.async/t27682");
});

cljs.core.async.__GT_t27682 = (function cljs$core$async$filter_GT__$___GT_t27682(ch__$1,p__$1,filter_GT___$1,meta27683){
return (new cljs.core.async.t27682(ch__$1,p__$1,filter_GT___$1,meta27683));
});

}

return (new cljs.core.async.t27682(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__27686 = arguments.length;
switch (G__27686) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21384__auto___27729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___27729,out){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___27729,out){
return (function (state_27707){
var state_val_27708 = (state_27707[(1)]);
if((state_val_27708 === (7))){
var inst_27703 = (state_27707[(2)]);
var state_27707__$1 = state_27707;
var statearr_27709_27730 = state_27707__$1;
(statearr_27709_27730[(2)] = inst_27703);

(statearr_27709_27730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27708 === (1))){
var state_27707__$1 = state_27707;
var statearr_27710_27731 = state_27707__$1;
(statearr_27710_27731[(2)] = null);

(statearr_27710_27731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27708 === (4))){
var inst_27689 = (state_27707[(7)]);
var inst_27689__$1 = (state_27707[(2)]);
var inst_27690 = (inst_27689__$1 == null);
var state_27707__$1 = (function (){var statearr_27711 = state_27707;
(statearr_27711[(7)] = inst_27689__$1);

return statearr_27711;
})();
if(cljs.core.truth_(inst_27690)){
var statearr_27712_27732 = state_27707__$1;
(statearr_27712_27732[(1)] = (5));

} else {
var statearr_27713_27733 = state_27707__$1;
(statearr_27713_27733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27708 === (6))){
var inst_27689 = (state_27707[(7)]);
var inst_27694 = p.call(null,inst_27689);
var state_27707__$1 = state_27707;
if(cljs.core.truth_(inst_27694)){
var statearr_27714_27734 = state_27707__$1;
(statearr_27714_27734[(1)] = (8));

} else {
var statearr_27715_27735 = state_27707__$1;
(statearr_27715_27735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27708 === (3))){
var inst_27705 = (state_27707[(2)]);
var state_27707__$1 = state_27707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27707__$1,inst_27705);
} else {
if((state_val_27708 === (2))){
var state_27707__$1 = state_27707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27707__$1,(4),ch);
} else {
if((state_val_27708 === (11))){
var inst_27697 = (state_27707[(2)]);
var state_27707__$1 = state_27707;
var statearr_27716_27736 = state_27707__$1;
(statearr_27716_27736[(2)] = inst_27697);

(statearr_27716_27736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27708 === (9))){
var state_27707__$1 = state_27707;
var statearr_27717_27737 = state_27707__$1;
(statearr_27717_27737[(2)] = null);

(statearr_27717_27737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27708 === (5))){
var inst_27692 = cljs.core.async.close_BANG_.call(null,out);
var state_27707__$1 = state_27707;
var statearr_27718_27738 = state_27707__$1;
(statearr_27718_27738[(2)] = inst_27692);

(statearr_27718_27738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27708 === (10))){
var inst_27700 = (state_27707[(2)]);
var state_27707__$1 = (function (){var statearr_27719 = state_27707;
(statearr_27719[(8)] = inst_27700);

return statearr_27719;
})();
var statearr_27720_27739 = state_27707__$1;
(statearr_27720_27739[(2)] = null);

(statearr_27720_27739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27708 === (8))){
var inst_27689 = (state_27707[(7)]);
var state_27707__$1 = state_27707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27707__$1,(11),out,inst_27689);
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
});})(c__21384__auto___27729,out))
;
return ((function (switch__21322__auto__,c__21384__auto___27729,out){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_27724 = [null,null,null,null,null,null,null,null,null];
(statearr_27724[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_27724[(1)] = (1));

return statearr_27724;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_27707){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_27707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e27725){if((e27725 instanceof Object)){
var ex__21326__auto__ = e27725;
var statearr_27726_27740 = state_27707;
(statearr_27726_27740[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27741 = state_27707;
state_27707 = G__27741;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_27707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_27707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___27729,out))
})();
var state__21386__auto__ = (function (){var statearr_27727 = f__21385__auto__.call(null);
(statearr_27727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___27729);

return statearr_27727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___27729,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__27743 = arguments.length;
switch (G__27743) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_27910){
var state_val_27911 = (state_27910[(1)]);
if((state_val_27911 === (7))){
var inst_27906 = (state_27910[(2)]);
var state_27910__$1 = state_27910;
var statearr_27912_27953 = state_27910__$1;
(statearr_27912_27953[(2)] = inst_27906);

(statearr_27912_27953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (20))){
var inst_27876 = (state_27910[(7)]);
var inst_27887 = (state_27910[(2)]);
var inst_27888 = cljs.core.next.call(null,inst_27876);
var inst_27862 = inst_27888;
var inst_27863 = null;
var inst_27864 = (0);
var inst_27865 = (0);
var state_27910__$1 = (function (){var statearr_27913 = state_27910;
(statearr_27913[(8)] = inst_27887);

(statearr_27913[(9)] = inst_27864);

(statearr_27913[(10)] = inst_27863);

(statearr_27913[(11)] = inst_27865);

(statearr_27913[(12)] = inst_27862);

return statearr_27913;
})();
var statearr_27914_27954 = state_27910__$1;
(statearr_27914_27954[(2)] = null);

(statearr_27914_27954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (1))){
var state_27910__$1 = state_27910;
var statearr_27915_27955 = state_27910__$1;
(statearr_27915_27955[(2)] = null);

(statearr_27915_27955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (4))){
var inst_27851 = (state_27910[(13)]);
var inst_27851__$1 = (state_27910[(2)]);
var inst_27852 = (inst_27851__$1 == null);
var state_27910__$1 = (function (){var statearr_27916 = state_27910;
(statearr_27916[(13)] = inst_27851__$1);

return statearr_27916;
})();
if(cljs.core.truth_(inst_27852)){
var statearr_27917_27956 = state_27910__$1;
(statearr_27917_27956[(1)] = (5));

} else {
var statearr_27918_27957 = state_27910__$1;
(statearr_27918_27957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (15))){
var state_27910__$1 = state_27910;
var statearr_27922_27958 = state_27910__$1;
(statearr_27922_27958[(2)] = null);

(statearr_27922_27958[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (21))){
var state_27910__$1 = state_27910;
var statearr_27923_27959 = state_27910__$1;
(statearr_27923_27959[(2)] = null);

(statearr_27923_27959[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (13))){
var inst_27864 = (state_27910[(9)]);
var inst_27863 = (state_27910[(10)]);
var inst_27865 = (state_27910[(11)]);
var inst_27862 = (state_27910[(12)]);
var inst_27872 = (state_27910[(2)]);
var inst_27873 = (inst_27865 + (1));
var tmp27919 = inst_27864;
var tmp27920 = inst_27863;
var tmp27921 = inst_27862;
var inst_27862__$1 = tmp27921;
var inst_27863__$1 = tmp27920;
var inst_27864__$1 = tmp27919;
var inst_27865__$1 = inst_27873;
var state_27910__$1 = (function (){var statearr_27924 = state_27910;
(statearr_27924[(9)] = inst_27864__$1);

(statearr_27924[(10)] = inst_27863__$1);

(statearr_27924[(11)] = inst_27865__$1);

(statearr_27924[(12)] = inst_27862__$1);

(statearr_27924[(14)] = inst_27872);

return statearr_27924;
})();
var statearr_27925_27960 = state_27910__$1;
(statearr_27925_27960[(2)] = null);

(statearr_27925_27960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (22))){
var state_27910__$1 = state_27910;
var statearr_27926_27961 = state_27910__$1;
(statearr_27926_27961[(2)] = null);

(statearr_27926_27961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (6))){
var inst_27851 = (state_27910[(13)]);
var inst_27860 = f.call(null,inst_27851);
var inst_27861 = cljs.core.seq.call(null,inst_27860);
var inst_27862 = inst_27861;
var inst_27863 = null;
var inst_27864 = (0);
var inst_27865 = (0);
var state_27910__$1 = (function (){var statearr_27927 = state_27910;
(statearr_27927[(9)] = inst_27864);

(statearr_27927[(10)] = inst_27863);

(statearr_27927[(11)] = inst_27865);

(statearr_27927[(12)] = inst_27862);

return statearr_27927;
})();
var statearr_27928_27962 = state_27910__$1;
(statearr_27928_27962[(2)] = null);

(statearr_27928_27962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (17))){
var inst_27876 = (state_27910[(7)]);
var inst_27880 = cljs.core.chunk_first.call(null,inst_27876);
var inst_27881 = cljs.core.chunk_rest.call(null,inst_27876);
var inst_27882 = cljs.core.count.call(null,inst_27880);
var inst_27862 = inst_27881;
var inst_27863 = inst_27880;
var inst_27864 = inst_27882;
var inst_27865 = (0);
var state_27910__$1 = (function (){var statearr_27929 = state_27910;
(statearr_27929[(9)] = inst_27864);

(statearr_27929[(10)] = inst_27863);

(statearr_27929[(11)] = inst_27865);

(statearr_27929[(12)] = inst_27862);

return statearr_27929;
})();
var statearr_27930_27963 = state_27910__$1;
(statearr_27930_27963[(2)] = null);

(statearr_27930_27963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (3))){
var inst_27908 = (state_27910[(2)]);
var state_27910__$1 = state_27910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27910__$1,inst_27908);
} else {
if((state_val_27911 === (12))){
var inst_27896 = (state_27910[(2)]);
var state_27910__$1 = state_27910;
var statearr_27931_27964 = state_27910__$1;
(statearr_27931_27964[(2)] = inst_27896);

(statearr_27931_27964[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (2))){
var state_27910__$1 = state_27910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27910__$1,(4),in$);
} else {
if((state_val_27911 === (23))){
var inst_27904 = (state_27910[(2)]);
var state_27910__$1 = state_27910;
var statearr_27932_27965 = state_27910__$1;
(statearr_27932_27965[(2)] = inst_27904);

(statearr_27932_27965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (19))){
var inst_27891 = (state_27910[(2)]);
var state_27910__$1 = state_27910;
var statearr_27933_27966 = state_27910__$1;
(statearr_27933_27966[(2)] = inst_27891);

(statearr_27933_27966[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (11))){
var inst_27876 = (state_27910[(7)]);
var inst_27862 = (state_27910[(12)]);
var inst_27876__$1 = cljs.core.seq.call(null,inst_27862);
var state_27910__$1 = (function (){var statearr_27934 = state_27910;
(statearr_27934[(7)] = inst_27876__$1);

return statearr_27934;
})();
if(inst_27876__$1){
var statearr_27935_27967 = state_27910__$1;
(statearr_27935_27967[(1)] = (14));

} else {
var statearr_27936_27968 = state_27910__$1;
(statearr_27936_27968[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (9))){
var inst_27898 = (state_27910[(2)]);
var inst_27899 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27910__$1 = (function (){var statearr_27937 = state_27910;
(statearr_27937[(15)] = inst_27898);

return statearr_27937;
})();
if(cljs.core.truth_(inst_27899)){
var statearr_27938_27969 = state_27910__$1;
(statearr_27938_27969[(1)] = (21));

} else {
var statearr_27939_27970 = state_27910__$1;
(statearr_27939_27970[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (5))){
var inst_27854 = cljs.core.async.close_BANG_.call(null,out);
var state_27910__$1 = state_27910;
var statearr_27940_27971 = state_27910__$1;
(statearr_27940_27971[(2)] = inst_27854);

(statearr_27940_27971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (14))){
var inst_27876 = (state_27910[(7)]);
var inst_27878 = cljs.core.chunked_seq_QMARK_.call(null,inst_27876);
var state_27910__$1 = state_27910;
if(inst_27878){
var statearr_27941_27972 = state_27910__$1;
(statearr_27941_27972[(1)] = (17));

} else {
var statearr_27942_27973 = state_27910__$1;
(statearr_27942_27973[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (16))){
var inst_27894 = (state_27910[(2)]);
var state_27910__$1 = state_27910;
var statearr_27943_27974 = state_27910__$1;
(statearr_27943_27974[(2)] = inst_27894);

(statearr_27943_27974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27911 === (10))){
var inst_27863 = (state_27910[(10)]);
var inst_27865 = (state_27910[(11)]);
var inst_27870 = cljs.core._nth.call(null,inst_27863,inst_27865);
var state_27910__$1 = state_27910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27910__$1,(13),out,inst_27870);
} else {
if((state_val_27911 === (18))){
var inst_27876 = (state_27910[(7)]);
var inst_27885 = cljs.core.first.call(null,inst_27876);
var state_27910__$1 = state_27910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27910__$1,(20),out,inst_27885);
} else {
if((state_val_27911 === (8))){
var inst_27864 = (state_27910[(9)]);
var inst_27865 = (state_27910[(11)]);
var inst_27867 = (inst_27865 < inst_27864);
var inst_27868 = inst_27867;
var state_27910__$1 = state_27910;
if(cljs.core.truth_(inst_27868)){
var statearr_27944_27975 = state_27910__$1;
(statearr_27944_27975[(1)] = (10));

} else {
var statearr_27945_27976 = state_27910__$1;
(statearr_27945_27976[(1)] = (11));

}

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
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21323__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21323__auto____0 = (function (){
var statearr_27949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27949[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21323__auto__);

(statearr_27949[(1)] = (1));

return statearr_27949;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21323__auto____1 = (function (state_27910){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_27910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e27950){if((e27950 instanceof Object)){
var ex__21326__auto__ = e27950;
var statearr_27951_27977 = state_27910;
(statearr_27951_27977[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27978 = state_27910;
state_27910 = G__27978;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21323__auto__ = function(state_27910){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21323__auto____1.call(this,state_27910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21323__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21323__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_27952 = f__21385__auto__.call(null);
(statearr_27952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_27952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__27980 = arguments.length;
switch (G__27980) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__27983 = arguments.length;
switch (G__27983) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__27986 = arguments.length;
switch (G__27986) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21384__auto___28036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___28036,out){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___28036,out){
return (function (state_28010){
var state_val_28011 = (state_28010[(1)]);
if((state_val_28011 === (7))){
var inst_28005 = (state_28010[(2)]);
var state_28010__$1 = state_28010;
var statearr_28012_28037 = state_28010__$1;
(statearr_28012_28037[(2)] = inst_28005);

(statearr_28012_28037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28011 === (1))){
var inst_27987 = null;
var state_28010__$1 = (function (){var statearr_28013 = state_28010;
(statearr_28013[(7)] = inst_27987);

return statearr_28013;
})();
var statearr_28014_28038 = state_28010__$1;
(statearr_28014_28038[(2)] = null);

(statearr_28014_28038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28011 === (4))){
var inst_27990 = (state_28010[(8)]);
var inst_27990__$1 = (state_28010[(2)]);
var inst_27991 = (inst_27990__$1 == null);
var inst_27992 = cljs.core.not.call(null,inst_27991);
var state_28010__$1 = (function (){var statearr_28015 = state_28010;
(statearr_28015[(8)] = inst_27990__$1);

return statearr_28015;
})();
if(inst_27992){
var statearr_28016_28039 = state_28010__$1;
(statearr_28016_28039[(1)] = (5));

} else {
var statearr_28017_28040 = state_28010__$1;
(statearr_28017_28040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28011 === (6))){
var state_28010__$1 = state_28010;
var statearr_28018_28041 = state_28010__$1;
(statearr_28018_28041[(2)] = null);

(statearr_28018_28041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28011 === (3))){
var inst_28007 = (state_28010[(2)]);
var inst_28008 = cljs.core.async.close_BANG_.call(null,out);
var state_28010__$1 = (function (){var statearr_28019 = state_28010;
(statearr_28019[(9)] = inst_28007);

return statearr_28019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28010__$1,inst_28008);
} else {
if((state_val_28011 === (2))){
var state_28010__$1 = state_28010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28010__$1,(4),ch);
} else {
if((state_val_28011 === (11))){
var inst_27990 = (state_28010[(8)]);
var inst_27999 = (state_28010[(2)]);
var inst_27987 = inst_27990;
var state_28010__$1 = (function (){var statearr_28020 = state_28010;
(statearr_28020[(7)] = inst_27987);

(statearr_28020[(10)] = inst_27999);

return statearr_28020;
})();
var statearr_28021_28042 = state_28010__$1;
(statearr_28021_28042[(2)] = null);

(statearr_28021_28042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28011 === (9))){
var inst_27990 = (state_28010[(8)]);
var state_28010__$1 = state_28010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28010__$1,(11),out,inst_27990);
} else {
if((state_val_28011 === (5))){
var inst_27987 = (state_28010[(7)]);
var inst_27990 = (state_28010[(8)]);
var inst_27994 = cljs.core._EQ_.call(null,inst_27990,inst_27987);
var state_28010__$1 = state_28010;
if(inst_27994){
var statearr_28023_28044 = state_28010__$1;
(statearr_28023_28044[(1)] = (8));

} else {
var statearr_28024_28045 = state_28010__$1;
(statearr_28024_28045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28011 === (10))){
var inst_28002 = (state_28010[(2)]);
var state_28010__$1 = state_28010;
var statearr_28025_28046 = state_28010__$1;
(statearr_28025_28046[(2)] = inst_28002);

(statearr_28025_28046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28011 === (8))){
var inst_27987 = (state_28010[(7)]);
var tmp28022 = inst_27987;
var inst_27987__$1 = tmp28022;
var state_28010__$1 = (function (){var statearr_28026 = state_28010;
(statearr_28026[(7)] = inst_27987__$1);

return statearr_28026;
})();
var statearr_28027_28047 = state_28010__$1;
(statearr_28027_28047[(2)] = null);

(statearr_28027_28047[(1)] = (2));


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
});})(c__21384__auto___28036,out))
;
return ((function (switch__21322__auto__,c__21384__auto___28036,out){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_28031 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28031[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_28031[(1)] = (1));

return statearr_28031;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_28010){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e28032){if((e28032 instanceof Object)){
var ex__21326__auto__ = e28032;
var statearr_28033_28048 = state_28010;
(statearr_28033_28048[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28049 = state_28010;
state_28010 = G__28049;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_28010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_28010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___28036,out))
})();
var state__21386__auto__ = (function (){var statearr_28034 = f__21385__auto__.call(null);
(statearr_28034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___28036);

return statearr_28034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___28036,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28051 = arguments.length;
switch (G__28051) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21384__auto___28120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___28120,out){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___28120,out){
return (function (state_28089){
var state_val_28090 = (state_28089[(1)]);
if((state_val_28090 === (7))){
var inst_28085 = (state_28089[(2)]);
var state_28089__$1 = state_28089;
var statearr_28091_28121 = state_28089__$1;
(statearr_28091_28121[(2)] = inst_28085);

(statearr_28091_28121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (1))){
var inst_28052 = (new Array(n));
var inst_28053 = inst_28052;
var inst_28054 = (0);
var state_28089__$1 = (function (){var statearr_28092 = state_28089;
(statearr_28092[(7)] = inst_28053);

(statearr_28092[(8)] = inst_28054);

return statearr_28092;
})();
var statearr_28093_28122 = state_28089__$1;
(statearr_28093_28122[(2)] = null);

(statearr_28093_28122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (4))){
var inst_28057 = (state_28089[(9)]);
var inst_28057__$1 = (state_28089[(2)]);
var inst_28058 = (inst_28057__$1 == null);
var inst_28059 = cljs.core.not.call(null,inst_28058);
var state_28089__$1 = (function (){var statearr_28094 = state_28089;
(statearr_28094[(9)] = inst_28057__$1);

return statearr_28094;
})();
if(inst_28059){
var statearr_28095_28123 = state_28089__$1;
(statearr_28095_28123[(1)] = (5));

} else {
var statearr_28096_28124 = state_28089__$1;
(statearr_28096_28124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (15))){
var inst_28079 = (state_28089[(2)]);
var state_28089__$1 = state_28089;
var statearr_28097_28125 = state_28089__$1;
(statearr_28097_28125[(2)] = inst_28079);

(statearr_28097_28125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (13))){
var state_28089__$1 = state_28089;
var statearr_28098_28126 = state_28089__$1;
(statearr_28098_28126[(2)] = null);

(statearr_28098_28126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (6))){
var inst_28054 = (state_28089[(8)]);
var inst_28075 = (inst_28054 > (0));
var state_28089__$1 = state_28089;
if(cljs.core.truth_(inst_28075)){
var statearr_28099_28127 = state_28089__$1;
(statearr_28099_28127[(1)] = (12));

} else {
var statearr_28100_28128 = state_28089__$1;
(statearr_28100_28128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (3))){
var inst_28087 = (state_28089[(2)]);
var state_28089__$1 = state_28089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28089__$1,inst_28087);
} else {
if((state_val_28090 === (12))){
var inst_28053 = (state_28089[(7)]);
var inst_28077 = cljs.core.vec.call(null,inst_28053);
var state_28089__$1 = state_28089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28089__$1,(15),out,inst_28077);
} else {
if((state_val_28090 === (2))){
var state_28089__$1 = state_28089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28089__$1,(4),ch);
} else {
if((state_val_28090 === (11))){
var inst_28069 = (state_28089[(2)]);
var inst_28070 = (new Array(n));
var inst_28053 = inst_28070;
var inst_28054 = (0);
var state_28089__$1 = (function (){var statearr_28101 = state_28089;
(statearr_28101[(7)] = inst_28053);

(statearr_28101[(8)] = inst_28054);

(statearr_28101[(10)] = inst_28069);

return statearr_28101;
})();
var statearr_28102_28129 = state_28089__$1;
(statearr_28102_28129[(2)] = null);

(statearr_28102_28129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (9))){
var inst_28053 = (state_28089[(7)]);
var inst_28067 = cljs.core.vec.call(null,inst_28053);
var state_28089__$1 = state_28089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28089__$1,(11),out,inst_28067);
} else {
if((state_val_28090 === (5))){
var inst_28053 = (state_28089[(7)]);
var inst_28054 = (state_28089[(8)]);
var inst_28057 = (state_28089[(9)]);
var inst_28062 = (state_28089[(11)]);
var inst_28061 = (inst_28053[inst_28054] = inst_28057);
var inst_28062__$1 = (inst_28054 + (1));
var inst_28063 = (inst_28062__$1 < n);
var state_28089__$1 = (function (){var statearr_28103 = state_28089;
(statearr_28103[(12)] = inst_28061);

(statearr_28103[(11)] = inst_28062__$1);

return statearr_28103;
})();
if(cljs.core.truth_(inst_28063)){
var statearr_28104_28130 = state_28089__$1;
(statearr_28104_28130[(1)] = (8));

} else {
var statearr_28105_28131 = state_28089__$1;
(statearr_28105_28131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (14))){
var inst_28082 = (state_28089[(2)]);
var inst_28083 = cljs.core.async.close_BANG_.call(null,out);
var state_28089__$1 = (function (){var statearr_28107 = state_28089;
(statearr_28107[(13)] = inst_28082);

return statearr_28107;
})();
var statearr_28108_28132 = state_28089__$1;
(statearr_28108_28132[(2)] = inst_28083);

(statearr_28108_28132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (10))){
var inst_28073 = (state_28089[(2)]);
var state_28089__$1 = state_28089;
var statearr_28109_28133 = state_28089__$1;
(statearr_28109_28133[(2)] = inst_28073);

(statearr_28109_28133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (8))){
var inst_28053 = (state_28089[(7)]);
var inst_28062 = (state_28089[(11)]);
var tmp28106 = inst_28053;
var inst_28053__$1 = tmp28106;
var inst_28054 = inst_28062;
var state_28089__$1 = (function (){var statearr_28110 = state_28089;
(statearr_28110[(7)] = inst_28053__$1);

(statearr_28110[(8)] = inst_28054);

return statearr_28110;
})();
var statearr_28111_28134 = state_28089__$1;
(statearr_28111_28134[(2)] = null);

(statearr_28111_28134[(1)] = (2));


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
});})(c__21384__auto___28120,out))
;
return ((function (switch__21322__auto__,c__21384__auto___28120,out){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_28115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28115[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_28115[(1)] = (1));

return statearr_28115;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_28089){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e28116){if((e28116 instanceof Object)){
var ex__21326__auto__ = e28116;
var statearr_28117_28135 = state_28089;
(statearr_28117_28135[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28136 = state_28089;
state_28089 = G__28136;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_28089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_28089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___28120,out))
})();
var state__21386__auto__ = (function (){var statearr_28118 = f__21385__auto__.call(null);
(statearr_28118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___28120);

return statearr_28118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___28120,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28138 = arguments.length;
switch (G__28138) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21384__auto___28211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___28211,out){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___28211,out){
return (function (state_28180){
var state_val_28181 = (state_28180[(1)]);
if((state_val_28181 === (7))){
var inst_28176 = (state_28180[(2)]);
var state_28180__$1 = state_28180;
var statearr_28182_28212 = state_28180__$1;
(statearr_28182_28212[(2)] = inst_28176);

(statearr_28182_28212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (1))){
var inst_28139 = [];
var inst_28140 = inst_28139;
var inst_28141 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28180__$1 = (function (){var statearr_28183 = state_28180;
(statearr_28183[(7)] = inst_28140);

(statearr_28183[(8)] = inst_28141);

return statearr_28183;
})();
var statearr_28184_28213 = state_28180__$1;
(statearr_28184_28213[(2)] = null);

(statearr_28184_28213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (4))){
var inst_28144 = (state_28180[(9)]);
var inst_28144__$1 = (state_28180[(2)]);
var inst_28145 = (inst_28144__$1 == null);
var inst_28146 = cljs.core.not.call(null,inst_28145);
var state_28180__$1 = (function (){var statearr_28185 = state_28180;
(statearr_28185[(9)] = inst_28144__$1);

return statearr_28185;
})();
if(inst_28146){
var statearr_28186_28214 = state_28180__$1;
(statearr_28186_28214[(1)] = (5));

} else {
var statearr_28187_28215 = state_28180__$1;
(statearr_28187_28215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (15))){
var inst_28170 = (state_28180[(2)]);
var state_28180__$1 = state_28180;
var statearr_28188_28216 = state_28180__$1;
(statearr_28188_28216[(2)] = inst_28170);

(statearr_28188_28216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (13))){
var state_28180__$1 = state_28180;
var statearr_28189_28217 = state_28180__$1;
(statearr_28189_28217[(2)] = null);

(statearr_28189_28217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (6))){
var inst_28140 = (state_28180[(7)]);
var inst_28165 = inst_28140.length;
var inst_28166 = (inst_28165 > (0));
var state_28180__$1 = state_28180;
if(cljs.core.truth_(inst_28166)){
var statearr_28190_28218 = state_28180__$1;
(statearr_28190_28218[(1)] = (12));

} else {
var statearr_28191_28219 = state_28180__$1;
(statearr_28191_28219[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (3))){
var inst_28178 = (state_28180[(2)]);
var state_28180__$1 = state_28180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28180__$1,inst_28178);
} else {
if((state_val_28181 === (12))){
var inst_28140 = (state_28180[(7)]);
var inst_28168 = cljs.core.vec.call(null,inst_28140);
var state_28180__$1 = state_28180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28180__$1,(15),out,inst_28168);
} else {
if((state_val_28181 === (2))){
var state_28180__$1 = state_28180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28180__$1,(4),ch);
} else {
if((state_val_28181 === (11))){
var inst_28148 = (state_28180[(10)]);
var inst_28144 = (state_28180[(9)]);
var inst_28158 = (state_28180[(2)]);
var inst_28159 = [];
var inst_28160 = inst_28159.push(inst_28144);
var inst_28140 = inst_28159;
var inst_28141 = inst_28148;
var state_28180__$1 = (function (){var statearr_28192 = state_28180;
(statearr_28192[(7)] = inst_28140);

(statearr_28192[(8)] = inst_28141);

(statearr_28192[(11)] = inst_28158);

(statearr_28192[(12)] = inst_28160);

return statearr_28192;
})();
var statearr_28193_28220 = state_28180__$1;
(statearr_28193_28220[(2)] = null);

(statearr_28193_28220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (9))){
var inst_28140 = (state_28180[(7)]);
var inst_28156 = cljs.core.vec.call(null,inst_28140);
var state_28180__$1 = state_28180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28180__$1,(11),out,inst_28156);
} else {
if((state_val_28181 === (5))){
var inst_28148 = (state_28180[(10)]);
var inst_28141 = (state_28180[(8)]);
var inst_28144 = (state_28180[(9)]);
var inst_28148__$1 = f.call(null,inst_28144);
var inst_28149 = cljs.core._EQ_.call(null,inst_28148__$1,inst_28141);
var inst_28150 = cljs.core.keyword_identical_QMARK_.call(null,inst_28141,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28151 = (inst_28149) || (inst_28150);
var state_28180__$1 = (function (){var statearr_28194 = state_28180;
(statearr_28194[(10)] = inst_28148__$1);

return statearr_28194;
})();
if(cljs.core.truth_(inst_28151)){
var statearr_28195_28221 = state_28180__$1;
(statearr_28195_28221[(1)] = (8));

} else {
var statearr_28196_28222 = state_28180__$1;
(statearr_28196_28222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (14))){
var inst_28173 = (state_28180[(2)]);
var inst_28174 = cljs.core.async.close_BANG_.call(null,out);
var state_28180__$1 = (function (){var statearr_28198 = state_28180;
(statearr_28198[(13)] = inst_28173);

return statearr_28198;
})();
var statearr_28199_28223 = state_28180__$1;
(statearr_28199_28223[(2)] = inst_28174);

(statearr_28199_28223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (10))){
var inst_28163 = (state_28180[(2)]);
var state_28180__$1 = state_28180;
var statearr_28200_28224 = state_28180__$1;
(statearr_28200_28224[(2)] = inst_28163);

(statearr_28200_28224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28181 === (8))){
var inst_28148 = (state_28180[(10)]);
var inst_28140 = (state_28180[(7)]);
var inst_28144 = (state_28180[(9)]);
var inst_28153 = inst_28140.push(inst_28144);
var tmp28197 = inst_28140;
var inst_28140__$1 = tmp28197;
var inst_28141 = inst_28148;
var state_28180__$1 = (function (){var statearr_28201 = state_28180;
(statearr_28201[(7)] = inst_28140__$1);

(statearr_28201[(8)] = inst_28141);

(statearr_28201[(14)] = inst_28153);

return statearr_28201;
})();
var statearr_28202_28225 = state_28180__$1;
(statearr_28202_28225[(2)] = null);

(statearr_28202_28225[(1)] = (2));


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
});})(c__21384__auto___28211,out))
;
return ((function (switch__21322__auto__,c__21384__auto___28211,out){
return (function() {
var cljs$core$async$state_machine__21323__auto__ = null;
var cljs$core$async$state_machine__21323__auto____0 = (function (){
var statearr_28206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28206[(0)] = cljs$core$async$state_machine__21323__auto__);

(statearr_28206[(1)] = (1));

return statearr_28206;
});
var cljs$core$async$state_machine__21323__auto____1 = (function (state_28180){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_28180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e28207){if((e28207 instanceof Object)){
var ex__21326__auto__ = e28207;
var statearr_28208_28226 = state_28180;
(statearr_28208_28226[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28227 = state_28180;
state_28180 = G__28227;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
cljs$core$async$state_machine__21323__auto__ = function(state_28180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21323__auto____1.call(this,state_28180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21323__auto____0;
cljs$core$async$state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21323__auto____1;
return cljs$core$async$state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___28211,out))
})();
var state__21386__auto__ = (function (){var statearr_28209 = f__21385__auto__.call(null);
(statearr_28209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___28211);

return statearr_28209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___28211,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1446435321161
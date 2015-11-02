// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__29438_SHARP_,p2__29439_SHARP_){
var and__18148__auto__ = p1__29438_SHARP_;
if(cljs.core.truth_(and__18148__auto__)){
return p2__29439_SHARP_;
} else {
return and__18148__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18160__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18160__auto__){
return or__18160__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18160__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18160__auto__){
return or__18160__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18160__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19059__auto__,method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29440){
var map__29441 = p__29440;
var map__29441__$1 = ((cljs.core.seq_QMARK_.call(null,map__29441))?cljs.core.apply.call(null,cljs.core.hash_map,map__29441):map__29441);
var file = cljs.core.get.call(null,map__29441__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29442){
var map__29443 = p__29442;
var map__29443__$1 = ((cljs.core.seq_QMARK_.call(null,map__29443))?cljs.core.apply.call(null,cljs.core.hash_map,map__29443):map__29443);
var namespace = cljs.core.get.call(null,map__29443__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19059__auto__,method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29444){if((e29444 instanceof Error)){
var e = e29444;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29444;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__29446 = arguments.length;
switch (G__29446) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29448,callback){
var map__29450 = p__29448;
var map__29450__$1 = ((cljs.core.seq_QMARK_.call(null,map__29450))?cljs.core.apply.call(null,cljs.core.hash_map,map__29450):map__29450);
var file_msg = map__29450__$1;
var request_url = cljs.core.get.call(null,map__29450__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29450,map__29450__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29450,map__29450__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29451){
var map__29453 = p__29451;
var map__29453__$1 = ((cljs.core.seq_QMARK_.call(null,map__29453))?cljs.core.apply.call(null,cljs.core.hash_map,map__29453):map__29453);
var file_msg = map__29453__$1;
var meta_data = cljs.core.get.call(null,map__29453__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__29453__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18160__auto__ = meta_data;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18148__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18148__auto__){
var or__18160__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
var or__18160__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18160__auto____$1)){
return or__18160__auto____$1;
} else {
var and__18148__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18148__auto____$1){
var or__18160__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18160__auto____$2){
return or__18160__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18148__auto____$1;
}
}
}
} else {
return and__18148__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29454,callback){
var map__29456 = p__29454;
var map__29456__$1 = ((cljs.core.seq_QMARK_.call(null,map__29456))?cljs.core.apply.call(null,cljs.core.hash_map,map__29456):map__29456);
var file_msg = map__29456__$1;
var namespace = cljs.core.get.call(null,map__29456__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__29456__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21384__auto___29543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto___29543,out){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto___29543,out){
return (function (state_29525){
var state_val_29526 = (state_29525[(1)]);
if((state_val_29526 === (7))){
var inst_29509 = (state_29525[(7)]);
var inst_29515 = (state_29525[(2)]);
var inst_29516 = cljs.core.async.put_BANG_.call(null,out,inst_29515);
var inst_29505 = inst_29509;
var state_29525__$1 = (function (){var statearr_29527 = state_29525;
(statearr_29527[(8)] = inst_29505);

(statearr_29527[(9)] = inst_29516);

return statearr_29527;
})();
var statearr_29528_29544 = state_29525__$1;
(statearr_29528_29544[(2)] = null);

(statearr_29528_29544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (6))){
var inst_29521 = (state_29525[(2)]);
var state_29525__$1 = state_29525;
var statearr_29529_29545 = state_29525__$1;
(statearr_29529_29545[(2)] = inst_29521);

(statearr_29529_29545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (5))){
var inst_29519 = cljs.core.async.close_BANG_.call(null,out);
var state_29525__$1 = state_29525;
var statearr_29530_29546 = state_29525__$1;
(statearr_29530_29546[(2)] = inst_29519);

(statearr_29530_29546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (4))){
var inst_29508 = (state_29525[(10)]);
var inst_29513 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29508);
var state_29525__$1 = state_29525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29525__$1,(7),inst_29513);
} else {
if((state_val_29526 === (3))){
var inst_29523 = (state_29525[(2)]);
var state_29525__$1 = state_29525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29525__$1,inst_29523);
} else {
if((state_val_29526 === (2))){
var inst_29505 = (state_29525[(8)]);
var inst_29508 = (state_29525[(10)]);
var inst_29508__$1 = cljs.core.nth.call(null,inst_29505,(0),null);
var inst_29509 = cljs.core.nthnext.call(null,inst_29505,(1));
var inst_29510 = (inst_29508__$1 == null);
var inst_29511 = cljs.core.not.call(null,inst_29510);
var state_29525__$1 = (function (){var statearr_29531 = state_29525;
(statearr_29531[(10)] = inst_29508__$1);

(statearr_29531[(7)] = inst_29509);

return statearr_29531;
})();
if(inst_29511){
var statearr_29532_29547 = state_29525__$1;
(statearr_29532_29547[(1)] = (4));

} else {
var statearr_29533_29548 = state_29525__$1;
(statearr_29533_29548[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (1))){
var inst_29503 = cljs.core.nth.call(null,files,(0),null);
var inst_29504 = cljs.core.nthnext.call(null,files,(1));
var inst_29505 = files;
var state_29525__$1 = (function (){var statearr_29534 = state_29525;
(statearr_29534[(8)] = inst_29505);

(statearr_29534[(11)] = inst_29503);

(statearr_29534[(12)] = inst_29504);

return statearr_29534;
})();
var statearr_29535_29549 = state_29525__$1;
(statearr_29535_29549[(2)] = null);

(statearr_29535_29549[(1)] = (2));


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
});})(c__21384__auto___29543,out))
;
return ((function (switch__21322__auto__,c__21384__auto___29543,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____0 = (function (){
var statearr_29539 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29539[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__);

(statearr_29539[(1)] = (1));

return statearr_29539;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____1 = (function (state_29525){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_29525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e29540){if((e29540 instanceof Object)){
var ex__21326__auto__ = e29540;
var statearr_29541_29550 = state_29525;
(statearr_29541_29550[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29551 = state_29525;
state_29525 = G__29551;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__ = function(state_29525){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____1.call(this,state_29525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto___29543,out))
})();
var state__21386__auto__ = (function (){var statearr_29542 = f__21385__auto__.call(null);
(statearr_29542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto___29543);

return statearr_29542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto___29543,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29552,p__29553){
var map__29556 = p__29552;
var map__29556__$1 = ((cljs.core.seq_QMARK_.call(null,map__29556))?cljs.core.apply.call(null,cljs.core.hash_map,map__29556):map__29556);
var opts = map__29556__$1;
var url_rewriter = cljs.core.get.call(null,map__29556__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29557 = p__29553;
var map__29557__$1 = ((cljs.core.seq_QMARK_.call(null,map__29557))?cljs.core.apply.call(null,cljs.core.hash_map,map__29557):map__29557);
var file_msg = map__29557__$1;
var file = cljs.core.get.call(null,map__29557__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29558){
var map__29561 = p__29558;
var map__29561__$1 = ((cljs.core.seq_QMARK_.call(null,map__29561))?cljs.core.apply.call(null,cljs.core.hash_map,map__29561):map__29561);
var file = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18148__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18148__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18148__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e29562){var e = e29562;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29567,p__29568){
var map__29770 = p__29567;
var map__29770__$1 = ((cljs.core.seq_QMARK_.call(null,map__29770))?cljs.core.apply.call(null,cljs.core.hash_map,map__29770):map__29770);
var opts = map__29770__$1;
var load_unchanged_files = cljs.core.get.call(null,map__29770__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__29770__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__29770__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__29771 = p__29568;
var map__29771__$1 = ((cljs.core.seq_QMARK_.call(null,map__29771))?cljs.core.apply.call(null,cljs.core.hash_map,map__29771):map__29771);
var msg = map__29771__$1;
var files = cljs.core.get.call(null,map__29771__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files){
return (function (state_29896){
var state_val_29897 = (state_29896[(1)]);
if((state_val_29897 === (7))){
var inst_29783 = (state_29896[(7)]);
var inst_29785 = (state_29896[(8)]);
var inst_29784 = (state_29896[(9)]);
var inst_29786 = (state_29896[(10)]);
var inst_29791 = cljs.core._nth.call(null,inst_29784,inst_29786);
var inst_29792 = figwheel.client.file_reloading.eval_body.call(null,inst_29791);
var inst_29793 = (inst_29786 + (1));
var tmp29898 = inst_29783;
var tmp29899 = inst_29785;
var tmp29900 = inst_29784;
var inst_29783__$1 = tmp29898;
var inst_29784__$1 = tmp29900;
var inst_29785__$1 = tmp29899;
var inst_29786__$1 = inst_29793;
var state_29896__$1 = (function (){var statearr_29901 = state_29896;
(statearr_29901[(11)] = inst_29792);

(statearr_29901[(7)] = inst_29783__$1);

(statearr_29901[(8)] = inst_29785__$1);

(statearr_29901[(9)] = inst_29784__$1);

(statearr_29901[(10)] = inst_29786__$1);

return statearr_29901;
})();
var statearr_29902_29971 = state_29896__$1;
(statearr_29902_29971[(2)] = null);

(statearr_29902_29971[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (20))){
var inst_29832 = (state_29896[(12)]);
var inst_29835 = (state_29896[(13)]);
var inst_29833 = (state_29896[(14)]);
var inst_29829 = (state_29896[(15)]);
var inst_29828 = (state_29896[(16)]);
var inst_29838 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29840 = (function (){var files_not_loaded = inst_29835;
var res = inst_29833;
var res_SINGLEQUOTE_ = inst_29832;
var files_SINGLEQUOTE_ = inst_29829;
var all_files = inst_29828;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29832,inst_29835,inst_29833,inst_29829,inst_29828,inst_29838,state_val_29897,c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files){
return (function (p__29839){
var map__29903 = p__29839;
var map__29903__$1 = ((cljs.core.seq_QMARK_.call(null,map__29903))?cljs.core.apply.call(null,cljs.core.hash_map,map__29903):map__29903);
var file = cljs.core.get.call(null,map__29903__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__29903__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29832,inst_29835,inst_29833,inst_29829,inst_29828,inst_29838,state_val_29897,c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files))
})();
var inst_29841 = cljs.core.map.call(null,inst_29840,inst_29833);
var inst_29842 = cljs.core.pr_str.call(null,inst_29841);
var inst_29843 = figwheel.client.utils.log.call(null,inst_29842);
var inst_29844 = (function (){var files_not_loaded = inst_29835;
var res = inst_29833;
var res_SINGLEQUOTE_ = inst_29832;
var files_SINGLEQUOTE_ = inst_29829;
var all_files = inst_29828;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29832,inst_29835,inst_29833,inst_29829,inst_29828,inst_29838,inst_29840,inst_29841,inst_29842,inst_29843,state_val_29897,c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29832,inst_29835,inst_29833,inst_29829,inst_29828,inst_29838,inst_29840,inst_29841,inst_29842,inst_29843,state_val_29897,c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files))
})();
var inst_29845 = setTimeout(inst_29844,(10));
var state_29896__$1 = (function (){var statearr_29904 = state_29896;
(statearr_29904[(17)] = inst_29838);

(statearr_29904[(18)] = inst_29843);

return statearr_29904;
})();
var statearr_29905_29972 = state_29896__$1;
(statearr_29905_29972[(2)] = inst_29845);

(statearr_29905_29972[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (27))){
var inst_29855 = (state_29896[(19)]);
var state_29896__$1 = state_29896;
var statearr_29906_29973 = state_29896__$1;
(statearr_29906_29973[(2)] = inst_29855);

(statearr_29906_29973[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (1))){
var inst_29775 = (state_29896[(20)]);
var inst_29772 = before_jsload.call(null,files);
var inst_29773 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29774 = (function (){return ((function (inst_29775,inst_29772,inst_29773,state_val_29897,c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files){
return (function (p1__29563_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29563_SHARP_);
});
;})(inst_29775,inst_29772,inst_29773,state_val_29897,c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files))
})();
var inst_29775__$1 = cljs.core.filter.call(null,inst_29774,files);
var inst_29776 = cljs.core.not_empty.call(null,inst_29775__$1);
var state_29896__$1 = (function (){var statearr_29907 = state_29896;
(statearr_29907[(20)] = inst_29775__$1);

(statearr_29907[(21)] = inst_29773);

(statearr_29907[(22)] = inst_29772);

return statearr_29907;
})();
if(cljs.core.truth_(inst_29776)){
var statearr_29908_29974 = state_29896__$1;
(statearr_29908_29974[(1)] = (2));

} else {
var statearr_29909_29975 = state_29896__$1;
(statearr_29909_29975[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (24))){
var state_29896__$1 = state_29896;
var statearr_29910_29976 = state_29896__$1;
(statearr_29910_29976[(2)] = null);

(statearr_29910_29976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (4))){
var inst_29820 = (state_29896[(2)]);
var inst_29821 = (function (){return ((function (inst_29820,state_val_29897,c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files){
return (function (p1__29564_SHARP_){
var and__18148__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29564_SHARP_);
if(cljs.core.truth_(and__18148__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29564_SHARP_));
} else {
return and__18148__auto__;
}
});
;})(inst_29820,state_val_29897,c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files))
})();
var inst_29822 = cljs.core.filter.call(null,inst_29821,files);
var state_29896__$1 = (function (){var statearr_29911 = state_29896;
(statearr_29911[(23)] = inst_29820);

(statearr_29911[(24)] = inst_29822);

return statearr_29911;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29912_29977 = state_29896__$1;
(statearr_29912_29977[(1)] = (16));

} else {
var statearr_29913_29978 = state_29896__$1;
(statearr_29913_29978[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (15))){
var inst_29810 = (state_29896[(2)]);
var state_29896__$1 = state_29896;
var statearr_29914_29979 = state_29896__$1;
(statearr_29914_29979[(2)] = inst_29810);

(statearr_29914_29979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (21))){
var state_29896__$1 = state_29896;
var statearr_29915_29980 = state_29896__$1;
(statearr_29915_29980[(2)] = null);

(statearr_29915_29980[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (31))){
var inst_29863 = (state_29896[(25)]);
var inst_29873 = (state_29896[(2)]);
var inst_29874 = cljs.core.not_empty.call(null,inst_29863);
var state_29896__$1 = (function (){var statearr_29916 = state_29896;
(statearr_29916[(26)] = inst_29873);

return statearr_29916;
})();
if(cljs.core.truth_(inst_29874)){
var statearr_29917_29981 = state_29896__$1;
(statearr_29917_29981[(1)] = (32));

} else {
var statearr_29918_29982 = state_29896__$1;
(statearr_29918_29982[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (32))){
var inst_29863 = (state_29896[(25)]);
var inst_29876 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29863);
var inst_29877 = cljs.core.pr_str.call(null,inst_29876);
var inst_29878 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29877)].join('');
var inst_29879 = figwheel.client.utils.log.call(null,inst_29878);
var state_29896__$1 = state_29896;
var statearr_29919_29983 = state_29896__$1;
(statearr_29919_29983[(2)] = inst_29879);

(statearr_29919_29983[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (33))){
var state_29896__$1 = state_29896;
var statearr_29920_29984 = state_29896__$1;
(statearr_29920_29984[(2)] = null);

(statearr_29920_29984[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (13))){
var inst_29796 = (state_29896[(27)]);
var inst_29800 = cljs.core.chunk_first.call(null,inst_29796);
var inst_29801 = cljs.core.chunk_rest.call(null,inst_29796);
var inst_29802 = cljs.core.count.call(null,inst_29800);
var inst_29783 = inst_29801;
var inst_29784 = inst_29800;
var inst_29785 = inst_29802;
var inst_29786 = (0);
var state_29896__$1 = (function (){var statearr_29921 = state_29896;
(statearr_29921[(7)] = inst_29783);

(statearr_29921[(8)] = inst_29785);

(statearr_29921[(9)] = inst_29784);

(statearr_29921[(10)] = inst_29786);

return statearr_29921;
})();
var statearr_29922_29985 = state_29896__$1;
(statearr_29922_29985[(2)] = null);

(statearr_29922_29985[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (22))){
var inst_29835 = (state_29896[(13)]);
var inst_29848 = (state_29896[(2)]);
var inst_29849 = cljs.core.not_empty.call(null,inst_29835);
var state_29896__$1 = (function (){var statearr_29923 = state_29896;
(statearr_29923[(28)] = inst_29848);

return statearr_29923;
})();
if(cljs.core.truth_(inst_29849)){
var statearr_29924_29986 = state_29896__$1;
(statearr_29924_29986[(1)] = (23));

} else {
var statearr_29925_29987 = state_29896__$1;
(statearr_29925_29987[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (36))){
var state_29896__$1 = state_29896;
var statearr_29926_29988 = state_29896__$1;
(statearr_29926_29988[(2)] = null);

(statearr_29926_29988[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (29))){
var inst_29864 = (state_29896[(29)]);
var inst_29867 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29864);
var inst_29868 = cljs.core.pr_str.call(null,inst_29867);
var inst_29869 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29868)].join('');
var inst_29870 = figwheel.client.utils.log.call(null,inst_29869);
var state_29896__$1 = state_29896;
var statearr_29927_29989 = state_29896__$1;
(statearr_29927_29989[(2)] = inst_29870);

(statearr_29927_29989[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (6))){
var inst_29817 = (state_29896[(2)]);
var state_29896__$1 = state_29896;
var statearr_29928_29990 = state_29896__$1;
(statearr_29928_29990[(2)] = inst_29817);

(statearr_29928_29990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (28))){
var inst_29864 = (state_29896[(29)]);
var inst_29861 = (state_29896[(2)]);
var inst_29862 = cljs.core.get.call(null,inst_29861,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29863 = cljs.core.get.call(null,inst_29861,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29864__$1 = cljs.core.get.call(null,inst_29861,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29865 = cljs.core.not_empty.call(null,inst_29864__$1);
var state_29896__$1 = (function (){var statearr_29929 = state_29896;
(statearr_29929[(25)] = inst_29863);

(statearr_29929[(30)] = inst_29862);

(statearr_29929[(29)] = inst_29864__$1);

return statearr_29929;
})();
if(cljs.core.truth_(inst_29865)){
var statearr_29930_29991 = state_29896__$1;
(statearr_29930_29991[(1)] = (29));

} else {
var statearr_29931_29992 = state_29896__$1;
(statearr_29931_29992[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (25))){
var inst_29894 = (state_29896[(2)]);
var state_29896__$1 = state_29896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29896__$1,inst_29894);
} else {
if((state_val_29897 === (34))){
var inst_29862 = (state_29896[(30)]);
var inst_29882 = (state_29896[(2)]);
var inst_29883 = cljs.core.not_empty.call(null,inst_29862);
var state_29896__$1 = (function (){var statearr_29932 = state_29896;
(statearr_29932[(31)] = inst_29882);

return statearr_29932;
})();
if(cljs.core.truth_(inst_29883)){
var statearr_29933_29993 = state_29896__$1;
(statearr_29933_29993[(1)] = (35));

} else {
var statearr_29934_29994 = state_29896__$1;
(statearr_29934_29994[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (17))){
var inst_29822 = (state_29896[(24)]);
var state_29896__$1 = state_29896;
var statearr_29935_29995 = state_29896__$1;
(statearr_29935_29995[(2)] = inst_29822);

(statearr_29935_29995[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (3))){
var state_29896__$1 = state_29896;
var statearr_29936_29996 = state_29896__$1;
(statearr_29936_29996[(2)] = null);

(statearr_29936_29996[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (12))){
var inst_29813 = (state_29896[(2)]);
var state_29896__$1 = state_29896;
var statearr_29937_29997 = state_29896__$1;
(statearr_29937_29997[(2)] = inst_29813);

(statearr_29937_29997[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (2))){
var inst_29775 = (state_29896[(20)]);
var inst_29782 = cljs.core.seq.call(null,inst_29775);
var inst_29783 = inst_29782;
var inst_29784 = null;
var inst_29785 = (0);
var inst_29786 = (0);
var state_29896__$1 = (function (){var statearr_29938 = state_29896;
(statearr_29938[(7)] = inst_29783);

(statearr_29938[(8)] = inst_29785);

(statearr_29938[(9)] = inst_29784);

(statearr_29938[(10)] = inst_29786);

return statearr_29938;
})();
var statearr_29939_29998 = state_29896__$1;
(statearr_29939_29998[(2)] = null);

(statearr_29939_29998[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (23))){
var inst_29855 = (state_29896[(19)]);
var inst_29832 = (state_29896[(12)]);
var inst_29835 = (state_29896[(13)]);
var inst_29833 = (state_29896[(14)]);
var inst_29829 = (state_29896[(15)]);
var inst_29828 = (state_29896[(16)]);
var inst_29851 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29854 = (function (){var files_not_loaded = inst_29835;
var res = inst_29833;
var res_SINGLEQUOTE_ = inst_29832;
var files_SINGLEQUOTE_ = inst_29829;
var all_files = inst_29828;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29855,inst_29832,inst_29835,inst_29833,inst_29829,inst_29828,inst_29851,state_val_29897,c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files){
return (function (p__29853){
var map__29940 = p__29853;
var map__29940__$1 = ((cljs.core.seq_QMARK_.call(null,map__29940))?cljs.core.apply.call(null,cljs.core.hash_map,map__29940):map__29940);
var meta_data = cljs.core.get.call(null,map__29940__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29855,inst_29832,inst_29835,inst_29833,inst_29829,inst_29828,inst_29851,state_val_29897,c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files))
})();
var inst_29855__$1 = cljs.core.group_by.call(null,inst_29854,inst_29835);
var inst_29856 = cljs.core.seq_QMARK_.call(null,inst_29855__$1);
var state_29896__$1 = (function (){var statearr_29941 = state_29896;
(statearr_29941[(19)] = inst_29855__$1);

(statearr_29941[(32)] = inst_29851);

return statearr_29941;
})();
if(inst_29856){
var statearr_29942_29999 = state_29896__$1;
(statearr_29942_29999[(1)] = (26));

} else {
var statearr_29943_30000 = state_29896__$1;
(statearr_29943_30000[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (35))){
var inst_29862 = (state_29896[(30)]);
var inst_29885 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29862);
var inst_29886 = cljs.core.pr_str.call(null,inst_29885);
var inst_29887 = [cljs.core.str("not required: "),cljs.core.str(inst_29886)].join('');
var inst_29888 = figwheel.client.utils.log.call(null,inst_29887);
var state_29896__$1 = state_29896;
var statearr_29944_30001 = state_29896__$1;
(statearr_29944_30001[(2)] = inst_29888);

(statearr_29944_30001[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (19))){
var inst_29832 = (state_29896[(12)]);
var inst_29833 = (state_29896[(14)]);
var inst_29829 = (state_29896[(15)]);
var inst_29828 = (state_29896[(16)]);
var inst_29832__$1 = (state_29896[(2)]);
var inst_29833__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29832__$1);
var inst_29834 = (function (){var res = inst_29833__$1;
var res_SINGLEQUOTE_ = inst_29832__$1;
var files_SINGLEQUOTE_ = inst_29829;
var all_files = inst_29828;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29832,inst_29833,inst_29829,inst_29828,inst_29832__$1,inst_29833__$1,state_val_29897,c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files){
return (function (p1__29566_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29566_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29832,inst_29833,inst_29829,inst_29828,inst_29832__$1,inst_29833__$1,state_val_29897,c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files))
})();
var inst_29835 = cljs.core.filter.call(null,inst_29834,inst_29832__$1);
var inst_29836 = cljs.core.not_empty.call(null,inst_29833__$1);
var state_29896__$1 = (function (){var statearr_29945 = state_29896;
(statearr_29945[(12)] = inst_29832__$1);

(statearr_29945[(13)] = inst_29835);

(statearr_29945[(14)] = inst_29833__$1);

return statearr_29945;
})();
if(cljs.core.truth_(inst_29836)){
var statearr_29946_30002 = state_29896__$1;
(statearr_29946_30002[(1)] = (20));

} else {
var statearr_29947_30003 = state_29896__$1;
(statearr_29947_30003[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (11))){
var state_29896__$1 = state_29896;
var statearr_29948_30004 = state_29896__$1;
(statearr_29948_30004[(2)] = null);

(statearr_29948_30004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (9))){
var inst_29815 = (state_29896[(2)]);
var state_29896__$1 = state_29896;
var statearr_29949_30005 = state_29896__$1;
(statearr_29949_30005[(2)] = inst_29815);

(statearr_29949_30005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (5))){
var inst_29785 = (state_29896[(8)]);
var inst_29786 = (state_29896[(10)]);
var inst_29788 = (inst_29786 < inst_29785);
var inst_29789 = inst_29788;
var state_29896__$1 = state_29896;
if(cljs.core.truth_(inst_29789)){
var statearr_29950_30006 = state_29896__$1;
(statearr_29950_30006[(1)] = (7));

} else {
var statearr_29951_30007 = state_29896__$1;
(statearr_29951_30007[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (14))){
var inst_29796 = (state_29896[(27)]);
var inst_29805 = cljs.core.first.call(null,inst_29796);
var inst_29806 = figwheel.client.file_reloading.eval_body.call(null,inst_29805);
var inst_29807 = cljs.core.next.call(null,inst_29796);
var inst_29783 = inst_29807;
var inst_29784 = null;
var inst_29785 = (0);
var inst_29786 = (0);
var state_29896__$1 = (function (){var statearr_29952 = state_29896;
(statearr_29952[(33)] = inst_29806);

(statearr_29952[(7)] = inst_29783);

(statearr_29952[(8)] = inst_29785);

(statearr_29952[(9)] = inst_29784);

(statearr_29952[(10)] = inst_29786);

return statearr_29952;
})();
var statearr_29953_30008 = state_29896__$1;
(statearr_29953_30008[(2)] = null);

(statearr_29953_30008[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (26))){
var inst_29855 = (state_29896[(19)]);
var inst_29858 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29855);
var state_29896__$1 = state_29896;
var statearr_29954_30009 = state_29896__$1;
(statearr_29954_30009[(2)] = inst_29858);

(statearr_29954_30009[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (16))){
var inst_29822 = (state_29896[(24)]);
var inst_29824 = (function (){var all_files = inst_29822;
return ((function (all_files,inst_29822,state_val_29897,c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files){
return (function (p1__29565_SHARP_){
return cljs.core.update_in.call(null,p1__29565_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29822,state_val_29897,c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files))
})();
var inst_29825 = cljs.core.map.call(null,inst_29824,inst_29822);
var state_29896__$1 = state_29896;
var statearr_29955_30010 = state_29896__$1;
(statearr_29955_30010[(2)] = inst_29825);

(statearr_29955_30010[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (30))){
var state_29896__$1 = state_29896;
var statearr_29956_30011 = state_29896__$1;
(statearr_29956_30011[(2)] = null);

(statearr_29956_30011[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (10))){
var inst_29796 = (state_29896[(27)]);
var inst_29798 = cljs.core.chunked_seq_QMARK_.call(null,inst_29796);
var state_29896__$1 = state_29896;
if(inst_29798){
var statearr_29957_30012 = state_29896__$1;
(statearr_29957_30012[(1)] = (13));

} else {
var statearr_29958_30013 = state_29896__$1;
(statearr_29958_30013[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (18))){
var inst_29829 = (state_29896[(15)]);
var inst_29828 = (state_29896[(16)]);
var inst_29828__$1 = (state_29896[(2)]);
var inst_29829__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29828__$1);
var inst_29830 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29829__$1);
var state_29896__$1 = (function (){var statearr_29959 = state_29896;
(statearr_29959[(15)] = inst_29829__$1);

(statearr_29959[(16)] = inst_29828__$1);

return statearr_29959;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29896__$1,(19),inst_29830);
} else {
if((state_val_29897 === (37))){
var inst_29891 = (state_29896[(2)]);
var state_29896__$1 = state_29896;
var statearr_29960_30014 = state_29896__$1;
(statearr_29960_30014[(2)] = inst_29891);

(statearr_29960_30014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29897 === (8))){
var inst_29796 = (state_29896[(27)]);
var inst_29783 = (state_29896[(7)]);
var inst_29796__$1 = cljs.core.seq.call(null,inst_29783);
var state_29896__$1 = (function (){var statearr_29961 = state_29896;
(statearr_29961[(27)] = inst_29796__$1);

return statearr_29961;
})();
if(inst_29796__$1){
var statearr_29962_30015 = state_29896__$1;
(statearr_29962_30015[(1)] = (10));

} else {
var statearr_29963_30016 = state_29896__$1;
(statearr_29963_30016[(1)] = (11));

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
});})(c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files))
;
return ((function (switch__21322__auto__,c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____0 = (function (){
var statearr_29967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29967[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__);

(statearr_29967[(1)] = (1));

return statearr_29967;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____1 = (function (state_29896){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_29896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e29968){if((e29968 instanceof Object)){
var ex__21326__auto__ = e29968;
var statearr_29969_30017 = state_29896;
(statearr_29969_30017[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30018 = state_29896;
state_29896 = G__30018;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__ = function(state_29896){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____1.call(this,state_29896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files))
})();
var state__21386__auto__ = (function (){var statearr_29970 = f__21385__auto__.call(null);
(statearr_29970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_29970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__,map__29770,map__29770__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29771,map__29771__$1,msg,files))
);

return c__21384__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30021,link){
var map__30023 = p__30021;
var map__30023__$1 = ((cljs.core.seq_QMARK_.call(null,map__30023))?cljs.core.apply.call(null,cljs.core.hash_map,map__30023):map__30023);
var file = cljs.core.get.call(null,map__30023__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__30023,map__30023__$1,file){
return (function (p1__30019_SHARP_,p2__30020_SHARP_){
if(cljs.core._EQ_.call(null,p1__30019_SHARP_,p2__30020_SHARP_)){
return p1__30019_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__30023,map__30023__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30027){
var map__30028 = p__30027;
var map__30028__$1 = ((cljs.core.seq_QMARK_.call(null,map__30028))?cljs.core.apply.call(null,cljs.core.hash_map,map__30028):map__30028);
var current_url_length = cljs.core.get.call(null,map__30028__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__30028__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30024_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30024_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__30030 = arguments.length;
switch (G__30030) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30032){
var map__30034 = p__30032;
var map__30034__$1 = ((cljs.core.seq_QMARK_.call(null,map__30034))?cljs.core.apply.call(null,cljs.core.hash_map,map__30034):map__30034);
var f_data = map__30034__$1;
var request_url = cljs.core.get.call(null,map__30034__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__30034__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18160__auto__ = request_url;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30035,files_msg){
var map__30057 = p__30035;
var map__30057__$1 = ((cljs.core.seq_QMARK_.call(null,map__30057))?cljs.core.apply.call(null,cljs.core.hash_map,map__30057):map__30057);
var opts = map__30057__$1;
var on_cssload = cljs.core.get.call(null,map__30057__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30058_30078 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30059_30079 = null;
var count__30060_30080 = (0);
var i__30061_30081 = (0);
while(true){
if((i__30061_30081 < count__30060_30080)){
var f_30082 = cljs.core._nth.call(null,chunk__30059_30079,i__30061_30081);
figwheel.client.file_reloading.reload_css_file.call(null,f_30082);

var G__30083 = seq__30058_30078;
var G__30084 = chunk__30059_30079;
var G__30085 = count__30060_30080;
var G__30086 = (i__30061_30081 + (1));
seq__30058_30078 = G__30083;
chunk__30059_30079 = G__30084;
count__30060_30080 = G__30085;
i__30061_30081 = G__30086;
continue;
} else {
var temp__4126__auto___30087 = cljs.core.seq.call(null,seq__30058_30078);
if(temp__4126__auto___30087){
var seq__30058_30088__$1 = temp__4126__auto___30087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30058_30088__$1)){
var c__18945__auto___30089 = cljs.core.chunk_first.call(null,seq__30058_30088__$1);
var G__30090 = cljs.core.chunk_rest.call(null,seq__30058_30088__$1);
var G__30091 = c__18945__auto___30089;
var G__30092 = cljs.core.count.call(null,c__18945__auto___30089);
var G__30093 = (0);
seq__30058_30078 = G__30090;
chunk__30059_30079 = G__30091;
count__30060_30080 = G__30092;
i__30061_30081 = G__30093;
continue;
} else {
var f_30094 = cljs.core.first.call(null,seq__30058_30088__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30094);

var G__30095 = cljs.core.next.call(null,seq__30058_30088__$1);
var G__30096 = null;
var G__30097 = (0);
var G__30098 = (0);
seq__30058_30078 = G__30095;
chunk__30059_30079 = G__30096;
count__30060_30080 = G__30097;
i__30061_30081 = G__30098;
continue;
}
} else {
}
}
break;
}

var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__,map__30057,map__30057__$1,opts,on_cssload){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__,map__30057,map__30057__$1,opts,on_cssload){
return (function (state_30068){
var state_val_30069 = (state_30068[(1)]);
if((state_val_30069 === (2))){
var inst_30064 = (state_30068[(2)]);
var inst_30065 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_30066 = on_cssload.call(null,inst_30065);
var state_30068__$1 = (function (){var statearr_30070 = state_30068;
(statearr_30070[(7)] = inst_30064);

return statearr_30070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30068__$1,inst_30066);
} else {
if((state_val_30069 === (1))){
var inst_30062 = cljs.core.async.timeout.call(null,(100));
var state_30068__$1 = state_30068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30068__$1,(2),inst_30062);
} else {
return null;
}
}
});})(c__21384__auto__,map__30057,map__30057__$1,opts,on_cssload))
;
return ((function (switch__21322__auto__,c__21384__auto__,map__30057,map__30057__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____0 = (function (){
var statearr_30074 = [null,null,null,null,null,null,null,null];
(statearr_30074[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__);

(statearr_30074[(1)] = (1));

return statearr_30074;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____1 = (function (state_30068){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_30068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e30075){if((e30075 instanceof Object)){
var ex__21326__auto__ = e30075;
var statearr_30076_30099 = state_30068;
(statearr_30076_30099[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30100 = state_30068;
state_30068 = G__30100;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__ = function(state_30068){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____1.call(this,state_30068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__,map__30057,map__30057__$1,opts,on_cssload))
})();
var state__21386__auto__ = (function (){var statearr_30077 = f__21385__auto__.call(null);
(statearr_30077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_30077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__,map__30057,map__30057__$1,opts,on_cssload))
);

return c__21384__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1446435322962
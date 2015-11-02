// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19200__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19200__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__29148_29156 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29149_29157 = null;
var count__29150_29158 = (0);
var i__29151_29159 = (0);
while(true){
if((i__29151_29159 < count__29150_29158)){
var k_29160 = cljs.core._nth.call(null,chunk__29149_29157,i__29151_29159);
e.setAttribute(cljs.core.name.call(null,k_29160),cljs.core.get.call(null,attrs,k_29160));

var G__29161 = seq__29148_29156;
var G__29162 = chunk__29149_29157;
var G__29163 = count__29150_29158;
var G__29164 = (i__29151_29159 + (1));
seq__29148_29156 = G__29161;
chunk__29149_29157 = G__29162;
count__29150_29158 = G__29163;
i__29151_29159 = G__29164;
continue;
} else {
var temp__4126__auto___29165 = cljs.core.seq.call(null,seq__29148_29156);
if(temp__4126__auto___29165){
var seq__29148_29166__$1 = temp__4126__auto___29165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29148_29166__$1)){
var c__18945__auto___29167 = cljs.core.chunk_first.call(null,seq__29148_29166__$1);
var G__29168 = cljs.core.chunk_rest.call(null,seq__29148_29166__$1);
var G__29169 = c__18945__auto___29167;
var G__29170 = cljs.core.count.call(null,c__18945__auto___29167);
var G__29171 = (0);
seq__29148_29156 = G__29168;
chunk__29149_29157 = G__29169;
count__29150_29158 = G__29170;
i__29151_29159 = G__29171;
continue;
} else {
var k_29172 = cljs.core.first.call(null,seq__29148_29166__$1);
e.setAttribute(cljs.core.name.call(null,k_29172),cljs.core.get.call(null,attrs,k_29172));

var G__29173 = cljs.core.next.call(null,seq__29148_29166__$1);
var G__29174 = null;
var G__29175 = (0);
var G__29176 = (0);
seq__29148_29156 = G__29173;
chunk__29149_29157 = G__29174;
count__29150_29158 = G__29175;
i__29151_29159 = G__29176;
continue;
}
} else {
}
}
break;
}

var seq__29152_29177 = cljs.core.seq.call(null,children);
var chunk__29153_29178 = null;
var count__29154_29179 = (0);
var i__29155_29180 = (0);
while(true){
if((i__29155_29180 < count__29154_29179)){
var ch_29181 = cljs.core._nth.call(null,chunk__29153_29178,i__29155_29180);
e.appendChild(ch_29181);

var G__29182 = seq__29152_29177;
var G__29183 = chunk__29153_29178;
var G__29184 = count__29154_29179;
var G__29185 = (i__29155_29180 + (1));
seq__29152_29177 = G__29182;
chunk__29153_29178 = G__29183;
count__29154_29179 = G__29184;
i__29155_29180 = G__29185;
continue;
} else {
var temp__4126__auto___29186 = cljs.core.seq.call(null,seq__29152_29177);
if(temp__4126__auto___29186){
var seq__29152_29187__$1 = temp__4126__auto___29186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29152_29187__$1)){
var c__18945__auto___29188 = cljs.core.chunk_first.call(null,seq__29152_29187__$1);
var G__29189 = cljs.core.chunk_rest.call(null,seq__29152_29187__$1);
var G__29190 = c__18945__auto___29188;
var G__29191 = cljs.core.count.call(null,c__18945__auto___29188);
var G__29192 = (0);
seq__29152_29177 = G__29189;
chunk__29153_29178 = G__29190;
count__29154_29179 = G__29191;
i__29155_29180 = G__29192;
continue;
} else {
var ch_29193 = cljs.core.first.call(null,seq__29152_29187__$1);
e.appendChild(ch_29193);

var G__29194 = cljs.core.next.call(null,seq__29152_29187__$1);
var G__29195 = null;
var G__29196 = (0);
var G__29197 = (0);
seq__29152_29177 = G__29194;
chunk__29153_29178 = G__29195;
count__29154_29179 = G__29196;
i__29155_29180 = G__29197;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29145){
var G__29146 = cljs.core.first.call(null,seq29145);
var seq29145__$1 = cljs.core.next.call(null,seq29145);
var G__29147 = cljs.core.first.call(null,seq29145__$1);
var seq29145__$2 = cljs.core.next.call(null,seq29145__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__29146,G__29147,seq29145__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__,hierarchy__19059__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__,hierarchy__19059__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19059__auto__,method_table__19055__auto__,prefer_table__19056__auto__,method_cache__19057__auto__,cached_hierarchy__19058__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_29198 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29198.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29198.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_29198.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29198);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29199,st_map){
var map__29203 = p__29199;
var map__29203__$1 = ((cljs.core.seq_QMARK_.call(null,map__29203))?cljs.core.apply.call(null,cljs.core.hash_map,map__29203):map__29203);
var container_el = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29203,map__29203__$1,container_el){
return (function (p__29204){
var vec__29205 = p__29204;
var k = cljs.core.nth.call(null,vec__29205,(0),null);
var v = cljs.core.nth.call(null,vec__29205,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29203,map__29203__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29206,dom_str){
var map__29208 = p__29206;
var map__29208__$1 = ((cljs.core.seq_QMARK_.call(null,map__29208))?cljs.core.apply.call(null,cljs.core.hash_map,map__29208):map__29208);
var c = map__29208__$1;
var content_area_el = cljs.core.get.call(null,map__29208__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29209){
var map__29211 = p__29209;
var map__29211__$1 = ((cljs.core.seq_QMARK_.call(null,map__29211))?cljs.core.apply.call(null,cljs.core.hash_map,map__29211):map__29211);
var content_area_el = cljs.core.get.call(null,map__29211__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_29253){
var state_val_29254 = (state_29253[(1)]);
if((state_val_29254 === (2))){
var inst_29238 = (state_29253[(7)]);
var inst_29247 = (state_29253[(2)]);
var inst_29248 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29249 = ["auto"];
var inst_29250 = cljs.core.PersistentHashMap.fromArrays(inst_29248,inst_29249);
var inst_29251 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29238,inst_29250);
var state_29253__$1 = (function (){var statearr_29255 = state_29253;
(statearr_29255[(8)] = inst_29247);

return statearr_29255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29253__$1,inst_29251);
} else {
if((state_val_29254 === (1))){
var inst_29238 = (state_29253[(7)]);
var inst_29238__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29239 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29240 = ["10px","10px","100%","68px","1.0"];
var inst_29241 = cljs.core.PersistentHashMap.fromArrays(inst_29239,inst_29240);
var inst_29242 = cljs.core.merge.call(null,inst_29241,style);
var inst_29243 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29238__$1,inst_29242);
var inst_29244 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29238__$1,msg);
var inst_29245 = cljs.core.async.timeout.call(null,(300));
var state_29253__$1 = (function (){var statearr_29256 = state_29253;
(statearr_29256[(9)] = inst_29244);

(statearr_29256[(10)] = inst_29243);

(statearr_29256[(7)] = inst_29238__$1);

return statearr_29256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29253__$1,(2),inst_29245);
} else {
return null;
}
}
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto____0 = (function (){
var statearr_29260 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29260[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto__);

(statearr_29260[(1)] = (1));

return statearr_29260;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto____1 = (function (state_29253){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_29253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e29261){if((e29261 instanceof Object)){
var ex__21326__auto__ = e29261;
var statearr_29262_29264 = state_29253;
(statearr_29262_29264[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29265 = state_29253;
state_29253 = G__29265;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto__ = function(state_29253){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto____1.call(this,state_29253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_29263 = f__21385__auto__.call(null);
(statearr_29263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_29263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__29267 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__29267,(0),null);
var ln = cljs.core.nth.call(null,vec__29267,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29270 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29270,(0),null);
var file_line = cljs.core.nth.call(null,vec__29270,(1),null);
var file_column = cljs.core.nth.call(null,vec__29270,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29270,file_name,file_line,file_column){
return (function (p1__29268_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__29268_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__29270,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18160__auto__ = file_line;
if(cljs.core.truth_(or__18160__auto__)){
return or__18160__auto__;
} else {
var and__18148__auto__ = cause;
if(cljs.core.truth_(and__18148__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18148__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__29272 = figwheel.client.heads_up.ensure_container.call(null);
var map__29272__$1 = ((cljs.core.seq_QMARK_.call(null,map__29272))?cljs.core.apply.call(null,cljs.core.hash_map,map__29272):map__29272);
var content_area_el = cljs.core.get.call(null,map__29272__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_29319){
var state_val_29320 = (state_29319[(1)]);
if((state_val_29320 === (3))){
var inst_29302 = (state_29319[(7)]);
var inst_29316 = (state_29319[(2)]);
var inst_29317 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29302,"");
var state_29319__$1 = (function (){var statearr_29321 = state_29319;
(statearr_29321[(8)] = inst_29316);

return statearr_29321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29319__$1,inst_29317);
} else {
if((state_val_29320 === (2))){
var inst_29302 = (state_29319[(7)]);
var inst_29309 = (state_29319[(2)]);
var inst_29310 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29311 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29312 = cljs.core.PersistentHashMap.fromArrays(inst_29310,inst_29311);
var inst_29313 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29302,inst_29312);
var inst_29314 = cljs.core.async.timeout.call(null,(200));
var state_29319__$1 = (function (){var statearr_29322 = state_29319;
(statearr_29322[(9)] = inst_29313);

(statearr_29322[(10)] = inst_29309);

return statearr_29322;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29319__$1,(3),inst_29314);
} else {
if((state_val_29320 === (1))){
var inst_29302 = (state_29319[(7)]);
var inst_29302__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29303 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29304 = ["0.0"];
var inst_29305 = cljs.core.PersistentHashMap.fromArrays(inst_29303,inst_29304);
var inst_29306 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29302__$1,inst_29305);
var inst_29307 = cljs.core.async.timeout.call(null,(300));
var state_29319__$1 = (function (){var statearr_29323 = state_29319;
(statearr_29323[(11)] = inst_29306);

(statearr_29323[(7)] = inst_29302__$1);

return statearr_29323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29319__$1,(2),inst_29307);
} else {
return null;
}
}
}
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21323__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21323__auto____0 = (function (){
var statearr_29327 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29327[(0)] = figwheel$client$heads_up$clear_$_state_machine__21323__auto__);

(statearr_29327[(1)] = (1));

return statearr_29327;
});
var figwheel$client$heads_up$clear_$_state_machine__21323__auto____1 = (function (state_29319){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_29319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e29328){if((e29328 instanceof Object)){
var ex__21326__auto__ = e29328;
var statearr_29329_29331 = state_29319;
(statearr_29329_29331[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29332 = state_29319;
state_29319 = G__29332;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21323__auto__ = function(state_29319){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21323__auto____1.call(this,state_29319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21323__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21323__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_29330 = f__21385__auto__.call(null);
(statearr_29330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_29330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21384__auto__){
return (function (){
var f__21385__auto__ = (function (){var switch__21322__auto__ = ((function (c__21384__auto__){
return (function (state_29364){
var state_val_29365 = (state_29364[(1)]);
if((state_val_29365 === (4))){
var inst_29362 = (state_29364[(2)]);
var state_29364__$1 = state_29364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29364__$1,inst_29362);
} else {
if((state_val_29365 === (3))){
var inst_29359 = (state_29364[(2)]);
var inst_29360 = figwheel.client.heads_up.clear.call(null);
var state_29364__$1 = (function (){var statearr_29366 = state_29364;
(statearr_29366[(7)] = inst_29359);

return statearr_29366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29364__$1,(4),inst_29360);
} else {
if((state_val_29365 === (2))){
var inst_29356 = (state_29364[(2)]);
var inst_29357 = cljs.core.async.timeout.call(null,(400));
var state_29364__$1 = (function (){var statearr_29367 = state_29364;
(statearr_29367[(8)] = inst_29356);

return statearr_29367;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29364__$1,(3),inst_29357);
} else {
if((state_val_29365 === (1))){
var inst_29354 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29364__$1 = state_29364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29364__$1,(2),inst_29354);
} else {
return null;
}
}
}
}
});})(c__21384__auto__))
;
return ((function (switch__21322__auto__,c__21384__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto____0 = (function (){
var statearr_29371 = [null,null,null,null,null,null,null,null,null];
(statearr_29371[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto__);

(statearr_29371[(1)] = (1));

return statearr_29371;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto____1 = (function (state_29364){
while(true){
var ret_value__21324__auto__ = (function (){try{while(true){
var result__21325__auto__ = switch__21322__auto__.call(null,state_29364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21325__auto__;
}
break;
}
}catch (e29372){if((e29372 instanceof Object)){
var ex__21326__auto__ = e29372;
var statearr_29373_29375 = state_29364;
(statearr_29373_29375[(5)] = ex__21326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29376 = state_29364;
state_29364 = G__29376;
continue;
} else {
return ret_value__21324__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto__ = function(state_29364){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto____1.call(this,state_29364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21323__auto__;
})()
;})(switch__21322__auto__,c__21384__auto__))
})();
var state__21386__auto__ = (function (){var statearr_29374 = f__21385__auto__.call(null);
(statearr_29374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21384__auto__);

return statearr_29374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21386__auto__);
});})(c__21384__auto__))
);

return c__21384__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1446435322563
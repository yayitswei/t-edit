// Compiled by ClojureScript 0.0-2173
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,0);
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_10554 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_10554;
}});
reagent.ratom.captured = (function captured(obj){var c = obj.cljsCaptured;obj.cljsCaptured = null;
return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){var obj = reagent.ratom._STAR_ratom_context_STAR_;if((obj == null))
{return null;
} else
{var captured = obj.cljsCaptured;return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
}),null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{if(cljs.core.truth_(self__.validator.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",1544652043,null),new cljs.core.Symbol(null,"new-value","new-value",972165309,null))))].join('')));
}
}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__10558__delegate = function (x,p__10555){var map__10557 = p__10555;var map__10557__$1 = ((cljs.core.seq_QMARK_.call(null,map__10557))?cljs.core.apply.call(null,cljs.core.hash_map,map__10557):map__10557);var validator = cljs.core.get.call(null,map__10557__$1,new cljs.core.Keyword(null,"validator","validator",4199087812));var meta = cljs.core.get.call(null,map__10557__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__10558 = function (x,var_args){
var p__10555 = null;if (arguments.length > 1) {
  p__10555 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__10558__delegate.call(this,x,p__10555);};
G__10558.cljs$lang$maxFixedArity = 1;
G__10558.cljs$lang$applyTo = (function (arglist__10559){
var x = cljs.core.first(arglist__10559);
var p__10555 = cljs.core.rest(arglist__10559);
return G__10558__delegate(x,p__10555);
});
G__10558.cljs$core$IFn$_invoke$arity$variadic = G__10558__delegate;
return G__10558;
})()
;
atom = function(x,var_args){
var p__10555 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
reagent.ratom.IDisposable = (function (){var obj10561 = {};return obj10561;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj10563 = {};return obj10563;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (reagent.ratom.run[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (reagent.ratom.run["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj10565 = {};return obj10565;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3431__auto__ = k;if(and__3431__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3431__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4070__auto__ = (((k == null))?null:k);return (function (){var or__3443__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,obs,oldval,newval);
return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__3443__auto__ = self__.auto_run;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__6113__auto___10578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(!((console.log == null)))
{console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(177),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__6113__auto___10578))].join(''))].join(''));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__3443__auto__ = self__.auto_run;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"auto-run","auto-run",-202959066,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",1304741512,null))))].join('')));
}
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3431__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3431__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3431__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3443__auto__ = self__.auto_run;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__10566_10579 = cljs.core.seq.call(null,derefed);var chunk__10567_10580 = null;var count__10568_10581 = 0;var i__10569_10582 = 0;while(true){
if((i__10569_10582 < count__10568_10581))
{var w_10583 = cljs.core._nth.call(null,chunk__10567_10580,i__10569_10582);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_10583))
{} else
{cljs.core.add_watch.call(null,w_10583,this$__$1,reagent.ratom._handle_change);
}
{
var G__10584 = seq__10566_10579;
var G__10585 = chunk__10567_10580;
var G__10586 = count__10568_10581;
var G__10587 = (i__10569_10582 + 1);
seq__10566_10579 = G__10584;
chunk__10567_10580 = G__10585;
count__10568_10581 = G__10586;
i__10569_10582 = G__10587;
continue;
}
} else
{var temp__4092__auto___10588 = cljs.core.seq.call(null,seq__10566_10579);if(temp__4092__auto___10588)
{var seq__10566_10589__$1 = temp__4092__auto___10588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10566_10589__$1))
{var c__4191__auto___10590 = cljs.core.chunk_first.call(null,seq__10566_10589__$1);{
var G__10591 = cljs.core.chunk_rest.call(null,seq__10566_10589__$1);
var G__10592 = c__4191__auto___10590;
var G__10593 = cljs.core.count.call(null,c__4191__auto___10590);
var G__10594 = 0;
seq__10566_10579 = G__10591;
chunk__10567_10580 = G__10592;
count__10568_10581 = G__10593;
i__10569_10582 = G__10594;
continue;
}
} else
{var w_10595 = cljs.core.first.call(null,seq__10566_10589__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_10595))
{} else
{cljs.core.add_watch.call(null,w_10595,this$__$1,reagent.ratom._handle_change);
}
{
var G__10596 = cljs.core.next.call(null,seq__10566_10589__$1);
var G__10597 = null;
var G__10598 = 0;
var G__10599 = 0;
seq__10566_10579 = G__10596;
chunk__10567_10580 = G__10597;
count__10568_10581 = G__10598;
i__10569_10582 = G__10599;
continue;
}
}
} else
{}
}
break;
}
var seq__10570_10600 = cljs.core.seq.call(null,self__.watching);var chunk__10571_10601 = null;var count__10572_10602 = 0;var i__10573_10603 = 0;while(true){
if((i__10573_10603 < count__10572_10602))
{var w_10604 = cljs.core._nth.call(null,chunk__10571_10601,i__10573_10603);if(cljs.core.contains_QMARK_.call(null,derefed,w_10604))
{} else
{cljs.core.remove_watch.call(null,w_10604,this$__$1);
}
{
var G__10605 = seq__10570_10600;
var G__10606 = chunk__10571_10601;
var G__10607 = count__10572_10602;
var G__10608 = (i__10573_10603 + 1);
seq__10570_10600 = G__10605;
chunk__10571_10601 = G__10606;
count__10572_10602 = G__10607;
i__10573_10603 = G__10608;
continue;
}
} else
{var temp__4092__auto___10609 = cljs.core.seq.call(null,seq__10570_10600);if(temp__4092__auto___10609)
{var seq__10570_10610__$1 = temp__4092__auto___10609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10570_10610__$1))
{var c__4191__auto___10611 = cljs.core.chunk_first.call(null,seq__10570_10610__$1);{
var G__10612 = cljs.core.chunk_rest.call(null,seq__10570_10610__$1);
var G__10613 = c__4191__auto___10611;
var G__10614 = cljs.core.count.call(null,c__4191__auto___10611);
var G__10615 = 0;
seq__10570_10600 = G__10612;
chunk__10571_10601 = G__10613;
count__10572_10602 = G__10614;
i__10573_10603 = G__10615;
continue;
}
} else
{var w_10616 = cljs.core.first.call(null,seq__10570_10610__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_10616))
{} else
{cljs.core.remove_watch.call(null,w_10616,this$__$1);
}
{
var G__10617 = cljs.core.next.call(null,seq__10570_10610__$1);
var G__10618 = null;
var G__10619 = 0;
var G__10620 = 0;
seq__10570_10600 = G__10617;
chunk__10571_10601 = G__10618;
count__10572_10602 = G__10619;
i__10573_10603 = G__10620;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{self__.on_set.call(null,oldval,newval);
} else
{}
return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if(cljs.core.empty_QMARK_.call(null,self__.watches))
{return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__10574_10621 = cljs.core.seq.call(null,self__.watching);var chunk__10575_10622 = null;var count__10576_10623 = 0;var i__10577_10624 = 0;while(true){
if((i__10577_10624 < count__10576_10623))
{var w_10625 = cljs.core._nth.call(null,chunk__10575_10622,i__10577_10624);cljs.core.remove_watch.call(null,w_10625,this$__$1);
{
var G__10626 = seq__10574_10621;
var G__10627 = chunk__10575_10622;
var G__10628 = count__10576_10623;
var G__10629 = (i__10577_10624 + 1);
seq__10574_10621 = G__10626;
chunk__10575_10622 = G__10627;
count__10576_10623 = G__10628;
i__10577_10624 = G__10629;
continue;
}
} else
{var temp__4092__auto___10630 = cljs.core.seq.call(null,seq__10574_10621);if(temp__4092__auto___10630)
{var seq__10574_10631__$1 = temp__4092__auto___10630;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10574_10631__$1))
{var c__4191__auto___10632 = cljs.core.chunk_first.call(null,seq__10574_10631__$1);{
var G__10633 = cljs.core.chunk_rest.call(null,seq__10574_10631__$1);
var G__10634 = c__4191__auto___10632;
var G__10635 = cljs.core.count.call(null,c__4191__auto___10632);
var G__10636 = 0;
seq__10574_10621 = G__10633;
chunk__10575_10622 = G__10634;
count__10576_10623 = G__10635;
i__10577_10624 = G__10636;
continue;
}
} else
{var w_10637 = cljs.core.first.call(null,seq__10574_10631__$1);cljs.core.remove_watch.call(null,w_10637,this$__$1);
{
var G__10638 = cljs.core.next.call(null,seq__10574_10631__$1);
var G__10639 = null;
var G__10640 = 0;
var G__10641 = 0;
seq__10574_10621 = G__10638;
chunk__10575_10622 = G__10639;
count__10576_10623 = G__10640;
i__10577_10624 = G__10641;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else
{}
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);var derefed = reagent.ratom.captured.call(null,this$__$1);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;var old_value = self__.state;self__.state = new_value;
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
return new_value;
});
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__10642){var map__10644 = p__10642;var map__10644__$1 = ((cljs.core.seq_QMARK_.call(null,map__10644))?cljs.core.apply.call(null,cljs.core.hash_map,map__10644):map__10644);var derefed = cljs.core.get.call(null,map__10644__$1,new cljs.core.Keyword(null,"derefed","derefed",2569894915));var on_dispose = cljs.core.get.call(null,map__10644__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2213067683));var on_set = cljs.core.get.call(null,map__10644__$1,new cljs.core.Keyword(null,"on-set","on-set",4294781670));var auto_run = cljs.core.get.call(null,map__10644__$1,new cljs.core.Keyword(null,"auto-run","auto-run",2451476703));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));if((derefed == null))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
reagent.ratom._update_watching.call(null,reaction,derefed);
}
return reaction;
};
var make_reaction = function (f,var_args){
var p__10642 = null;if (arguments.length > 1) {
  p__10642 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__10642);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__10645){
var f = cljs.core.first(arglist__10645);
var p__10642 = cljs.core.rest(arglist__10645);
return make_reaction__delegate(f,p__10642);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map
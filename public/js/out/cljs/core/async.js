// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10727 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10727 = (function (f,fn_handler,meta10728){
this.f = f;
this.fn_handler = fn_handler;
this.meta10728 = meta10728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10727.cljs$lang$type = true;
cljs.core.async.t10727.cljs$lang$ctorStr = "cljs.core.async/t10727";
cljs.core.async.t10727.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10727");
});
cljs.core.async.t10727.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10729){var self__ = this;
var _10729__$1 = this;return self__.meta10728;
});
cljs.core.async.t10727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10729,meta10728__$1){var self__ = this;
var _10729__$1 = this;return (new cljs.core.async.t10727(self__.f,self__.fn_handler,meta10728__$1));
});
cljs.core.async.__GT_t10727 = (function __GT_t10727(f__$1,fn_handler__$1,meta10728){return (new cljs.core.async.t10727(f__$1,fn_handler__$1,meta10728));
});
}
return (new cljs.core.async.t10727(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10731 = buff;if(G__10731)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10731.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10731.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10731);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10731);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10732 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10732);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10732);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,ret);
}));
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___10733 = n;var x_10734 = 0;while(true){
if((x_10734 < n__4291__auto___10733))
{(a[x_10734] = 0);
{
var G__10735 = (x_10734 + 1);
x_10734 = G__10735;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10736 = (i + 1);
i = G__10736;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10740 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10740 = (function (flag,alt_flag,meta10741){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10741 = meta10741;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10740.cljs$lang$type = true;
cljs.core.async.t10740.cljs$lang$ctorStr = "cljs.core.async/t10740";
cljs.core.async.t10740.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10740");
});
cljs.core.async.t10740.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10740.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10740.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10742){var self__ = this;
var _10742__$1 = this;return self__.meta10741;
});
cljs.core.async.t10740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10742,meta10741__$1){var self__ = this;
var _10742__$1 = this;return (new cljs.core.async.t10740(self__.flag,self__.alt_flag,meta10741__$1));
});
cljs.core.async.__GT_t10740 = (function __GT_t10740(flag__$1,alt_flag__$1,meta10741){return (new cljs.core.async.t10740(flag__$1,alt_flag__$1,meta10741));
});
}
return (new cljs.core.async.t10740(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10746 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10746 = (function (cb,flag,alt_handler,meta10747){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10747 = meta10747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10746.cljs$lang$type = true;
cljs.core.async.t10746.cljs$lang$ctorStr = "cljs.core.async/t10746";
cljs.core.async.t10746.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10746");
});
cljs.core.async.t10746.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10748){var self__ = this;
var _10748__$1 = this;return self__.meta10747;
});
cljs.core.async.t10746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10748,meta10747__$1){var self__ = this;
var _10748__$1 = this;return (new cljs.core.async.t10746(self__.cb,self__.flag,self__.alt_handler,meta10747__$1));
});
cljs.core.async.__GT_t10746 = (function __GT_t10746(cb__$1,flag__$1,alt_handler__$1,meta10747){return (new cljs.core.async.t10746(cb__$1,flag__$1,alt_handler__$1,meta10747));
});
}
return (new cljs.core.async.t10746(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10749_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10749_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10750_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10750_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10751 = (i + 1);
i = G__10751;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
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
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10752){var map__10754 = p__10752;var map__10754__$1 = ((cljs.core.seq_QMARK_.call(null,map__10754))?cljs.core.apply.call(null,cljs.core.hash_map,map__10754):map__10754);var opts = map__10754__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10752 = null;if (arguments.length > 1) {
  p__10752 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10752);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10755){
var ports = cljs.core.first(arglist__10755);
var p__10752 = cljs.core.rest(arglist__10755);
return alts_BANG___delegate(ports,p__10752);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10763 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10763 = (function (ch,f,map_LT_,meta10764){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10764 = meta10764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10763.cljs$lang$type = true;
cljs.core.async.t10763.cljs$lang$ctorStr = "cljs.core.async/t10763";
cljs.core.async.t10763.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10763");
});
cljs.core.async.t10763.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10763.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10763.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10763.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10766 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10766 = (function (fn1,_,meta10764,ch,f,map_LT_,meta10767){
this.fn1 = fn1;
this._ = _;
this.meta10764 = meta10764;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10767 = meta10767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10766.cljs$lang$type = true;
cljs.core.async.t10766.cljs$lang$ctorStr = "cljs.core.async/t10766";
cljs.core.async.t10766.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10766");
});
cljs.core.async.t10766.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10766.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10766.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10766.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10756_SHARP_){return f1.call(null,(((p1__10756_SHARP_ == null))?null:self__.f.call(null,p1__10756_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10768){var self__ = this;
var _10768__$1 = this;return self__.meta10767;
});
cljs.core.async.t10766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10768,meta10767__$1){var self__ = this;
var _10768__$1 = this;return (new cljs.core.async.t10766(self__.fn1,self__._,self__.meta10764,self__.ch,self__.f,self__.map_LT_,meta10767__$1));
});
cljs.core.async.__GT_t10766 = (function __GT_t10766(fn1__$1,___$2,meta10764__$1,ch__$2,f__$2,map_LT___$2,meta10767){return (new cljs.core.async.t10766(fn1__$1,___$2,meta10764__$1,ch__$2,f__$2,map_LT___$2,meta10767));
});
}
return (new cljs.core.async.t10766(fn1,___$1,self__.meta10764,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10763.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10763.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10763.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10765){var self__ = this;
var _10765__$1 = this;return self__.meta10764;
});
cljs.core.async.t10763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10765,meta10764__$1){var self__ = this;
var _10765__$1 = this;return (new cljs.core.async.t10763(self__.ch,self__.f,self__.map_LT_,meta10764__$1));
});
cljs.core.async.__GT_t10763 = (function __GT_t10763(ch__$1,f__$1,map_LT___$1,meta10764){return (new cljs.core.async.t10763(ch__$1,f__$1,map_LT___$1,meta10764));
});
}
return (new cljs.core.async.t10763(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10772 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10772 = (function (ch,f,map_GT_,meta10773){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10773 = meta10773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10772.cljs$lang$type = true;
cljs.core.async.t10772.cljs$lang$ctorStr = "cljs.core.async/t10772";
cljs.core.async.t10772.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10772");
});
cljs.core.async.t10772.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10772.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10772.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10772.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10772.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10772.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10774){var self__ = this;
var _10774__$1 = this;return self__.meta10773;
});
cljs.core.async.t10772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10774,meta10773__$1){var self__ = this;
var _10774__$1 = this;return (new cljs.core.async.t10772(self__.ch,self__.f,self__.map_GT_,meta10773__$1));
});
cljs.core.async.__GT_t10772 = (function __GT_t10772(ch__$1,f__$1,map_GT___$1,meta10773){return (new cljs.core.async.t10772(ch__$1,f__$1,map_GT___$1,meta10773));
});
}
return (new cljs.core.async.t10772(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10778 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10778 = (function (ch,p,filter_GT_,meta10779){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10779 = meta10779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10778.cljs$lang$type = true;
cljs.core.async.t10778.cljs$lang$ctorStr = "cljs.core.async/t10778";
cljs.core.async.t10778.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10778");
});
cljs.core.async.t10778.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10778.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10778.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10778.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10778.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10778.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10778.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10780){var self__ = this;
var _10780__$1 = this;return self__.meta10779;
});
cljs.core.async.t10778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10780,meta10779__$1){var self__ = this;
var _10780__$1 = this;return (new cljs.core.async.t10778(self__.ch,self__.p,self__.filter_GT_,meta10779__$1));
});
cljs.core.async.__GT_t10778 = (function __GT_t10778(ch__$1,p__$1,filter_GT___$1,meta10779){return (new cljs.core.async.t10778(ch__$1,p__$1,filter_GT___$1,meta10779));
});
}
return (new cljs.core.async.t10778(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5579__auto___10863 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5580__auto__ = (function (){var switch__5564__auto__ = (function (state_10842){var state_val_10843 = (state_10842[1]);if((state_val_10843 === 1))
{var state_10842__$1 = state_10842;var statearr_10844_10864 = state_10842__$1;(statearr_10844_10864[2] = null);
(statearr_10844_10864[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10843 === 2))
{var state_10842__$1 = state_10842;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10842__$1,4,ch);
} else
{if((state_val_10843 === 3))
{var inst_10840 = (state_10842[2]);var state_10842__$1 = state_10842;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10842__$1,inst_10840);
} else
{if((state_val_10843 === 4))
{var inst_10824 = (state_10842[7]);var inst_10824__$1 = (state_10842[2]);var inst_10825 = (inst_10824__$1 == null);var state_10842__$1 = (function (){var statearr_10845 = state_10842;(statearr_10845[7] = inst_10824__$1);
return statearr_10845;
})();if(cljs.core.truth_(inst_10825))
{var statearr_10846_10865 = state_10842__$1;(statearr_10846_10865[1] = 5);
} else
{var statearr_10847_10866 = state_10842__$1;(statearr_10847_10866[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10843 === 5))
{var inst_10827 = cljs.core.async.close_BANG_.call(null,out);var state_10842__$1 = state_10842;var statearr_10848_10867 = state_10842__$1;(statearr_10848_10867[2] = inst_10827);
(statearr_10848_10867[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10843 === 6))
{var inst_10824 = (state_10842[7]);var inst_10829 = p.call(null,inst_10824);var state_10842__$1 = state_10842;if(cljs.core.truth_(inst_10829))
{var statearr_10849_10868 = state_10842__$1;(statearr_10849_10868[1] = 8);
} else
{var statearr_10850_10869 = state_10842__$1;(statearr_10850_10869[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10843 === 7))
{var inst_10838 = (state_10842[2]);var state_10842__$1 = state_10842;var statearr_10851_10870 = state_10842__$1;(statearr_10851_10870[2] = inst_10838);
(statearr_10851_10870[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10843 === 8))
{var inst_10824 = (state_10842[7]);var state_10842__$1 = state_10842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10842__$1,11,out,inst_10824);
} else
{if((state_val_10843 === 9))
{var state_10842__$1 = state_10842;var statearr_10852_10871 = state_10842__$1;(statearr_10852_10871[2] = null);
(statearr_10852_10871[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10843 === 10))
{var inst_10835 = (state_10842[2]);var state_10842__$1 = (function (){var statearr_10853 = state_10842;(statearr_10853[8] = inst_10835);
return statearr_10853;
})();var statearr_10854_10872 = state_10842__$1;(statearr_10854_10872[2] = null);
(statearr_10854_10872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10843 === 11))
{var inst_10832 = (state_10842[2]);var state_10842__$1 = state_10842;var statearr_10855_10873 = state_10842__$1;(statearr_10855_10873[2] = inst_10832);
(statearr_10855_10873[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5564__auto__){
return (function() {
var state_machine__5565__auto__ = null;
var state_machine__5565__auto____0 = (function (){var statearr_10859 = [null,null,null,null,null,null,null,null,null];(statearr_10859[0] = state_machine__5565__auto__);
(statearr_10859[1] = 1);
return statearr_10859;
});
var state_machine__5565__auto____1 = (function (state_10842){while(true){
var ret_value__5566__auto__ = (function (){try{while(true){
var result__5567__auto__ = switch__5564__auto__.call(null,state_10842);if(cljs.core.keyword_identical_QMARK_.call(null,result__5567__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5567__auto__;
}
break;
}
}catch (e10860){if((e10860 instanceof Object))
{var ex__5568__auto__ = e10860;var statearr_10861_10874 = state_10842;(statearr_10861_10874[5] = ex__5568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10842);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10860;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5566__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10875 = state_10842;
state_10842 = G__10875;
continue;
}
} else
{return ret_value__5566__auto__;
}
break;
}
});
state_machine__5565__auto__ = function(state_10842){
switch(arguments.length){
case 0:
return state_machine__5565__auto____0.call(this);
case 1:
return state_machine__5565__auto____1.call(this,state_10842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5565__auto____0;
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5565__auto____1;
return state_machine__5565__auto__;
})()
;})(switch__5564__auto__))
})();var state__5581__auto__ = (function (){var statearr_10862 = f__5580__auto__.call(null);(statearr_10862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5579__auto___10863);
return statearr_10862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5581__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5579__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5580__auto__ = (function (){var switch__5564__auto__ = (function (state_11041){var state_val_11042 = (state_11041[1]);if((state_val_11042 === 1))
{var state_11041__$1 = state_11041;var statearr_11043_11084 = state_11041__$1;(statearr_11043_11084[2] = null);
(statearr_11043_11084[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 2))
{var state_11041__$1 = state_11041;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11041__$1,4,in$);
} else
{if((state_val_11042 === 3))
{var inst_11039 = (state_11041[2]);var state_11041__$1 = state_11041;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11041__$1,inst_11039);
} else
{if((state_val_11042 === 4))
{var inst_10982 = (state_11041[7]);var inst_10982__$1 = (state_11041[2]);var inst_10983 = (inst_10982__$1 == null);var state_11041__$1 = (function (){var statearr_11044 = state_11041;(statearr_11044[7] = inst_10982__$1);
return statearr_11044;
})();if(cljs.core.truth_(inst_10983))
{var statearr_11045_11085 = state_11041__$1;(statearr_11045_11085[1] = 5);
} else
{var statearr_11046_11086 = state_11041__$1;(statearr_11046_11086[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 5))
{var inst_10985 = cljs.core.async.close_BANG_.call(null,out);var state_11041__$1 = state_11041;var statearr_11047_11087 = state_11041__$1;(statearr_11047_11087[2] = inst_10985);
(statearr_11047_11087[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 6))
{var inst_10982 = (state_11041[7]);var inst_10991 = f.call(null,inst_10982);var inst_10992 = cljs.core.seq.call(null,inst_10991);var inst_10993 = inst_10992;var inst_10994 = null;var inst_10995 = 0;var inst_10996 = 0;var state_11041__$1 = (function (){var statearr_11048 = state_11041;(statearr_11048[8] = inst_10994);
(statearr_11048[9] = inst_10995);
(statearr_11048[10] = inst_10996);
(statearr_11048[11] = inst_10993);
return statearr_11048;
})();var statearr_11049_11088 = state_11041__$1;(statearr_11049_11088[2] = null);
(statearr_11049_11088[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 7))
{var inst_11037 = (state_11041[2]);var state_11041__$1 = state_11041;var statearr_11050_11089 = state_11041__$1;(statearr_11050_11089[2] = inst_11037);
(statearr_11050_11089[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 8))
{var inst_10995 = (state_11041[9]);var inst_10996 = (state_11041[10]);var inst_10998 = (inst_10996 < inst_10995);var inst_10999 = inst_10998;var state_11041__$1 = state_11041;if(cljs.core.truth_(inst_10999))
{var statearr_11051_11090 = state_11041__$1;(statearr_11051_11090[1] = 10);
} else
{var statearr_11052_11091 = state_11041__$1;(statearr_11052_11091[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 9))
{var inst_11029 = (state_11041[2]);var inst_11030 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11041__$1 = (function (){var statearr_11053 = state_11041;(statearr_11053[12] = inst_11029);
return statearr_11053;
})();if(cljs.core.truth_(inst_11030))
{var statearr_11054_11092 = state_11041__$1;(statearr_11054_11092[1] = 21);
} else
{var statearr_11055_11093 = state_11041__$1;(statearr_11055_11093[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 10))
{var inst_10994 = (state_11041[8]);var inst_10996 = (state_11041[10]);var inst_11001 = cljs.core._nth.call(null,inst_10994,inst_10996);var state_11041__$1 = state_11041;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11041__$1,13,out,inst_11001);
} else
{if((state_val_11042 === 11))
{var inst_11007 = (state_11041[13]);var inst_10993 = (state_11041[11]);var inst_11007__$1 = cljs.core.seq.call(null,inst_10993);var state_11041__$1 = (function (){var statearr_11059 = state_11041;(statearr_11059[13] = inst_11007__$1);
return statearr_11059;
})();if(inst_11007__$1)
{var statearr_11060_11094 = state_11041__$1;(statearr_11060_11094[1] = 14);
} else
{var statearr_11061_11095 = state_11041__$1;(statearr_11061_11095[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 12))
{var inst_11027 = (state_11041[2]);var state_11041__$1 = state_11041;var statearr_11062_11096 = state_11041__$1;(statearr_11062_11096[2] = inst_11027);
(statearr_11062_11096[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 13))
{var inst_10994 = (state_11041[8]);var inst_10995 = (state_11041[9]);var inst_10996 = (state_11041[10]);var inst_10993 = (state_11041[11]);var inst_11003 = (state_11041[2]);var inst_11004 = (inst_10996 + 1);var tmp11056 = inst_10994;var tmp11057 = inst_10995;var tmp11058 = inst_10993;var inst_10993__$1 = tmp11058;var inst_10994__$1 = tmp11056;var inst_10995__$1 = tmp11057;var inst_10996__$1 = inst_11004;var state_11041__$1 = (function (){var statearr_11063 = state_11041;(statearr_11063[8] = inst_10994__$1);
(statearr_11063[9] = inst_10995__$1);
(statearr_11063[10] = inst_10996__$1);
(statearr_11063[11] = inst_10993__$1);
(statearr_11063[14] = inst_11003);
return statearr_11063;
})();var statearr_11064_11097 = state_11041__$1;(statearr_11064_11097[2] = null);
(statearr_11064_11097[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 14))
{var inst_11007 = (state_11041[13]);var inst_11009 = cljs.core.chunked_seq_QMARK_.call(null,inst_11007);var state_11041__$1 = state_11041;if(inst_11009)
{var statearr_11065_11098 = state_11041__$1;(statearr_11065_11098[1] = 17);
} else
{var statearr_11066_11099 = state_11041__$1;(statearr_11066_11099[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 15))
{var state_11041__$1 = state_11041;var statearr_11067_11100 = state_11041__$1;(statearr_11067_11100[2] = null);
(statearr_11067_11100[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 16))
{var inst_11025 = (state_11041[2]);var state_11041__$1 = state_11041;var statearr_11068_11101 = state_11041__$1;(statearr_11068_11101[2] = inst_11025);
(statearr_11068_11101[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 17))
{var inst_11007 = (state_11041[13]);var inst_11011 = cljs.core.chunk_first.call(null,inst_11007);var inst_11012 = cljs.core.chunk_rest.call(null,inst_11007);var inst_11013 = cljs.core.count.call(null,inst_11011);var inst_10993 = inst_11012;var inst_10994 = inst_11011;var inst_10995 = inst_11013;var inst_10996 = 0;var state_11041__$1 = (function (){var statearr_11069 = state_11041;(statearr_11069[8] = inst_10994);
(statearr_11069[9] = inst_10995);
(statearr_11069[10] = inst_10996);
(statearr_11069[11] = inst_10993);
return statearr_11069;
})();var statearr_11070_11102 = state_11041__$1;(statearr_11070_11102[2] = null);
(statearr_11070_11102[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 18))
{var inst_11007 = (state_11041[13]);var inst_11016 = cljs.core.first.call(null,inst_11007);var state_11041__$1 = state_11041;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11041__$1,20,out,inst_11016);
} else
{if((state_val_11042 === 19))
{var inst_11022 = (state_11041[2]);var state_11041__$1 = state_11041;var statearr_11071_11103 = state_11041__$1;(statearr_11071_11103[2] = inst_11022);
(statearr_11071_11103[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 20))
{var inst_11007 = (state_11041[13]);var inst_11018 = (state_11041[2]);var inst_11019 = cljs.core.next.call(null,inst_11007);var inst_10993 = inst_11019;var inst_10994 = null;var inst_10995 = 0;var inst_10996 = 0;var state_11041__$1 = (function (){var statearr_11072 = state_11041;(statearr_11072[15] = inst_11018);
(statearr_11072[8] = inst_10994);
(statearr_11072[9] = inst_10995);
(statearr_11072[10] = inst_10996);
(statearr_11072[11] = inst_10993);
return statearr_11072;
})();var statearr_11073_11104 = state_11041__$1;(statearr_11073_11104[2] = null);
(statearr_11073_11104[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 21))
{var state_11041__$1 = state_11041;var statearr_11074_11105 = state_11041__$1;(statearr_11074_11105[2] = null);
(statearr_11074_11105[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 22))
{var state_11041__$1 = state_11041;var statearr_11075_11106 = state_11041__$1;(statearr_11075_11106[2] = null);
(statearr_11075_11106[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11042 === 23))
{var inst_11035 = (state_11041[2]);var state_11041__$1 = state_11041;var statearr_11076_11107 = state_11041__$1;(statearr_11076_11107[2] = inst_11035);
(statearr_11076_11107[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5564__auto__){
return (function() {
var state_machine__5565__auto__ = null;
var state_machine__5565__auto____0 = (function (){var statearr_11080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11080[0] = state_machine__5565__auto__);
(statearr_11080[1] = 1);
return statearr_11080;
});
var state_machine__5565__auto____1 = (function (state_11041){while(true){
var ret_value__5566__auto__ = (function (){try{while(true){
var result__5567__auto__ = switch__5564__auto__.call(null,state_11041);if(cljs.core.keyword_identical_QMARK_.call(null,result__5567__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5567__auto__;
}
break;
}
}catch (e11081){if((e11081 instanceof Object))
{var ex__5568__auto__ = e11081;var statearr_11082_11108 = state_11041;(statearr_11082_11108[5] = ex__5568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11041);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11081;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5566__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11109 = state_11041;
state_11041 = G__11109;
continue;
}
} else
{return ret_value__5566__auto__;
}
break;
}
});
state_machine__5565__auto__ = function(state_11041){
switch(arguments.length){
case 0:
return state_machine__5565__auto____0.call(this);
case 1:
return state_machine__5565__auto____1.call(this,state_11041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5565__auto____0;
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5565__auto____1;
return state_machine__5565__auto__;
})()
;})(switch__5564__auto__))
})();var state__5581__auto__ = (function (){var statearr_11083 = f__5580__auto__.call(null);(statearr_11083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5579__auto__);
return statearr_11083;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5581__auto__);
}));
return c__5579__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5579__auto___11204 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5580__auto__ = (function (){var switch__5564__auto__ = (function (state_11180){var state_val_11181 = (state_11180[1]);if((state_val_11181 === 1))
{var state_11180__$1 = state_11180;var statearr_11182_11205 = state_11180__$1;(statearr_11182_11205[2] = null);
(statearr_11182_11205[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11181 === 2))
{var state_11180__$1 = state_11180;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11180__$1,4,from);
} else
{if((state_val_11181 === 3))
{var inst_11178 = (state_11180[2]);var state_11180__$1 = state_11180;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11180__$1,inst_11178);
} else
{if((state_val_11181 === 4))
{var inst_11159 = (state_11180[7]);var inst_11159__$1 = (state_11180[2]);var inst_11160 = (inst_11159__$1 == null);var state_11180__$1 = (function (){var statearr_11183 = state_11180;(statearr_11183[7] = inst_11159__$1);
return statearr_11183;
})();if(cljs.core.truth_(inst_11160))
{var statearr_11184_11206 = state_11180__$1;(statearr_11184_11206[1] = 5);
} else
{var statearr_11185_11207 = state_11180__$1;(statearr_11185_11207[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11181 === 5))
{var state_11180__$1 = state_11180;if(cljs.core.truth_(close_QMARK_))
{var statearr_11186_11208 = state_11180__$1;(statearr_11186_11208[1] = 8);
} else
{var statearr_11187_11209 = state_11180__$1;(statearr_11187_11209[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11181 === 6))
{var inst_11159 = (state_11180[7]);var state_11180__$1 = state_11180;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11180__$1,11,to,inst_11159);
} else
{if((state_val_11181 === 7))
{var inst_11176 = (state_11180[2]);var state_11180__$1 = state_11180;var statearr_11188_11210 = state_11180__$1;(statearr_11188_11210[2] = inst_11176);
(statearr_11188_11210[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11181 === 8))
{var inst_11163 = cljs.core.async.close_BANG_.call(null,to);var state_11180__$1 = state_11180;var statearr_11189_11211 = state_11180__$1;(statearr_11189_11211[2] = inst_11163);
(statearr_11189_11211[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11181 === 9))
{var state_11180__$1 = state_11180;var statearr_11190_11212 = state_11180__$1;(statearr_11190_11212[2] = null);
(statearr_11190_11212[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11181 === 10))
{var inst_11166 = (state_11180[2]);var state_11180__$1 = state_11180;var statearr_11191_11213 = state_11180__$1;(statearr_11191_11213[2] = inst_11166);
(statearr_11191_11213[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11181 === 11))
{var inst_11169 = (state_11180[2]);var state_11180__$1 = state_11180;if(cljs.core.truth_(inst_11169))
{var statearr_11192_11214 = state_11180__$1;(statearr_11192_11214[1] = 12);
} else
{var statearr_11193_11215 = state_11180__$1;(statearr_11193_11215[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11181 === 12))
{var state_11180__$1 = state_11180;var statearr_11194_11216 = state_11180__$1;(statearr_11194_11216[2] = null);
(statearr_11194_11216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11181 === 13))
{var state_11180__$1 = state_11180;var statearr_11195_11217 = state_11180__$1;(statearr_11195_11217[2] = null);
(statearr_11195_11217[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11181 === 14))
{var inst_11174 = (state_11180[2]);var state_11180__$1 = state_11180;var statearr_11196_11218 = state_11180__$1;(statearr_11196_11218[2] = inst_11174);
(statearr_11196_11218[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5564__auto__){
return (function() {
var state_machine__5565__auto__ = null;
var state_machine__5565__auto____0 = (function (){var statearr_11200 = [null,null,null,null,null,null,null,null];(statearr_11200[0] = state_machine__5565__auto__);
(statearr_11200[1] = 1);
return statearr_11200;
});
var state_machine__5565__auto____1 = (function (state_11180){while(true){
var ret_value__5566__auto__ = (function (){try{while(true){
var result__5567__auto__ = switch__5564__auto__.call(null,state_11180);if(cljs.core.keyword_identical_QMARK_.call(null,result__5567__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5567__auto__;
}
break;
}
}catch (e11201){if((e11201 instanceof Object))
{var ex__5568__auto__ = e11201;var statearr_11202_11219 = state_11180;(statearr_11202_11219[5] = ex__5568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11180);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11201;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5566__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11220 = state_11180;
state_11180 = G__11220;
continue;
}
} else
{return ret_value__5566__auto__;
}
break;
}
});
state_machine__5565__auto__ = function(state_11180){
switch(arguments.length){
case 0:
return state_machine__5565__auto____0.call(this);
case 1:
return state_machine__5565__auto____1.call(this,state_11180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5565__auto____0;
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5565__auto____1;
return state_machine__5565__auto__;
})()
;})(switch__5564__auto__))
})();var state__5581__auto__ = (function (){var statearr_11203 = f__5580__auto__.call(null);(statearr_11203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5579__auto___11204);
return statearr_11203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5581__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
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
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5579__auto___11321 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5580__auto__ = (function (){var switch__5564__auto__ = (function (state_11296){var state_val_11297 = (state_11296[1]);if((state_val_11297 === 1))
{var state_11296__$1 = state_11296;var statearr_11298_11322 = state_11296__$1;(statearr_11298_11322[2] = null);
(statearr_11298_11322[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11297 === 2))
{var state_11296__$1 = state_11296;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11296__$1,4,ch);
} else
{if((state_val_11297 === 3))
{var inst_11294 = (state_11296[2]);var state_11296__$1 = state_11296;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11296__$1,inst_11294);
} else
{if((state_val_11297 === 4))
{var inst_11273 = (state_11296[7]);var inst_11273__$1 = (state_11296[2]);var inst_11274 = (inst_11273__$1 == null);var state_11296__$1 = (function (){var statearr_11299 = state_11296;(statearr_11299[7] = inst_11273__$1);
return statearr_11299;
})();if(cljs.core.truth_(inst_11274))
{var statearr_11300_11323 = state_11296__$1;(statearr_11300_11323[1] = 5);
} else
{var statearr_11301_11324 = state_11296__$1;(statearr_11301_11324[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11297 === 5))
{var inst_11276 = cljs.core.async.close_BANG_.call(null,tc);var inst_11277 = cljs.core.async.close_BANG_.call(null,fc);var state_11296__$1 = (function (){var statearr_11302 = state_11296;(statearr_11302[8] = inst_11276);
return statearr_11302;
})();var statearr_11303_11325 = state_11296__$1;(statearr_11303_11325[2] = inst_11277);
(statearr_11303_11325[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11297 === 6))
{var inst_11273 = (state_11296[7]);var inst_11279 = p.call(null,inst_11273);var state_11296__$1 = state_11296;if(cljs.core.truth_(inst_11279))
{var statearr_11304_11326 = state_11296__$1;(statearr_11304_11326[1] = 9);
} else
{var statearr_11305_11327 = state_11296__$1;(statearr_11305_11327[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11297 === 7))
{var inst_11292 = (state_11296[2]);var state_11296__$1 = state_11296;var statearr_11306_11328 = state_11296__$1;(statearr_11306_11328[2] = inst_11292);
(statearr_11306_11328[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11297 === 8))
{var inst_11285 = (state_11296[2]);var state_11296__$1 = state_11296;if(cljs.core.truth_(inst_11285))
{var statearr_11307_11329 = state_11296__$1;(statearr_11307_11329[1] = 12);
} else
{var statearr_11308_11330 = state_11296__$1;(statearr_11308_11330[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11297 === 9))
{var state_11296__$1 = state_11296;var statearr_11309_11331 = state_11296__$1;(statearr_11309_11331[2] = tc);
(statearr_11309_11331[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11297 === 10))
{var state_11296__$1 = state_11296;var statearr_11310_11332 = state_11296__$1;(statearr_11310_11332[2] = fc);
(statearr_11310_11332[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11297 === 11))
{var inst_11273 = (state_11296[7]);var inst_11283 = (state_11296[2]);var state_11296__$1 = state_11296;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11296__$1,8,inst_11283,inst_11273);
} else
{if((state_val_11297 === 12))
{var state_11296__$1 = state_11296;var statearr_11311_11333 = state_11296__$1;(statearr_11311_11333[2] = null);
(statearr_11311_11333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11297 === 13))
{var state_11296__$1 = state_11296;var statearr_11312_11334 = state_11296__$1;(statearr_11312_11334[2] = null);
(statearr_11312_11334[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11297 === 14))
{var inst_11290 = (state_11296[2]);var state_11296__$1 = state_11296;var statearr_11313_11335 = state_11296__$1;(statearr_11313_11335[2] = inst_11290);
(statearr_11313_11335[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5564__auto__){
return (function() {
var state_machine__5565__auto__ = null;
var state_machine__5565__auto____0 = (function (){var statearr_11317 = [null,null,null,null,null,null,null,null,null];(statearr_11317[0] = state_machine__5565__auto__);
(statearr_11317[1] = 1);
return statearr_11317;
});
var state_machine__5565__auto____1 = (function (state_11296){while(true){
var ret_value__5566__auto__ = (function (){try{while(true){
var result__5567__auto__ = switch__5564__auto__.call(null,state_11296);if(cljs.core.keyword_identical_QMARK_.call(null,result__5567__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5567__auto__;
}
break;
}
}catch (e11318){if((e11318 instanceof Object))
{var ex__5568__auto__ = e11318;var statearr_11319_11336 = state_11296;(statearr_11319_11336[5] = ex__5568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11296);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11318;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5566__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11337 = state_11296;
state_11296 = G__11337;
continue;
}
} else
{return ret_value__5566__auto__;
}
break;
}
});
state_machine__5565__auto__ = function(state_11296){
switch(arguments.length){
case 0:
return state_machine__5565__auto____0.call(this);
case 1:
return state_machine__5565__auto____1.call(this,state_11296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5565__auto____0;
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5565__auto____1;
return state_machine__5565__auto__;
})()
;})(switch__5564__auto__))
})();var state__5581__auto__ = (function (){var statearr_11320 = f__5580__auto__.call(null);(statearr_11320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5579__auto___11321);
return statearr_11320;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5581__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5579__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5580__auto__ = (function (){var switch__5564__auto__ = (function (state_11384){var state_val_11385 = (state_11384[1]);if((state_val_11385 === 7))
{var inst_11380 = (state_11384[2]);var state_11384__$1 = state_11384;var statearr_11386_11402 = state_11384__$1;(statearr_11386_11402[2] = inst_11380);
(statearr_11386_11402[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11385 === 6))
{var inst_11373 = (state_11384[7]);var inst_11370 = (state_11384[8]);var inst_11377 = f.call(null,inst_11370,inst_11373);var inst_11370__$1 = inst_11377;var state_11384__$1 = (function (){var statearr_11387 = state_11384;(statearr_11387[8] = inst_11370__$1);
return statearr_11387;
})();var statearr_11388_11403 = state_11384__$1;(statearr_11388_11403[2] = null);
(statearr_11388_11403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11385 === 5))
{var inst_11370 = (state_11384[8]);var state_11384__$1 = state_11384;var statearr_11389_11404 = state_11384__$1;(statearr_11389_11404[2] = inst_11370);
(statearr_11389_11404[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11385 === 4))
{var inst_11373 = (state_11384[7]);var inst_11373__$1 = (state_11384[2]);var inst_11374 = (inst_11373__$1 == null);var state_11384__$1 = (function (){var statearr_11390 = state_11384;(statearr_11390[7] = inst_11373__$1);
return statearr_11390;
})();if(cljs.core.truth_(inst_11374))
{var statearr_11391_11405 = state_11384__$1;(statearr_11391_11405[1] = 5);
} else
{var statearr_11392_11406 = state_11384__$1;(statearr_11392_11406[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11385 === 3))
{var inst_11382 = (state_11384[2]);var state_11384__$1 = state_11384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11384__$1,inst_11382);
} else
{if((state_val_11385 === 2))
{var state_11384__$1 = state_11384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11384__$1,4,ch);
} else
{if((state_val_11385 === 1))
{var inst_11370 = init;var state_11384__$1 = (function (){var statearr_11393 = state_11384;(statearr_11393[8] = inst_11370);
return statearr_11393;
})();var statearr_11394_11407 = state_11384__$1;(statearr_11394_11407[2] = null);
(statearr_11394_11407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5564__auto__){
return (function() {
var state_machine__5565__auto__ = null;
var state_machine__5565__auto____0 = (function (){var statearr_11398 = [null,null,null,null,null,null,null,null,null];(statearr_11398[0] = state_machine__5565__auto__);
(statearr_11398[1] = 1);
return statearr_11398;
});
var state_machine__5565__auto____1 = (function (state_11384){while(true){
var ret_value__5566__auto__ = (function (){try{while(true){
var result__5567__auto__ = switch__5564__auto__.call(null,state_11384);if(cljs.core.keyword_identical_QMARK_.call(null,result__5567__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5567__auto__;
}
break;
}
}catch (e11399){if((e11399 instanceof Object))
{var ex__5568__auto__ = e11399;var statearr_11400_11408 = state_11384;(statearr_11400_11408[5] = ex__5568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11399;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5566__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11409 = state_11384;
state_11384 = G__11409;
continue;
}
} else
{return ret_value__5566__auto__;
}
break;
}
});
state_machine__5565__auto__ = function(state_11384){
switch(arguments.length){
case 0:
return state_machine__5565__auto____0.call(this);
case 1:
return state_machine__5565__auto____1.call(this,state_11384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5565__auto____0;
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5565__auto____1;
return state_machine__5565__auto__;
})()
;})(switch__5564__auto__))
})();var state__5581__auto__ = (function (){var statearr_11401 = f__5580__auto__.call(null);(statearr_11401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5579__auto__);
return statearr_11401;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5581__auto__);
}));
return c__5579__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5579__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5580__auto__ = (function (){var switch__5564__auto__ = (function (state_11483){var state_val_11484 = (state_11483[1]);if((state_val_11484 === 1))
{var inst_11459 = cljs.core.seq.call(null,coll);var inst_11460 = inst_11459;var state_11483__$1 = (function (){var statearr_11485 = state_11483;(statearr_11485[7] = inst_11460);
return statearr_11485;
})();var statearr_11486_11508 = state_11483__$1;(statearr_11486_11508[2] = null);
(statearr_11486_11508[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11484 === 2))
{var inst_11460 = (state_11483[7]);var state_11483__$1 = state_11483;if(cljs.core.truth_(inst_11460))
{var statearr_11487_11509 = state_11483__$1;(statearr_11487_11509[1] = 4);
} else
{var statearr_11488_11510 = state_11483__$1;(statearr_11488_11510[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11484 === 3))
{var inst_11481 = (state_11483[2]);var state_11483__$1 = state_11483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11483__$1,inst_11481);
} else
{if((state_val_11484 === 4))
{var inst_11460 = (state_11483[7]);var inst_11463 = cljs.core.first.call(null,inst_11460);var state_11483__$1 = state_11483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11483__$1,7,ch,inst_11463);
} else
{if((state_val_11484 === 5))
{var inst_11460 = (state_11483[7]);var state_11483__$1 = state_11483;var statearr_11489_11511 = state_11483__$1;(statearr_11489_11511[2] = inst_11460);
(statearr_11489_11511[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11484 === 6))
{var inst_11468 = (state_11483[2]);var state_11483__$1 = state_11483;if(cljs.core.truth_(inst_11468))
{var statearr_11490_11512 = state_11483__$1;(statearr_11490_11512[1] = 8);
} else
{var statearr_11491_11513 = state_11483__$1;(statearr_11491_11513[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11484 === 7))
{var inst_11465 = (state_11483[2]);var state_11483__$1 = state_11483;var statearr_11492_11514 = state_11483__$1;(statearr_11492_11514[2] = inst_11465);
(statearr_11492_11514[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11484 === 8))
{var inst_11460 = (state_11483[7]);var inst_11470 = cljs.core.next.call(null,inst_11460);var inst_11460__$1 = inst_11470;var state_11483__$1 = (function (){var statearr_11493 = state_11483;(statearr_11493[7] = inst_11460__$1);
return statearr_11493;
})();var statearr_11494_11515 = state_11483__$1;(statearr_11494_11515[2] = null);
(statearr_11494_11515[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11484 === 9))
{var state_11483__$1 = state_11483;if(cljs.core.truth_(close_QMARK_))
{var statearr_11495_11516 = state_11483__$1;(statearr_11495_11516[1] = 11);
} else
{var statearr_11496_11517 = state_11483__$1;(statearr_11496_11517[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11484 === 10))
{var inst_11479 = (state_11483[2]);var state_11483__$1 = state_11483;var statearr_11497_11518 = state_11483__$1;(statearr_11497_11518[2] = inst_11479);
(statearr_11497_11518[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11484 === 11))
{var inst_11474 = cljs.core.async.close_BANG_.call(null,ch);var state_11483__$1 = state_11483;var statearr_11498_11519 = state_11483__$1;(statearr_11498_11519[2] = inst_11474);
(statearr_11498_11519[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11484 === 12))
{var state_11483__$1 = state_11483;var statearr_11499_11520 = state_11483__$1;(statearr_11499_11520[2] = null);
(statearr_11499_11520[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11484 === 13))
{var inst_11477 = (state_11483[2]);var state_11483__$1 = state_11483;var statearr_11500_11521 = state_11483__$1;(statearr_11500_11521[2] = inst_11477);
(statearr_11500_11521[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5564__auto__){
return (function() {
var state_machine__5565__auto__ = null;
var state_machine__5565__auto____0 = (function (){var statearr_11504 = [null,null,null,null,null,null,null,null];(statearr_11504[0] = state_machine__5565__auto__);
(statearr_11504[1] = 1);
return statearr_11504;
});
var state_machine__5565__auto____1 = (function (state_11483){while(true){
var ret_value__5566__auto__ = (function (){try{while(true){
var result__5567__auto__ = switch__5564__auto__.call(null,state_11483);if(cljs.core.keyword_identical_QMARK_.call(null,result__5567__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5567__auto__;
}
break;
}
}catch (e11505){if((e11505 instanceof Object))
{var ex__5568__auto__ = e11505;var statearr_11506_11522 = state_11483;(statearr_11506_11522[5] = ex__5568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11483);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11505;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5566__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11523 = state_11483;
state_11483 = G__11523;
continue;
}
} else
{return ret_value__5566__auto__;
}
break;
}
});
state_machine__5565__auto__ = function(state_11483){
switch(arguments.length){
case 0:
return state_machine__5565__auto____0.call(this);
case 1:
return state_machine__5565__auto____1.call(this,state_11483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5565__auto____0;
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5565__auto____1;
return state_machine__5565__auto__;
})()
;})(switch__5564__auto__))
})();var state__5581__auto__ = (function (){var statearr_11507 = f__5580__auto__.call(null);(statearr_11507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5579__auto__);
return statearr_11507;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5581__auto__);
}));
return c__5579__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11525 = {};return obj11525;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11527 = {};return obj11527;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11749 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11749 = (function (cs,ch,mult,meta11750){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11750 = meta11750;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11749.cljs$lang$type = true;
cljs.core.async.t11749.cljs$lang$ctorStr = "cljs.core.async/t11749";
cljs.core.async.t11749.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11749");
});})(cs))
;
cljs.core.async.t11749.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11749.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11749.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11749.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11749.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11749.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11751){var self__ = this;
var _11751__$1 = this;return self__.meta11750;
});})(cs))
;
cljs.core.async.t11749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11751,meta11750__$1){var self__ = this;
var _11751__$1 = this;return (new cljs.core.async.t11749(self__.cs,self__.ch,self__.mult,meta11750__$1));
});})(cs))
;
cljs.core.async.__GT_t11749 = ((function (cs){
return (function __GT_t11749(cs__$1,ch__$1,mult__$1,meta11750){return (new cljs.core.async.t11749(cs__$1,ch__$1,mult__$1,meta11750));
});})(cs))
;
}
return (new cljs.core.async.t11749(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5579__auto___11970 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5580__auto__ = (function (){var switch__5564__auto__ = (function (state_11882){var state_val_11883 = (state_11882[1]);if((state_val_11883 === 32))
{var inst_11824 = (state_11882[7]);var inst_11823 = (state_11882[8]);var inst_11825 = (state_11882[9]);var inst_11822 = (state_11882[10]);var inst_11837 = (state_11882[2]);var inst_11838 = (inst_11825 + 1);var tmp11884 = inst_11824;var tmp11885 = inst_11823;var tmp11886 = inst_11822;var inst_11822__$1 = tmp11886;var inst_11823__$1 = tmp11885;var inst_11824__$1 = tmp11884;var inst_11825__$1 = inst_11838;var state_11882__$1 = (function (){var statearr_11887 = state_11882;(statearr_11887[7] = inst_11824__$1);
(statearr_11887[8] = inst_11823__$1);
(statearr_11887[9] = inst_11825__$1);
(statearr_11887[11] = inst_11837);
(statearr_11887[10] = inst_11822__$1);
return statearr_11887;
})();var statearr_11888_11971 = state_11882__$1;(statearr_11888_11971[2] = null);
(statearr_11888_11971[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 1))
{var state_11882__$1 = state_11882;var statearr_11889_11972 = state_11882__$1;(statearr_11889_11972[2] = null);
(statearr_11889_11972[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 33))
{var inst_11841 = (state_11882[12]);var inst_11843 = cljs.core.chunked_seq_QMARK_.call(null,inst_11841);var state_11882__$1 = state_11882;if(inst_11843)
{var statearr_11890_11973 = state_11882__$1;(statearr_11890_11973[1] = 36);
} else
{var statearr_11891_11974 = state_11882__$1;(statearr_11891_11974[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 2))
{var state_11882__$1 = state_11882;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11882__$1,4,ch);
} else
{if((state_val_11883 === 34))
{var state_11882__$1 = state_11882;var statearr_11892_11975 = state_11882__$1;(statearr_11892_11975[2] = null);
(statearr_11892_11975[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 3))
{var inst_11880 = (state_11882[2]);var state_11882__$1 = state_11882;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11882__$1,inst_11880);
} else
{if((state_val_11883 === 35))
{var inst_11864 = (state_11882[2]);var state_11882__$1 = state_11882;var statearr_11893_11976 = state_11882__$1;(statearr_11893_11976[2] = inst_11864);
(statearr_11893_11976[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 4))
{var inst_11754 = (state_11882[13]);var inst_11754__$1 = (state_11882[2]);var inst_11755 = (inst_11754__$1 == null);var state_11882__$1 = (function (){var statearr_11894 = state_11882;(statearr_11894[13] = inst_11754__$1);
return statearr_11894;
})();if(cljs.core.truth_(inst_11755))
{var statearr_11895_11977 = state_11882__$1;(statearr_11895_11977[1] = 5);
} else
{var statearr_11896_11978 = state_11882__$1;(statearr_11896_11978[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 36))
{var inst_11841 = (state_11882[12]);var inst_11845 = cljs.core.chunk_first.call(null,inst_11841);var inst_11846 = cljs.core.chunk_rest.call(null,inst_11841);var inst_11847 = cljs.core.count.call(null,inst_11845);var inst_11822 = inst_11846;var inst_11823 = inst_11845;var inst_11824 = inst_11847;var inst_11825 = 0;var state_11882__$1 = (function (){var statearr_11897 = state_11882;(statearr_11897[7] = inst_11824);
(statearr_11897[8] = inst_11823);
(statearr_11897[9] = inst_11825);
(statearr_11897[10] = inst_11822);
return statearr_11897;
})();var statearr_11898_11979 = state_11882__$1;(statearr_11898_11979[2] = null);
(statearr_11898_11979[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 5))
{var inst_11761 = cljs.core.deref.call(null,cs);var inst_11762 = cljs.core.seq.call(null,inst_11761);var inst_11763 = inst_11762;var inst_11764 = null;var inst_11765 = 0;var inst_11766 = 0;var state_11882__$1 = (function (){var statearr_11899 = state_11882;(statearr_11899[14] = inst_11764);
(statearr_11899[15] = inst_11765);
(statearr_11899[16] = inst_11766);
(statearr_11899[17] = inst_11763);
return statearr_11899;
})();var statearr_11900_11980 = state_11882__$1;(statearr_11900_11980[2] = null);
(statearr_11900_11980[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 37))
{var inst_11841 = (state_11882[12]);var inst_11850 = (state_11882[18]);var inst_11754 = (state_11882[13]);var inst_11850__$1 = cljs.core.first.call(null,inst_11841);var inst_11851 = cljs.core.async.put_BANG_.call(null,inst_11850__$1,inst_11754,done);var state_11882__$1 = (function (){var statearr_11901 = state_11882;(statearr_11901[18] = inst_11850__$1);
return statearr_11901;
})();if(cljs.core.truth_(inst_11851))
{var statearr_11902_11981 = state_11882__$1;(statearr_11902_11981[1] = 39);
} else
{var statearr_11903_11982 = state_11882__$1;(statearr_11903_11982[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 6))
{var inst_11814 = (state_11882[19]);var inst_11813 = cljs.core.deref.call(null,cs);var inst_11814__$1 = cljs.core.keys.call(null,inst_11813);var inst_11815 = cljs.core.count.call(null,inst_11814__$1);var inst_11816 = cljs.core.reset_BANG_.call(null,dctr,inst_11815);var inst_11821 = cljs.core.seq.call(null,inst_11814__$1);var inst_11822 = inst_11821;var inst_11823 = null;var inst_11824 = 0;var inst_11825 = 0;var state_11882__$1 = (function (){var statearr_11904 = state_11882;(statearr_11904[7] = inst_11824);
(statearr_11904[8] = inst_11823);
(statearr_11904[9] = inst_11825);
(statearr_11904[19] = inst_11814__$1);
(statearr_11904[20] = inst_11816);
(statearr_11904[10] = inst_11822);
return statearr_11904;
})();var statearr_11905_11983 = state_11882__$1;(statearr_11905_11983[2] = null);
(statearr_11905_11983[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 38))
{var inst_11861 = (state_11882[2]);var state_11882__$1 = state_11882;var statearr_11906_11984 = state_11882__$1;(statearr_11906_11984[2] = inst_11861);
(statearr_11906_11984[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 7))
{var inst_11878 = (state_11882[2]);var state_11882__$1 = state_11882;var statearr_11907_11985 = state_11882__$1;(statearr_11907_11985[2] = inst_11878);
(statearr_11907_11985[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 39))
{var state_11882__$1 = state_11882;var statearr_11908_11986 = state_11882__$1;(statearr_11908_11986[2] = null);
(statearr_11908_11986[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 8))
{var inst_11765 = (state_11882[15]);var inst_11766 = (state_11882[16]);var inst_11768 = (inst_11766 < inst_11765);var inst_11769 = inst_11768;var state_11882__$1 = state_11882;if(cljs.core.truth_(inst_11769))
{var statearr_11909_11987 = state_11882__$1;(statearr_11909_11987[1] = 10);
} else
{var statearr_11910_11988 = state_11882__$1;(statearr_11910_11988[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 40))
{var inst_11850 = (state_11882[18]);var inst_11854 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11855 = cljs.core.async.untap_STAR_.call(null,m,inst_11850);var state_11882__$1 = (function (){var statearr_11911 = state_11882;(statearr_11911[21] = inst_11854);
return statearr_11911;
})();var statearr_11912_11989 = state_11882__$1;(statearr_11912_11989[2] = inst_11855);
(statearr_11912_11989[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 9))
{var inst_11811 = (state_11882[2]);var state_11882__$1 = state_11882;var statearr_11913_11990 = state_11882__$1;(statearr_11913_11990[2] = inst_11811);
(statearr_11913_11990[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 41))
{var inst_11841 = (state_11882[12]);var inst_11857 = (state_11882[2]);var inst_11858 = cljs.core.next.call(null,inst_11841);var inst_11822 = inst_11858;var inst_11823 = null;var inst_11824 = 0;var inst_11825 = 0;var state_11882__$1 = (function (){var statearr_11914 = state_11882;(statearr_11914[7] = inst_11824);
(statearr_11914[8] = inst_11823);
(statearr_11914[9] = inst_11825);
(statearr_11914[22] = inst_11857);
(statearr_11914[10] = inst_11822);
return statearr_11914;
})();var statearr_11915_11991 = state_11882__$1;(statearr_11915_11991[2] = null);
(statearr_11915_11991[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 10))
{var inst_11764 = (state_11882[14]);var inst_11766 = (state_11882[16]);var inst_11772 = cljs.core._nth.call(null,inst_11764,inst_11766);var inst_11773 = cljs.core.nth.call(null,inst_11772,0,null);var inst_11774 = cljs.core.nth.call(null,inst_11772,1,null);var state_11882__$1 = (function (){var statearr_11916 = state_11882;(statearr_11916[23] = inst_11773);
return statearr_11916;
})();if(cljs.core.truth_(inst_11774))
{var statearr_11917_11992 = state_11882__$1;(statearr_11917_11992[1] = 13);
} else
{var statearr_11918_11993 = state_11882__$1;(statearr_11918_11993[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 42))
{var state_11882__$1 = state_11882;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11882__$1,45,dchan);
} else
{if((state_val_11883 === 11))
{var inst_11783 = (state_11882[24]);var inst_11763 = (state_11882[17]);var inst_11783__$1 = cljs.core.seq.call(null,inst_11763);var state_11882__$1 = (function (){var statearr_11919 = state_11882;(statearr_11919[24] = inst_11783__$1);
return statearr_11919;
})();if(inst_11783__$1)
{var statearr_11920_11994 = state_11882__$1;(statearr_11920_11994[1] = 16);
} else
{var statearr_11921_11995 = state_11882__$1;(statearr_11921_11995[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 43))
{var state_11882__$1 = state_11882;var statearr_11922_11996 = state_11882__$1;(statearr_11922_11996[2] = null);
(statearr_11922_11996[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 12))
{var inst_11809 = (state_11882[2]);var state_11882__$1 = state_11882;var statearr_11923_11997 = state_11882__$1;(statearr_11923_11997[2] = inst_11809);
(statearr_11923_11997[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 44))
{var inst_11875 = (state_11882[2]);var state_11882__$1 = (function (){var statearr_11924 = state_11882;(statearr_11924[25] = inst_11875);
return statearr_11924;
})();var statearr_11925_11998 = state_11882__$1;(statearr_11925_11998[2] = null);
(statearr_11925_11998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 13))
{var inst_11773 = (state_11882[23]);var inst_11776 = cljs.core.async.close_BANG_.call(null,inst_11773);var state_11882__$1 = state_11882;var statearr_11926_11999 = state_11882__$1;(statearr_11926_11999[2] = inst_11776);
(statearr_11926_11999[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 45))
{var inst_11872 = (state_11882[2]);var state_11882__$1 = state_11882;var statearr_11930_12000 = state_11882__$1;(statearr_11930_12000[2] = inst_11872);
(statearr_11930_12000[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 14))
{var state_11882__$1 = state_11882;var statearr_11931_12001 = state_11882__$1;(statearr_11931_12001[2] = null);
(statearr_11931_12001[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 15))
{var inst_11764 = (state_11882[14]);var inst_11765 = (state_11882[15]);var inst_11766 = (state_11882[16]);var inst_11763 = (state_11882[17]);var inst_11779 = (state_11882[2]);var inst_11780 = (inst_11766 + 1);var tmp11927 = inst_11764;var tmp11928 = inst_11765;var tmp11929 = inst_11763;var inst_11763__$1 = tmp11929;var inst_11764__$1 = tmp11927;var inst_11765__$1 = tmp11928;var inst_11766__$1 = inst_11780;var state_11882__$1 = (function (){var statearr_11932 = state_11882;(statearr_11932[14] = inst_11764__$1);
(statearr_11932[15] = inst_11765__$1);
(statearr_11932[16] = inst_11766__$1);
(statearr_11932[17] = inst_11763__$1);
(statearr_11932[26] = inst_11779);
return statearr_11932;
})();var statearr_11933_12002 = state_11882__$1;(statearr_11933_12002[2] = null);
(statearr_11933_12002[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 16))
{var inst_11783 = (state_11882[24]);var inst_11785 = cljs.core.chunked_seq_QMARK_.call(null,inst_11783);var state_11882__$1 = state_11882;if(inst_11785)
{var statearr_11934_12003 = state_11882__$1;(statearr_11934_12003[1] = 19);
} else
{var statearr_11935_12004 = state_11882__$1;(statearr_11935_12004[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 17))
{var state_11882__$1 = state_11882;var statearr_11936_12005 = state_11882__$1;(statearr_11936_12005[2] = null);
(statearr_11936_12005[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 18))
{var inst_11807 = (state_11882[2]);var state_11882__$1 = state_11882;var statearr_11937_12006 = state_11882__$1;(statearr_11937_12006[2] = inst_11807);
(statearr_11937_12006[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 19))
{var inst_11783 = (state_11882[24]);var inst_11787 = cljs.core.chunk_first.call(null,inst_11783);var inst_11788 = cljs.core.chunk_rest.call(null,inst_11783);var inst_11789 = cljs.core.count.call(null,inst_11787);var inst_11763 = inst_11788;var inst_11764 = inst_11787;var inst_11765 = inst_11789;var inst_11766 = 0;var state_11882__$1 = (function (){var statearr_11938 = state_11882;(statearr_11938[14] = inst_11764);
(statearr_11938[15] = inst_11765);
(statearr_11938[16] = inst_11766);
(statearr_11938[17] = inst_11763);
return statearr_11938;
})();var statearr_11939_12007 = state_11882__$1;(statearr_11939_12007[2] = null);
(statearr_11939_12007[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 20))
{var inst_11783 = (state_11882[24]);var inst_11793 = cljs.core.first.call(null,inst_11783);var inst_11794 = cljs.core.nth.call(null,inst_11793,0,null);var inst_11795 = cljs.core.nth.call(null,inst_11793,1,null);var state_11882__$1 = (function (){var statearr_11940 = state_11882;(statearr_11940[27] = inst_11794);
return statearr_11940;
})();if(cljs.core.truth_(inst_11795))
{var statearr_11941_12008 = state_11882__$1;(statearr_11941_12008[1] = 22);
} else
{var statearr_11942_12009 = state_11882__$1;(statearr_11942_12009[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 21))
{var inst_11804 = (state_11882[2]);var state_11882__$1 = state_11882;var statearr_11943_12010 = state_11882__$1;(statearr_11943_12010[2] = inst_11804);
(statearr_11943_12010[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 22))
{var inst_11794 = (state_11882[27]);var inst_11797 = cljs.core.async.close_BANG_.call(null,inst_11794);var state_11882__$1 = state_11882;var statearr_11944_12011 = state_11882__$1;(statearr_11944_12011[2] = inst_11797);
(statearr_11944_12011[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 23))
{var state_11882__$1 = state_11882;var statearr_11945_12012 = state_11882__$1;(statearr_11945_12012[2] = null);
(statearr_11945_12012[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 24))
{var inst_11783 = (state_11882[24]);var inst_11800 = (state_11882[2]);var inst_11801 = cljs.core.next.call(null,inst_11783);var inst_11763 = inst_11801;var inst_11764 = null;var inst_11765 = 0;var inst_11766 = 0;var state_11882__$1 = (function (){var statearr_11946 = state_11882;(statearr_11946[14] = inst_11764);
(statearr_11946[15] = inst_11765);
(statearr_11946[16] = inst_11766);
(statearr_11946[28] = inst_11800);
(statearr_11946[17] = inst_11763);
return statearr_11946;
})();var statearr_11947_12013 = state_11882__$1;(statearr_11947_12013[2] = null);
(statearr_11947_12013[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 25))
{var inst_11824 = (state_11882[7]);var inst_11825 = (state_11882[9]);var inst_11827 = (inst_11825 < inst_11824);var inst_11828 = inst_11827;var state_11882__$1 = state_11882;if(cljs.core.truth_(inst_11828))
{var statearr_11948_12014 = state_11882__$1;(statearr_11948_12014[1] = 27);
} else
{var statearr_11949_12015 = state_11882__$1;(statearr_11949_12015[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 26))
{var inst_11814 = (state_11882[19]);var inst_11868 = (state_11882[2]);var inst_11869 = cljs.core.seq.call(null,inst_11814);var state_11882__$1 = (function (){var statearr_11950 = state_11882;(statearr_11950[29] = inst_11868);
return statearr_11950;
})();if(inst_11869)
{var statearr_11951_12016 = state_11882__$1;(statearr_11951_12016[1] = 42);
} else
{var statearr_11952_12017 = state_11882__$1;(statearr_11952_12017[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 27))
{var inst_11823 = (state_11882[8]);var inst_11825 = (state_11882[9]);var inst_11830 = (state_11882[30]);var inst_11754 = (state_11882[13]);var inst_11830__$1 = cljs.core._nth.call(null,inst_11823,inst_11825);var inst_11831 = cljs.core.async.put_BANG_.call(null,inst_11830__$1,inst_11754,done);var state_11882__$1 = (function (){var statearr_11953 = state_11882;(statearr_11953[30] = inst_11830__$1);
return statearr_11953;
})();if(cljs.core.truth_(inst_11831))
{var statearr_11954_12018 = state_11882__$1;(statearr_11954_12018[1] = 30);
} else
{var statearr_11955_12019 = state_11882__$1;(statearr_11955_12019[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 28))
{var inst_11841 = (state_11882[12]);var inst_11822 = (state_11882[10]);var inst_11841__$1 = cljs.core.seq.call(null,inst_11822);var state_11882__$1 = (function (){var statearr_11956 = state_11882;(statearr_11956[12] = inst_11841__$1);
return statearr_11956;
})();if(inst_11841__$1)
{var statearr_11957_12020 = state_11882__$1;(statearr_11957_12020[1] = 33);
} else
{var statearr_11958_12021 = state_11882__$1;(statearr_11958_12021[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 29))
{var inst_11866 = (state_11882[2]);var state_11882__$1 = state_11882;var statearr_11959_12022 = state_11882__$1;(statearr_11959_12022[2] = inst_11866);
(statearr_11959_12022[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 30))
{var state_11882__$1 = state_11882;var statearr_11960_12023 = state_11882__$1;(statearr_11960_12023[2] = null);
(statearr_11960_12023[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11883 === 31))
{var inst_11830 = (state_11882[30]);var inst_11834 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11835 = cljs.core.async.untap_STAR_.call(null,m,inst_11830);var state_11882__$1 = (function (){var statearr_11961 = state_11882;(statearr_11961[31] = inst_11834);
return statearr_11961;
})();var statearr_11962_12024 = state_11882__$1;(statearr_11962_12024[2] = inst_11835);
(statearr_11962_12024[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5564__auto__){
return (function() {
var state_machine__5565__auto__ = null;
var state_machine__5565__auto____0 = (function (){var statearr_11966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11966[0] = state_machine__5565__auto__);
(statearr_11966[1] = 1);
return statearr_11966;
});
var state_machine__5565__auto____1 = (function (state_11882){while(true){
var ret_value__5566__auto__ = (function (){try{while(true){
var result__5567__auto__ = switch__5564__auto__.call(null,state_11882);if(cljs.core.keyword_identical_QMARK_.call(null,result__5567__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5567__auto__;
}
break;
}
}catch (e11967){if((e11967 instanceof Object))
{var ex__5568__auto__ = e11967;var statearr_11968_12025 = state_11882;(statearr_11968_12025[5] = ex__5568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11882);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11967;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5566__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12026 = state_11882;
state_11882 = G__12026;
continue;
}
} else
{return ret_value__5566__auto__;
}
break;
}
});
state_machine__5565__auto__ = function(state_11882){
switch(arguments.length){
case 0:
return state_machine__5565__auto____0.call(this);
case 1:
return state_machine__5565__auto____1.call(this,state_11882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5565__auto____0;
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5565__auto____1;
return state_machine__5565__auto__;
})()
;})(switch__5564__auto__))
})();var state__5581__auto__ = (function (){var statearr_11969 = f__5580__auto__.call(null);(statearr_11969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5579__auto___11970);
return statearr_11969;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5581__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12028 = {};return obj12028;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12148 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12148 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12149){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12149 = meta12149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12148.cljs$lang$type = true;
cljs.core.async.t12148.cljs$lang$ctorStr = "cljs.core.async/t12148";
cljs.core.async.t12148.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12148");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12148.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12148.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12148.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12148.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12148.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12148.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12148.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12148.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12150){var self__ = this;
var _12150__$1 = this;return self__.meta12149;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12150,meta12149__$1){var self__ = this;
var _12150__$1 = this;return (new cljs.core.async.t12148(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12149__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12148 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12148(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12149){return (new cljs.core.async.t12148(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12149));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12148(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5579__auto___12267 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5580__auto__ = (function (){var switch__5564__auto__ = (function (state_12220){var state_val_12221 = (state_12220[1]);if((state_val_12221 === 1))
{var inst_12154 = (state_12220[7]);var inst_12154__$1 = calc_state.call(null);var inst_12155 = cljs.core.seq_QMARK_.call(null,inst_12154__$1);var state_12220__$1 = (function (){var statearr_12222 = state_12220;(statearr_12222[7] = inst_12154__$1);
return statearr_12222;
})();if(inst_12155)
{var statearr_12223_12268 = state_12220__$1;(statearr_12223_12268[1] = 2);
} else
{var statearr_12224_12269 = state_12220__$1;(statearr_12224_12269[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 2))
{var inst_12154 = (state_12220[7]);var inst_12157 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12154);var state_12220__$1 = state_12220;var statearr_12225_12270 = state_12220__$1;(statearr_12225_12270[2] = inst_12157);
(statearr_12225_12270[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 3))
{var inst_12154 = (state_12220[7]);var state_12220__$1 = state_12220;var statearr_12226_12271 = state_12220__$1;(statearr_12226_12271[2] = inst_12154);
(statearr_12226_12271[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 4))
{var inst_12154 = (state_12220[7]);var inst_12160 = (state_12220[2]);var inst_12161 = cljs.core.get.call(null,inst_12160,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12162 = cljs.core.get.call(null,inst_12160,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12163 = cljs.core.get.call(null,inst_12160,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12164 = inst_12154;var state_12220__$1 = (function (){var statearr_12227 = state_12220;(statearr_12227[8] = inst_12163);
(statearr_12227[9] = inst_12164);
(statearr_12227[10] = inst_12162);
(statearr_12227[11] = inst_12161);
return statearr_12227;
})();var statearr_12228_12272 = state_12220__$1;(statearr_12228_12272[2] = null);
(statearr_12228_12272[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 5))
{var inst_12164 = (state_12220[9]);var inst_12167 = cljs.core.seq_QMARK_.call(null,inst_12164);var state_12220__$1 = state_12220;if(inst_12167)
{var statearr_12229_12273 = state_12220__$1;(statearr_12229_12273[1] = 7);
} else
{var statearr_12230_12274 = state_12220__$1;(statearr_12230_12274[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 6))
{var inst_12218 = (state_12220[2]);var state_12220__$1 = state_12220;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12220__$1,inst_12218);
} else
{if((state_val_12221 === 7))
{var inst_12164 = (state_12220[9]);var inst_12169 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12164);var state_12220__$1 = state_12220;var statearr_12231_12275 = state_12220__$1;(statearr_12231_12275[2] = inst_12169);
(statearr_12231_12275[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 8))
{var inst_12164 = (state_12220[9]);var state_12220__$1 = state_12220;var statearr_12232_12276 = state_12220__$1;(statearr_12232_12276[2] = inst_12164);
(statearr_12232_12276[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 9))
{var inst_12172 = (state_12220[12]);var inst_12172__$1 = (state_12220[2]);var inst_12173 = cljs.core.get.call(null,inst_12172__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12174 = cljs.core.get.call(null,inst_12172__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12175 = cljs.core.get.call(null,inst_12172__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12220__$1 = (function (){var statearr_12233 = state_12220;(statearr_12233[13] = inst_12174);
(statearr_12233[14] = inst_12175);
(statearr_12233[12] = inst_12172__$1);
return statearr_12233;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12220__$1,10,inst_12173);
} else
{if((state_val_12221 === 10))
{var inst_12179 = (state_12220[15]);var inst_12180 = (state_12220[16]);var inst_12178 = (state_12220[2]);var inst_12179__$1 = cljs.core.nth.call(null,inst_12178,0,null);var inst_12180__$1 = cljs.core.nth.call(null,inst_12178,1,null);var inst_12181 = (inst_12179__$1 == null);var inst_12182 = cljs.core._EQ_.call(null,inst_12180__$1,change);var inst_12183 = (inst_12181) || (inst_12182);var state_12220__$1 = (function (){var statearr_12234 = state_12220;(statearr_12234[15] = inst_12179__$1);
(statearr_12234[16] = inst_12180__$1);
return statearr_12234;
})();if(cljs.core.truth_(inst_12183))
{var statearr_12235_12277 = state_12220__$1;(statearr_12235_12277[1] = 11);
} else
{var statearr_12236_12278 = state_12220__$1;(statearr_12236_12278[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 11))
{var inst_12179 = (state_12220[15]);var inst_12185 = (inst_12179 == null);var state_12220__$1 = state_12220;if(cljs.core.truth_(inst_12185))
{var statearr_12237_12279 = state_12220__$1;(statearr_12237_12279[1] = 14);
} else
{var statearr_12238_12280 = state_12220__$1;(statearr_12238_12280[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 12))
{var inst_12194 = (state_12220[17]);var inst_12175 = (state_12220[14]);var inst_12180 = (state_12220[16]);var inst_12194__$1 = inst_12175.call(null,inst_12180);var state_12220__$1 = (function (){var statearr_12239 = state_12220;(statearr_12239[17] = inst_12194__$1);
return statearr_12239;
})();if(cljs.core.truth_(inst_12194__$1))
{var statearr_12240_12281 = state_12220__$1;(statearr_12240_12281[1] = 17);
} else
{var statearr_12241_12282 = state_12220__$1;(statearr_12241_12282[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 13))
{var inst_12216 = (state_12220[2]);var state_12220__$1 = state_12220;var statearr_12242_12283 = state_12220__$1;(statearr_12242_12283[2] = inst_12216);
(statearr_12242_12283[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 14))
{var inst_12180 = (state_12220[16]);var inst_12187 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12180);var state_12220__$1 = state_12220;var statearr_12243_12284 = state_12220__$1;(statearr_12243_12284[2] = inst_12187);
(statearr_12243_12284[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 15))
{var state_12220__$1 = state_12220;var statearr_12244_12285 = state_12220__$1;(statearr_12244_12285[2] = null);
(statearr_12244_12285[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 16))
{var inst_12190 = (state_12220[2]);var inst_12191 = calc_state.call(null);var inst_12164 = inst_12191;var state_12220__$1 = (function (){var statearr_12245 = state_12220;(statearr_12245[18] = inst_12190);
(statearr_12245[9] = inst_12164);
return statearr_12245;
})();var statearr_12246_12286 = state_12220__$1;(statearr_12246_12286[2] = null);
(statearr_12246_12286[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 17))
{var inst_12194 = (state_12220[17]);var state_12220__$1 = state_12220;var statearr_12247_12287 = state_12220__$1;(statearr_12247_12287[2] = inst_12194);
(statearr_12247_12287[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 18))
{var inst_12174 = (state_12220[13]);var inst_12175 = (state_12220[14]);var inst_12180 = (state_12220[16]);var inst_12197 = cljs.core.empty_QMARK_.call(null,inst_12175);var inst_12198 = inst_12174.call(null,inst_12180);var inst_12199 = cljs.core.not.call(null,inst_12198);var inst_12200 = (inst_12197) && (inst_12199);var state_12220__$1 = state_12220;var statearr_12248_12288 = state_12220__$1;(statearr_12248_12288[2] = inst_12200);
(statearr_12248_12288[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 19))
{var inst_12202 = (state_12220[2]);var state_12220__$1 = state_12220;if(cljs.core.truth_(inst_12202))
{var statearr_12249_12289 = state_12220__$1;(statearr_12249_12289[1] = 20);
} else
{var statearr_12250_12290 = state_12220__$1;(statearr_12250_12290[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 20))
{var inst_12179 = (state_12220[15]);var state_12220__$1 = state_12220;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12220__$1,23,out,inst_12179);
} else
{if((state_val_12221 === 21))
{var inst_12172 = (state_12220[12]);var inst_12164 = inst_12172;var state_12220__$1 = (function (){var statearr_12251 = state_12220;(statearr_12251[9] = inst_12164);
return statearr_12251;
})();var statearr_12252_12291 = state_12220__$1;(statearr_12252_12291[2] = null);
(statearr_12252_12291[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 22))
{var inst_12214 = (state_12220[2]);var state_12220__$1 = state_12220;var statearr_12253_12292 = state_12220__$1;(statearr_12253_12292[2] = inst_12214);
(statearr_12253_12292[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 23))
{var inst_12205 = (state_12220[2]);var state_12220__$1 = state_12220;if(cljs.core.truth_(inst_12205))
{var statearr_12254_12293 = state_12220__$1;(statearr_12254_12293[1] = 24);
} else
{var statearr_12255_12294 = state_12220__$1;(statearr_12255_12294[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 24))
{var inst_12172 = (state_12220[12]);var inst_12164 = inst_12172;var state_12220__$1 = (function (){var statearr_12256 = state_12220;(statearr_12256[9] = inst_12164);
return statearr_12256;
})();var statearr_12257_12295 = state_12220__$1;(statearr_12257_12295[2] = null);
(statearr_12257_12295[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 25))
{var state_12220__$1 = state_12220;var statearr_12258_12296 = state_12220__$1;(statearr_12258_12296[2] = null);
(statearr_12258_12296[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 26))
{var inst_12210 = (state_12220[2]);var state_12220__$1 = state_12220;var statearr_12259_12297 = state_12220__$1;(statearr_12259_12297[2] = inst_12210);
(statearr_12259_12297[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5564__auto__){
return (function() {
var state_machine__5565__auto__ = null;
var state_machine__5565__auto____0 = (function (){var statearr_12263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12263[0] = state_machine__5565__auto__);
(statearr_12263[1] = 1);
return statearr_12263;
});
var state_machine__5565__auto____1 = (function (state_12220){while(true){
var ret_value__5566__auto__ = (function (){try{while(true){
var result__5567__auto__ = switch__5564__auto__.call(null,state_12220);if(cljs.core.keyword_identical_QMARK_.call(null,result__5567__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5567__auto__;
}
break;
}
}catch (e12264){if((e12264 instanceof Object))
{var ex__5568__auto__ = e12264;var statearr_12265_12298 = state_12220;(statearr_12265_12298[5] = ex__5568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12220);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12264;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5566__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12299 = state_12220;
state_12220 = G__12299;
continue;
}
} else
{return ret_value__5566__auto__;
}
break;
}
});
state_machine__5565__auto__ = function(state_12220){
switch(arguments.length){
case 0:
return state_machine__5565__auto____0.call(this);
case 1:
return state_machine__5565__auto____1.call(this,state_12220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5565__auto____0;
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5565__auto____1;
return state_machine__5565__auto__;
})()
;})(switch__5564__auto__))
})();var state__5581__auto__ = (function (){var statearr_12266 = f__5580__auto__.call(null);(statearr_12266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5579__auto___12267);
return statearr_12266;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5581__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12301 = {};return obj12301;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
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
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__12302_SHARP_){if(cljs.core.truth_(p1__12302_SHARP_.call(null,topic)))
{return p1__12302_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12302_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12425 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12425 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12426){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12426 = meta12426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12425.cljs$lang$type = true;
cljs.core.async.t12425.cljs$lang$ctorStr = "cljs.core.async/t12425";
cljs.core.async.t12425.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12425");
});})(mults,ensure_mult))
;
cljs.core.async.t12425.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12425.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12425.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12425.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12425.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12425.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12425.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12427){var self__ = this;
var _12427__$1 = this;return self__.meta12426;
});})(mults,ensure_mult))
;
cljs.core.async.t12425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12427,meta12426__$1){var self__ = this;
var _12427__$1 = this;return (new cljs.core.async.t12425(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12426__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12425 = ((function (mults,ensure_mult){
return (function __GT_t12425(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12426){return (new cljs.core.async.t12425(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12426));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12425(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5579__auto___12547 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5580__auto__ = (function (){var switch__5564__auto__ = (function (state_12499){var state_val_12500 = (state_12499[1]);if((state_val_12500 === 1))
{var state_12499__$1 = state_12499;var statearr_12501_12548 = state_12499__$1;(statearr_12501_12548[2] = null);
(statearr_12501_12548[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 2))
{var state_12499__$1 = state_12499;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12499__$1,4,ch);
} else
{if((state_val_12500 === 3))
{var inst_12497 = (state_12499[2]);var state_12499__$1 = state_12499;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12499__$1,inst_12497);
} else
{if((state_val_12500 === 4))
{var inst_12430 = (state_12499[7]);var inst_12430__$1 = (state_12499[2]);var inst_12431 = (inst_12430__$1 == null);var state_12499__$1 = (function (){var statearr_12502 = state_12499;(statearr_12502[7] = inst_12430__$1);
return statearr_12502;
})();if(cljs.core.truth_(inst_12431))
{var statearr_12503_12549 = state_12499__$1;(statearr_12503_12549[1] = 5);
} else
{var statearr_12504_12550 = state_12499__$1;(statearr_12504_12550[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 5))
{var inst_12437 = cljs.core.deref.call(null,mults);var inst_12438 = cljs.core.vals.call(null,inst_12437);var inst_12439 = cljs.core.seq.call(null,inst_12438);var inst_12440 = inst_12439;var inst_12441 = null;var inst_12442 = 0;var inst_12443 = 0;var state_12499__$1 = (function (){var statearr_12505 = state_12499;(statearr_12505[8] = inst_12440);
(statearr_12505[9] = inst_12441);
(statearr_12505[10] = inst_12443);
(statearr_12505[11] = inst_12442);
return statearr_12505;
})();var statearr_12506_12551 = state_12499__$1;(statearr_12506_12551[2] = null);
(statearr_12506_12551[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 6))
{var inst_12478 = (state_12499[12]);var inst_12430 = (state_12499[7]);var inst_12480 = (state_12499[13]);var inst_12478__$1 = topic_fn.call(null,inst_12430);var inst_12479 = cljs.core.deref.call(null,mults);var inst_12480__$1 = cljs.core.get.call(null,inst_12479,inst_12478__$1);var state_12499__$1 = (function (){var statearr_12507 = state_12499;(statearr_12507[12] = inst_12478__$1);
(statearr_12507[13] = inst_12480__$1);
return statearr_12507;
})();if(cljs.core.truth_(inst_12480__$1))
{var statearr_12508_12552 = state_12499__$1;(statearr_12508_12552[1] = 19);
} else
{var statearr_12509_12553 = state_12499__$1;(statearr_12509_12553[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 7))
{var inst_12495 = (state_12499[2]);var state_12499__$1 = state_12499;var statearr_12510_12554 = state_12499__$1;(statearr_12510_12554[2] = inst_12495);
(statearr_12510_12554[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 8))
{var inst_12443 = (state_12499[10]);var inst_12442 = (state_12499[11]);var inst_12445 = (inst_12443 < inst_12442);var inst_12446 = inst_12445;var state_12499__$1 = state_12499;if(cljs.core.truth_(inst_12446))
{var statearr_12514_12555 = state_12499__$1;(statearr_12514_12555[1] = 10);
} else
{var statearr_12515_12556 = state_12499__$1;(statearr_12515_12556[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 9))
{var inst_12476 = (state_12499[2]);var state_12499__$1 = state_12499;var statearr_12516_12557 = state_12499__$1;(statearr_12516_12557[2] = inst_12476);
(statearr_12516_12557[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 10))
{var inst_12440 = (state_12499[8]);var inst_12441 = (state_12499[9]);var inst_12443 = (state_12499[10]);var inst_12442 = (state_12499[11]);var inst_12448 = cljs.core._nth.call(null,inst_12441,inst_12443);var inst_12449 = cljs.core.async.muxch_STAR_.call(null,inst_12448);var inst_12450 = cljs.core.async.close_BANG_.call(null,inst_12449);var inst_12451 = (inst_12443 + 1);var tmp12511 = inst_12440;var tmp12512 = inst_12441;var tmp12513 = inst_12442;var inst_12440__$1 = tmp12511;var inst_12441__$1 = tmp12512;var inst_12442__$1 = tmp12513;var inst_12443__$1 = inst_12451;var state_12499__$1 = (function (){var statearr_12517 = state_12499;(statearr_12517[8] = inst_12440__$1);
(statearr_12517[9] = inst_12441__$1);
(statearr_12517[14] = inst_12450);
(statearr_12517[10] = inst_12443__$1);
(statearr_12517[11] = inst_12442__$1);
return statearr_12517;
})();var statearr_12518_12558 = state_12499__$1;(statearr_12518_12558[2] = null);
(statearr_12518_12558[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 11))
{var inst_12440 = (state_12499[8]);var inst_12454 = (state_12499[15]);var inst_12454__$1 = cljs.core.seq.call(null,inst_12440);var state_12499__$1 = (function (){var statearr_12519 = state_12499;(statearr_12519[15] = inst_12454__$1);
return statearr_12519;
})();if(inst_12454__$1)
{var statearr_12520_12559 = state_12499__$1;(statearr_12520_12559[1] = 13);
} else
{var statearr_12521_12560 = state_12499__$1;(statearr_12521_12560[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 12))
{var inst_12474 = (state_12499[2]);var state_12499__$1 = state_12499;var statearr_12522_12561 = state_12499__$1;(statearr_12522_12561[2] = inst_12474);
(statearr_12522_12561[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 13))
{var inst_12454 = (state_12499[15]);var inst_12456 = cljs.core.chunked_seq_QMARK_.call(null,inst_12454);var state_12499__$1 = state_12499;if(inst_12456)
{var statearr_12523_12562 = state_12499__$1;(statearr_12523_12562[1] = 16);
} else
{var statearr_12524_12563 = state_12499__$1;(statearr_12524_12563[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 14))
{var state_12499__$1 = state_12499;var statearr_12525_12564 = state_12499__$1;(statearr_12525_12564[2] = null);
(statearr_12525_12564[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 15))
{var inst_12472 = (state_12499[2]);var state_12499__$1 = state_12499;var statearr_12526_12565 = state_12499__$1;(statearr_12526_12565[2] = inst_12472);
(statearr_12526_12565[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 16))
{var inst_12454 = (state_12499[15]);var inst_12458 = cljs.core.chunk_first.call(null,inst_12454);var inst_12459 = cljs.core.chunk_rest.call(null,inst_12454);var inst_12460 = cljs.core.count.call(null,inst_12458);var inst_12440 = inst_12459;var inst_12441 = inst_12458;var inst_12442 = inst_12460;var inst_12443 = 0;var state_12499__$1 = (function (){var statearr_12527 = state_12499;(statearr_12527[8] = inst_12440);
(statearr_12527[9] = inst_12441);
(statearr_12527[10] = inst_12443);
(statearr_12527[11] = inst_12442);
return statearr_12527;
})();var statearr_12528_12566 = state_12499__$1;(statearr_12528_12566[2] = null);
(statearr_12528_12566[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 17))
{var inst_12454 = (state_12499[15]);var inst_12463 = cljs.core.first.call(null,inst_12454);var inst_12464 = cljs.core.async.muxch_STAR_.call(null,inst_12463);var inst_12465 = cljs.core.async.close_BANG_.call(null,inst_12464);var inst_12466 = cljs.core.next.call(null,inst_12454);var inst_12440 = inst_12466;var inst_12441 = null;var inst_12442 = 0;var inst_12443 = 0;var state_12499__$1 = (function (){var statearr_12529 = state_12499;(statearr_12529[16] = inst_12465);
(statearr_12529[8] = inst_12440);
(statearr_12529[9] = inst_12441);
(statearr_12529[10] = inst_12443);
(statearr_12529[11] = inst_12442);
return statearr_12529;
})();var statearr_12530_12567 = state_12499__$1;(statearr_12530_12567[2] = null);
(statearr_12530_12567[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 18))
{var inst_12469 = (state_12499[2]);var state_12499__$1 = state_12499;var statearr_12531_12568 = state_12499__$1;(statearr_12531_12568[2] = inst_12469);
(statearr_12531_12568[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 19))
{var inst_12430 = (state_12499[7]);var inst_12480 = (state_12499[13]);var inst_12482 = cljs.core.async.muxch_STAR_.call(null,inst_12480);var state_12499__$1 = state_12499;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12499__$1,22,inst_12482,inst_12430);
} else
{if((state_val_12500 === 20))
{var state_12499__$1 = state_12499;var statearr_12532_12569 = state_12499__$1;(statearr_12532_12569[2] = null);
(statearr_12532_12569[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 21))
{var inst_12492 = (state_12499[2]);var state_12499__$1 = (function (){var statearr_12533 = state_12499;(statearr_12533[17] = inst_12492);
return statearr_12533;
})();var statearr_12534_12570 = state_12499__$1;(statearr_12534_12570[2] = null);
(statearr_12534_12570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 22))
{var inst_12484 = (state_12499[2]);var state_12499__$1 = state_12499;if(cljs.core.truth_(inst_12484))
{var statearr_12535_12571 = state_12499__$1;(statearr_12535_12571[1] = 23);
} else
{var statearr_12536_12572 = state_12499__$1;(statearr_12536_12572[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 23))
{var state_12499__$1 = state_12499;var statearr_12537_12573 = state_12499__$1;(statearr_12537_12573[2] = null);
(statearr_12537_12573[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 24))
{var inst_12478 = (state_12499[12]);var inst_12487 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12478);var state_12499__$1 = state_12499;var statearr_12538_12574 = state_12499__$1;(statearr_12538_12574[2] = inst_12487);
(statearr_12538_12574[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12500 === 25))
{var inst_12489 = (state_12499[2]);var state_12499__$1 = state_12499;var statearr_12539_12575 = state_12499__$1;(statearr_12539_12575[2] = inst_12489);
(statearr_12539_12575[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5564__auto__){
return (function() {
var state_machine__5565__auto__ = null;
var state_machine__5565__auto____0 = (function (){var statearr_12543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12543[0] = state_machine__5565__auto__);
(statearr_12543[1] = 1);
return statearr_12543;
});
var state_machine__5565__auto____1 = (function (state_12499){while(true){
var ret_value__5566__auto__ = (function (){try{while(true){
var result__5567__auto__ = switch__5564__auto__.call(null,state_12499);if(cljs.core.keyword_identical_QMARK_.call(null,result__5567__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5567__auto__;
}
break;
}
}catch (e12544){if((e12544 instanceof Object))
{var ex__5568__auto__ = e12544;var statearr_12545_12576 = state_12499;(statearr_12545_12576[5] = ex__5568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12499);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12544;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5566__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12577 = state_12499;
state_12499 = G__12577;
continue;
}
} else
{return ret_value__5566__auto__;
}
break;
}
});
state_machine__5565__auto__ = function(state_12499){
switch(arguments.length){
case 0:
return state_machine__5565__auto____0.call(this);
case 1:
return state_machine__5565__auto____1.call(this,state_12499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5565__auto____0;
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5565__auto____1;
return state_machine__5565__auto__;
})()
;})(switch__5564__auto__))
})();var state__5581__auto__ = (function (){var statearr_12546 = f__5580__auto__.call(null);(statearr_12546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5579__auto___12547);
return statearr_12546;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5581__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5579__auto___12714 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5580__auto__ = (function (){var switch__5564__auto__ = (function (state_12684){var state_val_12685 = (state_12684[1]);if((state_val_12685 === 1))
{var state_12684__$1 = state_12684;var statearr_12686_12715 = state_12684__$1;(statearr_12686_12715[2] = null);
(statearr_12686_12715[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12685 === 2))
{var inst_12647 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12648 = 0;var state_12684__$1 = (function (){var statearr_12687 = state_12684;(statearr_12687[7] = inst_12648);
(statearr_12687[8] = inst_12647);
return statearr_12687;
})();var statearr_12688_12716 = state_12684__$1;(statearr_12688_12716[2] = null);
(statearr_12688_12716[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12685 === 3))
{var inst_12682 = (state_12684[2]);var state_12684__$1 = state_12684;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12684__$1,inst_12682);
} else
{if((state_val_12685 === 4))
{var inst_12648 = (state_12684[7]);var inst_12650 = (inst_12648 < cnt);var state_12684__$1 = state_12684;if(cljs.core.truth_(inst_12650))
{var statearr_12689_12717 = state_12684__$1;(statearr_12689_12717[1] = 6);
} else
{var statearr_12690_12718 = state_12684__$1;(statearr_12690_12718[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12685 === 5))
{var inst_12668 = (state_12684[2]);var state_12684__$1 = (function (){var statearr_12691 = state_12684;(statearr_12691[9] = inst_12668);
return statearr_12691;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12684__$1,12,dchan);
} else
{if((state_val_12685 === 6))
{var state_12684__$1 = state_12684;var statearr_12692_12719 = state_12684__$1;(statearr_12692_12719[2] = null);
(statearr_12692_12719[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12685 === 7))
{var state_12684__$1 = state_12684;var statearr_12693_12720 = state_12684__$1;(statearr_12693_12720[2] = null);
(statearr_12693_12720[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12685 === 8))
{var inst_12666 = (state_12684[2]);var state_12684__$1 = state_12684;var statearr_12694_12721 = state_12684__$1;(statearr_12694_12721[2] = inst_12666);
(statearr_12694_12721[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12685 === 9))
{var inst_12648 = (state_12684[7]);var inst_12661 = (state_12684[2]);var inst_12662 = (inst_12648 + 1);var inst_12648__$1 = inst_12662;var state_12684__$1 = (function (){var statearr_12695 = state_12684;(statearr_12695[10] = inst_12661);
(statearr_12695[7] = inst_12648__$1);
return statearr_12695;
})();var statearr_12696_12722 = state_12684__$1;(statearr_12696_12722[2] = null);
(statearr_12696_12722[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12685 === 10))
{var inst_12652 = (state_12684[2]);var inst_12653 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12684__$1 = (function (){var statearr_12697 = state_12684;(statearr_12697[11] = inst_12652);
return statearr_12697;
})();var statearr_12698_12723 = state_12684__$1;(statearr_12698_12723[2] = inst_12653);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12684__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12685 === 11))
{var inst_12648 = (state_12684[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12684,10,Object,null,9);var inst_12657 = chs__$1.call(null,inst_12648);var inst_12658 = done.call(null,inst_12648);var inst_12659 = cljs.core.async.take_BANG_.call(null,inst_12657,inst_12658);var state_12684__$1 = state_12684;var statearr_12699_12724 = state_12684__$1;(statearr_12699_12724[2] = inst_12659);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12684__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12685 === 12))
{var inst_12670 = (state_12684[12]);var inst_12670__$1 = (state_12684[2]);var inst_12671 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12670__$1);var state_12684__$1 = (function (){var statearr_12700 = state_12684;(statearr_12700[12] = inst_12670__$1);
return statearr_12700;
})();if(cljs.core.truth_(inst_12671))
{var statearr_12701_12725 = state_12684__$1;(statearr_12701_12725[1] = 13);
} else
{var statearr_12702_12726 = state_12684__$1;(statearr_12702_12726[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12685 === 13))
{var inst_12673 = cljs.core.async.close_BANG_.call(null,out);var state_12684__$1 = state_12684;var statearr_12703_12727 = state_12684__$1;(statearr_12703_12727[2] = inst_12673);
(statearr_12703_12727[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12685 === 14))
{var inst_12670 = (state_12684[12]);var inst_12675 = cljs.core.apply.call(null,f,inst_12670);var state_12684__$1 = state_12684;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12684__$1,16,out,inst_12675);
} else
{if((state_val_12685 === 15))
{var inst_12680 = (state_12684[2]);var state_12684__$1 = state_12684;var statearr_12704_12728 = state_12684__$1;(statearr_12704_12728[2] = inst_12680);
(statearr_12704_12728[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12685 === 16))
{var inst_12677 = (state_12684[2]);var state_12684__$1 = (function (){var statearr_12705 = state_12684;(statearr_12705[13] = inst_12677);
return statearr_12705;
})();var statearr_12706_12729 = state_12684__$1;(statearr_12706_12729[2] = null);
(statearr_12706_12729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5564__auto__){
return (function() {
var state_machine__5565__auto__ = null;
var state_machine__5565__auto____0 = (function (){var statearr_12710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12710[0] = state_machine__5565__auto__);
(statearr_12710[1] = 1);
return statearr_12710;
});
var state_machine__5565__auto____1 = (function (state_12684){while(true){
var ret_value__5566__auto__ = (function (){try{while(true){
var result__5567__auto__ = switch__5564__auto__.call(null,state_12684);if(cljs.core.keyword_identical_QMARK_.call(null,result__5567__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5567__auto__;
}
break;
}
}catch (e12711){if((e12711 instanceof Object))
{var ex__5568__auto__ = e12711;var statearr_12712_12730 = state_12684;(statearr_12712_12730[5] = ex__5568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12684);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12711;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5566__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12731 = state_12684;
state_12684 = G__12731;
continue;
}
} else
{return ret_value__5566__auto__;
}
break;
}
});
state_machine__5565__auto__ = function(state_12684){
switch(arguments.length){
case 0:
return state_machine__5565__auto____0.call(this);
case 1:
return state_machine__5565__auto____1.call(this,state_12684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5565__auto____0;
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5565__auto____1;
return state_machine__5565__auto__;
})()
;})(switch__5564__auto__))
})();var state__5581__auto__ = (function (){var statearr_12713 = f__5580__auto__.call(null);(statearr_12713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5579__auto___12714);
return statearr_12713;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5581__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5579__auto___12839 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5580__auto__ = (function (){var switch__5564__auto__ = (function (state_12815){var state_val_12816 = (state_12815[1]);if((state_val_12816 === 1))
{var inst_12786 = cljs.core.vec.call(null,chs);var inst_12787 = inst_12786;var state_12815__$1 = (function (){var statearr_12817 = state_12815;(statearr_12817[7] = inst_12787);
return statearr_12817;
})();var statearr_12818_12840 = state_12815__$1;(statearr_12818_12840[2] = null);
(statearr_12818_12840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 2))
{var inst_12787 = (state_12815[7]);var inst_12789 = cljs.core.count.call(null,inst_12787);var inst_12790 = (inst_12789 > 0);var state_12815__$1 = state_12815;if(cljs.core.truth_(inst_12790))
{var statearr_12819_12841 = state_12815__$1;(statearr_12819_12841[1] = 4);
} else
{var statearr_12820_12842 = state_12815__$1;(statearr_12820_12842[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 3))
{var inst_12813 = (state_12815[2]);var state_12815__$1 = state_12815;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12815__$1,inst_12813);
} else
{if((state_val_12816 === 4))
{var inst_12787 = (state_12815[7]);var state_12815__$1 = state_12815;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12815__$1,7,inst_12787);
} else
{if((state_val_12816 === 5))
{var inst_12809 = cljs.core.async.close_BANG_.call(null,out);var state_12815__$1 = state_12815;var statearr_12821_12843 = state_12815__$1;(statearr_12821_12843[2] = inst_12809);
(statearr_12821_12843[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 6))
{var inst_12811 = (state_12815[2]);var state_12815__$1 = state_12815;var statearr_12822_12844 = state_12815__$1;(statearr_12822_12844[2] = inst_12811);
(statearr_12822_12844[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 7))
{var inst_12795 = (state_12815[8]);var inst_12794 = (state_12815[9]);var inst_12794__$1 = (state_12815[2]);var inst_12795__$1 = cljs.core.nth.call(null,inst_12794__$1,0,null);var inst_12796 = cljs.core.nth.call(null,inst_12794__$1,1,null);var inst_12797 = (inst_12795__$1 == null);var state_12815__$1 = (function (){var statearr_12823 = state_12815;(statearr_12823[10] = inst_12796);
(statearr_12823[8] = inst_12795__$1);
(statearr_12823[9] = inst_12794__$1);
return statearr_12823;
})();if(cljs.core.truth_(inst_12797))
{var statearr_12824_12845 = state_12815__$1;(statearr_12824_12845[1] = 8);
} else
{var statearr_12825_12846 = state_12815__$1;(statearr_12825_12846[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 8))
{var inst_12787 = (state_12815[7]);var inst_12796 = (state_12815[10]);var inst_12795 = (state_12815[8]);var inst_12794 = (state_12815[9]);var inst_12799 = (function (){var c = inst_12796;var v = inst_12795;var vec__12792 = inst_12794;var cs = inst_12787;return ((function (c,v,vec__12792,cs,inst_12787,inst_12796,inst_12795,inst_12794,state_val_12816){
return (function (p1__12732_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12732_SHARP_);
});
;})(c,v,vec__12792,cs,inst_12787,inst_12796,inst_12795,inst_12794,state_val_12816))
})();var inst_12800 = cljs.core.filterv.call(null,inst_12799,inst_12787);var inst_12787__$1 = inst_12800;var state_12815__$1 = (function (){var statearr_12826 = state_12815;(statearr_12826[7] = inst_12787__$1);
return statearr_12826;
})();var statearr_12827_12847 = state_12815__$1;(statearr_12827_12847[2] = null);
(statearr_12827_12847[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 9))
{var inst_12795 = (state_12815[8]);var state_12815__$1 = state_12815;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12815__$1,11,out,inst_12795);
} else
{if((state_val_12816 === 10))
{var inst_12807 = (state_12815[2]);var state_12815__$1 = state_12815;var statearr_12829_12848 = state_12815__$1;(statearr_12829_12848[2] = inst_12807);
(statearr_12829_12848[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 11))
{var inst_12787 = (state_12815[7]);var inst_12804 = (state_12815[2]);var tmp12828 = inst_12787;var inst_12787__$1 = tmp12828;var state_12815__$1 = (function (){var statearr_12830 = state_12815;(statearr_12830[7] = inst_12787__$1);
(statearr_12830[11] = inst_12804);
return statearr_12830;
})();var statearr_12831_12849 = state_12815__$1;(statearr_12831_12849[2] = null);
(statearr_12831_12849[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5564__auto__){
return (function() {
var state_machine__5565__auto__ = null;
var state_machine__5565__auto____0 = (function (){var statearr_12835 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12835[0] = state_machine__5565__auto__);
(statearr_12835[1] = 1);
return statearr_12835;
});
var state_machine__5565__auto____1 = (function (state_12815){while(true){
var ret_value__5566__auto__ = (function (){try{while(true){
var result__5567__auto__ = switch__5564__auto__.call(null,state_12815);if(cljs.core.keyword_identical_QMARK_.call(null,result__5567__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5567__auto__;
}
break;
}
}catch (e12836){if((e12836 instanceof Object))
{var ex__5568__auto__ = e12836;var statearr_12837_12850 = state_12815;(statearr_12837_12850[5] = ex__5568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12815);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12836;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5566__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12851 = state_12815;
state_12815 = G__12851;
continue;
}
} else
{return ret_value__5566__auto__;
}
break;
}
});
state_machine__5565__auto__ = function(state_12815){
switch(arguments.length){
case 0:
return state_machine__5565__auto____0.call(this);
case 1:
return state_machine__5565__auto____1.call(this,state_12815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5565__auto____0;
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5565__auto____1;
return state_machine__5565__auto__;
})()
;})(switch__5564__auto__))
})();var state__5581__auto__ = (function (){var statearr_12838 = f__5580__auto__.call(null);(statearr_12838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5579__auto___12839);
return statearr_12838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5581__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5579__auto___12944 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5580__auto__ = (function (){var switch__5564__auto__ = (function (state_12921){var state_val_12922 = (state_12921[1]);if((state_val_12922 === 1))
{var inst_12898 = 0;var state_12921__$1 = (function (){var statearr_12923 = state_12921;(statearr_12923[7] = inst_12898);
return statearr_12923;
})();var statearr_12924_12945 = state_12921__$1;(statearr_12924_12945[2] = null);
(statearr_12924_12945[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12922 === 2))
{var inst_12898 = (state_12921[7]);var inst_12900 = (inst_12898 < n);var state_12921__$1 = state_12921;if(cljs.core.truth_(inst_12900))
{var statearr_12925_12946 = state_12921__$1;(statearr_12925_12946[1] = 4);
} else
{var statearr_12926_12947 = state_12921__$1;(statearr_12926_12947[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12922 === 3))
{var inst_12918 = (state_12921[2]);var inst_12919 = cljs.core.async.close_BANG_.call(null,out);var state_12921__$1 = (function (){var statearr_12927 = state_12921;(statearr_12927[8] = inst_12918);
return statearr_12927;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12921__$1,inst_12919);
} else
{if((state_val_12922 === 4))
{var state_12921__$1 = state_12921;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12921__$1,7,ch);
} else
{if((state_val_12922 === 5))
{var state_12921__$1 = state_12921;var statearr_12928_12948 = state_12921__$1;(statearr_12928_12948[2] = null);
(statearr_12928_12948[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12922 === 6))
{var inst_12916 = (state_12921[2]);var state_12921__$1 = state_12921;var statearr_12929_12949 = state_12921__$1;(statearr_12929_12949[2] = inst_12916);
(statearr_12929_12949[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12922 === 7))
{var inst_12903 = (state_12921[9]);var inst_12903__$1 = (state_12921[2]);var inst_12904 = (inst_12903__$1 == null);var inst_12905 = cljs.core.not.call(null,inst_12904);var state_12921__$1 = (function (){var statearr_12930 = state_12921;(statearr_12930[9] = inst_12903__$1);
return statearr_12930;
})();if(inst_12905)
{var statearr_12931_12950 = state_12921__$1;(statearr_12931_12950[1] = 8);
} else
{var statearr_12932_12951 = state_12921__$1;(statearr_12932_12951[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12922 === 8))
{var inst_12903 = (state_12921[9]);var state_12921__$1 = state_12921;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12921__$1,11,out,inst_12903);
} else
{if((state_val_12922 === 9))
{var state_12921__$1 = state_12921;var statearr_12933_12952 = state_12921__$1;(statearr_12933_12952[2] = null);
(statearr_12933_12952[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12922 === 10))
{var inst_12913 = (state_12921[2]);var state_12921__$1 = state_12921;var statearr_12934_12953 = state_12921__$1;(statearr_12934_12953[2] = inst_12913);
(statearr_12934_12953[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12922 === 11))
{var inst_12898 = (state_12921[7]);var inst_12908 = (state_12921[2]);var inst_12909 = (inst_12898 + 1);var inst_12898__$1 = inst_12909;var state_12921__$1 = (function (){var statearr_12935 = state_12921;(statearr_12935[7] = inst_12898__$1);
(statearr_12935[10] = inst_12908);
return statearr_12935;
})();var statearr_12936_12954 = state_12921__$1;(statearr_12936_12954[2] = null);
(statearr_12936_12954[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5564__auto__){
return (function() {
var state_machine__5565__auto__ = null;
var state_machine__5565__auto____0 = (function (){var statearr_12940 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12940[0] = state_machine__5565__auto__);
(statearr_12940[1] = 1);
return statearr_12940;
});
var state_machine__5565__auto____1 = (function (state_12921){while(true){
var ret_value__5566__auto__ = (function (){try{while(true){
var result__5567__auto__ = switch__5564__auto__.call(null,state_12921);if(cljs.core.keyword_identical_QMARK_.call(null,result__5567__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5567__auto__;
}
break;
}
}catch (e12941){if((e12941 instanceof Object))
{var ex__5568__auto__ = e12941;var statearr_12942_12955 = state_12921;(statearr_12942_12955[5] = ex__5568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12921);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12941;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5566__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12956 = state_12921;
state_12921 = G__12956;
continue;
}
} else
{return ret_value__5566__auto__;
}
break;
}
});
state_machine__5565__auto__ = function(state_12921){
switch(arguments.length){
case 0:
return state_machine__5565__auto____0.call(this);
case 1:
return state_machine__5565__auto____1.call(this,state_12921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5565__auto____0;
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5565__auto____1;
return state_machine__5565__auto__;
})()
;})(switch__5564__auto__))
})();var state__5581__auto__ = (function (){var statearr_12943 = f__5580__auto__.call(null);(statearr_12943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5579__auto___12944);
return statearr_12943;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5581__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5579__auto___13053 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5580__auto__ = (function (){var switch__5564__auto__ = (function (state_13028){var state_val_13029 = (state_13028[1]);if((state_val_13029 === 1))
{var inst_13005 = null;var state_13028__$1 = (function (){var statearr_13030 = state_13028;(statearr_13030[7] = inst_13005);
return statearr_13030;
})();var statearr_13031_13054 = state_13028__$1;(statearr_13031_13054[2] = null);
(statearr_13031_13054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13029 === 2))
{var state_13028__$1 = state_13028;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13028__$1,4,ch);
} else
{if((state_val_13029 === 3))
{var inst_13025 = (state_13028[2]);var inst_13026 = cljs.core.async.close_BANG_.call(null,out);var state_13028__$1 = (function (){var statearr_13032 = state_13028;(statearr_13032[8] = inst_13025);
return statearr_13032;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13028__$1,inst_13026);
} else
{if((state_val_13029 === 4))
{var inst_13008 = (state_13028[9]);var inst_13008__$1 = (state_13028[2]);var inst_13009 = (inst_13008__$1 == null);var inst_13010 = cljs.core.not.call(null,inst_13009);var state_13028__$1 = (function (){var statearr_13033 = state_13028;(statearr_13033[9] = inst_13008__$1);
return statearr_13033;
})();if(inst_13010)
{var statearr_13034_13055 = state_13028__$1;(statearr_13034_13055[1] = 5);
} else
{var statearr_13035_13056 = state_13028__$1;(statearr_13035_13056[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13029 === 5))
{var inst_13005 = (state_13028[7]);var inst_13008 = (state_13028[9]);var inst_13012 = cljs.core._EQ_.call(null,inst_13008,inst_13005);var state_13028__$1 = state_13028;if(inst_13012)
{var statearr_13036_13057 = state_13028__$1;(statearr_13036_13057[1] = 8);
} else
{var statearr_13037_13058 = state_13028__$1;(statearr_13037_13058[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13029 === 6))
{var state_13028__$1 = state_13028;var statearr_13039_13059 = state_13028__$1;(statearr_13039_13059[2] = null);
(statearr_13039_13059[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13029 === 7))
{var inst_13023 = (state_13028[2]);var state_13028__$1 = state_13028;var statearr_13040_13060 = state_13028__$1;(statearr_13040_13060[2] = inst_13023);
(statearr_13040_13060[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13029 === 8))
{var inst_13005 = (state_13028[7]);var tmp13038 = inst_13005;var inst_13005__$1 = tmp13038;var state_13028__$1 = (function (){var statearr_13041 = state_13028;(statearr_13041[7] = inst_13005__$1);
return statearr_13041;
})();var statearr_13042_13061 = state_13028__$1;(statearr_13042_13061[2] = null);
(statearr_13042_13061[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13029 === 9))
{var inst_13008 = (state_13028[9]);var state_13028__$1 = state_13028;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13028__$1,11,out,inst_13008);
} else
{if((state_val_13029 === 10))
{var inst_13020 = (state_13028[2]);var state_13028__$1 = state_13028;var statearr_13043_13062 = state_13028__$1;(statearr_13043_13062[2] = inst_13020);
(statearr_13043_13062[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13029 === 11))
{var inst_13008 = (state_13028[9]);var inst_13017 = (state_13028[2]);var inst_13005 = inst_13008;var state_13028__$1 = (function (){var statearr_13044 = state_13028;(statearr_13044[7] = inst_13005);
(statearr_13044[10] = inst_13017);
return statearr_13044;
})();var statearr_13045_13063 = state_13028__$1;(statearr_13045_13063[2] = null);
(statearr_13045_13063[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5564__auto__){
return (function() {
var state_machine__5565__auto__ = null;
var state_machine__5565__auto____0 = (function (){var statearr_13049 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13049[0] = state_machine__5565__auto__);
(statearr_13049[1] = 1);
return statearr_13049;
});
var state_machine__5565__auto____1 = (function (state_13028){while(true){
var ret_value__5566__auto__ = (function (){try{while(true){
var result__5567__auto__ = switch__5564__auto__.call(null,state_13028);if(cljs.core.keyword_identical_QMARK_.call(null,result__5567__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5567__auto__;
}
break;
}
}catch (e13050){if((e13050 instanceof Object))
{var ex__5568__auto__ = e13050;var statearr_13051_13064 = state_13028;(statearr_13051_13064[5] = ex__5568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13028);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5566__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13065 = state_13028;
state_13028 = G__13065;
continue;
}
} else
{return ret_value__5566__auto__;
}
break;
}
});
state_machine__5565__auto__ = function(state_13028){
switch(arguments.length){
case 0:
return state_machine__5565__auto____0.call(this);
case 1:
return state_machine__5565__auto____1.call(this,state_13028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5565__auto____0;
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5565__auto____1;
return state_machine__5565__auto__;
})()
;})(switch__5564__auto__))
})();var state__5581__auto__ = (function (){var statearr_13052 = f__5580__auto__.call(null);(statearr_13052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5579__auto___13053);
return statearr_13052;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5581__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5579__auto___13200 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5580__auto__ = (function (){var switch__5564__auto__ = (function (state_13170){var state_val_13171 = (state_13170[1]);if((state_val_13171 === 1))
{var inst_13133 = (new Array(n));var inst_13134 = inst_13133;var inst_13135 = 0;var state_13170__$1 = (function (){var statearr_13172 = state_13170;(statearr_13172[7] = inst_13134);
(statearr_13172[8] = inst_13135);
return statearr_13172;
})();var statearr_13173_13201 = state_13170__$1;(statearr_13173_13201[2] = null);
(statearr_13173_13201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 2))
{var state_13170__$1 = state_13170;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13170__$1,4,ch);
} else
{if((state_val_13171 === 3))
{var inst_13168 = (state_13170[2]);var state_13170__$1 = state_13170;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13170__$1,inst_13168);
} else
{if((state_val_13171 === 4))
{var inst_13138 = (state_13170[9]);var inst_13138__$1 = (state_13170[2]);var inst_13139 = (inst_13138__$1 == null);var inst_13140 = cljs.core.not.call(null,inst_13139);var state_13170__$1 = (function (){var statearr_13174 = state_13170;(statearr_13174[9] = inst_13138__$1);
return statearr_13174;
})();if(inst_13140)
{var statearr_13175_13202 = state_13170__$1;(statearr_13175_13202[1] = 5);
} else
{var statearr_13176_13203 = state_13170__$1;(statearr_13176_13203[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 5))
{var inst_13134 = (state_13170[7]);var inst_13143 = (state_13170[10]);var inst_13138 = (state_13170[9]);var inst_13135 = (state_13170[8]);var inst_13142 = (inst_13134[inst_13135] = inst_13138);var inst_13143__$1 = (inst_13135 + 1);var inst_13144 = (inst_13143__$1 < n);var state_13170__$1 = (function (){var statearr_13177 = state_13170;(statearr_13177[11] = inst_13142);
(statearr_13177[10] = inst_13143__$1);
return statearr_13177;
})();if(cljs.core.truth_(inst_13144))
{var statearr_13178_13204 = state_13170__$1;(statearr_13178_13204[1] = 8);
} else
{var statearr_13179_13205 = state_13170__$1;(statearr_13179_13205[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 6))
{var inst_13135 = (state_13170[8]);var inst_13156 = (inst_13135 > 0);var state_13170__$1 = state_13170;if(cljs.core.truth_(inst_13156))
{var statearr_13181_13206 = state_13170__$1;(statearr_13181_13206[1] = 12);
} else
{var statearr_13182_13207 = state_13170__$1;(statearr_13182_13207[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 7))
{var inst_13166 = (state_13170[2]);var state_13170__$1 = state_13170;var statearr_13183_13208 = state_13170__$1;(statearr_13183_13208[2] = inst_13166);
(statearr_13183_13208[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 8))
{var inst_13134 = (state_13170[7]);var inst_13143 = (state_13170[10]);var tmp13180 = inst_13134;var inst_13134__$1 = tmp13180;var inst_13135 = inst_13143;var state_13170__$1 = (function (){var statearr_13184 = state_13170;(statearr_13184[7] = inst_13134__$1);
(statearr_13184[8] = inst_13135);
return statearr_13184;
})();var statearr_13185_13209 = state_13170__$1;(statearr_13185_13209[2] = null);
(statearr_13185_13209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 9))
{var inst_13134 = (state_13170[7]);var inst_13148 = cljs.core.vec.call(null,inst_13134);var state_13170__$1 = state_13170;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13170__$1,11,out,inst_13148);
} else
{if((state_val_13171 === 10))
{var inst_13154 = (state_13170[2]);var state_13170__$1 = state_13170;var statearr_13186_13210 = state_13170__$1;(statearr_13186_13210[2] = inst_13154);
(statearr_13186_13210[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 11))
{var inst_13150 = (state_13170[2]);var inst_13151 = (new Array(n));var inst_13134 = inst_13151;var inst_13135 = 0;var state_13170__$1 = (function (){var statearr_13187 = state_13170;(statearr_13187[12] = inst_13150);
(statearr_13187[7] = inst_13134);
(statearr_13187[8] = inst_13135);
return statearr_13187;
})();var statearr_13188_13211 = state_13170__$1;(statearr_13188_13211[2] = null);
(statearr_13188_13211[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 12))
{var inst_13134 = (state_13170[7]);var inst_13158 = cljs.core.vec.call(null,inst_13134);var state_13170__$1 = state_13170;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13170__$1,15,out,inst_13158);
} else
{if((state_val_13171 === 13))
{var state_13170__$1 = state_13170;var statearr_13189_13212 = state_13170__$1;(statearr_13189_13212[2] = null);
(statearr_13189_13212[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 14))
{var inst_13163 = (state_13170[2]);var inst_13164 = cljs.core.async.close_BANG_.call(null,out);var state_13170__$1 = (function (){var statearr_13190 = state_13170;(statearr_13190[13] = inst_13163);
return statearr_13190;
})();var statearr_13191_13213 = state_13170__$1;(statearr_13191_13213[2] = inst_13164);
(statearr_13191_13213[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 15))
{var inst_13160 = (state_13170[2]);var state_13170__$1 = state_13170;var statearr_13192_13214 = state_13170__$1;(statearr_13192_13214[2] = inst_13160);
(statearr_13192_13214[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5564__auto__){
return (function() {
var state_machine__5565__auto__ = null;
var state_machine__5565__auto____0 = (function (){var statearr_13196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13196[0] = state_machine__5565__auto__);
(statearr_13196[1] = 1);
return statearr_13196;
});
var state_machine__5565__auto____1 = (function (state_13170){while(true){
var ret_value__5566__auto__ = (function (){try{while(true){
var result__5567__auto__ = switch__5564__auto__.call(null,state_13170);if(cljs.core.keyword_identical_QMARK_.call(null,result__5567__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5567__auto__;
}
break;
}
}catch (e13197){if((e13197 instanceof Object))
{var ex__5568__auto__ = e13197;var statearr_13198_13215 = state_13170;(statearr_13198_13215[5] = ex__5568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13170);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13197;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5566__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13216 = state_13170;
state_13170 = G__13216;
continue;
}
} else
{return ret_value__5566__auto__;
}
break;
}
});
state_machine__5565__auto__ = function(state_13170){
switch(arguments.length){
case 0:
return state_machine__5565__auto____0.call(this);
case 1:
return state_machine__5565__auto____1.call(this,state_13170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5565__auto____0;
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5565__auto____1;
return state_machine__5565__auto__;
})()
;})(switch__5564__auto__))
})();var state__5581__auto__ = (function (){var statearr_13199 = f__5580__auto__.call(null);(statearr_13199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5579__auto___13200);
return statearr_13199;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5581__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5579__auto___13359 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5580__auto__ = (function (){var switch__5564__auto__ = (function (state_13329){var state_val_13330 = (state_13329[1]);if((state_val_13330 === 1))
{var inst_13288 = [];var inst_13289 = inst_13288;var inst_13290 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13329__$1 = (function (){var statearr_13331 = state_13329;(statearr_13331[7] = inst_13289);
(statearr_13331[8] = inst_13290);
return statearr_13331;
})();var statearr_13332_13360 = state_13329__$1;(statearr_13332_13360[2] = null);
(statearr_13332_13360[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13330 === 2))
{var state_13329__$1 = state_13329;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13329__$1,4,ch);
} else
{if((state_val_13330 === 3))
{var inst_13327 = (state_13329[2]);var state_13329__$1 = state_13329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13329__$1,inst_13327);
} else
{if((state_val_13330 === 4))
{var inst_13293 = (state_13329[9]);var inst_13293__$1 = (state_13329[2]);var inst_13294 = (inst_13293__$1 == null);var inst_13295 = cljs.core.not.call(null,inst_13294);var state_13329__$1 = (function (){var statearr_13333 = state_13329;(statearr_13333[9] = inst_13293__$1);
return statearr_13333;
})();if(inst_13295)
{var statearr_13334_13361 = state_13329__$1;(statearr_13334_13361[1] = 5);
} else
{var statearr_13335_13362 = state_13329__$1;(statearr_13335_13362[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13330 === 5))
{var inst_13290 = (state_13329[8]);var inst_13297 = (state_13329[10]);var inst_13293 = (state_13329[9]);var inst_13297__$1 = f.call(null,inst_13293);var inst_13298 = cljs.core._EQ_.call(null,inst_13297__$1,inst_13290);var inst_13299 = cljs.core.keyword_identical_QMARK_.call(null,inst_13290,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13300 = (inst_13298) || (inst_13299);var state_13329__$1 = (function (){var statearr_13336 = state_13329;(statearr_13336[10] = inst_13297__$1);
return statearr_13336;
})();if(cljs.core.truth_(inst_13300))
{var statearr_13337_13363 = state_13329__$1;(statearr_13337_13363[1] = 8);
} else
{var statearr_13338_13364 = state_13329__$1;(statearr_13338_13364[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13330 === 6))
{var inst_13289 = (state_13329[7]);var inst_13314 = inst_13289.length;var inst_13315 = (inst_13314 > 0);var state_13329__$1 = state_13329;if(cljs.core.truth_(inst_13315))
{var statearr_13340_13365 = state_13329__$1;(statearr_13340_13365[1] = 12);
} else
{var statearr_13341_13366 = state_13329__$1;(statearr_13341_13366[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13330 === 7))
{var inst_13325 = (state_13329[2]);var state_13329__$1 = state_13329;var statearr_13342_13367 = state_13329__$1;(statearr_13342_13367[2] = inst_13325);
(statearr_13342_13367[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13330 === 8))
{var inst_13289 = (state_13329[7]);var inst_13297 = (state_13329[10]);var inst_13293 = (state_13329[9]);var inst_13302 = inst_13289.push(inst_13293);var tmp13339 = inst_13289;var inst_13289__$1 = tmp13339;var inst_13290 = inst_13297;var state_13329__$1 = (function (){var statearr_13343 = state_13329;(statearr_13343[7] = inst_13289__$1);
(statearr_13343[8] = inst_13290);
(statearr_13343[11] = inst_13302);
return statearr_13343;
})();var statearr_13344_13368 = state_13329__$1;(statearr_13344_13368[2] = null);
(statearr_13344_13368[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13330 === 9))
{var inst_13289 = (state_13329[7]);var inst_13305 = cljs.core.vec.call(null,inst_13289);var state_13329__$1 = state_13329;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13329__$1,11,out,inst_13305);
} else
{if((state_val_13330 === 10))
{var inst_13312 = (state_13329[2]);var state_13329__$1 = state_13329;var statearr_13345_13369 = state_13329__$1;(statearr_13345_13369[2] = inst_13312);
(statearr_13345_13369[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13330 === 11))
{var inst_13297 = (state_13329[10]);var inst_13293 = (state_13329[9]);var inst_13307 = (state_13329[2]);var inst_13308 = [];var inst_13309 = inst_13308.push(inst_13293);var inst_13289 = inst_13308;var inst_13290 = inst_13297;var state_13329__$1 = (function (){var statearr_13346 = state_13329;(statearr_13346[7] = inst_13289);
(statearr_13346[8] = inst_13290);
(statearr_13346[12] = inst_13307);
(statearr_13346[13] = inst_13309);
return statearr_13346;
})();var statearr_13347_13370 = state_13329__$1;(statearr_13347_13370[2] = null);
(statearr_13347_13370[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13330 === 12))
{var inst_13289 = (state_13329[7]);var inst_13317 = cljs.core.vec.call(null,inst_13289);var state_13329__$1 = state_13329;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13329__$1,15,out,inst_13317);
} else
{if((state_val_13330 === 13))
{var state_13329__$1 = state_13329;var statearr_13348_13371 = state_13329__$1;(statearr_13348_13371[2] = null);
(statearr_13348_13371[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13330 === 14))
{var inst_13322 = (state_13329[2]);var inst_13323 = cljs.core.async.close_BANG_.call(null,out);var state_13329__$1 = (function (){var statearr_13349 = state_13329;(statearr_13349[14] = inst_13322);
return statearr_13349;
})();var statearr_13350_13372 = state_13329__$1;(statearr_13350_13372[2] = inst_13323);
(statearr_13350_13372[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13330 === 15))
{var inst_13319 = (state_13329[2]);var state_13329__$1 = state_13329;var statearr_13351_13373 = state_13329__$1;(statearr_13351_13373[2] = inst_13319);
(statearr_13351_13373[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5564__auto__){
return (function() {
var state_machine__5565__auto__ = null;
var state_machine__5565__auto____0 = (function (){var statearr_13355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13355[0] = state_machine__5565__auto__);
(statearr_13355[1] = 1);
return statearr_13355;
});
var state_machine__5565__auto____1 = (function (state_13329){while(true){
var ret_value__5566__auto__ = (function (){try{while(true){
var result__5567__auto__ = switch__5564__auto__.call(null,state_13329);if(cljs.core.keyword_identical_QMARK_.call(null,result__5567__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5567__auto__;
}
break;
}
}catch (e13356){if((e13356 instanceof Object))
{var ex__5568__auto__ = e13356;var statearr_13357_13374 = state_13329;(statearr_13357_13374[5] = ex__5568__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13329);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5566__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13375 = state_13329;
state_13329 = G__13375;
continue;
}
} else
{return ret_value__5566__auto__;
}
break;
}
});
state_machine__5565__auto__ = function(state_13329){
switch(arguments.length){
case 0:
return state_machine__5565__auto____0.call(this);
case 1:
return state_machine__5565__auto____1.call(this,state_13329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5565__auto____0;
state_machine__5565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5565__auto____1;
return state_machine__5565__auto__;
})()
;})(switch__5564__auto__))
})();var state__5581__auto__ = (function (){var statearr_13358 = f__5580__auto__.call(null);(statearr_13358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5579__auto___13359);
return statearr_13358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5581__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const i of u.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(a){if(a.ep)return;a.ep=!0;const u=l(a);fetch(a.href,u)}})();var s_={exports:{}},Au={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0=Symbol.for("react.transitional.element"),d0=Symbol.for("react.fragment");function o_(t,e,l){var n=null;if(l!==void 0&&(n=""+l),e.key!==void 0&&(n=""+e.key),"key"in e){l={};for(var a in e)a!=="key"&&(l[a]=e[a])}else l=e;return e=l.ref,{$$typeof:r0,type:t,key:n,ref:e!==void 0?e:null,props:l}}Au.Fragment=d0;Au.jsx=o_;Au.jsxs=o_;s_.exports=Au;var b=s_.exports,c_={exports:{}},O={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Os=Symbol.for("react.transitional.element"),m0=Symbol.for("react.portal"),y0=Symbol.for("react.fragment"),g0=Symbol.for("react.strict_mode"),h0=Symbol.for("react.profiler"),p0=Symbol.for("react.consumer"),b0=Symbol.for("react.context"),v0=Symbol.for("react.forward_ref"),x0=Symbol.for("react.suspense"),S0=Symbol.for("react.memo"),__=Symbol.for("react.lazy"),z0=Symbol.for("react.activity"),Yo=Symbol.iterator;function A0(t){return t===null||typeof t!="object"?null:(t=Yo&&t[Yo]||t["@@iterator"],typeof t=="function"?t:null)}var f_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r_=Object.assign,d_={};function on(t,e,l){this.props=t,this.context=e,this.refs=d_,this.updater=l||f_}on.prototype.isReactComponent={};on.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};on.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function m_(){}m_.prototype=on.prototype;function Ms(t,e,l){this.props=t,this.context=e,this.refs=d_,this.updater=l||f_}var Ys=Ms.prototype=new m_;Ys.constructor=Ms;r_(Ys,on.prototype);Ys.isPureReactComponent=!0;var Co=Array.isArray;function Yi(){}var P={H:null,A:null,T:null,S:null},y_=Object.prototype.hasOwnProperty;function Cs(t,e,l){var n=l.ref;return{$$typeof:Os,type:t,key:e,ref:n!==void 0?n:null,props:l}}function T0(t,e){return Cs(t.type,e,t.props)}function Us(t){return typeof t=="object"&&t!==null&&t.$$typeof===Os}function E0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(l){return e[l]})}var Uo=/\/+/g;function Zu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?E0(""+t.key):e.toString(36)}function O0(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Yi,Yi):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Ml(t,e,l,n,a){var u=typeof t;(u==="undefined"||u==="boolean")&&(t=null);var i=!1;if(t===null)i=!0;else switch(u){case"bigint":case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case Os:case m0:i=!0;break;case __:return i=t._init,Ml(i(t._payload),e,l,n,a)}}if(i)return a=a(t),i=n===""?"."+Zu(t,0):n,Co(a)?(l="",i!=null&&(l=i.replace(Uo,"$&/")+"/"),Ml(a,e,l,"",function(r){return r})):a!=null&&(Us(a)&&(a=T0(a,l+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(Uo,"$&/")+"/")+i)),e.push(a)),1;i=0;var s=n===""?".":n+":";if(Co(t))for(var o=0;o<t.length;o++)n=t[o],u=s+Zu(n,o),i+=Ml(n,e,l,u,a);else if(o=A0(t),typeof o=="function")for(t=o.call(t),o=0;!(n=t.next()).done;)n=n.value,u=s+Zu(n,o++),i+=Ml(n,e,l,u,a);else if(u==="object"){if(typeof t.then=="function")return Ml(O0(t),e,l,n,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return i}function pa(t,e,l){if(t==null)return t;var n=[],a=0;return Ml(t,n,"","",function(u){return e.call(l,u,a++)}),n}function M0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(l){(t._status===0||t._status===-1)&&(t._status=1,t._result=l)},function(l){(t._status===0||t._status===-1)&&(t._status=2,t._result=l)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var No=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Y0={map:pa,forEach:function(t,e,l){pa(t,function(){e.apply(this,arguments)},l)},count:function(t){var e=0;return pa(t,function(){e++}),e},toArray:function(t){return pa(t,function(e){return e})||[]},only:function(t){if(!Us(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};O.Activity=z0;O.Children=Y0;O.Component=on;O.Fragment=y0;O.Profiler=h0;O.PureComponent=Ms;O.StrictMode=g0;O.Suspense=x0;O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P;O.__COMPILER_RUNTIME={__proto__:null,c:function(t){return P.H.useMemoCache(t)}};O.cache=function(t){return function(){return t.apply(null,arguments)}};O.cacheSignal=function(){return null};O.cloneElement=function(t,e,l){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var n=r_({},t.props),a=t.key;if(e!=null)for(u in e.key!==void 0&&(a=""+e.key),e)!y_.call(e,u)||u==="key"||u==="__self"||u==="__source"||u==="ref"&&e.ref===void 0||(n[u]=e[u]);var u=arguments.length-2;if(u===1)n.children=l;else if(1<u){for(var i=Array(u),s=0;s<u;s++)i[s]=arguments[s+2];n.children=i}return Cs(t.type,a,n)};O.createContext=function(t){return t={$$typeof:b0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:p0,_context:t},t};O.createElement=function(t,e,l){var n,a={},u=null;if(e!=null)for(n in e.key!==void 0&&(u=""+e.key),e)y_.call(e,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(a[n]=e[n]);var i=arguments.length-2;if(i===1)a.children=l;else if(1<i){for(var s=Array(i),o=0;o<i;o++)s[o]=arguments[o+2];a.children=s}if(t&&t.defaultProps)for(n in i=t.defaultProps,i)a[n]===void 0&&(a[n]=i[n]);return Cs(t,u,a)};O.createRef=function(){return{current:null}};O.forwardRef=function(t){return{$$typeof:v0,render:t}};O.isValidElement=Us;O.lazy=function(t){return{$$typeof:__,_payload:{_status:-1,_result:t},_init:M0}};O.memo=function(t,e){return{$$typeof:S0,type:t,compare:e===void 0?null:e}};O.startTransition=function(t){var e=P.T,l={};P.T=l;try{var n=t(),a=P.S;a!==null&&a(l,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(Yi,No)}catch(u){No(u)}finally{e!==null&&l.types!==null&&(e.types=l.types),P.T=e}};O.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()};O.use=function(t){return P.H.use(t)};O.useActionState=function(t,e,l){return P.H.useActionState(t,e,l)};O.useCallback=function(t,e){return P.H.useCallback(t,e)};O.useContext=function(t){return P.H.useContext(t)};O.useDebugValue=function(){};O.useDeferredValue=function(t,e){return P.H.useDeferredValue(t,e)};O.useEffect=function(t,e){return P.H.useEffect(t,e)};O.useEffectEvent=function(t){return P.H.useEffectEvent(t)};O.useId=function(){return P.H.useId()};O.useImperativeHandle=function(t,e,l){return P.H.useImperativeHandle(t,e,l)};O.useInsertionEffect=function(t,e){return P.H.useInsertionEffect(t,e)};O.useLayoutEffect=function(t,e){return P.H.useLayoutEffect(t,e)};O.useMemo=function(t,e){return P.H.useMemo(t,e)};O.useOptimistic=function(t,e){return P.H.useOptimistic(t,e)};O.useReducer=function(t,e,l){return P.H.useReducer(t,e,l)};O.useRef=function(t){return P.H.useRef(t)};O.useState=function(t){return P.H.useState(t)};O.useSyncExternalStore=function(t,e,l){return P.H.useSyncExternalStore(t,e,l)};O.useTransition=function(){return P.H.useTransition()};O.version="19.2.4";c_.exports=O;var Q=c_.exports,g_={exports:{}},Tu={},h_={exports:{}},p_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(S,w){var D=S.length;S.push(w);t:for(;0<D;){var U=D-1>>>1,F=S[U];if(0<a(F,w))S[U]=w,S[D]=F,D=U;else break t}}function l(S){return S.length===0?null:S[0]}function n(S){if(S.length===0)return null;var w=S[0],D=S.pop();if(D!==w){S[0]=D;t:for(var U=0,F=S.length,Zt=F>>>1;U<Zt;){var ga=2*(U+1)-1,Gu=S[ga],al=ga+1,ha=S[al];if(0>a(Gu,D))al<F&&0>a(ha,Gu)?(S[U]=ha,S[al]=D,U=al):(S[U]=Gu,S[ga]=D,U=ga);else if(al<F&&0>a(ha,D))S[U]=ha,S[al]=D,U=al;else break t}}return w}function a(S,w){var D=S.sortIndex-w.sortIndex;return D!==0?D:S.id-w.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var i=Date,s=i.now();t.unstable_now=function(){return i.now()-s}}var o=[],r=[],m=1,g=null,f=3,y=!1,v=!1,A=!1,j=!1,_=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;function h(S){for(var w=l(r);w!==null;){if(w.callback===null)n(r);else if(w.startTime<=S)n(r),w.sortIndex=w.expirationTime,e(o,w);else break;w=l(r)}}function z(S){if(A=!1,h(S),!v)if(l(o)!==null)v=!0,Y||(Y=!0,Gt());else{var w=l(r);w!==null&&nl(z,w.startTime-S)}}var Y=!1,x=-1,T=5,C=-1;function N(){return j?!0:!(t.unstable_now()-C<T)}function Tt(){if(j=!1,Y){var S=t.unstable_now();C=S;var w=!0;try{t:{v=!1,A&&(A=!1,c(x),x=-1),y=!0;var D=f;try{e:{for(h(S),g=l(o);g!==null&&!(g.expirationTime>S&&N());){var U=g.callback;if(typeof U=="function"){g.callback=null,f=g.priorityLevel;var F=U(g.expirationTime<=S);if(S=t.unstable_now(),typeof F=="function"){g.callback=F,h(S),w=!0;break e}g===l(o)&&n(o),h(S)}else n(o);g=l(o)}if(g!==null)w=!0;else{var Zt=l(r);Zt!==null&&nl(z,Zt.startTime-S),w=!1}}break t}finally{g=null,f=D,y=!1}w=void 0}}finally{w?Gt():Y=!1}}}var Gt;if(typeof d=="function")Gt=function(){d(Tt)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,ya=Ye.port2;Ye.port1.onmessage=Tt,Gt=function(){ya.postMessage(null)}}else Gt=function(){_(Tt,0)};function nl(S,w){x=_(function(){S(t.unstable_now())},w)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(S){S.callback=null},t.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<S?Math.floor(1e3/S):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(S){switch(f){case 1:case 2:case 3:var w=3;break;default:w=f}var D=f;f=w;try{return S()}finally{f=D}},t.unstable_requestPaint=function(){j=!0},t.unstable_runWithPriority=function(S,w){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var D=f;f=S;try{return w()}finally{f=D}},t.unstable_scheduleCallback=function(S,w,D){var U=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?U+D:U):D=U,S){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=D+F,S={id:m++,callback:w,priorityLevel:S,startTime:D,expirationTime:F,sortIndex:-1},D>U?(S.sortIndex=D,e(r,S),l(o)===null&&S===l(r)&&(A?(c(x),x=-1):A=!0,nl(z,D-U))):(S.sortIndex=F,e(o,S),v||y||(v=!0,Y||(Y=!0,Gt()))),S},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(S){var w=f;return function(){var D=f;f=w;try{return S.apply(this,arguments)}finally{f=D}}}})(p_);h_.exports=p_;var C0=h_.exports,b_={exports:{}},At={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=Q;function v_(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ce(){}var zt={d:{f:Ce,r:function(){throw Error(v_(522))},D:Ce,C:Ce,L:Ce,m:Ce,X:Ce,S:Ce,M:Ce},p:0,findDOMNode:null},N0=Symbol.for("react.portal");function D0(t,e,l){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N0,key:n==null?null:""+n,children:t,containerInfo:e,implementation:l}}var Yn=U0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Eu(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=zt;At.createPortal=function(t,e){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(v_(299));return D0(t,e,null,l)};At.flushSync=function(t){var e=Yn.T,l=zt.p;try{if(Yn.T=null,zt.p=2,t)return t()}finally{Yn.T=e,zt.p=l,zt.d.f()}};At.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,zt.d.C(t,e))};At.prefetchDNS=function(t){typeof t=="string"&&zt.d.D(t)};At.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var l=e.as,n=Eu(l,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,u=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;l==="style"?zt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:n,integrity:a,fetchPriority:u}):l==="script"&&zt.d.X(t,{crossOrigin:n,integrity:a,fetchPriority:u,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};At.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var l=Eu(e.as,e.crossOrigin);zt.d.M(t,{crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&zt.d.M(t)};At.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var l=e.as,n=Eu(l,e.crossOrigin);zt.d.L(t,l,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};At.preloadModule=function(t,e){if(typeof t=="string")if(e){var l=Eu(e.as,e.crossOrigin);zt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else zt.d.m(t)};At.requestFormReset=function(t){zt.d.r(t)};At.unstable_batchedUpdates=function(t,e){return t(e)};At.useFormState=function(t,e,l){return Yn.H.useFormState(t,e,l)};At.useFormStatus=function(){return Yn.H.useHostTransitionStatus()};At.version="19.2.4";function x_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x_)}catch(t){console.error(t)}}x_(),b_.exports=At;var S_=b_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt=C0,z_=Q,j0=S_;function p(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function na(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function T_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function E_(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Do(t){if(na(t)!==t)throw Error(p(188))}function w0(t){var e=t.alternate;if(!e){if(e=na(t),e===null)throw Error(p(188));return e!==t?null:t}for(var l=t,n=e;;){var a=l.return;if(a===null)break;var u=a.alternate;if(u===null){if(n=a.return,n!==null){l=n;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===l)return Do(a),t;if(u===n)return Do(a),e;u=u.sibling}throw Error(p(188))}if(l.return!==n.return)l=a,n=u;else{for(var i=!1,s=a.child;s;){if(s===l){i=!0,l=a,n=u;break}if(s===n){i=!0,n=a,l=u;break}s=s.sibling}if(!i){for(s=u.child;s;){if(s===l){i=!0,l=u,n=a;break}if(s===n){i=!0,n=u,l=a;break}s=s.sibling}if(!i)throw Error(p(189))}}if(l.alternate!==n)throw Error(p(190))}if(l.tag!==3)throw Error(p(188));return l.stateNode.current===l?t:e}function O_(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=O_(t),e!==null)return e;t=t.sibling}return null}var tt=Object.assign,B0=Symbol.for("react.element"),ba=Symbol.for("react.transitional.element"),An=Symbol.for("react.portal"),Ul=Symbol.for("react.fragment"),M_=Symbol.for("react.strict_mode"),Ci=Symbol.for("react.profiler"),Y_=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Ns=Symbol.for("react.forward_ref"),Ui=Symbol.for("react.suspense"),Ni=Symbol.for("react.suspense_list"),Ds=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Di=Symbol.for("react.activity"),H0=Symbol.for("react.memo_cache_sentinel"),jo=Symbol.iterator;function gn(t){return t===null||typeof t!="object"?null:(t=jo&&t[jo]||t["@@iterator"],typeof t=="function"?t:null)}var X0=Symbol.for("react.client.reference");function ji(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===X0?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ul:return"Fragment";case Ci:return"Profiler";case M_:return"StrictMode";case Ui:return"Suspense";case Ni:return"SuspenseList";case Di:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case An:return"Portal";case he:return t.displayName||"Context";case Y_:return(t._context.displayName||"Context")+".Consumer";case Ns:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ds:return e=t.displayName||null,e!==null?e:ji(t.type)||"Memo";case Ue:e=t._payload,t=t._init;try{return ji(t(e))}catch{}}return null}var Tn=Array.isArray,E=z_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=j0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_l={pending:!1,data:null,method:null,action:null},wi=[],Nl=-1;function oe(t){return{current:t}}function yt(t){0>Nl||(t.current=wi[Nl],wi[Nl]=null,Nl--)}function W(t,e){Nl++,wi[Nl]=t.current,t.current=e}var se=oe(null),Gn=oe(null),qe=oe(null),Wa=oe(null);function Fa(t,e){switch(W(qe,e),W(Gn,t),W(se,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Qc(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Qc(e),t=Fr(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}yt(se),W(se,t)}function Fl(){yt(se),yt(Gn),yt(qe)}function Bi(t){t.memoizedState!==null&&W(Wa,t);var e=se.current,l=Fr(e,t.type);e!==l&&(W(Gn,t),W(se,l))}function $a(t){Gn.current===t&&(yt(se),yt(Gn)),Wa.current===t&&(yt(Wa),ta._currentValue=_l)}var ku,wo;function il(t){if(ku===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);ku=e&&e[1]||"",wo=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ku+t+wo}var Vu=!1;function Ju(t,e){if(!t||Vu)return"";Vu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(y){var f=y}Reflect.construct(t,[],g)}else{try{g.call()}catch(y){f=y}t.call(g.prototype)}}else{try{throw Error()}catch(y){f=y}(g=t())&&typeof g.catch=="function"&&g.catch(function(){})}}catch(y){if(y&&f&&typeof y.stack=="string")return[y.stack,f.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),i=u[0],s=u[1];if(i&&s){var o=i.split(`
`),r=s.split(`
`);for(a=n=0;n<o.length&&!o[n].includes("DetermineComponentFrameRoot");)n++;for(;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;if(n===o.length||a===r.length)for(n=o.length-1,a=r.length-1;1<=n&&0<=a&&o[n]!==r[a];)a--;for(;1<=n&&0<=a;n--,a--)if(o[n]!==r[a]){if(n!==1||a!==1)do if(n--,a--,0>a||o[n]!==r[a]){var m=`
`+o[n].replace(" at new "," at ");return t.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",t.displayName)),m}while(1<=n&&0<=a);break}}}finally{Vu=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?il(l):""}function R0(t,e){switch(t.tag){case 26:case 27:case 5:return il(t.type);case 16:return il("Lazy");case 13:return t.child!==e&&e!==null?il("Suspense Fallback"):il("Suspense");case 19:return il("SuspenseList");case 0:case 15:return Ju(t.type,!1);case 11:return Ju(t.type.render,!1);case 1:return Ju(t.type,!0);case 31:return il("Activity");default:return""}}function Bo(t){try{var e="",l=null;do e+=R0(t,l),l=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Hi=Object.prototype.hasOwnProperty,js=rt.unstable_scheduleCallback,Ku=rt.unstable_cancelCallback,Q0=rt.unstable_shouldYield,L0=rt.unstable_requestPaint,Ht=rt.unstable_now,q0=rt.unstable_getCurrentPriorityLevel,C_=rt.unstable_ImmediatePriority,U_=rt.unstable_UserBlockingPriority,Ia=rt.unstable_NormalPriority,G0=rt.unstable_LowPriority,N_=rt.unstable_IdlePriority,Z0=rt.log,k0=rt.unstable_setDisableYieldValue,aa=null,Xt=null;function He(t){if(typeof Z0=="function"&&k0(t),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(aa,t)}catch{}}var Rt=Math.clz32?Math.clz32:K0,V0=Math.log,J0=Math.LN2;function K0(t){return t>>>=0,t===0?32:31-(V0(t)/J0|0)|0}var va=256,xa=262144,Sa=4194304;function sl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ou(t,e,l){var n=t.pendingLanes;if(n===0)return 0;var a=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var s=n&134217727;return s!==0?(n=s&~u,n!==0?a=sl(n):(i&=s,i!==0?a=sl(i):l||(l=s&~t,l!==0&&(a=sl(l))))):(s=n&~u,s!==0?a=sl(s):i!==0?a=sl(i):l||(l=n&~t,l!==0&&(a=sl(l)))),a===0?0:e!==0&&e!==a&&!(e&u)&&(u=a&-a,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:a}function ua(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function W0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D_(){var t=Sa;return Sa<<=1,!(Sa&62914560)&&(Sa=4194304),t}function Wu(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function ia(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function F0(t,e,l,n,a,u){var i=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,o=t.expirationTimes,r=t.hiddenUpdates;for(l=i&~l;0<l;){var m=31-Rt(l),g=1<<m;s[m]=0,o[m]=-1;var f=r[m];if(f!==null)for(r[m]=null,m=0;m<f.length;m++){var y=f[m];y!==null&&(y.lane&=-536870913)}l&=~g}n!==0&&j_(t,n,0),u!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~e))}function j_(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-Rt(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|l&261930}function w_(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var n=31-Rt(l),a=1<<n;a&e|t[n]&e&&(t[n]|=e),l&=~a}}function B_(t,e){var l=e&-e;return l=l&42?1:ws(l),l&(t.suspendedLanes|e)?0:l}function ws(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Bs(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function H_(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:s0(t.type))}function Ho(t,e){var l=q.p;try{return q.p=t,e()}finally{q.p=l}}var el=Math.random().toString(36).slice(2),pt="__reactFiber$"+el,Ut="__reactProps$"+el,cn="__reactContainer$"+el,Xi="__reactEvents$"+el,$0="__reactListeners$"+el,I0="__reactHandles$"+el,Xo="__reactResources$"+el,sa="__reactMarker$"+el;function Hs(t){delete t[pt],delete t[Ut],delete t[Xi],delete t[$0],delete t[I0]}function Dl(t){var e=t[pt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[cn]||l[pt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=kc(t);t!==null;){if(l=t[pt])return l;t=kc(t)}return e}t=l,l=t.parentNode}return null}function _n(t){if(t=t[pt]||t[cn]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function En(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(p(33))}function Gl(t){var e=t[Xo];return e||(e=t[Xo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function mt(t){t[sa]=!0}var X_=new Set,R_={};function vl(t,e){$l(t,e),$l(t+"Capture",e)}function $l(t,e){for(R_[t]=e,t=0;t<e.length;t++)X_.add(e[t])}var P0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ro={},Qo={};function td(t){return Hi.call(Qo,t)?!0:Hi.call(Ro,t)?!1:P0.test(t)?Qo[t]=!0:(Ro[t]=!0,!1)}function ja(t,e,l){if(td(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function za(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function _e(t,e,l,n){if(n===null)t.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+n)}}function Vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Q_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ed(t,e,l){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ri(t){if(!t._valueTracker){var e=Q_(t)?"checked":"value";t._valueTracker=ed(t,e,""+t[e])}}function L_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),n="";return t&&(n=Q_(t)?t.checked?"true":"false":t.value),t=n,t!==l?(e.setValue(t),!0):!1}function Pa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ld=/[\n"\\]/g;function Wt(t){return t.replace(ld,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Qi(t,e,l,n,a,u,i,s){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Vt(e)):t.value!==""+Vt(e)&&(t.value=""+Vt(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?Li(t,i,Vt(e)):l!=null?Li(t,i,Vt(l)):n!=null&&t.removeAttribute("value"),a==null&&u!=null&&(t.defaultChecked=!!u),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Vt(s):t.removeAttribute("name")}function q_(t,e,l,n,a,u,i,s){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Ri(t);return}l=l!=null?""+Vt(l):"",e=e!=null?""+Vt(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=s?t.checked:!!n,t.defaultChecked=!!n,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),Ri(t)}function Li(t,e,l){e==="number"&&Pa(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Zl(t,e,l,n){if(t=t.options,e){e={};for(var a=0;a<l.length;a++)e["$"+l[a]]=!0;for(l=0;l<t.length;l++)a=e.hasOwnProperty("$"+t[l].value),t[l].selected!==a&&(t[l].selected=a),a&&n&&(t[l].defaultSelected=!0)}else{for(l=""+Vt(l),e=null,a=0;a<t.length;a++){if(t[a].value===l){t[a].selected=!0,n&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function G_(t,e,l){if(e!=null&&(e=""+Vt(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Vt(l):""}function Z_(t,e,l,n){if(e==null){if(n!=null){if(l!=null)throw Error(p(92));if(Tn(n)){if(1<n.length)throw Error(p(93));n=n[0]}l=n}l==null&&(l=""),e=l}l=Vt(e),t.defaultValue=l,n=t.textContent,n===l&&n!==""&&n!==null&&(t.value=n),Ri(t)}function Il(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var nd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lo(t,e,l){var n=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,l):typeof l!="number"||l===0||nd.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function k_(t,e,l){if(e!=null&&typeof e!="object")throw Error(p(62));if(t=t.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var a in e)n=e[a],e.hasOwnProperty(a)&&l[a]!==n&&Lo(t,a,n)}else for(var u in e)e.hasOwnProperty(u)&&Lo(t,u,e[u])}function Xs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ad=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ud=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wa(t){return ud.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function pe(){}var qi=null;function Rs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jl=null,kl=null;function qo(t){var e=_n(t);if(e&&(t=e.stateNode)){var l=t[Ut]||null;t:switch(t=e.stateNode,e.type){case"input":if(Qi(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Wt(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var n=l[e];if(n!==t&&n.form===t.form){var a=n[Ut]||null;if(!a)throw Error(p(90));Qi(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<l.length;e++)n=l[e],n.form===t.form&&L_(n)}break t;case"textarea":G_(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Zl(t,!!l.multiple,e,!1)}}}var Fu=!1;function V_(t,e,l){if(Fu)return t(e,l);Fu=!0;try{var n=t(e);return n}finally{if(Fu=!1,(jl!==null||kl!==null)&&(Ru(),jl&&(e=jl,t=kl,kl=jl=null,qo(e),t)))for(e=0;e<t.length;e++)qo(t[e])}}function Zn(t,e){var l=t.stateNode;if(l===null)return null;var n=l[Ut]||null;if(n===null)return null;l=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(p(231,e,typeof l));return l}var ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gi=!1;if(ze)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){Gi=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{Gi=!1}var Xe=null,Qs=null,Ba=null;function J_(){if(Ba)return Ba;var t,e=Qs,l=e.length,n,a="value"in Xe?Xe.value:Xe.textContent,u=a.length;for(t=0;t<l&&e[t]===a[t];t++);var i=l-t;for(n=1;n<=i&&e[l-n]===a[u-n];n++);return Ba=a.slice(t,1<n?1-n:void 0)}function Ha(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Aa(){return!0}function Go(){return!1}function Nt(t){function e(l,n,a,u,i){this._reactName=l,this._targetInst=a,this.type=n,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(u):u[s]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Aa:Go,this.isPropagationStopped=Go,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),e}var xl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mu=Nt(xl),oa=tt({},xl,{view:0,detail:0}),id=Nt(oa),$u,Iu,pn,Yu=tt({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ls,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pn&&(pn&&t.type==="mousemove"?($u=t.screenX-pn.screenX,Iu=t.screenY-pn.screenY):Iu=$u=0,pn=t),$u)},movementY:function(t){return"movementY"in t?t.movementY:Iu}}),Zo=Nt(Yu),sd=tt({},Yu,{dataTransfer:0}),od=Nt(sd),cd=tt({},oa,{relatedTarget:0}),Pu=Nt(cd),_d=tt({},xl,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=Nt(_d),rd=tt({},xl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dd=Nt(rd),md=tt({},xl,{data:0}),ko=Nt(md),yd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pd(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hd[t])?!!e[t]:!1}function Ls(){return pd}var bd=tt({},oa,{key:function(t){if(t.key){var e=yd[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ls,charCode:function(t){return t.type==="keypress"?Ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vd=Nt(bd),xd=tt({},Yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vo=Nt(xd),Sd=tt({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ls}),zd=Nt(Sd),Ad=tt({},xl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Td=Nt(Ad),Ed=tt({},Yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Od=Nt(Ed),Md=tt({},xl,{newState:0,oldState:0}),Yd=Nt(Md),Cd=[9,13,27,32],qs=ze&&"CompositionEvent"in window,Cn=null;ze&&"documentMode"in document&&(Cn=document.documentMode);var Ud=ze&&"TextEvent"in window&&!Cn,K_=ze&&(!qs||Cn&&8<Cn&&11>=Cn),Jo=" ",Ko=!1;function W_(t,e){switch(t){case"keyup":return Cd.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function F_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wl=!1;function Nd(t,e){switch(t){case"compositionend":return F_(e);case"keypress":return e.which!==32?null:(Ko=!0,Jo);case"textInput":return t=e.data,t===Jo&&Ko?null:t;default:return null}}function Dd(t,e){if(wl)return t==="compositionend"||!qs&&W_(t,e)?(t=J_(),Ba=Qs=Xe=null,wl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return K_&&e.locale!=="ko"?null:e.data;default:return null}}var jd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jd[t.type]:e==="textarea"}function $_(t,e,l,n){jl?kl?kl.push(n):kl=[n]:jl=n,e=hu(e,"onChange"),0<e.length&&(l=new Mu("onChange","change",null,l,n),t.push({event:l,listeners:e}))}var Un=null,kn=null;function wd(t){Jr(t,0)}function Cu(t){var e=En(t);if(L_(e))return t}function Fo(t,e){if(t==="change")return e}var I_=!1;if(ze){var ti;if(ze){var ei="oninput"in document;if(!ei){var $o=document.createElement("div");$o.setAttribute("oninput","return;"),ei=typeof $o.oninput=="function"}ti=ei}else ti=!1;I_=ti&&(!document.documentMode||9<document.documentMode)}function Io(){Un&&(Un.detachEvent("onpropertychange",P_),kn=Un=null)}function P_(t){if(t.propertyName==="value"&&Cu(kn)){var e=[];$_(e,kn,t,Rs(t)),V_(wd,e)}}function Bd(t,e,l){t==="focusin"?(Io(),Un=e,kn=l,Un.attachEvent("onpropertychange",P_)):t==="focusout"&&Io()}function Hd(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cu(kn)}function Xd(t,e){if(t==="click")return Cu(e)}function Rd(t,e){if(t==="input"||t==="change")return Cu(e)}function Qd(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Lt=typeof Object.is=="function"?Object.is:Qd;function Vn(t,e){if(Lt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),n=Object.keys(e);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var a=l[n];if(!Hi.call(e,a)||!Lt(t[a],e[a]))return!1}return!0}function Po(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tc(t,e){var l=Po(t);t=0;for(var n;l;){if(l.nodeType===3){if(n=t+l.textContent.length,t<=e&&n>=e)return{node:l,offset:e-t};t=n}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Po(l)}}function tf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ef(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Pa(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Pa(t.document)}return e}function Gs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Ld=ze&&"documentMode"in document&&11>=document.documentMode,Bl=null,Zi=null,Nn=null,ki=!1;function ec(t,e,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ki||Bl==null||Bl!==Pa(n)||(n=Bl,"selectionStart"in n&&Gs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Nn&&Vn(Nn,n)||(Nn=n,n=hu(Zi,"onSelect"),0<n.length&&(e=new Mu("onSelect","select",null,e,l),t.push({event:e,listeners:n}),e.target=Bl)))}function ul(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Hl={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionrun:ul("Transition","TransitionRun"),transitionstart:ul("Transition","TransitionStart"),transitioncancel:ul("Transition","TransitionCancel"),transitionend:ul("Transition","TransitionEnd")},li={},lf={};ze&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete Hl.animationend.animation,delete Hl.animationiteration.animation,delete Hl.animationstart.animation),"TransitionEvent"in window||delete Hl.transitionend.transition);function Sl(t){if(li[t])return li[t];if(!Hl[t])return t;var e=Hl[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in lf)return li[t]=e[l];return t}var nf=Sl("animationend"),af=Sl("animationiteration"),uf=Sl("animationstart"),qd=Sl("transitionrun"),Gd=Sl("transitionstart"),Zd=Sl("transitioncancel"),sf=Sl("transitionend"),of=new Map,Vi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vi.push("scrollEnd");function ne(t,e){of.set(t,e),vl(e,[t])}var tu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},kt=[],Xl=0,Zs=0;function Uu(){for(var t=Xl,e=Zs=Xl=0;e<t;){var l=kt[e];kt[e++]=null;var n=kt[e];kt[e++]=null;var a=kt[e];kt[e++]=null;var u=kt[e];if(kt[e++]=null,n!==null&&a!==null){var i=n.pending;i===null?a.next=a:(a.next=i.next,i.next=a),n.pending=a}u!==0&&cf(l,a,u)}}function Nu(t,e,l,n){kt[Xl++]=t,kt[Xl++]=e,kt[Xl++]=l,kt[Xl++]=n,Zs|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function ks(t,e,l,n){return Nu(t,e,l,n),eu(t)}function zl(t,e){return Nu(t,null,null,e),eu(t)}function cf(t,e,l){t.lanes|=l;var n=t.alternate;n!==null&&(n.lanes|=l);for(var a=!1,u=t.return;u!==null;)u.childLanes|=l,n=u.alternate,n!==null&&(n.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(a=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,a&&e!==null&&(a=31-Rt(l),t=u.hiddenUpdates,n=t[a],n===null?t[a]=[e]:n.push(e),e.lane=l|536870912),u):null}function eu(t){if(50<Ln)throw Ln=0,ds=null,Error(p(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Rl={};function kd(t,e,l,n){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(t,e,l,n){return new kd(t,e,l,n)}function Vs(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ve(t,e){var l=t.alternate;return l===null?(l=wt(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function _f(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Xa(t,e,l,n,a,u){var i=0;if(n=t,typeof t=="function")Vs(t)&&(i=1);else if(typeof t=="string")i=Fm(t,l,se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Di:return t=wt(31,l,e,a),t.elementType=Di,t.lanes=u,t;case Ul:return fl(l.children,a,u,e);case M_:i=8,a|=24;break;case Ci:return t=wt(12,l,e,a|2),t.elementType=Ci,t.lanes=u,t;case Ui:return t=wt(13,l,e,a),t.elementType=Ui,t.lanes=u,t;case Ni:return t=wt(19,l,e,a),t.elementType=Ni,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case he:i=10;break t;case Y_:i=9;break t;case Ns:i=11;break t;case Ds:i=14;break t;case Ue:i=16,n=null;break t}i=29,l=Error(p(130,t===null?"null":typeof t,"")),n=null}return e=wt(i,l,e,a),e.elementType=t,e.type=n,e.lanes=u,e}function fl(t,e,l,n){return t=wt(7,t,n,e),t.lanes=l,t}function ni(t,e,l){return t=wt(6,t,null,e),t.lanes=l,t}function ff(t){var e=wt(18,null,null,0);return e.stateNode=t,e}function ai(t,e,l){return e=wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var lc=new WeakMap;function Ft(t,e){if(typeof t=="object"&&t!==null){var l=lc.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Bo(e)},lc.set(t,e),e)}return{value:t,source:e,stack:Bo(e)}}var Ql=[],Ll=0,lu=null,Jn=0,Jt=[],Kt=0,$e=null,ae=1,ue="";function ye(t,e){Ql[Ll++]=Jn,Ql[Ll++]=lu,lu=t,Jn=e}function rf(t,e,l){Jt[Kt++]=ae,Jt[Kt++]=ue,Jt[Kt++]=$e,$e=t;var n=ae;t=ue;var a=32-Rt(n)-1;n&=~(1<<a),l+=1;var u=32-Rt(e)+a;if(30<u){var i=a-a%5;u=(n&(1<<i)-1).toString(32),n>>=i,a-=i,ae=1<<32-Rt(e)+a|l<<a|n,ue=u+t}else ae=1<<u|l<<a|n,ue=t}function Js(t){t.return!==null&&(ye(t,1),rf(t,1,0))}function Ks(t){for(;t===lu;)lu=Ql[--Ll],Ql[Ll]=null,Jn=Ql[--Ll],Ql[Ll]=null;for(;t===$e;)$e=Jt[--Kt],Jt[Kt]=null,ue=Jt[--Kt],Jt[Kt]=null,ae=Jt[--Kt],Jt[Kt]=null}function df(t,e){Jt[Kt++]=ae,Jt[Kt++]=ue,Jt[Kt++]=$e,ae=e.id,ue=e.overflow,$e=t}var bt=null,I=null,R=!1,Ge=null,$t=!1,Ji=Error(p(519));function Ie(t){var e=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kn(Ft(e,t)),Ji}function nc(t){var e=t.stateNode,l=t.type,n=t.memoizedProps;switch(e[pt]=t,e[Ut]=n,l){case"dialog":B("cancel",e),B("close",e);break;case"iframe":case"object":case"embed":B("load",e);break;case"video":case"audio":for(l=0;l<In.length;l++)B(In[l],e);break;case"source":B("error",e);break;case"img":case"image":case"link":B("error",e),B("load",e);break;case"details":B("toggle",e);break;case"input":B("invalid",e),q_(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":B("invalid",e);break;case"textarea":B("invalid",e),Z_(e,n.value,n.defaultValue,n.children)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||n.suppressHydrationWarning===!0||Wr(e.textContent,l)?(n.popover!=null&&(B("beforetoggle",e),B("toggle",e)),n.onScroll!=null&&B("scroll",e),n.onScrollEnd!=null&&B("scrollend",e),n.onClick!=null&&(e.onclick=pe),e=!0):e=!1,e||Ie(t,!0)}function ac(t){for(bt=t.return;bt;)switch(bt.tag){case 5:case 31:case 13:$t=!1;return;case 27:case 3:$t=!0;return;default:bt=bt.return}}function Tl(t){if(t!==bt)return!1;if(!R)return ac(t),R=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||ps(t.type,t.memoizedProps)),l=!l),l&&I&&Ie(t),ac(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));I=Zc(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));I=Zc(t)}else e===27?(e=I,ll(t.type)?(t=Ss,Ss=null,I=t):I=e):I=bt?Pt(t.stateNode.nextSibling):null;return!0}function yl(){I=bt=null,R=!1}function ui(){var t=Ge;return t!==null&&(Yt===null?Yt=t:Yt.push.apply(Yt,t),Ge=null),t}function Kn(t){Ge===null?Ge=[t]:Ge.push(t)}var Ki=oe(null),Al=null,be=null;function De(t,e,l){W(Ki,e._currentValue),e._currentValue=l}function xe(t){t._currentValue=Ki.current,yt(Ki)}function Wi(t,e,l){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===l)break;t=t.return}}function Fi(t,e,l,n){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){var i=a.child;u=u.firstContext;t:for(;u!==null;){var s=u;u=a;for(var o=0;o<e.length;o++)if(s.context===e[o]){u.lanes|=l,s=u.alternate,s!==null&&(s.lanes|=l),Wi(u.return,l,t),n||(i=null);break t}u=s.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(p(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),Wi(i,l,t),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function fn(t,e,l,n){t=null;for(var a=e,u=!1;a!==null;){if(!u){if(a.flags&524288)u=!0;else if(a.flags&262144)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(p(387));if(i=i.memoizedProps,i!==null){var s=a.type;Lt(a.pendingProps.value,i.value)||(t!==null?t.push(s):t=[s])}}else if(a===Wa.current){if(i=a.alternate,i===null)throw Error(p(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(ta):t=[ta])}a=a.return}t!==null&&Fi(e,t,l,n),e.flags|=262144}function nu(t){for(t=t.firstContext;t!==null;){if(!Lt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gl(t){Al=t,be=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function vt(t){return mf(Al,t)}function Ta(t,e){return Al===null&&gl(t),mf(t,e)}function mf(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},be===null){if(t===null)throw Error(p(308));be=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else be=be.next=e;return l}var Vd=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Jd=rt.unstable_scheduleCallback,Kd=rt.unstable_NormalPriority,ct={$$typeof:he,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ws(){return{controller:new Vd,data:new Map,refCount:0}}function ca(t){t.refCount--,t.refCount===0&&Jd(Kd,function(){t.controller.abort()})}var Dn=null,$i=0,Pl=0,Vl=null;function Wd(t,e){if(Dn===null){var l=Dn=[];$i=0,Pl=xo(),Vl={status:"pending",value:void 0,then:function(n){l.push(n)}}}return $i++,e.then(uc,uc),e}function uc(){if(--$i===0&&Dn!==null){Vl!==null&&(Vl.status="fulfilled");var t=Dn;Dn=null,Pl=0,Vl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Fd(t,e){var l=[],n={status:"pending",value:null,reason:null,then:function(a){l.push(a)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var a=0;a<l.length;a++)(0,l[a])(e)},function(a){for(n.status="rejected",n.reason=a,a=0;a<l.length;a++)(0,l[a])(void 0)}),n}var ic=E.S;E.S=function(t,e){Mr=Ht(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Wd(t,e),ic!==null&&ic(t,e)};var rl=oe(null);function Fs(){var t=rl.current;return t!==null?t:K.pooledCache}function Ra(t,e){e===null?W(rl,rl.current):W(rl,e.pool)}function yf(){var t=Fs();return t===null?null:{parent:ct._currentValue,pool:t}}var rn=Error(p(460)),$s=Error(p(474)),Du=Error(p(542)),au={then:function(){}};function sc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function gf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(pe,pe),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,cc(t),t;default:if(typeof e.status=="string")e.then(pe,pe);else{if(t=K,t!==null&&100<t.shellSuspendCounter)throw Error(p(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=n}},function(n){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,cc(t),t}throw dl=e,rn}}function ol(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(dl=l,rn):l}}var dl=null;function oc(){if(dl===null)throw Error(p(459));var t=dl;return dl=null,t}function cc(t){if(t===rn||t===Du)throw Error(p(483))}var Jl=null,Wn=0;function Ea(t){var e=Wn;return Wn+=1,Jl===null&&(Jl=[]),gf(Jl,t,e)}function bn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Oa(t,e){throw e.$$typeof===B0?Error(p(525)):(t=Object.prototype.toString.call(e),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function hf(t){function e(_,c){if(t){var d=_.deletions;d===null?(_.deletions=[c],_.flags|=16):d.push(c)}}function l(_,c){if(!t)return null;for(;c!==null;)e(_,c),c=c.sibling;return null}function n(_){for(var c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function a(_,c){return _=ve(_,c),_.index=0,_.sibling=null,_}function u(_,c,d){return _.index=d,t?(d=_.alternate,d!==null?(d=d.index,d<c?(_.flags|=67108866,c):d):(_.flags|=67108866,c)):(_.flags|=1048576,c)}function i(_){return t&&_.alternate===null&&(_.flags|=67108866),_}function s(_,c,d,h){return c===null||c.tag!==6?(c=ni(d,_.mode,h),c.return=_,c):(c=a(c,d),c.return=_,c)}function o(_,c,d,h){var z=d.type;return z===Ul?m(_,c,d.props.children,h,d.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ue&&ol(z)===c.type)?(c=a(c,d.props),bn(c,d),c.return=_,c):(c=Xa(d.type,d.key,d.props,null,_.mode,h),bn(c,d),c.return=_,c)}function r(_,c,d,h){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=ai(d,_.mode,h),c.return=_,c):(c=a(c,d.children||[]),c.return=_,c)}function m(_,c,d,h,z){return c===null||c.tag!==7?(c=fl(d,_.mode,h,z),c.return=_,c):(c=a(c,d),c.return=_,c)}function g(_,c,d){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=ni(""+c,_.mode,d),c.return=_,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ba:return d=Xa(c.type,c.key,c.props,null,_.mode,d),bn(d,c),d.return=_,d;case An:return c=ai(c,_.mode,d),c.return=_,c;case Ue:return c=ol(c),g(_,c,d)}if(Tn(c)||gn(c))return c=fl(c,_.mode,d,null),c.return=_,c;if(typeof c.then=="function")return g(_,Ea(c),d);if(c.$$typeof===he)return g(_,Ta(_,c),d);Oa(_,c)}return null}function f(_,c,d,h){var z=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return z!==null?null:s(_,c,""+d,h);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ba:return d.key===z?o(_,c,d,h):null;case An:return d.key===z?r(_,c,d,h):null;case Ue:return d=ol(d),f(_,c,d,h)}if(Tn(d)||gn(d))return z!==null?null:m(_,c,d,h,null);if(typeof d.then=="function")return f(_,c,Ea(d),h);if(d.$$typeof===he)return f(_,c,Ta(_,d),h);Oa(_,d)}return null}function y(_,c,d,h,z){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return _=_.get(d)||null,s(c,_,""+h,z);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ba:return _=_.get(h.key===null?d:h.key)||null,o(c,_,h,z);case An:return _=_.get(h.key===null?d:h.key)||null,r(c,_,h,z);case Ue:return h=ol(h),y(_,c,d,h,z)}if(Tn(h)||gn(h))return _=_.get(d)||null,m(c,_,h,z,null);if(typeof h.then=="function")return y(_,c,d,Ea(h),z);if(h.$$typeof===he)return y(_,c,d,Ta(c,h),z);Oa(c,h)}return null}function v(_,c,d,h){for(var z=null,Y=null,x=c,T=c=0,C=null;x!==null&&T<d.length;T++){x.index>T?(C=x,x=null):C=x.sibling;var N=f(_,x,d[T],h);if(N===null){x===null&&(x=C);break}t&&x&&N.alternate===null&&e(_,x),c=u(N,c,T),Y===null?z=N:Y.sibling=N,Y=N,x=C}if(T===d.length)return l(_,x),R&&ye(_,T),z;if(x===null){for(;T<d.length;T++)x=g(_,d[T],h),x!==null&&(c=u(x,c,T),Y===null?z=x:Y.sibling=x,Y=x);return R&&ye(_,T),z}for(x=n(x);T<d.length;T++)C=y(x,_,T,d[T],h),C!==null&&(t&&C.alternate!==null&&x.delete(C.key===null?T:C.key),c=u(C,c,T),Y===null?z=C:Y.sibling=C,Y=C);return t&&x.forEach(function(Tt){return e(_,Tt)}),R&&ye(_,T),z}function A(_,c,d,h){if(d==null)throw Error(p(151));for(var z=null,Y=null,x=c,T=c=0,C=null,N=d.next();x!==null&&!N.done;T++,N=d.next()){x.index>T?(C=x,x=null):C=x.sibling;var Tt=f(_,x,N.value,h);if(Tt===null){x===null&&(x=C);break}t&&x&&Tt.alternate===null&&e(_,x),c=u(Tt,c,T),Y===null?z=Tt:Y.sibling=Tt,Y=Tt,x=C}if(N.done)return l(_,x),R&&ye(_,T),z;if(x===null){for(;!N.done;T++,N=d.next())N=g(_,N.value,h),N!==null&&(c=u(N,c,T),Y===null?z=N:Y.sibling=N,Y=N);return R&&ye(_,T),z}for(x=n(x);!N.done;T++,N=d.next())N=y(x,_,T,N.value,h),N!==null&&(t&&N.alternate!==null&&x.delete(N.key===null?T:N.key),c=u(N,c,T),Y===null?z=N:Y.sibling=N,Y=N);return t&&x.forEach(function(Gt){return e(_,Gt)}),R&&ye(_,T),z}function j(_,c,d,h){if(typeof d=="object"&&d!==null&&d.type===Ul&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ba:t:{for(var z=d.key;c!==null;){if(c.key===z){if(z=d.type,z===Ul){if(c.tag===7){l(_,c.sibling),h=a(c,d.props.children),h.return=_,_=h;break t}}else if(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ue&&ol(z)===c.type){l(_,c.sibling),h=a(c,d.props),bn(h,d),h.return=_,_=h;break t}l(_,c);break}else e(_,c);c=c.sibling}d.type===Ul?(h=fl(d.props.children,_.mode,h,d.key),h.return=_,_=h):(h=Xa(d.type,d.key,d.props,null,_.mode,h),bn(h,d),h.return=_,_=h)}return i(_);case An:t:{for(z=d.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){l(_,c.sibling),h=a(c,d.children||[]),h.return=_,_=h;break t}else{l(_,c);break}else e(_,c);c=c.sibling}h=ai(d,_.mode,h),h.return=_,_=h}return i(_);case Ue:return d=ol(d),j(_,c,d,h)}if(Tn(d))return v(_,c,d,h);if(gn(d)){if(z=gn(d),typeof z!="function")throw Error(p(150));return d=z.call(d),A(_,c,d,h)}if(typeof d.then=="function")return j(_,c,Ea(d),h);if(d.$$typeof===he)return j(_,c,Ta(_,d),h);Oa(_,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,c!==null&&c.tag===6?(l(_,c.sibling),h=a(c,d),h.return=_,_=h):(l(_,c),h=ni(d,_.mode,h),h.return=_,_=h),i(_)):l(_,c)}return function(_,c,d,h){try{Wn=0;var z=j(_,c,d,h);return Jl=null,z}catch(x){if(x===rn||x===Du)throw x;var Y=wt(29,x,null,_.mode);return Y.lanes=h,Y.return=_,Y}finally{}}}var hl=hf(!0),pf=hf(!1),Ne=!1;function Is(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ii(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ze(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ke(t,e,l){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,L&2){var a=n.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),n.pending=e,e=eu(t),cf(t,null,l),e}return Nu(t,n,e,l),eu(t)}function jn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,l|=n,e.lanes=l,w_(t,l)}}function ii(t,e){var l=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var a=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?a=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?a=u=e:u=u.next=e}else a=u=e;l={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Pi=!1;function wn(){if(Pi){var t=Vl;if(t!==null)throw t}}function Bn(t,e,l,n){Pi=!1;var a=t.updateQueue;Ne=!1;var u=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var o=s,r=o.next;o.next=null,i===null?u=r:i.next=r,i=o;var m=t.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==i&&(s===null?m.firstBaseUpdate=r:s.next=r,m.lastBaseUpdate=o))}if(u!==null){var g=a.baseState;i=0,m=r=o=null,s=u;do{var f=s.lane&-536870913,y=f!==s.lane;if(y?(X&f)===f:(n&f)===f){f!==0&&f===Pl&&(Pi=!0),m!==null&&(m=m.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var v=t,A=s;f=e;var j=l;switch(A.tag){case 1:if(v=A.payload,typeof v=="function"){g=v.call(j,g,f);break t}g=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=A.payload,f=typeof v=="function"?v.call(j,g,f):v,f==null)break t;g=tt({},g,f);break t;case 2:Ne=!0}}f=s.callback,f!==null&&(t.flags|=64,y&&(t.flags|=8192),y=a.callbacks,y===null?a.callbacks=[f]:y.push(f))}else y={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(r=m=y,o=g):m=m.next=y,i|=f;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;y=s,s=y.next,y.next=null,a.lastBaseUpdate=y,a.shared.pending=null}}while(!0);m===null&&(o=g),a.baseState=o,a.firstBaseUpdate=r,a.lastBaseUpdate=m,u===null&&(a.shared.lanes=0),tl|=i,t.lanes=i,t.memoizedState=g}}function bf(t,e){if(typeof t!="function")throw Error(p(191,t));t.call(e)}function vf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)bf(l[t],e)}var tn=oe(null),uu=oe(0);function _c(t,e){t=Oe,W(uu,t),W(tn,e),Oe=t|e.baseLanes}function ts(){W(uu,Oe),W(tn,tn.current)}function Ps(){Oe=uu.current,yt(tn),yt(uu)}var qt=oe(null),It=null;function je(t){var e=t.alternate;W(at,at.current&1),W(qt,t),It===null&&(e===null||tn.current!==null||e.memoizedState!==null)&&(It=t)}function es(t){W(at,at.current),W(qt,t),It===null&&(It=t)}function xf(t){t.tag===22?(W(at,at.current),W(qt,t),It===null&&(It=t)):we()}function we(){W(at,at.current),W(qt,qt.current)}function jt(t){yt(qt),It===t&&(It=null),yt(at)}var at=oe(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||vs(l)||xs(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ae=0,M=null,V=null,st=null,su=!1,Kl=!1,pl=!1,ou=0,Fn=0,Wl=null,$d=0;function lt(){throw Error(p(321))}function to(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Lt(t[l],e[l]))return!1;return!0}function eo(t,e,l,n,a,u){return Ae=u,M=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,E.H=t===null||t.memoizedState===null?If:ro,pl=!1,u=l(n,a),pl=!1,Kl&&(u=zf(e,l,n,a)),Sf(t),u}function Sf(t){E.H=$n;var e=V!==null&&V.next!==null;if(Ae=0,st=V=M=null,su=!1,Fn=0,Wl=null,e)throw Error(p(300));t===null||_t||(t=t.dependencies,t!==null&&nu(t)&&(_t=!0))}function zf(t,e,l,n){M=t;var a=0;do{if(Kl&&(Wl=null),Fn=0,Kl=!1,25<=a)throw Error(p(301));if(a+=1,st=V=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}E.H=Pf,u=e(l,n)}while(Kl);return u}function Id(){var t=E.H,e=t.useState()[0];return e=typeof e.then=="function"?_a(e):e,t=t.useState()[0],(V!==null?V.memoizedState:null)!==t&&(M.flags|=1024),e}function lo(){var t=ou!==0;return ou=0,t}function no(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function ao(t){if(su){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}su=!1}Ae=0,st=V=M=null,Kl=!1,Fn=ou=0,Wl=null}function St(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?M.memoizedState=st=t:st=st.next=t,st}function ut(){if(V===null){var t=M.alternate;t=t!==null?t.memoizedState:null}else t=V.next;var e=st===null?M.memoizedState:st.next;if(e!==null)st=e,V=t;else{if(t===null)throw M.alternate===null?Error(p(467)):Error(p(310));V=t,t={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},st===null?M.memoizedState=st=t:st=st.next=t}return st}function ju(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _a(t){var e=Fn;return Fn+=1,Wl===null&&(Wl=[]),t=gf(Wl,t,e),e=M,(st===null?e.memoizedState:st.next)===null&&(e=e.alternate,E.H=e===null||e.memoizedState===null?If:ro),t}function wu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _a(t);if(t.$$typeof===he)return vt(t)}throw Error(p(438,String(t)))}function uo(t){var e=null,l=M.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var n=M.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=ju(),M.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),n=0;n<t;n++)l[n]=H0;return e.index++,l}function Te(t,e){return typeof e=="function"?e(t):e}function Qa(t){var e=ut();return io(e,V,t)}function io(t,e,l){var n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=l;var a=t.baseQueue,u=n.pending;if(u!==null){if(a!==null){var i=a.next;a.next=u.next,u.next=i}e.baseQueue=a=u,n.pending=null}if(u=t.baseState,a===null)t.memoizedState=u;else{e=a.next;var s=i=null,o=null,r=e,m=!1;do{var g=r.lane&-536870913;if(g!==r.lane?(X&g)===g:(Ae&g)===g){var f=r.revertLane;if(f===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null}),g===Pl&&(m=!0);else if((Ae&f)===f){r=r.next,f===Pl&&(m=!0);continue}else g={lane:0,revertLane:r.revertLane,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},o===null?(s=o=g,i=u):o=o.next=g,M.lanes|=f,tl|=f;g=r.action,pl&&l(u,g),u=r.hasEagerState?r.eagerState:l(u,g)}else f={lane:g,revertLane:r.revertLane,gesture:r.gesture,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},o===null?(s=o=f,i=u):o=o.next=f,M.lanes|=g,tl|=g;r=r.next}while(r!==null&&r!==e);if(o===null?i=u:o.next=s,!Lt(u,t.memoizedState)&&(_t=!0,m&&(l=Vl,l!==null)))throw l;t.memoizedState=u,t.baseState=i,t.baseQueue=o,n.lastRenderedState=u}return a===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function si(t){var e=ut(),l=e.queue;if(l===null)throw Error(p(311));l.lastRenderedReducer=t;var n=l.dispatch,a=l.pending,u=e.memoizedState;if(a!==null){l.pending=null;var i=a=a.next;do u=t(u,i.action),i=i.next;while(i!==a);Lt(u,e.memoizedState)||(_t=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,n]}function Af(t,e,l){var n=M,a=ut(),u=R;if(u){if(l===void 0)throw Error(p(407));l=l()}else l=e();var i=!Lt((V||a).memoizedState,l);if(i&&(a.memoizedState=l,_t=!0),a=a.queue,so(Of.bind(null,n,a,t),[t]),a.getSnapshot!==e||i||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,en(9,{destroy:void 0},Ef.bind(null,n,a,l,e),null),K===null)throw Error(p(349));u||Ae&127||Tf(n,e,l)}return l}function Tf(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=M.updateQueue,e===null?(e=ju(),M.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Ef(t,e,l,n){e.value=l,e.getSnapshot=n,Mf(e)&&Yf(t)}function Of(t,e,l){return l(function(){Mf(e)&&Yf(t)})}function Mf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Lt(t,l)}catch{return!0}}function Yf(t){var e=zl(t,2);e!==null&&Ct(e,t,2)}function ls(t){var e=St();if(typeof t=="function"){var l=t;if(t=l(),pl){He(!0);try{l()}finally{He(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Te,lastRenderedState:t},e}function Cf(t,e,l,n){return t.baseState=l,io(t,V,typeof n=="function"?n:Te)}function Pd(t,e,l,n,a){if(Hu(t))throw Error(p(485));if(t=e.action,t!==null){var u={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};E.T!==null?l(!0):u.isTransition=!1,n(u),l=e.pending,l===null?(u.next=e.pending=u,Uf(e,u)):(u.next=l.next,e.pending=l.next=u)}}function Uf(t,e){var l=e.action,n=e.payload,a=t.state;if(e.isTransition){var u=E.T,i={};E.T=i;try{var s=l(a,n),o=E.S;o!==null&&o(i,s),fc(t,e,s)}catch(r){ns(t,e,r)}finally{u!==null&&i.types!==null&&(u.types=i.types),E.T=u}}else try{u=l(a,n),fc(t,e,u)}catch(r){ns(t,e,r)}}function fc(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){rc(t,e,n)},function(n){return ns(t,e,n)}):rc(t,e,l)}function rc(t,e,l){e.status="fulfilled",e.value=l,Nf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Uf(t,l)))}function ns(t,e,l){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=l,Nf(e),e=e.next;while(e!==n)}t.action=null}function Nf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Df(t,e){return e}function dc(t,e){if(R){var l=K.formState;if(l!==null){t:{var n=M;if(R){if(I){e:{for(var a=I,u=$t;a.nodeType!==8;){if(!u){a=null;break e}if(a=Pt(a.nextSibling),a===null){a=null;break e}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){I=Pt(a.nextSibling),n=a.data==="F!";break t}}Ie(n)}n=!1}n&&(e=l[0])}}return l=St(),l.memoizedState=l.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Df,lastRenderedState:e},l.queue=n,l=Wf.bind(null,M,n),n.dispatch=l,n=ls(!1),u=fo.bind(null,M,!1,n.queue),n=St(),a={state:e,dispatch:null,action:t,pending:null},n.queue=a,l=Pd.bind(null,M,a,u,l),a.dispatch=l,n.memoizedState=t,[e,l,!1]}function mc(t){var e=ut();return jf(e,V,t)}function jf(t,e,l){if(e=io(t,e,Df)[0],t=Qa(Te)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=_a(e)}catch(i){throw i===rn?Du:i}else n=e;e=ut();var a=e.queue,u=a.dispatch;return l!==e.memoizedState&&(M.flags|=2048,en(9,{destroy:void 0},tm.bind(null,a,l),null)),[n,u,t]}function tm(t,e){t.action=e}function yc(t){var e=ut(),l=V;if(l!==null)return jf(e,l,t);ut(),e=e.memoizedState,l=ut();var n=l.queue.dispatch;return l.memoizedState=t,[e,n,!1]}function en(t,e,l,n){return t={tag:t,create:l,deps:n,inst:e,next:null},e=M.updateQueue,e===null&&(e=ju(),M.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(n=l.next,l.next=t,t.next=n,e.lastEffect=t),t}function wf(){return ut().memoizedState}function La(t,e,l,n){var a=St();M.flags|=t,a.memoizedState=en(1|e,{destroy:void 0},l,n===void 0?null:n)}function Bu(t,e,l,n){var a=ut();n=n===void 0?null:n;var u=a.memoizedState.inst;V!==null&&n!==null&&to(n,V.memoizedState.deps)?a.memoizedState=en(e,u,l,n):(M.flags|=t,a.memoizedState=en(1|e,u,l,n))}function gc(t,e){La(8390656,8,t,e)}function so(t,e){Bu(2048,8,t,e)}function em(t){M.flags|=4;var e=M.updateQueue;if(e===null)e=ju(),M.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function Bf(t){var e=ut().memoizedState;return em({ref:e,nextImpl:t}),function(){if(L&2)throw Error(p(440));return e.impl.apply(void 0,arguments)}}function Hf(t,e){return Bu(4,2,t,e)}function Xf(t,e){return Bu(4,4,t,e)}function Rf(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qf(t,e,l){l=l!=null?l.concat([t]):null,Bu(4,4,Rf.bind(null,e,t),l)}function oo(){}function Lf(t,e){var l=ut();e=e===void 0?null:e;var n=l.memoizedState;return e!==null&&to(e,n[1])?n[0]:(l.memoizedState=[t,e],t)}function qf(t,e){var l=ut();e=e===void 0?null:e;var n=l.memoizedState;if(e!==null&&to(e,n[1]))return n[0];if(n=t(),pl){He(!0);try{t()}finally{He(!1)}}return l.memoizedState=[n,e],n}function co(t,e,l){return l===void 0||Ae&1073741824&&!(X&261930)?t.memoizedState=e:(t.memoizedState=l,t=Cr(),M.lanes|=t,tl|=t,l)}function Gf(t,e,l,n){return Lt(l,e)?l:tn.current!==null?(t=co(t,l,n),Lt(t,e)||(_t=!0),t):!(Ae&42)||Ae&1073741824&&!(X&261930)?(_t=!0,t.memoizedState=l):(t=Cr(),M.lanes|=t,tl|=t,e)}function Zf(t,e,l,n,a){var u=q.p;q.p=u!==0&&8>u?u:8;var i=E.T,s={};E.T=s,fo(t,!1,e,l);try{var o=a(),r=E.S;if(r!==null&&r(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var m=Fd(o,n);Hn(t,e,m,Qt(t))}else Hn(t,e,n,Qt(t))}catch(g){Hn(t,e,{then:function(){},status:"rejected",reason:g},Qt())}finally{q.p=u,i!==null&&s.types!==null&&(i.types=s.types),E.T=i}}function lm(){}function as(t,e,l,n){if(t.tag!==5)throw Error(p(476));var a=kf(t).queue;Zf(t,a,e,_l,l===null?lm:function(){return Vf(t),l(n)})}function kf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:_l,baseState:_l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Te,lastRenderedState:_l},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Te,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Vf(t){var e=kf(t);e.next===null&&(e=t.alternate.memoizedState),Hn(t,e.next.queue,{},Qt())}function _o(){return vt(ta)}function Jf(){return ut().memoizedState}function Kf(){return ut().memoizedState}function nm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Qt();t=Ze(l);var n=ke(e,t,l);n!==null&&(Ct(n,e,l),jn(n,e,l)),e={cache:Ws()},t.payload=e;return}e=e.return}}function am(t,e,l){var n=Qt();l={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Hu(t)?Ff(e,l):(l=ks(t,e,l,n),l!==null&&(Ct(l,t,n),$f(l,e,n)))}function Wf(t,e,l){var n=Qt();Hn(t,e,l,n)}function Hn(t,e,l,n){var a={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Hu(t))Ff(e,a);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var i=e.lastRenderedState,s=u(i,l);if(a.hasEagerState=!0,a.eagerState=s,Lt(s,i))return Nu(t,e,a,0),K===null&&Uu(),!1}catch{}finally{}if(l=ks(t,e,a,n),l!==null)return Ct(l,t,n),$f(l,e,n),!0}return!1}function fo(t,e,l,n){if(n={lane:2,revertLane:xo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Hu(t)){if(e)throw Error(p(479))}else e=ks(t,l,n,2),e!==null&&Ct(e,t,2)}function Hu(t){var e=t.alternate;return t===M||e!==null&&e===M}function Ff(t,e){Kl=su=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function $f(t,e,l){if(l&4194048){var n=e.lanes;n&=t.pendingLanes,l|=n,e.lanes=l,w_(t,l)}}var $n={readContext:vt,use:wu,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt};$n.useEffectEvent=lt;var If={readContext:vt,use:wu,useCallback:function(t,e){return St().memoizedState=[t,e===void 0?null:e],t},useContext:vt,useEffect:gc,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,La(4194308,4,Rf.bind(null,e,t),l)},useLayoutEffect:function(t,e){return La(4194308,4,t,e)},useInsertionEffect:function(t,e){La(4,2,t,e)},useMemo:function(t,e){var l=St();e=e===void 0?null:e;var n=t();if(pl){He(!0);try{t()}finally{He(!1)}}return l.memoizedState=[n,e],n},useReducer:function(t,e,l){var n=St();if(l!==void 0){var a=l(e);if(pl){He(!0);try{l(e)}finally{He(!1)}}}else a=e;return n.memoizedState=n.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},n.queue=t,t=t.dispatch=am.bind(null,M,t),[n.memoizedState,t]},useRef:function(t){var e=St();return t={current:t},e.memoizedState=t},useState:function(t){t=ls(t);var e=t.queue,l=Wf.bind(null,M,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:oo,useDeferredValue:function(t,e){var l=St();return co(l,t,e)},useTransition:function(){var t=ls(!1);return t=Zf.bind(null,M,t.queue,!0,!1),St().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var n=M,a=St();if(R){if(l===void 0)throw Error(p(407));l=l()}else{if(l=e(),K===null)throw Error(p(349));X&127||Tf(n,e,l)}a.memoizedState=l;var u={value:l,getSnapshot:e};return a.queue=u,gc(Of.bind(null,n,u,t),[t]),n.flags|=2048,en(9,{destroy:void 0},Ef.bind(null,n,u,l,e),null),l},useId:function(){var t=St(),e=K.identifierPrefix;if(R){var l=ue,n=ae;l=(n&~(1<<32-Rt(n)-1)).toString(32)+l,e="_"+e+"R_"+l,l=ou++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=$d++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:_o,useFormState:dc,useActionState:dc,useOptimistic:function(t){var e=St();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=fo.bind(null,M,!0,l),l.dispatch=e,[t,e]},useMemoCache:uo,useCacheRefresh:function(){return St().memoizedState=nm.bind(null,M)},useEffectEvent:function(t){var e=St(),l={impl:t};return e.memoizedState=l,function(){if(L&2)throw Error(p(440));return l.impl.apply(void 0,arguments)}}},ro={readContext:vt,use:wu,useCallback:Lf,useContext:vt,useEffect:so,useImperativeHandle:Qf,useInsertionEffect:Hf,useLayoutEffect:Xf,useMemo:qf,useReducer:Qa,useRef:wf,useState:function(){return Qa(Te)},useDebugValue:oo,useDeferredValue:function(t,e){var l=ut();return Gf(l,V.memoizedState,t,e)},useTransition:function(){var t=Qa(Te)[0],e=ut().memoizedState;return[typeof t=="boolean"?t:_a(t),e]},useSyncExternalStore:Af,useId:Jf,useHostTransitionStatus:_o,useFormState:mc,useActionState:mc,useOptimistic:function(t,e){var l=ut();return Cf(l,V,t,e)},useMemoCache:uo,useCacheRefresh:Kf};ro.useEffectEvent=Bf;var Pf={readContext:vt,use:wu,useCallback:Lf,useContext:vt,useEffect:so,useImperativeHandle:Qf,useInsertionEffect:Hf,useLayoutEffect:Xf,useMemo:qf,useReducer:si,useRef:wf,useState:function(){return si(Te)},useDebugValue:oo,useDeferredValue:function(t,e){var l=ut();return V===null?co(l,t,e):Gf(l,V.memoizedState,t,e)},useTransition:function(){var t=si(Te)[0],e=ut().memoizedState;return[typeof t=="boolean"?t:_a(t),e]},useSyncExternalStore:Af,useId:Jf,useHostTransitionStatus:_o,useFormState:yc,useActionState:yc,useOptimistic:function(t,e){var l=ut();return V!==null?Cf(l,V,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:uo,useCacheRefresh:Kf};Pf.useEffectEvent=Bf;function oi(t,e,l,n){e=t.memoizedState,l=l(n,e),l=l==null?e:tt({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var us={enqueueSetState:function(t,e,l){t=t._reactInternals;var n=Qt(),a=Ze(n);a.payload=e,l!=null&&(a.callback=l),e=ke(t,a,n),e!==null&&(Ct(e,t,n),jn(e,t,n))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var n=Qt(),a=Ze(n);a.tag=1,a.payload=e,l!=null&&(a.callback=l),e=ke(t,a,n),e!==null&&(Ct(e,t,n),jn(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Qt(),n=Ze(l);n.tag=2,e!=null&&(n.callback=e),e=ke(t,n,l),e!==null&&(Ct(e,t,l),jn(e,t,l))}};function hc(t,e,l,n,a,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,u,i):e.prototype&&e.prototype.isPureReactComponent?!Vn(l,n)||!Vn(a,u):!0}function pc(t,e,l,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,n),e.state!==t&&us.enqueueReplaceState(e,e.state,null)}function bl(t,e){var l=e;if("ref"in e){l={};for(var n in e)n!=="ref"&&(l[n]=e[n])}if(t=t.defaultProps){l===e&&(l=tt({},l));for(var a in t)l[a]===void 0&&(l[a]=t[a])}return l}function tr(t){tu(t)}function er(t){console.error(t)}function lr(t){tu(t)}function cu(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function bc(t,e,l){try{var n=t.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function is(t,e,l){return l=Ze(l),l.tag=3,l.payload={element:null},l.callback=function(){cu(t,e)},l}function nr(t){return t=Ze(t),t.tag=3,t}function ar(t,e,l,n){var a=l.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;t.payload=function(){return a(u)},t.callback=function(){bc(e,l,n)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){bc(e,l,n),typeof a!="function"&&(Ve===null?Ve=new Set([this]):Ve.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function um(t,e,l,n,a){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=l.alternate,e!==null&&fn(e,l,a,!0),l=qt.current,l!==null){switch(l.tag){case 31:case 13:return It===null?mu():l.alternate===null&&nt===0&&(nt=3),l.flags&=-257,l.flags|=65536,l.lanes=a,n===au?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([n]):e.add(n),bi(t,n,a)),!1;case 22:return l.flags|=65536,n===au?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([n]):l.add(n)),bi(t,n,a)),!1}throw Error(p(435,l.tag))}return bi(t,n,a),mu(),!1}if(R)return e=qt.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,n!==Ji&&(t=Error(p(422),{cause:n}),Kn(Ft(t,l)))):(n!==Ji&&(e=Error(p(423),{cause:n}),Kn(Ft(e,l))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,n=Ft(n,l),a=is(t.stateNode,n,a),ii(t,a),nt!==4&&(nt=2)),!1;var u=Error(p(520),{cause:n});if(u=Ft(u,l),Qn===null?Qn=[u]:Qn.push(u),nt!==4&&(nt=2),e===null)return!0;n=Ft(n,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=a&-a,l.lanes|=t,t=is(l.stateNode,n,t),ii(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ve===null||!Ve.has(u))))return l.flags|=65536,a&=-a,l.lanes|=a,a=nr(a),ar(a,t,l,n),ii(l,a),!1}l=l.return}while(l!==null);return!1}var mo=Error(p(461)),_t=!1;function ht(t,e,l,n){e.child=t===null?pf(e,null,l,n):hl(e,t.child,l,n)}function vc(t,e,l,n,a){l=l.render;var u=e.ref;if("ref"in n){var i={};for(var s in n)s!=="ref"&&(i[s]=n[s])}else i=n;return gl(e),n=eo(t,e,l,i,u,a),s=lo(),t!==null&&!_t?(no(t,e,a),Ee(t,e,a)):(R&&s&&Js(e),e.flags|=1,ht(t,e,n,a),e.child)}function xc(t,e,l,n,a){if(t===null){var u=l.type;return typeof u=="function"&&!Vs(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,ur(t,e,u,n,a)):(t=Xa(l.type,null,n,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!yo(t,a)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:Vn,l(i,n)&&t.ref===e.ref)return Ee(t,e,a)}return e.flags|=1,t=ve(u,n),t.ref=e.ref,t.return=e,e.child=t}function ur(t,e,l,n,a){if(t!==null){var u=t.memoizedProps;if(Vn(u,n)&&t.ref===e.ref)if(_t=!1,e.pendingProps=n=u,yo(t,a))t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,Ee(t,e,a)}return ss(t,e,l,n,a)}function ir(t,e,l,n){var a=n.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if(e.flags&128){if(u=u!==null?u.baseLanes|l:l,t!==null){for(n=e.child=t.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~u}else n=0,e.child=null;return Sc(t,e,u,l,n)}if(l&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ra(e,u!==null?u.cachePool:null),u!==null?_c(e,u):ts(),xf(e);else return n=e.lanes=536870912,Sc(t,e,u!==null?u.baseLanes|l:l,l,n)}else u!==null?(Ra(e,u.cachePool),_c(e,u),we(),e.memoizedState=null):(t!==null&&Ra(e,null),ts(),we());return ht(t,e,a,l),e.child}function On(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Sc(t,e,l,n,a){var u=Fs();return u=u===null?null:{parent:ct._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&Ra(e,null),ts(),xf(e),t!==null&&fn(t,e,n,!0),e.childLanes=a,null}function qa(t,e){return e=_u({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function zc(t,e,l){return hl(e,t.child,null,l),t=qa(e,e.pendingProps),t.flags|=2,jt(e),e.memoizedState=null,t}function im(t,e,l){var n=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(R){if(n.mode==="hidden")return t=qa(e,n),e.lanes=536870912,On(null,t);if(es(e),(t=I)?(t=Ir(t,$t),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:$e!==null?{id:ae,overflow:ue}:null,retryLane:536870912,hydrationErrors:null},l=ff(t),l.return=e,e.child=l,bt=e,I=null)):t=null,t===null)throw Ie(e);return e.lanes=536870912,null}return qa(e,n)}var u=t.memoizedState;if(u!==null){var i=u.dehydrated;if(es(e),a)if(e.flags&256)e.flags&=-257,e=zc(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(p(558));else if(_t||fn(t,e,l,!1),a=(l&t.childLanes)!==0,_t||a){if(n=K,n!==null&&(i=B_(n,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,zl(t,i),Ct(n,t,i),mo;mu(),e=zc(t,e,l)}else t=u.treeContext,I=Pt(i.nextSibling),bt=e,R=!0,Ge=null,$t=!1,t!==null&&df(e,t),e=qa(e,n),e.flags|=4096;return e}return t=ve(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ga(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(p(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function ss(t,e,l,n,a){return gl(e),l=eo(t,e,l,n,void 0,a),n=lo(),t!==null&&!_t?(no(t,e,a),Ee(t,e,a)):(R&&n&&Js(e),e.flags|=1,ht(t,e,l,a),e.child)}function Ac(t,e,l,n,a,u){return gl(e),e.updateQueue=null,l=zf(e,n,l,a),Sf(t),n=lo(),t!==null&&!_t?(no(t,e,u),Ee(t,e,u)):(R&&n&&Js(e),e.flags|=1,ht(t,e,l,u),e.child)}function Tc(t,e,l,n,a){if(gl(e),e.stateNode===null){var u=Rl,i=l.contextType;typeof i=="object"&&i!==null&&(u=vt(i)),u=new l(n,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=us,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=n,u.state=e.memoizedState,u.refs={},Is(e),i=l.contextType,u.context=typeof i=="object"&&i!==null?vt(i):Rl,u.state=e.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(oi(e,l,i,n),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&us.enqueueReplaceState(u,u.state,null),Bn(e,n,u,a),wn(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){u=e.stateNode;var s=e.memoizedProps,o=bl(l,s);u.props=o;var r=u.context,m=l.contextType;i=Rl,typeof m=="object"&&m!==null&&(i=vt(m));var g=l.getDerivedStateFromProps;m=typeof g=="function"||typeof u.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,m||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s||r!==i)&&pc(e,u,n,i),Ne=!1;var f=e.memoizedState;u.state=f,Bn(e,n,u,a),wn(),r=e.memoizedState,s||f!==r||Ne?(typeof g=="function"&&(oi(e,l,g,n),r=e.memoizedState),(o=Ne||hc(e,l,o,n,f,r,i))?(m||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=r),u.props=n,u.state=r,u.context=i,n=o):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{u=e.stateNode,Ii(t,e),i=e.memoizedProps,m=bl(l,i),u.props=m,g=e.pendingProps,f=u.context,r=l.contextType,o=Rl,typeof r=="object"&&r!==null&&(o=vt(r)),s=l.getDerivedStateFromProps,(r=typeof s=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==g||f!==o)&&pc(e,u,n,o),Ne=!1,f=e.memoizedState,u.state=f,Bn(e,n,u,a),wn();var y=e.memoizedState;i!==g||f!==y||Ne||t!==null&&t.dependencies!==null&&nu(t.dependencies)?(typeof s=="function"&&(oi(e,l,s,n),y=e.memoizedState),(m=Ne||hc(e,l,m,n,f,y,o)||t!==null&&t.dependencies!==null&&nu(t.dependencies))?(r||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,y,o),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,y,o)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=y),u.props=n,u.state=y,u.context=o,n=m):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return u=n,Ga(t,e),n=(e.flags&128)!==0,u||n?(u=e.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&n?(e.child=hl(e,t.child,null,a),e.child=hl(e,null,l,a)):ht(t,e,l,a),e.memoizedState=u.state,t=e.child):t=Ee(t,e,a),t}function Ec(t,e,l,n){return yl(),e.flags|=256,ht(t,e,l,n),e.child}var ci={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _i(t){return{baseLanes:t,cachePool:yf()}}function fi(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Bt),t}function sr(t,e,l){var n=e.pendingProps,a=!1,u=(e.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(at.current&2)!==0),i&&(a=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(R){if(a?je(e):we(),(t=I)?(t=Ir(t,$t),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:$e!==null?{id:ae,overflow:ue}:null,retryLane:536870912,hydrationErrors:null},l=ff(t),l.return=e,e.child=l,bt=e,I=null)):t=null,t===null)throw Ie(e);return xs(t)?e.lanes=32:e.lanes=536870912,null}var s=n.children;return n=n.fallback,a?(we(),a=e.mode,s=_u({mode:"hidden",children:s},a),n=fl(n,a,l,null),s.return=e,n.return=e,s.sibling=n,e.child=s,n=e.child,n.memoizedState=_i(l),n.childLanes=fi(t,i,l),e.memoizedState=ci,On(null,n)):(je(e),os(e,s))}var o=t.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(u)e.flags&256?(je(e),e.flags&=-257,e=ri(t,e,l)):e.memoizedState!==null?(we(),e.child=t.child,e.flags|=128,e=null):(we(),s=n.fallback,a=e.mode,n=_u({mode:"visible",children:n.children},a),s=fl(s,a,l,null),s.flags|=2,n.return=e,s.return=e,n.sibling=s,e.child=n,hl(e,t.child,null,l),n=e.child,n.memoizedState=_i(l),n.childLanes=fi(t,i,l),e.memoizedState=ci,e=On(null,n));else if(je(e),xs(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var r=i.dgst;i=r,n=Error(p(419)),n.stack="",n.digest=i,Kn({value:n,source:null,stack:null}),e=ri(t,e,l)}else if(_t||fn(t,e,l,!1),i=(l&t.childLanes)!==0,_t||i){if(i=K,i!==null&&(n=B_(i,l),n!==0&&n!==o.retryLane))throw o.retryLane=n,zl(t,n),Ct(i,t,n),mo;vs(s)||mu(),e=ri(t,e,l)}else vs(s)?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,I=Pt(s.nextSibling),bt=e,R=!0,Ge=null,$t=!1,t!==null&&df(e,t),e=os(e,n.children),e.flags|=4096);return e}return a?(we(),s=n.fallback,a=e.mode,o=t.child,r=o.sibling,n=ve(o,{mode:"hidden",children:n.children}),n.subtreeFlags=o.subtreeFlags&65011712,r!==null?s=ve(r,s):(s=fl(s,a,l,null),s.flags|=2),s.return=e,n.return=e,n.sibling=s,e.child=n,On(null,n),n=e.child,s=t.child.memoizedState,s===null?s=_i(l):(a=s.cachePool,a!==null?(o=ct._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=yf(),s={baseLanes:s.baseLanes|l,cachePool:a}),n.memoizedState=s,n.childLanes=fi(t,i,l),e.memoizedState=ci,On(t.child,n)):(je(e),l=t.child,t=l.sibling,l=ve(l,{mode:"visible",children:n.children}),l.return=e,l.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=l,e.memoizedState=null,l)}function os(t,e){return e=_u({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function _u(t,e){return t=wt(22,t,null,e),t.lanes=0,t}function ri(t,e,l){return hl(e,t.child,null,l),t=os(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Oc(t,e,l){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Wi(t.return,e,l)}function di(t,e,l,n,a,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:a,treeForkCount:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=l,i.tailMode=a,i.treeForkCount=u)}function or(t,e,l){var n=e.pendingProps,a=n.revealOrder,u=n.tail;n=n.children;var i=at.current,s=(i&2)!==0;if(s?(i=i&1|2,e.flags|=128):i&=1,W(at,i),ht(t,e,n,l),n=R?Jn:0,!s&&t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Oc(t,l,e);else if(t.tag===19)Oc(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(l=e.child,a=null;l!==null;)t=l.alternate,t!==null&&iu(t)===null&&(a=l),l=l.sibling;l=a,l===null?(a=e.child,e.child=null):(a=l.sibling,l.sibling=null),di(e,!1,a,l,u,n);break;case"backwards":case"unstable_legacy-backwards":for(l=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&iu(t)===null){e.child=a;break}t=a.sibling,a.sibling=l,l=a,a=t}di(e,!0,l,null,u,n);break;case"together":di(e,!1,null,null,void 0,n);break;default:e.memoizedState=null}return e.child}function Ee(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),tl|=e.lanes,!(l&e.childLanes))if(t!==null){if(fn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(p(153));if(e.child!==null){for(t=e.child,l=ve(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=ve(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function yo(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&nu(t)))}function sm(t,e,l){switch(e.tag){case 3:Fa(e,e.stateNode.containerInfo),De(e,ct,t.memoizedState.cache),yl();break;case 27:case 5:Bi(e);break;case 4:Fa(e,e.stateNode.containerInfo);break;case 10:De(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,es(e),null;break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(je(e),e.flags|=128,null):l&e.child.childLanes?sr(t,e,l):(je(e),t=Ee(t,e,l),t!==null?t.sibling:null);je(e);break;case 19:var a=(t.flags&128)!==0;if(n=(l&e.childLanes)!==0,n||(fn(t,e,l,!1),n=(l&e.childLanes)!==0),a){if(n)return or(t,e,l);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(at,at.current),n)break;return null;case 22:return e.lanes=0,ir(t,e,l,e.pendingProps);case 24:De(e,ct,t.memoizedState.cache)}return Ee(t,e,l)}function cr(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)_t=!0;else{if(!yo(t,l)&&!(e.flags&128))return _t=!1,sm(t,e,l);_t=!!(t.flags&131072)}else _t=!1,R&&e.flags&1048576&&rf(e,Jn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var n=e.pendingProps;if(t=ol(e.elementType),e.type=t,typeof t=="function")Vs(t)?(n=bl(t,n),e.tag=1,e=Tc(null,e,t,n,l)):(e.tag=0,e=ss(null,e,t,n,l));else{if(t!=null){var a=t.$$typeof;if(a===Ns){e.tag=11,e=vc(null,e,t,n,l);break t}else if(a===Ds){e.tag=14,e=xc(null,e,t,n,l);break t}}throw e=ji(t)||t,Error(p(306,e,""))}}return e;case 0:return ss(t,e,e.type,e.pendingProps,l);case 1:return n=e.type,a=bl(n,e.pendingProps),Tc(t,e,n,a,l);case 3:t:{if(Fa(e,e.stateNode.containerInfo),t===null)throw Error(p(387));n=e.pendingProps;var u=e.memoizedState;a=u.element,Ii(t,e),Bn(e,n,null,l);var i=e.memoizedState;if(n=i.cache,De(e,ct,n),n!==u.cache&&Fi(e,[ct],l,!0),wn(),n=i.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Ec(t,e,n,l);break t}else if(n!==a){a=Ft(Error(p(424)),e),Kn(a),e=Ec(t,e,n,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(I=Pt(t.firstChild),bt=e,R=!0,Ge=null,$t=!0,l=pf(e,null,n,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(yl(),n===a){e=Ee(t,e,l);break t}ht(t,e,n,l)}e=e.child}return e;case 26:return Ga(t,e),t===null?(l=Jc(e.type,null,e.pendingProps,null))?e.memoizedState=l:R||(l=e.type,t=e.pendingProps,n=pu(qe.current).createElement(l),n[pt]=e,n[Ut]=t,xt(n,l,t),mt(n),e.stateNode=n):e.memoizedState=Jc(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Bi(e),t===null&&R&&(n=e.stateNode=Pr(e.type,e.pendingProps,qe.current),bt=e,$t=!0,a=I,ll(e.type)?(Ss=a,I=Pt(n.firstChild)):I=a),ht(t,e,e.pendingProps.children,l),Ga(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&R&&((a=n=I)&&(n=Hm(n,e.type,e.pendingProps,$t),n!==null?(e.stateNode=n,bt=e,I=Pt(n.firstChild),$t=!1,a=!0):a=!1),a||Ie(e)),Bi(e),a=e.type,u=e.pendingProps,i=t!==null?t.memoizedProps:null,n=u.children,ps(a,u)?n=null:i!==null&&ps(a,i)&&(e.flags|=32),e.memoizedState!==null&&(a=eo(t,e,Id,null,null,l),ta._currentValue=a),Ga(t,e),ht(t,e,n,l),e.child;case 6:return t===null&&R&&((t=l=I)&&(l=Xm(l,e.pendingProps,$t),l!==null?(e.stateNode=l,bt=e,I=null,t=!0):t=!1),t||Ie(e)),null;case 13:return sr(t,e,l);case 4:return Fa(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=hl(e,null,n,l):ht(t,e,n,l),e.child;case 11:return vc(t,e,e.type,e.pendingProps,l);case 7:return ht(t,e,e.pendingProps,l),e.child;case 8:return ht(t,e,e.pendingProps.children,l),e.child;case 12:return ht(t,e,e.pendingProps.children,l),e.child;case 10:return n=e.pendingProps,De(e,e.type,n.value),ht(t,e,n.children,l),e.child;case 9:return a=e.type._context,n=e.pendingProps.children,gl(e),a=vt(a),n=n(a),e.flags|=1,ht(t,e,n,l),e.child;case 14:return xc(t,e,e.type,e.pendingProps,l);case 15:return ur(t,e,e.type,e.pendingProps,l);case 19:return or(t,e,l);case 31:return im(t,e,l);case 22:return ir(t,e,l,e.pendingProps);case 24:return gl(e),n=vt(ct),t===null?(a=Fs(),a===null&&(a=K,u=Ws(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=l),a=u),e.memoizedState={parent:n,cache:a},Is(e),De(e,ct,a)):(t.lanes&l&&(Ii(t,e),Bn(e,null,null,l),wn()),a=t.memoizedState,u=e.memoizedState,a.parent!==n?(a={parent:n,cache:n},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),De(e,ct,n)):(n=u.cache,De(e,ct,n),n!==a.cache&&Fi(e,[ct],l,!0))),ht(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(p(156,e.tag))}function fe(t){t.flags|=4}function mi(t,e,l,n,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(Dr())t.flags|=8192;else throw dl=au,$s}else t.flags&=-16777217}function Mc(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!l0(e))if(Dr())t.flags|=8192;else throw dl=au,$s}function Ma(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?D_():536870912,t.lanes|=e,ln|=e)}function vn(t,e){if(!R)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function $(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,n=0;if(e)for(var a=t.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=n,t.childLanes=l,e}function om(t,e,l){var n=e.pendingProps;switch(Ks(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $(e),null;case 1:return $(e),null;case 3:return l=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),xe(ct),Fl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Tl(e)?fe(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ui())),$(e),null;case 26:var a=e.type,u=e.memoizedState;return t===null?(fe(e),u!==null?($(e),Mc(e,u)):($(e),mi(e,a,null,n,l))):u?u!==t.memoizedState?(fe(e),$(e),Mc(e,u)):($(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&fe(e),$(e),mi(e,a,t,n,l)),null;case 27:if($a(e),l=qe.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&fe(e);else{if(!n){if(e.stateNode===null)throw Error(p(166));return $(e),null}t=se.current,Tl(e)?nc(e):(t=Pr(a,n,l),e.stateNode=t,fe(e))}return $(e),null;case 5:if($a(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&fe(e);else{if(!n){if(e.stateNode===null)throw Error(p(166));return $(e),null}if(u=se.current,Tl(e))nc(e);else{var i=pu(qe.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}u[pt]=e,u[Ut]=n;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=u;t:switch(xt(u,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&fe(e)}}return $(e),mi(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&fe(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(p(166));if(t=qe.current,Tl(e)){if(t=e.stateNode,l=e.memoizedProps,n=null,a=bt,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}t[pt]=e,t=!!(t.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||Wr(t.nodeValue,l)),t||Ie(e,!0)}else t=pu(t).createTextNode(n),t[pt]=e,e.stateNode=t}return $(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(n=Tl(e),l!==null){if(t===null){if(!n)throw Error(p(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(557));t[pt]=e}else yl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$(e),t=!1}else l=ui(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(jt(e),e):(jt(e),null);if(e.flags&128)throw Error(p(558))}return $(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Tl(e),n!==null&&n.dehydrated!==null){if(t===null){if(!a)throw Error(p(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(p(317));a[pt]=e}else yl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$(e),a=!1}else a=ui(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(jt(e),e):(jt(e),null)}return jt(e),e.flags&128?(e.lanes=l,e):(l=n!==null,t=t!==null&&t.memoizedState!==null,l&&(n=e.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==a&&(n.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),Ma(e,e.updateQueue),$(e),null);case 4:return Fl(),t===null&&So(e.stateNode.containerInfo),$(e),null;case 10:return xe(e.type),$(e),null;case 19:if(yt(at),n=e.memoizedState,n===null)return $(e),null;if(a=(e.flags&128)!==0,u=n.rendering,u===null)if(a)vn(n,!1);else{if(nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(u=iu(t),u!==null){for(e.flags|=128,vn(n,!1),t=u.updateQueue,e.updateQueue=t,Ma(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)_f(l,t),l=l.sibling;return W(at,at.current&1|2),R&&ye(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&Ht()>ru&&(e.flags|=128,a=!0,vn(n,!1),e.lanes=4194304)}else{if(!a)if(t=iu(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Ma(e,t),vn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!R)return $(e),null}else 2*Ht()-n.renderingStartTime>ru&&l!==536870912&&(e.flags|=128,a=!0,vn(n,!1),e.lanes=4194304);n.isBackwards?(u.sibling=e.child,e.child=u):(t=n.last,t!==null?t.sibling=u:e.child=u,n.last=u)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Ht(),t.sibling=null,l=at.current,W(at,a?l&1|2:l&1),R&&ye(e,n.treeForkCount),t):($(e),null);case 22:case 23:return jt(e),Ps(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?l&536870912&&!(e.flags&128)&&($(e),e.subtreeFlags&6&&(e.flags|=8192)):$(e),l=e.updateQueue,l!==null&&Ma(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==l&&(e.flags|=2048),t!==null&&yt(rl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),xe(ct),$(e),null;case 25:return null;case 30:return null}throw Error(p(156,e.tag))}function cm(t,e){switch(Ks(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xe(ct),Fl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return $a(e),null;case 31:if(e.memoizedState!==null){if(jt(e),e.alternate===null)throw Error(p(340));yl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(jt(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(p(340));yl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(at),null;case 4:return Fl(),null;case 10:return xe(e.type),null;case 22:case 23:return jt(e),Ps(),t!==null&&yt(rl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return xe(ct),null;case 25:return null;default:return null}}function _r(t,e){switch(Ks(e),e.tag){case 3:xe(ct),Fl();break;case 26:case 27:case 5:$a(e);break;case 4:Fl();break;case 31:e.memoizedState!==null&&jt(e);break;case 13:jt(e);break;case 19:yt(at);break;case 10:xe(e.type);break;case 22:case 23:jt(e),Ps(),t!==null&&yt(rl);break;case 24:xe(ct)}}function fa(t,e){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var a=n.next;l=a;do{if((l.tag&t)===t){n=void 0;var u=l.create,i=l.inst;n=u(),i.destroy=n}l=l.next}while(l!==a)}}catch(s){Z(e,e.return,s)}}function Pe(t,e,l){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var u=a.next;n=u;do{if((n.tag&t)===t){var i=n.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,a=e;var o=l,r=s;try{r()}catch(m){Z(a,o,m)}}}n=n.next}while(n!==u)}}catch(m){Z(e,e.return,m)}}function fr(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{vf(e,l)}catch(n){Z(t,t.return,n)}}}function rr(t,e,l){l.props=bl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(n){Z(t,e,n)}}function Xn(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof l=="function"?t.refCleanup=l(n):l.current=n}}catch(a){Z(t,e,a)}}function ie(t,e){var l=t.ref,n=t.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(a){Z(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(a){Z(t,e,a)}else l.current=null}function dr(t){var e=t.type,l=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break t;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(a){Z(t,t.return,a)}}function yi(t,e,l){try{var n=t.stateNode;Um(n,t.type,l,e),n[Ut]=e}catch(a){Z(t,t.return,a)}}function mr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ll(t.type)||t.tag===4}function gi(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||mr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ll(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cs(t,e,l){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=pe));else if(n!==4&&(n===27&&ll(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(cs(t,e,l),t=t.sibling;t!==null;)cs(t,e,l),t=t.sibling}function fu(t,e,l){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(n!==4&&(n===27&&ll(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(fu(t,e,l),t=t.sibling;t!==null;)fu(t,e,l),t=t.sibling}function yr(t){var e=t.stateNode,l=t.memoizedProps;try{for(var n=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);xt(e,n,l),e[pt]=t,e[Ut]=l}catch(u){Z(t,t.return,u)}}var ge=!1,ot=!1,hi=!1,Yc=typeof WeakSet=="function"?WeakSet:Set,dt=null;function _m(t,e){if(t=t.containerInfo,gs=Su,t=ef(t),Gs(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var a=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var i=0,s=-1,o=-1,r=0,m=0,g=t,f=null;e:for(;;){for(var y;g!==l||a!==0&&g.nodeType!==3||(s=i+a),g!==u||n!==0&&g.nodeType!==3||(o=i+n),g.nodeType===3&&(i+=g.nodeValue.length),(y=g.firstChild)!==null;)f=g,g=y;for(;;){if(g===t)break e;if(f===l&&++r===a&&(s=i),f===u&&++m===n&&(o=i),(y=g.nextSibling)!==null)break;g=f,f=g.parentNode}g=y}l=s===-1||o===-1?null:{start:s,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(hs={focusedElem:t,selectionRange:l},Su=!1,dt=e;dt!==null;)if(e=dt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,dt=t;else for(;dt!==null;){switch(e=dt,u=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)a=t[l],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&u!==null){t=void 0,l=e,a=u.memoizedProps,u=u.memoizedState,n=l.stateNode;try{var v=bl(l.type,a);t=n.getSnapshotBeforeUpdate(v,u),n.__reactInternalSnapshotBeforeUpdate=t}catch(A){Z(l,l.return,A)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)bs(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(p(163))}if(t=e.sibling,t!==null){t.return=e.return,dt=t;break}dt=e.return}}function gr(t,e,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:de(t,l),n&4&&fa(5,l);break;case 1:if(de(t,l),n&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(i){Z(l,l.return,i)}else{var a=bl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){Z(l,l.return,i)}}n&64&&fr(l),n&512&&Xn(l,l.return);break;case 3:if(de(t,l),n&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{vf(t,e)}catch(i){Z(l,l.return,i)}}break;case 27:e===null&&n&4&&yr(l);case 26:case 5:de(t,l),e===null&&n&4&&dr(l),n&512&&Xn(l,l.return);break;case 12:de(t,l);break;case 31:de(t,l),n&4&&br(t,l);break;case 13:de(t,l),n&4&&vr(t,l),n&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=bm.bind(null,l),Rm(t,l))));break;case 22:if(n=l.memoizedState!==null||ge,!n){e=e!==null&&e.memoizedState!==null||ot,a=ge;var u=ot;ge=n,(ot=e)&&!u?me(t,l,(l.subtreeFlags&8772)!==0):de(t,l),ge=a,ot=u}break;case 30:break;default:de(t,l)}}function hr(t){var e=t.alternate;e!==null&&(t.alternate=null,hr(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Hs(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var et=null,Mt=!1;function re(t,e,l){for(l=l.child;l!==null;)pr(t,e,l),l=l.sibling}function pr(t,e,l){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(aa,l)}catch{}switch(l.tag){case 26:ot||ie(l,e),re(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:ot||ie(l,e);var n=et,a=Mt;ll(l.type)&&(et=l.stateNode,Mt=!1),re(t,e,l),qn(l.stateNode),et=n,Mt=a;break;case 5:ot||ie(l,e);case 6:if(n=et,a=Mt,et=null,re(t,e,l),et=n,Mt=a,et!==null)if(Mt)try{(et.nodeType===9?et.body:et.nodeName==="HTML"?et.ownerDocument.body:et).removeChild(l.stateNode)}catch(u){Z(l,e,u)}else try{et.removeChild(l.stateNode)}catch(u){Z(l,e,u)}break;case 18:et!==null&&(Mt?(t=et,qc(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),sn(t)):qc(et,l.stateNode));break;case 4:n=et,a=Mt,et=l.stateNode.containerInfo,Mt=!0,re(t,e,l),et=n,Mt=a;break;case 0:case 11:case 14:case 15:Pe(2,l,e),ot||Pe(4,l,e),re(t,e,l);break;case 1:ot||(ie(l,e),n=l.stateNode,typeof n.componentWillUnmount=="function"&&rr(l,e,n)),re(t,e,l);break;case 21:re(t,e,l);break;case 22:ot=(n=ot)||l.memoizedState!==null,re(t,e,l),ot=n;break;default:re(t,e,l)}}function br(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{sn(t)}catch(l){Z(e,e.return,l)}}}function vr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{sn(t)}catch(l){Z(e,e.return,l)}}function fm(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Yc),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Yc),e;default:throw Error(p(435,t.tag))}}function Ya(t,e){var l=fm(t);e.forEach(function(n){if(!l.has(n)){l.add(n);var a=vm.bind(null,t,n);n.then(a,a)}})}function Et(t,e){var l=e.deletions;if(l!==null)for(var n=0;n<l.length;n++){var a=l[n],u=t,i=e,s=i;t:for(;s!==null;){switch(s.tag){case 27:if(ll(s.type)){et=s.stateNode,Mt=!1;break t}break;case 5:et=s.stateNode,Mt=!1;break t;case 3:case 4:et=s.stateNode.containerInfo,Mt=!0;break t}s=s.return}if(et===null)throw Error(p(160));pr(u,i,a),et=null,Mt=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)xr(e,t),e=e.sibling}var le=null;function xr(t,e){var l=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Et(e,t),Ot(t),n&4&&(Pe(3,t,t.return),fa(3,t),Pe(5,t,t.return));break;case 1:Et(e,t),Ot(t),n&512&&(ot||l===null||ie(l,l.return)),n&64&&ge&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var a=le;if(Et(e,t),Ot(t),n&512&&(ot||l===null||ie(l,l.return)),n&4){var u=l!==null?l.memoizedState:null;if(n=t.memoizedState,l===null)if(n===null)if(t.stateNode===null){t:{n=t.type,l=t.memoizedProps,a=a.ownerDocument||a;e:switch(n){case"title":u=a.getElementsByTagName("title")[0],(!u||u[sa]||u[pt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(n),a.head.insertBefore(u,a.querySelector("head > title"))),xt(u,n,l),u[pt]=t,mt(u),n=u;break t;case"link":var i=Wc("link","href",a).get(n+(l.href||""));if(i){for(var s=0;s<i.length;s++)if(u=i[s],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(s,1);break e}}u=a.createElement(n),xt(u,n,l),a.head.appendChild(u);break;case"meta":if(i=Wc("meta","content",a).get(n+(l.content||""))){for(s=0;s<i.length;s++)if(u=i[s],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(s,1);break e}}u=a.createElement(n),xt(u,n,l),a.head.appendChild(u);break;default:throw Error(p(468,n))}u[pt]=t,mt(u),n=u}t.stateNode=n}else Fc(a,t.type,t.stateNode);else t.stateNode=Kc(a,n,t.memoizedProps);else u!==n?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,n===null?Fc(a,t.type,t.stateNode):Kc(a,n,t.memoizedProps)):n===null&&t.stateNode!==null&&yi(t,t.memoizedProps,l.memoizedProps)}break;case 27:Et(e,t),Ot(t),n&512&&(ot||l===null||ie(l,l.return)),l!==null&&n&4&&yi(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Et(e,t),Ot(t),n&512&&(ot||l===null||ie(l,l.return)),t.flags&32){a=t.stateNode;try{Il(a,"")}catch(v){Z(t,t.return,v)}}n&4&&t.stateNode!=null&&(a=t.memoizedProps,yi(t,a,l!==null?l.memoizedProps:a)),n&1024&&(hi=!0);break;case 6:if(Et(e,t),Ot(t),n&4){if(t.stateNode===null)throw Error(p(162));n=t.memoizedProps,l=t.stateNode;try{l.nodeValue=n}catch(v){Z(t,t.return,v)}}break;case 3:if(Va=null,a=le,le=bu(e.containerInfo),Et(e,t),le=a,Ot(t),n&4&&l!==null&&l.memoizedState.isDehydrated)try{sn(e.containerInfo)}catch(v){Z(t,t.return,v)}hi&&(hi=!1,Sr(t));break;case 4:n=le,le=bu(t.stateNode.containerInfo),Et(e,t),Ot(t),le=n;break;case 12:Et(e,t),Ot(t);break;case 31:Et(e,t),Ot(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ya(t,n)));break;case 13:Et(e,t),Ot(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Xu=Ht()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ya(t,n)));break;case 22:a=t.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,r=ge,m=ot;if(ge=r||a,ot=m||o,Et(e,t),ot=m,ge=r,Ot(t),n&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(l===null||o||ge||ot||cl(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){o=l=e;try{if(u=o.stateNode,a)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=o.stateNode;var g=o.memoizedProps.style,f=g!=null&&g.hasOwnProperty("display")?g.display:null;s.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(v){Z(o,o.return,v)}}}else if(e.tag===6){if(l===null){o=e;try{o.stateNode.nodeValue=a?"":o.memoizedProps}catch(v){Z(o,o.return,v)}}}else if(e.tag===18){if(l===null){o=e;try{var y=o.stateNode;a?Gc(y,!0):Gc(o.stateNode,!1)}catch(v){Z(o,o.return,v)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,Ya(t,l))));break;case 19:Et(e,t),Ot(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ya(t,n)));break;case 30:break;case 21:break;default:Et(e,t),Ot(t)}}function Ot(t){var e=t.flags;if(e&2){try{for(var l,n=t.return;n!==null;){if(mr(n)){l=n;break}n=n.return}if(l==null)throw Error(p(160));switch(l.tag){case 27:var a=l.stateNode,u=gi(t);fu(t,u,a);break;case 5:var i=l.stateNode;l.flags&32&&(Il(i,""),l.flags&=-33);var s=gi(t);fu(t,s,i);break;case 3:case 4:var o=l.stateNode.containerInfo,r=gi(t);cs(t,r,o);break;default:throw Error(p(161))}}catch(m){Z(t,t.return,m)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sr(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Sr(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function de(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)gr(t,e.alternate,e),e=e.sibling}function cl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Pe(4,e,e.return),cl(e);break;case 1:ie(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&rr(e,e.return,l),cl(e);break;case 27:qn(e.stateNode);case 26:case 5:ie(e,e.return),cl(e);break;case 22:e.memoizedState===null&&cl(e);break;case 30:cl(e);break;default:cl(e)}t=t.sibling}}function me(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,a=t,u=e,i=u.flags;switch(u.tag){case 0:case 11:case 15:me(a,u,l),fa(4,u);break;case 1:if(me(a,u,l),n=u,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(r){Z(n,n.return,r)}if(n=u,a=n.updateQueue,a!==null){var s=n.stateNode;try{var o=a.shared.hiddenCallbacks;if(o!==null)for(a.shared.hiddenCallbacks=null,a=0;a<o.length;a++)bf(o[a],s)}catch(r){Z(n,n.return,r)}}l&&i&64&&fr(u),Xn(u,u.return);break;case 27:yr(u);case 26:case 5:me(a,u,l),l&&n===null&&i&4&&dr(u),Xn(u,u.return);break;case 12:me(a,u,l);break;case 31:me(a,u,l),l&&i&4&&br(a,u);break;case 13:me(a,u,l),l&&i&4&&vr(a,u);break;case 22:u.memoizedState===null&&me(a,u,l),Xn(u,u.return);break;case 30:break;default:me(a,u,l)}e=e.sibling}}function go(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&ca(l))}function ho(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ca(t))}function ee(t,e,l,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zr(t,e,l,n),e=e.sibling}function zr(t,e,l,n){var a=e.flags;switch(e.tag){case 0:case 11:case 15:ee(t,e,l,n),a&2048&&fa(9,e);break;case 1:ee(t,e,l,n);break;case 3:ee(t,e,l,n),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ca(t)));break;case 12:if(a&2048){ee(t,e,l,n),t=e.stateNode;try{var u=e.memoizedProps,i=u.id,s=u.onPostCommit;typeof s=="function"&&s(i,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){Z(e,e.return,o)}}else ee(t,e,l,n);break;case 31:ee(t,e,l,n);break;case 13:ee(t,e,l,n);break;case 23:break;case 22:u=e.stateNode,i=e.alternate,e.memoizedState!==null?u._visibility&2?ee(t,e,l,n):Rn(t,e):u._visibility&2?ee(t,e,l,n):(u._visibility|=2,Yl(t,e,l,n,(e.subtreeFlags&10256)!==0||!1)),a&2048&&go(i,e);break;case 24:ee(t,e,l,n),a&2048&&ho(e.alternate,e);break;default:ee(t,e,l,n)}}function Yl(t,e,l,n,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,i=e,s=l,o=n,r=i.flags;switch(i.tag){case 0:case 11:case 15:Yl(u,i,s,o,a),fa(8,i);break;case 23:break;case 22:var m=i.stateNode;i.memoizedState!==null?m._visibility&2?Yl(u,i,s,o,a):Rn(u,i):(m._visibility|=2,Yl(u,i,s,o,a)),a&&r&2048&&go(i.alternate,i);break;case 24:Yl(u,i,s,o,a),a&&r&2048&&ho(i.alternate,i);break;default:Yl(u,i,s,o,a)}e=e.sibling}}function Rn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,n=e,a=n.flags;switch(n.tag){case 22:Rn(l,n),a&2048&&go(n.alternate,n);break;case 24:Rn(l,n),a&2048&&ho(n.alternate,n);break;default:Rn(l,n)}e=e.sibling}}var Mn=8192;function El(t,e,l){if(t.subtreeFlags&Mn)for(t=t.child;t!==null;)Ar(t,e,l),t=t.sibling}function Ar(t,e,l){switch(t.tag){case 26:El(t,e,l),t.flags&Mn&&t.memoizedState!==null&&$m(l,le,t.memoizedState,t.memoizedProps);break;case 5:El(t,e,l);break;case 3:case 4:var n=le;le=bu(t.stateNode.containerInfo),El(t,e,l),le=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Mn,Mn=16777216,El(t,e,l),Mn=n):El(t,e,l));break;default:El(t,e,l)}}function Tr(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function xn(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var n=e[l];dt=n,Or(n,t)}Tr(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Er(t),t=t.sibling}function Er(t){switch(t.tag){case 0:case 11:case 15:xn(t),t.flags&2048&&Pe(9,t,t.return);break;case 3:xn(t);break;case 12:xn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Za(t)):xn(t);break;default:xn(t)}}function Za(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var n=e[l];dt=n,Or(n,t)}Tr(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Pe(8,e,e.return),Za(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Za(e));break;default:Za(e)}t=t.sibling}}function Or(t,e){for(;dt!==null;){var l=dt;switch(l.tag){case 0:case 11:case 15:Pe(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ca(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,dt=n;else t:for(l=t;dt!==null;){n=dt;var a=n.sibling,u=n.return;if(hr(n),n===l){dt=null;break t}if(a!==null){a.return=u,dt=a;break t}dt=u}}}var rm={getCacheForType:function(t){var e=vt(ct),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return vt(ct).controller.signal}},dm=typeof WeakMap=="function"?WeakMap:Map,L=0,K=null,H=null,X=0,G=0,Dt=null,Re=!1,dn=!1,po=!1,Oe=0,nt=0,tl=0,ml=0,bo=0,Bt=0,ln=0,Qn=null,Yt=null,_s=!1,Xu=0,Mr=0,ru=1/0,du=null,Ve=null,ft=0,Je=null,nn=null,Se=0,fs=0,rs=null,Yr=null,Ln=0,ds=null;function Qt(){return L&2&&X!==0?X&-X:E.T!==null?xo():H_()}function Cr(){if(Bt===0)if(!(X&536870912)||R){var t=xa;xa<<=1,!(xa&3932160)&&(xa=262144),Bt=t}else Bt=536870912;return t=qt.current,t!==null&&(t.flags|=32),Bt}function Ct(t,e,l){(t===K&&(G===2||G===9)||t.cancelPendingCommit!==null)&&(an(t,0),Qe(t,X,Bt,!1)),ia(t,l),(!(L&2)||t!==K)&&(t===K&&(!(L&2)&&(ml|=l),nt===4&&Qe(t,X,Bt,!1)),ce(t))}function Ur(t,e,l){if(L&6)throw Error(p(327));var n=!l&&(e&127)===0&&(e&t.expiredLanes)===0||ua(t,e),a=n?gm(t,e):pi(t,e,!0),u=n;do{if(a===0){dn&&!n&&Qe(t,e,0,!1);break}else{if(l=t.current.alternate,u&&!mm(l)){a=pi(t,e,!1),u=!1;continue}if(a===2){if(u=e,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var s=t;a=Qn;var o=s.current.memoizedState.isDehydrated;if(o&&(an(s,i).flags|=256),i=pi(s,i,!1),i!==2){if(po&&!o){s.errorRecoveryDisabledLanes|=u,ml|=u,a=4;break t}u=Yt,Yt=a,u!==null&&(Yt===null?Yt=u:Yt.push.apply(Yt,u))}a=i}if(u=!1,a!==2)continue}}if(a===1){an(t,0),Qe(t,e,0,!0);break}t:{switch(n=t,u=a,u){case 0:case 1:throw Error(p(345));case 4:if((e&4194048)!==e)break;case 6:Qe(n,e,Bt,!Re);break t;case 2:Yt=null;break;case 3:case 5:break;default:throw Error(p(329))}if((e&62914560)===e&&(a=Xu+300-Ht(),10<a)){if(Qe(n,e,Bt,!Re),Ou(n,0,!0)!==0)break t;Se=e,n.timeoutHandle=$r(Cc.bind(null,n,l,Yt,du,_s,e,Bt,ml,ln,Re,u,"Throttled",-0,0),a);break t}Cc(n,l,Yt,du,_s,e,Bt,ml,ln,Re,u,null,-0,0)}}break}while(!0);ce(t)}function Cc(t,e,l,n,a,u,i,s,o,r,m,g,f,y){if(t.timeoutHandle=-1,g=e.subtreeFlags,g&8192||(g&16785408)===16785408){g={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pe},Ar(e,u,g);var v=(u&62914560)===u?Xu-Ht():(u&4194048)===u?Mr-Ht():0;if(v=Im(g,v),v!==null){Se=u,t.cancelPendingCommit=v(Nc.bind(null,t,e,u,l,n,a,i,s,o,m,g,null,f,y)),Qe(t,u,i,!r);return}}Nc(t,e,u,l,n,a,i,s,o)}function mm(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var a=l[n],u=a.getSnapshot;a=a.value;try{if(!Lt(u(),a))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qe(t,e,l,n){e&=~bo,e&=~ml,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var a=e;0<a;){var u=31-Rt(a),i=1<<u;n[u]=-1,a&=~i}l!==0&&j_(t,l,e)}function Ru(){return L&6?!0:(ra(0),!1)}function vo(){if(H!==null){if(G===0)var t=H.return;else t=H,be=Al=null,ao(t),Jl=null,Wn=0,t=H;for(;t!==null;)_r(t.alternate,t),t=t.return;H=null}}function an(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,jm(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Se=0,vo(),K=t,H=l=ve(t.current,null),X=e,G=0,Dt=null,Re=!1,dn=ua(t,e),po=!1,ln=Bt=bo=ml=tl=nt=0,Yt=Qn=null,_s=!1,e&8&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var a=31-Rt(n),u=1<<a;e|=t[a],n&=~u}return Oe=e,Uu(),l}function Nr(t,e){M=null,E.H=$n,e===rn||e===Du?(e=oc(),G=3):e===$s?(e=oc(),G=4):G=e===mo?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Dt=e,H===null&&(nt=1,cu(t,Ft(e,t.current)))}function Dr(){var t=qt.current;return t===null?!0:(X&4194048)===X?It===null:(X&62914560)===X||X&536870912?t===It:!1}function jr(){var t=E.H;return E.H=$n,t===null?$n:t}function wr(){var t=E.A;return E.A=rm,t}function mu(){nt=4,Re||(X&4194048)!==X&&qt.current!==null||(dn=!0),!(tl&134217727)&&!(ml&134217727)||K===null||Qe(K,X,Bt,!1)}function pi(t,e,l){var n=L;L|=2;var a=jr(),u=wr();(K!==t||X!==e)&&(du=null,an(t,e)),e=!1;var i=nt;t:do try{if(G!==0&&H!==null){var s=H,o=Dt;switch(G){case 8:vo(),i=6;break t;case 3:case 2:case 9:case 6:qt.current===null&&(e=!0);var r=G;if(G=0,Dt=null,ql(t,s,o,r),l&&dn){i=0;break t}break;default:r=G,G=0,Dt=null,ql(t,s,o,r)}}ym(),i=nt;break}catch(m){Nr(t,m)}while(!0);return e&&t.shellSuspendCounter++,be=Al=null,L=n,E.H=a,E.A=u,H===null&&(K=null,X=0,Uu()),i}function ym(){for(;H!==null;)Br(H)}function gm(t,e){var l=L;L|=2;var n=jr(),a=wr();K!==t||X!==e?(du=null,ru=Ht()+500,an(t,e)):dn=ua(t,e);t:do try{if(G!==0&&H!==null){e=H;var u=Dt;e:switch(G){case 1:G=0,Dt=null,ql(t,e,u,1);break;case 2:case 9:if(sc(u)){G=0,Dt=null,Uc(e);break}e=function(){G!==2&&G!==9||K!==t||(G=7),ce(t)},u.then(e,e);break t;case 3:G=7;break t;case 4:G=5;break t;case 7:sc(u)?(G=0,Dt=null,Uc(e)):(G=0,Dt=null,ql(t,e,u,7));break;case 5:var i=null;switch(H.tag){case 26:i=H.memoizedState;case 5:case 27:var s=H;if(i?l0(i):s.stateNode.complete){G=0,Dt=null;var o=s.sibling;if(o!==null)H=o;else{var r=s.return;r!==null?(H=r,Qu(r)):H=null}break e}}G=0,Dt=null,ql(t,e,u,5);break;case 6:G=0,Dt=null,ql(t,e,u,6);break;case 8:vo(),nt=6;break t;default:throw Error(p(462))}}hm();break}catch(m){Nr(t,m)}while(!0);return be=Al=null,E.H=n,E.A=a,L=l,H!==null?0:(K=null,X=0,Uu(),nt)}function hm(){for(;H!==null&&!Q0();)Br(H)}function Br(t){var e=cr(t.alternate,t,Oe);t.memoizedProps=t.pendingProps,e===null?Qu(t):H=e}function Uc(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Ac(l,e,e.pendingProps,e.type,void 0,X);break;case 11:e=Ac(l,e,e.pendingProps,e.type.render,e.ref,X);break;case 5:ao(e);default:_r(l,e),e=H=_f(e,Oe),e=cr(l,e,Oe)}t.memoizedProps=t.pendingProps,e===null?Qu(t):H=e}function ql(t,e,l,n){be=Al=null,ao(e),Jl=null,Wn=0;var a=e.return;try{if(um(t,a,e,l,X)){nt=1,cu(t,Ft(l,t.current)),H=null;return}}catch(u){if(a!==null)throw H=a,u;nt=1,cu(t,Ft(l,t.current)),H=null;return}e.flags&32768?(R||n===1?t=!0:dn||X&536870912?t=!1:(Re=t=!0,(n===2||n===9||n===3||n===6)&&(n=qt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Hr(e,t)):Qu(e)}function Qu(t){var e=t;do{if(e.flags&32768){Hr(e,Re);return}t=e.return;var l=om(e.alternate,e,Oe);if(l!==null){H=l;return}if(e=e.sibling,e!==null){H=e;return}H=e=t}while(e!==null);nt===0&&(nt=5)}function Hr(t,e){do{var l=cm(t.alternate,t);if(l!==null){l.flags&=32767,H=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){H=t;return}H=t=l}while(t!==null);nt=6,H=null}function Nc(t,e,l,n,a,u,i,s,o){t.cancelPendingCommit=null;do Lu();while(ft!==0);if(L&6)throw Error(p(327));if(e!==null){if(e===t.current)throw Error(p(177));if(u=e.lanes|e.childLanes,u|=Zs,F0(t,l,u,i,s,o),t===K&&(H=K=null,X=0),nn=e,Je=t,Se=l,fs=u,rs=a,Yr=n,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,xm(Ia,function(){return qr(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,e.subtreeFlags&13878||n){n=E.T,E.T=null,a=q.p,q.p=2,i=L,L|=4;try{_m(t,e,l)}finally{L=i,q.p=a,E.T=n}}ft=1,Xr(),Rr(),Qr()}}function Xr(){if(ft===1){ft=0;var t=Je,e=nn,l=(e.flags&13878)!==0;if(e.subtreeFlags&13878||l){l=E.T,E.T=null;var n=q.p;q.p=2;var a=L;L|=4;try{xr(e,t);var u=hs,i=ef(t.containerInfo),s=u.focusedElem,o=u.selectionRange;if(i!==s&&s&&s.ownerDocument&&tf(s.ownerDocument.documentElement,s)){if(o!==null&&Gs(s)){var r=o.start,m=o.end;if(m===void 0&&(m=r),"selectionStart"in s)s.selectionStart=r,s.selectionEnd=Math.min(m,s.value.length);else{var g=s.ownerDocument||document,f=g&&g.defaultView||window;if(f.getSelection){var y=f.getSelection(),v=s.textContent.length,A=Math.min(o.start,v),j=o.end===void 0?A:Math.min(o.end,v);!y.extend&&A>j&&(i=j,j=A,A=i);var _=tc(s,A),c=tc(s,j);if(_&&c&&(y.rangeCount!==1||y.anchorNode!==_.node||y.anchorOffset!==_.offset||y.focusNode!==c.node||y.focusOffset!==c.offset)){var d=g.createRange();d.setStart(_.node,_.offset),y.removeAllRanges(),A>j?(y.addRange(d),y.extend(c.node,c.offset)):(d.setEnd(c.node,c.offset),y.addRange(d))}}}}for(g=[],y=s;y=y.parentNode;)y.nodeType===1&&g.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<g.length;s++){var h=g[s];h.element.scrollLeft=h.left,h.element.scrollTop=h.top}}Su=!!gs,hs=gs=null}finally{L=a,q.p=n,E.T=l}}t.current=e,ft=2}}function Rr(){if(ft===2){ft=0;var t=Je,e=nn,l=(e.flags&8772)!==0;if(e.subtreeFlags&8772||l){l=E.T,E.T=null;var n=q.p;q.p=2;var a=L;L|=4;try{gr(t,e.alternate,e)}finally{L=a,q.p=n,E.T=l}}ft=3}}function Qr(){if(ft===4||ft===3){ft=0,L0();var t=Je,e=nn,l=Se,n=Yr;e.subtreeFlags&10256||e.flags&10256?ft=5:(ft=0,nn=Je=null,Lr(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Ve=null),Bs(l),e=e.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(aa,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=E.T,a=q.p,q.p=2,E.T=null;try{for(var u=t.onRecoverableError,i=0;i<n.length;i++){var s=n[i];u(s.value,{componentStack:s.stack})}}finally{E.T=e,q.p=a}}Se&3&&Lu(),ce(t),a=t.pendingLanes,l&261930&&a&42?t===ds?Ln++:(Ln=0,ds=t):Ln=0,ra(0)}}function Lr(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ca(e)))}function Lu(){return Xr(),Rr(),Qr(),qr()}function qr(){if(ft!==5)return!1;var t=Je,e=fs;fs=0;var l=Bs(Se),n=E.T,a=q.p;try{q.p=32>l?32:l,E.T=null,l=rs,rs=null;var u=Je,i=Se;if(ft=0,nn=Je=null,Se=0,L&6)throw Error(p(331));var s=L;if(L|=4,Er(u.current),zr(u,u.current,i,l),L=s,ra(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(aa,u)}catch{}return!0}finally{q.p=a,E.T=n,Lr(t,e)}}function Dc(t,e,l){e=Ft(l,e),e=is(t.stateNode,e,2),t=ke(t,e,2),t!==null&&(ia(t,2),ce(t))}function Z(t,e,l){if(t.tag===3)Dc(t,t,l);else for(;e!==null;){if(e.tag===3){Dc(e,t,l);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ve===null||!Ve.has(n))){t=Ft(l,t),l=nr(2),n=ke(e,l,2),n!==null&&(ar(l,n,e,t),ia(n,2),ce(n));break}}e=e.return}}function bi(t,e,l){var n=t.pingCache;if(n===null){n=t.pingCache=new dm;var a=new Set;n.set(e,a)}else a=n.get(e),a===void 0&&(a=new Set,n.set(e,a));a.has(l)||(po=!0,a.add(l),t=pm.bind(null,t,e,l),e.then(t,t))}function pm(t,e,l){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,K===t&&(X&l)===l&&(nt===4||nt===3&&(X&62914560)===X&&300>Ht()-Xu?!(L&2)&&an(t,0):bo|=l,ln===X&&(ln=0)),ce(t)}function Gr(t,e){e===0&&(e=D_()),t=zl(t,e),t!==null&&(ia(t,e),ce(t))}function bm(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Gr(t,l)}function vm(t,e){var l=0;switch(t.tag){case 31:case 13:var n=t.stateNode,a=t.memoizedState;a!==null&&(l=a.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(p(314))}n!==null&&n.delete(e),Gr(t,l)}function xm(t,e){return js(t,e)}var yu=null,Cl=null,ms=!1,gu=!1,vi=!1,Le=0;function ce(t){t!==Cl&&t.next===null&&(Cl===null?yu=Cl=t:Cl=Cl.next=t),gu=!0,ms||(ms=!0,zm())}function ra(t,e){if(!vi&&gu){vi=!0;do for(var l=!1,n=yu;n!==null;){if(t!==0){var a=n.pendingLanes;if(a===0)var u=0;else{var i=n.suspendedLanes,s=n.pingedLanes;u=(1<<31-Rt(42|t)+1)-1,u&=a&~(i&~s),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,jc(n,u))}else u=X,u=Ou(n,n===K?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),!(u&3)||ua(n,u)||(l=!0,jc(n,u));n=n.next}while(l);vi=!1}}function Sm(){Zr()}function Zr(){gu=ms=!1;var t=0;Le!==0&&Dm()&&(t=Le);for(var e=Ht(),l=null,n=yu;n!==null;){var a=n.next,u=kr(n,e);u===0?(n.next=null,l===null?yu=a:l.next=a,a===null&&(Cl=l)):(l=n,(t!==0||u&3)&&(gu=!0)),n=a}ft!==0&&ft!==5||ra(t),Le!==0&&(Le=0)}function kr(t,e){for(var l=t.suspendedLanes,n=t.pingedLanes,a=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-Rt(u),s=1<<i,o=a[i];o===-1?(!(s&l)||s&n)&&(a[i]=W0(s,e)):o<=e&&(t.expiredLanes|=s),u&=~s}if(e=K,l=X,l=Ou(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,l===0||t===e&&(G===2||G===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Ku(n),t.callbackNode=null,t.callbackPriority=0;if(!(l&3)||ua(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(n!==null&&Ku(n),Bs(l)){case 2:case 8:l=U_;break;case 32:l=Ia;break;case 268435456:l=N_;break;default:l=Ia}return n=Vr.bind(null,t),l=js(l,n),t.callbackPriority=e,t.callbackNode=l,e}return n!==null&&n!==null&&Ku(n),t.callbackPriority=2,t.callbackNode=null,2}function Vr(t,e){if(ft!==0&&ft!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Lu()&&t.callbackNode!==l)return null;var n=X;return n=Ou(t,t===K?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(Ur(t,n,e),kr(t,Ht()),t.callbackNode!=null&&t.callbackNode===l?Vr.bind(null,t):null)}function jc(t,e){if(Lu())return null;Ur(t,e,!0)}function zm(){wm(function(){L&6?js(C_,Sm):Zr()})}function xo(){if(Le===0){var t=Pl;t===0&&(t=va,va<<=1,!(va&261888)&&(va=256)),Le=t}return Le}function wc(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wa(""+t)}function Bc(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Am(t,e,l,n,a){if(e==="submit"&&l&&l.stateNode===a){var u=wc((a[Ut]||null).action),i=n.submitter;i&&(e=(e=i[Ut]||null)?wc(e.formAction):i.getAttribute("formAction"),e!==null&&(u=e,i=null));var s=new Mu("action","action",null,n,a);t.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Le!==0){var o=i?Bc(a,i):new FormData(a);as(l,{pending:!0,data:o,method:a.method,action:u},null,o)}}else typeof u=="function"&&(s.preventDefault(),o=i?Bc(a,i):new FormData(a),as(l,{pending:!0,data:o,method:a.method,action:u},u,o))},currentTarget:a}]})}}for(var xi=0;xi<Vi.length;xi++){var Si=Vi[xi],Tm=Si.toLowerCase(),Em=Si[0].toUpperCase()+Si.slice(1);ne(Tm,"on"+Em)}ne(nf,"onAnimationEnd");ne(af,"onAnimationIteration");ne(uf,"onAnimationStart");ne("dblclick","onDoubleClick");ne("focusin","onFocus");ne("focusout","onBlur");ne(qd,"onTransitionRun");ne(Gd,"onTransitionStart");ne(Zd,"onTransitionCancel");ne(sf,"onTransitionEnd");$l("onMouseEnter",["mouseout","mouseover"]);$l("onMouseLeave",["mouseout","mouseover"]);$l("onPointerEnter",["pointerout","pointerover"]);$l("onPointerLeave",["pointerout","pointerover"]);vl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vl("onBeforeInput",["compositionend","keypress","textInput","paste"]);vl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var In="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Om=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(In));function Jr(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var n=t[l],a=n.event;n=n.listeners;t:{var u=void 0;if(e)for(var i=n.length-1;0<=i;i--){var s=n[i],o=s.instance,r=s.currentTarget;if(s=s.listener,o!==u&&a.isPropagationStopped())break t;u=s,a.currentTarget=r;try{u(a)}catch(m){tu(m)}a.currentTarget=null,u=o}else for(i=0;i<n.length;i++){if(s=n[i],o=s.instance,r=s.currentTarget,s=s.listener,o!==u&&a.isPropagationStopped())break t;u=s,a.currentTarget=r;try{u(a)}catch(m){tu(m)}a.currentTarget=null,u=o}}}}function B(t,e){var l=e[Xi];l===void 0&&(l=e[Xi]=new Set);var n=t+"__bubble";l.has(n)||(Kr(e,t,2,!1),l.add(n))}function zi(t,e,l){var n=0;e&&(n|=4),Kr(l,t,n,e)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function So(t){if(!t[Ca]){t[Ca]=!0,X_.forEach(function(l){l!=="selectionchange"&&(Om.has(l)||zi(l,!1,t),zi(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ca]||(e[Ca]=!0,zi("selectionchange",!1,e))}}function Kr(t,e,l,n){switch(s0(e)){case 2:var a=ey;break;case 8:a=ly;break;default:a=Eo}l=a.bind(null,e,l,t),a=void 0,!Gi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),n?a!==void 0?t.addEventListener(e,l,{capture:!0,passive:a}):t.addEventListener(e,l,!0):a!==void 0?t.addEventListener(e,l,{passive:a}):t.addEventListener(e,l,!1)}function Ai(t,e,l,n,a){var u=n;if(!(e&1)&&!(e&2)&&n!==null)t:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var s=n.stateNode.containerInfo;if(s===a)break;if(i===4)for(i=n.return;i!==null;){var o=i.tag;if((o===3||o===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;s!==null;){if(i=Dl(s),i===null)return;if(o=i.tag,o===5||o===6||o===26||o===27){n=u=i;continue t}s=s.parentNode}}n=n.return}V_(function(){var r=u,m=Rs(l),g=[];t:{var f=of.get(t);if(f!==void 0){var y=Mu,v=t;switch(t){case"keypress":if(Ha(l)===0)break t;case"keydown":case"keyup":y=vd;break;case"focusin":v="focus",y=Pu;break;case"focusout":v="blur",y=Pu;break;case"beforeblur":case"afterblur":y=Pu;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=zd;break;case nf:case af:case uf:y=fd;break;case sf:y=Td;break;case"scroll":case"scrollend":y=id;break;case"wheel":y=Od;break;case"copy":case"cut":case"paste":y=dd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Vo;break;case"toggle":case"beforetoggle":y=Yd}var A=(e&4)!==0,j=!A&&(t==="scroll"||t==="scrollend"),_=A?f!==null?f+"Capture":null:f;A=[];for(var c=r,d;c!==null;){var h=c;if(d=h.stateNode,h=h.tag,h!==5&&h!==26&&h!==27||d===null||_===null||(h=Zn(c,_),h!=null&&A.push(Pn(c,h,d))),j)break;c=c.return}0<A.length&&(f=new y(f,v,null,l,m),g.push({event:f,listeners:A}))}}if(!(e&7)){t:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&l!==qi&&(v=l.relatedTarget||l.fromElement)&&(Dl(v)||v[cn]))break t;if((y||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=l.relatedTarget||l.toElement,y=r,v=v?Dl(v):null,v!==null&&(j=na(v),A=v.tag,v!==j||A!==5&&A!==27&&A!==6)&&(v=null)):(y=null,v=r),y!==v)){if(A=Zo,h="onMouseLeave",_="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(A=Vo,h="onPointerLeave",_="onPointerEnter",c="pointer"),j=y==null?f:En(y),d=v==null?f:En(v),f=new A(h,c+"leave",y,l,m),f.target=j,f.relatedTarget=d,h=null,Dl(m)===r&&(A=new A(_,c+"enter",v,l,m),A.target=d,A.relatedTarget=j,h=A),j=h,y&&v)e:{for(A=Mm,_=y,c=v,d=0,h=_;h;h=A(h))d++;h=0;for(var z=c;z;z=A(z))h++;for(;0<d-h;)_=A(_),d--;for(;0<h-d;)c=A(c),h--;for(;d--;){if(_===c||c!==null&&_===c.alternate){A=_;break e}_=A(_),c=A(c)}A=null}else A=null;y!==null&&Hc(g,f,y,A,!1),v!==null&&j!==null&&Hc(g,j,v,A,!0)}}t:{if(f=r?En(r):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var Y=Fo;else if(Wo(f))if(I_)Y=Rd;else{Y=Hd;var x=Bd}else y=f.nodeName,!y||y.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?r&&Xs(r.elementType)&&(Y=Fo):Y=Xd;if(Y&&(Y=Y(t,r))){$_(g,Y,l,m);break t}x&&x(t,f,r),t==="focusout"&&r&&f.type==="number"&&r.memoizedProps.value!=null&&Li(f,"number",f.value)}switch(x=r?En(r):window,t){case"focusin":(Wo(x)||x.contentEditable==="true")&&(Bl=x,Zi=r,Nn=null);break;case"focusout":Nn=Zi=Bl=null;break;case"mousedown":ki=!0;break;case"contextmenu":case"mouseup":case"dragend":ki=!1,ec(g,l,m);break;case"selectionchange":if(Ld)break;case"keydown":case"keyup":ec(g,l,m)}var T;if(qs)t:{switch(t){case"compositionstart":var C="onCompositionStart";break t;case"compositionend":C="onCompositionEnd";break t;case"compositionupdate":C="onCompositionUpdate";break t}C=void 0}else wl?W_(t,l)&&(C="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(C="onCompositionStart");C&&(K_&&l.locale!=="ko"&&(wl||C!=="onCompositionStart"?C==="onCompositionEnd"&&wl&&(T=J_()):(Xe=m,Qs="value"in Xe?Xe.value:Xe.textContent,wl=!0)),x=hu(r,C),0<x.length&&(C=new ko(C,t,null,l,m),g.push({event:C,listeners:x}),T?C.data=T:(T=F_(l),T!==null&&(C.data=T)))),(T=Ud?Nd(t,l):Dd(t,l))&&(C=hu(r,"onBeforeInput"),0<C.length&&(x=new ko("onBeforeInput","beforeinput",null,l,m),g.push({event:x,listeners:C}),x.data=T)),Am(g,t,r,l,m)}Jr(g,e)})}function Pn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function hu(t,e){for(var l=e+"Capture",n=[];t!==null;){var a=t,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=Zn(t,l),a!=null&&n.unshift(Pn(t,a,u)),a=Zn(t,e),a!=null&&n.push(Pn(t,a,u))),t.tag===3)return n;t=t.return}return[]}function Mm(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Hc(t,e,l,n,a){for(var u=e._reactName,i=[];l!==null&&l!==n;){var s=l,o=s.alternate,r=s.stateNode;if(s=s.tag,o!==null&&o===n)break;s!==5&&s!==26&&s!==27||r===null||(o=r,a?(r=Zn(l,u),r!=null&&i.unshift(Pn(l,r,o))):a||(r=Zn(l,u),r!=null&&i.push(Pn(l,r,o)))),l=l.return}i.length!==0&&t.push({event:e,listeners:i})}var Ym=/\r\n?/g,Cm=/\u0000|\uFFFD/g;function Xc(t){return(typeof t=="string"?t:""+t).replace(Ym,`
`).replace(Cm,"")}function Wr(t,e){return e=Xc(e),Xc(t)===e}function k(t,e,l,n,a,u){switch(l){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Il(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Il(t,""+n);break;case"className":za(t,"class",n);break;case"tabIndex":za(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":za(t,l,n);break;case"style":k_(t,n,u);break;case"data":if(e!=="object"){za(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(l);break}n=wa(""+n),t.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&k(t,e,"name",a.name,a,null),k(t,e,"formEncType",a.formEncType,a,null),k(t,e,"formMethod",a.formMethod,a,null),k(t,e,"formTarget",a.formTarget,a,null)):(k(t,e,"encType",a.encType,a,null),k(t,e,"method",a.method,a,null),k(t,e,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(l);break}n=wa(""+n),t.setAttribute(l,n);break;case"onClick":n!=null&&(t.onclick=pe);break;case"onScroll":n!=null&&B("scroll",t);break;case"onScrollEnd":n!=null&&B("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(p(60));t.innerHTML=l}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}l=wa(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,""+n):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":n===!0?t.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,n):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(l,n):t.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(l):t.setAttribute(l,n);break;case"popover":B("beforetoggle",t),B("toggle",t),ja(t,"popover",n);break;case"xlinkActuate":_e(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":_e(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":_e(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":_e(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":_e(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":_e(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":_e(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":_e(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":_e(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ja(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=ad.get(l)||l,ja(t,l,n))}}function ys(t,e,l,n,a,u){switch(l){case"style":k_(t,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(p(60));t.innerHTML=l}}break;case"children":typeof n=="string"?Il(t,n):(typeof n=="number"||typeof n=="bigint")&&Il(t,""+n);break;case"onScroll":n!=null&&B("scroll",t);break;case"onScrollEnd":n!=null&&B("scrollend",t);break;case"onClick":n!=null&&(t.onclick=pe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R_.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(a=l.endsWith("Capture"),e=l.slice(2,a?l.length-7:void 0),u=t[Ut]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,a),typeof n=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,n,a);break t}l in t?t[l]=n:n===!0?t.setAttribute(l,""):ja(t,l,n)}}}function xt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":B("error",t),B("load",t);var n=!1,a=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,e));default:k(t,e,u,i,l,null)}}a&&k(t,e,"srcSet",l.srcSet,l,null),n&&k(t,e,"src",l.src,l,null);return;case"input":B("invalid",t);var s=u=i=a=null,o=null,r=null;for(n in l)if(l.hasOwnProperty(n)){var m=l[n];if(m!=null)switch(n){case"name":a=m;break;case"type":i=m;break;case"checked":o=m;break;case"defaultChecked":r=m;break;case"value":u=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(p(137,e));break;default:k(t,e,n,m,l,null)}}q_(t,u,s,o,r,i,a,!1);return;case"select":B("invalid",t),n=i=u=null;for(a in l)if(l.hasOwnProperty(a)&&(s=l[a],s!=null))switch(a){case"value":u=s;break;case"defaultValue":i=s;break;case"multiple":n=s;default:k(t,e,a,s,l,null)}e=u,l=i,t.multiple=!!n,e!=null?Zl(t,!!n,e,!1):l!=null&&Zl(t,!!n,l,!0);return;case"textarea":B("invalid",t),u=a=n=null;for(i in l)if(l.hasOwnProperty(i)&&(s=l[i],s!=null))switch(i){case"value":n=s;break;case"defaultValue":a=s;break;case"children":u=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(p(91));break;default:k(t,e,i,s,l,null)}Z_(t,n,a,u);return;case"option":for(o in l)if(l.hasOwnProperty(o)&&(n=l[o],n!=null))switch(o){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:k(t,e,o,n,l,null)}return;case"dialog":B("beforetoggle",t),B("toggle",t),B("cancel",t),B("close",t);break;case"iframe":case"object":B("load",t);break;case"video":case"audio":for(n=0;n<In.length;n++)B(In[n],t);break;case"image":B("error",t),B("load",t);break;case"details":B("toggle",t);break;case"embed":case"source":case"link":B("error",t),B("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(r in l)if(l.hasOwnProperty(r)&&(n=l[r],n!=null))switch(r){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,e));default:k(t,e,r,n,l,null)}return;default:if(Xs(e)){for(m in l)l.hasOwnProperty(m)&&(n=l[m],n!==void 0&&ys(t,e,m,n,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(n=l[s],n!=null&&k(t,e,s,n,l,null))}function Um(t,e,l,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,i=null,s=null,o=null,r=null,m=null;for(y in l){var g=l[y];if(l.hasOwnProperty(y)&&g!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":o=g;default:n.hasOwnProperty(y)||k(t,e,y,null,n,g)}}for(var f in n){var y=n[f];if(g=l[f],n.hasOwnProperty(f)&&(y!=null||g!=null))switch(f){case"type":u=y;break;case"name":a=y;break;case"checked":r=y;break;case"defaultChecked":m=y;break;case"value":i=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,e));break;default:y!==g&&k(t,e,f,y,n,g)}}Qi(t,i,s,o,r,m,u,a);return;case"select":y=i=s=f=null;for(u in l)if(o=l[u],l.hasOwnProperty(u)&&o!=null)switch(u){case"value":break;case"multiple":y=o;default:n.hasOwnProperty(u)||k(t,e,u,null,n,o)}for(a in n)if(u=n[a],o=l[a],n.hasOwnProperty(a)&&(u!=null||o!=null))switch(a){case"value":f=u;break;case"defaultValue":s=u;break;case"multiple":i=u;default:u!==o&&k(t,e,a,u,n,o)}e=s,l=i,n=y,f!=null?Zl(t,!!l,f,!1):!!n!=!!l&&(e!=null?Zl(t,!!l,e,!0):Zl(t,!!l,l?[]:"",!1));return;case"textarea":y=f=null;for(s in l)if(a=l[s],l.hasOwnProperty(s)&&a!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:k(t,e,s,null,n,a)}for(i in n)if(a=n[i],u=l[i],n.hasOwnProperty(i)&&(a!=null||u!=null))switch(i){case"value":f=a;break;case"defaultValue":y=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(p(91));break;default:a!==u&&k(t,e,i,a,n,u)}G_(t,f,y);return;case"option":for(var v in l)if(f=l[v],l.hasOwnProperty(v)&&f!=null&&!n.hasOwnProperty(v))switch(v){case"selected":t.selected=!1;break;default:k(t,e,v,null,n,f)}for(o in n)if(f=n[o],y=l[o],n.hasOwnProperty(o)&&f!==y&&(f!=null||y!=null))switch(o){case"selected":t.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:k(t,e,o,f,n,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var A in l)f=l[A],l.hasOwnProperty(A)&&f!=null&&!n.hasOwnProperty(A)&&k(t,e,A,null,n,f);for(r in n)if(f=n[r],y=l[r],n.hasOwnProperty(r)&&f!==y&&(f!=null||y!=null))switch(r){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(p(137,e));break;default:k(t,e,r,f,n,y)}return;default:if(Xs(e)){for(var j in l)f=l[j],l.hasOwnProperty(j)&&f!==void 0&&!n.hasOwnProperty(j)&&ys(t,e,j,void 0,n,f);for(m in n)f=n[m],y=l[m],!n.hasOwnProperty(m)||f===y||f===void 0&&y===void 0||ys(t,e,m,f,n,y);return}}for(var _ in l)f=l[_],l.hasOwnProperty(_)&&f!=null&&!n.hasOwnProperty(_)&&k(t,e,_,null,n,f);for(g in n)f=n[g],y=l[g],!n.hasOwnProperty(g)||f===y||f==null&&y==null||k(t,e,g,f,n,y)}function Rc(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nm(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),n=0;n<l.length;n++){var a=l[n],u=a.transferSize,i=a.initiatorType,s=a.duration;if(u&&s&&Rc(i)){for(i=0,s=a.responseEnd,n+=1;n<l.length;n++){var o=l[n],r=o.startTime;if(r>s)break;var m=o.transferSize,g=o.initiatorType;m&&Rc(g)&&(o=o.responseEnd,i+=m*(o<s?1:(s-r)/(o-r)))}if(--n,e+=8*(u+i)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var gs=null,hs=null;function pu(t){return t.nodeType===9?t:t.ownerDocument}function Qc(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fr(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ps(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ti=null;function Dm(){var t=window.event;return t&&t.type==="popstate"?t===Ti?!1:(Ti=t,!0):(Ti=null,!1)}var $r=typeof setTimeout=="function"?setTimeout:void 0,jm=typeof clearTimeout=="function"?clearTimeout:void 0,Lc=typeof Promise=="function"?Promise:void 0,wm=typeof queueMicrotask=="function"?queueMicrotask:typeof Lc<"u"?function(t){return Lc.resolve(null).then(t).catch(Bm)}:$r;function Bm(t){setTimeout(function(){throw t})}function ll(t){return t==="head"}function qc(t,e){var l=e,n=0;do{var a=l.nextSibling;if(t.removeChild(l),a&&a.nodeType===8)if(l=a.data,l==="/$"||l==="/&"){if(n===0){t.removeChild(a),sn(e);return}n--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")n++;else if(l==="html")qn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,qn(l);for(var u=l.firstChild;u;){var i=u.nextSibling,s=u.nodeName;u[sa]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&qn(t.ownerDocument.body);l=a}while(l);sn(e)}function Gc(t,e){var l=t;t=0;do{var n=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=n}while(l)}function bs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":bs(l),Hs(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Hm(t,e,l,n){for(;t.nodeType===1;){var a=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[sa])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Pt(t.nextSibling),t===null)break}return null}function Xm(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Pt(t.nextSibling),t===null))return null;return t}function Ir(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Pt(t.nextSibling),t===null))return null;return t}function vs(t){return t.data==="$?"||t.data==="$~"}function xs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Rm(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var n=function(){e(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Pt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Ss=null;function Zc(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Pt(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function kc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function Pr(t,e,l){switch(e=pu(l),t){case"html":if(t=e.documentElement,!t)throw Error(p(452));return t;case"head":if(t=e.head,!t)throw Error(p(453));return t;case"body":if(t=e.body,!t)throw Error(p(454));return t;default:throw Error(p(451))}}function qn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Hs(t)}var te=new Map,Vc=new Set;function bu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Me=q.d;q.d={f:Qm,r:Lm,D:qm,C:Gm,L:Zm,m:km,X:Jm,S:Vm,M:Km};function Qm(){var t=Me.f(),e=Ru();return t||e}function Lm(t){var e=_n(t);e!==null&&e.tag===5&&e.type==="form"?Vf(e):Me.r(t)}var mn=typeof document>"u"?null:document;function t0(t,e,l){var n=mn;if(n&&typeof e=="string"&&e){var a=Wt(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof l=="string"&&(a+='[crossorigin="'+l+'"]'),Vc.has(a)||(Vc.add(a),t={rel:t,crossOrigin:l,href:e},n.querySelector(a)===null&&(e=n.createElement("link"),xt(e,"link",t),mt(e),n.head.appendChild(e)))}}function qm(t){Me.D(t),t0("dns-prefetch",t,null)}function Gm(t,e){Me.C(t,e),t0("preconnect",t,e)}function Zm(t,e,l){Me.L(t,e,l);var n=mn;if(n&&t&&e){var a='link[rel="preload"][as="'+Wt(e)+'"]';e==="image"&&l&&l.imageSrcSet?(a+='[imagesrcset="'+Wt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(a+='[imagesizes="'+Wt(l.imageSizes)+'"]')):a+='[href="'+Wt(t)+'"]';var u=a;switch(e){case"style":u=un(t);break;case"script":u=yn(t)}te.has(u)||(t=tt({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),te.set(u,t),n.querySelector(a)!==null||e==="style"&&n.querySelector(da(u))||e==="script"&&n.querySelector(ma(u))||(e=n.createElement("link"),xt(e,"link",t),mt(e),n.head.appendChild(e)))}}function km(t,e){Me.m(t,e);var l=mn;if(l&&t){var n=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Wt(n)+'"][href="'+Wt(t)+'"]',u=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=yn(t)}if(!te.has(u)&&(t=tt({rel:"modulepreload",href:t},e),te.set(u,t),l.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(ma(u)))return}n=l.createElement("link"),xt(n,"link",t),mt(n),l.head.appendChild(n)}}}function Vm(t,e,l){Me.S(t,e,l);var n=mn;if(n&&t){var a=Gl(n).hoistableStyles,u=un(t);e=e||"default";var i=a.get(u);if(!i){var s={loading:0,preload:null};if(i=n.querySelector(da(u)))s.loading=5;else{t=tt({rel:"stylesheet",href:t,"data-precedence":e},l),(l=te.get(u))&&zo(t,l);var o=i=n.createElement("link");mt(o),xt(o,"link",t),o._p=new Promise(function(r,m){o.onload=r,o.onerror=m}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,ka(i,e,n)}i={type:"stylesheet",instance:i,count:1,state:s},a.set(u,i)}}}function Jm(t,e){Me.X(t,e);var l=mn;if(l&&t){var n=Gl(l).hoistableScripts,a=yn(t),u=n.get(a);u||(u=l.querySelector(ma(a)),u||(t=tt({src:t,async:!0},e),(e=te.get(a))&&Ao(t,e),u=l.createElement("script"),mt(u),xt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function Km(t,e){Me.M(t,e);var l=mn;if(l&&t){var n=Gl(l).hoistableScripts,a=yn(t),u=n.get(a);u||(u=l.querySelector(ma(a)),u||(t=tt({src:t,async:!0,type:"module"},e),(e=te.get(a))&&Ao(t,e),u=l.createElement("script"),mt(u),xt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function Jc(t,e,l,n){var a=(a=qe.current)?bu(a):null;if(!a)throw Error(p(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=un(l.href),l=Gl(a).hoistableStyles,n=l.get(e),n||(n={type:"style",instance:null,count:0,state:null},l.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=un(l.href);var u=Gl(a).hoistableStyles,i=u.get(t);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=a.querySelector(da(t)))&&!u._p&&(i.instance=u,i.state.loading=5),te.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},te.set(t,l),u||Wm(a,t,l,i.state))),e&&n===null)throw Error(p(528,""));return i}if(e&&n!==null)throw Error(p(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=yn(l),l=Gl(a).hoistableScripts,n=l.get(e),n||(n={type:"script",instance:null,count:0,state:null},l.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,t))}}function un(t){return'href="'+Wt(t)+'"'}function da(t){return'link[rel="stylesheet"]['+t+"]"}function e0(t){return tt({},t,{"data-precedence":t.precedence,precedence:null})}function Wm(t,e,l,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),xt(e,"link",l),mt(e),t.head.appendChild(e))}function yn(t){return'[src="'+Wt(t)+'"]'}function ma(t){return"script[async]"+t}function Kc(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+Wt(l.href)+'"]');if(n)return e.instance=n,mt(n),n;var a=tt({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),mt(n),xt(n,"style",a),ka(n,l.precedence,t),e.instance=n;case"stylesheet":a=un(l.href);var u=t.querySelector(da(a));if(u)return e.state.loading|=4,e.instance=u,mt(u),u;n=e0(l),(a=te.get(a))&&zo(n,a),u=(t.ownerDocument||t).createElement("link"),mt(u);var i=u;return i._p=new Promise(function(s,o){i.onload=s,i.onerror=o}),xt(u,"link",n),e.state.loading|=4,ka(u,l.precedence,t),e.instance=u;case"script":return u=yn(l.src),(a=t.querySelector(ma(u)))?(e.instance=a,mt(a),a):(n=l,(a=te.get(u))&&(n=tt({},l),Ao(n,a)),t=t.ownerDocument||t,a=t.createElement("script"),mt(a),xt(a,"link",n),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(p(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(n=e.instance,e.state.loading|=4,ka(n,l.precedence,t));return e.instance}function ka(t,e,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,u=a,i=0;i<n.length;i++){var s=n[i];if(s.dataset.precedence===e)u=s;else if(u!==a)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function zo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ao(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Va=null;function Wc(t,e,l){if(Va===null){var n=new Map,a=Va=new Map;a.set(l,n)}else a=Va,n=a.get(l),n||(n=new Map,a.set(l,n));if(n.has(t))return n;for(n.set(t,null),l=l.getElementsByTagName(t),a=0;a<l.length;a++){var u=l[a];if(!(u[sa]||u[pt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(e)||"";i=t+i;var s=n.get(i);s?s.push(u):n.set(i,[u])}}return n}function Fc(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Fm(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function l0(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function $m(t,e,l,n){if(l.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(l.state.loading&4)){if(l.instance===null){var a=un(n.href),u=e.querySelector(da(a));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=vu.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=u,mt(u);return}u=e.ownerDocument||e,n=e0(n),(a=te.get(a))&&zo(n,a),u=u.createElement("link"),mt(u);var i=u;i._p=new Promise(function(s,o){i.onload=s,i.onerror=o}),xt(u,"link",n),l.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&!(l.state.loading&3)&&(t.count++,l=vu.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var Ei=0;function Im(t,e){return t.stylesheets&&t.count===0&&Ja(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var n=setTimeout(function(){if(t.stylesheets&&Ja(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&Ei===0&&(Ei=62500*Nm());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ja(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Ei?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function vu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ja(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var xu=null;function Ja(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,xu=new Map,e.forEach(Pm,t),xu=null,vu.call(t))}function Pm(t,e){if(!(e.state.loading&4)){var l=xu.get(t);if(l)var n=l.get(null);else{l=new Map,xu.set(t,l);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var i=a[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),n=i)}n&&l.set(null,n)}a=e.instance,i=a.getAttribute("data-precedence"),u=l.get(i)||n,u===n&&l.set(null,a),l.set(i,a),this.count++,n=vu.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),u?u.parentNode.insertBefore(a,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var ta={$$typeof:he,Provider:null,Consumer:null,_currentValue:_l,_currentValue2:_l,_threadCount:0};function ty(t,e,l,n,a,u,i,s,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wu(0),this.hiddenUpdates=Wu(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function n0(t,e,l,n,a,u,i,s,o,r,m,g){return t=new ty(t,e,l,i,o,r,m,g,s),e=1,u===!0&&(e|=24),u=wt(3,null,null,e),t.current=u,u.stateNode=t,e=Ws(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:n,isDehydrated:l,cache:e},Is(u),t}function a0(t){return t?(t=Rl,t):Rl}function u0(t,e,l,n,a,u){a=a0(a),n.context===null?n.context=a:n.pendingContext=a,n=Ze(e),n.payload={element:l},u=u===void 0?null:u,u!==null&&(n.callback=u),l=ke(t,n,e),l!==null&&(Ct(l,t,e),jn(l,t,e))}function $c(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function To(t,e){$c(t,e),(t=t.alternate)&&$c(t,e)}function i0(t){if(t.tag===13||t.tag===31){var e=zl(t,67108864);e!==null&&Ct(e,t,67108864),To(t,67108864)}}function Ic(t){if(t.tag===13||t.tag===31){var e=Qt();e=ws(e);var l=zl(t,e);l!==null&&Ct(l,t,e),To(t,e)}}var Su=!0;function ey(t,e,l,n){var a=E.T;E.T=null;var u=q.p;try{q.p=2,Eo(t,e,l,n)}finally{q.p=u,E.T=a}}function ly(t,e,l,n){var a=E.T;E.T=null;var u=q.p;try{q.p=8,Eo(t,e,l,n)}finally{q.p=u,E.T=a}}function Eo(t,e,l,n){if(Su){var a=zs(n);if(a===null)Ai(t,e,n,zu,l),Pc(t,n);else if(ay(a,t,e,l,n))n.stopPropagation();else if(Pc(t,n),e&4&&-1<ny.indexOf(t)){for(;a!==null;){var u=_n(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=sl(u.pendingLanes);if(i!==0){var s=u;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var o=1<<31-Rt(i);s.entanglements[1]|=o,i&=~o}ce(u),!(L&6)&&(ru=Ht()+500,ra(0))}}break;case 31:case 13:s=zl(u,2),s!==null&&Ct(s,u,2),Ru(),To(u,2)}if(u=zs(n),u===null&&Ai(t,e,n,zu,l),u===a)break;a=u}a!==null&&n.stopPropagation()}else Ai(t,e,n,null,l)}}function zs(t){return t=Rs(t),Oo(t)}var zu=null;function Oo(t){if(zu=null,t=Dl(t),t!==null){var e=na(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=T_(e),t!==null)return t;t=null}else if(l===31){if(t=E_(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return zu=t,null}function s0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q0()){case C_:return 2;case U_:return 8;case Ia:case G0:return 32;case N_:return 268435456;default:return 32}default:return 32}}var As=!1,Ke=null,We=null,Fe=null,ea=new Map,la=new Map,Be=[],ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pc(t,e){switch(t){case"focusin":case"focusout":Ke=null;break;case"dragenter":case"dragleave":We=null;break;case"mouseover":case"mouseout":Fe=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":la.delete(e.pointerId)}}function Sn(t,e,l,n,a,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:n,nativeEvent:u,targetContainers:[a]},e!==null&&(e=_n(e),e!==null&&i0(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function ay(t,e,l,n,a){switch(e){case"focusin":return Ke=Sn(Ke,t,e,l,n,a),!0;case"dragenter":return We=Sn(We,t,e,l,n,a),!0;case"mouseover":return Fe=Sn(Fe,t,e,l,n,a),!0;case"pointerover":var u=a.pointerId;return ea.set(u,Sn(ea.get(u)||null,t,e,l,n,a)),!0;case"gotpointercapture":return u=a.pointerId,la.set(u,Sn(la.get(u)||null,t,e,l,n,a)),!0}return!1}function o0(t){var e=Dl(t.target);if(e!==null){var l=na(e);if(l!==null){if(e=l.tag,e===13){if(e=T_(l),e!==null){t.blockedOn=e,Ho(t.priority,function(){Ic(l)});return}}else if(e===31){if(e=E_(l),e!==null){t.blockedOn=e,Ho(t.priority,function(){Ic(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=zs(t.nativeEvent);if(l===null){l=t.nativeEvent;var n=new l.constructor(l.type,l);qi=n,l.target.dispatchEvent(n),qi=null}else return e=_n(l),e!==null&&i0(e),t.blockedOn=l,!1;e.shift()}return!0}function t_(t,e,l){Ka(t)&&l.delete(e)}function uy(){As=!1,Ke!==null&&Ka(Ke)&&(Ke=null),We!==null&&Ka(We)&&(We=null),Fe!==null&&Ka(Fe)&&(Fe=null),ea.forEach(t_),la.forEach(t_)}function Ua(t,e){t.blockedOn===e&&(t.blockedOn=null,As||(As=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,uy)))}var Na=null;function e_(t){Na!==t&&(Na=t,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,function(){Na===t&&(Na=null);for(var e=0;e<t.length;e+=3){var l=t[e],n=t[e+1],a=t[e+2];if(typeof n!="function"){if(Oo(n||l)===null)continue;break}var u=_n(l);u!==null&&(t.splice(e,3),e-=3,as(u,{pending:!0,data:a,method:l.method,action:n},n,a))}}))}function sn(t){function e(o){return Ua(o,t)}Ke!==null&&Ua(Ke,t),We!==null&&Ua(We,t),Fe!==null&&Ua(Fe,t),ea.forEach(e),la.forEach(e);for(var l=0;l<Be.length;l++){var n=Be[l];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Be.length&&(l=Be[0],l.blockedOn===null);)o0(l),l.blockedOn===null&&Be.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var a=l[n],u=l[n+1],i=a[Ut]||null;if(typeof u=="function")i||e_(l);else if(i){var s=null;if(u&&u.hasAttribute("formAction")){if(a=u,i=u[Ut]||null)s=i.formAction;else if(Oo(a)!==null)continue}else s=i.action;typeof s=="function"?l[n+1]=s:(l.splice(n,3),n-=3),e_(l)}}}function c0(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),n||setTimeout(l,20)}function l(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Mo(t){this._internalRoot=t}qu.prototype.render=Mo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(p(409));var l=e.current,n=Qt();u0(l,n,t,e,null,null)};qu.prototype.unmount=Mo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;u0(t.current,2,null,t,null,null),Ru(),e[cn]=null}};function qu(t){this._internalRoot=t}qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=H_();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Be.length&&e!==0&&e<Be[l].priority;l++);Be.splice(l,0,t),l===0&&o0(t)}};var l_=z_.version;if(l_!=="19.2.4")throw Error(p(527,l_,"19.2.4"));q.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=w0(e),t=t!==null?O_(t):null,t=t===null?null:t.stateNode,t};var iy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{aa=Da.inject(iy),Xt=Da}catch{}}Tu.createRoot=function(t,e){if(!A_(t))throw Error(p(299));var l=!1,n="",a=tr,u=er,i=lr;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=n0(t,1,!1,null,null,l,n,null,a,u,i,c0),t[cn]=e.current,So(t),new Mo(e)};Tu.hydrateRoot=function(t,e,l){if(!A_(t))throw Error(p(299));var n=!1,a="",u=tr,i=er,s=lr,o=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(o=l.formState)),e=n0(t,1,!0,e,l??null,n,a,o,u,i,s,c0),e.context=a0(null),l=e.current,n=Qt(),n=ws(n),a=Ze(n),a.callback=null,ke(l,a,n),l=n,e.current.lanes=l,ia(e,l),ce(e),t[cn]=e.current,So(t),new qu(e)};Tu.version="19.2.4";function _0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_0)}catch(t){console.error(t)}}_0(),g_.exports=Tu;var sy=g_.exports,oy=`svg[fill=none] {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  cursor: default;
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: #3c82f7;
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: #34c759;
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background: rgba(255, 59, 48, 0.25);
  color: #ff3b30;
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background: rgba(255, 59, 48, 0.15);
  color: #ff3b30;
}`,cy={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",t.textContent=oy,document.head.appendChild(t))}var J=cy,_y=({size:t=24})=>b.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Oi="__agentation_freeze";function fy(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Oi]||(t[Oi]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Oi]}var gt=fy();typeof window<"u"&&!gt.installed&&(gt.origSetTimeout=window.setTimeout.bind(window),gt.origSetInterval=window.setInterval.bind(window),gt.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,e,...l)=>typeof t=="string"?gt.origSetTimeout(t,e):gt.origSetTimeout((...n)=>{gt.frozen?gt.frozenTimeoutQueue.push(()=>t(...n)):t(...n)},e,...l),window.setInterval=(t,e,...l)=>typeof t=="string"?gt.origSetInterval(t,e):gt.origSetInterval((...n)=>{gt.frozen||t(...n)},e,...l),window.requestAnimationFrame=t=>gt.origRAF(e=>{gt.frozen?gt.frozenRAFQueue.push(t):t(e)}),gt.installed=!0);var Ol=gt.origSetTimeout;gt.origSetInterval;Q.forwardRef(function({element:e,timestamp:l,selectedText:n,placeholder:a="What should change?",initialValue:u="",submitLabel:i="Add",onSubmit:s,onCancel:o,onDelete:r,style:m,accentColor:g="#3c82f7",isExiting:f=!1,lightMode:y=!1,computedStyles:v},A){const[j,_]=Q.useState(u),[c,d]=Q.useState(!1),[h,z]=Q.useState("initial"),[Y,x]=Q.useState(!1),[T,C]=Q.useState(!1),N=Q.useRef(null),Tt=Q.useRef(null),Gt=Q.useRef(null),Ye=Q.useRef(null);Q.useEffect(()=>{f&&h!=="exit"&&z("exit")},[f,h]),Q.useEffect(()=>{Ol(()=>{z("enter")},0);const U=Ol(()=>{z("entered")},200),F=Ol(()=>{const Zt=N.current;Zt&&(Zt.focus(),Zt.selectionStart=Zt.selectionEnd=Zt.value.length,Zt.scrollTop=Zt.scrollHeight)},50);return()=>{clearTimeout(U),clearTimeout(F),Gt.current&&clearTimeout(Gt.current),Ye.current&&clearTimeout(Ye.current)}},[]);const ya=Q.useCallback(()=>{Ye.current&&clearTimeout(Ye.current),d(!0),Ye.current=Ol(()=>{var U;d(!1),(U=N.current)==null||U.focus()},250)},[]);Q.useImperativeHandle(A,()=>({shake:ya}),[ya]);const nl=Q.useCallback(()=>{z("exit"),Gt.current=Ol(()=>{o()},150)},[o]),S=Q.useCallback(()=>{j.trim()&&s(j.trim())},[j,s]),w=Q.useCallback(U=>{U.nativeEvent.isComposing||(U.key==="Enter"&&!U.shiftKey&&(U.preventDefault(),S()),U.key==="Escape"&&nl())},[S,nl]),D=[J.popup,y?J.light:"",h==="enter"?J.enter:"",h==="entered"?J.entered:"",h==="exit"?J.exit:"",c?J.shake:""].filter(Boolean).join(" ");return b.jsxs("div",{ref:Tt,className:D,"data-annotation-popup":!0,style:m,onClick:U=>U.stopPropagation(),children:[b.jsxs("div",{className:J.header,children:[v&&Object.keys(v).length>0?b.jsxs("button",{className:J.headerToggle,onClick:()=>{const U=T;C(!T),U&&Ol(()=>{var F;return(F=N.current)==null?void 0:F.focus()},0)},type:"button",children:[b.jsx("svg",{className:`${J.chevron} ${T?J.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),b.jsx("span",{className:J.element,children:e})]}):b.jsx("span",{className:J.element,children:e}),l&&b.jsx("span",{className:J.timestamp,children:l})]}),v&&Object.keys(v).length>0&&b.jsx("div",{className:`${J.stylesWrapper} ${T?J.expanded:""}`,children:b.jsx("div",{className:J.stylesInner,children:b.jsx("div",{className:J.stylesBlock,children:Object.entries(v).map(([U,F])=>b.jsxs("div",{className:J.styleLine,children:[b.jsx("span",{className:J.styleProperty,children:U.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",b.jsx("span",{className:J.styleValue,children:F}),";"]},U))})})}),n&&b.jsxs("div",{className:J.quote,children:["“",n.slice(0,80),n.length>80?"...":"","”"]}),b.jsx("textarea",{ref:N,className:J.textarea,style:{borderColor:Y?g:void 0},placeholder:a,value:j,onChange:U=>_(U.target.value),onFocus:()=>x(!0),onBlur:()=>x(!1),rows:2,onKeyDown:w}),b.jsxs("div",{className:J.actions,children:[r&&b.jsx("div",{className:J.deleteWrapper,children:b.jsx("button",{className:J.deleteButton,onClick:r,type:"button",children:b.jsx(_y,{size:22})})}),b.jsx("button",{className:J.cancel,onClick:nl,children:"Cancel"}),b.jsx("button",{className:J.submit,style:{backgroundColor:g,opacity:j.trim()?1:.4},onClick:S,disabled:!j.trim(),children:i})]})]})});var ry=`svg[fill=none] {
  fill: none !important;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__markerIn___5FaAP {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___GU5jX {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__tooltipIn___0N31w {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__settingsPanelIn___MGfO8 {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
}
@keyframes styles-module__settingsPanelOut___Zfymi {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    filter: blur(5px);
  }
}
.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 297px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

.styles-module__toolbarContainer___dIhma {
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  cursor: grab;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__dragging___xrolZ {
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: grabbing;
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 257px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 297px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: #3c82f7;
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: #3c82f7;
  background: rgba(60, 130, 247, 0.25);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.25);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background: rgba(255, 59, 48, 0.25);
  color: #ff3b30;
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default !important;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: #34c759;
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.25);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background: #3c82f7;
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
.styles-module__buttonBadge___NeFWb.styles-module__light___r6n4Y {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0.5);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(52, 199, 89, 0);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(245, 166, 35, 0.5);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(245, 166, 35, 0);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background: #34c759;
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background: #ff3b30;
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background: #f59e0b;
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid rgba(60, 130, 247, 0.5);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(60, 130, 247, 0.04);
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed rgba(52, 199, 89, 0.6);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(52, 199, 89, 0.05);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid rgba(60, 130, 247, 0.6);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(60, 130, 247, 0.05);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: #3c82f7;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background: #3c82f7;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background: #34c759;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background: #34c759;
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background: #ff3b30;
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}
.styles-module__settingsPanelContainer___Xksv8.styles-module__transitioning___qxzCk {
  overflow-x: clip;
  overflow-y: visible;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.2s ease-out;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-100%);
  opacity: 0;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.25s ease-out 0.1s;
  opacity: 0;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-100%);
  opacity: 1;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y svg {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
.styles-module__settingsBackButton___bIe2j.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
.styles-module__automationHeader___InP0r .styles-module__helpIcon___xQg56 svg {
  transform: none;
}
.styles-module__automationHeader___InP0r.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__automationDescription___NKlmo.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
.styles-module__learnMoreLink___8xv-x.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__learnMoreLink___8xv-x.styles-module__light___r6n4Y:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
}
.styles-module__autoSendLabel___icDc2.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__autoSendLabel___icDc2.styles-module__light___r6n4Y.styles-module__active___-zoN6 {
  color: #3c82f7;
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  cursor: text !important;
  user-select: text;
  transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: rgba(255, 255, 255, 0.5);
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
.styles-module__cycleButton___FMKfw.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
.styles-module__cycleDot___nPgLY.styles-module__light___r6n4Y {
  background: rgba(0, 0, 0, 0.2);
}
.styles-module__cycleDot___nPgLY.styles-module__light___r6n4Y.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
.styles-module__settingsLabel___8UjfX.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(60, 130, 247, 0.15);
  color: #3c82f7;
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__toggleLabel___Xm8Aa.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: opacity 0.15s ease;
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background: #3c82f7;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
  pointer-events: none;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
.styles-module__light___r6n4Y .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0.5);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(52, 199, 89, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0.5);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(255, 59, 48, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background: #ff3b30;
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__helpIcon___xQg56 {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
  margin-left: 0;
}
.styles-module__helpIcon___xQg56 svg {
  display: block;
  transform: translateY(1px);
  color: rgba(255, 255, 255, 0.2);
  transition: color 0.15s ease;
}
.styles-module__helpIcon___xQg56:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudgeDown___0cqpM svg {
  transform: translateY(1px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNoNudge___abogC svg {
  transform: translateY(0.5px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudge1-5___DM2TQ svg {
  transform: translateY(1.5px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudge2___TfWgC svg {
  transform: translateY(2px);
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(52, 199, 89, 0.6);
  border-radius: 4px;
  background: rgba(52, 199, 89, 0.08);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #34c759;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(52, 199, 89, 0.5);
  border-radius: 4px;
  background: rgba(52, 199, 89, 0.06);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__light___r6n4Y.styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-active=true] {
  color: #3c82f7;
  background: rgba(60, 130, 247, 0.15);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-error=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.15);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background: rgba(255, 59, 48, 0.15);
  color: #ff3b30;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: #34c759;
  background: transparent;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.15);
}
.styles-module__light___r6n4Y.styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
.styles-module__light___r6n4Y.styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerQuote___FHmrz {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerNote___QkrrS {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerHint___2iF-6 {
  color: rgba(0, 0, 0, 0.35);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9 {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18 {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr:hover {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(0, 0, 0, 0.9);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp {
  background: rgba(0, 0, 0, 0.1);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-webkit-slider-thumb {
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-moz-range-thumb {
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56 svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__themeToggle___2rUjA {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 0.5rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__themeToggle___2rUjA:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
.styles-module__light___r6n4Y .styles-module__themeToggle___2rUjA {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y .styles-module__themeToggle___2rUjA:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___LsJIM {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___lCCmo {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___TU6ML 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes styles-module__themeIconIn___TU6ML {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}`;if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",t.textContent=ry,document.head.appendChild(t))}const zn="underline underline-offset-2 decoration-[1px] decoration-black hover:decoration-[2px] transition-all";function dy(){return b.jsxs("header",{className:"mb-12",children:[b.jsxs("p",{className:"text-[26px] leading-relaxed text-gray-900 max-w-[671px]",children:["Lead Product Designer at"," ",b.jsx("a",{href:"https://app.layer3.xyz",target:"_blank",rel:"noopener noreferrer",className:zn,children:"Layer3"}),", currently working on"," ",b.jsx("a",{href:"http://ample.money/",target:"_blank",rel:"noopener noreferrer",className:zn,children:"Ample"})," ","to bring crypto to mass adoption, and"," ",b.jsx("a",{href:"https://apps.apple.com/sk/app/mellowsleep/id6636552824",target:"_blank",rel:"noopener noreferrer",className:zn,children:"Mellow"}),", a mobile app helping young parents with science-backed parenting techniques."]}),b.jsxs("p",{className:"mt-10 text-[26px] leading-relaxed text-gray-900 max-w-[671px]",children:["You can find me at"," ",b.jsx("a",{href:"https://x.com/goksiuta",target:"_blank",rel:"noopener noreferrer",className:zn,children:"goksiuta"})," ","posting work and design thoughts or"," ",b.jsx("a",{href:"mailto:greg@goksiuta.com",className:zn,children:"greg@goksiuta.com"})]})]})}const my="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAsQSURBVHgB7Z1tbFtXGcefc339kjjJnDZr8+KkTksHSYuSbuvKyhgJb9VWUJMJrV8mpaHwASb6JkElQJRKm5iERFoh8QXROkj7MD60KUIIBKgZA01Uok0HTYqoqNskTdelrZsXx3Gu79nzXMfXdmI71/fFjhv/pJt7j4/vtf33yXOec55zHzMoIDdv3vTMOW0dAIKPc2hjDHz4sE+p5It77QRxCwCDIF4rgNe6yhgfcoWloebm5iAUCAZ5hAQNu8R2HmX7QIAuHSLqZYjjxph8obW+aQDySF4EHpkY7ZBl1oMv1oVFDxSWIIo9IAi8v6WucRAsxjKBY63VcZjL/AgUXtRMBNCcnNzm9frBIkwXuEiEXQrZ7tOt9d5TYDKmCjx8+3YXiEJfHm2r2Zjeok0ReGRiAr2A6FkUtgMeBxgbYEw42lJXFwCDCGCQ63fvoDmIXnlsxCU476LPdG1s7AAYRHcLjvmw9hMo7BF4nGFwCm3zUdCJLoEVkyBHz+NhO6wNhphg69ZjMnIWeNHeXjSzI5uemgIzcDid4MTNIgIocmeuIucksFXivvKVPTD96BEY5cdv/RRe3rcPLCRnkUWtT7RC3Dgk7pQJrTgyPw8WQ6bxImqhWWRNXoSV4hYhcZF9Wp6sqQUvdmg+0Mn46Chcev/9tHWSJMGGjRth3bp1YJRrH3yAbSA9DY2N8Nzzz4NJKJ08elKdK83UrSjw8J0xGpkZ8hauDw/DD48eS1tnt9th7969yt4o/7g4CG+f9aet697/qpkCE+2KmwqQ1YXLaiIUR/tx93ONgNpgA8yqT0aBycbgpHUflMgOhxPZ7HFGN234zvh5GjKCTg4d/KZ6LEejMB8KpX0ew2+xtrZW2RslGAxCKMPr2NE/Fh0OtXzw9e9A29NPgykwGMTRXmf6qjSQacDPexYM0NrgVY8bGhpg9+7dUEhu3boFly5dUsu/OPNr+OKePWAaUbm7tWl5tCStiWACnIASuWET+mh+ZunDywSm2bGSv6sLX8ghLuvwlgksy/Jj6TVwzsFqGLDDS1txisCLbpkPSujFs7QVpwhcsr3GoVacXFZHchRa57L+1nv18mWY/OgjtVxdXa0eu1yujO5TviA3MPk9jfz7Pyn1JnoUnpHR0Y6WxtiSANVNuzY+fpYBPwA6+e7Bg/DXP/5JLe/cuRNWMzdu3ICHDx+q5eHxMTALFNXf0uDtpWMh8aD+QUWJVLA77Yp3dorASri9eNYwFAOesCgqE2SKDeY22z4G1rkxDhyiVlVVqeWZmRkIh8PKMdlGmqqMD5XpcaqPQ+c5koa4k5OTplzXajhTlokNxjo5ztutXKUmiiJUVFSo5bgIBAngdrtBEBIOTbIQ1EGWl5er5WSBjVzXchij2NUR4QraCnwvayU6nE98ZIdFFy0nlcF0klsOtSYcIaatp32mOoJGYMn1Zl3XjNm7lYg4bR0i58yS1uv1JmbT5ubmYGws4QaRbYyHiEiEu3fvqmKQOUg+9/79+8pm9nVHMYxlNVEQfCK+g3YawpmN1pZGUF2mVqq3Ba903Xy0YMahTcBX3QQlLAE9CZ+I9tdjxpf54rNNUOf8tFre2VapHkciTpiasqll6vnJO1DeBL6LR/VuiE92uZwuqKhMeAZTXg9EFhLrHWpqahLXnY/A1PT6xHXdleAqcy5eV4bJxihgG45dF18v2ePYWN6MERDjkeys4MSZuHjjiWFef+0ZKI9UZ3lGfdpHGbeBPfSUsjcVFoVIeRm2omiGJ9SklAJgDWSUSiM46/CZ37uVSEHz2rSluBbGoCo8tFhi4JTuaj7XtrAe/4PdyjH54B9OTmPMMP1QfX2VG+2yQ9N1H07PQigcib8l4ALZ3Nh1XRULULluLuO5G6Z/rx7Pi7XwqOxZMAPdAovRabS5/wc9MNkFNik2hyCjsDOheyBnCOk8UVEOWpmPSDA7l7wAMLFaiIkyVGY5V+9nWYmSibCYksAWo9tE5IKA5sAebkpf53DCU68cwncSs7N+vx96e3vV+nNvHYZ9Lz4DWqh77iWo37BFOaZVPs3Nzco+He+c6oavfWErWE2pBVtMSWCLscxExL0EgsllmZ+Ifhp/iDNitliP73vCBl1JJqF2vfZxEA9hEPNBbJbMhpPre3e3weziJHtgYhKG/ncL8g3DaKquWFFFeARqZv+csd45sx1WE/1/eA++8cav1HI2GxxybIZ7lV8FMyiZCIsRcMQTgBJWEbTMBif/O7ZvbYJD+01ci1s8BEjgAID5C/7I5sV5hJ3WmhSYQZAig/nvWtcIGDLCFiwIQzjh1ANFQnA68yJCl8OOM2/GbwczCwzWXBVBkgNgKx5nYsvXj2Ws++X3emH/l3bBaoFF+ZA4H40OOotI4GwtOByJwGrCJUlDwg66FbTkqlmBkhBPcdNw0vuCwFJXZq+EZKuCGWeLWnYtjIMom5P3IRs9L38uY52v7knQS/JniYj6rxMHAypKuEcR2MZhAA1yTgKH7Q3KFodCLmLEeoHP/OhbYAWTFV8GMxGYfEHZ058w2gqI5X4sYQ7BTy6mcFQEVuwwjylewjhoHtQ7PtWhMuPMj2ai4P7w365ch9O/Tdzrcfz4cdi16zPaTp4YAT71oaanUtT4XuULYAky748fqgLTXTE4dUlmoqALUW7ivO3Au/9Syz1H7MDWNWo6lytzwdoEnrfX4rTkFrCAQPwOIyLFAebAT0MJQ+Dw+GRyOUXgSESi5JiF7exYbGlpfMsF62+WXZFAy5K8lykCU2entxVTBCCw/pC66aXnpRdA+nu/uvX3vaGs69Wy/aa/HwoKh2XaLRsjK6240CM7lrRBbBG2lq3ABFq9y9PjLhNYcdkkWXeuxrXKUtsbJ21EgzJ3DN8ZG1wNGVV3bdfe0/vqaqAgMDbQ0tDgT1clZj7H1st59AoU2G37/mvmRHctJEi5hjNVZpynVFIHZmj2JRKgaciayDnrRDAZbZxpK/nGmUBtWlZIR75iVHlBkn7icNg/z4osV3A4sgDHTr8N4fkFpbyheSu82fdztf5T27aBQYZaGxtXTL+zosDkVYxMTHQXW3JQEvidv/wTIyCzSrl7fx28+YNXwSQozW23lidqihWRjcFOr7MU+VDIKYew5oUndEHKm8vB2pZM/9LU+owSnAlBZVUVyCx2e5jTYUpmbOsSNBP5EPl3712Gb//MD0Yhcc+cOwdVVU8oZYfx1OO6UoznvHQqLrLMo+et6PjmMDIct5tGiGLLJXErkxJ2GEB3knxd8Xp6oW0N3h1rwoXDz1gWWejUIy5haPHfdnRTRsbGhjAS0lfucHrstsTtsD09ieBIW5P2e4I3bdqUcu7s/DxE5dwTWjhcTnAYs7tBGmihK2bo941M+6mdpurqvnKnM23mKv7gNvD/vguaeHIzCJ/4rFocfTAJM2HLk9+nwmCQpgpWxU/tEPRG3C4X+YV0e1AAipeAkqa23ttphriEqWumMALhx60ZYnnNA1A8BLnMT6Kt3ZEuB7ARLE37IUnSAYw0nOCRkI/NPkhUJEd/bSKwzbvwq46tiuQONzB3Ii1CCL2K5Mn00Qf3wURI2NPlknTKqt/9tPRGRFEU/bjzo0Ad4HQfwGNKdeVJif4yAZjHq96IuPQbd5v/0zmxn5zE0Hpy9Ncq8nKnJ5qNQdzRRq2xS5bmulDWNgz05GcCiYb4UX6BFoTQikerWms68iJwMig22TjFzvErZz2SZGunxHjYGbRB7FYGT9I+hwurNj8Q/9lfWvtcFo0O5lPQpXwMqNZ1Y7Gza4oAAAAASUVORK5CYII=",yy="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_3508_29716'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='72'%20height='72'%3e%3crect%20width='72'%20height='72'%20rx='19.6364'%20fill='%23F9FBFD'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_3508_29716)'%3e%3crect%20x='-0.203125'%20width='72.2024'%20height='72'%20rx='19.6364'%20fill='%23199B61'/%3e%3cpath%20d='M18.3262%2034.8875C19.1522%2034.8875%2019.9392%2035.054%2020.6562%2035.3542C20.5336%2035.97%2020.4688%2036.6068%2020.4688%2037.2585C20.4688%2039.9795%2021.5909%2042.4379%2023.3955%2044.2C22.32%2045.8613%2020.4526%2046.9616%2018.3262%2046.9617C14.9919%2046.9617%2012.2891%2044.2588%2012.2891%2040.9246C12.2892%2037.5905%2014.992%2034.8875%2018.3262%2034.8875ZM30.1719%2027.5564C31.7294%2027.5564%2033.2006%2027.9256%2034.5049%2028.5779C33.809%2030.1812%2033.4229%2031.9501%2033.4229%2033.8093C33.4229%2037.6214%2035.0445%2041.0546%2037.6357%2043.4568C35.8561%2045.5978%2033.1735%2046.9616%2030.1719%2046.9617C27.5348%2046.9613%2025.1445%2045.9077%2023.3955%2044.2C24.0064%2043.2563%2024.3633%2042.1324%2024.3633%2040.9246C24.3631%2038.4165%2022.8334%2036.266%2020.6562%2035.3542C21.5417%2030.9083%2025.466%2027.557%2030.1719%2027.5564ZM46.5752%2020.657C53.8388%2020.6572%2059.7274%2026.5457%2059.7275%2033.8093C59.7275%2041.0731%2053.8389%2046.9615%2046.5752%2046.9617C43.1234%2046.9617%2039.9821%2045.632%2037.6357%2043.4568C39.0331%2041.7756%2039.874%2039.6155%2039.874%2037.2585C39.8737%2033.4579%2037.6877%2030.1696%2034.5049%2028.5779C36.5278%2023.9173%2041.1707%2020.657%2046.5752%2020.657Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",gy="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_3525_29046'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='72'%20height='72'%3e%3crect%20width='72'%20height='72'%20rx='19.6364'%20fill='%23F9FBFD'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_3525_29046)'%3e%3crect%20x='-0.203125'%20width='72.2024'%20height='72'%20rx='19.6364'%20fill='black'/%3e%3cpath%20d='M17%2041.655C17%2040.7028%2017.7719%2039.9309%2018.7241%2039.9309H33.3793V54.9999H18.7241C17.7719%2054.9999%2017%2054.228%2017%2053.2758V41.655Z'%20fill='white'/%3e%3cpath%20d='M33.3789%2039.9309H53.2755C54.2277%2039.9309%2054.9996%2040.7028%2054.9996%2041.655V53.2758C54.9996%2054.228%2054.2277%2054.9999%2053.2755%2054.9999H49.1267C48.1793%2054.9999%2047.2736%2054.6101%2046.6224%2053.9221L33.3789%2039.9309Z'%20fill='white'/%3e%3cpath%20d='M17%2018.7241C17%2017.7719%2017.7719%2017%2018.7241%2017H31.6552C32.6074%2017%2033.3793%2017.7719%2033.3793%2018.7241V39.9311L17.9881%2024.26C17.3548%2023.6152%2017%2022.7476%2017%2021.8438V18.7241Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",hy="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='72'%20height='72'%20fill='%235A6CFA'/%3e%3cpath%20d='M55.9971%2016.083C55.3509%2016.8041%2054.8456%2017.4047%2054.4053%2017.9902C46.1927%2028.9102%2046.3675%2043.9931%2054.8311%2054.7197C55.1835%2055.1664%2055.5764%2055.6201%2056.0439%2056.1318C55.1066%2055.2937%2054.3402%2054.6578%2053.5869%2054.1152C43.0827%2046.5503%2028.9173%2046.5503%2018.4131%2054.1152C17.6596%2054.6579%2016.8927%2055.2935%2015.9551%2056.1318C16.4229%2055.6199%2016.8164%2055.1665%2017.1689%2054.7197C25.6325%2043.9931%2025.8073%2028.9102%2017.5947%2017.9902C17.1543%2017.4046%2016.6484%2016.8043%2016.002%2016.083C16.5084%2016.544%2016.9591%2016.9328%2017.4023%2017.2812C28.3165%2025.8602%2043.6835%2025.8602%2054.5977%2017.2812C55.0408%2016.9329%2055.4909%2016.5438%2055.9971%2016.083Z'%20fill='url(%23paint0_linear_3525_29032)'%20stroke='url(%23paint1_linear_3525_29032)'%20stroke-width='0.28125'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_3525_29032'%20x1='36'%20y1='11.7422'%20x2='36'%20y2='60.2578'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_3525_29032'%20x1='36'%20y1='11.7422'%20x2='36'%20y2='48.4453'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",py="/assets/claude-code-post-pokemon-VAUFhk2w.png",by="/assets/claude-code-post-portfolio-BZj6IPLw.png",vy="/assets/claude-code-zhKvRGMP.png",xy={slug:"building-with-claude-code",date:"FEB 2026",isoDate:"2026-02-01",title:"Building With Claude Code",description:"This new portfolio started from a simple idea. I wanted to build something fully on my own, from start to finish.",image:vy,blogPost:{intro:["This new portfolio started from a simple idea. I wanted to build something fully on my own, from start to finish. I've been curious about Claude Code for a while, so I decided to use it for something real instead of just reading about it. No pressure. Just building."],sections:[{heading:"Starting Small and Getting Hooked",body:["As a designer, I constantly see things I want to improve. There's always a smoother animation, a cleaner layout, a better flow. So instead of overthinking, I just started. I began with a beginner Claude Code tutorial. It was helpful and surprisingly fast. Within minutes I had a script that scans the internet for the newest Pokémon cards with benchmark data. It was not perfect, but it worked. And that was enough to get excited.","","After some tweaks and styling, it turned into my local Pokémon tracker. Every day at 8 it checks for new Pokémon cards on OLX, reads the barcode from the image, and saves the offer link plus the certificate link if it finds one. The certification API part is still manual, but that's fine for now. Small steps."],image:py},{heading:"Building the Portfolio",body:["That early momentum pushed me to build the portfolio itself. I designed everything in Figma and used Figma MCP to translate the project. It works really well. Sometimes it misses tiny details, but it makes building locally much faster. The biggest difference showed up in the transitions. Smooth transitions. Elements morphing between pages. Things that used to feel heavy suddenly felt natural. It finally feels like the tools support the idea instead of slowing it down."]},{heading:"Tools That Made It Smoother",body:["I also connected Agentation, which works like a visual notebook. I can point at something and say fix this, and the communication becomes much clearer. Polishing is still polishing. You fix one thing and something else shifts. That's part of the process. But finishing something end to end, exactly how you imagined it, is one of the best feelings."],image:by},{heading:"What's Next",body:["On top of that, I built a small web app for myself where I track ideas and open processes straight from the dock. Once you start building tools for yourself, it's hard to stop.","","More soon."]}]}},Ts={name:"Greg Oksiuta",siteUrl:"https://goksiuta.com/",avatarUrl:my,text:"Current Lead Product Designer @ Layer3. Working on Ample, Layer3, and Mellow."},Sy=[{name:"Ample",description:"A new way to amplify your money.",icon:yy,url:"http://ample.money/"},{name:"Layer3",description:"Discover onchain finance with one app.",icon:gy,url:"https://app.layer3.xyz"},{name:"Mellow",description:"Parenting coach mobile app.",icon:hy,url:"https://apps.apple.com/sk/app/mellowsleep/id6636552824"}],f0=[xy],zy=()=>b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"shrink-0",children:b.jsx("path",{d:"M3 13L13 3M13 3H7M13 3V9",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})});function Ay(){return b.jsxs("section",{className:"mb-12",children:[b.jsx("h2",{className:"text-[24px] font-normal text-gray-900 mb-4 pb-4 border-b border-[#F2F2F2]",children:"Projects"}),b.jsx("div",{className:"flex flex-col gap-2",children:Sy.map(t=>b.jsx("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"block group hover:bg-[#F9FBFD] active:bg-[#F2F5F7] rounded-[20px] px-[8px] py-[8px] -mx-[8px] transition-colors",children:b.jsxs("div",{className:"flex items-center gap-8",children:[b.jsx("img",{src:t.icon,alt:`${t.name} logo`,className:"w-[64px] h-[64px] rounded-[20px] shrink-0 object-cover group-active:scale-[0.95] transition-transform"}),b.jsxs("div",{className:"flex-1",children:[b.jsx("h3",{className:"text-[18px] font-normal text-gray-900 group-hover:text-gray-600 transition-colors",children:t.name}),b.jsx("p",{className:"text-[16px] text-gray-400",children:t.description})]}),b.jsx("span",{className:"text-gray-400 shrink-0 mr-6 opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200",children:b.jsx(zy,{})})]})},t.name))})]})}function Ty({onSelect:t}){return b.jsxs("section",{children:[b.jsx("h2",{className:"text-[24px] font-normal text-gray-900 mb-4 pb-4 border-b border-[#F2F2F2]",children:"Thoughts"}),b.jsx("div",{className:"flex flex-col gap-2",children:f0.map(e=>b.jsx("button",{onClick:()=>t(e),className:"block text-left w-full group hover:bg-[#F9FBFD] active:bg-[#F2F5F7] rounded-[20px] px-[8px] py-[16px] -mx-[8px] transition-colors",children:b.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 sm:gap-8",children:[b.jsx("span",{className:"text-xs font-normal tracking-wider text-gray-400 uppercase shrink-0 sm:w-[64px] sm:pt-1",children:e.date}),b.jsxs("div",{className:"w-full sm:w-[420px] shrink-0",children:[b.jsx("h3",{className:"text-[18px] font-normal text-gray-900 leading-snug group-hover:text-gray-600 transition-colors",children:e.title}),b.jsx("p",{className:"mt-2 text-[16px] text-gray-400 leading-relaxed",children:e.description})]}),e.image?b.jsx("img",{src:e.image,alt:e.title,loading:"lazy",className:"w-full sm:flex-1 h-36 bg-gray-100 rounded-xl object-cover group-active:scale-[0.95] transition-transform"}):b.jsx("div",{className:"w-full sm:flex-1 h-36 bg-gray-100 rounded-xl"})]})},e.slug))})]})}function Ey({thought:t}){const e=t.blogPost;return Q.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),b.jsx("div",{className:"bg-white",children:b.jsxs("div",{className:"max-w-[920px] mx-auto px-6 pb-24 flex flex-col items-center gap-[34px]",children:[b.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-[673px]",children:[b.jsx("p",{className:"text-[12px] font-medium tracking-[0.48px] uppercase text-[#73838a]",children:t.date}),b.jsx("h1",{className:"text-[26px] font-normal text-black leading-[1.371]",children:t.title})]}),(e==null?void 0:e.intro)&&b.jsx("div",{className:"w-full max-w-[673px] text-[20px] text-[#404245] leading-[30px]",children:e.intro.map((l,n)=>l===""?b.jsx("p",{className:"mt-[30px]"},n):b.jsx("p",{children:l},n))}),e==null?void 0:e.sections.map((l,n)=>b.jsxs("div",{className:"w-full flex flex-col items-center gap-[34px]",children:[l.image&&b.jsx("div",{className:"w-full rounded-2xl bg-[#f2f5f7] flex items-center justify-center py-12 px-6",children:b.jsx("img",{src:l.image,alt:l.heading??t.title,className:"w-full max-w-[670px] rounded-[6px]",style:{filter:"drop-shadow(0px 86px 61.6px rgba(0, 0, 0, 0.05))"}})}),(l.heading||l.body.length>0)&&b.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-[673px]",children:[l.heading&&b.jsx("h2",{className:"text-[24px] font-normal text-black leading-[1.371]",children:l.heading}),b.jsx("div",{className:"text-[20px] text-[#404245] leading-[30px]",children:l.body.map((a,u)=>a===""?b.jsx("p",{className:"mt-[30px]"},u):b.jsx("p",{children:a},u))})]})]},l.heading??n))]})})}function it(t,e,l){let n=document.querySelector(`meta[${t}="${e}"]`);n||(n=document.createElement("meta"),n.setAttribute(t,e),document.head.appendChild(n)),n.content=l}function n_(t){let e=document.querySelector('link[rel="canonical"]');e||(e=document.createElement("link"),e.rel="canonical",document.head.appendChild(e)),e.href=t}function a_(t){let e=document.querySelector('script[type="application/ld+json"]');e||(e=document.createElement("script"),e.type="application/ld+json",document.head.appendChild(e)),e.textContent=JSON.stringify(t)}function Oy(t){Q.useEffect(()=>{const{name:e,siteUrl:l,text:n,avatarUrl:a}=Ts,u=`${window.location.origin}${a}`;if(t){const i=`${l}${t.slug}`,s=t.image?`${window.location.origin}${t.image}`:void 0;document.title=`${t.title} — ${e}`,it("name","description",t.description),it("property","og:type","article"),it("property","og:title",t.title),it("property","og:description",t.description),it("property","og:url",i),s&&it("property","og:image",s),it("name","twitter:card",s?"summary_large_image":"summary"),it("name","twitter:title",t.title),it("name","twitter:description",t.description),s&&it("name","twitter:image",s),n_(i),a_({"@context":"https://schema.org","@type":"Article",headline:t.title,description:t.description,author:{"@type":"Person",name:e,url:l},url:i,...t.isoDate?{datePublished:t.isoDate}:{},...s?{image:s}:{}})}else{const i=`${e} - Product Designer`;document.title=i,it("name","description",n),it("property","og:type","website"),it("property","og:title",i),it("property","og:description",n),it("property","og:url",l),it("property","og:image",u),it("name","twitter:card","summary"),it("name","twitter:title",i),it("name","twitter:description",n),it("name","twitter:image",u),n_(l),a_({"@context":"https://schema.org","@type":"Person",name:e,url:l,image:u,jobTitle:"Lead Product Designer",sameAs:["https://github.com/goksiuta"]})}},[t])}const u_=140,Es="/",My=()=>b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{d:"M13 8H3M3 8L7 4M3 8L7 12",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})});function Mi(t,e){if("startViewTransition"in document){const l=document.startViewTransition(()=>S_.flushSync(t));e&&l.finished.then(e)}else t(),e==null||e()}function i_(){const t=window.location.pathname.slice(Es.length).replace(/\/$/,"");return f0.find(e=>e.slug===t)??null}function Yy(){const[t,e]=Q.useState(i_);Oy(t);const[l,n]=Q.useState(!1),a=Q.useRef(!1),u=Q.useRef(null),i=Q.useRef(null),s=Q.useRef(null);Q.useEffect(()=>{const m=t?`${Es}${t.slug}`:Es;window.location.pathname!==m&&window.history.pushState(null,"",m)},[t]),Q.useEffect(()=>{const m=()=>{const g=i_();g?e(g):Mi(()=>{window.scrollTo(0,0),e(null)})};return window.addEventListener("popstate",m),()=>window.removeEventListener("popstate",m)},[]),Q.useEffect(()=>{if(t){n(!1),a.current=!1;return}const m=()=>{var f;const g=window.scrollY>100;g!==a.current&&(a.current=g,i.current=((f=u.current)==null?void 0:f.getBoundingClientRect())??null,n(g))};return window.addEventListener("scroll",m,{passive:!0}),m(),()=>window.removeEventListener("scroll",m)},[t]);const o=!!t||l;Q.useLayoutEffect(()=>{const m=u.current,g=i.current;if(i.current=null,!m||!g||t)return;const f=m.getBoundingClientRect(),y=g.left-f.left,v=g.top-f.top;if(Math.abs(y)<1&&Math.abs(v)<1)return;m.style.transition="none",m.style.transform=`translate(${y}px, ${v}px)`,m.getBoundingClientRect(),m.style.transition="transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",m.style.transform="";const A=()=>{m.style.transition="",m.style.transform=""};m.addEventListener("transitionend",A,{once:!0})},[o]);const r=()=>{document.querySelectorAll("[style*='view-transition-name']").forEach(m=>{m.style.viewTransitionName="none"}),document.querySelectorAll(".blog-nav-btn").forEach(m=>{m.style.visibility="hidden"}),Mi(()=>{window.scrollTo(0,0),e(null)},()=>{var m;(m=s.current)==null||m.focus({preventScroll:!0})})};return b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:o?"fixed top-8 left-9 z-50 flex items-center gap-4":"max-w-[920px] mx-auto px-6 pt-16 pb-5 flex items-center gap-4",children:[b.jsx("img",{ref:u,src:Ts.avatarUrl,alt:t?"Go back to homepage":Ts.name,onClick:t?r:void 0,role:t?"button":void 0,tabIndex:t?0:void 0,onKeyDown:t?m=>m.key==="Enter"&&r():void 0,className:`w-14 h-14 rounded-2xl shrink-0 avatar-img${t?" cursor-pointer hover:opacity-80 transition-opacity":""}`}),t&&b.jsxs("button",{onClick:r,className:"flex items-center gap-[13px] text-[16px] text-black blog-nav-btn hover:shadow-md transition-shadow bg-white rounded-2xl px-3 py-2 border border-white/60 shadow-sm",children:[b.jsx(My,{}),b.jsx("span",{children:"All Thoughts"})]})]}),t?b.jsx("div",{style:{paddingTop:u_},children:b.jsx(Ey,{thought:t})}):b.jsxs("main",{ref:s,tabIndex:-1,className:"max-w-[920px] mx-auto px-6 pb-16 outline-none",style:{paddingTop:l?u_:void 0},children:[b.jsx("div",{className:"fade-in-section",style:{animationDelay:"0s"},children:b.jsx(dy,{})}),b.jsx("div",{className:"fade-in-section",style:{animationDelay:"0.15s"},children:b.jsx(Ay,{})}),b.jsx("div",{id:"thoughts",className:"fade-in-section",style:{animationDelay:"0.3s"},children:b.jsx(Ty,{onSelect:m=>Mi(()=>e(m))})})]}),!1]})}sy.createRoot(document.getElementById("root")).render(b.jsx(Q.StrictMode,{children:b.jsx(Yy,{})}));

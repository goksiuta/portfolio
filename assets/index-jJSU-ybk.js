(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const i of u.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(a){if(a.ep)return;a.ep=!0;const u=l(a);fetch(a.href,u)}})();var o_={exports:{}},zu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0=Symbol.for("react.transitional.element"),m0=Symbol.for("react.fragment");function c_(e,t,l){var n=null;if(l!==void 0&&(n=""+l),t.key!==void 0&&(n=""+t.key),"key"in t){l={};for(var a in t)a!=="key"&&(l[a]=t[a])}else l=t;return t=l.ref,{$$typeof:d0,type:e,key:n,ref:t!==void 0?t:null,props:l}}zu.Fragment=m0;zu.jsx=c_;zu.jsxs=c_;o_.exports=zu;var b=o_.exports,__={exports:{}},O={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Os=Symbol.for("react.transitional.element"),y0=Symbol.for("react.portal"),g0=Symbol.for("react.fragment"),h0=Symbol.for("react.strict_mode"),p0=Symbol.for("react.profiler"),b0=Symbol.for("react.consumer"),v0=Symbol.for("react.context"),x0=Symbol.for("react.forward_ref"),S0=Symbol.for("react.suspense"),z0=Symbol.for("react.memo"),f_=Symbol.for("react.lazy"),A0=Symbol.for("react.activity"),Co=Symbol.iterator;function T0(e){return e===null||typeof e!="object"?null:(e=Co&&e[Co]||e["@@iterator"],typeof e=="function"?e:null)}var r_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d_=Object.assign,m_={};function on(e,t,l){this.props=e,this.context=t,this.refs=m_,this.updater=l||r_}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function y_(){}y_.prototype=on.prototype;function Ys(e,t,l){this.props=e,this.context=t,this.refs=m_,this.updater=l||r_}var Ms=Ys.prototype=new y_;Ms.constructor=Ys;d_(Ms,on.prototype);Ms.isPureReactComponent=!0;var Uo=Array.isArray;function Yi(){}var P={H:null,A:null,T:null,S:null},g_=Object.prototype.hasOwnProperty;function Cs(e,t,l){var n=l.ref;return{$$typeof:Os,type:e,key:t,ref:n!==void 0?n:null,props:l}}function E0(e,t){return Cs(e.type,t,e.props)}function Us(e){return typeof e=="object"&&e!==null&&e.$$typeof===Os}function O0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(l){return t[l]})}var Do=/\/+/g;function Gu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?O0(""+e.key):t.toString(36)}function Y0(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Yi,Yi):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Yl(e,t,l,n,a){var u=typeof e;(u==="undefined"||u==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(u){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Os:case y0:i=!0;break;case f_:return i=e._init,Yl(i(e._payload),t,l,n,a)}}if(i)return a=a(e),i=n===""?"."+Gu(e,0):n,Uo(a)?(l="",i!=null&&(l=i.replace(Do,"$&/")+"/"),Yl(a,t,l,"",function(_){return _})):a!=null&&(Us(a)&&(a=E0(a,l+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Do,"$&/")+"/")+i)),t.push(a)),1;i=0;var s=n===""?".":n+":";if(Uo(e))for(var o=0;o<e.length;o++)n=e[o],u=s+Gu(n,o),i+=Yl(n,t,l,u,a);else if(o=T0(e),typeof o=="function")for(e=o.call(e),o=0;!(n=e.next()).done;)n=n.value,u=s+Gu(n,o++),i+=Yl(n,t,l,u,a);else if(u==="object"){if(typeof e.then=="function")return Yl(Y0(e),t,l,n,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function ha(e,t,l){if(e==null)return e;var n=[],a=0;return Yl(e,n,"","",function(u){return t.call(l,u,a++)}),n}function M0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(l){(e._status===0||e._status===-1)&&(e._status=1,e._result=l)},function(l){(e._status===0||e._status===-1)&&(e._status=2,e._result=l)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var No=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},C0={map:ha,forEach:function(e,t,l){ha(e,function(){t.apply(this,arguments)},l)},count:function(e){var t=0;return ha(e,function(){t++}),t},toArray:function(e){return ha(e,function(t){return t})||[]},only:function(e){if(!Us(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Activity=A0;O.Children=C0;O.Component=on;O.Fragment=g0;O.Profiler=p0;O.PureComponent=Ys;O.StrictMode=h0;O.Suspense=S0;O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P;O.__COMPILER_RUNTIME={__proto__:null,c:function(e){return P.H.useMemoCache(e)}};O.cache=function(e){return function(){return e.apply(null,arguments)}};O.cacheSignal=function(){return null};O.cloneElement=function(e,t,l){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var n=d_({},e.props),a=e.key;if(t!=null)for(u in t.key!==void 0&&(a=""+t.key),t)!g_.call(t,u)||u==="key"||u==="__self"||u==="__source"||u==="ref"&&t.ref===void 0||(n[u]=t[u]);var u=arguments.length-2;if(u===1)n.children=l;else if(1<u){for(var i=Array(u),s=0;s<u;s++)i[s]=arguments[s+2];n.children=i}return Cs(e.type,a,n)};O.createContext=function(e){return e={$$typeof:v0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:b0,_context:e},e};O.createElement=function(e,t,l){var n,a={},u=null;if(t!=null)for(n in t.key!==void 0&&(u=""+t.key),t)g_.call(t,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(a[n]=t[n]);var i=arguments.length-2;if(i===1)a.children=l;else if(1<i){for(var s=Array(i),o=0;o<i;o++)s[o]=arguments[o+2];a.children=s}if(e&&e.defaultProps)for(n in i=e.defaultProps,i)a[n]===void 0&&(a[n]=i[n]);return Cs(e,u,a)};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:x0,render:e}};O.isValidElement=Us;O.lazy=function(e){return{$$typeof:f_,_payload:{_status:-1,_result:e},_init:M0}};O.memo=function(e,t){return{$$typeof:z0,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=P.T,l={};P.T=l;try{var n=e(),a=P.S;a!==null&&a(l,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(Yi,No)}catch(u){No(u)}finally{t!==null&&l.types!==null&&(t.types=l.types),P.T=t}};O.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()};O.use=function(e){return P.H.use(e)};O.useActionState=function(e,t,l){return P.H.useActionState(e,t,l)};O.useCallback=function(e,t){return P.H.useCallback(e,t)};O.useContext=function(e){return P.H.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e,t){return P.H.useDeferredValue(e,t)};O.useEffect=function(e,t){return P.H.useEffect(e,t)};O.useEffectEvent=function(e){return P.H.useEffectEvent(e)};O.useId=function(){return P.H.useId()};O.useImperativeHandle=function(e,t,l){return P.H.useImperativeHandle(e,t,l)};O.useInsertionEffect=function(e,t){return P.H.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return P.H.useLayoutEffect(e,t)};O.useMemo=function(e,t){return P.H.useMemo(e,t)};O.useOptimistic=function(e,t){return P.H.useOptimistic(e,t)};O.useReducer=function(e,t,l){return P.H.useReducer(e,t,l)};O.useRef=function(e){return P.H.useRef(e)};O.useState=function(e){return P.H.useState(e)};O.useSyncExternalStore=function(e,t,l){return P.H.useSyncExternalStore(e,t,l)};O.useTransition=function(){return P.H.useTransition()};O.version="19.2.4";__.exports=O;var Q=__.exports,h_={exports:{}},Au={},p_={exports:{}},b_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,j){var N=S.length;S.push(j);e:for(;0<N;){var U=N-1>>>1,F=S[U];if(0<a(F,j))S[U]=j,S[N]=F,N=U;else break e}}function l(S){return S.length===0?null:S[0]}function n(S){if(S.length===0)return null;var j=S[0],N=S.pop();if(N!==j){S[0]=N;e:for(var U=0,F=S.length,Ze=F>>>1;U<Ze;){var ya=2*(U+1)-1,qu=S[ya],al=ya+1,ga=S[al];if(0>a(qu,N))al<F&&0>a(ga,qu)?(S[U]=ga,S[al]=N,U=al):(S[U]=qu,S[ya]=N,U=ya);else if(al<F&&0>a(ga,N))S[U]=ga,S[al]=N,U=al;else break e}}return j}function a(S,j){var N=S.sortIndex-j.sortIndex;return N!==0?N:S.id-j.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var o=[],_=[],y=1,g=null,r=3,m=!1,v=!1,A=!1,w=!1,f=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;function h(S){for(var j=l(_);j!==null;){if(j.callback===null)n(_);else if(j.startTime<=S)n(_),j.sortIndex=j.expirationTime,t(o,j);else break;j=l(_)}}function z(S){if(A=!1,h(S),!v)if(l(o)!==null)v=!0,M||(M=!0,Ge());else{var j=l(_);j!==null&&nl(z,j.startTime-S)}}var M=!1,x=-1,T=5,C=-1;function D(){return w?!0:!(e.unstable_now()-C<T)}function Te(){if(w=!1,M){var S=e.unstable_now();C=S;var j=!0;try{e:{v=!1,A&&(A=!1,c(x),x=-1),m=!0;var N=r;try{t:{for(h(S),g=l(o);g!==null&&!(g.expirationTime>S&&D());){var U=g.callback;if(typeof U=="function"){g.callback=null,r=g.priorityLevel;var F=U(g.expirationTime<=S);if(S=e.unstable_now(),typeof F=="function"){g.callback=F,h(S),j=!0;break t}g===l(o)&&n(o),h(S)}else n(o);g=l(o)}if(g!==null)j=!0;else{var Ze=l(_);Ze!==null&&nl(z,Ze.startTime-S),j=!1}}break e}finally{g=null,r=N,m=!1}j=void 0}}finally{j?Ge():M=!1}}}var Ge;if(typeof d=="function")Ge=function(){d(Te)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,ma=Mt.port2;Mt.port1.onmessage=Te,Ge=function(){ma.postMessage(null)}}else Ge=function(){f(Te,0)};function nl(S,j){x=f(function(){S(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return r},e.unstable_next=function(S){switch(r){case 1:case 2:case 3:var j=3;break;default:j=r}var N=r;r=j;try{return S()}finally{r=N}},e.unstable_requestPaint=function(){w=!0},e.unstable_runWithPriority=function(S,j){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var N=r;r=S;try{return j()}finally{r=N}},e.unstable_scheduleCallback=function(S,j,N){var U=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?U+N:U):N=U,S){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=N+F,S={id:y++,callback:j,priorityLevel:S,startTime:N,expirationTime:F,sortIndex:-1},N>U?(S.sortIndex=N,t(_,S),l(o)===null&&S===l(_)&&(A?(c(x),x=-1):A=!0,nl(z,N-U))):(S.sortIndex=F,t(o,S),v||m||(v=!0,M||(M=!0,Ge()))),S},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(S){var j=r;return function(){var N=r;r=j;try{return S.apply(this,arguments)}finally{r=N}}}})(b_);p_.exports=b_;var U0=p_.exports,v_={exports:{}},Ae={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0=Q;function x_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ct(){}var ze={d:{f:Ct,r:function(){throw Error(x_(522))},D:Ct,C:Ct,L:Ct,m:Ct,X:Ct,S:Ct,M:Ct},p:0,findDOMNode:null},N0=Symbol.for("react.portal");function w0(e,t,l){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N0,key:n==null?null:""+n,children:e,containerInfo:t,implementation:l}}var Yn=D0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Tu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ze;Ae.createPortal=function(e,t){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(x_(299));return w0(e,t,null,l)};Ae.flushSync=function(e){var t=Yn.T,l=ze.p;try{if(Yn.T=null,ze.p=2,e)return e()}finally{Yn.T=t,ze.p=l,ze.d.f()}};Ae.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,ze.d.C(e,t))};Ae.prefetchDNS=function(e){typeof e=="string"&&ze.d.D(e)};Ae.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var l=t.as,n=Tu(l,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,u=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;l==="style"?ze.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:n,integrity:a,fetchPriority:u}):l==="script"&&ze.d.X(e,{crossOrigin:n,integrity:a,fetchPriority:u,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ae.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var l=Tu(t.as,t.crossOrigin);ze.d.M(e,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&ze.d.M(e)};Ae.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var l=t.as,n=Tu(l,t.crossOrigin);ze.d.L(e,l,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ae.preloadModule=function(e,t){if(typeof e=="string")if(t){var l=Tu(t.as,t.crossOrigin);ze.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else ze.d.m(e)};Ae.requestFormReset=function(e){ze.d.r(e)};Ae.unstable_batchedUpdates=function(e,t){return e(t)};Ae.useFormState=function(e,t,l){return Yn.H.useFormState(e,t,l)};Ae.useFormStatus=function(){return Yn.H.useHostTransitionStatus()};Ae.version="19.2.4";function S_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S_)}catch(e){console.error(e)}}S_(),v_.exports=Ae;var z_=v_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe=U0,A_=Q,j0=z_;function p(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function la(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function E_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wo(e){if(la(e)!==e)throw Error(p(188))}function B0(e){var t=e.alternate;if(!t){if(t=la(e),t===null)throw Error(p(188));return t!==e?null:e}for(var l=e,n=t;;){var a=l.return;if(a===null)break;var u=a.alternate;if(u===null){if(n=a.return,n!==null){l=n;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===l)return wo(a),e;if(u===n)return wo(a),t;u=u.sibling}throw Error(p(188))}if(l.return!==n.return)l=a,n=u;else{for(var i=!1,s=a.child;s;){if(s===l){i=!0,l=a,n=u;break}if(s===n){i=!0,n=a,l=u;break}s=s.sibling}if(!i){for(s=u.child;s;){if(s===l){i=!0,l=u,n=a;break}if(s===n){i=!0,n=u,l=a;break}s=s.sibling}if(!i)throw Error(p(189))}}if(l.alternate!==n)throw Error(p(190))}if(l.tag!==3)throw Error(p(188));return l.stateNode.current===l?e:t}function Y_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Y_(e),t!==null)return t;e=e.sibling}return null}var ee=Object.assign,H0=Symbol.for("react.element"),pa=Symbol.for("react.transitional.element"),zn=Symbol.for("react.portal"),Ul=Symbol.for("react.fragment"),M_=Symbol.for("react.strict_mode"),Mi=Symbol.for("react.profiler"),C_=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),Ds=Symbol.for("react.forward_ref"),Ci=Symbol.for("react.suspense"),Ui=Symbol.for("react.suspense_list"),Ns=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),Di=Symbol.for("react.activity"),R0=Symbol.for("react.memo_cache_sentinel"),jo=Symbol.iterator;function gn(e){return e===null||typeof e!="object"?null:(e=jo&&e[jo]||e["@@iterator"],typeof e=="function"?e:null)}var X0=Symbol.for("react.client.reference");function Ni(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===X0?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ul:return"Fragment";case Mi:return"Profiler";case M_:return"StrictMode";case Ci:return"Suspense";case Ui:return"SuspenseList";case Di:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case zn:return"Portal";case ht:return e.displayName||"Context";case C_:return(e._context.displayName||"Context")+".Consumer";case Ds:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ns:return t=e.displayName||null,t!==null?t:Ni(e.type)||"Memo";case Ut:t=e._payload,e=e._init;try{return Ni(e(t))}catch{}}return null}var An=Array.isArray,E=A_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=j0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_l={pending:!1,data:null,method:null,action:null},wi=[],Dl=-1;function ot(e){return{current:e}}function ye(e){0>Dl||(e.current=wi[Dl],wi[Dl]=null,Dl--)}function W(e,t){Dl++,wi[Dl]=e.current,e.current=t}var st=ot(null),qn=ot(null),qt=ot(null),Ka=ot(null);function Wa(e,t){switch(W(qt,t),W(qn,e),W(st,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Lc(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Lc(t),e=$r(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ye(st),W(st,e)}function Fl(){ye(st),ye(qn),ye(qt)}function ji(e){e.memoizedState!==null&&W(Ka,e);var t=st.current,l=$r(t,e.type);t!==l&&(W(qn,e),W(st,l))}function Fa(e){qn.current===e&&(ye(st),ye(qn)),Ka.current===e&&(ye(Ka),Pn._currentValue=_l)}var Zu,Bo;function il(e){if(Zu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Zu=t&&t[1]||"",Bo=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zu+e+Bo}var ku=!1;function Vu(e,t){if(!e||ku)return"";ku=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(m){var r=m}Reflect.construct(e,[],g)}else{try{g.call()}catch(m){r=m}e.call(g.prototype)}}else{try{throw Error()}catch(m){r=m}(g=e())&&typeof g.catch=="function"&&g.catch(function(){})}}catch(m){if(m&&r&&typeof m.stack=="string")return[m.stack,r.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),i=u[0],s=u[1];if(i&&s){var o=i.split(`
`),_=s.split(`
`);for(a=n=0;n<o.length&&!o[n].includes("DetermineComponentFrameRoot");)n++;for(;a<_.length&&!_[a].includes("DetermineComponentFrameRoot");)a++;if(n===o.length||a===_.length)for(n=o.length-1,a=_.length-1;1<=n&&0<=a&&o[n]!==_[a];)a--;for(;1<=n&&0<=a;n--,a--)if(o[n]!==_[a]){if(n!==1||a!==1)do if(n--,a--,0>a||o[n]!==_[a]){var y=`
`+o[n].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=n&&0<=a);break}}}finally{ku=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?il(l):""}function Q0(e,t){switch(e.tag){case 26:case 27:case 5:return il(e.type);case 16:return il("Lazy");case 13:return e.child!==t&&t!==null?il("Suspense Fallback"):il("Suspense");case 19:return il("SuspenseList");case 0:case 15:return Vu(e.type,!1);case 11:return Vu(e.type.render,!1);case 1:return Vu(e.type,!0);case 31:return il("Activity");default:return""}}function Ho(e){try{var t="",l=null;do t+=Q0(e,l),l=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Bi=Object.prototype.hasOwnProperty,ws=fe.unstable_scheduleCallback,Ju=fe.unstable_cancelCallback,L0=fe.unstable_shouldYield,q0=fe.unstable_requestPaint,He=fe.unstable_now,G0=fe.unstable_getCurrentPriorityLevel,U_=fe.unstable_ImmediatePriority,D_=fe.unstable_UserBlockingPriority,$a=fe.unstable_NormalPriority,Z0=fe.unstable_LowPriority,N_=fe.unstable_IdlePriority,k0=fe.log,V0=fe.unstable_setDisableYieldValue,na=null,Re=null;function Ht(e){if(typeof k0=="function"&&V0(e),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(na,e)}catch{}}var Xe=Math.clz32?Math.clz32:W0,J0=Math.log,K0=Math.LN2;function W0(e){return e>>>=0,e===0?32:31-(J0(e)/K0|0)|0}var ba=256,va=262144,xa=4194304;function sl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Eu(e,t,l){var n=e.pendingLanes;if(n===0)return 0;var a=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var s=n&134217727;return s!==0?(n=s&~u,n!==0?a=sl(n):(i&=s,i!==0?a=sl(i):l||(l=s&~e,l!==0&&(a=sl(l))))):(s=n&~u,s!==0?a=sl(s):i!==0?a=sl(i):l||(l=n&~e,l!==0&&(a=sl(l)))),a===0?0:t!==0&&t!==a&&!(t&u)&&(u=a&-a,l=t&-t,u>=l||u===32&&(l&4194048)!==0)?t:a}function aa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function F0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function w_(){var e=xa;return xa<<=1,!(xa&62914560)&&(xa=4194304),e}function Ku(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function ua(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $0(e,t,l,n,a,u){var i=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var s=e.entanglements,o=e.expirationTimes,_=e.hiddenUpdates;for(l=i&~l;0<l;){var y=31-Xe(l),g=1<<y;s[y]=0,o[y]=-1;var r=_[y];if(r!==null)for(_[y]=null,y=0;y<r.length;y++){var m=r[y];m!==null&&(m.lane&=-536870913)}l&=~g}n!==0&&j_(e,n,0),u!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~t))}function j_(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Xe(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|l&261930}function B_(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var n=31-Xe(l),a=1<<n;a&t|e[n]&t&&(e[n]|=t),l&=~a}}function H_(e,t){var l=t&-t;return l=l&42?1:js(l),l&(e.suspendedLanes|t)?0:l}function js(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bs(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function R_(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:o0(e.type))}function Ro(e,t){var l=q.p;try{return q.p=e,t()}finally{q.p=l}}var tl=Math.random().toString(36).slice(2),pe="__reactFiber$"+tl,Ue="__reactProps$"+tl,cn="__reactContainer$"+tl,Hi="__reactEvents$"+tl,I0="__reactListeners$"+tl,P0="__reactHandles$"+tl,Xo="__reactResources$"+tl,ia="__reactMarker$"+tl;function Hs(e){delete e[pe],delete e[Ue],delete e[Hi],delete e[I0],delete e[P0]}function Nl(e){var t=e[pe];if(t)return t;for(var l=e.parentNode;l;){if(t=l[cn]||l[pe]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Vc(e);e!==null;){if(l=e[pe])return l;e=Vc(e)}return t}e=l,l=e.parentNode}return null}function _n(e){if(e=e[pe]||e[cn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(p(33))}function Gl(e){var t=e[Xo];return t||(t=e[Xo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function me(e){e[ia]=!0}var X_=new Set,Q_={};function vl(e,t){$l(e,t),$l(e+"Capture",t)}function $l(e,t){for(Q_[e]=t,e=0;e<t.length;e++)X_.add(t[e])}var ed=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qo={},Lo={};function td(e){return Bi.call(Lo,e)?!0:Bi.call(Qo,e)?!1:ed.test(e)?Lo[e]=!0:(Qo[e]=!0,!1)}function Na(e,t,l){if(td(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Sa(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function _t(e,t,l,n){if(n===null)e.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+n)}}function Ve(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function L_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ld(e,t,l){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ri(e){if(!e._valueTracker){var t=L_(e)?"checked":"value";e._valueTracker=ld(e,t,""+e[t])}}function q_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),n="";return e&&(n=L_(e)?e.checked?"true":"false":e.value),e=n,e!==l?(t.setValue(e),!0):!1}function Ia(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var nd=/[\n"\\]/g;function We(e){return e.replace(nd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Xi(e,t,l,n,a,u,i,s){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ve(t)):e.value!==""+Ve(t)&&(e.value=""+Ve(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Qi(e,i,Ve(t)):l!=null?Qi(e,i,Ve(l)):n!=null&&e.removeAttribute("value"),a==null&&u!=null&&(e.defaultChecked=!!u),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+Ve(s):e.removeAttribute("name")}function G_(e,t,l,n,a,u,i,s){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Ri(e);return}l=l!=null?""+Ve(l):"",t=t!=null?""+Ve(t):l,s||t===e.value||(e.value=t),e.defaultValue=t}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=s?e.checked:!!n,e.defaultChecked=!!n,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Ri(e)}function Qi(e,t,l){t==="number"&&Ia(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Zl(e,t,l,n){if(e=e.options,t){t={};for(var a=0;a<l.length;a++)t["$"+l[a]]=!0;for(l=0;l<e.length;l++)a=t.hasOwnProperty("$"+e[l].value),e[l].selected!==a&&(e[l].selected=a),a&&n&&(e[l].defaultSelected=!0)}else{for(l=""+Ve(l),t=null,a=0;a<e.length;a++){if(e[a].value===l){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Z_(e,t,l){if(t!=null&&(t=""+Ve(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Ve(l):""}function k_(e,t,l,n){if(t==null){if(n!=null){if(l!=null)throw Error(p(92));if(An(n)){if(1<n.length)throw Error(p(93));n=n[0]}l=n}l==null&&(l=""),t=l}l=Ve(t),e.defaultValue=l,n=e.textContent,n===l&&n!==""&&n!==null&&(e.value=n),Ri(e)}function Il(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var ad=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qo(e,t,l){var n=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,l):typeof l!="number"||l===0||ad.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function V_(e,t,l){if(t!=null&&typeof t!="object")throw Error(p(62));if(e=e.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var a in t)n=t[a],t.hasOwnProperty(a)&&l[a]!==n&&qo(e,a,n)}else for(var u in t)t.hasOwnProperty(u)&&qo(e,u,t[u])}function Rs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ud=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),id=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wa(e){return id.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pt(){}var Li=null;function Xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,kl=null;function Go(e){var t=_n(e);if(t&&(e=t.stateNode)){var l=e[Ue]||null;e:switch(e=t.stateNode,t.type){case"input":if(Xi(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+We(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var n=l[t];if(n!==e&&n.form===e.form){var a=n[Ue]||null;if(!a)throw Error(p(90));Xi(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<l.length;t++)n=l[t],n.form===e.form&&q_(n)}break e;case"textarea":Z_(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Zl(e,!!l.multiple,t,!1)}}}var Wu=!1;function J_(e,t,l){if(Wu)return e(t,l);Wu=!0;try{var n=e(t);return n}finally{if(Wu=!1,(wl!==null||kl!==null)&&(Ru(),wl&&(t=wl,e=kl,kl=wl=null,Go(t),e)))for(t=0;t<e.length;t++)Go(e[t])}}function Gn(e,t){var l=e.stateNode;if(l===null)return null;var n=l[Ue]||null;if(n===null)return null;l=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(p(231,t,typeof l));return l}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qi=!1;if(zt)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){qi=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{qi=!1}var Rt=null,Qs=null,ja=null;function K_(){if(ja)return ja;var e,t=Qs,l=t.length,n,a="value"in Rt?Rt.value:Rt.textContent,u=a.length;for(e=0;e<l&&t[e]===a[e];e++);var i=l-e;for(n=1;n<=i&&t[l-n]===a[u-n];n++);return ja=a.slice(e,1<n?1-n:void 0)}function Ba(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function za(){return!0}function Zo(){return!1}function De(e){function t(l,n,a,u,i){this._reactName=l,this._targetInst=a,this.type=n,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(l=e[s],this[s]=l?l(u):u[s]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?za:Zo,this.isPropagationStopped=Zo,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),t}var xl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ou=De(xl),sa=ee({},xl,{view:0,detail:0}),sd=De(sa),Fu,$u,pn,Yu=ee({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pn&&(pn&&e.type==="mousemove"?(Fu=e.screenX-pn.screenX,$u=e.screenY-pn.screenY):$u=Fu=0,pn=e),Fu)},movementY:function(e){return"movementY"in e?e.movementY:$u}}),ko=De(Yu),od=ee({},Yu,{dataTransfer:0}),cd=De(od),_d=ee({},sa,{relatedTarget:0}),Iu=De(_d),fd=ee({},xl,{animationName:0,elapsedTime:0,pseudoElement:0}),rd=De(fd),dd=ee({},xl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),md=De(dd),yd=ee({},xl,{data:0}),Vo=De(yd),gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pd[e])?!!t[e]:!1}function Ls(){return bd}var vd=ee({},sa,{key:function(e){if(e.key){var t=gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ls,charCode:function(e){return e.type==="keypress"?Ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xd=De(vd),Sd=ee({},Yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jo=De(Sd),zd=ee({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ls}),Ad=De(zd),Td=ee({},xl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ed=De(Td),Od=ee({},Yu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yd=De(Od),Md=ee({},xl,{newState:0,oldState:0}),Cd=De(Md),Ud=[9,13,27,32],qs=zt&&"CompositionEvent"in window,Mn=null;zt&&"documentMode"in document&&(Mn=document.documentMode);var Dd=zt&&"TextEvent"in window&&!Mn,W_=zt&&(!qs||Mn&&8<Mn&&11>=Mn),Ko=" ",Wo=!1;function F_(e,t){switch(e){case"keyup":return Ud.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jl=!1;function Nd(e,t){switch(e){case"compositionend":return $_(t);case"keypress":return t.which!==32?null:(Wo=!0,Ko);case"textInput":return e=t.data,e===Ko&&Wo?null:e;default:return null}}function wd(e,t){if(jl)return e==="compositionend"||!qs&&F_(e,t)?(e=K_(),ja=Qs=Rt=null,jl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return W_&&t.locale!=="ko"?null:t.data;default:return null}}var jd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jd[e.type]:t==="textarea"}function I_(e,t,l,n){wl?kl?kl.push(n):kl=[n]:wl=n,t=gu(t,"onChange"),0<t.length&&(l=new Ou("onChange","change",null,l,n),e.push({event:l,listeners:t}))}var Cn=null,Zn=null;function Bd(e){Kr(e,0)}function Mu(e){var t=Tn(e);if(q_(t))return e}function $o(e,t){if(e==="change")return t}var P_=!1;if(zt){var Pu;if(zt){var ei="oninput"in document;if(!ei){var Io=document.createElement("div");Io.setAttribute("oninput","return;"),ei=typeof Io.oninput=="function"}Pu=ei}else Pu=!1;P_=Pu&&(!document.documentMode||9<document.documentMode)}function Po(){Cn&&(Cn.detachEvent("onpropertychange",ef),Zn=Cn=null)}function ef(e){if(e.propertyName==="value"&&Mu(Zn)){var t=[];I_(t,Zn,e,Xs(e)),J_(Bd,t)}}function Hd(e,t,l){e==="focusin"?(Po(),Cn=t,Zn=l,Cn.attachEvent("onpropertychange",ef)):e==="focusout"&&Po()}function Rd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mu(Zn)}function Xd(e,t){if(e==="click")return Mu(t)}function Qd(e,t){if(e==="input"||e==="change")return Mu(t)}function Ld(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Le=typeof Object.is=="function"?Object.is:Ld;function kn(e,t){if(Le(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),n=Object.keys(t);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var a=l[n];if(!Bi.call(t,a)||!Le(e[a],t[a]))return!1}return!0}function ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tc(e,t){var l=ec(e);e=0;for(var n;l;){if(l.nodeType===3){if(n=e+l.textContent.length,e<=t&&n>=t)return{node:l,offset:t-e};e=n}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ec(l)}}function tf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ia(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Ia(e.document)}return t}function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var qd=zt&&"documentMode"in document&&11>=document.documentMode,Bl=null,Gi=null,Un=null,Zi=!1;function lc(e,t,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Zi||Bl==null||Bl!==Ia(n)||(n=Bl,"selectionStart"in n&&Gs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Un&&kn(Un,n)||(Un=n,n=gu(Gi,"onSelect"),0<n.length&&(t=new Ou("onSelect","select",null,t,l),e.push({event:t,listeners:n}),t.target=Bl)))}function ul(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Hl={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionrun:ul("Transition","TransitionRun"),transitionstart:ul("Transition","TransitionStart"),transitioncancel:ul("Transition","TransitionCancel"),transitionend:ul("Transition","TransitionEnd")},ti={},nf={};zt&&(nf=document.createElement("div").style,"AnimationEvent"in window||(delete Hl.animationend.animation,delete Hl.animationiteration.animation,delete Hl.animationstart.animation),"TransitionEvent"in window||delete Hl.transitionend.transition);function Sl(e){if(ti[e])return ti[e];if(!Hl[e])return e;var t=Hl[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in nf)return ti[e]=t[l];return e}var af=Sl("animationend"),uf=Sl("animationiteration"),sf=Sl("animationstart"),Gd=Sl("transitionrun"),Zd=Sl("transitionstart"),kd=Sl("transitioncancel"),of=Sl("transitionend"),cf=new Map,ki="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ki.push("scrollEnd");function nt(e,t){cf.set(e,t),vl(t,[e])}var Pa=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ke=[],Rl=0,Zs=0;function Cu(){for(var e=Rl,t=Zs=Rl=0;t<e;){var l=ke[t];ke[t++]=null;var n=ke[t];ke[t++]=null;var a=ke[t];ke[t++]=null;var u=ke[t];if(ke[t++]=null,n!==null&&a!==null){var i=n.pending;i===null?a.next=a:(a.next=i.next,i.next=a),n.pending=a}u!==0&&_f(l,a,u)}}function Uu(e,t,l,n){ke[Rl++]=e,ke[Rl++]=t,ke[Rl++]=l,ke[Rl++]=n,Zs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function ks(e,t,l,n){return Uu(e,t,l,n),eu(e)}function zl(e,t){return Uu(e,null,null,t),eu(e)}function _f(e,t,l){e.lanes|=l;var n=e.alternate;n!==null&&(n.lanes|=l);for(var a=!1,u=e.return;u!==null;)u.childLanes|=l,n=u.alternate,n!==null&&(n.childLanes|=l),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(a=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,a&&t!==null&&(a=31-Xe(l),e=u.hiddenUpdates,n=e[a],n===null?e[a]=[t]:n.push(t),t.lane=l|536870912),u):null}function eu(e){if(50<Qn)throw Qn=0,rs=null,Error(p(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xl={};function Vd(e,t,l,n){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,l,n){return new Vd(e,t,l,n)}function Vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vt(e,t){var l=e.alternate;return l===null?(l=je(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function ff(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ha(e,t,l,n,a,u){var i=0;if(n=e,typeof e=="function")Vs(e)&&(i=1);else if(typeof e=="string")i=$m(e,l,st.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Di:return e=je(31,l,t,a),e.elementType=Di,e.lanes=u,e;case Ul:return fl(l.children,a,u,t);case M_:i=8,a|=24;break;case Mi:return e=je(12,l,t,a|2),e.elementType=Mi,e.lanes=u,e;case Ci:return e=je(13,l,t,a),e.elementType=Ci,e.lanes=u,e;case Ui:return e=je(19,l,t,a),e.elementType=Ui,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ht:i=10;break e;case C_:i=9;break e;case Ds:i=11;break e;case Ns:i=14;break e;case Ut:i=16,n=null;break e}i=29,l=Error(p(130,e===null?"null":typeof e,"")),n=null}return t=je(i,l,t,a),t.elementType=e,t.type=n,t.lanes=u,t}function fl(e,t,l,n){return e=je(7,e,n,t),e.lanes=l,e}function li(e,t,l){return e=je(6,e,null,t),e.lanes=l,e}function rf(e){var t=je(18,null,null,0);return t.stateNode=e,t}function ni(e,t,l){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var nc=new WeakMap;function Fe(e,t){if(typeof e=="object"&&e!==null){var l=nc.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Ho(t)},nc.set(e,t),t)}return{value:e,source:t,stack:Ho(t)}}var Ql=[],Ll=0,tu=null,Vn=0,Je=[],Ke=0,$t=null,at=1,ut="";function yt(e,t){Ql[Ll++]=Vn,Ql[Ll++]=tu,tu=e,Vn=t}function df(e,t,l){Je[Ke++]=at,Je[Ke++]=ut,Je[Ke++]=$t,$t=e;var n=at;e=ut;var a=32-Xe(n)-1;n&=~(1<<a),l+=1;var u=32-Xe(t)+a;if(30<u){var i=a-a%5;u=(n&(1<<i)-1).toString(32),n>>=i,a-=i,at=1<<32-Xe(t)+a|l<<a|n,ut=u+e}else at=1<<u|l<<a|n,ut=e}function Js(e){e.return!==null&&(yt(e,1),df(e,1,0))}function Ks(e){for(;e===tu;)tu=Ql[--Ll],Ql[Ll]=null,Vn=Ql[--Ll],Ql[Ll]=null;for(;e===$t;)$t=Je[--Ke],Je[Ke]=null,ut=Je[--Ke],Je[Ke]=null,at=Je[--Ke],Je[Ke]=null}function mf(e,t){Je[Ke++]=at,Je[Ke++]=ut,Je[Ke++]=$t,at=t.id,ut=t.overflow,$t=e}var be=null,I=null,X=!1,Gt=null,$e=!1,Vi=Error(p(519));function It(e){var t=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jn(Fe(t,e)),Vi}function ac(e){var t=e.stateNode,l=e.type,n=e.memoizedProps;switch(t[pe]=e,t[Ue]=n,l){case"dialog":B("cancel",t),B("close",t);break;case"iframe":case"object":case"embed":B("load",t);break;case"video":case"audio":for(l=0;l<$n.length;l++)B($n[l],t);break;case"source":B("error",t);break;case"img":case"image":case"link":B("error",t),B("load",t);break;case"details":B("toggle",t);break;case"input":B("invalid",t),G_(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":B("invalid",t);break;case"textarea":B("invalid",t),k_(t,n.value,n.defaultValue,n.children)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||n.suppressHydrationWarning===!0||Fr(t.textContent,l)?(n.popover!=null&&(B("beforetoggle",t),B("toggle",t)),n.onScroll!=null&&B("scroll",t),n.onScrollEnd!=null&&B("scrollend",t),n.onClick!=null&&(t.onclick=pt),t=!0):t=!1,t||It(e,!0)}function uc(e){for(be=e.return;be;)switch(be.tag){case 5:case 31:case 13:$e=!1;return;case 27:case 3:$e=!0;return;default:be=be.return}}function Tl(e){if(e!==be)return!1;if(!X)return uc(e),X=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||hs(e.type,e.memoizedProps)),l=!l),l&&I&&It(e),uc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));I=kc(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));I=kc(e)}else t===27?(t=I,ll(e.type)?(e=xs,xs=null,I=e):I=t):I=be?Pe(e.stateNode.nextSibling):null;return!0}function yl(){I=be=null,X=!1}function ai(){var e=Gt;return e!==null&&(Me===null?Me=e:Me.push.apply(Me,e),Gt=null),e}function Jn(e){Gt===null?Gt=[e]:Gt.push(e)}var Ji=ot(null),Al=null,bt=null;function Nt(e,t,l){W(Ji,t._currentValue),t._currentValue=l}function xt(e){e._currentValue=Ji.current,ye(Ji)}function Ki(e,t,l){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===l)break;e=e.return}}function Wi(e,t,l,n){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){var i=a.child;u=u.firstContext;e:for(;u!==null;){var s=u;u=a;for(var o=0;o<t.length;o++)if(s.context===t[o]){u.lanes|=l,s=u.alternate,s!==null&&(s.lanes|=l),Ki(u.return,l,e),n||(i=null);break e}u=s.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(p(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),Ki(i,l,e),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===e){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function fn(e,t,l,n){e=null;for(var a=t,u=!1;a!==null;){if(!u){if(a.flags&524288)u=!0;else if(a.flags&262144)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(p(387));if(i=i.memoizedProps,i!==null){var s=a.type;Le(a.pendingProps.value,i.value)||(e!==null?e.push(s):e=[s])}}else if(a===Ka.current){if(i=a.alternate,i===null)throw Error(p(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Pn):e=[Pn])}a=a.return}e!==null&&Wi(t,e,l,n),t.flags|=262144}function lu(e){for(e=e.firstContext;e!==null;){if(!Le(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gl(e){Al=e,bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ve(e){return yf(Al,e)}function Aa(e,t){return Al===null&&gl(e),yf(e,t)}function yf(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},bt===null){if(e===null)throw Error(p(308));bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else bt=bt.next=t;return l}var Jd=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Kd=fe.unstable_scheduleCallback,Wd=fe.unstable_NormalPriority,oe={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ws(){return{controller:new Jd,data:new Map,refCount:0}}function oa(e){e.refCount--,e.refCount===0&&Kd(Wd,function(){e.controller.abort()})}var Dn=null,Fi=0,Pl=0,Vl=null;function Fd(e,t){if(Dn===null){var l=Dn=[];Fi=0,Pl=xo(),Vl={status:"pending",value:void 0,then:function(n){l.push(n)}}}return Fi++,t.then(ic,ic),t}function ic(){if(--Fi===0&&Dn!==null){Vl!==null&&(Vl.status="fulfilled");var e=Dn;Dn=null,Pl=0,Vl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function $d(e,t){var l=[],n={status:"pending",value:null,reason:null,then:function(a){l.push(a)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var a=0;a<l.length;a++)(0,l[a])(t)},function(a){for(n.status="rejected",n.reason=a,a=0;a<l.length;a++)(0,l[a])(void 0)}),n}var sc=E.S;E.S=function(e,t){Mr=He(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Fd(e,t),sc!==null&&sc(e,t)};var rl=ot(null);function Fs(){var e=rl.current;return e!==null?e:K.pooledCache}function Ra(e,t){t===null?W(rl,rl.current):W(rl,t.pool)}function gf(){var e=Fs();return e===null?null:{parent:oe._currentValue,pool:e}}var rn=Error(p(460)),$s=Error(p(474)),Du=Error(p(542)),nu={then:function(){}};function oc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hf(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(pt,pt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_c(e),e;default:if(typeof t.status=="string")t.then(pt,pt);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(p(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=n}},function(n){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_c(e),e}throw dl=t,rn}}function ol(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(dl=l,rn):l}}var dl=null;function cc(){if(dl===null)throw Error(p(459));var e=dl;return dl=null,e}function _c(e){if(e===rn||e===Du)throw Error(p(483))}var Jl=null,Kn=0;function Ta(e){var t=Kn;return Kn+=1,Jl===null&&(Jl=[]),hf(Jl,e,t)}function bn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ea(e,t){throw t.$$typeof===H0?Error(p(525)):(e=Object.prototype.toString.call(t),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function pf(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function l(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function n(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function a(f,c){return f=vt(f,c),f.index=0,f.sibling=null,f}function u(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=67108866,c):d):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function s(f,c,d,h){return c===null||c.tag!==6?(c=li(d,f.mode,h),c.return=f,c):(c=a(c,d),c.return=f,c)}function o(f,c,d,h){var z=d.type;return z===Ul?y(f,c,d.props.children,h,d.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ut&&ol(z)===c.type)?(c=a(c,d.props),bn(c,d),c.return=f,c):(c=Ha(d.type,d.key,d.props,null,f.mode,h),bn(c,d),c.return=f,c)}function _(f,c,d,h){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=ni(d,f.mode,h),c.return=f,c):(c=a(c,d.children||[]),c.return=f,c)}function y(f,c,d,h,z){return c===null||c.tag!==7?(c=fl(d,f.mode,h,z),c.return=f,c):(c=a(c,d),c.return=f,c)}function g(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=li(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case pa:return d=Ha(c.type,c.key,c.props,null,f.mode,d),bn(d,c),d.return=f,d;case zn:return c=ni(c,f.mode,d),c.return=f,c;case Ut:return c=ol(c),g(f,c,d)}if(An(c)||gn(c))return c=fl(c,f.mode,d,null),c.return=f,c;if(typeof c.then=="function")return g(f,Ta(c),d);if(c.$$typeof===ht)return g(f,Aa(f,c),d);Ea(f,c)}return null}function r(f,c,d,h){var z=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return z!==null?null:s(f,c,""+d,h);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case pa:return d.key===z?o(f,c,d,h):null;case zn:return d.key===z?_(f,c,d,h):null;case Ut:return d=ol(d),r(f,c,d,h)}if(An(d)||gn(d))return z!==null?null:y(f,c,d,h,null);if(typeof d.then=="function")return r(f,c,Ta(d),h);if(d.$$typeof===ht)return r(f,c,Aa(f,d),h);Ea(f,d)}return null}function m(f,c,d,h,z){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return f=f.get(d)||null,s(c,f,""+h,z);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case pa:return f=f.get(h.key===null?d:h.key)||null,o(c,f,h,z);case zn:return f=f.get(h.key===null?d:h.key)||null,_(c,f,h,z);case Ut:return h=ol(h),m(f,c,d,h,z)}if(An(h)||gn(h))return f=f.get(d)||null,y(c,f,h,z,null);if(typeof h.then=="function")return m(f,c,d,Ta(h),z);if(h.$$typeof===ht)return m(f,c,d,Aa(c,h),z);Ea(c,h)}return null}function v(f,c,d,h){for(var z=null,M=null,x=c,T=c=0,C=null;x!==null&&T<d.length;T++){x.index>T?(C=x,x=null):C=x.sibling;var D=r(f,x,d[T],h);if(D===null){x===null&&(x=C);break}e&&x&&D.alternate===null&&t(f,x),c=u(D,c,T),M===null?z=D:M.sibling=D,M=D,x=C}if(T===d.length)return l(f,x),X&&yt(f,T),z;if(x===null){for(;T<d.length;T++)x=g(f,d[T],h),x!==null&&(c=u(x,c,T),M===null?z=x:M.sibling=x,M=x);return X&&yt(f,T),z}for(x=n(x);T<d.length;T++)C=m(x,f,T,d[T],h),C!==null&&(e&&C.alternate!==null&&x.delete(C.key===null?T:C.key),c=u(C,c,T),M===null?z=C:M.sibling=C,M=C);return e&&x.forEach(function(Te){return t(f,Te)}),X&&yt(f,T),z}function A(f,c,d,h){if(d==null)throw Error(p(151));for(var z=null,M=null,x=c,T=c=0,C=null,D=d.next();x!==null&&!D.done;T++,D=d.next()){x.index>T?(C=x,x=null):C=x.sibling;var Te=r(f,x,D.value,h);if(Te===null){x===null&&(x=C);break}e&&x&&Te.alternate===null&&t(f,x),c=u(Te,c,T),M===null?z=Te:M.sibling=Te,M=Te,x=C}if(D.done)return l(f,x),X&&yt(f,T),z;if(x===null){for(;!D.done;T++,D=d.next())D=g(f,D.value,h),D!==null&&(c=u(D,c,T),M===null?z=D:M.sibling=D,M=D);return X&&yt(f,T),z}for(x=n(x);!D.done;T++,D=d.next())D=m(x,f,T,D.value,h),D!==null&&(e&&D.alternate!==null&&x.delete(D.key===null?T:D.key),c=u(D,c,T),M===null?z=D:M.sibling=D,M=D);return e&&x.forEach(function(Ge){return t(f,Ge)}),X&&yt(f,T),z}function w(f,c,d,h){if(typeof d=="object"&&d!==null&&d.type===Ul&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case pa:e:{for(var z=d.key;c!==null;){if(c.key===z){if(z=d.type,z===Ul){if(c.tag===7){l(f,c.sibling),h=a(c,d.props.children),h.return=f,f=h;break e}}else if(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ut&&ol(z)===c.type){l(f,c.sibling),h=a(c,d.props),bn(h,d),h.return=f,f=h;break e}l(f,c);break}else t(f,c);c=c.sibling}d.type===Ul?(h=fl(d.props.children,f.mode,h,d.key),h.return=f,f=h):(h=Ha(d.type,d.key,d.props,null,f.mode,h),bn(h,d),h.return=f,f=h)}return i(f);case zn:e:{for(z=d.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){l(f,c.sibling),h=a(c,d.children||[]),h.return=f,f=h;break e}else{l(f,c);break}else t(f,c);c=c.sibling}h=ni(d,f.mode,h),h.return=f,f=h}return i(f);case Ut:return d=ol(d),w(f,c,d,h)}if(An(d))return v(f,c,d,h);if(gn(d)){if(z=gn(d),typeof z!="function")throw Error(p(150));return d=z.call(d),A(f,c,d,h)}if(typeof d.then=="function")return w(f,c,Ta(d),h);if(d.$$typeof===ht)return w(f,c,Aa(f,d),h);Ea(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,c!==null&&c.tag===6?(l(f,c.sibling),h=a(c,d),h.return=f,f=h):(l(f,c),h=li(d,f.mode,h),h.return=f,f=h),i(f)):l(f,c)}return function(f,c,d,h){try{Kn=0;var z=w(f,c,d,h);return Jl=null,z}catch(x){if(x===rn||x===Du)throw x;var M=je(29,x,null,f.mode);return M.lanes=h,M.return=f,M}finally{}}}var hl=pf(!0),bf=pf(!1),Dt=!1;function Is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $i(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function kt(e,t,l){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,L&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,t=eu(e),_f(e,null,l),t}return Uu(e,n,t,l),eu(e)}function Nn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,B_(e,l)}}function ui(e,t){var l=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var a=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?a=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?a=u=t:u=u.next=t}else a=u=t;l={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Ii=!1;function wn(){if(Ii){var e=Vl;if(e!==null)throw e}}function jn(e,t,l,n){Ii=!1;var a=e.updateQueue;Dt=!1;var u=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var o=s,_=o.next;o.next=null,i===null?u=_:i.next=_,i=o;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==i&&(s===null?y.firstBaseUpdate=_:s.next=_,y.lastBaseUpdate=o))}if(u!==null){var g=a.baseState;i=0,y=_=o=null,s=u;do{var r=s.lane&-536870913,m=r!==s.lane;if(m?(R&r)===r:(n&r)===r){r!==0&&r===Pl&&(Ii=!0),y!==null&&(y=y.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var v=e,A=s;r=t;var w=l;switch(A.tag){case 1:if(v=A.payload,typeof v=="function"){g=v.call(w,g,r);break e}g=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=A.payload,r=typeof v=="function"?v.call(w,g,r):v,r==null)break e;g=ee({},g,r);break e;case 2:Dt=!0}}r=s.callback,r!==null&&(e.flags|=64,m&&(e.flags|=8192),m=a.callbacks,m===null?a.callbacks=[r]:m.push(r))}else m={lane:r,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(_=y=m,o=g):y=y.next=m,i|=r;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;m=s,s=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);y===null&&(o=g),a.baseState=o,a.firstBaseUpdate=_,a.lastBaseUpdate=y,u===null&&(a.shared.lanes=0),el|=i,e.lanes=i,e.memoizedState=g}}function vf(e,t){if(typeof e!="function")throw Error(p(191,e));e.call(t)}function xf(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)vf(l[e],t)}var en=ot(null),au=ot(0);function fc(e,t){e=Ot,W(au,e),W(en,t),Ot=e|t.baseLanes}function Pi(){W(au,Ot),W(en,en.current)}function Ps(){Ot=au.current,ye(en),ye(au)}var qe=ot(null),Ie=null;function wt(e){var t=e.alternate;W(ae,ae.current&1),W(qe,e),Ie===null&&(t===null||en.current!==null||t.memoizedState!==null)&&(Ie=e)}function es(e){W(ae,ae.current),W(qe,e),Ie===null&&(Ie=e)}function Sf(e){e.tag===22?(W(ae,ae.current),W(qe,e),Ie===null&&(Ie=e)):jt()}function jt(){W(ae,ae.current),W(qe,qe.current)}function we(e){ye(qe),Ie===e&&(Ie=null),ye(ae)}var ae=ot(0);function uu(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||bs(l)||vs(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var At=0,Y=null,V=null,ie=null,iu=!1,Kl=!1,pl=!1,su=0,Wn=0,Wl=null,Id=0;function le(){throw Error(p(321))}function eo(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Le(e[l],t[l]))return!1;return!0}function to(e,t,l,n,a,u){return At=u,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Pf:ro,pl=!1,u=l(n,a),pl=!1,Kl&&(u=Af(t,l,n,a)),zf(e),u}function zf(e){E.H=Fn;var t=V!==null&&V.next!==null;if(At=0,ie=V=Y=null,iu=!1,Wn=0,Wl=null,t)throw Error(p(300));e===null||ce||(e=e.dependencies,e!==null&&lu(e)&&(ce=!0))}function Af(e,t,l,n){Y=e;var a=0;do{if(Kl&&(Wl=null),Wn=0,Kl=!1,25<=a)throw Error(p(301));if(a+=1,ie=V=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}E.H=er,u=t(l,n)}while(Kl);return u}function Pd(){var e=E.H,t=e.useState()[0];return t=typeof t.then=="function"?ca(t):t,e=e.useState()[0],(V!==null?V.memoizedState:null)!==e&&(Y.flags|=1024),t}function lo(){var e=su!==0;return su=0,e}function no(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function ao(e){if(iu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}iu=!1}At=0,ie=V=Y=null,Kl=!1,Wn=su=0,Wl=null}function Se(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Y.memoizedState=ie=e:ie=ie.next=e,ie}function ue(){if(V===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=V.next;var t=ie===null?Y.memoizedState:ie.next;if(t!==null)ie=t,V=e;else{if(e===null)throw Y.alternate===null?Error(p(467)):Error(p(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},ie===null?Y.memoizedState=ie=e:ie=ie.next=e}return ie}function Nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ca(e){var t=Wn;return Wn+=1,Wl===null&&(Wl=[]),e=hf(Wl,e,t),t=Y,(ie===null?t.memoizedState:ie.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Pf:ro),e}function wu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ca(e);if(e.$$typeof===ht)return ve(e)}throw Error(p(438,String(e)))}function uo(e){var t=null,l=Y.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var n=Y.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Nu(),Y.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),n=0;n<e;n++)l[n]=R0;return t.index++,l}function Tt(e,t){return typeof t=="function"?t(e):t}function Xa(e){var t=ue();return io(t,V,e)}function io(e,t,l){var n=e.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=l;var a=e.baseQueue,u=n.pending;if(u!==null){if(a!==null){var i=a.next;a.next=u.next,u.next=i}t.baseQueue=a=u,n.pending=null}if(u=e.baseState,a===null)e.memoizedState=u;else{t=a.next;var s=i=null,o=null,_=t,y=!1;do{var g=_.lane&-536870913;if(g!==_.lane?(R&g)===g:(At&g)===g){var r=_.revertLane;if(r===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),g===Pl&&(y=!0);else if((At&r)===r){_=_.next,r===Pl&&(y=!0);continue}else g={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},o===null?(s=o=g,i=u):o=o.next=g,Y.lanes|=r,el|=r;g=_.action,pl&&l(u,g),u=_.hasEagerState?_.eagerState:l(u,g)}else r={lane:g,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},o===null?(s=o=r,i=u):o=o.next=r,Y.lanes|=g,el|=g;_=_.next}while(_!==null&&_!==t);if(o===null?i=u:o.next=s,!Le(u,e.memoizedState)&&(ce=!0,y&&(l=Vl,l!==null)))throw l;e.memoizedState=u,e.baseState=i,e.baseQueue=o,n.lastRenderedState=u}return a===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function ii(e){var t=ue(),l=t.queue;if(l===null)throw Error(p(311));l.lastRenderedReducer=e;var n=l.dispatch,a=l.pending,u=t.memoizedState;if(a!==null){l.pending=null;var i=a=a.next;do u=e(u,i.action),i=i.next;while(i!==a);Le(u,t.memoizedState)||(ce=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),l.lastRenderedState=u}return[u,n]}function Tf(e,t,l){var n=Y,a=ue(),u=X;if(u){if(l===void 0)throw Error(p(407));l=l()}else l=t();var i=!Le((V||a).memoizedState,l);if(i&&(a.memoizedState=l,ce=!0),a=a.queue,so(Yf.bind(null,n,a,e),[e]),a.getSnapshot!==t||i||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,tn(9,{destroy:void 0},Of.bind(null,n,a,l,t),null),K===null)throw Error(p(349));u||At&127||Ef(n,t,l)}return l}function Ef(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=Y.updateQueue,t===null?(t=Nu(),Y.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Of(e,t,l,n){t.value=l,t.getSnapshot=n,Mf(t)&&Cf(e)}function Yf(e,t,l){return l(function(){Mf(t)&&Cf(e)})}function Mf(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Le(e,l)}catch{return!0}}function Cf(e){var t=zl(e,2);t!==null&&Ce(t,e,2)}function ts(e){var t=Se();if(typeof e=="function"){var l=e;if(e=l(),pl){Ht(!0);try{l()}finally{Ht(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tt,lastRenderedState:e},t}function Uf(e,t,l,n){return e.baseState=l,io(e,V,typeof n=="function"?n:Tt)}function em(e,t,l,n,a){if(Bu(e))throw Error(p(485));if(e=t.action,e!==null){var u={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};E.T!==null?l(!0):u.isTransition=!1,n(u),l=t.pending,l===null?(u.next=t.pending=u,Df(t,u)):(u.next=l.next,t.pending=l.next=u)}}function Df(e,t){var l=t.action,n=t.payload,a=e.state;if(t.isTransition){var u=E.T,i={};E.T=i;try{var s=l(a,n),o=E.S;o!==null&&o(i,s),rc(e,t,s)}catch(_){ls(e,t,_)}finally{u!==null&&i.types!==null&&(u.types=i.types),E.T=u}}else try{u=l(a,n),rc(e,t,u)}catch(_){ls(e,t,_)}}function rc(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){dc(e,t,n)},function(n){return ls(e,t,n)}):dc(e,t,l)}function dc(e,t,l){t.status="fulfilled",t.value=l,Nf(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Df(e,l)))}function ls(e,t,l){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=l,Nf(t),t=t.next;while(t!==n)}e.action=null}function Nf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function wf(e,t){return t}function mc(e,t){if(X){var l=K.formState;if(l!==null){e:{var n=Y;if(X){if(I){t:{for(var a=I,u=$e;a.nodeType!==8;){if(!u){a=null;break t}if(a=Pe(a.nextSibling),a===null){a=null;break t}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){I=Pe(a.nextSibling),n=a.data==="F!";break e}}It(n)}n=!1}n&&(t=l[0])}}return l=Se(),l.memoizedState=l.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wf,lastRenderedState:t},l.queue=n,l=Ff.bind(null,Y,n),n.dispatch=l,n=ts(!1),u=fo.bind(null,Y,!1,n.queue),n=Se(),a={state:t,dispatch:null,action:e,pending:null},n.queue=a,l=em.bind(null,Y,a,u,l),a.dispatch=l,n.memoizedState=e,[t,l,!1]}function yc(e){var t=ue();return jf(t,V,e)}function jf(e,t,l){if(t=io(e,t,wf)[0],e=Xa(Tt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ca(t)}catch(i){throw i===rn?Du:i}else n=t;t=ue();var a=t.queue,u=a.dispatch;return l!==t.memoizedState&&(Y.flags|=2048,tn(9,{destroy:void 0},tm.bind(null,a,l),null)),[n,u,e]}function tm(e,t){e.action=t}function gc(e){var t=ue(),l=V;if(l!==null)return jf(t,l,e);ue(),t=t.memoizedState,l=ue();var n=l.queue.dispatch;return l.memoizedState=e,[t,n,!1]}function tn(e,t,l,n){return e={tag:e,create:l,deps:n,inst:t,next:null},t=Y.updateQueue,t===null&&(t=Nu(),Y.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(n=l.next,l.next=e,e.next=n,t.lastEffect=e),e}function Bf(){return ue().memoizedState}function Qa(e,t,l,n){var a=Se();Y.flags|=e,a.memoizedState=tn(1|t,{destroy:void 0},l,n===void 0?null:n)}function ju(e,t,l,n){var a=ue();n=n===void 0?null:n;var u=a.memoizedState.inst;V!==null&&n!==null&&eo(n,V.memoizedState.deps)?a.memoizedState=tn(t,u,l,n):(Y.flags|=e,a.memoizedState=tn(1|t,u,l,n))}function hc(e,t){Qa(8390656,8,e,t)}function so(e,t){ju(2048,8,e,t)}function lm(e){Y.flags|=4;var t=Y.updateQueue;if(t===null)t=Nu(),Y.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Hf(e){var t=ue().memoizedState;return lm({ref:t,nextImpl:e}),function(){if(L&2)throw Error(p(440));return t.impl.apply(void 0,arguments)}}function Rf(e,t){return ju(4,2,e,t)}function Xf(e,t){return ju(4,4,e,t)}function Qf(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lf(e,t,l){l=l!=null?l.concat([e]):null,ju(4,4,Qf.bind(null,t,e),l)}function oo(){}function qf(e,t){var l=ue();t=t===void 0?null:t;var n=l.memoizedState;return t!==null&&eo(t,n[1])?n[0]:(l.memoizedState=[e,t],e)}function Gf(e,t){var l=ue();t=t===void 0?null:t;var n=l.memoizedState;if(t!==null&&eo(t,n[1]))return n[0];if(n=e(),pl){Ht(!0);try{e()}finally{Ht(!1)}}return l.memoizedState=[n,t],n}function co(e,t,l){return l===void 0||At&1073741824&&!(R&261930)?e.memoizedState=t:(e.memoizedState=l,e=Ur(),Y.lanes|=e,el|=e,l)}function Zf(e,t,l,n){return Le(l,t)?l:en.current!==null?(e=co(e,l,n),Le(e,t)||(ce=!0),e):!(At&42)||At&1073741824&&!(R&261930)?(ce=!0,e.memoizedState=l):(e=Ur(),Y.lanes|=e,el|=e,t)}function kf(e,t,l,n,a){var u=q.p;q.p=u!==0&&8>u?u:8;var i=E.T,s={};E.T=s,fo(e,!1,t,l);try{var o=a(),_=E.S;if(_!==null&&_(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var y=$d(o,n);Bn(e,t,y,Qe(e))}else Bn(e,t,n,Qe(e))}catch(g){Bn(e,t,{then:function(){},status:"rejected",reason:g},Qe())}finally{q.p=u,i!==null&&s.types!==null&&(i.types=s.types),E.T=i}}function nm(){}function ns(e,t,l,n){if(e.tag!==5)throw Error(p(476));var a=Vf(e).queue;kf(e,a,t,_l,l===null?nm:function(){return Jf(e),l(n)})}function Vf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:_l,baseState:_l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tt,lastRenderedState:_l},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Jf(e){var t=Vf(e);t.next===null&&(t=e.alternate.memoizedState),Bn(e,t.next.queue,{},Qe())}function _o(){return ve(Pn)}function Kf(){return ue().memoizedState}function Wf(){return ue().memoizedState}function am(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Qe();e=Zt(l);var n=kt(t,e,l);n!==null&&(Ce(n,t,l),Nn(n,t,l)),t={cache:Ws()},e.payload=t;return}t=t.return}}function um(e,t,l){var n=Qe();l={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Bu(e)?$f(t,l):(l=ks(e,t,l,n),l!==null&&(Ce(l,e,n),If(l,t,n)))}function Ff(e,t,l){var n=Qe();Bn(e,t,l,n)}function Bn(e,t,l,n){var a={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))$f(t,a);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,s=u(i,l);if(a.hasEagerState=!0,a.eagerState=s,Le(s,i))return Uu(e,t,a,0),K===null&&Cu(),!1}catch{}finally{}if(l=ks(e,t,a,n),l!==null)return Ce(l,e,n),If(l,t,n),!0}return!1}function fo(e,t,l,n){if(n={lane:2,revertLane:xo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bu(e)){if(t)throw Error(p(479))}else t=ks(e,l,n,2),t!==null&&Ce(t,e,2)}function Bu(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function $f(e,t){Kl=iu=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function If(e,t,l){if(l&4194048){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,B_(e,l)}}var Fn={readContext:ve,use:wu,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useLayoutEffect:le,useInsertionEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useSyncExternalStore:le,useId:le,useHostTransitionStatus:le,useFormState:le,useActionState:le,useOptimistic:le,useMemoCache:le,useCacheRefresh:le};Fn.useEffectEvent=le;var Pf={readContext:ve,use:wu,useCallback:function(e,t){return Se().memoizedState=[e,t===void 0?null:t],e},useContext:ve,useEffect:hc,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Qa(4194308,4,Qf.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Qa(4194308,4,e,t)},useInsertionEffect:function(e,t){Qa(4,2,e,t)},useMemo:function(e,t){var l=Se();t=t===void 0?null:t;var n=e();if(pl){Ht(!0);try{e()}finally{Ht(!1)}}return l.memoizedState=[n,t],n},useReducer:function(e,t,l){var n=Se();if(l!==void 0){var a=l(t);if(pl){Ht(!0);try{l(t)}finally{Ht(!1)}}}else a=t;return n.memoizedState=n.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},n.queue=e,e=e.dispatch=um.bind(null,Y,e),[n.memoizedState,e]},useRef:function(e){var t=Se();return e={current:e},t.memoizedState=e},useState:function(e){e=ts(e);var t=e.queue,l=Ff.bind(null,Y,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:oo,useDeferredValue:function(e,t){var l=Se();return co(l,e,t)},useTransition:function(){var e=ts(!1);return e=kf.bind(null,Y,e.queue,!0,!1),Se().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var n=Y,a=Se();if(X){if(l===void 0)throw Error(p(407));l=l()}else{if(l=t(),K===null)throw Error(p(349));R&127||Ef(n,t,l)}a.memoizedState=l;var u={value:l,getSnapshot:t};return a.queue=u,hc(Yf.bind(null,n,u,e),[e]),n.flags|=2048,tn(9,{destroy:void 0},Of.bind(null,n,u,l,t),null),l},useId:function(){var e=Se(),t=K.identifierPrefix;if(X){var l=ut,n=at;l=(n&~(1<<32-Xe(n)-1)).toString(32)+l,t="_"+t+"R_"+l,l=su++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Id++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:_o,useFormState:mc,useActionState:mc,useOptimistic:function(e){var t=Se();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=fo.bind(null,Y,!0,l),l.dispatch=t,[e,t]},useMemoCache:uo,useCacheRefresh:function(){return Se().memoizedState=am.bind(null,Y)},useEffectEvent:function(e){var t=Se(),l={impl:e};return t.memoizedState=l,function(){if(L&2)throw Error(p(440));return l.impl.apply(void 0,arguments)}}},ro={readContext:ve,use:wu,useCallback:qf,useContext:ve,useEffect:so,useImperativeHandle:Lf,useInsertionEffect:Rf,useLayoutEffect:Xf,useMemo:Gf,useReducer:Xa,useRef:Bf,useState:function(){return Xa(Tt)},useDebugValue:oo,useDeferredValue:function(e,t){var l=ue();return Zf(l,V.memoizedState,e,t)},useTransition:function(){var e=Xa(Tt)[0],t=ue().memoizedState;return[typeof e=="boolean"?e:ca(e),t]},useSyncExternalStore:Tf,useId:Kf,useHostTransitionStatus:_o,useFormState:yc,useActionState:yc,useOptimistic:function(e,t){var l=ue();return Uf(l,V,e,t)},useMemoCache:uo,useCacheRefresh:Wf};ro.useEffectEvent=Hf;var er={readContext:ve,use:wu,useCallback:qf,useContext:ve,useEffect:so,useImperativeHandle:Lf,useInsertionEffect:Rf,useLayoutEffect:Xf,useMemo:Gf,useReducer:ii,useRef:Bf,useState:function(){return ii(Tt)},useDebugValue:oo,useDeferredValue:function(e,t){var l=ue();return V===null?co(l,e,t):Zf(l,V.memoizedState,e,t)},useTransition:function(){var e=ii(Tt)[0],t=ue().memoizedState;return[typeof e=="boolean"?e:ca(e),t]},useSyncExternalStore:Tf,useId:Kf,useHostTransitionStatus:_o,useFormState:gc,useActionState:gc,useOptimistic:function(e,t){var l=ue();return V!==null?Uf(l,V,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:uo,useCacheRefresh:Wf};er.useEffectEvent=Hf;function si(e,t,l,n){t=e.memoizedState,l=l(n,t),l=l==null?t:ee({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var as={enqueueSetState:function(e,t,l){e=e._reactInternals;var n=Qe(),a=Zt(n);a.payload=t,l!=null&&(a.callback=l),t=kt(e,a,n),t!==null&&(Ce(t,e,n),Nn(t,e,n))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var n=Qe(),a=Zt(n);a.tag=1,a.payload=t,l!=null&&(a.callback=l),t=kt(e,a,n),t!==null&&(Ce(t,e,n),Nn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Qe(),n=Zt(l);n.tag=2,t!=null&&(n.callback=t),t=kt(e,n,l),t!==null&&(Ce(t,e,l),Nn(t,e,l))}};function pc(e,t,l,n,a,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,u,i):t.prototype&&t.prototype.isPureReactComponent?!kn(l,n)||!kn(a,u):!0}function bc(e,t,l,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,n),t.state!==e&&as.enqueueReplaceState(t,t.state,null)}function bl(e,t){var l=t;if("ref"in t){l={};for(var n in t)n!=="ref"&&(l[n]=t[n])}if(e=e.defaultProps){l===t&&(l=ee({},l));for(var a in e)l[a]===void 0&&(l[a]=e[a])}return l}function tr(e){Pa(e)}function lr(e){console.error(e)}function nr(e){Pa(e)}function ou(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function vc(e,t,l){try{var n=e.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function us(e,t,l){return l=Zt(l),l.tag=3,l.payload={element:null},l.callback=function(){ou(e,t)},l}function ar(e){return e=Zt(e),e.tag=3,e}function ur(e,t,l,n){var a=l.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;e.payload=function(){return a(u)},e.callback=function(){vc(t,l,n)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){vc(t,l,n),typeof a!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function im(e,t,l,n,a){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=l.alternate,t!==null&&fn(t,l,a,!0),l=qe.current,l!==null){switch(l.tag){case 31:case 13:return Ie===null?du():l.alternate===null&&ne===0&&(ne=3),l.flags&=-257,l.flags|=65536,l.lanes=a,n===nu?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([n]):t.add(n),pi(e,n,a)),!1;case 22:return l.flags|=65536,n===nu?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([n]):l.add(n)),pi(e,n,a)),!1}throw Error(p(435,l.tag))}return pi(e,n,a),du(),!1}if(X)return t=qe.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,n!==Vi&&(e=Error(p(422),{cause:n}),Jn(Fe(e,l)))):(n!==Vi&&(t=Error(p(423),{cause:n}),Jn(Fe(t,l))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,n=Fe(n,l),a=us(e.stateNode,n,a),ui(e,a),ne!==4&&(ne=2)),!1;var u=Error(p(520),{cause:n});if(u=Fe(u,l),Xn===null?Xn=[u]:Xn.push(u),ne!==4&&(ne=2),t===null)return!0;n=Fe(n,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=a&-a,l.lanes|=e,e=us(l.stateNode,n,e),ui(l,e),!1;case 1:if(t=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Vt===null||!Vt.has(u))))return l.flags|=65536,a&=-a,l.lanes|=a,a=ar(a),ur(a,e,l,n),ui(l,a),!1}l=l.return}while(l!==null);return!1}var mo=Error(p(461)),ce=!1;function he(e,t,l,n){t.child=e===null?bf(t,null,l,n):hl(t,e.child,l,n)}function xc(e,t,l,n,a){l=l.render;var u=t.ref;if("ref"in n){var i={};for(var s in n)s!=="ref"&&(i[s]=n[s])}else i=n;return gl(t),n=to(e,t,l,i,u,a),s=lo(),e!==null&&!ce?(no(e,t,a),Et(e,t,a)):(X&&s&&Js(t),t.flags|=1,he(e,t,n,a),t.child)}function Sc(e,t,l,n,a){if(e===null){var u=l.type;return typeof u=="function"&&!Vs(u)&&u.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=u,ir(e,t,u,n,a)):(e=Ha(l.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!yo(e,a)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:kn,l(i,n)&&e.ref===t.ref)return Et(e,t,a)}return t.flags|=1,e=vt(u,n),e.ref=t.ref,e.return=t,t.child=e}function ir(e,t,l,n,a){if(e!==null){var u=e.memoizedProps;if(kn(u,n)&&e.ref===t.ref)if(ce=!1,t.pendingProps=n=u,yo(e,a))e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Et(e,t,a)}return is(e,t,l,n,a)}function sr(e,t,l,n){var a=n.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if(t.flags&128){if(u=u!==null?u.baseLanes|l:l,e!==null){for(n=t.child=e.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~u}else n=0,t.child=null;return zc(e,t,u,l,n)}if(l&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ra(t,u!==null?u.cachePool:null),u!==null?fc(t,u):Pi(),Sf(t);else return n=t.lanes=536870912,zc(e,t,u!==null?u.baseLanes|l:l,l,n)}else u!==null?(Ra(t,u.cachePool),fc(t,u),jt(),t.memoizedState=null):(e!==null&&Ra(t,null),Pi(),jt());return he(e,t,a,l),t.child}function En(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function zc(e,t,l,n,a){var u=Fs();return u=u===null?null:{parent:oe._currentValue,pool:u},t.memoizedState={baseLanes:l,cachePool:u},e!==null&&Ra(t,null),Pi(),Sf(t),e!==null&&fn(e,t,n,!0),t.childLanes=a,null}function La(e,t){return t=cu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ac(e,t,l){return hl(t,e.child,null,l),e=La(t,t.pendingProps),e.flags|=2,we(t),t.memoizedState=null,e}function sm(e,t,l){var n=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(X){if(n.mode==="hidden")return e=La(t,n),t.lanes=536870912,En(null,e);if(es(t),(e=I)?(e=Pr(e,$e),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$t!==null?{id:at,overflow:ut}:null,retryLane:536870912,hydrationErrors:null},l=rf(e),l.return=t,t.child=l,be=t,I=null)):e=null,e===null)throw It(t);return t.lanes=536870912,null}return La(t,n)}var u=e.memoizedState;if(u!==null){var i=u.dehydrated;if(es(t),a)if(t.flags&256)t.flags&=-257,t=Ac(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(p(558));else if(ce||fn(e,t,l,!1),a=(l&e.childLanes)!==0,ce||a){if(n=K,n!==null&&(i=H_(n,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,zl(e,i),Ce(n,e,i),mo;du(),t=Ac(e,t,l)}else e=u.treeContext,I=Pe(i.nextSibling),be=t,X=!0,Gt=null,$e=!1,e!==null&&mf(t,e),t=La(t,n),t.flags|=4096;return t}return e=vt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qa(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(p(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function is(e,t,l,n,a){return gl(t),l=to(e,t,l,n,void 0,a),n=lo(),e!==null&&!ce?(no(e,t,a),Et(e,t,a)):(X&&n&&Js(t),t.flags|=1,he(e,t,l,a),t.child)}function Tc(e,t,l,n,a,u){return gl(t),t.updateQueue=null,l=Af(t,n,l,a),zf(e),n=lo(),e!==null&&!ce?(no(e,t,u),Et(e,t,u)):(X&&n&&Js(t),t.flags|=1,he(e,t,l,u),t.child)}function Ec(e,t,l,n,a){if(gl(t),t.stateNode===null){var u=Xl,i=l.contextType;typeof i=="object"&&i!==null&&(u=ve(i)),u=new l(n,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=as,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=n,u.state=t.memoizedState,u.refs={},Is(t),i=l.contextType,u.context=typeof i=="object"&&i!==null?ve(i):Xl,u.state=t.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(si(t,l,i,n),u.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&as.enqueueReplaceState(u,u.state,null),jn(t,n,u,a),wn(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){u=t.stateNode;var s=t.memoizedProps,o=bl(l,s);u.props=o;var _=u.context,y=l.contextType;i=Xl,typeof y=="object"&&y!==null&&(i=ve(y));var g=l.getDerivedStateFromProps;y=typeof g=="function"||typeof u.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,y||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s||_!==i)&&bc(t,u,n,i),Dt=!1;var r=t.memoizedState;u.state=r,jn(t,n,u,a),wn(),_=t.memoizedState,s||r!==_||Dt?(typeof g=="function"&&(si(t,l,g,n),_=t.memoizedState),(o=Dt||pc(t,l,o,n,r,_,i))?(y||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=_),u.props=n,u.state=_,u.context=i,n=o):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{u=t.stateNode,$i(e,t),i=t.memoizedProps,y=bl(l,i),u.props=y,g=t.pendingProps,r=u.context,_=l.contextType,o=Xl,typeof _=="object"&&_!==null&&(o=ve(_)),s=l.getDerivedStateFromProps,(_=typeof s=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==g||r!==o)&&bc(t,u,n,o),Dt=!1,r=t.memoizedState,u.state=r,jn(t,n,u,a),wn();var m=t.memoizedState;i!==g||r!==m||Dt||e!==null&&e.dependencies!==null&&lu(e.dependencies)?(typeof s=="function"&&(si(t,l,s,n),m=t.memoizedState),(y=Dt||pc(t,l,y,n,r,m,o)||e!==null&&e.dependencies!==null&&lu(e.dependencies))?(_||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,m,o),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,m,o)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&r===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&r===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=m),u.props=n,u.state=m,u.context=o,n=y):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&r===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&r===e.memoizedState||(t.flags|=1024),n=!1)}return u=n,qa(e,t),n=(t.flags&128)!==0,u||n?(u=t.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&n?(t.child=hl(t,e.child,null,a),t.child=hl(t,null,l,a)):he(e,t,l,a),t.memoizedState=u.state,e=t.child):e=Et(e,t,a),e}function Oc(e,t,l,n){return yl(),t.flags|=256,he(e,t,l,n),t.child}var oi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ci(e){return{baseLanes:e,cachePool:gf()}}function _i(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Be),e}function or(e,t,l){var n=t.pendingProps,a=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(ae.current&2)!==0),i&&(a=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(X){if(a?wt(t):jt(),(e=I)?(e=Pr(e,$e),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$t!==null?{id:at,overflow:ut}:null,retryLane:536870912,hydrationErrors:null},l=rf(e),l.return=t,t.child=l,be=t,I=null)):e=null,e===null)throw It(t);return vs(e)?t.lanes=32:t.lanes=536870912,null}var s=n.children;return n=n.fallback,a?(jt(),a=t.mode,s=cu({mode:"hidden",children:s},a),n=fl(n,a,l,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n=t.child,n.memoizedState=ci(l),n.childLanes=_i(e,i,l),t.memoizedState=oi,En(null,n)):(wt(t),ss(t,s))}var o=e.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(u)t.flags&256?(wt(t),t.flags&=-257,t=fi(e,t,l)):t.memoizedState!==null?(jt(),t.child=e.child,t.flags|=128,t=null):(jt(),s=n.fallback,a=t.mode,n=cu({mode:"visible",children:n.children},a),s=fl(s,a,l,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,hl(t,e.child,null,l),n=t.child,n.memoizedState=ci(l),n.childLanes=_i(e,i,l),t.memoizedState=oi,t=En(null,n));else if(wt(t),vs(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var _=i.dgst;i=_,n=Error(p(419)),n.stack="",n.digest=i,Jn({value:n,source:null,stack:null}),t=fi(e,t,l)}else if(ce||fn(e,t,l,!1),i=(l&e.childLanes)!==0,ce||i){if(i=K,i!==null&&(n=H_(i,l),n!==0&&n!==o.retryLane))throw o.retryLane=n,zl(e,n),Ce(i,e,n),mo;bs(s)||du(),t=fi(e,t,l)}else bs(s)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,I=Pe(s.nextSibling),be=t,X=!0,Gt=null,$e=!1,e!==null&&mf(t,e),t=ss(t,n.children),t.flags|=4096);return t}return a?(jt(),s=n.fallback,a=t.mode,o=e.child,_=o.sibling,n=vt(o,{mode:"hidden",children:n.children}),n.subtreeFlags=o.subtreeFlags&65011712,_!==null?s=vt(_,s):(s=fl(s,a,l,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,En(null,n),n=t.child,s=e.child.memoizedState,s===null?s=ci(l):(a=s.cachePool,a!==null?(o=oe._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=gf(),s={baseLanes:s.baseLanes|l,cachePool:a}),n.memoizedState=s,n.childLanes=_i(e,i,l),t.memoizedState=oi,En(e.child,n)):(wt(t),l=e.child,e=l.sibling,l=vt(l,{mode:"visible",children:n.children}),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l)}function ss(e,t){return t=cu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function cu(e,t){return e=je(22,e,null,t),e.lanes=0,e}function fi(e,t,l){return hl(t,e.child,null,l),e=ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yc(e,t,l){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ki(e.return,t,l)}function ri(e,t,l,n,a,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:a,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=l,i.tailMode=a,i.treeForkCount=u)}function cr(e,t,l){var n=t.pendingProps,a=n.revealOrder,u=n.tail;n=n.children;var i=ae.current,s=(i&2)!==0;if(s?(i=i&1|2,t.flags|=128):i&=1,W(ae,i),he(e,t,n,l),n=X?Vn:0,!s&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yc(e,l,t);else if(e.tag===19)Yc(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(l=t.child,a=null;l!==null;)e=l.alternate,e!==null&&uu(e)===null&&(a=l),l=l.sibling;l=a,l===null?(a=t.child,t.child=null):(a=l.sibling,l.sibling=null),ri(t,!1,a,l,u,n);break;case"backwards":case"unstable_legacy-backwards":for(l=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&uu(e)===null){t.child=a;break}e=a.sibling,a.sibling=l,l=a,a=e}ri(t,!0,l,null,u,n);break;case"together":ri(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Et(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),el|=t.lanes,!(l&t.childLanes))if(e!==null){if(fn(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,l=vt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=vt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function yo(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&lu(e)))}function om(e,t,l){switch(t.tag){case 3:Wa(t,t.stateNode.containerInfo),Nt(t,oe,e.memoizedState.cache),yl();break;case 27:case 5:ji(t);break;case 4:Wa(t,t.stateNode.containerInfo);break;case 10:Nt(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,es(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(wt(t),t.flags|=128,null):l&t.child.childLanes?or(e,t,l):(wt(t),e=Et(e,t,l),e!==null?e.sibling:null);wt(t);break;case 19:var a=(e.flags&128)!==0;if(n=(l&t.childLanes)!==0,n||(fn(e,t,l,!1),n=(l&t.childLanes)!==0),a){if(n)return cr(e,t,l);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(ae,ae.current),n)break;return null;case 22:return t.lanes=0,sr(e,t,l,t.pendingProps);case 24:Nt(t,oe,e.memoizedState.cache)}return Et(e,t,l)}function _r(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)ce=!0;else{if(!yo(e,l)&&!(t.flags&128))return ce=!1,om(e,t,l);ce=!!(e.flags&131072)}else ce=!1,X&&t.flags&1048576&&df(t,Vn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=ol(t.elementType),t.type=e,typeof e=="function")Vs(e)?(n=bl(e,n),t.tag=1,t=Ec(null,t,e,n,l)):(t.tag=0,t=is(null,t,e,n,l));else{if(e!=null){var a=e.$$typeof;if(a===Ds){t.tag=11,t=xc(null,t,e,n,l);break e}else if(a===Ns){t.tag=14,t=Sc(null,t,e,n,l);break e}}throw t=Ni(e)||e,Error(p(306,t,""))}}return t;case 0:return is(e,t,t.type,t.pendingProps,l);case 1:return n=t.type,a=bl(n,t.pendingProps),Ec(e,t,n,a,l);case 3:e:{if(Wa(t,t.stateNode.containerInfo),e===null)throw Error(p(387));n=t.pendingProps;var u=t.memoizedState;a=u.element,$i(e,t),jn(t,n,null,l);var i=t.memoizedState;if(n=i.cache,Nt(t,oe,n),n!==u.cache&&Wi(t,[oe],l,!0),wn(),n=i.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Oc(e,t,n,l);break e}else if(n!==a){a=Fe(Error(p(424)),t),Jn(a),t=Oc(e,t,n,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(I=Pe(e.firstChild),be=t,X=!0,Gt=null,$e=!0,l=bf(t,null,n,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(yl(),n===a){t=Et(e,t,l);break e}he(e,t,n,l)}t=t.child}return t;case 26:return qa(e,t),e===null?(l=Kc(t.type,null,t.pendingProps,null))?t.memoizedState=l:X||(l=t.type,e=t.pendingProps,n=hu(qt.current).createElement(l),n[pe]=t,n[Ue]=e,xe(n,l,e),me(n),t.stateNode=n):t.memoizedState=Kc(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ji(t),e===null&&X&&(n=t.stateNode=e0(t.type,t.pendingProps,qt.current),be=t,$e=!0,a=I,ll(t.type)?(xs=a,I=Pe(n.firstChild)):I=a),he(e,t,t.pendingProps.children,l),qa(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&X&&((a=n=I)&&(n=Rm(n,t.type,t.pendingProps,$e),n!==null?(t.stateNode=n,be=t,I=Pe(n.firstChild),$e=!1,a=!0):a=!1),a||It(t)),ji(t),a=t.type,u=t.pendingProps,i=e!==null?e.memoizedProps:null,n=u.children,hs(a,u)?n=null:i!==null&&hs(a,i)&&(t.flags|=32),t.memoizedState!==null&&(a=to(e,t,Pd,null,null,l),Pn._currentValue=a),qa(e,t),he(e,t,n,l),t.child;case 6:return e===null&&X&&((e=l=I)&&(l=Xm(l,t.pendingProps,$e),l!==null?(t.stateNode=l,be=t,I=null,e=!0):e=!1),e||It(t)),null;case 13:return or(e,t,l);case 4:return Wa(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=hl(t,null,n,l):he(e,t,n,l),t.child;case 11:return xc(e,t,t.type,t.pendingProps,l);case 7:return he(e,t,t.pendingProps,l),t.child;case 8:return he(e,t,t.pendingProps.children,l),t.child;case 12:return he(e,t,t.pendingProps.children,l),t.child;case 10:return n=t.pendingProps,Nt(t,t.type,n.value),he(e,t,n.children,l),t.child;case 9:return a=t.type._context,n=t.pendingProps.children,gl(t),a=ve(a),n=n(a),t.flags|=1,he(e,t,n,l),t.child;case 14:return Sc(e,t,t.type,t.pendingProps,l);case 15:return ir(e,t,t.type,t.pendingProps,l);case 19:return cr(e,t,l);case 31:return sm(e,t,l);case 22:return sr(e,t,l,t.pendingProps);case 24:return gl(t),n=ve(oe),e===null?(a=Fs(),a===null&&(a=K,u=Ws(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=l),a=u),t.memoizedState={parent:n,cache:a},Is(t),Nt(t,oe,a)):(e.lanes&l&&($i(e,t),jn(t,null,null,l),wn()),a=e.memoizedState,u=t.memoizedState,a.parent!==n?(a={parent:n,cache:n},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Nt(t,oe,n)):(n=u.cache,Nt(t,oe,n),n!==a.cache&&Wi(t,[oe],l,!0))),he(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(p(156,t.tag))}function ft(e){e.flags|=4}function di(e,t,l,n,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(wr())e.flags|=8192;else throw dl=nu,$s}else e.flags&=-16777217}function Mc(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!n0(t))if(wr())e.flags|=8192;else throw dl=nu,$s}function Oa(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?w_():536870912,e.lanes|=t,ln|=t)}function vn(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function $(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,n=0;if(t)for(var a=e.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=l,t}function cm(e,t,l){var n=t.pendingProps;switch(Ks(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $(t),null;case 1:return $(t),null;case 3:return l=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xt(oe),Fl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Tl(t)?ft(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ai())),$(t),null;case 26:var a=t.type,u=t.memoizedState;return e===null?(ft(t),u!==null?($(t),Mc(t,u)):($(t),di(t,a,null,n,l))):u?u!==e.memoizedState?(ft(t),$(t),Mc(t,u)):($(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&ft(t),$(t),di(t,a,e,n,l)),null;case 27:if(Fa(t),l=qt.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ft(t);else{if(!n){if(t.stateNode===null)throw Error(p(166));return $(t),null}e=st.current,Tl(t)?ac(t):(e=e0(a,n,l),t.stateNode=e,ft(t))}return $(t),null;case 5:if(Fa(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ft(t);else{if(!n){if(t.stateNode===null)throw Error(p(166));return $(t),null}if(u=st.current,Tl(t))ac(t);else{var i=hu(qt.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}u[pe]=t,u[Ue]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;e:switch(xe(u,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ft(t)}}return $(t),di(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ft(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(p(166));if(e=qt.current,Tl(t)){if(e=t.stateNode,l=t.memoizedProps,n=null,a=be,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}e[pe]=t,e=!!(e.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||Fr(e.nodeValue,l)),e||It(t,!0)}else e=hu(e).createTextNode(n),e[pe]=t,t.stateNode=e}return $(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(n=Tl(t),l!==null){if(e===null){if(!n)throw Error(p(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(557));e[pe]=t}else yl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$(t),e=!1}else l=ai(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(we(t),t):(we(t),null);if(t.flags&128)throw Error(p(558))}return $(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Tl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(p(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(p(317));a[pe]=t}else yl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$(t),a=!1}else a=ai(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(we(t),t):(we(t),null)}return we(t),t.flags&128?(t.lanes=l,t):(l=n!==null,e=e!==null&&e.memoizedState!==null,l&&(n=t.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==a&&(n.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Oa(t,t.updateQueue),$(t),null);case 4:return Fl(),e===null&&So(t.stateNode.containerInfo),$(t),null;case 10:return xt(t.type),$(t),null;case 19:if(ye(ae),n=t.memoizedState,n===null)return $(t),null;if(a=(t.flags&128)!==0,u=n.rendering,u===null)if(a)vn(n,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(u=uu(e),u!==null){for(t.flags|=128,vn(n,!1),e=u.updateQueue,t.updateQueue=e,Oa(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)ff(l,e),l=l.sibling;return W(ae,ae.current&1|2),X&&yt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&He()>fu&&(t.flags|=128,a=!0,vn(n,!1),t.lanes=4194304)}else{if(!a)if(e=uu(u),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Oa(t,e),vn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!X)return $(t),null}else 2*He()-n.renderingStartTime>fu&&l!==536870912&&(t.flags|=128,a=!0,vn(n,!1),t.lanes=4194304);n.isBackwards?(u.sibling=t.child,t.child=u):(e=n.last,e!==null?e.sibling=u:t.child=u,n.last=u)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=He(),e.sibling=null,l=ae.current,W(ae,a?l&1|2:l&1),X&&yt(t,n.treeForkCount),e):($(t),null);case 22:case 23:return we(t),Ps(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?l&536870912&&!(t.flags&128)&&($(t),t.subtreeFlags&6&&(t.flags|=8192)):$(t),l=t.updateQueue,l!==null&&Oa(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==l&&(t.flags|=2048),e!==null&&ye(rl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),xt(oe),$(t),null;case 25:return null;case 30:return null}throw Error(p(156,t.tag))}function _m(e,t){switch(Ks(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xt(oe),Fl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Fa(t),null;case 31:if(t.memoizedState!==null){if(we(t),t.alternate===null)throw Error(p(340));yl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(we(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(p(340));yl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(ae),null;case 4:return Fl(),null;case 10:return xt(t.type),null;case 22:case 23:return we(t),Ps(),e!==null&&ye(rl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xt(oe),null;case 25:return null;default:return null}}function fr(e,t){switch(Ks(t),t.tag){case 3:xt(oe),Fl();break;case 26:case 27:case 5:Fa(t);break;case 4:Fl();break;case 31:t.memoizedState!==null&&we(t);break;case 13:we(t);break;case 19:ye(ae);break;case 10:xt(t.type);break;case 22:case 23:we(t),Ps(),e!==null&&ye(rl);break;case 24:xt(oe)}}function _a(e,t){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var a=n.next;l=a;do{if((l.tag&e)===e){n=void 0;var u=l.create,i=l.inst;n=u(),i.destroy=n}l=l.next}while(l!==a)}}catch(s){Z(t,t.return,s)}}function Pt(e,t,l){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var u=a.next;n=u;do{if((n.tag&e)===e){var i=n.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,a=t;var o=l,_=s;try{_()}catch(y){Z(a,o,y)}}}n=n.next}while(n!==u)}}catch(y){Z(t,t.return,y)}}function rr(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{xf(t,l)}catch(n){Z(e,e.return,n)}}}function dr(e,t,l){l.props=bl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(n){Z(e,t,n)}}function Hn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof l=="function"?e.refCleanup=l(n):l.current=n}}catch(a){Z(e,t,a)}}function it(e,t){var l=e.ref,n=e.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(a){Z(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(a){Z(e,t,a)}else l.current=null}function mr(e){var t=e.type,l=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break e;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(a){Z(e,e.return,a)}}function mi(e,t,l){try{var n=e.stateNode;Dm(n,e.type,l,t),n[Ue]=t}catch(a){Z(e,e.return,a)}}function yr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ll(e.type)||e.tag===4}function yi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ll(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function os(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=pt));else if(n!==4&&(n===27&&ll(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(os(e,t,l),e=e.sibling;e!==null;)os(e,t,l),e=e.sibling}function _u(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(n!==4&&(n===27&&ll(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(_u(e,t,l),e=e.sibling;e!==null;)_u(e,t,l),e=e.sibling}function gr(e){var t=e.stateNode,l=e.memoizedProps;try{for(var n=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);xe(t,n,l),t[pe]=e,t[Ue]=l}catch(u){Z(e,e.return,u)}}var gt=!1,se=!1,gi=!1,Cc=typeof WeakSet=="function"?WeakSet:Set,de=null;function fm(e,t){if(e=e.containerInfo,ys=xu,e=lf(e),Gs(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var a=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break e}var i=0,s=-1,o=-1,_=0,y=0,g=e,r=null;t:for(;;){for(var m;g!==l||a!==0&&g.nodeType!==3||(s=i+a),g!==u||n!==0&&g.nodeType!==3||(o=i+n),g.nodeType===3&&(i+=g.nodeValue.length),(m=g.firstChild)!==null;)r=g,g=m;for(;;){if(g===e)break t;if(r===l&&++_===a&&(s=i),r===u&&++y===n&&(o=i),(m=g.nextSibling)!==null)break;g=r,r=g.parentNode}g=m}l=s===-1||o===-1?null:{start:s,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(gs={focusedElem:e,selectionRange:l},xu=!1,de=t;de!==null;)if(t=de,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,de=e;else for(;de!==null;){switch(t=de,u=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)a=e[l],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&u!==null){e=void 0,l=t,a=u.memoizedProps,u=u.memoizedState,n=l.stateNode;try{var v=bl(l.type,a);e=n.getSnapshotBeforeUpdate(v,u),n.__reactInternalSnapshotBeforeUpdate=e}catch(A){Z(l,l.return,A)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)ps(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ps(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(p(163))}if(e=t.sibling,e!==null){e.return=t.return,de=e;break}de=t.return}}function hr(e,t,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:dt(e,l),n&4&&_a(5,l);break;case 1:if(dt(e,l),n&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(i){Z(l,l.return,i)}else{var a=bl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){Z(l,l.return,i)}}n&64&&rr(l),n&512&&Hn(l,l.return);break;case 3:if(dt(e,l),n&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{xf(e,t)}catch(i){Z(l,l.return,i)}}break;case 27:t===null&&n&4&&gr(l);case 26:case 5:dt(e,l),t===null&&n&4&&mr(l),n&512&&Hn(l,l.return);break;case 12:dt(e,l);break;case 31:dt(e,l),n&4&&vr(e,l);break;case 13:dt(e,l),n&4&&xr(e,l),n&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=vm.bind(null,l),Qm(e,l))));break;case 22:if(n=l.memoizedState!==null||gt,!n){t=t!==null&&t.memoizedState!==null||se,a=gt;var u=se;gt=n,(se=t)&&!u?mt(e,l,(l.subtreeFlags&8772)!==0):dt(e,l),gt=a,se=u}break;case 30:break;default:dt(e,l)}}function pr(e){var t=e.alternate;t!==null&&(e.alternate=null,pr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Hs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var te=null,Ye=!1;function rt(e,t,l){for(l=l.child;l!==null;)br(e,t,l),l=l.sibling}function br(e,t,l){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(na,l)}catch{}switch(l.tag){case 26:se||it(l,t),rt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:se||it(l,t);var n=te,a=Ye;ll(l.type)&&(te=l.stateNode,Ye=!1),rt(e,t,l),Ln(l.stateNode),te=n,Ye=a;break;case 5:se||it(l,t);case 6:if(n=te,a=Ye,te=null,rt(e,t,l),te=n,Ye=a,te!==null)if(Ye)try{(te.nodeType===9?te.body:te.nodeName==="HTML"?te.ownerDocument.body:te).removeChild(l.stateNode)}catch(u){Z(l,t,u)}else try{te.removeChild(l.stateNode)}catch(u){Z(l,t,u)}break;case 18:te!==null&&(Ye?(e=te,Gc(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),sn(e)):Gc(te,l.stateNode));break;case 4:n=te,a=Ye,te=l.stateNode.containerInfo,Ye=!0,rt(e,t,l),te=n,Ye=a;break;case 0:case 11:case 14:case 15:Pt(2,l,t),se||Pt(4,l,t),rt(e,t,l);break;case 1:se||(it(l,t),n=l.stateNode,typeof n.componentWillUnmount=="function"&&dr(l,t,n)),rt(e,t,l);break;case 21:rt(e,t,l);break;case 22:se=(n=se)||l.memoizedState!==null,rt(e,t,l),se=n;break;default:rt(e,t,l)}}function vr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{sn(e)}catch(l){Z(t,t.return,l)}}}function xr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sn(e)}catch(l){Z(t,t.return,l)}}function rm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Cc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Cc),t;default:throw Error(p(435,e.tag))}}function Ya(e,t){var l=rm(e);t.forEach(function(n){if(!l.has(n)){l.add(n);var a=xm.bind(null,e,n);n.then(a,a)}})}function Ee(e,t){var l=t.deletions;if(l!==null)for(var n=0;n<l.length;n++){var a=l[n],u=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 27:if(ll(s.type)){te=s.stateNode,Ye=!1;break e}break;case 5:te=s.stateNode,Ye=!1;break e;case 3:case 4:te=s.stateNode.containerInfo,Ye=!0;break e}s=s.return}if(te===null)throw Error(p(160));br(u,i,a),te=null,Ye=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sr(t,e),t=t.sibling}var lt=null;function Sr(e,t){var l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ee(t,e),Oe(e),n&4&&(Pt(3,e,e.return),_a(3,e),Pt(5,e,e.return));break;case 1:Ee(t,e),Oe(e),n&512&&(se||l===null||it(l,l.return)),n&64&&gt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var a=lt;if(Ee(t,e),Oe(e),n&512&&(se||l===null||it(l,l.return)),n&4){var u=l!==null?l.memoizedState:null;if(n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null){e:{n=e.type,l=e.memoizedProps,a=a.ownerDocument||a;t:switch(n){case"title":u=a.getElementsByTagName("title")[0],(!u||u[ia]||u[pe]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(n),a.head.insertBefore(u,a.querySelector("head > title"))),xe(u,n,l),u[pe]=e,me(u),n=u;break e;case"link":var i=Fc("link","href",a).get(n+(l.href||""));if(i){for(var s=0;s<i.length;s++)if(u=i[s],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(s,1);break t}}u=a.createElement(n),xe(u,n,l),a.head.appendChild(u);break;case"meta":if(i=Fc("meta","content",a).get(n+(l.content||""))){for(s=0;s<i.length;s++)if(u=i[s],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(s,1);break t}}u=a.createElement(n),xe(u,n,l),a.head.appendChild(u);break;default:throw Error(p(468,n))}u[pe]=e,me(u),n=u}e.stateNode=n}else $c(a,e.type,e.stateNode);else e.stateNode=Wc(a,n,e.memoizedProps);else u!==n?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,n===null?$c(a,e.type,e.stateNode):Wc(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&mi(e,e.memoizedProps,l.memoizedProps)}break;case 27:Ee(t,e),Oe(e),n&512&&(se||l===null||it(l,l.return)),l!==null&&n&4&&mi(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Ee(t,e),Oe(e),n&512&&(se||l===null||it(l,l.return)),e.flags&32){a=e.stateNode;try{Il(a,"")}catch(v){Z(e,e.return,v)}}n&4&&e.stateNode!=null&&(a=e.memoizedProps,mi(e,a,l!==null?l.memoizedProps:a)),n&1024&&(gi=!0);break;case 6:if(Ee(t,e),Oe(e),n&4){if(e.stateNode===null)throw Error(p(162));n=e.memoizedProps,l=e.stateNode;try{l.nodeValue=n}catch(v){Z(e,e.return,v)}}break;case 3:if(ka=null,a=lt,lt=pu(t.containerInfo),Ee(t,e),lt=a,Oe(e),n&4&&l!==null&&l.memoizedState.isDehydrated)try{sn(t.containerInfo)}catch(v){Z(e,e.return,v)}gi&&(gi=!1,zr(e));break;case 4:n=lt,lt=pu(e.stateNode.containerInfo),Ee(t,e),Oe(e),lt=n;break;case 12:Ee(t,e),Oe(e);break;case 31:Ee(t,e),Oe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ya(e,n)));break;case 13:Ee(t,e),Oe(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Hu=He()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ya(e,n)));break;case 22:a=e.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,_=gt,y=se;if(gt=_||a,se=y||o,Ee(t,e),se=y,gt=_,Oe(e),n&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(l===null||o||gt||se||cl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){o=l=t;try{if(u=o.stateNode,a)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=o.stateNode;var g=o.memoizedProps.style,r=g!=null&&g.hasOwnProperty("display")?g.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(v){Z(o,o.return,v)}}}else if(t.tag===6){if(l===null){o=t;try{o.stateNode.nodeValue=a?"":o.memoizedProps}catch(v){Z(o,o.return,v)}}}else if(t.tag===18){if(l===null){o=t;try{var m=o.stateNode;a?Zc(m,!0):Zc(o.stateNode,!1)}catch(v){Z(o,o.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,Ya(e,l))));break;case 19:Ee(t,e),Oe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ya(e,n)));break;case 30:break;case 21:break;default:Ee(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{for(var l,n=e.return;n!==null;){if(yr(n)){l=n;break}n=n.return}if(l==null)throw Error(p(160));switch(l.tag){case 27:var a=l.stateNode,u=yi(e);_u(e,u,a);break;case 5:var i=l.stateNode;l.flags&32&&(Il(i,""),l.flags&=-33);var s=yi(e);_u(e,s,i);break;case 3:case 4:var o=l.stateNode.containerInfo,_=yi(e);os(e,_,o);break;default:throw Error(p(161))}}catch(y){Z(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;zr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function dt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hr(e,t.alternate,t),t=t.sibling}function cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Pt(4,t,t.return),cl(t);break;case 1:it(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&dr(t,t.return,l),cl(t);break;case 27:Ln(t.stateNode);case 26:case 5:it(t,t.return),cl(t);break;case 22:t.memoizedState===null&&cl(t);break;case 30:cl(t);break;default:cl(t)}e=e.sibling}}function mt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,a=e,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:mt(a,u,l),_a(4,u);break;case 1:if(mt(a,u,l),n=u,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(_){Z(n,n.return,_)}if(n=u,a=n.updateQueue,a!==null){var s=n.stateNode;try{var o=a.shared.hiddenCallbacks;if(o!==null)for(a.shared.hiddenCallbacks=null,a=0;a<o.length;a++)vf(o[a],s)}catch(_){Z(n,n.return,_)}}l&&i&64&&rr(u),Hn(u,u.return);break;case 27:gr(u);case 26:case 5:mt(a,u,l),l&&n===null&&i&4&&mr(u),Hn(u,u.return);break;case 12:mt(a,u,l);break;case 31:mt(a,u,l),l&&i&4&&vr(a,u);break;case 13:mt(a,u,l),l&&i&4&&xr(a,u);break;case 22:u.memoizedState===null&&mt(a,u,l),Hn(u,u.return);break;case 30:break;default:mt(a,u,l)}t=t.sibling}}function go(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&oa(l))}function ho(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oa(e))}function tt(e,t,l,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ar(e,t,l,n),t=t.sibling}function Ar(e,t,l,n){var a=t.flags;switch(t.tag){case 0:case 11:case 15:tt(e,t,l,n),a&2048&&_a(9,t);break;case 1:tt(e,t,l,n);break;case 3:tt(e,t,l,n),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oa(e)));break;case 12:if(a&2048){tt(e,t,l,n),e=t.stateNode;try{var u=t.memoizedProps,i=u.id,s=u.onPostCommit;typeof s=="function"&&s(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){Z(t,t.return,o)}}else tt(e,t,l,n);break;case 31:tt(e,t,l,n);break;case 13:tt(e,t,l,n);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?tt(e,t,l,n):Rn(e,t):u._visibility&2?tt(e,t,l,n):(u._visibility|=2,Ml(e,t,l,n,(t.subtreeFlags&10256)!==0||!1)),a&2048&&go(i,t);break;case 24:tt(e,t,l,n),a&2048&&ho(t.alternate,t);break;default:tt(e,t,l,n)}}function Ml(e,t,l,n,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,i=t,s=l,o=n,_=i.flags;switch(i.tag){case 0:case 11:case 15:Ml(u,i,s,o,a),_a(8,i);break;case 23:break;case 22:var y=i.stateNode;i.memoizedState!==null?y._visibility&2?Ml(u,i,s,o,a):Rn(u,i):(y._visibility|=2,Ml(u,i,s,o,a)),a&&_&2048&&go(i.alternate,i);break;case 24:Ml(u,i,s,o,a),a&&_&2048&&ho(i.alternate,i);break;default:Ml(u,i,s,o,a)}t=t.sibling}}function Rn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,n=t,a=n.flags;switch(n.tag){case 22:Rn(l,n),a&2048&&go(n.alternate,n);break;case 24:Rn(l,n),a&2048&&ho(n.alternate,n);break;default:Rn(l,n)}t=t.sibling}}var On=8192;function El(e,t,l){if(e.subtreeFlags&On)for(e=e.child;e!==null;)Tr(e,t,l),e=e.sibling}function Tr(e,t,l){switch(e.tag){case 26:El(e,t,l),e.flags&On&&e.memoizedState!==null&&Im(l,lt,e.memoizedState,e.memoizedProps);break;case 5:El(e,t,l);break;case 3:case 4:var n=lt;lt=pu(e.stateNode.containerInfo),El(e,t,l),lt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=On,On=16777216,El(e,t,l),On=n):El(e,t,l));break;default:El(e,t,l)}}function Er(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xn(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];de=n,Yr(n,e)}Er(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Or(e),e=e.sibling}function Or(e){switch(e.tag){case 0:case 11:case 15:xn(e),e.flags&2048&&Pt(9,e,e.return);break;case 3:xn(e);break;case 12:xn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ga(e)):xn(e);break;default:xn(e)}}function Ga(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];de=n,Yr(n,e)}Er(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Pt(8,t,t.return),Ga(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Ga(t));break;default:Ga(t)}e=e.sibling}}function Yr(e,t){for(;de!==null;){var l=de;switch(l.tag){case 0:case 11:case 15:Pt(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:oa(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,de=n;else e:for(l=e;de!==null;){n=de;var a=n.sibling,u=n.return;if(pr(n),n===l){de=null;break e}if(a!==null){a.return=u,de=a;break e}de=u}}}var dm={getCacheForType:function(e){var t=ve(oe),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return ve(oe).controller.signal}},mm=typeof WeakMap=="function"?WeakMap:Map,L=0,K=null,H=null,R=0,G=0,Ne=null,Xt=!1,dn=!1,po=!1,Ot=0,ne=0,el=0,ml=0,bo=0,Be=0,ln=0,Xn=null,Me=null,cs=!1,Hu=0,Mr=0,fu=1/0,ru=null,Vt=null,_e=0,Jt=null,nn=null,St=0,_s=0,fs=null,Cr=null,Qn=0,rs=null;function Qe(){return L&2&&R!==0?R&-R:E.T!==null?xo():R_()}function Ur(){if(Be===0)if(!(R&536870912)||X){var e=va;va<<=1,!(va&3932160)&&(va=262144),Be=e}else Be=536870912;return e=qe.current,e!==null&&(e.flags|=32),Be}function Ce(e,t,l){(e===K&&(G===2||G===9)||e.cancelPendingCommit!==null)&&(an(e,0),Qt(e,R,Be,!1)),ua(e,l),(!(L&2)||e!==K)&&(e===K&&(!(L&2)&&(ml|=l),ne===4&&Qt(e,R,Be,!1)),ct(e))}function Dr(e,t,l){if(L&6)throw Error(p(327));var n=!l&&(t&127)===0&&(t&e.expiredLanes)===0||aa(e,t),a=n?hm(e,t):hi(e,t,!0),u=n;do{if(a===0){dn&&!n&&Qt(e,t,0,!1);break}else{if(l=e.current.alternate,u&&!ym(l)){a=hi(e,t,!1),u=!1;continue}if(a===2){if(u=t,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var s=e;a=Xn;var o=s.current.memoizedState.isDehydrated;if(o&&(an(s,i).flags|=256),i=hi(s,i,!1),i!==2){if(po&&!o){s.errorRecoveryDisabledLanes|=u,ml|=u,a=4;break e}u=Me,Me=a,u!==null&&(Me===null?Me=u:Me.push.apply(Me,u))}a=i}if(u=!1,a!==2)continue}}if(a===1){an(e,0),Qt(e,t,0,!0);break}e:{switch(n=e,u=a,u){case 0:case 1:throw Error(p(345));case 4:if((t&4194048)!==t)break;case 6:Qt(n,t,Be,!Xt);break e;case 2:Me=null;break;case 3:case 5:break;default:throw Error(p(329))}if((t&62914560)===t&&(a=Hu+300-He(),10<a)){if(Qt(n,t,Be,!Xt),Eu(n,0,!0)!==0)break e;St=t,n.timeoutHandle=Ir(Uc.bind(null,n,l,Me,ru,cs,t,Be,ml,ln,Xt,u,"Throttled",-0,0),a);break e}Uc(n,l,Me,ru,cs,t,Be,ml,ln,Xt,u,null,-0,0)}}break}while(!0);ct(e)}function Uc(e,t,l,n,a,u,i,s,o,_,y,g,r,m){if(e.timeoutHandle=-1,g=t.subtreeFlags,g&8192||(g&16785408)===16785408){g={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pt},Tr(t,u,g);var v=(u&62914560)===u?Hu-He():(u&4194048)===u?Mr-He():0;if(v=Pm(g,v),v!==null){St=u,e.cancelPendingCommit=v(Nc.bind(null,e,t,u,l,n,a,i,s,o,y,g,null,r,m)),Qt(e,u,i,!_);return}}Nc(e,t,u,l,n,a,i,s,o)}function ym(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var a=l[n],u=a.getSnapshot;a=a.value;try{if(!Le(u(),a))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t,l,n){t&=~bo,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var a=t;0<a;){var u=31-Xe(a),i=1<<u;n[u]=-1,a&=~i}l!==0&&j_(e,l,t)}function Ru(){return L&6?!0:(fa(0),!1)}function vo(){if(H!==null){if(G===0)var e=H.return;else e=H,bt=Al=null,ao(e),Jl=null,Kn=0,e=H;for(;e!==null;)fr(e.alternate,e),e=e.return;H=null}}function an(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,jm(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),St=0,vo(),K=e,H=l=vt(e.current,null),R=t,G=0,Ne=null,Xt=!1,dn=aa(e,t),po=!1,ln=Be=bo=ml=el=ne=0,Me=Xn=null,cs=!1,t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-Xe(n),u=1<<a;t|=e[a],n&=~u}return Ot=t,Cu(),l}function Nr(e,t){Y=null,E.H=Fn,t===rn||t===Du?(t=cc(),G=3):t===$s?(t=cc(),G=4):G=t===mo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ne=t,H===null&&(ne=1,ou(e,Fe(t,e.current)))}function wr(){var e=qe.current;return e===null?!0:(R&4194048)===R?Ie===null:(R&62914560)===R||R&536870912?e===Ie:!1}function jr(){var e=E.H;return E.H=Fn,e===null?Fn:e}function Br(){var e=E.A;return E.A=dm,e}function du(){ne=4,Xt||(R&4194048)!==R&&qe.current!==null||(dn=!0),!(el&134217727)&&!(ml&134217727)||K===null||Qt(K,R,Be,!1)}function hi(e,t,l){var n=L;L|=2;var a=jr(),u=Br();(K!==e||R!==t)&&(ru=null,an(e,t)),t=!1;var i=ne;e:do try{if(G!==0&&H!==null){var s=H,o=Ne;switch(G){case 8:vo(),i=6;break e;case 3:case 2:case 9:case 6:qe.current===null&&(t=!0);var _=G;if(G=0,Ne=null,ql(e,s,o,_),l&&dn){i=0;break e}break;default:_=G,G=0,Ne=null,ql(e,s,o,_)}}gm(),i=ne;break}catch(y){Nr(e,y)}while(!0);return t&&e.shellSuspendCounter++,bt=Al=null,L=n,E.H=a,E.A=u,H===null&&(K=null,R=0,Cu()),i}function gm(){for(;H!==null;)Hr(H)}function hm(e,t){var l=L;L|=2;var n=jr(),a=Br();K!==e||R!==t?(ru=null,fu=He()+500,an(e,t)):dn=aa(e,t);e:do try{if(G!==0&&H!==null){t=H;var u=Ne;t:switch(G){case 1:G=0,Ne=null,ql(e,t,u,1);break;case 2:case 9:if(oc(u)){G=0,Ne=null,Dc(t);break}t=function(){G!==2&&G!==9||K!==e||(G=7),ct(e)},u.then(t,t);break e;case 3:G=7;break e;case 4:G=5;break e;case 7:oc(u)?(G=0,Ne=null,Dc(t)):(G=0,Ne=null,ql(e,t,u,7));break;case 5:var i=null;switch(H.tag){case 26:i=H.memoizedState;case 5:case 27:var s=H;if(i?n0(i):s.stateNode.complete){G=0,Ne=null;var o=s.sibling;if(o!==null)H=o;else{var _=s.return;_!==null?(H=_,Xu(_)):H=null}break t}}G=0,Ne=null,ql(e,t,u,5);break;case 6:G=0,Ne=null,ql(e,t,u,6);break;case 8:vo(),ne=6;break e;default:throw Error(p(462))}}pm();break}catch(y){Nr(e,y)}while(!0);return bt=Al=null,E.H=n,E.A=a,L=l,H!==null?0:(K=null,R=0,Cu(),ne)}function pm(){for(;H!==null&&!L0();)Hr(H)}function Hr(e){var t=_r(e.alternate,e,Ot);e.memoizedProps=e.pendingProps,t===null?Xu(e):H=t}function Dc(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Tc(l,t,t.pendingProps,t.type,void 0,R);break;case 11:t=Tc(l,t,t.pendingProps,t.type.render,t.ref,R);break;case 5:ao(t);default:fr(l,t),t=H=ff(t,Ot),t=_r(l,t,Ot)}e.memoizedProps=e.pendingProps,t===null?Xu(e):H=t}function ql(e,t,l,n){bt=Al=null,ao(t),Jl=null,Kn=0;var a=t.return;try{if(im(e,a,t,l,R)){ne=1,ou(e,Fe(l,e.current)),H=null;return}}catch(u){if(a!==null)throw H=a,u;ne=1,ou(e,Fe(l,e.current)),H=null;return}t.flags&32768?(X||n===1?e=!0:dn||R&536870912?e=!1:(Xt=e=!0,(n===2||n===9||n===3||n===6)&&(n=qe.current,n!==null&&n.tag===13&&(n.flags|=16384))),Rr(t,e)):Xu(t)}function Xu(e){var t=e;do{if(t.flags&32768){Rr(t,Xt);return}e=t.return;var l=cm(t.alternate,t,Ot);if(l!==null){H=l;return}if(t=t.sibling,t!==null){H=t;return}H=t=e}while(t!==null);ne===0&&(ne=5)}function Rr(e,t){do{var l=_m(e.alternate,e);if(l!==null){l.flags&=32767,H=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){H=e;return}H=e=l}while(e!==null);ne=6,H=null}function Nc(e,t,l,n,a,u,i,s,o){e.cancelPendingCommit=null;do Qu();while(_e!==0);if(L&6)throw Error(p(327));if(t!==null){if(t===e.current)throw Error(p(177));if(u=t.lanes|t.childLanes,u|=Zs,$0(e,l,u,i,s,o),e===K&&(H=K=null,R=0),nn=t,Jt=e,St=l,_s=u,fs=a,Cr=n,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Sm($a,function(){return Gr(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,t.subtreeFlags&13878||n){n=E.T,E.T=null,a=q.p,q.p=2,i=L,L|=4;try{fm(e,t,l)}finally{L=i,q.p=a,E.T=n}}_e=1,Xr(),Qr(),Lr()}}function Xr(){if(_e===1){_e=0;var e=Jt,t=nn,l=(t.flags&13878)!==0;if(t.subtreeFlags&13878||l){l=E.T,E.T=null;var n=q.p;q.p=2;var a=L;L|=4;try{Sr(t,e);var u=gs,i=lf(e.containerInfo),s=u.focusedElem,o=u.selectionRange;if(i!==s&&s&&s.ownerDocument&&tf(s.ownerDocument.documentElement,s)){if(o!==null&&Gs(s)){var _=o.start,y=o.end;if(y===void 0&&(y=_),"selectionStart"in s)s.selectionStart=_,s.selectionEnd=Math.min(y,s.value.length);else{var g=s.ownerDocument||document,r=g&&g.defaultView||window;if(r.getSelection){var m=r.getSelection(),v=s.textContent.length,A=Math.min(o.start,v),w=o.end===void 0?A:Math.min(o.end,v);!m.extend&&A>w&&(i=w,w=A,A=i);var f=tc(s,A),c=tc(s,w);if(f&&c&&(m.rangeCount!==1||m.anchorNode!==f.node||m.anchorOffset!==f.offset||m.focusNode!==c.node||m.focusOffset!==c.offset)){var d=g.createRange();d.setStart(f.node,f.offset),m.removeAllRanges(),A>w?(m.addRange(d),m.extend(c.node,c.offset)):(d.setEnd(c.node,c.offset),m.addRange(d))}}}}for(g=[],m=s;m=m.parentNode;)m.nodeType===1&&g.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<g.length;s++){var h=g[s];h.element.scrollLeft=h.left,h.element.scrollTop=h.top}}xu=!!ys,gs=ys=null}finally{L=a,q.p=n,E.T=l}}e.current=t,_e=2}}function Qr(){if(_e===2){_e=0;var e=Jt,t=nn,l=(t.flags&8772)!==0;if(t.subtreeFlags&8772||l){l=E.T,E.T=null;var n=q.p;q.p=2;var a=L;L|=4;try{hr(e,t.alternate,t)}finally{L=a,q.p=n,E.T=l}}_e=3}}function Lr(){if(_e===4||_e===3){_e=0,q0();var e=Jt,t=nn,l=St,n=Cr;t.subtreeFlags&10256||t.flags&10256?_e=5:(_e=0,nn=Jt=null,qr(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Vt=null),Bs(l),t=t.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(na,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=E.T,a=q.p,q.p=2,E.T=null;try{for(var u=e.onRecoverableError,i=0;i<n.length;i++){var s=n[i];u(s.value,{componentStack:s.stack})}}finally{E.T=t,q.p=a}}St&3&&Qu(),ct(e),a=e.pendingLanes,l&261930&&a&42?e===rs?Qn++:(Qn=0,rs=e):Qn=0,fa(0)}}function qr(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,oa(t)))}function Qu(){return Xr(),Qr(),Lr(),Gr()}function Gr(){if(_e!==5)return!1;var e=Jt,t=_s;_s=0;var l=Bs(St),n=E.T,a=q.p;try{q.p=32>l?32:l,E.T=null,l=fs,fs=null;var u=Jt,i=St;if(_e=0,nn=Jt=null,St=0,L&6)throw Error(p(331));var s=L;if(L|=4,Or(u.current),Ar(u,u.current,i,l),L=s,fa(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(na,u)}catch{}return!0}finally{q.p=a,E.T=n,qr(e,t)}}function wc(e,t,l){t=Fe(l,t),t=us(e.stateNode,t,2),e=kt(e,t,2),e!==null&&(ua(e,2),ct(e))}function Z(e,t,l){if(e.tag===3)wc(e,e,l);else for(;t!==null;){if(t.tag===3){wc(t,e,l);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Vt===null||!Vt.has(n))){e=Fe(l,e),l=ar(2),n=kt(t,l,2),n!==null&&(ur(l,n,t,e),ua(n,2),ct(n));break}}t=t.return}}function pi(e,t,l){var n=e.pingCache;if(n===null){n=e.pingCache=new mm;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(l)||(po=!0,a.add(l),e=bm.bind(null,e,t,l),t.then(e,e))}function bm(e,t,l){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,K===e&&(R&l)===l&&(ne===4||ne===3&&(R&62914560)===R&&300>He()-Hu?!(L&2)&&an(e,0):bo|=l,ln===R&&(ln=0)),ct(e)}function Zr(e,t){t===0&&(t=w_()),e=zl(e,t),e!==null&&(ua(e,t),ct(e))}function vm(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Zr(e,l)}function xm(e,t){var l=0;switch(e.tag){case 31:case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(l=a.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(p(314))}n!==null&&n.delete(t),Zr(e,l)}function Sm(e,t){return ws(e,t)}var mu=null,Cl=null,ds=!1,yu=!1,bi=!1,Lt=0;function ct(e){e!==Cl&&e.next===null&&(Cl===null?mu=Cl=e:Cl=Cl.next=e),yu=!0,ds||(ds=!0,Am())}function fa(e,t){if(!bi&&yu){bi=!0;do for(var l=!1,n=mu;n!==null;){if(e!==0){var a=n.pendingLanes;if(a===0)var u=0;else{var i=n.suspendedLanes,s=n.pingedLanes;u=(1<<31-Xe(42|e)+1)-1,u&=a&~(i&~s),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,jc(n,u))}else u=R,u=Eu(n,n===K?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),!(u&3)||aa(n,u)||(l=!0,jc(n,u));n=n.next}while(l);bi=!1}}function zm(){kr()}function kr(){yu=ds=!1;var e=0;Lt!==0&&wm()&&(e=Lt);for(var t=He(),l=null,n=mu;n!==null;){var a=n.next,u=Vr(n,t);u===0?(n.next=null,l===null?mu=a:l.next=a,a===null&&(Cl=l)):(l=n,(e!==0||u&3)&&(yu=!0)),n=a}_e!==0&&_e!==5||fa(e),Lt!==0&&(Lt=0)}function Vr(e,t){for(var l=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-Xe(u),s=1<<i,o=a[i];o===-1?(!(s&l)||s&n)&&(a[i]=F0(s,t)):o<=t&&(e.expiredLanes|=s),u&=~s}if(t=K,l=R,l=Eu(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,l===0||e===t&&(G===2||G===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ju(n),e.callbackNode=null,e.callbackPriority=0;if(!(l&3)||aa(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(n!==null&&Ju(n),Bs(l)){case 2:case 8:l=D_;break;case 32:l=$a;break;case 268435456:l=N_;break;default:l=$a}return n=Jr.bind(null,e),l=ws(l,n),e.callbackPriority=t,e.callbackNode=l,t}return n!==null&&n!==null&&Ju(n),e.callbackPriority=2,e.callbackNode=null,2}function Jr(e,t){if(_e!==0&&_e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Qu()&&e.callbackNode!==l)return null;var n=R;return n=Eu(e,e===K?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Dr(e,n,t),Vr(e,He()),e.callbackNode!=null&&e.callbackNode===l?Jr.bind(null,e):null)}function jc(e,t){if(Qu())return null;Dr(e,t,!0)}function Am(){Bm(function(){L&6?ws(U_,zm):kr()})}function xo(){if(Lt===0){var e=Pl;e===0&&(e=ba,ba<<=1,!(ba&261888)&&(ba=256)),Lt=e}return Lt}function Bc(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wa(""+e)}function Hc(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Tm(e,t,l,n,a){if(t==="submit"&&l&&l.stateNode===a){var u=Bc((a[Ue]||null).action),i=n.submitter;i&&(t=(t=i[Ue]||null)?Bc(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var s=new Ou("action","action",null,n,a);e.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Lt!==0){var o=i?Hc(a,i):new FormData(a);ns(l,{pending:!0,data:o,method:a.method,action:u},null,o)}}else typeof u=="function"&&(s.preventDefault(),o=i?Hc(a,i):new FormData(a),ns(l,{pending:!0,data:o,method:a.method,action:u},u,o))},currentTarget:a}]})}}for(var vi=0;vi<ki.length;vi++){var xi=ki[vi],Em=xi.toLowerCase(),Om=xi[0].toUpperCase()+xi.slice(1);nt(Em,"on"+Om)}nt(af,"onAnimationEnd");nt(uf,"onAnimationIteration");nt(sf,"onAnimationStart");nt("dblclick","onDoubleClick");nt("focusin","onFocus");nt("focusout","onBlur");nt(Gd,"onTransitionRun");nt(Zd,"onTransitionStart");nt(kd,"onTransitionCancel");nt(of,"onTransitionEnd");$l("onMouseEnter",["mouseout","mouseover"]);$l("onMouseLeave",["mouseout","mouseover"]);$l("onPointerEnter",["pointerout","pointerover"]);$l("onPointerLeave",["pointerout","pointerover"]);vl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vl("onBeforeInput",["compositionend","keypress","textInput","paste"]);vl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ym=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($n));function Kr(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var n=e[l],a=n.event;n=n.listeners;e:{var u=void 0;if(t)for(var i=n.length-1;0<=i;i--){var s=n[i],o=s.instance,_=s.currentTarget;if(s=s.listener,o!==u&&a.isPropagationStopped())break e;u=s,a.currentTarget=_;try{u(a)}catch(y){Pa(y)}a.currentTarget=null,u=o}else for(i=0;i<n.length;i++){if(s=n[i],o=s.instance,_=s.currentTarget,s=s.listener,o!==u&&a.isPropagationStopped())break e;u=s,a.currentTarget=_;try{u(a)}catch(y){Pa(y)}a.currentTarget=null,u=o}}}}function B(e,t){var l=t[Hi];l===void 0&&(l=t[Hi]=new Set);var n=e+"__bubble";l.has(n)||(Wr(t,e,2,!1),l.add(n))}function Si(e,t,l){var n=0;t&&(n|=4),Wr(l,e,n,t)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function So(e){if(!e[Ma]){e[Ma]=!0,X_.forEach(function(l){l!=="selectionchange"&&(Ym.has(l)||Si(l,!1,e),Si(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ma]||(t[Ma]=!0,Si("selectionchange",!1,t))}}function Wr(e,t,l,n){switch(o0(t)){case 2:var a=ly;break;case 8:a=ny;break;default:a=Eo}l=a.bind(null,t,l,e),a=void 0,!qi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,l,{capture:!0,passive:a}):e.addEventListener(t,l,!0):a!==void 0?e.addEventListener(t,l,{passive:a}):e.addEventListener(t,l,!1)}function zi(e,t,l,n,a){var u=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var s=n.stateNode.containerInfo;if(s===a)break;if(i===4)for(i=n.return;i!==null;){var o=i.tag;if((o===3||o===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;s!==null;){if(i=Nl(s),i===null)return;if(o=i.tag,o===5||o===6||o===26||o===27){n=u=i;continue e}s=s.parentNode}}n=n.return}J_(function(){var _=u,y=Xs(l),g=[];e:{var r=cf.get(e);if(r!==void 0){var m=Ou,v=e;switch(e){case"keypress":if(Ba(l)===0)break e;case"keydown":case"keyup":m=xd;break;case"focusin":v="focus",m=Iu;break;case"focusout":v="blur",m=Iu;break;case"beforeblur":case"afterblur":m=Iu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ad;break;case af:case uf:case sf:m=rd;break;case of:m=Ed;break;case"scroll":case"scrollend":m=sd;break;case"wheel":m=Yd;break;case"copy":case"cut":case"paste":m=md;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Jo;break;case"toggle":case"beforetoggle":m=Cd}var A=(t&4)!==0,w=!A&&(e==="scroll"||e==="scrollend"),f=A?r!==null?r+"Capture":null:r;A=[];for(var c=_,d;c!==null;){var h=c;if(d=h.stateNode,h=h.tag,h!==5&&h!==26&&h!==27||d===null||f===null||(h=Gn(c,f),h!=null&&A.push(In(c,h,d))),w)break;c=c.return}0<A.length&&(r=new m(r,v,null,l,y),g.push({event:r,listeners:A}))}}if(!(t&7)){e:{if(r=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",r&&l!==Li&&(v=l.relatedTarget||l.fromElement)&&(Nl(v)||v[cn]))break e;if((m||r)&&(r=y.window===y?y:(r=y.ownerDocument)?r.defaultView||r.parentWindow:window,m?(v=l.relatedTarget||l.toElement,m=_,v=v?Nl(v):null,v!==null&&(w=la(v),A=v.tag,v!==w||A!==5&&A!==27&&A!==6)&&(v=null)):(m=null,v=_),m!==v)){if(A=ko,h="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(A=Jo,h="onPointerLeave",f="onPointerEnter",c="pointer"),w=m==null?r:Tn(m),d=v==null?r:Tn(v),r=new A(h,c+"leave",m,l,y),r.target=w,r.relatedTarget=d,h=null,Nl(y)===_&&(A=new A(f,c+"enter",v,l,y),A.target=d,A.relatedTarget=w,h=A),w=h,m&&v)t:{for(A=Mm,f=m,c=v,d=0,h=f;h;h=A(h))d++;h=0;for(var z=c;z;z=A(z))h++;for(;0<d-h;)f=A(f),d--;for(;0<h-d;)c=A(c),h--;for(;d--;){if(f===c||c!==null&&f===c.alternate){A=f;break t}f=A(f),c=A(c)}A=null}else A=null;m!==null&&Rc(g,r,m,A,!1),v!==null&&w!==null&&Rc(g,w,v,A,!0)}}e:{if(r=_?Tn(_):window,m=r.nodeName&&r.nodeName.toLowerCase(),m==="select"||m==="input"&&r.type==="file")var M=$o;else if(Fo(r))if(P_)M=Qd;else{M=Rd;var x=Hd}else m=r.nodeName,!m||m.toLowerCase()!=="input"||r.type!=="checkbox"&&r.type!=="radio"?_&&Rs(_.elementType)&&(M=$o):M=Xd;if(M&&(M=M(e,_))){I_(g,M,l,y);break e}x&&x(e,r,_),e==="focusout"&&_&&r.type==="number"&&_.memoizedProps.value!=null&&Qi(r,"number",r.value)}switch(x=_?Tn(_):window,e){case"focusin":(Fo(x)||x.contentEditable==="true")&&(Bl=x,Gi=_,Un=null);break;case"focusout":Un=Gi=Bl=null;break;case"mousedown":Zi=!0;break;case"contextmenu":case"mouseup":case"dragend":Zi=!1,lc(g,l,y);break;case"selectionchange":if(qd)break;case"keydown":case"keyup":lc(g,l,y)}var T;if(qs)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else jl?F_(e,l)&&(C="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(C="onCompositionStart");C&&(W_&&l.locale!=="ko"&&(jl||C!=="onCompositionStart"?C==="onCompositionEnd"&&jl&&(T=K_()):(Rt=y,Qs="value"in Rt?Rt.value:Rt.textContent,jl=!0)),x=gu(_,C),0<x.length&&(C=new Vo(C,e,null,l,y),g.push({event:C,listeners:x}),T?C.data=T:(T=$_(l),T!==null&&(C.data=T)))),(T=Dd?Nd(e,l):wd(e,l))&&(C=gu(_,"onBeforeInput"),0<C.length&&(x=new Vo("onBeforeInput","beforeinput",null,l,y),g.push({event:x,listeners:C}),x.data=T)),Tm(g,e,_,l,y)}Kr(g,t)})}function In(e,t,l){return{instance:e,listener:t,currentTarget:l}}function gu(e,t){for(var l=t+"Capture",n=[];e!==null;){var a=e,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=Gn(e,l),a!=null&&n.unshift(In(e,a,u)),a=Gn(e,t),a!=null&&n.push(In(e,a,u))),e.tag===3)return n;e=e.return}return[]}function Mm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rc(e,t,l,n,a){for(var u=t._reactName,i=[];l!==null&&l!==n;){var s=l,o=s.alternate,_=s.stateNode;if(s=s.tag,o!==null&&o===n)break;s!==5&&s!==26&&s!==27||_===null||(o=_,a?(_=Gn(l,u),_!=null&&i.unshift(In(l,_,o))):a||(_=Gn(l,u),_!=null&&i.push(In(l,_,o)))),l=l.return}i.length!==0&&e.push({event:t,listeners:i})}var Cm=/\r\n?/g,Um=/\u0000|\uFFFD/g;function Xc(e){return(typeof e=="string"?e:""+e).replace(Cm,`
`).replace(Um,"")}function Fr(e,t){return t=Xc(t),Xc(e)===t}function k(e,t,l,n,a,u){switch(l){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Il(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Il(e,""+n);break;case"className":Sa(e,"class",n);break;case"tabIndex":Sa(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Sa(e,l,n);break;case"style":V_(e,n,u);break;case"data":if(t!=="object"){Sa(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=wa(""+n),e.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(t!=="input"&&k(e,t,"name",a.name,a,null),k(e,t,"formEncType",a.formEncType,a,null),k(e,t,"formMethod",a.formMethod,a,null),k(e,t,"formTarget",a.formTarget,a,null)):(k(e,t,"encType",a.encType,a,null),k(e,t,"method",a.method,a,null),k(e,t,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=wa(""+n),e.setAttribute(l,n);break;case"onClick":n!=null&&(e.onclick=pt);break;case"onScroll":n!=null&&B("scroll",e);break;case"onScrollEnd":n!=null&&B("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(p(60));e.innerHTML=l}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}l=wa(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""+n):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":n===!0?e.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,n):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(l,n):e.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(l):e.setAttribute(l,n);break;case"popover":B("beforetoggle",e),B("toggle",e),Na(e,"popover",n);break;case"xlinkActuate":_t(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":_t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":_t(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":_t(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":_t(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":_t(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":_t(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":_t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":_t(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Na(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=ud.get(l)||l,Na(e,l,n))}}function ms(e,t,l,n,a,u){switch(l){case"style":V_(e,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(p(60));e.innerHTML=l}}break;case"children":typeof n=="string"?Il(e,n):(typeof n=="number"||typeof n=="bigint")&&Il(e,""+n);break;case"onScroll":n!=null&&B("scroll",e);break;case"onScrollEnd":n!=null&&B("scrollend",e);break;case"onClick":n!=null&&(e.onclick=pt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Q_.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(a=l.endsWith("Capture"),t=l.slice(2,a?l.length-7:void 0),u=e[Ue]||null,u=u!=null?u[l]:null,typeof u=="function"&&e.removeEventListener(t,u,a),typeof n=="function")){typeof u!="function"&&u!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,n,a);break e}l in e?e[l]=n:n===!0?e.setAttribute(l,""):Na(e,l,n)}}}function xe(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":B("error",e),B("load",e);var n=!1,a=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:k(e,t,u,i,l,null)}}a&&k(e,t,"srcSet",l.srcSet,l,null),n&&k(e,t,"src",l.src,l,null);return;case"input":B("invalid",e);var s=u=i=a=null,o=null,_=null;for(n in l)if(l.hasOwnProperty(n)){var y=l[n];if(y!=null)switch(n){case"name":a=y;break;case"type":i=y;break;case"checked":o=y;break;case"defaultChecked":_=y;break;case"value":u=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,t));break;default:k(e,t,n,y,l,null)}}G_(e,u,s,o,_,i,a,!1);return;case"select":B("invalid",e),n=i=u=null;for(a in l)if(l.hasOwnProperty(a)&&(s=l[a],s!=null))switch(a){case"value":u=s;break;case"defaultValue":i=s;break;case"multiple":n=s;default:k(e,t,a,s,l,null)}t=u,l=i,e.multiple=!!n,t!=null?Zl(e,!!n,t,!1):l!=null&&Zl(e,!!n,l,!0);return;case"textarea":B("invalid",e),u=a=n=null;for(i in l)if(l.hasOwnProperty(i)&&(s=l[i],s!=null))switch(i){case"value":n=s;break;case"defaultValue":a=s;break;case"children":u=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(p(91));break;default:k(e,t,i,s,l,null)}k_(e,n,a,u);return;case"option":for(o in l)if(l.hasOwnProperty(o)&&(n=l[o],n!=null))switch(o){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:k(e,t,o,n,l,null)}return;case"dialog":B("beforetoggle",e),B("toggle",e),B("cancel",e),B("close",e);break;case"iframe":case"object":B("load",e);break;case"video":case"audio":for(n=0;n<$n.length;n++)B($n[n],e);break;case"image":B("error",e),B("load",e);break;case"details":B("toggle",e);break;case"embed":case"source":case"link":B("error",e),B("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in l)if(l.hasOwnProperty(_)&&(n=l[_],n!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:k(e,t,_,n,l,null)}return;default:if(Rs(t)){for(y in l)l.hasOwnProperty(y)&&(n=l[y],n!==void 0&&ms(e,t,y,n,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(n=l[s],n!=null&&k(e,t,s,n,l,null))}function Dm(e,t,l,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,i=null,s=null,o=null,_=null,y=null;for(m in l){var g=l[m];if(l.hasOwnProperty(m)&&g!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":o=g;default:n.hasOwnProperty(m)||k(e,t,m,null,n,g)}}for(var r in n){var m=n[r];if(g=l[r],n.hasOwnProperty(r)&&(m!=null||g!=null))switch(r){case"type":u=m;break;case"name":a=m;break;case"checked":_=m;break;case"defaultChecked":y=m;break;case"value":i=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(p(137,t));break;default:m!==g&&k(e,t,r,m,n,g)}}Xi(e,i,s,o,_,y,u,a);return;case"select":m=i=s=r=null;for(u in l)if(o=l[u],l.hasOwnProperty(u)&&o!=null)switch(u){case"value":break;case"multiple":m=o;default:n.hasOwnProperty(u)||k(e,t,u,null,n,o)}for(a in n)if(u=n[a],o=l[a],n.hasOwnProperty(a)&&(u!=null||o!=null))switch(a){case"value":r=u;break;case"defaultValue":s=u;break;case"multiple":i=u;default:u!==o&&k(e,t,a,u,n,o)}t=s,l=i,n=m,r!=null?Zl(e,!!l,r,!1):!!n!=!!l&&(t!=null?Zl(e,!!l,t,!0):Zl(e,!!l,l?[]:"",!1));return;case"textarea":m=r=null;for(s in l)if(a=l[s],l.hasOwnProperty(s)&&a!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:k(e,t,s,null,n,a)}for(i in n)if(a=n[i],u=l[i],n.hasOwnProperty(i)&&(a!=null||u!=null))switch(i){case"value":r=a;break;case"defaultValue":m=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(p(91));break;default:a!==u&&k(e,t,i,a,n,u)}Z_(e,r,m);return;case"option":for(var v in l)if(r=l[v],l.hasOwnProperty(v)&&r!=null&&!n.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:k(e,t,v,null,n,r)}for(o in n)if(r=n[o],m=l[o],n.hasOwnProperty(o)&&r!==m&&(r!=null||m!=null))switch(o){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:k(e,t,o,r,n,m)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var A in l)r=l[A],l.hasOwnProperty(A)&&r!=null&&!n.hasOwnProperty(A)&&k(e,t,A,null,n,r);for(_ in n)if(r=n[_],m=l[_],n.hasOwnProperty(_)&&r!==m&&(r!=null||m!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(r!=null)throw Error(p(137,t));break;default:k(e,t,_,r,n,m)}return;default:if(Rs(t)){for(var w in l)r=l[w],l.hasOwnProperty(w)&&r!==void 0&&!n.hasOwnProperty(w)&&ms(e,t,w,void 0,n,r);for(y in n)r=n[y],m=l[y],!n.hasOwnProperty(y)||r===m||r===void 0&&m===void 0||ms(e,t,y,r,n,m);return}}for(var f in l)r=l[f],l.hasOwnProperty(f)&&r!=null&&!n.hasOwnProperty(f)&&k(e,t,f,null,n,r);for(g in n)r=n[g],m=l[g],!n.hasOwnProperty(g)||r===m||r==null&&m==null||k(e,t,g,r,n,m)}function Qc(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),n=0;n<l.length;n++){var a=l[n],u=a.transferSize,i=a.initiatorType,s=a.duration;if(u&&s&&Qc(i)){for(i=0,s=a.responseEnd,n+=1;n<l.length;n++){var o=l[n],_=o.startTime;if(_>s)break;var y=o.transferSize,g=o.initiatorType;y&&Qc(g)&&(o=o.responseEnd,i+=y*(o<s?1:(s-_)/(o-_)))}if(--n,t+=8*(u+i)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ys=null,gs=null;function hu(e){return e.nodeType===9?e:e.ownerDocument}function Lc(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $r(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ai=null;function wm(){var e=window.event;return e&&e.type==="popstate"?e===Ai?!1:(Ai=e,!0):(Ai=null,!1)}var Ir=typeof setTimeout=="function"?setTimeout:void 0,jm=typeof clearTimeout=="function"?clearTimeout:void 0,qc=typeof Promise=="function"?Promise:void 0,Bm=typeof queueMicrotask=="function"?queueMicrotask:typeof qc<"u"?function(e){return qc.resolve(null).then(e).catch(Hm)}:Ir;function Hm(e){setTimeout(function(){throw e})}function ll(e){return e==="head"}function Gc(e,t){var l=t,n=0;do{var a=l.nextSibling;if(e.removeChild(l),a&&a.nodeType===8)if(l=a.data,l==="/$"||l==="/&"){if(n===0){e.removeChild(a),sn(t);return}n--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")n++;else if(l==="html")Ln(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Ln(l);for(var u=l.firstChild;u;){var i=u.nextSibling,s=u.nodeName;u[ia]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&Ln(e.ownerDocument.body);l=a}while(l);sn(t)}function Zc(e,t){var l=e;e=0;do{var n=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=n}while(l)}function ps(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":ps(l),Hs(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Rm(e,t,l,n){for(;e.nodeType===1;){var a=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[ia])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Pe(e.nextSibling),e===null)break}return null}function Xm(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Pe(e.nextSibling),e===null))return null;return e}function Pr(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pe(e.nextSibling),e===null))return null;return e}function bs(e){return e.data==="$?"||e.data==="$~"}function vs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Qm(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var n=function(){t(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Pe(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xs=null;function kc(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Pe(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Vc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function e0(e,t,l){switch(t=hu(l),e){case"html":if(e=t.documentElement,!e)throw Error(p(452));return e;case"head":if(e=t.head,!e)throw Error(p(453));return e;case"body":if(e=t.body,!e)throw Error(p(454));return e;default:throw Error(p(451))}}function Ln(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Hs(e)}var et=new Map,Jc=new Set;function pu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yt=q.d;q.d={f:Lm,r:qm,D:Gm,C:Zm,L:km,m:Vm,X:Km,S:Jm,M:Wm};function Lm(){var e=Yt.f(),t=Ru();return e||t}function qm(e){var t=_n(e);t!==null&&t.tag===5&&t.type==="form"?Jf(t):Yt.r(e)}var mn=typeof document>"u"?null:document;function t0(e,t,l){var n=mn;if(n&&typeof t=="string"&&t){var a=We(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof l=="string"&&(a+='[crossorigin="'+l+'"]'),Jc.has(a)||(Jc.add(a),e={rel:e,crossOrigin:l,href:t},n.querySelector(a)===null&&(t=n.createElement("link"),xe(t,"link",e),me(t),n.head.appendChild(t)))}}function Gm(e){Yt.D(e),t0("dns-prefetch",e,null)}function Zm(e,t){Yt.C(e,t),t0("preconnect",e,t)}function km(e,t,l){Yt.L(e,t,l);var n=mn;if(n&&e&&t){var a='link[rel="preload"][as="'+We(t)+'"]';t==="image"&&l&&l.imageSrcSet?(a+='[imagesrcset="'+We(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(a+='[imagesizes="'+We(l.imageSizes)+'"]')):a+='[href="'+We(e)+'"]';var u=a;switch(t){case"style":u=un(e);break;case"script":u=yn(e)}et.has(u)||(e=ee({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),et.set(u,e),n.querySelector(a)!==null||t==="style"&&n.querySelector(ra(u))||t==="script"&&n.querySelector(da(u))||(t=n.createElement("link"),xe(t,"link",e),me(t),n.head.appendChild(t)))}}function Vm(e,t){Yt.m(e,t);var l=mn;if(l&&e){var n=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+We(n)+'"][href="'+We(e)+'"]',u=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=yn(e)}if(!et.has(u)&&(e=ee({rel:"modulepreload",href:e},t),et.set(u,e),l.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(da(u)))return}n=l.createElement("link"),xe(n,"link",e),me(n),l.head.appendChild(n)}}}function Jm(e,t,l){Yt.S(e,t,l);var n=mn;if(n&&e){var a=Gl(n).hoistableStyles,u=un(e);t=t||"default";var i=a.get(u);if(!i){var s={loading:0,preload:null};if(i=n.querySelector(ra(u)))s.loading=5;else{e=ee({rel:"stylesheet",href:e,"data-precedence":t},l),(l=et.get(u))&&zo(e,l);var o=i=n.createElement("link");me(o),xe(o,"link",e),o._p=new Promise(function(_,y){o.onload=_,o.onerror=y}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Za(i,t,n)}i={type:"stylesheet",instance:i,count:1,state:s},a.set(u,i)}}}function Km(e,t){Yt.X(e,t);var l=mn;if(l&&e){var n=Gl(l).hoistableScripts,a=yn(e),u=n.get(a);u||(u=l.querySelector(da(a)),u||(e=ee({src:e,async:!0},t),(t=et.get(a))&&Ao(e,t),u=l.createElement("script"),me(u),xe(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function Wm(e,t){Yt.M(e,t);var l=mn;if(l&&e){var n=Gl(l).hoistableScripts,a=yn(e),u=n.get(a);u||(u=l.querySelector(da(a)),u||(e=ee({src:e,async:!0,type:"module"},t),(t=et.get(a))&&Ao(e,t),u=l.createElement("script"),me(u),xe(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function Kc(e,t,l,n){var a=(a=qt.current)?pu(a):null;if(!a)throw Error(p(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=un(l.href),l=Gl(a).hoistableStyles,n=l.get(t),n||(n={type:"style",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=un(l.href);var u=Gl(a).hoistableStyles,i=u.get(e);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=a.querySelector(ra(e)))&&!u._p&&(i.instance=u,i.state.loading=5),et.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},et.set(e,l),u||Fm(a,e,l,i.state))),t&&n===null)throw Error(p(528,""));return i}if(t&&n!==null)throw Error(p(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=yn(l),l=Gl(a).hoistableScripts,n=l.get(t),n||(n={type:"script",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,e))}}function un(e){return'href="'+We(e)+'"'}function ra(e){return'link[rel="stylesheet"]['+e+"]"}function l0(e){return ee({},e,{"data-precedence":e.precedence,precedence:null})}function Fm(e,t,l,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),xe(t,"link",l),me(t),e.head.appendChild(t))}function yn(e){return'[src="'+We(e)+'"]'}function da(e){return"script[async]"+e}function Wc(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+We(l.href)+'"]');if(n)return t.instance=n,me(n),n;var a=ee({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),me(n),xe(n,"style",a),Za(n,l.precedence,e),t.instance=n;case"stylesheet":a=un(l.href);var u=e.querySelector(ra(a));if(u)return t.state.loading|=4,t.instance=u,me(u),u;n=l0(l),(a=et.get(a))&&zo(n,a),u=(e.ownerDocument||e).createElement("link"),me(u);var i=u;return i._p=new Promise(function(s,o){i.onload=s,i.onerror=o}),xe(u,"link",n),t.state.loading|=4,Za(u,l.precedence,e),t.instance=u;case"script":return u=yn(l.src),(a=e.querySelector(da(u)))?(t.instance=a,me(a),a):(n=l,(a=et.get(u))&&(n=ee({},l),Ao(n,a)),e=e.ownerDocument||e,a=e.createElement("script"),me(a),xe(a,"link",n),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(p(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(n=t.instance,t.state.loading|=4,Za(n,l.precedence,e));return t.instance}function Za(e,t,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,u=a,i=0;i<n.length;i++){var s=n[i];if(s.dataset.precedence===t)u=s;else if(u!==a)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function zo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ao(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ka=null;function Fc(e,t,l){if(ka===null){var n=new Map,a=ka=new Map;a.set(l,n)}else a=ka,n=a.get(l),n||(n=new Map,a.set(l,n));if(n.has(e))return n;for(n.set(e,null),l=l.getElementsByTagName(e),a=0;a<l.length;a++){var u=l[a];if(!(u[ia]||u[pe]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=e+i;var s=n.get(i);s?s.push(u):n.set(i,[u])}}return n}function $c(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function $m(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function n0(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Im(e,t,l,n){if(l.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(l.state.loading&4)){if(l.instance===null){var a=un(n.href),u=t.querySelector(ra(a));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=bu.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=u,me(u);return}u=t.ownerDocument||t,n=l0(n),(a=et.get(a))&&zo(n,a),u=u.createElement("link"),me(u);var i=u;i._p=new Promise(function(s,o){i.onload=s,i.onerror=o}),xe(u,"link",n),l.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&!(l.state.loading&3)&&(e.count++,l=bu.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Ti=0;function Pm(e,t){return e.stylesheets&&e.count===0&&Va(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var n=setTimeout(function(){if(e.stylesheets&&Va(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Ti===0&&(Ti=62500*Nm());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Va(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Ti?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function bu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Va(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vu=null;function Va(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vu=new Map,t.forEach(ey,e),vu=null,bu.call(e))}function ey(e,t){if(!(t.state.loading&4)){var l=vu.get(e);if(l)var n=l.get(null);else{l=new Map,vu.set(e,l);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var i=a[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),n=i)}n&&l.set(null,n)}a=t.instance,i=a.getAttribute("data-precedence"),u=l.get(i)||n,u===n&&l.set(null,a),l.set(i,a),this.count++,n=bu.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),u?u.parentNode.insertBefore(a,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Pn={$$typeof:ht,Provider:null,Consumer:null,_currentValue:_l,_currentValue2:_l,_threadCount:0};function ty(e,t,l,n,a,u,i,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ku(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ku(0),this.hiddenUpdates=Ku(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function a0(e,t,l,n,a,u,i,s,o,_,y,g){return e=new ty(e,t,l,i,o,_,y,g,s),t=1,u===!0&&(t|=24),u=je(3,null,null,t),e.current=u,u.stateNode=e,t=Ws(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:n,isDehydrated:l,cache:t},Is(u),e}function u0(e){return e?(e=Xl,e):Xl}function i0(e,t,l,n,a,u){a=u0(a),n.context===null?n.context=a:n.pendingContext=a,n=Zt(t),n.payload={element:l},u=u===void 0?null:u,u!==null&&(n.callback=u),l=kt(e,n,t),l!==null&&(Ce(l,e,t),Nn(l,e,t))}function Ic(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function To(e,t){Ic(e,t),(e=e.alternate)&&Ic(e,t)}function s0(e){if(e.tag===13||e.tag===31){var t=zl(e,67108864);t!==null&&Ce(t,e,67108864),To(e,67108864)}}function Pc(e){if(e.tag===13||e.tag===31){var t=Qe();t=js(t);var l=zl(e,t);l!==null&&Ce(l,e,t),To(e,t)}}var xu=!0;function ly(e,t,l,n){var a=E.T;E.T=null;var u=q.p;try{q.p=2,Eo(e,t,l,n)}finally{q.p=u,E.T=a}}function ny(e,t,l,n){var a=E.T;E.T=null;var u=q.p;try{q.p=8,Eo(e,t,l,n)}finally{q.p=u,E.T=a}}function Eo(e,t,l,n){if(xu){var a=Ss(n);if(a===null)zi(e,t,n,Su,l),e_(e,n);else if(uy(a,e,t,l,n))n.stopPropagation();else if(e_(e,n),t&4&&-1<ay.indexOf(e)){for(;a!==null;){var u=_n(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=sl(u.pendingLanes);if(i!==0){var s=u;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var o=1<<31-Xe(i);s.entanglements[1]|=o,i&=~o}ct(u),!(L&6)&&(fu=He()+500,fa(0))}}break;case 31:case 13:s=zl(u,2),s!==null&&Ce(s,u,2),Ru(),To(u,2)}if(u=Ss(n),u===null&&zi(e,t,n,Su,l),u===a)break;a=u}a!==null&&n.stopPropagation()}else zi(e,t,n,null,l)}}function Ss(e){return e=Xs(e),Oo(e)}var Su=null;function Oo(e){if(Su=null,e=Nl(e),e!==null){var t=la(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=E_(t),e!==null)return e;e=null}else if(l===31){if(e=O_(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Su=e,null}function o0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G0()){case U_:return 2;case D_:return 8;case $a:case Z0:return 32;case N_:return 268435456;default:return 32}default:return 32}}var zs=!1,Kt=null,Wt=null,Ft=null,ea=new Map,ta=new Map,Bt=[],ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function e_(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":ea.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(t.pointerId)}}function Sn(e,t,l,n,a,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:l,eventSystemFlags:n,nativeEvent:u,targetContainers:[a]},t!==null&&(t=_n(t),t!==null&&s0(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function uy(e,t,l,n,a){switch(t){case"focusin":return Kt=Sn(Kt,e,t,l,n,a),!0;case"dragenter":return Wt=Sn(Wt,e,t,l,n,a),!0;case"mouseover":return Ft=Sn(Ft,e,t,l,n,a),!0;case"pointerover":var u=a.pointerId;return ea.set(u,Sn(ea.get(u)||null,e,t,l,n,a)),!0;case"gotpointercapture":return u=a.pointerId,ta.set(u,Sn(ta.get(u)||null,e,t,l,n,a)),!0}return!1}function c0(e){var t=Nl(e.target);if(t!==null){var l=la(t);if(l!==null){if(t=l.tag,t===13){if(t=E_(l),t!==null){e.blockedOn=t,Ro(e.priority,function(){Pc(l)});return}}else if(t===31){if(t=O_(l),t!==null){e.blockedOn=t,Ro(e.priority,function(){Pc(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ja(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Ss(e.nativeEvent);if(l===null){l=e.nativeEvent;var n=new l.constructor(l.type,l);Li=n,l.target.dispatchEvent(n),Li=null}else return t=_n(l),t!==null&&s0(t),e.blockedOn=l,!1;t.shift()}return!0}function t_(e,t,l){Ja(e)&&l.delete(t)}function iy(){zs=!1,Kt!==null&&Ja(Kt)&&(Kt=null),Wt!==null&&Ja(Wt)&&(Wt=null),Ft!==null&&Ja(Ft)&&(Ft=null),ea.forEach(t_),ta.forEach(t_)}function Ca(e,t){e.blockedOn===t&&(e.blockedOn=null,zs||(zs=!0,fe.unstable_scheduleCallback(fe.unstable_NormalPriority,iy)))}var Ua=null;function l_(e){Ua!==e&&(Ua=e,fe.unstable_scheduleCallback(fe.unstable_NormalPriority,function(){Ua===e&&(Ua=null);for(var t=0;t<e.length;t+=3){var l=e[t],n=e[t+1],a=e[t+2];if(typeof n!="function"){if(Oo(n||l)===null)continue;break}var u=_n(l);u!==null&&(e.splice(t,3),t-=3,ns(u,{pending:!0,data:a,method:l.method,action:n},n,a))}}))}function sn(e){function t(o){return Ca(o,e)}Kt!==null&&Ca(Kt,e),Wt!==null&&Ca(Wt,e),Ft!==null&&Ca(Ft,e),ea.forEach(t),ta.forEach(t);for(var l=0;l<Bt.length;l++){var n=Bt[l];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Bt.length&&(l=Bt[0],l.blockedOn===null);)c0(l),l.blockedOn===null&&Bt.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var a=l[n],u=l[n+1],i=a[Ue]||null;if(typeof u=="function")i||l_(l);else if(i){var s=null;if(u&&u.hasAttribute("formAction")){if(a=u,i=u[Ue]||null)s=i.formAction;else if(Oo(a)!==null)continue}else s=i.action;typeof s=="function"?l[n+1]=s:(l.splice(n,3),n-=3),l_(l)}}}function _0(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),n||setTimeout(l,20)}function l(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Yo(e){this._internalRoot=e}Lu.prototype.render=Yo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(p(409));var l=t.current,n=Qe();i0(l,n,e,t,null,null)};Lu.prototype.unmount=Yo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;i0(e.current,2,null,e,null,null),Ru(),t[cn]=null}};function Lu(e){this._internalRoot=e}Lu.prototype.unstable_scheduleHydration=function(e){if(e){var t=R_();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Bt.length&&t!==0&&t<Bt[l].priority;l++);Bt.splice(l,0,e),l===0&&c0(e)}};var n_=A_.version;if(n_!=="19.2.4")throw Error(p(527,n_,"19.2.4"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=B0(t),e=e!==null?Y_(e):null,e=e===null?null:e.stateNode,e};var sy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{na=Da.inject(sy),Re=Da}catch{}}Au.createRoot=function(e,t){if(!T_(e))throw Error(p(299));var l=!1,n="",a=tr,u=lr,i=nr;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=a0(e,1,!1,null,null,l,n,null,a,u,i,_0),e[cn]=t.current,So(e),new Yo(t)};Au.hydrateRoot=function(e,t,l){if(!T_(e))throw Error(p(299));var n=!1,a="",u=tr,i=lr,s=nr,o=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(o=l.formState)),t=a0(e,1,!0,t,l??null,n,a,o,u,i,s,_0),t.context=u0(null),l=t.current,n=Qe(),n=js(n),a=Zt(n),a.callback=null,kt(l,a,n),l=n,t.current.lanes=l,ua(t,l),ct(t),e[cn]=t.current,So(e),new Lu(t)};Au.version="19.2.4";function f0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f0)}catch(e){console.error(e)}}f0(),h_.exports=Au;var oy=h_.exports,cy=`svg[fill=none] {
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
}`,_y={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",e.textContent=cy,document.head.appendChild(e))}var J=_y,fy=({size:e=24})=>b.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Ei="__agentation_freeze";function ry(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:t=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const e=window;return e[Ei]||(e[Ei]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[Ei]}var ge=ry();typeof window<"u"&&!ge.installed&&(ge.origSetTimeout=window.setTimeout.bind(window),ge.origSetInterval=window.setInterval.bind(window),ge.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,t,...l)=>typeof e=="string"?ge.origSetTimeout(e,t):ge.origSetTimeout((...n)=>{ge.frozen?ge.frozenTimeoutQueue.push(()=>e(...n)):e(...n)},t,...l),window.setInterval=(e,t,...l)=>typeof e=="string"?ge.origSetInterval(e,t):ge.origSetInterval((...n)=>{ge.frozen||e(...n)},t,...l),window.requestAnimationFrame=e=>ge.origRAF(t=>{ge.frozen?ge.frozenRAFQueue.push(e):e(t)}),ge.installed=!0);var Ol=ge.origSetTimeout;ge.origSetInterval;Q.forwardRef(function({element:t,timestamp:l,selectedText:n,placeholder:a="What should change?",initialValue:u="",submitLabel:i="Add",onSubmit:s,onCancel:o,onDelete:_,style:y,accentColor:g="#3c82f7",isExiting:r=!1,lightMode:m=!1,computedStyles:v},A){const[w,f]=Q.useState(u),[c,d]=Q.useState(!1),[h,z]=Q.useState("initial"),[M,x]=Q.useState(!1),[T,C]=Q.useState(!1),D=Q.useRef(null),Te=Q.useRef(null),Ge=Q.useRef(null),Mt=Q.useRef(null);Q.useEffect(()=>{r&&h!=="exit"&&z("exit")},[r,h]),Q.useEffect(()=>{Ol(()=>{z("enter")},0);const U=Ol(()=>{z("entered")},200),F=Ol(()=>{const Ze=D.current;Ze&&(Ze.focus(),Ze.selectionStart=Ze.selectionEnd=Ze.value.length,Ze.scrollTop=Ze.scrollHeight)},50);return()=>{clearTimeout(U),clearTimeout(F),Ge.current&&clearTimeout(Ge.current),Mt.current&&clearTimeout(Mt.current)}},[]);const ma=Q.useCallback(()=>{Mt.current&&clearTimeout(Mt.current),d(!0),Mt.current=Ol(()=>{var U;d(!1),(U=D.current)==null||U.focus()},250)},[]);Q.useImperativeHandle(A,()=>({shake:ma}),[ma]);const nl=Q.useCallback(()=>{z("exit"),Ge.current=Ol(()=>{o()},150)},[o]),S=Q.useCallback(()=>{w.trim()&&s(w.trim())},[w,s]),j=Q.useCallback(U=>{U.nativeEvent.isComposing||(U.key==="Enter"&&!U.shiftKey&&(U.preventDefault(),S()),U.key==="Escape"&&nl())},[S,nl]),N=[J.popup,m?J.light:"",h==="enter"?J.enter:"",h==="entered"?J.entered:"",h==="exit"?J.exit:"",c?J.shake:""].filter(Boolean).join(" ");return b.jsxs("div",{ref:Te,className:N,"data-annotation-popup":!0,style:y,onClick:U=>U.stopPropagation(),children:[b.jsxs("div",{className:J.header,children:[v&&Object.keys(v).length>0?b.jsxs("button",{className:J.headerToggle,onClick:()=>{const U=T;C(!T),U&&Ol(()=>{var F;return(F=D.current)==null?void 0:F.focus()},0)},type:"button",children:[b.jsx("svg",{className:`${J.chevron} ${T?J.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),b.jsx("span",{className:J.element,children:t})]}):b.jsx("span",{className:J.element,children:t}),l&&b.jsx("span",{className:J.timestamp,children:l})]}),v&&Object.keys(v).length>0&&b.jsx("div",{className:`${J.stylesWrapper} ${T?J.expanded:""}`,children:b.jsx("div",{className:J.stylesInner,children:b.jsx("div",{className:J.stylesBlock,children:Object.entries(v).map(([U,F])=>b.jsxs("div",{className:J.styleLine,children:[b.jsx("span",{className:J.styleProperty,children:U.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",b.jsx("span",{className:J.styleValue,children:F}),";"]},U))})})}),n&&b.jsxs("div",{className:J.quote,children:["“",n.slice(0,80),n.length>80?"...":"","”"]}),b.jsx("textarea",{ref:D,className:J.textarea,style:{borderColor:M?g:void 0},placeholder:a,value:w,onChange:U=>f(U.target.value),onFocus:()=>x(!0),onBlur:()=>x(!1),rows:2,onKeyDown:j}),b.jsxs("div",{className:J.actions,children:[_&&b.jsx("div",{className:J.deleteWrapper,children:b.jsx("button",{className:J.deleteButton,onClick:_,type:"button",children:b.jsx(fy,{size:22})})}),b.jsx("button",{className:J.cancel,onClick:nl,children:"Cancel"}),b.jsx("button",{className:J.submit,style:{backgroundColor:g,opacity:w.trim()?1:.4},onClick:S,disabled:!w.trim(),children:i})]})]})});var dy=`svg[fill=none] {
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
}`;if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",e.textContent=dy,document.head.appendChild(e))}const my="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAsQSURBVHgB7Z1tbFtXGcefc339kjjJnDZr8+KkTksHSYuSbuvKyhgJb9VWUJMJrV8mpaHwASb6JkElQJRKm5iERFoh8QXROkj7MD60KUIIBKgZA01Uok0HTYqoqNskTdelrZsXx3Gu79nzXMfXdmI71/fFjhv/pJt7j4/vtf33yXOec55zHzMoIDdv3vTMOW0dAIKPc2hjDHz4sE+p5It77QRxCwCDIF4rgNe6yhgfcoWloebm5iAUCAZ5hAQNu8R2HmX7QIAuHSLqZYjjxph8obW+aQDySF4EHpkY7ZBl1oMv1oVFDxSWIIo9IAi8v6WucRAsxjKBY63VcZjL/AgUXtRMBNCcnNzm9frBIkwXuEiEXQrZ7tOt9d5TYDKmCjx8+3YXiEJfHm2r2Zjeok0ReGRiAr2A6FkUtgMeBxgbYEw42lJXFwCDCGCQ63fvoDmIXnlsxCU476LPdG1s7AAYRHcLjvmw9hMo7BF4nGFwCm3zUdCJLoEVkyBHz+NhO6wNhphg69ZjMnIWeNHeXjSzI5uemgIzcDid4MTNIgIocmeuIucksFXivvKVPTD96BEY5cdv/RRe3rcPLCRnkUWtT7RC3Dgk7pQJrTgyPw8WQ6bxImqhWWRNXoSV4hYhcZF9Wp6sqQUvdmg+0Mn46Chcev/9tHWSJMGGjRth3bp1YJRrH3yAbSA9DY2N8Nzzz4NJKJ08elKdK83UrSjw8J0xGpkZ8hauDw/DD48eS1tnt9th7969yt4o/7g4CG+f9aet697/qpkCE+2KmwqQ1YXLaiIUR/tx93ONgNpgA8yqT0aBycbgpHUflMgOhxPZ7HFGN234zvh5GjKCTg4d/KZ6LEejMB8KpX0ew2+xtrZW2RslGAxCKMPr2NE/Fh0OtXzw9e9A29NPgykwGMTRXmf6qjSQacDPexYM0NrgVY8bGhpg9+7dUEhu3boFly5dUsu/OPNr+OKePWAaUbm7tWl5tCStiWACnIASuWET+mh+ZunDywSm2bGSv6sLX8ghLuvwlgksy/Jj6TVwzsFqGLDDS1txisCLbpkPSujFs7QVpwhcsr3GoVacXFZHchRa57L+1nv18mWY/OgjtVxdXa0eu1yujO5TviA3MPk9jfz7Pyn1JnoUnpHR0Y6WxtiSANVNuzY+fpYBPwA6+e7Bg/DXP/5JLe/cuRNWMzdu3ICHDx+q5eHxMTALFNXf0uDtpWMh8aD+QUWJVLA77Yp3dorASri9eNYwFAOesCgqE2SKDeY22z4G1rkxDhyiVlVVqeWZmRkIh8PKMdlGmqqMD5XpcaqPQ+c5koa4k5OTplzXajhTlokNxjo5ztutXKUmiiJUVFSo5bgIBAngdrtBEBIOTbIQ1EGWl5er5WSBjVzXchij2NUR4QraCnwvayU6nE98ZIdFFy0nlcF0klsOtSYcIaatp32mOoJGYMn1Zl3XjNm7lYg4bR0i58yS1uv1JmbT5ubmYGws4QaRbYyHiEiEu3fvqmKQOUg+9/79+8pm9nVHMYxlNVEQfCK+g3YawpmN1pZGUF2mVqq3Ba903Xy0YMahTcBX3QQlLAE9CZ+I9tdjxpf54rNNUOf8tFre2VapHkciTpiasqll6vnJO1DeBL6LR/VuiE92uZwuqKhMeAZTXg9EFhLrHWpqahLXnY/A1PT6xHXdleAqcy5eV4bJxihgG45dF18v2ePYWN6MERDjkeys4MSZuHjjiWFef+0ZKI9UZ3lGfdpHGbeBPfSUsjcVFoVIeRm2omiGJ9SklAJgDWSUSiM46/CZ37uVSEHz2rSluBbGoCo8tFhi4JTuaj7XtrAe/4PdyjH54B9OTmPMMP1QfX2VG+2yQ9N1H07PQigcib8l4ALZ3Nh1XRULULluLuO5G6Z/rx7Pi7XwqOxZMAPdAovRabS5/wc9MNkFNik2hyCjsDOheyBnCOk8UVEOWpmPSDA7l7wAMLFaiIkyVGY5V+9nWYmSibCYksAWo9tE5IKA5sAebkpf53DCU68cwncSs7N+vx96e3vV+nNvHYZ9Lz4DWqh77iWo37BFOaZVPs3Nzco+He+c6oavfWErWE2pBVtMSWCLscxExL0EgsllmZ+Ifhp/iDNitliP73vCBl1JJqF2vfZxEA9hEPNBbJbMhpPre3e3weziJHtgYhKG/ncL8g3DaKquWFFFeARqZv+csd45sx1WE/1/eA++8cav1HI2GxxybIZ7lV8FMyiZCIsRcMQTgBJWEbTMBif/O7ZvbYJD+01ci1s8BEjgAID5C/7I5sV5hJ3WmhSYQZAig/nvWtcIGDLCFiwIQzjh1ANFQnA68yJCl8OOM2/GbwczCwzWXBVBkgNgKx5nYsvXj2Ws++X3emH/l3bBaoFF+ZA4H40OOotI4GwtOByJwGrCJUlDwg66FbTkqlmBkhBPcdNw0vuCwFJXZq+EZKuCGWeLWnYtjIMom5P3IRs9L38uY52v7knQS/JniYj6rxMHAypKuEcR2MZhAA1yTgKH7Q3KFodCLmLEeoHP/OhbYAWTFV8GMxGYfEHZ058w2gqI5X4sYQ7BTy6mcFQEVuwwjylewjhoHtQ7PtWhMuPMj2ai4P7w365ch9O/Tdzrcfz4cdi16zPaTp4YAT71oaanUtT4XuULYAky748fqgLTXTE4dUlmoqALUW7ivO3Au/9Syz1H7MDWNWo6lytzwdoEnrfX4rTkFrCAQPwOIyLFAebAT0MJQ+Dw+GRyOUXgSESi5JiF7exYbGlpfMsF62+WXZFAy5K8lykCU2entxVTBCCw/pC66aXnpRdA+nu/uvX3vaGs69Wy/aa/HwoKh2XaLRsjK6240CM7lrRBbBG2lq3ABFq9y9PjLhNYcdkkWXeuxrXKUtsbJ21EgzJ3DN8ZG1wNGVV3bdfe0/vqaqAgMDbQ0tDgT1clZj7H1st59AoU2G37/mvmRHctJEi5hjNVZpynVFIHZmj2JRKgaciayDnrRDAZbZxpK/nGmUBtWlZIR75iVHlBkn7icNg/z4osV3A4sgDHTr8N4fkFpbyheSu82fdztf5T27aBQYZaGxtXTL+zosDkVYxMTHQXW3JQEvidv/wTIyCzSrl7fx28+YNXwSQozW23lidqihWRjcFOr7MU+VDIKYew5oUndEHKm8vB2pZM/9LU+owSnAlBZVUVyCx2e5jTYUpmbOsSNBP5EPl3712Gb//MD0Yhcc+cOwdVVU8oZYfx1OO6UoznvHQqLrLMo+et6PjmMDIct5tGiGLLJXErkxJ2GEB3knxd8Xp6oW0N3h1rwoXDz1gWWejUIy5haPHfdnRTRsbGhjAS0lfucHrstsTtsD09ieBIW5P2e4I3bdqUcu7s/DxE5dwTWjhcTnAYs7tBGmihK2bo941M+6mdpurqvnKnM23mKv7gNvD/vguaeHIzCJ/4rFocfTAJM2HLk9+nwmCQpgpWxU/tEPRG3C4X+YV0e1AAipeAkqa23ttphriEqWumMALhx60ZYnnNA1A8BLnMT6Kt3ZEuB7ARLE37IUnSAYw0nOCRkI/NPkhUJEd/bSKwzbvwq46tiuQONzB3Ii1CCL2K5Mn00Qf3wURI2NPlknTKqt/9tPRGRFEU/bjzo0Ad4HQfwGNKdeVJif4yAZjHq96IuPQbd5v/0zmxn5zE0Hpy9Ncq8nKnJ5qNQdzRRq2xS5bmulDWNgz05GcCiYb4UX6BFoTQikerWms68iJwMig22TjFzvErZz2SZGunxHjYGbRB7FYGT9I+hwurNj8Q/9lfWvtcFo0O5lPQpXwMqNZ1Y7Gza4oAAAAASUVORK5CYII=",yy="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_3508_29716'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='72'%20height='72'%3e%3crect%20width='72'%20height='72'%20rx='19.6364'%20fill='%23F9FBFD'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_3508_29716)'%3e%3crect%20x='-0.203125'%20width='72.2024'%20height='72'%20rx='19.6364'%20fill='%23199B61'/%3e%3cpath%20d='M18.3262%2034.8875C19.1522%2034.8875%2019.9392%2035.054%2020.6562%2035.3542C20.5336%2035.97%2020.4688%2036.6068%2020.4688%2037.2585C20.4688%2039.9795%2021.5909%2042.4379%2023.3955%2044.2C22.32%2045.8613%2020.4526%2046.9616%2018.3262%2046.9617C14.9919%2046.9617%2012.2891%2044.2588%2012.2891%2040.9246C12.2892%2037.5905%2014.992%2034.8875%2018.3262%2034.8875ZM30.1719%2027.5564C31.7294%2027.5564%2033.2006%2027.9256%2034.5049%2028.5779C33.809%2030.1812%2033.4229%2031.9501%2033.4229%2033.8093C33.4229%2037.6214%2035.0445%2041.0546%2037.6357%2043.4568C35.8561%2045.5978%2033.1735%2046.9616%2030.1719%2046.9617C27.5348%2046.9613%2025.1445%2045.9077%2023.3955%2044.2C24.0064%2043.2563%2024.3633%2042.1324%2024.3633%2040.9246C24.3631%2038.4165%2022.8334%2036.266%2020.6562%2035.3542C21.5417%2030.9083%2025.466%2027.557%2030.1719%2027.5564ZM46.5752%2020.657C53.8388%2020.6572%2059.7274%2026.5457%2059.7275%2033.8093C59.7275%2041.0731%2053.8389%2046.9615%2046.5752%2046.9617C43.1234%2046.9617%2039.9821%2045.632%2037.6357%2043.4568C39.0331%2041.7756%2039.874%2039.6155%2039.874%2037.2585C39.8737%2033.4579%2037.6877%2030.1696%2034.5049%2028.5779C36.5278%2023.9173%2041.1707%2020.657%2046.5752%2020.657Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",gy="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_3525_29046'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='72'%20height='72'%3e%3crect%20width='72'%20height='72'%20rx='19.6364'%20fill='%23F9FBFD'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_3525_29046)'%3e%3crect%20x='-0.203125'%20width='72.2024'%20height='72'%20rx='19.6364'%20fill='black'/%3e%3cpath%20d='M17%2041.655C17%2040.7028%2017.7719%2039.9309%2018.7241%2039.9309H33.3793V54.9999H18.7241C17.7719%2054.9999%2017%2054.228%2017%2053.2758V41.655Z'%20fill='white'/%3e%3cpath%20d='M33.3789%2039.9309H53.2755C54.2277%2039.9309%2054.9996%2040.7028%2054.9996%2041.655V53.2758C54.9996%2054.228%2054.2277%2054.9999%2053.2755%2054.9999H49.1267C48.1793%2054.9999%2047.2736%2054.6101%2046.6224%2053.9221L33.3789%2039.9309Z'%20fill='white'/%3e%3cpath%20d='M17%2018.7241C17%2017.7719%2017.7719%2017%2018.7241%2017H31.6552C32.6074%2017%2033.3793%2017.7719%2033.3793%2018.7241V39.9311L17.9881%2024.26C17.3548%2023.6152%2017%2022.7476%2017%2021.8438V18.7241Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",hy="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='72'%20height='72'%20fill='%235A6CFA'/%3e%3cpath%20d='M55.9971%2016.083C55.3509%2016.8041%2054.8456%2017.4047%2054.4053%2017.9902C46.1927%2028.9102%2046.3675%2043.9931%2054.8311%2054.7197C55.1835%2055.1664%2055.5764%2055.6201%2056.0439%2056.1318C55.1066%2055.2937%2054.3402%2054.6578%2053.5869%2054.1152C43.0827%2046.5503%2028.9173%2046.5503%2018.4131%2054.1152C17.6596%2054.6579%2016.8927%2055.2935%2015.9551%2056.1318C16.4229%2055.6199%2016.8164%2055.1665%2017.1689%2054.7197C25.6325%2043.9931%2025.8073%2028.9102%2017.5947%2017.9902C17.1543%2017.4046%2016.6484%2016.8043%2016.002%2016.083C16.5084%2016.544%2016.9591%2016.9328%2017.4023%2017.2812C28.3165%2025.8602%2043.6835%2025.8602%2054.5977%2017.2812C55.0408%2016.9329%2055.4909%2016.5438%2055.9971%2016.083Z'%20fill='url(%23paint0_linear_3525_29032)'%20stroke='url(%23paint1_linear_3525_29032)'%20stroke-width='0.28125'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_3525_29032'%20x1='36'%20y1='11.7422'%20x2='36'%20y2='60.2578'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_3525_29032'%20x1='36'%20y1='11.7422'%20x2='36'%20y2='48.4453'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",As="/portfolio/assets/Group%20427318942-D_-q_n6o.png",Ts="/portfolio/assets/Group%20427318941-D5mVX3q2.png",py={slug:"rive-marketing-template-engine",date:"JULY 2020",title:"How Rive Became Our Marketing Template Engine",description:"Making sure mobile device works across all different devices available on the market. Easy way.",image:As,blogPost:{intro:["For a long time, I had a love–hate relationship with Adobe After Effects.","I loved what it could do. The polish. The control. The cinematic results.","But I hated the workflow.","","Every small change meant re-rendering. Every new size meant duplicating compositions. Every campaign variant meant exporting the same asset 50–100 times. The results were great — but the time-to-effect was painfully high. In a high-pace startup environment, that's a serious problem.","","Eventually, I became the bottleneck.","","I was usually the only person who could handle rendering, exporting, and troubleshooting. My time was too valuable to spend pushing pixels through export queues.","Something had to change."],sections:[{image:As,heading:"The Shift: From Rendered Video to Interactive Systems",body:["That shift came with Rive.","What immediately stood out was its component system — something that felt very familiar coming from Figma. Instead of thinking in rendered timelines, I started thinking in reusable systems.","","In After Effects, every variant meant: duplicate comp → update text → re-render → repeat.","","In Rive, the workflow became: create a template → expose inputs → let others generate variations.","","That difference is massive. It moved us from a render-on-demand model to a self-service model. Anyone on the team could now produce a polished animation by filling in a few fields."]},{image:Ts,heading:"Building the System",body:["The first template we built was a product launch animation — a looping background for social ads. It had three inputs: headline text, accent color, and logo.","","We connected it to a simple Notion table. Marketing filled in the fields. The Rive file did the rest. We went from a 3-day turnaround to under an hour.","","From there we expanded the system: announcement cards, tutorial overlays, event banners. Each one built on the same reusable component structure.","","The result is a library that compounds in value over time. Every new template makes the next one faster to build. Every input added makes the system more flexible without increasing complexity."]}]}},by={slug:"scalable-multi-device-mobile-system",date:"JULY 2020",title:"Creating scalable multi-device mobile system.",description:"Making sure mobile device works across all different devices available on the market. Easy way.",image:Ts,blogPost:{intro:["Designing for mobile used to mean designing for one screen. Then two. Now it means designing for hundreds of device configurations — different sizes, densities, aspect ratios, and notch placements.","","The old approach was to design for the most popular device and hope the edges held. That worked when the spread was narrow. It doesn't work anymore.","","We needed a system, not a set of artboards."],sections:[{image:Ts,heading:"Starting with Constraints, Not Pixels",body:["The shift started when we stopped thinking in fixed pixel dimensions and started thinking in constraints.","","Instead of: 'this card is 375px wide', we asked: 'what is this card relative to?'. The answer was almost always: relative to its container, with some minimum and maximum bounds.","","That reframe changes everything. Components become adaptive by default. Edge cases shrink because the system accounts for them structurally, not as one-off overrides.","","We built our component library on top of auto-layout in Figma, then mapped those constraints directly to SwiftUI and Jetpack Compose primitives. The design file became a near-direct translation to code."]},{image:As,heading:"Testing Across the Matrix",body:["Having a constraint-based system is necessary but not sufficient. You still need to validate it.","","We set up a device matrix: 6 iOS sizes × 3 Android families, covering the 90th percentile of our users. Every major screen gets tested on all of them before shipping.","","The wins were immediate. We caught a nav bar clipping issue on SE-class devices that would have affected 12% of our iOS users. We found a scroll bounce inconsistency on Android that caused layout shifts during momentum scroll.","","None of these would have surfaced in a single-device design review. The matrix made them unavoidable."]}]}},Mo={name:"Your Name",siteUrl:"https://goksiuta.github.io/portfolio/",avatarUrl:my,text:"Current Lead Product Designer @ Layer3. Founder of Talebook–research repository app."},vy=[{name:"Ample",description:"A new way to amplify your money.",icon:yy,url:"#"},{name:"Layer3",description:"Discover onchain finance with one app.",icon:gy,url:"#"},{name:"Mellow",description:"Parenting coach mobile app.",icon:hy,url:"#"}],r0=[py,by];function xy(){return b.jsx("header",{className:"mb-12",children:b.jsx("p",{className:"text-[26px] leading-relaxed text-gray-900 max-w-[671px]",children:Mo.text})})}function Sy(){return b.jsxs("section",{className:"mb-12",children:[b.jsx("h2",{className:"text-[24px] font-normal text-gray-900 mb-4 pb-4 border-b border-[#F2F2F2]",children:"Projects"}),b.jsx("div",{className:"flex flex-col gap-2",children:vy.map(e=>b.jsx("a",{href:e.url,className:"block group hover:bg-[#F9FBFD] active:bg-[#F2F5F7] rounded-[20px] px-[8px] py-[8px] -mx-[8px] transition-colors",children:b.jsxs("div",{className:"flex items-center gap-8",children:[b.jsx("img",{src:e.icon,alt:`${e.name} logo`,className:"w-[64px] h-[64px] rounded-[20px] shrink-0 object-cover group-active:scale-[0.95] transition-transform"}),b.jsxs("div",{className:"flex-1",children:[b.jsx("h3",{className:"text-[18px] font-normal text-gray-900 group-hover:text-gray-600 transition-colors",children:e.name}),b.jsx("p",{className:"text-[16px] text-gray-400",children:e.description})]}),b.jsx("span",{className:"text-gray-300 text-[18px] shrink-0 group-hover:text-gray-400 transition-colors",children:"›"})]})},e.name))})]})}function zy({onSelect:e}){return b.jsxs("section",{children:[b.jsx("h2",{className:"text-[24px] font-normal text-gray-900 mb-4 pb-4 border-b border-[#F2F2F2]",children:"Thoughts"}),b.jsx("div",{className:"flex flex-col gap-2",children:r0.map((t,l)=>b.jsx("button",{onClick:()=>e(t),className:"block text-left w-full group hover:bg-[#F9FBFD] active:bg-[#F2F5F7] rounded-[20px] px-[8px] py-[16px] -mx-[8px] transition-colors",children:b.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 sm:gap-8",children:[b.jsx("span",{className:"text-xs font-normal tracking-wider text-gray-400 uppercase shrink-0 sm:w-[64px] sm:pt-1",children:t.date}),b.jsxs("div",{className:"w-full sm:w-[420px] shrink-0",children:[b.jsx("h3",{className:"text-[18px] font-normal text-gray-900 leading-snug group-hover:text-gray-600 transition-colors",children:t.title}),b.jsx("p",{className:"mt-2 text-[16px] text-gray-400 leading-relaxed",children:t.description})]}),t.image?b.jsx("img",{src:t.image,alt:t.title,className:"w-full sm:flex-1 h-36 bg-gray-100 rounded-xl object-cover group-active:scale-[0.95] transition-transform"}):b.jsx("div",{className:"w-full sm:flex-1 h-36 bg-gray-100 rounded-xl"})]})},l))})]})}function Ay({thought:e}){const t=e.blogPost;return Q.useEffect(()=>{window.scrollTo(0,0)},[]),b.jsx("div",{className:"bg-white",children:b.jsxs("div",{className:"max-w-[920px] mx-auto px-6 pb-24 flex flex-col items-center gap-[34px]",children:[b.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-[673px]",children:[b.jsx("p",{className:"text-[12px] font-medium tracking-[0.48px] uppercase text-[#73838a]",children:e.date}),b.jsx("h1",{className:"text-[26px] font-normal text-black leading-[1.371]",children:e.title})]}),(t==null?void 0:t.intro)&&b.jsx("div",{className:"w-full max-w-[673px] text-[20px] text-[#404245] leading-[30px]",children:t.intro.map((l,n)=>l===""?b.jsx("p",{className:"mt-[30px]"},n):b.jsx("p",{children:l},n))}),t==null?void 0:t.sections.map((l,n)=>b.jsxs("div",{className:"w-full flex flex-col items-center gap-[34px]",children:[l.image&&b.jsx("div",{className:"w-full rounded-2xl overflow-hidden bg-[#f2f5f7] h-[486px]",children:b.jsx("img",{src:l.image,alt:"",className:"w-full h-full object-cover"})}),(l.heading||l.body.length>0)&&b.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-[673px]",children:[l.heading&&b.jsx("h2",{className:"text-[24px] font-normal text-black leading-[1.371]",children:l.heading}),b.jsx("div",{className:"text-[20px] text-[#404245] leading-[30px]",children:l.body.map((a,u)=>a===""?b.jsx("p",{className:"mt-[30px]"},u):b.jsx("p",{children:a},u))})]})]},n))]})})}function re(e,t,l){let n=document.querySelector(`meta[${e}="${t}"]`);n||(n=document.createElement("meta"),n.setAttribute(e,t),document.head.appendChild(n)),n.content=l}function a_(e){let t=document.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.rel="canonical",document.head.appendChild(t)),t.href=e}function u_(e){let t=document.querySelector('script[type="application/ld+json"]');t||(t=document.createElement("script"),t.type="application/ld+json",document.head.appendChild(t)),t.textContent=JSON.stringify(e)}function Ty(e){Q.useEffect(()=>{const{name:t,siteUrl:l,text:n}=Mo;if(e){const a=`${l}${e.slug}`,u=e.image?`${window.location.origin}${e.image}`:void 0;document.title=`${e.title} — ${t}`,re("name","description",e.description),re("property","og:type","article"),re("property","og:title",e.title),re("property","og:description",e.description),re("property","og:url",a),u&&re("property","og:image",u),re("name","twitter:card",u?"summary_large_image":"summary"),re("name","twitter:title",e.title),re("name","twitter:description",e.description),u&&re("name","twitter:image",u),a_(a),u_({"@context":"https://schema.org","@type":"Article",headline:e.title,description:e.description,author:{"@type":"Person",name:t},url:a,...u?{image:u}:{}})}else{const a=`${t} — Product Designer`;document.title=a,re("name","description",n),re("property","og:type","website"),re("property","og:title",a),re("property","og:description",n),re("property","og:url",l),re("name","twitter:card","summary"),re("name","twitter:title",a),re("name","twitter:description",n),a_(l),u_({"@context":"https://schema.org","@type":"Person",name:t,url:l,jobTitle:"Lead Product Designer",sameAs:["https://github.com/goksiuta"]})}},[e])}const i_=140,Es="/portfolio/",Ey=()=>b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{d:"M13 8H3M3 8L7 4M3 8L7 12",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})});function Oi(e,t){"startViewTransition"in document?document.startViewTransition(()=>z_.flushSync(e)):e()}function s_(){const e=window.location.pathname.slice(Es.length).replace(/\/$/,"");return r0.find(t=>t.slug===e)??null}function Oy(){const[e,t]=Q.useState(s_);Ty(e);const[l,n]=Q.useState(!1),a=Q.useRef(!1),u=Q.useRef(null),i=Q.useRef(null);Q.useEffect(()=>{const _=e?`${Es}${e.slug}`:Es;window.location.pathname!==_&&window.history.pushState(null,"",_)},[e]),Q.useEffect(()=>{const _=()=>{const y=s_();y?t(y):Oi(()=>{window.scrollTo(0,0),t(null)})};return window.addEventListener("popstate",_),()=>window.removeEventListener("popstate",_)},[]),Q.useEffect(()=>{if(e){n(!1),a.current=!1;return}const _=()=>{var g;const y=window.scrollY>100;y!==a.current&&(a.current=y,i.current=((g=u.current)==null?void 0:g.getBoundingClientRect())??null,n(y))};return window.addEventListener("scroll",_,{passive:!0}),_(),()=>window.removeEventListener("scroll",_)},[e]);const s=!!e||l;Q.useLayoutEffect(()=>{const _=u.current,y=i.current;if(i.current=null,!_||!y||e)return;const g=_.getBoundingClientRect(),r=y.left-g.left,m=y.top-g.top;if(Math.abs(r)<1&&Math.abs(m)<1)return;_.style.transition="none",_.style.transform=`translate(${r}px, ${m}px)`,_.getBoundingClientRect(),_.style.transition="transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",_.style.transform="";const v=()=>{_.style.transition="",_.style.transform=""};_.addEventListener("transitionend",v,{once:!0})},[s]);const o=()=>{document.querySelectorAll("[style*='view-transition-name']").forEach(_=>{_.style.viewTransitionName="none"}),Oi(()=>{window.scrollTo(0,0),t(null)})};return b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:s?"fixed top-8 left-9 z-50 flex items-center gap-4":"max-w-[920px] mx-auto px-6 pt-16 pb-5 flex items-center gap-4",children:[b.jsx("img",{ref:u,src:Mo.avatarUrl,alt:"Avatar",onClick:e?o:void 0,className:`w-14 h-14 rounded-2xl shrink-0 avatar-img${e?" cursor-pointer hover:opacity-80 transition-opacity":""}`}),e&&b.jsxs("button",{onClick:o,className:"flex items-center gap-[13px] text-[16px] text-black blog-nav-enter hover:opacity-60 transition-opacity bg-white/90 backdrop-blur-xl rounded-2xl px-3 py-2 border border-white/60 shadow-sm",children:[b.jsx(Ey,{}),b.jsx("span",{children:"All Thoughts"})]})]}),e?b.jsx("div",{style:{paddingTop:i_},children:b.jsx(Ay,{thought:e})}):b.jsxs("main",{className:"max-w-[920px] mx-auto px-6 pb-16",style:{paddingTop:l?i_:void 0},children:[b.jsx("div",{className:"fade-in-section",style:{animationDelay:"0s"},children:b.jsx(xy,{})}),b.jsx("div",{className:"fade-in-section",style:{animationDelay:"0.15s"},children:b.jsx(Sy,{})}),b.jsx("div",{id:"thoughts",className:"fade-in-section",style:{animationDelay:"0.3s"},children:b.jsx(zy,{onSelect:_=>Oi(()=>t(_))})})]}),!1]})}oy.createRoot(document.getElementById("root")).render(b.jsx(Q.StrictMode,{children:b.jsx(Oy,{})}));

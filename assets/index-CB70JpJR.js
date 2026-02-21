(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const i of u.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(a){if(a.ep)return;a.ep=!0;const u=l(a);fetch(a.href,u)}})();var l_={exports:{}},Su={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=Symbol.for("react.transitional.element"),o0=Symbol.for("react.fragment");function n_(t,e,l){var n=null;if(l!==void 0&&(n=""+l),e.key!==void 0&&(n=""+e.key),"key"in e){l={};for(var a in e)a!=="key"&&(l[a]=e[a])}else l=e;return e=l.ref,{$$typeof:s0,type:t,key:n,ref:e!==void 0?e:null,props:l}}Su.Fragment=o0;Su.jsx=n_;Su.jsxs=n_;l_.exports=Su;var b=l_.exports,a_={exports:{}},O={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var As=Symbol.for("react.transitional.element"),c0=Symbol.for("react.portal"),_0=Symbol.for("react.fragment"),f0=Symbol.for("react.strict_mode"),r0=Symbol.for("react.profiler"),d0=Symbol.for("react.consumer"),m0=Symbol.for("react.context"),y0=Symbol.for("react.forward_ref"),g0=Symbol.for("react.suspense"),h0=Symbol.for("react.memo"),u_=Symbol.for("react.lazy"),p0=Symbol.for("react.activity"),Eo=Symbol.iterator;function b0(t){return t===null||typeof t!="object"?null:(t=Eo&&t[Eo]||t["@@iterator"],typeof t=="function"?t:null)}var i_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s_=Object.assign,o_={};function sn(t,e,l){this.props=t,this.context=e,this.refs=o_,this.updater=l||i_}sn.prototype.isReactComponent={};sn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};sn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function c_(){}c_.prototype=sn.prototype;function Ts(t,e,l){this.props=t,this.context=e,this.refs=o_,this.updater=l||i_}var Es=Ts.prototype=new c_;Es.constructor=Ts;s_(Es,sn.prototype);Es.isPureReactComponent=!0;var Oo=Array.isArray;function Ei(){}var P={H:null,A:null,T:null,S:null},__=Object.prototype.hasOwnProperty;function Os(t,e,l){var n=l.ref;return{$$typeof:As,type:t,key:e,ref:n!==void 0?n:null,props:l}}function v0(t,e){return Os(t.type,e,t.props)}function Ys(t){return typeof t=="object"&&t!==null&&t.$$typeof===As}function x0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(l){return e[l]})}var Yo=/\/+/g;function qu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?x0(""+t.key):e.toString(36)}function S0(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Ei,Ei):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Ol(t,e,l,n,a){var u=typeof t;(u==="undefined"||u==="boolean")&&(t=null);var i=!1;if(t===null)i=!0;else switch(u){case"bigint":case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case As:case c0:i=!0;break;case u_:return i=t._init,Ol(i(t._payload),e,l,n,a)}}if(i)return a=a(t),i=n===""?"."+qu(t,0):n,Oo(a)?(l="",i!=null&&(l=i.replace(Yo,"$&/")+"/"),Ol(a,e,l,"",function(f){return f})):a!=null&&(Ys(a)&&(a=v0(a,l+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(Yo,"$&/")+"/")+i)),e.push(a)),1;i=0;var s=n===""?".":n+":";if(Oo(t))for(var o=0;o<t.length;o++)n=t[o],u=s+qu(n,o),i+=Ol(n,e,l,u,a);else if(o=b0(t),typeof o=="function")for(t=o.call(t),o=0;!(n=t.next()).done;)n=n.value,u=s+qu(n,o++),i+=Ol(n,e,l,u,a);else if(u==="object"){if(typeof t.then=="function")return Ol(S0(t),e,l,n,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return i}function ga(t,e,l){if(t==null)return t;var n=[],a=0;return Ol(t,n,"","",function(u){return e.call(l,u,a++)}),n}function z0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(l){(t._status===0||t._status===-1)&&(t._status=1,t._result=l)},function(l){(t._status===0||t._status===-1)&&(t._status=2,t._result=l)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},A0={map:ga,forEach:function(t,e,l){ga(t,function(){e.apply(this,arguments)},l)},count:function(t){var e=0;return ga(t,function(){e++}),e},toArray:function(t){return ga(t,function(e){return e})||[]},only:function(t){if(!Ys(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};O.Activity=p0;O.Children=A0;O.Component=sn;O.Fragment=_0;O.Profiler=r0;O.PureComponent=Ts;O.StrictMode=f0;O.Suspense=g0;O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P;O.__COMPILER_RUNTIME={__proto__:null,c:function(t){return P.H.useMemoCache(t)}};O.cache=function(t){return function(){return t.apply(null,arguments)}};O.cacheSignal=function(){return null};O.cloneElement=function(t,e,l){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var n=s_({},t.props),a=t.key;if(e!=null)for(u in e.key!==void 0&&(a=""+e.key),e)!__.call(e,u)||u==="key"||u==="__self"||u==="__source"||u==="ref"&&e.ref===void 0||(n[u]=e[u]);var u=arguments.length-2;if(u===1)n.children=l;else if(1<u){for(var i=Array(u),s=0;s<u;s++)i[s]=arguments[s+2];n.children=i}return Os(t.type,a,n)};O.createContext=function(t){return t={$$typeof:m0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:d0,_context:t},t};O.createElement=function(t,e,l){var n,a={},u=null;if(e!=null)for(n in e.key!==void 0&&(u=""+e.key),e)__.call(e,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(a[n]=e[n]);var i=arguments.length-2;if(i===1)a.children=l;else if(1<i){for(var s=Array(i),o=0;o<i;o++)s[o]=arguments[o+2];a.children=s}if(t&&t.defaultProps)for(n in i=t.defaultProps,i)a[n]===void 0&&(a[n]=i[n]);return Os(t,u,a)};O.createRef=function(){return{current:null}};O.forwardRef=function(t){return{$$typeof:y0,render:t}};O.isValidElement=Ys;O.lazy=function(t){return{$$typeof:u_,_payload:{_status:-1,_result:t},_init:z0}};O.memo=function(t,e){return{$$typeof:h0,type:t,compare:e===void 0?null:e}};O.startTransition=function(t){var e=P.T,l={};P.T=l;try{var n=t(),a=P.S;a!==null&&a(l,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(Ei,Mo)}catch(u){Mo(u)}finally{e!==null&&l.types!==null&&(e.types=l.types),P.T=e}};O.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()};O.use=function(t){return P.H.use(t)};O.useActionState=function(t,e,l){return P.H.useActionState(t,e,l)};O.useCallback=function(t,e){return P.H.useCallback(t,e)};O.useContext=function(t){return P.H.useContext(t)};O.useDebugValue=function(){};O.useDeferredValue=function(t,e){return P.H.useDeferredValue(t,e)};O.useEffect=function(t,e){return P.H.useEffect(t,e)};O.useEffectEvent=function(t){return P.H.useEffectEvent(t)};O.useId=function(){return P.H.useId()};O.useImperativeHandle=function(t,e,l){return P.H.useImperativeHandle(t,e,l)};O.useInsertionEffect=function(t,e){return P.H.useInsertionEffect(t,e)};O.useLayoutEffect=function(t,e){return P.H.useLayoutEffect(t,e)};O.useMemo=function(t,e){return P.H.useMemo(t,e)};O.useOptimistic=function(t,e){return P.H.useOptimistic(t,e)};O.useReducer=function(t,e,l){return P.H.useReducer(t,e,l)};O.useRef=function(t){return P.H.useRef(t)};O.useState=function(t){return P.H.useState(t)};O.useSyncExternalStore=function(t,e,l){return P.H.useSyncExternalStore(t,e,l)};O.useTransition=function(){return P.H.useTransition()};O.version="19.2.4";a_.exports=O;var Z=a_.exports,f_={exports:{}},zu={},r_={exports:{}},d_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(S,j){var N=S.length;S.push(j);t:for(;0<N;){var C=N-1>>>1,F=S[C];if(0<a(F,j))S[C]=j,S[N]=F,N=C;else break t}}function l(S){return S.length===0?null:S[0]}function n(S){if(S.length===0)return null;var j=S[0],N=S.pop();if(N!==j){S[0]=N;t:for(var C=0,F=S.length,Gt=F>>>1;C<Gt;){var ma=2*(C+1)-1,Lu=S[ma],nl=ma+1,ya=S[nl];if(0>a(Lu,N))nl<F&&0>a(ya,Lu)?(S[C]=ya,S[nl]=N,C=nl):(S[C]=Lu,S[ma]=N,C=ma);else if(nl<F&&0>a(ya,N))S[C]=ya,S[nl]=N,C=nl;else break t}}return j}function a(S,j){var N=S.sortIndex-j.sortIndex;return N!==0?N:S.id-j.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var i=Date,s=i.now();t.unstable_now=function(){return i.now()-s}}var o=[],f=[],y=1,g=null,r=3,m=!1,v=!1,A=!1,B=!1,_=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;function h(S){for(var j=l(f);j!==null;){if(j.callback===null)n(f);else if(j.startTime<=S)n(f),j.sortIndex=j.expirationTime,e(o,j);else break;j=l(f)}}function z(S){if(A=!1,h(S),!v)if(l(o)!==null)v=!0,M||(M=!0,qt());else{var j=l(f);j!==null&&ll(z,j.startTime-S)}}var M=!1,x=-1,T=5,U=-1;function D(){return B?!0:!(t.unstable_now()-U<T)}function At(){if(B=!1,M){var S=t.unstable_now();U=S;var j=!0;try{t:{v=!1,A&&(A=!1,c(x),x=-1),m=!0;var N=r;try{e:{for(h(S),g=l(o);g!==null&&!(g.expirationTime>S&&D());){var C=g.callback;if(typeof C=="function"){g.callback=null,r=g.priorityLevel;var F=C(g.expirationTime<=S);if(S=t.unstable_now(),typeof F=="function"){g.callback=F,h(S),j=!0;break e}g===l(o)&&n(o),h(S)}else n(o);g=l(o)}if(g!==null)j=!0;else{var Gt=l(f);Gt!==null&&ll(z,Gt.startTime-S),j=!1}}break t}finally{g=null,r=N,m=!1}j=void 0}}finally{j?qt():M=!1}}}var qt;if(typeof d=="function")qt=function(){d(At)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,da=Ye.port2;Ye.port1.onmessage=At,qt=function(){da.postMessage(null)}}else qt=function(){_(At,0)};function ll(S,j){x=_(function(){S(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(S){S.callback=null},t.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<S?Math.floor(1e3/S):5},t.unstable_getCurrentPriorityLevel=function(){return r},t.unstable_next=function(S){switch(r){case 1:case 2:case 3:var j=3;break;default:j=r}var N=r;r=j;try{return S()}finally{r=N}},t.unstable_requestPaint=function(){B=!0},t.unstable_runWithPriority=function(S,j){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var N=r;r=S;try{return j()}finally{r=N}},t.unstable_scheduleCallback=function(S,j,N){var C=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?C+N:C):N=C,S){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=N+F,S={id:y++,callback:j,priorityLevel:S,startTime:N,expirationTime:F,sortIndex:-1},N>C?(S.sortIndex=N,e(f,S),l(o)===null&&S===l(f)&&(A?(c(x),x=-1):A=!0,ll(z,N-C))):(S.sortIndex=F,e(o,S),v||m||(v=!0,M||(M=!0,qt()))),S},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(S){var j=r;return function(){var N=r;r=j;try{return S.apply(this,arguments)}finally{r=N}}}})(d_);r_.exports=d_;var T0=r_.exports,m_={exports:{}},zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0=Z;function y_(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Me(){}var St={d:{f:Me,r:function(){throw Error(y_(522))},D:Me,C:Me,L:Me,m:Me,X:Me,S:Me,M:Me},p:0,findDOMNode:null},O0=Symbol.for("react.portal");function Y0(t,e,l){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O0,key:n==null?null:""+n,children:t,containerInfo:e,implementation:l}}var On=E0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Au(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=St;zt.createPortal=function(t,e){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(y_(299));return Y0(t,e,null,l)};zt.flushSync=function(t){var e=On.T,l=St.p;try{if(On.T=null,St.p=2,t)return t()}finally{On.T=e,St.p=l,St.d.f()}};zt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,St.d.C(t,e))};zt.prefetchDNS=function(t){typeof t=="string"&&St.d.D(t)};zt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var l=e.as,n=Au(l,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,u=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;l==="style"?St.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:n,integrity:a,fetchPriority:u}):l==="script"&&St.d.X(t,{crossOrigin:n,integrity:a,fetchPriority:u,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};zt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var l=Au(e.as,e.crossOrigin);St.d.M(t,{crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&St.d.M(t)};zt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var l=e.as,n=Au(l,e.crossOrigin);St.d.L(t,l,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};zt.preloadModule=function(t,e){if(typeof t=="string")if(e){var l=Au(e.as,e.crossOrigin);St.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else St.d.m(t)};zt.requestFormReset=function(t){St.d.r(t)};zt.unstable_batchedUpdates=function(t,e){return t(e)};zt.useFormState=function(t,e,l){return On.H.useFormState(t,e,l)};zt.useFormStatus=function(){return On.H.useHostTransitionStatus()};zt.version="19.2.4";function g_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g_)}catch(t){console.error(t)}}g_(),m_.exports=zt;var h_=m_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ft=T0,p_=Z,M0=h_;function p(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ea(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function v_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x_(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Uo(t){if(ea(t)!==t)throw Error(p(188))}function U0(t){var e=t.alternate;if(!e){if(e=ea(t),e===null)throw Error(p(188));return e!==t?null:t}for(var l=t,n=e;;){var a=l.return;if(a===null)break;var u=a.alternate;if(u===null){if(n=a.return,n!==null){l=n;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===l)return Uo(a),t;if(u===n)return Uo(a),e;u=u.sibling}throw Error(p(188))}if(l.return!==n.return)l=a,n=u;else{for(var i=!1,s=a.child;s;){if(s===l){i=!0,l=a,n=u;break}if(s===n){i=!0,n=a,l=u;break}s=s.sibling}if(!i){for(s=u.child;s;){if(s===l){i=!0,l=u,n=a;break}if(s===n){i=!0,n=u,l=a;break}s=s.sibling}if(!i)throw Error(p(189))}}if(l.alternate!==n)throw Error(p(190))}if(l.tag!==3)throw Error(p(188));return l.stateNode.current===l?t:e}function S_(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=S_(t),e!==null)return e;t=t.sibling}return null}var tt=Object.assign,C0=Symbol.for("react.element"),ha=Symbol.for("react.transitional.element"),Sn=Symbol.for("react.portal"),Ul=Symbol.for("react.fragment"),z_=Symbol.for("react.strict_mode"),Oi=Symbol.for("react.profiler"),A_=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),Ms=Symbol.for("react.forward_ref"),Yi=Symbol.for("react.suspense"),Mi=Symbol.for("react.suspense_list"),Us=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Ui=Symbol.for("react.activity"),D0=Symbol.for("react.memo_cache_sentinel"),Co=Symbol.iterator;function yn(t){return t===null||typeof t!="object"?null:(t=Co&&t[Co]||t["@@iterator"],typeof t=="function"?t:null)}var N0=Symbol.for("react.client.reference");function Ci(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===N0?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ul:return"Fragment";case Oi:return"Profiler";case z_:return"StrictMode";case Yi:return"Suspense";case Mi:return"SuspenseList";case Ui:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Sn:return"Portal";case ge:return t.displayName||"Context";case A_:return(t._context.displayName||"Context")+".Consumer";case Ms:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Us:return e=t.displayName||null,e!==null?e:Ci(t.type)||"Memo";case Ue:e=t._payload,t=t._init;try{return Ci(t(e))}catch{}}return null}var zn=Array.isArray,E=p_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=M0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,cl={pending:!1,data:null,method:null,action:null},Di=[],Cl=-1;function se(t){return{current:t}}function mt(t){0>Cl||(t.current=Di[Cl],Di[Cl]=null,Cl--)}function W(t,e){Cl++,Di[Cl]=t.current,t.current=e}var ie=se(null),Ln=se(null),Le=se(null),Ja=se(null);function Ka(t,e){switch(W(Le,e),W(Ln,t),W(ie,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Hc(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Hc(e),t=Vr(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}mt(ie),W(ie,t)}function Wl(){mt(ie),mt(Ln),mt(Le)}function Ni(t){t.memoizedState!==null&&W(Ja,t);var e=ie.current,l=Vr(e,t.type);e!==l&&(W(Ln,t),W(ie,l))}function Wa(t){Ln.current===t&&(mt(ie),mt(Ln)),Ja.current===t&&(mt(Ja),In._currentValue=cl)}var Gu,Do;function ul(t){if(Gu===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Gu=e&&e[1]||"",Do=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gu+t+Do}var Zu=!1;function Vu(t,e){if(!t||Zu)return"";Zu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(m){var r=m}Reflect.construct(t,[],g)}else{try{g.call()}catch(m){r=m}t.call(g.prototype)}}else{try{throw Error()}catch(m){r=m}(g=t())&&typeof g.catch=="function"&&g.catch(function(){})}}catch(m){if(m&&r&&typeof m.stack=="string")return[m.stack,r.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),i=u[0],s=u[1];if(i&&s){var o=i.split(`
`),f=s.split(`
`);for(a=n=0;n<o.length&&!o[n].includes("DetermineComponentFrameRoot");)n++;for(;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;if(n===o.length||a===f.length)for(n=o.length-1,a=f.length-1;1<=n&&0<=a&&o[n]!==f[a];)a--;for(;1<=n&&0<=a;n--,a--)if(o[n]!==f[a]){if(n!==1||a!==1)do if(n--,a--,0>a||o[n]!==f[a]){var y=`
`+o[n].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=n&&0<=a);break}}}finally{Zu=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?ul(l):""}function B0(t,e){switch(t.tag){case 26:case 27:case 5:return ul(t.type);case 16:return ul("Lazy");case 13:return t.child!==e&&e!==null?ul("Suspense Fallback"):ul("Suspense");case 19:return ul("SuspenseList");case 0:case 15:return Vu(t.type,!1);case 11:return Vu(t.type.render,!1);case 1:return Vu(t.type,!0);case 31:return ul("Activity");default:return""}}function No(t){try{var e="",l=null;do e+=B0(t,l),l=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Bi=Object.prototype.hasOwnProperty,Cs=ft.unstable_scheduleCallback,ku=ft.unstable_cancelCallback,j0=ft.unstable_shouldYield,w0=ft.unstable_requestPaint,wt=ft.unstable_now,H0=ft.unstable_getCurrentPriorityLevel,T_=ft.unstable_ImmediatePriority,E_=ft.unstable_UserBlockingPriority,Fa=ft.unstable_NormalPriority,R0=ft.unstable_LowPriority,O_=ft.unstable_IdlePriority,X0=ft.log,Q0=ft.unstable_setDisableYieldValue,la=null,Ht=null;function we(t){if(typeof X0=="function"&&Q0(t),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(la,t)}catch{}}var Rt=Math.clz32?Math.clz32:G0,L0=Math.log,q0=Math.LN2;function G0(t){return t>>>=0,t===0?32:31-(L0(t)/q0|0)|0}var pa=256,ba=262144,va=4194304;function il(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Tu(t,e,l){var n=t.pendingLanes;if(n===0)return 0;var a=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var s=n&134217727;return s!==0?(n=s&~u,n!==0?a=il(n):(i&=s,i!==0?a=il(i):l||(l=s&~t,l!==0&&(a=il(l))))):(s=n&~u,s!==0?a=il(s):i!==0?a=il(i):l||(l=n&~t,l!==0&&(a=il(l)))),a===0?0:e!==0&&e!==a&&!(e&u)&&(u=a&-a,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:a}function na(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Z0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y_(){var t=va;return va<<=1,!(va&62914560)&&(va=4194304),t}function Ju(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function aa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function V0(t,e,l,n,a,u){var i=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,o=t.expirationTimes,f=t.hiddenUpdates;for(l=i&~l;0<l;){var y=31-Rt(l),g=1<<y;s[y]=0,o[y]=-1;var r=f[y];if(r!==null)for(f[y]=null,y=0;y<r.length;y++){var m=r[y];m!==null&&(m.lane&=-536870913)}l&=~g}n!==0&&M_(t,n,0),u!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~e))}function M_(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-Rt(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|l&261930}function U_(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var n=31-Rt(l),a=1<<n;a&e|t[n]&e&&(t[n]|=e),l&=~a}}function C_(t,e){var l=e&-e;return l=l&42?1:Ds(l),l&(t.suspendedLanes|e)?0:l}function Ds(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ns(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function D_(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:l0(t.type))}function Bo(t,e){var l=L.p;try{return L.p=t,e()}finally{L.p=l}}var tl=Math.random().toString(36).slice(2),ht="__reactFiber$"+tl,Ut="__reactProps$"+tl,on="__reactContainer$"+tl,ji="__reactEvents$"+tl,k0="__reactListeners$"+tl,J0="__reactHandles$"+tl,jo="__reactResources$"+tl,ua="__reactMarker$"+tl;function Bs(t){delete t[ht],delete t[Ut],delete t[ji],delete t[k0],delete t[J0]}function Dl(t){var e=t[ht];if(e)return e;for(var l=t.parentNode;l;){if(e=l[on]||l[ht]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=qc(t);t!==null;){if(l=t[ht])return l;t=qc(t)}return e}t=l,l=t.parentNode}return null}function cn(t){if(t=t[ht]||t[on]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function An(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(p(33))}function ql(t){var e=t[jo];return e||(e=t[jo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function dt(t){t[ua]=!0}var N_=new Set,B_={};function bl(t,e){Fl(t,e),Fl(t+"Capture",e)}function Fl(t,e){for(B_[t]=e,t=0;t<e.length;t++)N_.add(e[t])}var K0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wo={},Ho={};function W0(t){return Bi.call(Ho,t)?!0:Bi.call(wo,t)?!1:K0.test(t)?Ho[t]=!0:(wo[t]=!0,!1)}function Da(t,e,l){if(W0(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function xa(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function ce(t,e,l,n){if(n===null)t.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+n)}}function Vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function j_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function F0(t,e,l){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wi(t){if(!t._valueTracker){var e=j_(t)?"checked":"value";t._valueTracker=F0(t,e,""+t[e])}}function w_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),n="";return t&&(n=j_(t)?t.checked?"true":"false":t.value),t=n,t!==l?(e.setValue(t),!0):!1}function $a(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var $0=/[\n"\\]/g;function Kt(t){return t.replace($0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Hi(t,e,l,n,a,u,i,s){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Vt(e)):t.value!==""+Vt(e)&&(t.value=""+Vt(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?Ri(t,i,Vt(e)):l!=null?Ri(t,i,Vt(l)):n!=null&&t.removeAttribute("value"),a==null&&u!=null&&(t.defaultChecked=!!u),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Vt(s):t.removeAttribute("name")}function H_(t,e,l,n,a,u,i,s){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){wi(t);return}l=l!=null?""+Vt(l):"",e=e!=null?""+Vt(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=s?t.checked:!!n,t.defaultChecked=!!n,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),wi(t)}function Ri(t,e,l){e==="number"&&$a(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Gl(t,e,l,n){if(t=t.options,e){e={};for(var a=0;a<l.length;a++)e["$"+l[a]]=!0;for(l=0;l<t.length;l++)a=e.hasOwnProperty("$"+t[l].value),t[l].selected!==a&&(t[l].selected=a),a&&n&&(t[l].defaultSelected=!0)}else{for(l=""+Vt(l),e=null,a=0;a<t.length;a++){if(t[a].value===l){t[a].selected=!0,n&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function R_(t,e,l){if(e!=null&&(e=""+Vt(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Vt(l):""}function X_(t,e,l,n){if(e==null){if(n!=null){if(l!=null)throw Error(p(92));if(zn(n)){if(1<n.length)throw Error(p(93));n=n[0]}l=n}l==null&&(l=""),e=l}l=Vt(e),t.defaultValue=l,n=t.textContent,n===l&&n!==""&&n!==null&&(t.value=n),wi(t)}function $l(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var I0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ro(t,e,l){var n=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,l):typeof l!="number"||l===0||I0.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Q_(t,e,l){if(e!=null&&typeof e!="object")throw Error(p(62));if(t=t.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var a in e)n=e[a],e.hasOwnProperty(a)&&l[a]!==n&&Ro(t,a,n)}else for(var u in e)e.hasOwnProperty(u)&&Ro(t,u,e[u])}function js(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var P0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),td=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Na(t){return td.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function he(){}var Xi=null;function ws(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nl=null,Zl=null;function Xo(t){var e=cn(t);if(e&&(t=e.stateNode)){var l=t[Ut]||null;t:switch(t=e.stateNode,e.type){case"input":if(Hi(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Kt(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var n=l[e];if(n!==t&&n.form===t.form){var a=n[Ut]||null;if(!a)throw Error(p(90));Hi(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<l.length;e++)n=l[e],n.form===t.form&&w_(n)}break t;case"textarea":R_(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Gl(t,!!l.multiple,e,!1)}}}var Ku=!1;function L_(t,e,l){if(Ku)return t(e,l);Ku=!0;try{var n=t(e);return n}finally{if(Ku=!1,(Nl!==null||Zl!==null)&&(Hu(),Nl&&(e=Nl,t=Zl,Zl=Nl=null,Xo(e),t)))for(e=0;e<t.length;e++)Xo(t[e])}}function qn(t,e){var l=t.stateNode;if(l===null)return null;var n=l[Ut]||null;if(n===null)return null;l=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(p(231,e,typeof l));return l}var Se=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qi=!1;if(Se)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){Qi=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{Qi=!1}var He=null,Hs=null,Ba=null;function q_(){if(Ba)return Ba;var t,e=Hs,l=e.length,n,a="value"in He?He.value:He.textContent,u=a.length;for(t=0;t<l&&e[t]===a[t];t++);var i=l-t;for(n=1;n<=i&&e[l-n]===a[u-n];n++);return Ba=a.slice(t,1<n?1-n:void 0)}function ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sa(){return!0}function Qo(){return!1}function Ct(t){function e(l,n,a,u,i){this._reactName=l,this._targetInst=a,this.type=n,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(u):u[s]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Sa:Qo,this.isPropagationStopped=Qo,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),e}var vl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eu=Ct(vl),ia=tt({},vl,{view:0,detail:0}),ed=Ct(ia),Wu,Fu,hn,Ou=tt({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hn&&(hn&&t.type==="mousemove"?(Wu=t.screenX-hn.screenX,Fu=t.screenY-hn.screenY):Fu=Wu=0,hn=t),Wu)},movementY:function(t){return"movementY"in t?t.movementY:Fu}}),Lo=Ct(Ou),ld=tt({},Ou,{dataTransfer:0}),nd=Ct(ld),ad=tt({},ia,{relatedTarget:0}),$u=Ct(ad),ud=tt({},vl,{animationName:0,elapsedTime:0,pseudoElement:0}),id=Ct(ud),sd=tt({},vl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),od=Ct(sd),cd=tt({},vl,{data:0}),qo=Ct(cd),_d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dd(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rd[t])?!!e[t]:!1}function Rs(){return dd}var md=tt({},ia,{key:function(t){if(t.key){var e=_d[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rs,charCode:function(t){return t.type==="keypress"?ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yd=Ct(md),gd=tt({},Ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Go=Ct(gd),hd=tt({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rs}),pd=Ct(hd),bd=tt({},vl,{propertyName:0,elapsedTime:0,pseudoElement:0}),vd=Ct(bd),xd=tt({},Ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sd=Ct(xd),zd=tt({},vl,{newState:0,oldState:0}),Ad=Ct(zd),Td=[9,13,27,32],Xs=Se&&"CompositionEvent"in window,Yn=null;Se&&"documentMode"in document&&(Yn=document.documentMode);var Ed=Se&&"TextEvent"in window&&!Yn,G_=Se&&(!Xs||Yn&&8<Yn&&11>=Yn),Zo=" ",Vo=!1;function Z_(t,e){switch(t){case"keyup":return Td.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bl=!1;function Od(t,e){switch(t){case"compositionend":return V_(e);case"keypress":return e.which!==32?null:(Vo=!0,Zo);case"textInput":return t=e.data,t===Zo&&Vo?null:t;default:return null}}function Yd(t,e){if(Bl)return t==="compositionend"||!Xs&&Z_(t,e)?(t=q_(),Ba=Hs=He=null,Bl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return G_&&e.locale!=="ko"?null:e.data;default:return null}}var Md={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ko(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Md[t.type]:e==="textarea"}function k_(t,e,l,n){Nl?Zl?Zl.push(n):Zl=[n]:Nl=n,e=yu(e,"onChange"),0<e.length&&(l=new Eu("onChange","change",null,l,n),t.push({event:l,listeners:e}))}var Mn=null,Gn=null;function Ud(t){qr(t,0)}function Yu(t){var e=An(t);if(w_(e))return t}function Jo(t,e){if(t==="change")return e}var J_=!1;if(Se){var Iu;if(Se){var Pu="oninput"in document;if(!Pu){var Ko=document.createElement("div");Ko.setAttribute("oninput","return;"),Pu=typeof Ko.oninput=="function"}Iu=Pu}else Iu=!1;J_=Iu&&(!document.documentMode||9<document.documentMode)}function Wo(){Mn&&(Mn.detachEvent("onpropertychange",K_),Gn=Mn=null)}function K_(t){if(t.propertyName==="value"&&Yu(Gn)){var e=[];k_(e,Gn,t,ws(t)),L_(Ud,e)}}function Cd(t,e,l){t==="focusin"?(Wo(),Mn=e,Gn=l,Mn.attachEvent("onpropertychange",K_)):t==="focusout"&&Wo()}function Dd(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yu(Gn)}function Nd(t,e){if(t==="click")return Yu(e)}function Bd(t,e){if(t==="input"||t==="change")return Yu(e)}function jd(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qt=typeof Object.is=="function"?Object.is:jd;function Zn(t,e){if(Qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),n=Object.keys(e);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var a=l[n];if(!Bi.call(e,a)||!Qt(t[a],e[a]))return!1}return!0}function Fo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $o(t,e){var l=Fo(t);t=0;for(var n;l;){if(l.nodeType===3){if(n=t+l.textContent.length,t<=e&&n>=e)return{node:l,offset:e-t};t=n}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Fo(l)}}function W_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?W_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function F_(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=$a(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=$a(t.document)}return e}function Qs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var wd=Se&&"documentMode"in document&&11>=document.documentMode,jl=null,Li=null,Un=null,qi=!1;function Io(t,e,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;qi||jl==null||jl!==$a(n)||(n=jl,"selectionStart"in n&&Qs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Un&&Zn(Un,n)||(Un=n,n=yu(Li,"onSelect"),0<n.length&&(e=new Eu("onSelect","select",null,e,l),t.push({event:e,listeners:n}),e.target=jl)))}function al(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var wl={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionrun:al("Transition","TransitionRun"),transitionstart:al("Transition","TransitionStart"),transitioncancel:al("Transition","TransitionCancel"),transitionend:al("Transition","TransitionEnd")},ti={},$_={};Se&&($_=document.createElement("div").style,"AnimationEvent"in window||(delete wl.animationend.animation,delete wl.animationiteration.animation,delete wl.animationstart.animation),"TransitionEvent"in window||delete wl.transitionend.transition);function xl(t){if(ti[t])return ti[t];if(!wl[t])return t;var e=wl[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in $_)return ti[t]=e[l];return t}var I_=xl("animationend"),P_=xl("animationiteration"),tf=xl("animationstart"),Hd=xl("transitionrun"),Rd=xl("transitionstart"),Xd=xl("transitioncancel"),ef=xl("transitionend"),lf=new Map,Gi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gi.push("scrollEnd");function le(t,e){lf.set(t,e),bl(e,[t])}var Ia=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Zt=[],Hl=0,Ls=0;function Mu(){for(var t=Hl,e=Ls=Hl=0;e<t;){var l=Zt[e];Zt[e++]=null;var n=Zt[e];Zt[e++]=null;var a=Zt[e];Zt[e++]=null;var u=Zt[e];if(Zt[e++]=null,n!==null&&a!==null){var i=n.pending;i===null?a.next=a:(a.next=i.next,i.next=a),n.pending=a}u!==0&&nf(l,a,u)}}function Uu(t,e,l,n){Zt[Hl++]=t,Zt[Hl++]=e,Zt[Hl++]=l,Zt[Hl++]=n,Ls|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function qs(t,e,l,n){return Uu(t,e,l,n),Pa(t)}function Sl(t,e){return Uu(t,null,null,e),Pa(t)}function nf(t,e,l){t.lanes|=l;var n=t.alternate;n!==null&&(n.lanes|=l);for(var a=!1,u=t.return;u!==null;)u.childLanes|=l,n=u.alternate,n!==null&&(n.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(a=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,a&&e!==null&&(a=31-Rt(l),t=u.hiddenUpdates,n=t[a],n===null?t[a]=[e]:n.push(e),e.lane=l|536870912),u):null}function Pa(t){if(50<Xn)throw Xn=0,_s=null,Error(p(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Rl={};function Qd(t,e,l,n){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,l,n){return new Qd(t,e,l,n)}function Gs(t){return t=t.prototype,!(!t||!t.isReactComponent)}function be(t,e){var l=t.alternate;return l===null?(l=Bt(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function af(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function wa(t,e,l,n,a,u){var i=0;if(n=t,typeof t=="function")Gs(t)&&(i=1);else if(typeof t=="string")i=Vm(t,l,ie.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ui:return t=Bt(31,l,e,a),t.elementType=Ui,t.lanes=u,t;case Ul:return _l(l.children,a,u,e);case z_:i=8,a|=24;break;case Oi:return t=Bt(12,l,e,a|2),t.elementType=Oi,t.lanes=u,t;case Yi:return t=Bt(13,l,e,a),t.elementType=Yi,t.lanes=u,t;case Mi:return t=Bt(19,l,e,a),t.elementType=Mi,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ge:i=10;break t;case A_:i=9;break t;case Ms:i=11;break t;case Us:i=14;break t;case Ue:i=16,n=null;break t}i=29,l=Error(p(130,t===null?"null":typeof t,"")),n=null}return e=Bt(i,l,e,a),e.elementType=t,e.type=n,e.lanes=u,e}function _l(t,e,l,n){return t=Bt(7,t,n,e),t.lanes=l,t}function ei(t,e,l){return t=Bt(6,t,null,e),t.lanes=l,t}function uf(t){var e=Bt(18,null,null,0);return e.stateNode=t,e}function li(t,e,l){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Po=new WeakMap;function Wt(t,e){if(typeof t=="object"&&t!==null){var l=Po.get(t);return l!==void 0?l:(e={value:t,source:e,stack:No(e)},Po.set(t,e),e)}return{value:t,source:e,stack:No(e)}}var Xl=[],Ql=0,tu=null,Vn=0,kt=[],Jt=0,Fe=null,ne=1,ae="";function me(t,e){Xl[Ql++]=Vn,Xl[Ql++]=tu,tu=t,Vn=e}function sf(t,e,l){kt[Jt++]=ne,kt[Jt++]=ae,kt[Jt++]=Fe,Fe=t;var n=ne;t=ae;var a=32-Rt(n)-1;n&=~(1<<a),l+=1;var u=32-Rt(e)+a;if(30<u){var i=a-a%5;u=(n&(1<<i)-1).toString(32),n>>=i,a-=i,ne=1<<32-Rt(e)+a|l<<a|n,ae=u+t}else ne=1<<u|l<<a|n,ae=t}function Zs(t){t.return!==null&&(me(t,1),sf(t,1,0))}function Vs(t){for(;t===tu;)tu=Xl[--Ql],Xl[Ql]=null,Vn=Xl[--Ql],Xl[Ql]=null;for(;t===Fe;)Fe=kt[--Jt],kt[Jt]=null,ae=kt[--Jt],kt[Jt]=null,ne=kt[--Jt],kt[Jt]=null}function of(t,e){kt[Jt++]=ne,kt[Jt++]=ae,kt[Jt++]=Fe,ne=e.id,ae=e.overflow,Fe=t}var pt=null,I=null,X=!1,qe=null,Ft=!1,Zi=Error(p(519));function $e(t){var e=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw kn(Wt(e,t)),Zi}function tc(t){var e=t.stateNode,l=t.type,n=t.memoizedProps;switch(e[ht]=t,e[Ut]=n,l){case"dialog":w("cancel",e),w("close",e);break;case"iframe":case"object":case"embed":w("load",e);break;case"video":case"audio":for(l=0;l<Fn.length;l++)w(Fn[l],e);break;case"source":w("error",e);break;case"img":case"image":case"link":w("error",e),w("load",e);break;case"details":w("toggle",e);break;case"input":w("invalid",e),H_(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":w("invalid",e);break;case"textarea":w("invalid",e),X_(e,n.value,n.defaultValue,n.children)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||n.suppressHydrationWarning===!0||Zr(e.textContent,l)?(n.popover!=null&&(w("beforetoggle",e),w("toggle",e)),n.onScroll!=null&&w("scroll",e),n.onScrollEnd!=null&&w("scrollend",e),n.onClick!=null&&(e.onclick=he),e=!0):e=!1,e||$e(t,!0)}function ec(t){for(pt=t.return;pt;)switch(pt.tag){case 5:case 31:case 13:Ft=!1;return;case 27:case 3:Ft=!0;return;default:pt=pt.return}}function Al(t){if(t!==pt)return!1;if(!X)return ec(t),X=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||ys(t.type,t.memoizedProps)),l=!l),l&&I&&$e(t),ec(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));I=Lc(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));I=Lc(t)}else e===27?(e=I,el(t.type)?(t=bs,bs=null,I=t):I=e):I=pt?It(t.stateNode.nextSibling):null;return!0}function ml(){I=pt=null,X=!1}function ni(){var t=qe;return t!==null&&(Yt===null?Yt=t:Yt.push.apply(Yt,t),qe=null),t}function kn(t){qe===null?qe=[t]:qe.push(t)}var Vi=se(null),zl=null,pe=null;function De(t,e,l){W(Vi,e._currentValue),e._currentValue=l}function ve(t){t._currentValue=Vi.current,mt(Vi)}function ki(t,e,l){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===l)break;t=t.return}}function Ji(t,e,l,n){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){var i=a.child;u=u.firstContext;t:for(;u!==null;){var s=u;u=a;for(var o=0;o<e.length;o++)if(s.context===e[o]){u.lanes|=l,s=u.alternate,s!==null&&(s.lanes|=l),ki(u.return,l,t),n||(i=null);break t}u=s.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(p(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),ki(i,l,t),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function _n(t,e,l,n){t=null;for(var a=e,u=!1;a!==null;){if(!u){if(a.flags&524288)u=!0;else if(a.flags&262144)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(p(387));if(i=i.memoizedProps,i!==null){var s=a.type;Qt(a.pendingProps.value,i.value)||(t!==null?t.push(s):t=[s])}}else if(a===Ja.current){if(i=a.alternate,i===null)throw Error(p(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(In):t=[In])}a=a.return}t!==null&&Ji(e,t,l,n),e.flags|=262144}function eu(t){for(t=t.firstContext;t!==null;){if(!Qt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function yl(t){zl=t,pe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bt(t){return cf(zl,t)}function za(t,e){return zl===null&&yl(t),cf(t,e)}function cf(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},pe===null){if(t===null)throw Error(p(308));pe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else pe=pe.next=e;return l}var Ld=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},qd=ft.unstable_scheduleCallback,Gd=ft.unstable_NormalPriority,ot={$$typeof:ge,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ks(){return{controller:new Ld,data:new Map,refCount:0}}function sa(t){t.refCount--,t.refCount===0&&qd(Gd,function(){t.controller.abort()})}var Cn=null,Ki=0,Il=0,Vl=null;function Zd(t,e){if(Cn===null){var l=Cn=[];Ki=0,Il=po(),Vl={status:"pending",value:void 0,then:function(n){l.push(n)}}}return Ki++,e.then(lc,lc),e}function lc(){if(--Ki===0&&Cn!==null){Vl!==null&&(Vl.status="fulfilled");var t=Cn;Cn=null,Il=0,Vl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Vd(t,e){var l=[],n={status:"pending",value:null,reason:null,then:function(a){l.push(a)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var a=0;a<l.length;a++)(0,l[a])(e)},function(a){for(n.status="rejected",n.reason=a,a=0;a<l.length;a++)(0,l[a])(void 0)}),n}var nc=E.S;E.S=function(t,e){zr=wt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Zd(t,e),nc!==null&&nc(t,e)};var fl=se(null);function Js(){var t=fl.current;return t!==null?t:K.pooledCache}function Ha(t,e){e===null?W(fl,fl.current):W(fl,e.pool)}function _f(){var t=Js();return t===null?null:{parent:ot._currentValue,pool:t}}var fn=Error(p(460)),Ks=Error(p(474)),Cu=Error(p(542)),lu={then:function(){}};function ac(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ff(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(he,he),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ic(t),t;default:if(typeof e.status=="string")e.then(he,he);else{if(t=K,t!==null&&100<t.shellSuspendCounter)throw Error(p(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=n}},function(n){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ic(t),t}throw rl=e,fn}}function sl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(rl=l,fn):l}}var rl=null;function uc(){if(rl===null)throw Error(p(459));var t=rl;return rl=null,t}function ic(t){if(t===fn||t===Cu)throw Error(p(483))}var kl=null,Jn=0;function Aa(t){var e=Jn;return Jn+=1,kl===null&&(kl=[]),ff(kl,t,e)}function pn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ta(t,e){throw e.$$typeof===C0?Error(p(525)):(t=Object.prototype.toString.call(e),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function rf(t){function e(_,c){if(t){var d=_.deletions;d===null?(_.deletions=[c],_.flags|=16):d.push(c)}}function l(_,c){if(!t)return null;for(;c!==null;)e(_,c),c=c.sibling;return null}function n(_){for(var c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function a(_,c){return _=be(_,c),_.index=0,_.sibling=null,_}function u(_,c,d){return _.index=d,t?(d=_.alternate,d!==null?(d=d.index,d<c?(_.flags|=67108866,c):d):(_.flags|=67108866,c)):(_.flags|=1048576,c)}function i(_){return t&&_.alternate===null&&(_.flags|=67108866),_}function s(_,c,d,h){return c===null||c.tag!==6?(c=ei(d,_.mode,h),c.return=_,c):(c=a(c,d),c.return=_,c)}function o(_,c,d,h){var z=d.type;return z===Ul?y(_,c,d.props.children,h,d.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ue&&sl(z)===c.type)?(c=a(c,d.props),pn(c,d),c.return=_,c):(c=wa(d.type,d.key,d.props,null,_.mode,h),pn(c,d),c.return=_,c)}function f(_,c,d,h){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=li(d,_.mode,h),c.return=_,c):(c=a(c,d.children||[]),c.return=_,c)}function y(_,c,d,h,z){return c===null||c.tag!==7?(c=_l(d,_.mode,h,z),c.return=_,c):(c=a(c,d),c.return=_,c)}function g(_,c,d){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=ei(""+c,_.mode,d),c.return=_,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ha:return d=wa(c.type,c.key,c.props,null,_.mode,d),pn(d,c),d.return=_,d;case Sn:return c=li(c,_.mode,d),c.return=_,c;case Ue:return c=sl(c),g(_,c,d)}if(zn(c)||yn(c))return c=_l(c,_.mode,d,null),c.return=_,c;if(typeof c.then=="function")return g(_,Aa(c),d);if(c.$$typeof===ge)return g(_,za(_,c),d);Ta(_,c)}return null}function r(_,c,d,h){var z=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return z!==null?null:s(_,c,""+d,h);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ha:return d.key===z?o(_,c,d,h):null;case Sn:return d.key===z?f(_,c,d,h):null;case Ue:return d=sl(d),r(_,c,d,h)}if(zn(d)||yn(d))return z!==null?null:y(_,c,d,h,null);if(typeof d.then=="function")return r(_,c,Aa(d),h);if(d.$$typeof===ge)return r(_,c,za(_,d),h);Ta(_,d)}return null}function m(_,c,d,h,z){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return _=_.get(d)||null,s(c,_,""+h,z);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ha:return _=_.get(h.key===null?d:h.key)||null,o(c,_,h,z);case Sn:return _=_.get(h.key===null?d:h.key)||null,f(c,_,h,z);case Ue:return h=sl(h),m(_,c,d,h,z)}if(zn(h)||yn(h))return _=_.get(d)||null,y(c,_,h,z,null);if(typeof h.then=="function")return m(_,c,d,Aa(h),z);if(h.$$typeof===ge)return m(_,c,d,za(c,h),z);Ta(c,h)}return null}function v(_,c,d,h){for(var z=null,M=null,x=c,T=c=0,U=null;x!==null&&T<d.length;T++){x.index>T?(U=x,x=null):U=x.sibling;var D=r(_,x,d[T],h);if(D===null){x===null&&(x=U);break}t&&x&&D.alternate===null&&e(_,x),c=u(D,c,T),M===null?z=D:M.sibling=D,M=D,x=U}if(T===d.length)return l(_,x),X&&me(_,T),z;if(x===null){for(;T<d.length;T++)x=g(_,d[T],h),x!==null&&(c=u(x,c,T),M===null?z=x:M.sibling=x,M=x);return X&&me(_,T),z}for(x=n(x);T<d.length;T++)U=m(x,_,T,d[T],h),U!==null&&(t&&U.alternate!==null&&x.delete(U.key===null?T:U.key),c=u(U,c,T),M===null?z=U:M.sibling=U,M=U);return t&&x.forEach(function(At){return e(_,At)}),X&&me(_,T),z}function A(_,c,d,h){if(d==null)throw Error(p(151));for(var z=null,M=null,x=c,T=c=0,U=null,D=d.next();x!==null&&!D.done;T++,D=d.next()){x.index>T?(U=x,x=null):U=x.sibling;var At=r(_,x,D.value,h);if(At===null){x===null&&(x=U);break}t&&x&&At.alternate===null&&e(_,x),c=u(At,c,T),M===null?z=At:M.sibling=At,M=At,x=U}if(D.done)return l(_,x),X&&me(_,T),z;if(x===null){for(;!D.done;T++,D=d.next())D=g(_,D.value,h),D!==null&&(c=u(D,c,T),M===null?z=D:M.sibling=D,M=D);return X&&me(_,T),z}for(x=n(x);!D.done;T++,D=d.next())D=m(x,_,T,D.value,h),D!==null&&(t&&D.alternate!==null&&x.delete(D.key===null?T:D.key),c=u(D,c,T),M===null?z=D:M.sibling=D,M=D);return t&&x.forEach(function(qt){return e(_,qt)}),X&&me(_,T),z}function B(_,c,d,h){if(typeof d=="object"&&d!==null&&d.type===Ul&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ha:t:{for(var z=d.key;c!==null;){if(c.key===z){if(z=d.type,z===Ul){if(c.tag===7){l(_,c.sibling),h=a(c,d.props.children),h.return=_,_=h;break t}}else if(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ue&&sl(z)===c.type){l(_,c.sibling),h=a(c,d.props),pn(h,d),h.return=_,_=h;break t}l(_,c);break}else e(_,c);c=c.sibling}d.type===Ul?(h=_l(d.props.children,_.mode,h,d.key),h.return=_,_=h):(h=wa(d.type,d.key,d.props,null,_.mode,h),pn(h,d),h.return=_,_=h)}return i(_);case Sn:t:{for(z=d.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){l(_,c.sibling),h=a(c,d.children||[]),h.return=_,_=h;break t}else{l(_,c);break}else e(_,c);c=c.sibling}h=li(d,_.mode,h),h.return=_,_=h}return i(_);case Ue:return d=sl(d),B(_,c,d,h)}if(zn(d))return v(_,c,d,h);if(yn(d)){if(z=yn(d),typeof z!="function")throw Error(p(150));return d=z.call(d),A(_,c,d,h)}if(typeof d.then=="function")return B(_,c,Aa(d),h);if(d.$$typeof===ge)return B(_,c,za(_,d),h);Ta(_,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,c!==null&&c.tag===6?(l(_,c.sibling),h=a(c,d),h.return=_,_=h):(l(_,c),h=ei(d,_.mode,h),h.return=_,_=h),i(_)):l(_,c)}return function(_,c,d,h){try{Jn=0;var z=B(_,c,d,h);return kl=null,z}catch(x){if(x===fn||x===Cu)throw x;var M=Bt(29,x,null,_.mode);return M.lanes=h,M.return=_,M}finally{}}}var gl=rf(!0),df=rf(!1),Ce=!1;function Ws(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wi(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ge(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ze(t,e,l){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,Q&2){var a=n.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),n.pending=e,e=Pa(t),nf(t,null,l),e}return Uu(t,n,e,l),Pa(t)}function Dn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,l|=n,e.lanes=l,U_(t,l)}}function ai(t,e){var l=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var a=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?a=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?a=u=e:u=u.next=e}else a=u=e;l={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Fi=!1;function Nn(){if(Fi){var t=Vl;if(t!==null)throw t}}function Bn(t,e,l,n){Fi=!1;var a=t.updateQueue;Ce=!1;var u=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var o=s,f=o.next;o.next=null,i===null?u=f:i.next=f,i=o;var y=t.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==i&&(s===null?y.firstBaseUpdate=f:s.next=f,y.lastBaseUpdate=o))}if(u!==null){var g=a.baseState;i=0,y=f=o=null,s=u;do{var r=s.lane&-536870913,m=r!==s.lane;if(m?(R&r)===r:(n&r)===r){r!==0&&r===Il&&(Fi=!0),y!==null&&(y=y.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var v=t,A=s;r=e;var B=l;switch(A.tag){case 1:if(v=A.payload,typeof v=="function"){g=v.call(B,g,r);break t}g=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=A.payload,r=typeof v=="function"?v.call(B,g,r):v,r==null)break t;g=tt({},g,r);break t;case 2:Ce=!0}}r=s.callback,r!==null&&(t.flags|=64,m&&(t.flags|=8192),m=a.callbacks,m===null?a.callbacks=[r]:m.push(r))}else m={lane:r,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(f=y=m,o=g):y=y.next=m,i|=r;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;m=s,s=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);y===null&&(o=g),a.baseState=o,a.firstBaseUpdate=f,a.lastBaseUpdate=y,u===null&&(a.shared.lanes=0),Pe|=i,t.lanes=i,t.memoizedState=g}}function mf(t,e){if(typeof t!="function")throw Error(p(191,t));t.call(e)}function yf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)mf(l[t],e)}var Pl=se(null),nu=se(0);function sc(t,e){t=Ee,W(nu,t),W(Pl,e),Ee=t|e.baseLanes}function $i(){W(nu,Ee),W(Pl,Pl.current)}function Fs(){Ee=nu.current,mt(Pl),mt(nu)}var Lt=se(null),$t=null;function Ne(t){var e=t.alternate;W(at,at.current&1),W(Lt,t),$t===null&&(e===null||Pl.current!==null||e.memoizedState!==null)&&($t=t)}function Ii(t){W(at,at.current),W(Lt,t),$t===null&&($t=t)}function gf(t){t.tag===22?(W(at,at.current),W(Lt,t),$t===null&&($t=t)):Be()}function Be(){W(at,at.current),W(Lt,Lt.current)}function Nt(t){mt(Lt),$t===t&&($t=null),mt(at)}var at=se(0);function au(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||hs(l)||ps(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ze=0,Y=null,k=null,it=null,uu=!1,Jl=!1,hl=!1,iu=0,Kn=0,Kl=null,kd=0;function lt(){throw Error(p(321))}function $s(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Qt(t[l],e[l]))return!1;return!0}function Is(t,e,l,n,a,u){return ze=u,Y=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,E.H=t===null||t.memoizedState===null?Jf:co,hl=!1,u=l(n,a),hl=!1,Jl&&(u=pf(e,l,n,a)),hf(t),u}function hf(t){E.H=Wn;var e=k!==null&&k.next!==null;if(ze=0,it=k=Y=null,uu=!1,Kn=0,Kl=null,e)throw Error(p(300));t===null||ct||(t=t.dependencies,t!==null&&eu(t)&&(ct=!0))}function pf(t,e,l,n){Y=t;var a=0;do{if(Jl&&(Kl=null),Kn=0,Jl=!1,25<=a)throw Error(p(301));if(a+=1,it=k=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}E.H=Kf,u=e(l,n)}while(Jl);return u}function Jd(){var t=E.H,e=t.useState()[0];return e=typeof e.then=="function"?oa(e):e,t=t.useState()[0],(k!==null?k.memoizedState:null)!==t&&(Y.flags|=1024),e}function Ps(){var t=iu!==0;return iu=0,t}function to(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function eo(t){if(uu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}uu=!1}ze=0,it=k=Y=null,Jl=!1,Kn=iu=0,Kl=null}function xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Y.memoizedState=it=t:it=it.next=t,it}function ut(){if(k===null){var t=Y.alternate;t=t!==null?t.memoizedState:null}else t=k.next;var e=it===null?Y.memoizedState:it.next;if(e!==null)it=e,k=t;else{if(t===null)throw Y.alternate===null?Error(p(467)):Error(p(310));k=t,t={memoizedState:k.memoizedState,baseState:k.baseState,baseQueue:k.baseQueue,queue:k.queue,next:null},it===null?Y.memoizedState=it=t:it=it.next=t}return it}function Du(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oa(t){var e=Kn;return Kn+=1,Kl===null&&(Kl=[]),t=ff(Kl,t,e),e=Y,(it===null?e.memoizedState:it.next)===null&&(e=e.alternate,E.H=e===null||e.memoizedState===null?Jf:co),t}function Nu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return oa(t);if(t.$$typeof===ge)return bt(t)}throw Error(p(438,String(t)))}function lo(t){var e=null,l=Y.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var n=Y.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Du(),Y.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),n=0;n<t;n++)l[n]=D0;return e.index++,l}function Ae(t,e){return typeof e=="function"?e(t):e}function Ra(t){var e=ut();return no(e,k,t)}function no(t,e,l){var n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=l;var a=t.baseQueue,u=n.pending;if(u!==null){if(a!==null){var i=a.next;a.next=u.next,u.next=i}e.baseQueue=a=u,n.pending=null}if(u=t.baseState,a===null)t.memoizedState=u;else{e=a.next;var s=i=null,o=null,f=e,y=!1;do{var g=f.lane&-536870913;if(g!==f.lane?(R&g)===g:(ze&g)===g){var r=f.revertLane;if(r===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),g===Il&&(y=!0);else if((ze&r)===r){f=f.next,r===Il&&(y=!0);continue}else g={lane:0,revertLane:f.revertLane,gesture:null,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null},o===null?(s=o=g,i=u):o=o.next=g,Y.lanes|=r,Pe|=r;g=f.action,hl&&l(u,g),u=f.hasEagerState?f.eagerState:l(u,g)}else r={lane:g,revertLane:f.revertLane,gesture:f.gesture,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null},o===null?(s=o=r,i=u):o=o.next=r,Y.lanes|=g,Pe|=g;f=f.next}while(f!==null&&f!==e);if(o===null?i=u:o.next=s,!Qt(u,t.memoizedState)&&(ct=!0,y&&(l=Vl,l!==null)))throw l;t.memoizedState=u,t.baseState=i,t.baseQueue=o,n.lastRenderedState=u}return a===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function ui(t){var e=ut(),l=e.queue;if(l===null)throw Error(p(311));l.lastRenderedReducer=t;var n=l.dispatch,a=l.pending,u=e.memoizedState;if(a!==null){l.pending=null;var i=a=a.next;do u=t(u,i.action),i=i.next;while(i!==a);Qt(u,e.memoizedState)||(ct=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,n]}function bf(t,e,l){var n=Y,a=ut(),u=X;if(u){if(l===void 0)throw Error(p(407));l=l()}else l=e();var i=!Qt((k||a).memoizedState,l);if(i&&(a.memoizedState=l,ct=!0),a=a.queue,ao(Sf.bind(null,n,a,t),[t]),a.getSnapshot!==e||i||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,tn(9,{destroy:void 0},xf.bind(null,n,a,l,e),null),K===null)throw Error(p(349));u||ze&127||vf(n,e,l)}return l}function vf(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=Y.updateQueue,e===null?(e=Du(),Y.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function xf(t,e,l,n){e.value=l,e.getSnapshot=n,zf(e)&&Af(t)}function Sf(t,e,l){return l(function(){zf(e)&&Af(t)})}function zf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Qt(t,l)}catch{return!0}}function Af(t){var e=Sl(t,2);e!==null&&Mt(e,t,2)}function Pi(t){var e=xt();if(typeof t=="function"){var l=t;if(t=l(),hl){we(!0);try{l()}finally{we(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ae,lastRenderedState:t},e}function Tf(t,e,l,n){return t.baseState=l,no(t,k,typeof n=="function"?n:Ae)}function Kd(t,e,l,n,a){if(ju(t))throw Error(p(485));if(t=e.action,t!==null){var u={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};E.T!==null?l(!0):u.isTransition=!1,n(u),l=e.pending,l===null?(u.next=e.pending=u,Ef(e,u)):(u.next=l.next,e.pending=l.next=u)}}function Ef(t,e){var l=e.action,n=e.payload,a=t.state;if(e.isTransition){var u=E.T,i={};E.T=i;try{var s=l(a,n),o=E.S;o!==null&&o(i,s),oc(t,e,s)}catch(f){ts(t,e,f)}finally{u!==null&&i.types!==null&&(u.types=i.types),E.T=u}}else try{u=l(a,n),oc(t,e,u)}catch(f){ts(t,e,f)}}function oc(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){cc(t,e,n)},function(n){return ts(t,e,n)}):cc(t,e,l)}function cc(t,e,l){e.status="fulfilled",e.value=l,Of(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Ef(t,l)))}function ts(t,e,l){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=l,Of(e),e=e.next;while(e!==n)}t.action=null}function Of(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Yf(t,e){return e}function _c(t,e){if(X){var l=K.formState;if(l!==null){t:{var n=Y;if(X){if(I){e:{for(var a=I,u=Ft;a.nodeType!==8;){if(!u){a=null;break e}if(a=It(a.nextSibling),a===null){a=null;break e}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){I=It(a.nextSibling),n=a.data==="F!";break t}}$e(n)}n=!1}n&&(e=l[0])}}return l=xt(),l.memoizedState=l.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yf,lastRenderedState:e},l.queue=n,l=Zf.bind(null,Y,n),n.dispatch=l,n=Pi(!1),u=oo.bind(null,Y,!1,n.queue),n=xt(),a={state:e,dispatch:null,action:t,pending:null},n.queue=a,l=Kd.bind(null,Y,a,u,l),a.dispatch=l,n.memoizedState=t,[e,l,!1]}function fc(t){var e=ut();return Mf(e,k,t)}function Mf(t,e,l){if(e=no(t,e,Yf)[0],t=Ra(Ae)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=oa(e)}catch(i){throw i===fn?Cu:i}else n=e;e=ut();var a=e.queue,u=a.dispatch;return l!==e.memoizedState&&(Y.flags|=2048,tn(9,{destroy:void 0},Wd.bind(null,a,l),null)),[n,u,t]}function Wd(t,e){t.action=e}function rc(t){var e=ut(),l=k;if(l!==null)return Mf(e,l,t);ut(),e=e.memoizedState,l=ut();var n=l.queue.dispatch;return l.memoizedState=t,[e,n,!1]}function tn(t,e,l,n){return t={tag:t,create:l,deps:n,inst:e,next:null},e=Y.updateQueue,e===null&&(e=Du(),Y.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(n=l.next,l.next=t,t.next=n,e.lastEffect=t),t}function Uf(){return ut().memoizedState}function Xa(t,e,l,n){var a=xt();Y.flags|=t,a.memoizedState=tn(1|e,{destroy:void 0},l,n===void 0?null:n)}function Bu(t,e,l,n){var a=ut();n=n===void 0?null:n;var u=a.memoizedState.inst;k!==null&&n!==null&&$s(n,k.memoizedState.deps)?a.memoizedState=tn(e,u,l,n):(Y.flags|=t,a.memoizedState=tn(1|e,u,l,n))}function dc(t,e){Xa(8390656,8,t,e)}function ao(t,e){Bu(2048,8,t,e)}function Fd(t){Y.flags|=4;var e=Y.updateQueue;if(e===null)e=Du(),Y.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function Cf(t){var e=ut().memoizedState;return Fd({ref:e,nextImpl:t}),function(){if(Q&2)throw Error(p(440));return e.impl.apply(void 0,arguments)}}function Df(t,e){return Bu(4,2,t,e)}function Nf(t,e){return Bu(4,4,t,e)}function Bf(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jf(t,e,l){l=l!=null?l.concat([t]):null,Bu(4,4,Bf.bind(null,e,t),l)}function uo(){}function wf(t,e){var l=ut();e=e===void 0?null:e;var n=l.memoizedState;return e!==null&&$s(e,n[1])?n[0]:(l.memoizedState=[t,e],t)}function Hf(t,e){var l=ut();e=e===void 0?null:e;var n=l.memoizedState;if(e!==null&&$s(e,n[1]))return n[0];if(n=t(),hl){we(!0);try{t()}finally{we(!1)}}return l.memoizedState=[n,e],n}function io(t,e,l){return l===void 0||ze&1073741824&&!(R&261930)?t.memoizedState=e:(t.memoizedState=l,t=Tr(),Y.lanes|=t,Pe|=t,l)}function Rf(t,e,l,n){return Qt(l,e)?l:Pl.current!==null?(t=io(t,l,n),Qt(t,e)||(ct=!0),t):!(ze&42)||ze&1073741824&&!(R&261930)?(ct=!0,t.memoizedState=l):(t=Tr(),Y.lanes|=t,Pe|=t,e)}function Xf(t,e,l,n,a){var u=L.p;L.p=u!==0&&8>u?u:8;var i=E.T,s={};E.T=s,oo(t,!1,e,l);try{var o=a(),f=E.S;if(f!==null&&f(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var y=Vd(o,n);jn(t,e,y,Xt(t))}else jn(t,e,n,Xt(t))}catch(g){jn(t,e,{then:function(){},status:"rejected",reason:g},Xt())}finally{L.p=u,i!==null&&s.types!==null&&(i.types=s.types),E.T=i}}function $d(){}function es(t,e,l,n){if(t.tag!==5)throw Error(p(476));var a=Qf(t).queue;Xf(t,a,e,cl,l===null?$d:function(){return Lf(t),l(n)})}function Qf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:cl,baseState:cl,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ae,lastRenderedState:cl},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ae,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Lf(t){var e=Qf(t);e.next===null&&(e=t.alternate.memoizedState),jn(t,e.next.queue,{},Xt())}function so(){return bt(In)}function qf(){return ut().memoizedState}function Gf(){return ut().memoizedState}function Id(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Xt();t=Ge(l);var n=Ze(e,t,l);n!==null&&(Mt(n,e,l),Dn(n,e,l)),e={cache:ks()},t.payload=e;return}e=e.return}}function Pd(t,e,l){var n=Xt();l={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ju(t)?Vf(e,l):(l=qs(t,e,l,n),l!==null&&(Mt(l,t,n),kf(l,e,n)))}function Zf(t,e,l){var n=Xt();jn(t,e,l,n)}function jn(t,e,l,n){var a={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(ju(t))Vf(e,a);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var i=e.lastRenderedState,s=u(i,l);if(a.hasEagerState=!0,a.eagerState=s,Qt(s,i))return Uu(t,e,a,0),K===null&&Mu(),!1}catch{}finally{}if(l=qs(t,e,a,n),l!==null)return Mt(l,t,n),kf(l,e,n),!0}return!1}function oo(t,e,l,n){if(n={lane:2,revertLane:po(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ju(t)){if(e)throw Error(p(479))}else e=qs(t,l,n,2),e!==null&&Mt(e,t,2)}function ju(t){var e=t.alternate;return t===Y||e!==null&&e===Y}function Vf(t,e){Jl=uu=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function kf(t,e,l){if(l&4194048){var n=e.lanes;n&=t.pendingLanes,l|=n,e.lanes=l,U_(t,l)}}var Wn={readContext:bt,use:Nu,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt};Wn.useEffectEvent=lt;var Jf={readContext:bt,use:Nu,useCallback:function(t,e){return xt().memoizedState=[t,e===void 0?null:e],t},useContext:bt,useEffect:dc,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,Xa(4194308,4,Bf.bind(null,e,t),l)},useLayoutEffect:function(t,e){return Xa(4194308,4,t,e)},useInsertionEffect:function(t,e){Xa(4,2,t,e)},useMemo:function(t,e){var l=xt();e=e===void 0?null:e;var n=t();if(hl){we(!0);try{t()}finally{we(!1)}}return l.memoizedState=[n,e],n},useReducer:function(t,e,l){var n=xt();if(l!==void 0){var a=l(e);if(hl){we(!0);try{l(e)}finally{we(!1)}}}else a=e;return n.memoizedState=n.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},n.queue=t,t=t.dispatch=Pd.bind(null,Y,t),[n.memoizedState,t]},useRef:function(t){var e=xt();return t={current:t},e.memoizedState=t},useState:function(t){t=Pi(t);var e=t.queue,l=Zf.bind(null,Y,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:uo,useDeferredValue:function(t,e){var l=xt();return io(l,t,e)},useTransition:function(){var t=Pi(!1);return t=Xf.bind(null,Y,t.queue,!0,!1),xt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var n=Y,a=xt();if(X){if(l===void 0)throw Error(p(407));l=l()}else{if(l=e(),K===null)throw Error(p(349));R&127||vf(n,e,l)}a.memoizedState=l;var u={value:l,getSnapshot:e};return a.queue=u,dc(Sf.bind(null,n,u,t),[t]),n.flags|=2048,tn(9,{destroy:void 0},xf.bind(null,n,u,l,e),null),l},useId:function(){var t=xt(),e=K.identifierPrefix;if(X){var l=ae,n=ne;l=(n&~(1<<32-Rt(n)-1)).toString(32)+l,e="_"+e+"R_"+l,l=iu++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=kd++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:so,useFormState:_c,useActionState:_c,useOptimistic:function(t){var e=xt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=oo.bind(null,Y,!0,l),l.dispatch=e,[t,e]},useMemoCache:lo,useCacheRefresh:function(){return xt().memoizedState=Id.bind(null,Y)},useEffectEvent:function(t){var e=xt(),l={impl:t};return e.memoizedState=l,function(){if(Q&2)throw Error(p(440));return l.impl.apply(void 0,arguments)}}},co={readContext:bt,use:Nu,useCallback:wf,useContext:bt,useEffect:ao,useImperativeHandle:jf,useInsertionEffect:Df,useLayoutEffect:Nf,useMemo:Hf,useReducer:Ra,useRef:Uf,useState:function(){return Ra(Ae)},useDebugValue:uo,useDeferredValue:function(t,e){var l=ut();return Rf(l,k.memoizedState,t,e)},useTransition:function(){var t=Ra(Ae)[0],e=ut().memoizedState;return[typeof t=="boolean"?t:oa(t),e]},useSyncExternalStore:bf,useId:qf,useHostTransitionStatus:so,useFormState:fc,useActionState:fc,useOptimistic:function(t,e){var l=ut();return Tf(l,k,t,e)},useMemoCache:lo,useCacheRefresh:Gf};co.useEffectEvent=Cf;var Kf={readContext:bt,use:Nu,useCallback:wf,useContext:bt,useEffect:ao,useImperativeHandle:jf,useInsertionEffect:Df,useLayoutEffect:Nf,useMemo:Hf,useReducer:ui,useRef:Uf,useState:function(){return ui(Ae)},useDebugValue:uo,useDeferredValue:function(t,e){var l=ut();return k===null?io(l,t,e):Rf(l,k.memoizedState,t,e)},useTransition:function(){var t=ui(Ae)[0],e=ut().memoizedState;return[typeof t=="boolean"?t:oa(t),e]},useSyncExternalStore:bf,useId:qf,useHostTransitionStatus:so,useFormState:rc,useActionState:rc,useOptimistic:function(t,e){var l=ut();return k!==null?Tf(l,k,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:lo,useCacheRefresh:Gf};Kf.useEffectEvent=Cf;function ii(t,e,l,n){e=t.memoizedState,l=l(n,e),l=l==null?e:tt({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var ls={enqueueSetState:function(t,e,l){t=t._reactInternals;var n=Xt(),a=Ge(n);a.payload=e,l!=null&&(a.callback=l),e=Ze(t,a,n),e!==null&&(Mt(e,t,n),Dn(e,t,n))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var n=Xt(),a=Ge(n);a.tag=1,a.payload=e,l!=null&&(a.callback=l),e=Ze(t,a,n),e!==null&&(Mt(e,t,n),Dn(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Xt(),n=Ge(l);n.tag=2,e!=null&&(n.callback=e),e=Ze(t,n,l),e!==null&&(Mt(e,t,l),Dn(e,t,l))}};function mc(t,e,l,n,a,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,u,i):e.prototype&&e.prototype.isPureReactComponent?!Zn(l,n)||!Zn(a,u):!0}function yc(t,e,l,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,n),e.state!==t&&ls.enqueueReplaceState(e,e.state,null)}function pl(t,e){var l=e;if("ref"in e){l={};for(var n in e)n!=="ref"&&(l[n]=e[n])}if(t=t.defaultProps){l===e&&(l=tt({},l));for(var a in t)l[a]===void 0&&(l[a]=t[a])}return l}function Wf(t){Ia(t)}function Ff(t){console.error(t)}function $f(t){Ia(t)}function su(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function gc(t,e,l){try{var n=t.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function ns(t,e,l){return l=Ge(l),l.tag=3,l.payload={element:null},l.callback=function(){su(t,e)},l}function If(t){return t=Ge(t),t.tag=3,t}function Pf(t,e,l,n){var a=l.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;t.payload=function(){return a(u)},t.callback=function(){gc(e,l,n)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){gc(e,l,n),typeof a!="function"&&(Ve===null?Ve=new Set([this]):Ve.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function tm(t,e,l,n,a){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=l.alternate,e!==null&&_n(e,l,a,!0),l=Lt.current,l!==null){switch(l.tag){case 31:case 13:return $t===null?ru():l.alternate===null&&nt===0&&(nt=3),l.flags&=-257,l.flags|=65536,l.lanes=a,n===lu?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([n]):e.add(n),hi(t,n,a)),!1;case 22:return l.flags|=65536,n===lu?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([n]):l.add(n)),hi(t,n,a)),!1}throw Error(p(435,l.tag))}return hi(t,n,a),ru(),!1}if(X)return e=Lt.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,n!==Zi&&(t=Error(p(422),{cause:n}),kn(Wt(t,l)))):(n!==Zi&&(e=Error(p(423),{cause:n}),kn(Wt(e,l))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,n=Wt(n,l),a=ns(t.stateNode,n,a),ai(t,a),nt!==4&&(nt=2)),!1;var u=Error(p(520),{cause:n});if(u=Wt(u,l),Rn===null?Rn=[u]:Rn.push(u),nt!==4&&(nt=2),e===null)return!0;n=Wt(n,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=a&-a,l.lanes|=t,t=ns(l.stateNode,n,t),ai(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ve===null||!Ve.has(u))))return l.flags|=65536,a&=-a,l.lanes|=a,a=If(a),Pf(a,t,l,n),ai(l,a),!1}l=l.return}while(l!==null);return!1}var _o=Error(p(461)),ct=!1;function gt(t,e,l,n){e.child=t===null?df(e,null,l,n):gl(e,t.child,l,n)}function hc(t,e,l,n,a){l=l.render;var u=e.ref;if("ref"in n){var i={};for(var s in n)s!=="ref"&&(i[s]=n[s])}else i=n;return yl(e),n=Is(t,e,l,i,u,a),s=Ps(),t!==null&&!ct?(to(t,e,a),Te(t,e,a)):(X&&s&&Zs(e),e.flags|=1,gt(t,e,n,a),e.child)}function pc(t,e,l,n,a){if(t===null){var u=l.type;return typeof u=="function"&&!Gs(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,tr(t,e,u,n,a)):(t=wa(l.type,null,n,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!fo(t,a)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:Zn,l(i,n)&&t.ref===e.ref)return Te(t,e,a)}return e.flags|=1,t=be(u,n),t.ref=e.ref,t.return=e,e.child=t}function tr(t,e,l,n,a){if(t!==null){var u=t.memoizedProps;if(Zn(u,n)&&t.ref===e.ref)if(ct=!1,e.pendingProps=n=u,fo(t,a))t.flags&131072&&(ct=!0);else return e.lanes=t.lanes,Te(t,e,a)}return as(t,e,l,n,a)}function er(t,e,l,n){var a=n.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if(e.flags&128){if(u=u!==null?u.baseLanes|l:l,t!==null){for(n=e.child=t.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~u}else n=0,e.child=null;return bc(t,e,u,l,n)}if(l&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ha(e,u!==null?u.cachePool:null),u!==null?sc(e,u):$i(),gf(e);else return n=e.lanes=536870912,bc(t,e,u!==null?u.baseLanes|l:l,l,n)}else u!==null?(Ha(e,u.cachePool),sc(e,u),Be(),e.memoizedState=null):(t!==null&&Ha(e,null),$i(),Be());return gt(t,e,a,l),e.child}function Tn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function bc(t,e,l,n,a){var u=Js();return u=u===null?null:{parent:ot._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&Ha(e,null),$i(),gf(e),t!==null&&_n(t,e,n,!0),e.childLanes=a,null}function Qa(t,e){return e=ou({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function vc(t,e,l){return gl(e,t.child,null,l),t=Qa(e,e.pendingProps),t.flags|=2,Nt(e),e.memoizedState=null,t}function em(t,e,l){var n=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(X){if(n.mode==="hidden")return t=Qa(e,n),e.lanes=536870912,Tn(null,t);if(Ii(e),(t=I)?(t=Jr(t,Ft),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fe!==null?{id:ne,overflow:ae}:null,retryLane:536870912,hydrationErrors:null},l=uf(t),l.return=e,e.child=l,pt=e,I=null)):t=null,t===null)throw $e(e);return e.lanes=536870912,null}return Qa(e,n)}var u=t.memoizedState;if(u!==null){var i=u.dehydrated;if(Ii(e),a)if(e.flags&256)e.flags&=-257,e=vc(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(p(558));else if(ct||_n(t,e,l,!1),a=(l&t.childLanes)!==0,ct||a){if(n=K,n!==null&&(i=C_(n,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,Sl(t,i),Mt(n,t,i),_o;ru(),e=vc(t,e,l)}else t=u.treeContext,I=It(i.nextSibling),pt=e,X=!0,qe=null,Ft=!1,t!==null&&of(e,t),e=Qa(e,n),e.flags|=4096;return e}return t=be(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function La(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(p(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function as(t,e,l,n,a){return yl(e),l=Is(t,e,l,n,void 0,a),n=Ps(),t!==null&&!ct?(to(t,e,a),Te(t,e,a)):(X&&n&&Zs(e),e.flags|=1,gt(t,e,l,a),e.child)}function xc(t,e,l,n,a,u){return yl(e),e.updateQueue=null,l=pf(e,n,l,a),hf(t),n=Ps(),t!==null&&!ct?(to(t,e,u),Te(t,e,u)):(X&&n&&Zs(e),e.flags|=1,gt(t,e,l,u),e.child)}function Sc(t,e,l,n,a){if(yl(e),e.stateNode===null){var u=Rl,i=l.contextType;typeof i=="object"&&i!==null&&(u=bt(i)),u=new l(n,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=ls,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=n,u.state=e.memoizedState,u.refs={},Ws(e),i=l.contextType,u.context=typeof i=="object"&&i!==null?bt(i):Rl,u.state=e.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(ii(e,l,i,n),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&ls.enqueueReplaceState(u,u.state,null),Bn(e,n,u,a),Nn(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){u=e.stateNode;var s=e.memoizedProps,o=pl(l,s);u.props=o;var f=u.context,y=l.contextType;i=Rl,typeof y=="object"&&y!==null&&(i=bt(y));var g=l.getDerivedStateFromProps;y=typeof g=="function"||typeof u.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,y||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s||f!==i)&&yc(e,u,n,i),Ce=!1;var r=e.memoizedState;u.state=r,Bn(e,n,u,a),Nn(),f=e.memoizedState,s||r!==f||Ce?(typeof g=="function"&&(ii(e,l,g,n),f=e.memoizedState),(o=Ce||mc(e,l,o,n,r,f,i))?(y||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=f),u.props=n,u.state=f,u.context=i,n=o):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{u=e.stateNode,Wi(t,e),i=e.memoizedProps,y=pl(l,i),u.props=y,g=e.pendingProps,r=u.context,f=l.contextType,o=Rl,typeof f=="object"&&f!==null&&(o=bt(f)),s=l.getDerivedStateFromProps,(f=typeof s=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==g||r!==o)&&yc(e,u,n,o),Ce=!1,r=e.memoizedState,u.state=r,Bn(e,n,u,a),Nn();var m=e.memoizedState;i!==g||r!==m||Ce||t!==null&&t.dependencies!==null&&eu(t.dependencies)?(typeof s=="function"&&(ii(e,l,s,n),m=e.memoizedState),(y=Ce||mc(e,l,y,n,r,m,o)||t!==null&&t.dependencies!==null&&eu(t.dependencies))?(f||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,m,o),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,m,o)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&r===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&r===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=m),u.props=n,u.state=m,u.context=o,n=y):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&r===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&r===t.memoizedState||(e.flags|=1024),n=!1)}return u=n,La(t,e),n=(e.flags&128)!==0,u||n?(u=e.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&n?(e.child=gl(e,t.child,null,a),e.child=gl(e,null,l,a)):gt(t,e,l,a),e.memoizedState=u.state,t=e.child):t=Te(t,e,a),t}function zc(t,e,l,n){return ml(),e.flags|=256,gt(t,e,l,n),e.child}var si={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oi(t){return{baseLanes:t,cachePool:_f()}}function ci(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=jt),t}function lr(t,e,l){var n=e.pendingProps,a=!1,u=(e.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(at.current&2)!==0),i&&(a=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(X){if(a?Ne(e):Be(),(t=I)?(t=Jr(t,Ft),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fe!==null?{id:ne,overflow:ae}:null,retryLane:536870912,hydrationErrors:null},l=uf(t),l.return=e,e.child=l,pt=e,I=null)):t=null,t===null)throw $e(e);return ps(t)?e.lanes=32:e.lanes=536870912,null}var s=n.children;return n=n.fallback,a?(Be(),a=e.mode,s=ou({mode:"hidden",children:s},a),n=_l(n,a,l,null),s.return=e,n.return=e,s.sibling=n,e.child=s,n=e.child,n.memoizedState=oi(l),n.childLanes=ci(t,i,l),e.memoizedState=si,Tn(null,n)):(Ne(e),us(e,s))}var o=t.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(u)e.flags&256?(Ne(e),e.flags&=-257,e=_i(t,e,l)):e.memoizedState!==null?(Be(),e.child=t.child,e.flags|=128,e=null):(Be(),s=n.fallback,a=e.mode,n=ou({mode:"visible",children:n.children},a),s=_l(s,a,l,null),s.flags|=2,n.return=e,s.return=e,n.sibling=s,e.child=n,gl(e,t.child,null,l),n=e.child,n.memoizedState=oi(l),n.childLanes=ci(t,i,l),e.memoizedState=si,e=Tn(null,n));else if(Ne(e),ps(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var f=i.dgst;i=f,n=Error(p(419)),n.stack="",n.digest=i,kn({value:n,source:null,stack:null}),e=_i(t,e,l)}else if(ct||_n(t,e,l,!1),i=(l&t.childLanes)!==0,ct||i){if(i=K,i!==null&&(n=C_(i,l),n!==0&&n!==o.retryLane))throw o.retryLane=n,Sl(t,n),Mt(i,t,n),_o;hs(s)||ru(),e=_i(t,e,l)}else hs(s)?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,I=It(s.nextSibling),pt=e,X=!0,qe=null,Ft=!1,t!==null&&of(e,t),e=us(e,n.children),e.flags|=4096);return e}return a?(Be(),s=n.fallback,a=e.mode,o=t.child,f=o.sibling,n=be(o,{mode:"hidden",children:n.children}),n.subtreeFlags=o.subtreeFlags&65011712,f!==null?s=be(f,s):(s=_l(s,a,l,null),s.flags|=2),s.return=e,n.return=e,n.sibling=s,e.child=n,Tn(null,n),n=e.child,s=t.child.memoizedState,s===null?s=oi(l):(a=s.cachePool,a!==null?(o=ot._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=_f(),s={baseLanes:s.baseLanes|l,cachePool:a}),n.memoizedState=s,n.childLanes=ci(t,i,l),e.memoizedState=si,Tn(t.child,n)):(Ne(e),l=t.child,t=l.sibling,l=be(l,{mode:"visible",children:n.children}),l.return=e,l.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=l,e.memoizedState=null,l)}function us(t,e){return e=ou({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ou(t,e){return t=Bt(22,t,null,e),t.lanes=0,t}function _i(t,e,l){return gl(e,t.child,null,l),t=us(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ac(t,e,l){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),ki(t.return,e,l)}function fi(t,e,l,n,a,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:a,treeForkCount:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=l,i.tailMode=a,i.treeForkCount=u)}function nr(t,e,l){var n=e.pendingProps,a=n.revealOrder,u=n.tail;n=n.children;var i=at.current,s=(i&2)!==0;if(s?(i=i&1|2,e.flags|=128):i&=1,W(at,i),gt(t,e,n,l),n=X?Vn:0,!s&&t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ac(t,l,e);else if(t.tag===19)Ac(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(l=e.child,a=null;l!==null;)t=l.alternate,t!==null&&au(t)===null&&(a=l),l=l.sibling;l=a,l===null?(a=e.child,e.child=null):(a=l.sibling,l.sibling=null),fi(e,!1,a,l,u,n);break;case"backwards":case"unstable_legacy-backwards":for(l=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&au(t)===null){e.child=a;break}t=a.sibling,a.sibling=l,l=a,a=t}fi(e,!0,l,null,u,n);break;case"together":fi(e,!1,null,null,void 0,n);break;default:e.memoizedState=null}return e.child}function Te(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Pe|=e.lanes,!(l&e.childLanes))if(t!==null){if(_n(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(p(153));if(e.child!==null){for(t=e.child,l=be(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=be(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function fo(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&eu(t)))}function lm(t,e,l){switch(e.tag){case 3:Ka(e,e.stateNode.containerInfo),De(e,ot,t.memoizedState.cache),ml();break;case 27:case 5:Ni(e);break;case 4:Ka(e,e.stateNode.containerInfo);break;case 10:De(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Ii(e),null;break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Ne(e),e.flags|=128,null):l&e.child.childLanes?lr(t,e,l):(Ne(e),t=Te(t,e,l),t!==null?t.sibling:null);Ne(e);break;case 19:var a=(t.flags&128)!==0;if(n=(l&e.childLanes)!==0,n||(_n(t,e,l,!1),n=(l&e.childLanes)!==0),a){if(n)return nr(t,e,l);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(at,at.current),n)break;return null;case 22:return e.lanes=0,er(t,e,l,e.pendingProps);case 24:De(e,ot,t.memoizedState.cache)}return Te(t,e,l)}function ar(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)ct=!0;else{if(!fo(t,l)&&!(e.flags&128))return ct=!1,lm(t,e,l);ct=!!(t.flags&131072)}else ct=!1,X&&e.flags&1048576&&sf(e,Vn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var n=e.pendingProps;if(t=sl(e.elementType),e.type=t,typeof t=="function")Gs(t)?(n=pl(t,n),e.tag=1,e=Sc(null,e,t,n,l)):(e.tag=0,e=as(null,e,t,n,l));else{if(t!=null){var a=t.$$typeof;if(a===Ms){e.tag=11,e=hc(null,e,t,n,l);break t}else if(a===Us){e.tag=14,e=pc(null,e,t,n,l);break t}}throw e=Ci(t)||t,Error(p(306,e,""))}}return e;case 0:return as(t,e,e.type,e.pendingProps,l);case 1:return n=e.type,a=pl(n,e.pendingProps),Sc(t,e,n,a,l);case 3:t:{if(Ka(e,e.stateNode.containerInfo),t===null)throw Error(p(387));n=e.pendingProps;var u=e.memoizedState;a=u.element,Wi(t,e),Bn(e,n,null,l);var i=e.memoizedState;if(n=i.cache,De(e,ot,n),n!==u.cache&&Ji(e,[ot],l,!0),Nn(),n=i.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=zc(t,e,n,l);break t}else if(n!==a){a=Wt(Error(p(424)),e),kn(a),e=zc(t,e,n,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(I=It(t.firstChild),pt=e,X=!0,qe=null,Ft=!0,l=df(e,null,n,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(ml(),n===a){e=Te(t,e,l);break t}gt(t,e,n,l)}e=e.child}return e;case 26:return La(t,e),t===null?(l=Zc(e.type,null,e.pendingProps,null))?e.memoizedState=l:X||(l=e.type,t=e.pendingProps,n=gu(Le.current).createElement(l),n[ht]=e,n[Ut]=t,vt(n,l,t),dt(n),e.stateNode=n):e.memoizedState=Zc(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ni(e),t===null&&X&&(n=e.stateNode=Kr(e.type,e.pendingProps,Le.current),pt=e,Ft=!0,a=I,el(e.type)?(bs=a,I=It(n.firstChild)):I=a),gt(t,e,e.pendingProps.children,l),La(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&X&&((a=n=I)&&(n=Dm(n,e.type,e.pendingProps,Ft),n!==null?(e.stateNode=n,pt=e,I=It(n.firstChild),Ft=!1,a=!0):a=!1),a||$e(e)),Ni(e),a=e.type,u=e.pendingProps,i=t!==null?t.memoizedProps:null,n=u.children,ys(a,u)?n=null:i!==null&&ys(a,i)&&(e.flags|=32),e.memoizedState!==null&&(a=Is(t,e,Jd,null,null,l),In._currentValue=a),La(t,e),gt(t,e,n,l),e.child;case 6:return t===null&&X&&((t=l=I)&&(l=Nm(l,e.pendingProps,Ft),l!==null?(e.stateNode=l,pt=e,I=null,t=!0):t=!1),t||$e(e)),null;case 13:return lr(t,e,l);case 4:return Ka(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=gl(e,null,n,l):gt(t,e,n,l),e.child;case 11:return hc(t,e,e.type,e.pendingProps,l);case 7:return gt(t,e,e.pendingProps,l),e.child;case 8:return gt(t,e,e.pendingProps.children,l),e.child;case 12:return gt(t,e,e.pendingProps.children,l),e.child;case 10:return n=e.pendingProps,De(e,e.type,n.value),gt(t,e,n.children,l),e.child;case 9:return a=e.type._context,n=e.pendingProps.children,yl(e),a=bt(a),n=n(a),e.flags|=1,gt(t,e,n,l),e.child;case 14:return pc(t,e,e.type,e.pendingProps,l);case 15:return tr(t,e,e.type,e.pendingProps,l);case 19:return nr(t,e,l);case 31:return em(t,e,l);case 22:return er(t,e,l,e.pendingProps);case 24:return yl(e),n=bt(ot),t===null?(a=Js(),a===null&&(a=K,u=ks(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=l),a=u),e.memoizedState={parent:n,cache:a},Ws(e),De(e,ot,a)):(t.lanes&l&&(Wi(t,e),Bn(e,null,null,l),Nn()),a=t.memoizedState,u=e.memoizedState,a.parent!==n?(a={parent:n,cache:n},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),De(e,ot,n)):(n=u.cache,De(e,ot,n),n!==a.cache&&Ji(e,[ot],l,!0))),gt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(p(156,e.tag))}function _e(t){t.flags|=4}function ri(t,e,l,n,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(Yr())t.flags|=8192;else throw rl=lu,Ks}else t.flags&=-16777217}function Tc(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!$r(e))if(Yr())t.flags|=8192;else throw rl=lu,Ks}function Ea(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Y_():536870912,t.lanes|=e,en|=e)}function bn(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function $(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,n=0;if(e)for(var a=t.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=n,t.childLanes=l,e}function nm(t,e,l){var n=e.pendingProps;switch(Vs(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $(e),null;case 1:return $(e),null;case 3:return l=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ve(ot),Wl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Al(e)?_e(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni())),$(e),null;case 26:var a=e.type,u=e.memoizedState;return t===null?(_e(e),u!==null?($(e),Tc(e,u)):($(e),ri(e,a,null,n,l))):u?u!==t.memoizedState?(_e(e),$(e),Tc(e,u)):($(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&_e(e),$(e),ri(e,a,t,n,l)),null;case 27:if(Wa(e),l=Le.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&_e(e);else{if(!n){if(e.stateNode===null)throw Error(p(166));return $(e),null}t=ie.current,Al(e)?tc(e):(t=Kr(a,n,l),e.stateNode=t,_e(e))}return $(e),null;case 5:if(Wa(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&_e(e);else{if(!n){if(e.stateNode===null)throw Error(p(166));return $(e),null}if(u=ie.current,Al(e))tc(e);else{var i=gu(Le.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}u[ht]=e,u[Ut]=n;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=u;t:switch(vt(u,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&_e(e)}}return $(e),ri(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&_e(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(p(166));if(t=Le.current,Al(e)){if(t=e.stateNode,l=e.memoizedProps,n=null,a=pt,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}t[ht]=e,t=!!(t.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||Zr(t.nodeValue,l)),t||$e(e,!0)}else t=gu(t).createTextNode(n),t[ht]=e,e.stateNode=t}return $(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(n=Al(e),l!==null){if(t===null){if(!n)throw Error(p(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(557));t[ht]=e}else ml(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$(e),t=!1}else l=ni(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(Nt(e),e):(Nt(e),null);if(e.flags&128)throw Error(p(558))}return $(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Al(e),n!==null&&n.dehydrated!==null){if(t===null){if(!a)throw Error(p(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(p(317));a[ht]=e}else ml(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$(e),a=!1}else a=ni(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Nt(e),e):(Nt(e),null)}return Nt(e),e.flags&128?(e.lanes=l,e):(l=n!==null,t=t!==null&&t.memoizedState!==null,l&&(n=e.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==a&&(n.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),Ea(e,e.updateQueue),$(e),null);case 4:return Wl(),t===null&&bo(e.stateNode.containerInfo),$(e),null;case 10:return ve(e.type),$(e),null;case 19:if(mt(at),n=e.memoizedState,n===null)return $(e),null;if(a=(e.flags&128)!==0,u=n.rendering,u===null)if(a)bn(n,!1);else{if(nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(u=au(t),u!==null){for(e.flags|=128,bn(n,!1),t=u.updateQueue,e.updateQueue=t,Ea(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)af(l,t),l=l.sibling;return W(at,at.current&1|2),X&&me(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&wt()>_u&&(e.flags|=128,a=!0,bn(n,!1),e.lanes=4194304)}else{if(!a)if(t=au(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Ea(e,t),bn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!X)return $(e),null}else 2*wt()-n.renderingStartTime>_u&&l!==536870912&&(e.flags|=128,a=!0,bn(n,!1),e.lanes=4194304);n.isBackwards?(u.sibling=e.child,e.child=u):(t=n.last,t!==null?t.sibling=u:e.child=u,n.last=u)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=wt(),t.sibling=null,l=at.current,W(at,a?l&1|2:l&1),X&&me(e,n.treeForkCount),t):($(e),null);case 22:case 23:return Nt(e),Fs(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?l&536870912&&!(e.flags&128)&&($(e),e.subtreeFlags&6&&(e.flags|=8192)):$(e),l=e.updateQueue,l!==null&&Ea(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==l&&(e.flags|=2048),t!==null&&mt(fl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ve(ot),$(e),null;case 25:return null;case 30:return null}throw Error(p(156,e.tag))}function am(t,e){switch(Vs(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ve(ot),Wl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Wa(e),null;case 31:if(e.memoizedState!==null){if(Nt(e),e.alternate===null)throw Error(p(340));ml()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Nt(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(p(340));ml()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(at),null;case 4:return Wl(),null;case 10:return ve(e.type),null;case 22:case 23:return Nt(e),Fs(),t!==null&&mt(fl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ve(ot),null;case 25:return null;default:return null}}function ur(t,e){switch(Vs(e),e.tag){case 3:ve(ot),Wl();break;case 26:case 27:case 5:Wa(e);break;case 4:Wl();break;case 31:e.memoizedState!==null&&Nt(e);break;case 13:Nt(e);break;case 19:mt(at);break;case 10:ve(e.type);break;case 22:case 23:Nt(e),Fs(),t!==null&&mt(fl);break;case 24:ve(ot)}}function ca(t,e){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var a=n.next;l=a;do{if((l.tag&t)===t){n=void 0;var u=l.create,i=l.inst;n=u(),i.destroy=n}l=l.next}while(l!==a)}}catch(s){G(e,e.return,s)}}function Ie(t,e,l){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var u=a.next;n=u;do{if((n.tag&t)===t){var i=n.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,a=e;var o=l,f=s;try{f()}catch(y){G(a,o,y)}}}n=n.next}while(n!==u)}}catch(y){G(e,e.return,y)}}function ir(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{yf(e,l)}catch(n){G(t,t.return,n)}}}function sr(t,e,l){l.props=pl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(n){G(t,e,n)}}function wn(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof l=="function"?t.refCleanup=l(n):l.current=n}}catch(a){G(t,e,a)}}function ue(t,e){var l=t.ref,n=t.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(a){G(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(a){G(t,e,a)}else l.current=null}function or(t){var e=t.type,l=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break t;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(a){G(t,t.return,a)}}function di(t,e,l){try{var n=t.stateNode;Em(n,t.type,l,e),n[Ut]=e}catch(a){G(t,t.return,a)}}function cr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&el(t.type)||t.tag===4}function mi(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||cr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&el(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function is(t,e,l){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=he));else if(n!==4&&(n===27&&el(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(is(t,e,l),t=t.sibling;t!==null;)is(t,e,l),t=t.sibling}function cu(t,e,l){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(n!==4&&(n===27&&el(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(cu(t,e,l),t=t.sibling;t!==null;)cu(t,e,l),t=t.sibling}function _r(t){var e=t.stateNode,l=t.memoizedProps;try{for(var n=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);vt(e,n,l),e[ht]=t,e[Ut]=l}catch(u){G(t,t.return,u)}}var ye=!1,st=!1,yi=!1,Ec=typeof WeakSet=="function"?WeakSet:Set,rt=null;function um(t,e){if(t=t.containerInfo,ds=vu,t=F_(t),Qs(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var a=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var i=0,s=-1,o=-1,f=0,y=0,g=t,r=null;e:for(;;){for(var m;g!==l||a!==0&&g.nodeType!==3||(s=i+a),g!==u||n!==0&&g.nodeType!==3||(o=i+n),g.nodeType===3&&(i+=g.nodeValue.length),(m=g.firstChild)!==null;)r=g,g=m;for(;;){if(g===t)break e;if(r===l&&++f===a&&(s=i),r===u&&++y===n&&(o=i),(m=g.nextSibling)!==null)break;g=r,r=g.parentNode}g=m}l=s===-1||o===-1?null:{start:s,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(ms={focusedElem:t,selectionRange:l},vu=!1,rt=e;rt!==null;)if(e=rt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,rt=t;else for(;rt!==null;){switch(e=rt,u=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)a=t[l],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&u!==null){t=void 0,l=e,a=u.memoizedProps,u=u.memoizedState,n=l.stateNode;try{var v=pl(l.type,a);t=n.getSnapshotBeforeUpdate(v,u),n.__reactInternalSnapshotBeforeUpdate=t}catch(A){G(l,l.return,A)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)gs(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":gs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(p(163))}if(t=e.sibling,t!==null){t.return=e.return,rt=t;break}rt=e.return}}function fr(t,e,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:re(t,l),n&4&&ca(5,l);break;case 1:if(re(t,l),n&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(i){G(l,l.return,i)}else{var a=pl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){G(l,l.return,i)}}n&64&&ir(l),n&512&&wn(l,l.return);break;case 3:if(re(t,l),n&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{yf(t,e)}catch(i){G(l,l.return,i)}}break;case 27:e===null&&n&4&&_r(l);case 26:case 5:re(t,l),e===null&&n&4&&or(l),n&512&&wn(l,l.return);break;case 12:re(t,l);break;case 31:re(t,l),n&4&&mr(t,l);break;case 13:re(t,l),n&4&&yr(t,l),n&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=mm.bind(null,l),Bm(t,l))));break;case 22:if(n=l.memoizedState!==null||ye,!n){e=e!==null&&e.memoizedState!==null||st,a=ye;var u=st;ye=n,(st=e)&&!u?de(t,l,(l.subtreeFlags&8772)!==0):re(t,l),ye=a,st=u}break;case 30:break;default:re(t,l)}}function rr(t){var e=t.alternate;e!==null&&(t.alternate=null,rr(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Bs(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var et=null,Ot=!1;function fe(t,e,l){for(l=l.child;l!==null;)dr(t,e,l),l=l.sibling}function dr(t,e,l){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(la,l)}catch{}switch(l.tag){case 26:st||ue(l,e),fe(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:st||ue(l,e);var n=et,a=Ot;el(l.type)&&(et=l.stateNode,Ot=!1),fe(t,e,l),Qn(l.stateNode),et=n,Ot=a;break;case 5:st||ue(l,e);case 6:if(n=et,a=Ot,et=null,fe(t,e,l),et=n,Ot=a,et!==null)if(Ot)try{(et.nodeType===9?et.body:et.nodeName==="HTML"?et.ownerDocument.body:et).removeChild(l.stateNode)}catch(u){G(l,e,u)}else try{et.removeChild(l.stateNode)}catch(u){G(l,e,u)}break;case 18:et!==null&&(Ot?(t=et,Xc(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),un(t)):Xc(et,l.stateNode));break;case 4:n=et,a=Ot,et=l.stateNode.containerInfo,Ot=!0,fe(t,e,l),et=n,Ot=a;break;case 0:case 11:case 14:case 15:Ie(2,l,e),st||Ie(4,l,e),fe(t,e,l);break;case 1:st||(ue(l,e),n=l.stateNode,typeof n.componentWillUnmount=="function"&&sr(l,e,n)),fe(t,e,l);break;case 21:fe(t,e,l);break;case 22:st=(n=st)||l.memoizedState!==null,fe(t,e,l),st=n;break;default:fe(t,e,l)}}function mr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{un(t)}catch(l){G(e,e.return,l)}}}function yr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{un(t)}catch(l){G(e,e.return,l)}}function im(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Ec),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Ec),e;default:throw Error(p(435,t.tag))}}function Oa(t,e){var l=im(t);e.forEach(function(n){if(!l.has(n)){l.add(n);var a=ym.bind(null,t,n);n.then(a,a)}})}function Tt(t,e){var l=e.deletions;if(l!==null)for(var n=0;n<l.length;n++){var a=l[n],u=t,i=e,s=i;t:for(;s!==null;){switch(s.tag){case 27:if(el(s.type)){et=s.stateNode,Ot=!1;break t}break;case 5:et=s.stateNode,Ot=!1;break t;case 3:case 4:et=s.stateNode.containerInfo,Ot=!0;break t}s=s.return}if(et===null)throw Error(p(160));dr(u,i,a),et=null,Ot=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)gr(e,t),e=e.sibling}var ee=null;function gr(t,e){var l=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Tt(e,t),Et(t),n&4&&(Ie(3,t,t.return),ca(3,t),Ie(5,t,t.return));break;case 1:Tt(e,t),Et(t),n&512&&(st||l===null||ue(l,l.return)),n&64&&ye&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var a=ee;if(Tt(e,t),Et(t),n&512&&(st||l===null||ue(l,l.return)),n&4){var u=l!==null?l.memoizedState:null;if(n=t.memoizedState,l===null)if(n===null)if(t.stateNode===null){t:{n=t.type,l=t.memoizedProps,a=a.ownerDocument||a;e:switch(n){case"title":u=a.getElementsByTagName("title")[0],(!u||u[ua]||u[ht]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(n),a.head.insertBefore(u,a.querySelector("head > title"))),vt(u,n,l),u[ht]=t,dt(u),n=u;break t;case"link":var i=kc("link","href",a).get(n+(l.href||""));if(i){for(var s=0;s<i.length;s++)if(u=i[s],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(s,1);break e}}u=a.createElement(n),vt(u,n,l),a.head.appendChild(u);break;case"meta":if(i=kc("meta","content",a).get(n+(l.content||""))){for(s=0;s<i.length;s++)if(u=i[s],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(s,1);break e}}u=a.createElement(n),vt(u,n,l),a.head.appendChild(u);break;default:throw Error(p(468,n))}u[ht]=t,dt(u),n=u}t.stateNode=n}else Jc(a,t.type,t.stateNode);else t.stateNode=Vc(a,n,t.memoizedProps);else u!==n?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,n===null?Jc(a,t.type,t.stateNode):Vc(a,n,t.memoizedProps)):n===null&&t.stateNode!==null&&di(t,t.memoizedProps,l.memoizedProps)}break;case 27:Tt(e,t),Et(t),n&512&&(st||l===null||ue(l,l.return)),l!==null&&n&4&&di(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Tt(e,t),Et(t),n&512&&(st||l===null||ue(l,l.return)),t.flags&32){a=t.stateNode;try{$l(a,"")}catch(v){G(t,t.return,v)}}n&4&&t.stateNode!=null&&(a=t.memoizedProps,di(t,a,l!==null?l.memoizedProps:a)),n&1024&&(yi=!0);break;case 6:if(Tt(e,t),Et(t),n&4){if(t.stateNode===null)throw Error(p(162));n=t.memoizedProps,l=t.stateNode;try{l.nodeValue=n}catch(v){G(t,t.return,v)}}break;case 3:if(Za=null,a=ee,ee=hu(e.containerInfo),Tt(e,t),ee=a,Et(t),n&4&&l!==null&&l.memoizedState.isDehydrated)try{un(e.containerInfo)}catch(v){G(t,t.return,v)}yi&&(yi=!1,hr(t));break;case 4:n=ee,ee=hu(t.stateNode.containerInfo),Tt(e,t),Et(t),ee=n;break;case 12:Tt(e,t),Et(t);break;case 31:Tt(e,t),Et(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Oa(t,n)));break;case 13:Tt(e,t),Et(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(wu=wt()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Oa(t,n)));break;case 22:a=t.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,f=ye,y=st;if(ye=f||a,st=y||o,Tt(e,t),st=y,ye=f,Et(t),n&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(l===null||o||ye||st||ol(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){o=l=e;try{if(u=o.stateNode,a)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=o.stateNode;var g=o.memoizedProps.style,r=g!=null&&g.hasOwnProperty("display")?g.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(v){G(o,o.return,v)}}}else if(e.tag===6){if(l===null){o=e;try{o.stateNode.nodeValue=a?"":o.memoizedProps}catch(v){G(o,o.return,v)}}}else if(e.tag===18){if(l===null){o=e;try{var m=o.stateNode;a?Qc(m,!0):Qc(o.stateNode,!1)}catch(v){G(o,o.return,v)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,Oa(t,l))));break;case 19:Tt(e,t),Et(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Oa(t,n)));break;case 30:break;case 21:break;default:Tt(e,t),Et(t)}}function Et(t){var e=t.flags;if(e&2){try{for(var l,n=t.return;n!==null;){if(cr(n)){l=n;break}n=n.return}if(l==null)throw Error(p(160));switch(l.tag){case 27:var a=l.stateNode,u=mi(t);cu(t,u,a);break;case 5:var i=l.stateNode;l.flags&32&&($l(i,""),l.flags&=-33);var s=mi(t);cu(t,s,i);break;case 3:case 4:var o=l.stateNode.containerInfo,f=mi(t);is(t,f,o);break;default:throw Error(p(161))}}catch(y){G(t,t.return,y)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hr(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;hr(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function re(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)fr(t,e.alternate,e),e=e.sibling}function ol(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ie(4,e,e.return),ol(e);break;case 1:ue(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&sr(e,e.return,l),ol(e);break;case 27:Qn(e.stateNode);case 26:case 5:ue(e,e.return),ol(e);break;case 22:e.memoizedState===null&&ol(e);break;case 30:ol(e);break;default:ol(e)}t=t.sibling}}function de(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,a=t,u=e,i=u.flags;switch(u.tag){case 0:case 11:case 15:de(a,u,l),ca(4,u);break;case 1:if(de(a,u,l),n=u,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(f){G(n,n.return,f)}if(n=u,a=n.updateQueue,a!==null){var s=n.stateNode;try{var o=a.shared.hiddenCallbacks;if(o!==null)for(a.shared.hiddenCallbacks=null,a=0;a<o.length;a++)mf(o[a],s)}catch(f){G(n,n.return,f)}}l&&i&64&&ir(u),wn(u,u.return);break;case 27:_r(u);case 26:case 5:de(a,u,l),l&&n===null&&i&4&&or(u),wn(u,u.return);break;case 12:de(a,u,l);break;case 31:de(a,u,l),l&&i&4&&mr(a,u);break;case 13:de(a,u,l),l&&i&4&&yr(a,u);break;case 22:u.memoizedState===null&&de(a,u,l),wn(u,u.return);break;case 30:break;default:de(a,u,l)}e=e.sibling}}function ro(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&sa(l))}function mo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&sa(t))}function te(t,e,l,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pr(t,e,l,n),e=e.sibling}function pr(t,e,l,n){var a=e.flags;switch(e.tag){case 0:case 11:case 15:te(t,e,l,n),a&2048&&ca(9,e);break;case 1:te(t,e,l,n);break;case 3:te(t,e,l,n),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&sa(t)));break;case 12:if(a&2048){te(t,e,l,n),t=e.stateNode;try{var u=e.memoizedProps,i=u.id,s=u.onPostCommit;typeof s=="function"&&s(i,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){G(e,e.return,o)}}else te(t,e,l,n);break;case 31:te(t,e,l,n);break;case 13:te(t,e,l,n);break;case 23:break;case 22:u=e.stateNode,i=e.alternate,e.memoizedState!==null?u._visibility&2?te(t,e,l,n):Hn(t,e):u._visibility&2?te(t,e,l,n):(u._visibility|=2,Yl(t,e,l,n,(e.subtreeFlags&10256)!==0||!1)),a&2048&&ro(i,e);break;case 24:te(t,e,l,n),a&2048&&mo(e.alternate,e);break;default:te(t,e,l,n)}}function Yl(t,e,l,n,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,i=e,s=l,o=n,f=i.flags;switch(i.tag){case 0:case 11:case 15:Yl(u,i,s,o,a),ca(8,i);break;case 23:break;case 22:var y=i.stateNode;i.memoizedState!==null?y._visibility&2?Yl(u,i,s,o,a):Hn(u,i):(y._visibility|=2,Yl(u,i,s,o,a)),a&&f&2048&&ro(i.alternate,i);break;case 24:Yl(u,i,s,o,a),a&&f&2048&&mo(i.alternate,i);break;default:Yl(u,i,s,o,a)}e=e.sibling}}function Hn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,n=e,a=n.flags;switch(n.tag){case 22:Hn(l,n),a&2048&&ro(n.alternate,n);break;case 24:Hn(l,n),a&2048&&mo(n.alternate,n);break;default:Hn(l,n)}e=e.sibling}}var En=8192;function Tl(t,e,l){if(t.subtreeFlags&En)for(t=t.child;t!==null;)br(t,e,l),t=t.sibling}function br(t,e,l){switch(t.tag){case 26:Tl(t,e,l),t.flags&En&&t.memoizedState!==null&&km(l,ee,t.memoizedState,t.memoizedProps);break;case 5:Tl(t,e,l);break;case 3:case 4:var n=ee;ee=hu(t.stateNode.containerInfo),Tl(t,e,l),ee=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=En,En=16777216,Tl(t,e,l),En=n):Tl(t,e,l));break;default:Tl(t,e,l)}}function vr(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function vn(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var n=e[l];rt=n,Sr(n,t)}vr(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xr(t),t=t.sibling}function xr(t){switch(t.tag){case 0:case 11:case 15:vn(t),t.flags&2048&&Ie(9,t,t.return);break;case 3:vn(t);break;case 12:vn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,qa(t)):vn(t);break;default:vn(t)}}function qa(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var n=e[l];rt=n,Sr(n,t)}vr(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ie(8,e,e.return),qa(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,qa(e));break;default:qa(e)}t=t.sibling}}function Sr(t,e){for(;rt!==null;){var l=rt;switch(l.tag){case 0:case 11:case 15:Ie(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:sa(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,rt=n;else t:for(l=t;rt!==null;){n=rt;var a=n.sibling,u=n.return;if(rr(n),n===l){rt=null;break t}if(a!==null){a.return=u,rt=a;break t}rt=u}}}var sm={getCacheForType:function(t){var e=bt(ot),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return bt(ot).controller.signal}},om=typeof WeakMap=="function"?WeakMap:Map,Q=0,K=null,H=null,R=0,q=0,Dt=null,Re=!1,rn=!1,yo=!1,Ee=0,nt=0,Pe=0,dl=0,go=0,jt=0,en=0,Rn=null,Yt=null,ss=!1,wu=0,zr=0,_u=1/0,fu=null,Ve=null,_t=0,ke=null,ln=null,xe=0,os=0,cs=null,Ar=null,Xn=0,_s=null;function Xt(){return Q&2&&R!==0?R&-R:E.T!==null?po():D_()}function Tr(){if(jt===0)if(!(R&536870912)||X){var t=ba;ba<<=1,!(ba&3932160)&&(ba=262144),jt=t}else jt=536870912;return t=Lt.current,t!==null&&(t.flags|=32),jt}function Mt(t,e,l){(t===K&&(q===2||q===9)||t.cancelPendingCommit!==null)&&(nn(t,0),Xe(t,R,jt,!1)),aa(t,l),(!(Q&2)||t!==K)&&(t===K&&(!(Q&2)&&(dl|=l),nt===4&&Xe(t,R,jt,!1)),oe(t))}function Er(t,e,l){if(Q&6)throw Error(p(327));var n=!l&&(e&127)===0&&(e&t.expiredLanes)===0||na(t,e),a=n?fm(t,e):gi(t,e,!0),u=n;do{if(a===0){rn&&!n&&Xe(t,e,0,!1);break}else{if(l=t.current.alternate,u&&!cm(l)){a=gi(t,e,!1),u=!1;continue}if(a===2){if(u=e,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var s=t;a=Rn;var o=s.current.memoizedState.isDehydrated;if(o&&(nn(s,i).flags|=256),i=gi(s,i,!1),i!==2){if(yo&&!o){s.errorRecoveryDisabledLanes|=u,dl|=u,a=4;break t}u=Yt,Yt=a,u!==null&&(Yt===null?Yt=u:Yt.push.apply(Yt,u))}a=i}if(u=!1,a!==2)continue}}if(a===1){nn(t,0),Xe(t,e,0,!0);break}t:{switch(n=t,u=a,u){case 0:case 1:throw Error(p(345));case 4:if((e&4194048)!==e)break;case 6:Xe(n,e,jt,!Re);break t;case 2:Yt=null;break;case 3:case 5:break;default:throw Error(p(329))}if((e&62914560)===e&&(a=wu+300-wt(),10<a)){if(Xe(n,e,jt,!Re),Tu(n,0,!0)!==0)break t;xe=e,n.timeoutHandle=kr(Oc.bind(null,n,l,Yt,fu,ss,e,jt,dl,en,Re,u,"Throttled",-0,0),a);break t}Oc(n,l,Yt,fu,ss,e,jt,dl,en,Re,u,null,-0,0)}}break}while(!0);oe(t)}function Oc(t,e,l,n,a,u,i,s,o,f,y,g,r,m){if(t.timeoutHandle=-1,g=e.subtreeFlags,g&8192||(g&16785408)===16785408){g={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:he},br(e,u,g);var v=(u&62914560)===u?wu-wt():(u&4194048)===u?zr-wt():0;if(v=Jm(g,v),v!==null){xe=u,t.cancelPendingCommit=v(Mc.bind(null,t,e,u,l,n,a,i,s,o,y,g,null,r,m)),Xe(t,u,i,!f);return}}Mc(t,e,u,l,n,a,i,s,o)}function cm(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var a=l[n],u=a.getSnapshot;a=a.value;try{if(!Qt(u(),a))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xe(t,e,l,n){e&=~go,e&=~dl,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var a=e;0<a;){var u=31-Rt(a),i=1<<u;n[u]=-1,a&=~i}l!==0&&M_(t,l,e)}function Hu(){return Q&6?!0:(_a(0),!1)}function ho(){if(H!==null){if(q===0)var t=H.return;else t=H,pe=zl=null,eo(t),kl=null,Jn=0,t=H;for(;t!==null;)ur(t.alternate,t),t=t.return;H=null}}function nn(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Mm(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),xe=0,ho(),K=t,H=l=be(t.current,null),R=e,q=0,Dt=null,Re=!1,rn=na(t,e),yo=!1,en=jt=go=dl=Pe=nt=0,Yt=Rn=null,ss=!1,e&8&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var a=31-Rt(n),u=1<<a;e|=t[a],n&=~u}return Ee=e,Mu(),l}function Or(t,e){Y=null,E.H=Wn,e===fn||e===Cu?(e=uc(),q=3):e===Ks?(e=uc(),q=4):q=e===_o?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Dt=e,H===null&&(nt=1,su(t,Wt(e,t.current)))}function Yr(){var t=Lt.current;return t===null?!0:(R&4194048)===R?$t===null:(R&62914560)===R||R&536870912?t===$t:!1}function Mr(){var t=E.H;return E.H=Wn,t===null?Wn:t}function Ur(){var t=E.A;return E.A=sm,t}function ru(){nt=4,Re||(R&4194048)!==R&&Lt.current!==null||(rn=!0),!(Pe&134217727)&&!(dl&134217727)||K===null||Xe(K,R,jt,!1)}function gi(t,e,l){var n=Q;Q|=2;var a=Mr(),u=Ur();(K!==t||R!==e)&&(fu=null,nn(t,e)),e=!1;var i=nt;t:do try{if(q!==0&&H!==null){var s=H,o=Dt;switch(q){case 8:ho(),i=6;break t;case 3:case 2:case 9:case 6:Lt.current===null&&(e=!0);var f=q;if(q=0,Dt=null,Ll(t,s,o,f),l&&rn){i=0;break t}break;default:f=q,q=0,Dt=null,Ll(t,s,o,f)}}_m(),i=nt;break}catch(y){Or(t,y)}while(!0);return e&&t.shellSuspendCounter++,pe=zl=null,Q=n,E.H=a,E.A=u,H===null&&(K=null,R=0,Mu()),i}function _m(){for(;H!==null;)Cr(H)}function fm(t,e){var l=Q;Q|=2;var n=Mr(),a=Ur();K!==t||R!==e?(fu=null,_u=wt()+500,nn(t,e)):rn=na(t,e);t:do try{if(q!==0&&H!==null){e=H;var u=Dt;e:switch(q){case 1:q=0,Dt=null,Ll(t,e,u,1);break;case 2:case 9:if(ac(u)){q=0,Dt=null,Yc(e);break}e=function(){q!==2&&q!==9||K!==t||(q=7),oe(t)},u.then(e,e);break t;case 3:q=7;break t;case 4:q=5;break t;case 7:ac(u)?(q=0,Dt=null,Yc(e)):(q=0,Dt=null,Ll(t,e,u,7));break;case 5:var i=null;switch(H.tag){case 26:i=H.memoizedState;case 5:case 27:var s=H;if(i?$r(i):s.stateNode.complete){q=0,Dt=null;var o=s.sibling;if(o!==null)H=o;else{var f=s.return;f!==null?(H=f,Ru(f)):H=null}break e}}q=0,Dt=null,Ll(t,e,u,5);break;case 6:q=0,Dt=null,Ll(t,e,u,6);break;case 8:ho(),nt=6;break t;default:throw Error(p(462))}}rm();break}catch(y){Or(t,y)}while(!0);return pe=zl=null,E.H=n,E.A=a,Q=l,H!==null?0:(K=null,R=0,Mu(),nt)}function rm(){for(;H!==null&&!j0();)Cr(H)}function Cr(t){var e=ar(t.alternate,t,Ee);t.memoizedProps=t.pendingProps,e===null?Ru(t):H=e}function Yc(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=xc(l,e,e.pendingProps,e.type,void 0,R);break;case 11:e=xc(l,e,e.pendingProps,e.type.render,e.ref,R);break;case 5:eo(e);default:ur(l,e),e=H=af(e,Ee),e=ar(l,e,Ee)}t.memoizedProps=t.pendingProps,e===null?Ru(t):H=e}function Ll(t,e,l,n){pe=zl=null,eo(e),kl=null,Jn=0;var a=e.return;try{if(tm(t,a,e,l,R)){nt=1,su(t,Wt(l,t.current)),H=null;return}}catch(u){if(a!==null)throw H=a,u;nt=1,su(t,Wt(l,t.current)),H=null;return}e.flags&32768?(X||n===1?t=!0:rn||R&536870912?t=!1:(Re=t=!0,(n===2||n===9||n===3||n===6)&&(n=Lt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Dr(e,t)):Ru(e)}function Ru(t){var e=t;do{if(e.flags&32768){Dr(e,Re);return}t=e.return;var l=nm(e.alternate,e,Ee);if(l!==null){H=l;return}if(e=e.sibling,e!==null){H=e;return}H=e=t}while(e!==null);nt===0&&(nt=5)}function Dr(t,e){do{var l=am(t.alternate,t);if(l!==null){l.flags&=32767,H=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){H=t;return}H=t=l}while(t!==null);nt=6,H=null}function Mc(t,e,l,n,a,u,i,s,o){t.cancelPendingCommit=null;do Xu();while(_t!==0);if(Q&6)throw Error(p(327));if(e!==null){if(e===t.current)throw Error(p(177));if(u=e.lanes|e.childLanes,u|=Ls,V0(t,l,u,i,s,o),t===K&&(H=K=null,R=0),ln=e,ke=t,xe=l,os=u,cs=a,Ar=n,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,gm(Fa,function(){return Hr(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,e.subtreeFlags&13878||n){n=E.T,E.T=null,a=L.p,L.p=2,i=Q,Q|=4;try{um(t,e,l)}finally{Q=i,L.p=a,E.T=n}}_t=1,Nr(),Br(),jr()}}function Nr(){if(_t===1){_t=0;var t=ke,e=ln,l=(e.flags&13878)!==0;if(e.subtreeFlags&13878||l){l=E.T,E.T=null;var n=L.p;L.p=2;var a=Q;Q|=4;try{gr(e,t);var u=ms,i=F_(t.containerInfo),s=u.focusedElem,o=u.selectionRange;if(i!==s&&s&&s.ownerDocument&&W_(s.ownerDocument.documentElement,s)){if(o!==null&&Qs(s)){var f=o.start,y=o.end;if(y===void 0&&(y=f),"selectionStart"in s)s.selectionStart=f,s.selectionEnd=Math.min(y,s.value.length);else{var g=s.ownerDocument||document,r=g&&g.defaultView||window;if(r.getSelection){var m=r.getSelection(),v=s.textContent.length,A=Math.min(o.start,v),B=o.end===void 0?A:Math.min(o.end,v);!m.extend&&A>B&&(i=B,B=A,A=i);var _=$o(s,A),c=$o(s,B);if(_&&c&&(m.rangeCount!==1||m.anchorNode!==_.node||m.anchorOffset!==_.offset||m.focusNode!==c.node||m.focusOffset!==c.offset)){var d=g.createRange();d.setStart(_.node,_.offset),m.removeAllRanges(),A>B?(m.addRange(d),m.extend(c.node,c.offset)):(d.setEnd(c.node,c.offset),m.addRange(d))}}}}for(g=[],m=s;m=m.parentNode;)m.nodeType===1&&g.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<g.length;s++){var h=g[s];h.element.scrollLeft=h.left,h.element.scrollTop=h.top}}vu=!!ds,ms=ds=null}finally{Q=a,L.p=n,E.T=l}}t.current=e,_t=2}}function Br(){if(_t===2){_t=0;var t=ke,e=ln,l=(e.flags&8772)!==0;if(e.subtreeFlags&8772||l){l=E.T,E.T=null;var n=L.p;L.p=2;var a=Q;Q|=4;try{fr(t,e.alternate,e)}finally{Q=a,L.p=n,E.T=l}}_t=3}}function jr(){if(_t===4||_t===3){_t=0,w0();var t=ke,e=ln,l=xe,n=Ar;e.subtreeFlags&10256||e.flags&10256?_t=5:(_t=0,ln=ke=null,wr(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Ve=null),Ns(l),e=e.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(la,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=E.T,a=L.p,L.p=2,E.T=null;try{for(var u=t.onRecoverableError,i=0;i<n.length;i++){var s=n[i];u(s.value,{componentStack:s.stack})}}finally{E.T=e,L.p=a}}xe&3&&Xu(),oe(t),a=t.pendingLanes,l&261930&&a&42?t===_s?Xn++:(Xn=0,_s=t):Xn=0,_a(0)}}function wr(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,sa(e)))}function Xu(){return Nr(),Br(),jr(),Hr()}function Hr(){if(_t!==5)return!1;var t=ke,e=os;os=0;var l=Ns(xe),n=E.T,a=L.p;try{L.p=32>l?32:l,E.T=null,l=cs,cs=null;var u=ke,i=xe;if(_t=0,ln=ke=null,xe=0,Q&6)throw Error(p(331));var s=Q;if(Q|=4,xr(u.current),pr(u,u.current,i,l),Q=s,_a(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(la,u)}catch{}return!0}finally{L.p=a,E.T=n,wr(t,e)}}function Uc(t,e,l){e=Wt(l,e),e=ns(t.stateNode,e,2),t=Ze(t,e,2),t!==null&&(aa(t,2),oe(t))}function G(t,e,l){if(t.tag===3)Uc(t,t,l);else for(;e!==null;){if(e.tag===3){Uc(e,t,l);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ve===null||!Ve.has(n))){t=Wt(l,t),l=If(2),n=Ze(e,l,2),n!==null&&(Pf(l,n,e,t),aa(n,2),oe(n));break}}e=e.return}}function hi(t,e,l){var n=t.pingCache;if(n===null){n=t.pingCache=new om;var a=new Set;n.set(e,a)}else a=n.get(e),a===void 0&&(a=new Set,n.set(e,a));a.has(l)||(yo=!0,a.add(l),t=dm.bind(null,t,e,l),e.then(t,t))}function dm(t,e,l){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,K===t&&(R&l)===l&&(nt===4||nt===3&&(R&62914560)===R&&300>wt()-wu?!(Q&2)&&nn(t,0):go|=l,en===R&&(en=0)),oe(t)}function Rr(t,e){e===0&&(e=Y_()),t=Sl(t,e),t!==null&&(aa(t,e),oe(t))}function mm(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Rr(t,l)}function ym(t,e){var l=0;switch(t.tag){case 31:case 13:var n=t.stateNode,a=t.memoizedState;a!==null&&(l=a.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(p(314))}n!==null&&n.delete(e),Rr(t,l)}function gm(t,e){return Cs(t,e)}var du=null,Ml=null,fs=!1,mu=!1,pi=!1,Qe=0;function oe(t){t!==Ml&&t.next===null&&(Ml===null?du=Ml=t:Ml=Ml.next=t),mu=!0,fs||(fs=!0,pm())}function _a(t,e){if(!pi&&mu){pi=!0;do for(var l=!1,n=du;n!==null;){if(t!==0){var a=n.pendingLanes;if(a===0)var u=0;else{var i=n.suspendedLanes,s=n.pingedLanes;u=(1<<31-Rt(42|t)+1)-1,u&=a&~(i&~s),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,Cc(n,u))}else u=R,u=Tu(n,n===K?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),!(u&3)||na(n,u)||(l=!0,Cc(n,u));n=n.next}while(l);pi=!1}}function hm(){Xr()}function Xr(){mu=fs=!1;var t=0;Qe!==0&&Ym()&&(t=Qe);for(var e=wt(),l=null,n=du;n!==null;){var a=n.next,u=Qr(n,e);u===0?(n.next=null,l===null?du=a:l.next=a,a===null&&(Ml=l)):(l=n,(t!==0||u&3)&&(mu=!0)),n=a}_t!==0&&_t!==5||_a(t),Qe!==0&&(Qe=0)}function Qr(t,e){for(var l=t.suspendedLanes,n=t.pingedLanes,a=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-Rt(u),s=1<<i,o=a[i];o===-1?(!(s&l)||s&n)&&(a[i]=Z0(s,e)):o<=e&&(t.expiredLanes|=s),u&=~s}if(e=K,l=R,l=Tu(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,l===0||t===e&&(q===2||q===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&ku(n),t.callbackNode=null,t.callbackPriority=0;if(!(l&3)||na(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(n!==null&&ku(n),Ns(l)){case 2:case 8:l=E_;break;case 32:l=Fa;break;case 268435456:l=O_;break;default:l=Fa}return n=Lr.bind(null,t),l=Cs(l,n),t.callbackPriority=e,t.callbackNode=l,e}return n!==null&&n!==null&&ku(n),t.callbackPriority=2,t.callbackNode=null,2}function Lr(t,e){if(_t!==0&&_t!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Xu()&&t.callbackNode!==l)return null;var n=R;return n=Tu(t,t===K?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(Er(t,n,e),Qr(t,wt()),t.callbackNode!=null&&t.callbackNode===l?Lr.bind(null,t):null)}function Cc(t,e){if(Xu())return null;Er(t,e,!0)}function pm(){Um(function(){Q&6?Cs(T_,hm):Xr()})}function po(){if(Qe===0){var t=Il;t===0&&(t=pa,pa<<=1,!(pa&261888)&&(pa=256)),Qe=t}return Qe}function Dc(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Na(""+t)}function Nc(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function bm(t,e,l,n,a){if(e==="submit"&&l&&l.stateNode===a){var u=Dc((a[Ut]||null).action),i=n.submitter;i&&(e=(e=i[Ut]||null)?Dc(e.formAction):i.getAttribute("formAction"),e!==null&&(u=e,i=null));var s=new Eu("action","action",null,n,a);t.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Qe!==0){var o=i?Nc(a,i):new FormData(a);es(l,{pending:!0,data:o,method:a.method,action:u},null,o)}}else typeof u=="function"&&(s.preventDefault(),o=i?Nc(a,i):new FormData(a),es(l,{pending:!0,data:o,method:a.method,action:u},u,o))},currentTarget:a}]})}}for(var bi=0;bi<Gi.length;bi++){var vi=Gi[bi],vm=vi.toLowerCase(),xm=vi[0].toUpperCase()+vi.slice(1);le(vm,"on"+xm)}le(I_,"onAnimationEnd");le(P_,"onAnimationIteration");le(tf,"onAnimationStart");le("dblclick","onDoubleClick");le("focusin","onFocus");le("focusout","onBlur");le(Hd,"onTransitionRun");le(Rd,"onTransitionStart");le(Xd,"onTransitionCancel");le(ef,"onTransitionEnd");Fl("onMouseEnter",["mouseout","mouseover"]);Fl("onMouseLeave",["mouseout","mouseover"]);Fl("onPointerEnter",["pointerout","pointerover"]);Fl("onPointerLeave",["pointerout","pointerover"]);bl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bl("onBeforeInput",["compositionend","keypress","textInput","paste"]);bl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fn));function qr(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var n=t[l],a=n.event;n=n.listeners;t:{var u=void 0;if(e)for(var i=n.length-1;0<=i;i--){var s=n[i],o=s.instance,f=s.currentTarget;if(s=s.listener,o!==u&&a.isPropagationStopped())break t;u=s,a.currentTarget=f;try{u(a)}catch(y){Ia(y)}a.currentTarget=null,u=o}else for(i=0;i<n.length;i++){if(s=n[i],o=s.instance,f=s.currentTarget,s=s.listener,o!==u&&a.isPropagationStopped())break t;u=s,a.currentTarget=f;try{u(a)}catch(y){Ia(y)}a.currentTarget=null,u=o}}}}function w(t,e){var l=e[ji];l===void 0&&(l=e[ji]=new Set);var n=t+"__bubble";l.has(n)||(Gr(e,t,2,!1),l.add(n))}function xi(t,e,l){var n=0;e&&(n|=4),Gr(l,t,n,e)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function bo(t){if(!t[Ya]){t[Ya]=!0,N_.forEach(function(l){l!=="selectionchange"&&(Sm.has(l)||xi(l,!1,t),xi(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ya]||(e[Ya]=!0,xi("selectionchange",!1,e))}}function Gr(t,e,l,n){switch(l0(e)){case 2:var a=Fm;break;case 8:a=$m;break;default:a=zo}l=a.bind(null,e,l,t),a=void 0,!Qi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),n?a!==void 0?t.addEventListener(e,l,{capture:!0,passive:a}):t.addEventListener(e,l,!0):a!==void 0?t.addEventListener(e,l,{passive:a}):t.addEventListener(e,l,!1)}function Si(t,e,l,n,a){var u=n;if(!(e&1)&&!(e&2)&&n!==null)t:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var s=n.stateNode.containerInfo;if(s===a)break;if(i===4)for(i=n.return;i!==null;){var o=i.tag;if((o===3||o===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;s!==null;){if(i=Dl(s),i===null)return;if(o=i.tag,o===5||o===6||o===26||o===27){n=u=i;continue t}s=s.parentNode}}n=n.return}L_(function(){var f=u,y=ws(l),g=[];t:{var r=lf.get(t);if(r!==void 0){var m=Eu,v=t;switch(t){case"keypress":if(ja(l)===0)break t;case"keydown":case"keyup":m=yd;break;case"focusin":v="focus",m=$u;break;case"focusout":v="blur",m=$u;break;case"beforeblur":case"afterblur":m=$u;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Lo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=nd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=pd;break;case I_:case P_:case tf:m=id;break;case ef:m=vd;break;case"scroll":case"scrollend":m=ed;break;case"wheel":m=Sd;break;case"copy":case"cut":case"paste":m=od;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Go;break;case"toggle":case"beforetoggle":m=Ad}var A=(e&4)!==0,B=!A&&(t==="scroll"||t==="scrollend"),_=A?r!==null?r+"Capture":null:r;A=[];for(var c=f,d;c!==null;){var h=c;if(d=h.stateNode,h=h.tag,h!==5&&h!==26&&h!==27||d===null||_===null||(h=qn(c,_),h!=null&&A.push($n(c,h,d))),B)break;c=c.return}0<A.length&&(r=new m(r,v,null,l,y),g.push({event:r,listeners:A}))}}if(!(e&7)){t:{if(r=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",r&&l!==Xi&&(v=l.relatedTarget||l.fromElement)&&(Dl(v)||v[on]))break t;if((m||r)&&(r=y.window===y?y:(r=y.ownerDocument)?r.defaultView||r.parentWindow:window,m?(v=l.relatedTarget||l.toElement,m=f,v=v?Dl(v):null,v!==null&&(B=ea(v),A=v.tag,v!==B||A!==5&&A!==27&&A!==6)&&(v=null)):(m=null,v=f),m!==v)){if(A=Lo,h="onMouseLeave",_="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(A=Go,h="onPointerLeave",_="onPointerEnter",c="pointer"),B=m==null?r:An(m),d=v==null?r:An(v),r=new A(h,c+"leave",m,l,y),r.target=B,r.relatedTarget=d,h=null,Dl(y)===f&&(A=new A(_,c+"enter",v,l,y),A.target=d,A.relatedTarget=B,h=A),B=h,m&&v)e:{for(A=zm,_=m,c=v,d=0,h=_;h;h=A(h))d++;h=0;for(var z=c;z;z=A(z))h++;for(;0<d-h;)_=A(_),d--;for(;0<h-d;)c=A(c),h--;for(;d--;){if(_===c||c!==null&&_===c.alternate){A=_;break e}_=A(_),c=A(c)}A=null}else A=null;m!==null&&Bc(g,r,m,A,!1),v!==null&&B!==null&&Bc(g,B,v,A,!0)}}t:{if(r=f?An(f):window,m=r.nodeName&&r.nodeName.toLowerCase(),m==="select"||m==="input"&&r.type==="file")var M=Jo;else if(ko(r))if(J_)M=Bd;else{M=Dd;var x=Cd}else m=r.nodeName,!m||m.toLowerCase()!=="input"||r.type!=="checkbox"&&r.type!=="radio"?f&&js(f.elementType)&&(M=Jo):M=Nd;if(M&&(M=M(t,f))){k_(g,M,l,y);break t}x&&x(t,r,f),t==="focusout"&&f&&r.type==="number"&&f.memoizedProps.value!=null&&Ri(r,"number",r.value)}switch(x=f?An(f):window,t){case"focusin":(ko(x)||x.contentEditable==="true")&&(jl=x,Li=f,Un=null);break;case"focusout":Un=Li=jl=null;break;case"mousedown":qi=!0;break;case"contextmenu":case"mouseup":case"dragend":qi=!1,Io(g,l,y);break;case"selectionchange":if(wd)break;case"keydown":case"keyup":Io(g,l,y)}var T;if(Xs)t:{switch(t){case"compositionstart":var U="onCompositionStart";break t;case"compositionend":U="onCompositionEnd";break t;case"compositionupdate":U="onCompositionUpdate";break t}U=void 0}else Bl?Z_(t,l)&&(U="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(U="onCompositionStart");U&&(G_&&l.locale!=="ko"&&(Bl||U!=="onCompositionStart"?U==="onCompositionEnd"&&Bl&&(T=q_()):(He=y,Hs="value"in He?He.value:He.textContent,Bl=!0)),x=yu(f,U),0<x.length&&(U=new qo(U,t,null,l,y),g.push({event:U,listeners:x}),T?U.data=T:(T=V_(l),T!==null&&(U.data=T)))),(T=Ed?Od(t,l):Yd(t,l))&&(U=yu(f,"onBeforeInput"),0<U.length&&(x=new qo("onBeforeInput","beforeinput",null,l,y),g.push({event:x,listeners:U}),x.data=T)),bm(g,t,f,l,y)}qr(g,e)})}function $n(t,e,l){return{instance:t,listener:e,currentTarget:l}}function yu(t,e){for(var l=e+"Capture",n=[];t!==null;){var a=t,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=qn(t,l),a!=null&&n.unshift($n(t,a,u)),a=qn(t,e),a!=null&&n.push($n(t,a,u))),t.tag===3)return n;t=t.return}return[]}function zm(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Bc(t,e,l,n,a){for(var u=e._reactName,i=[];l!==null&&l!==n;){var s=l,o=s.alternate,f=s.stateNode;if(s=s.tag,o!==null&&o===n)break;s!==5&&s!==26&&s!==27||f===null||(o=f,a?(f=qn(l,u),f!=null&&i.unshift($n(l,f,o))):a||(f=qn(l,u),f!=null&&i.push($n(l,f,o)))),l=l.return}i.length!==0&&t.push({event:e,listeners:i})}var Am=/\r\n?/g,Tm=/\u0000|\uFFFD/g;function jc(t){return(typeof t=="string"?t:""+t).replace(Am,`
`).replace(Tm,"")}function Zr(t,e){return e=jc(e),jc(t)===e}function V(t,e,l,n,a,u){switch(l){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||$l(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&$l(t,""+n);break;case"className":xa(t,"class",n);break;case"tabIndex":xa(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":xa(t,l,n);break;case"style":Q_(t,n,u);break;case"data":if(e!=="object"){xa(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(l);break}n=Na(""+n),t.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&V(t,e,"name",a.name,a,null),V(t,e,"formEncType",a.formEncType,a,null),V(t,e,"formMethod",a.formMethod,a,null),V(t,e,"formTarget",a.formTarget,a,null)):(V(t,e,"encType",a.encType,a,null),V(t,e,"method",a.method,a,null),V(t,e,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(l);break}n=Na(""+n),t.setAttribute(l,n);break;case"onClick":n!=null&&(t.onclick=he);break;case"onScroll":n!=null&&w("scroll",t);break;case"onScrollEnd":n!=null&&w("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(p(60));t.innerHTML=l}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}l=Na(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,""+n):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":n===!0?t.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,n):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(l,n):t.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(l):t.setAttribute(l,n);break;case"popover":w("beforetoggle",t),w("toggle",t),Da(t,"popover",n);break;case"xlinkActuate":ce(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ce(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ce(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ce(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ce(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ce(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ce(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ce(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ce(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Da(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=P0.get(l)||l,Da(t,l,n))}}function rs(t,e,l,n,a,u){switch(l){case"style":Q_(t,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(p(60));t.innerHTML=l}}break;case"children":typeof n=="string"?$l(t,n):(typeof n=="number"||typeof n=="bigint")&&$l(t,""+n);break;case"onScroll":n!=null&&w("scroll",t);break;case"onScrollEnd":n!=null&&w("scrollend",t);break;case"onClick":n!=null&&(t.onclick=he);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!B_.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(a=l.endsWith("Capture"),e=l.slice(2,a?l.length-7:void 0),u=t[Ut]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,a),typeof n=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,n,a);break t}l in t?t[l]=n:n===!0?t.setAttribute(l,""):Da(t,l,n)}}}function vt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":w("error",t),w("load",t);var n=!1,a=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,e));default:V(t,e,u,i,l,null)}}a&&V(t,e,"srcSet",l.srcSet,l,null),n&&V(t,e,"src",l.src,l,null);return;case"input":w("invalid",t);var s=u=i=a=null,o=null,f=null;for(n in l)if(l.hasOwnProperty(n)){var y=l[n];if(y!=null)switch(n){case"name":a=y;break;case"type":i=y;break;case"checked":o=y;break;case"defaultChecked":f=y;break;case"value":u=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,e));break;default:V(t,e,n,y,l,null)}}H_(t,u,s,o,f,i,a,!1);return;case"select":w("invalid",t),n=i=u=null;for(a in l)if(l.hasOwnProperty(a)&&(s=l[a],s!=null))switch(a){case"value":u=s;break;case"defaultValue":i=s;break;case"multiple":n=s;default:V(t,e,a,s,l,null)}e=u,l=i,t.multiple=!!n,e!=null?Gl(t,!!n,e,!1):l!=null&&Gl(t,!!n,l,!0);return;case"textarea":w("invalid",t),u=a=n=null;for(i in l)if(l.hasOwnProperty(i)&&(s=l[i],s!=null))switch(i){case"value":n=s;break;case"defaultValue":a=s;break;case"children":u=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(p(91));break;default:V(t,e,i,s,l,null)}X_(t,n,a,u);return;case"option":for(o in l)if(l.hasOwnProperty(o)&&(n=l[o],n!=null))switch(o){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:V(t,e,o,n,l,null)}return;case"dialog":w("beforetoggle",t),w("toggle",t),w("cancel",t),w("close",t);break;case"iframe":case"object":w("load",t);break;case"video":case"audio":for(n=0;n<Fn.length;n++)w(Fn[n],t);break;case"image":w("error",t),w("load",t);break;case"details":w("toggle",t);break;case"embed":case"source":case"link":w("error",t),w("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(f in l)if(l.hasOwnProperty(f)&&(n=l[f],n!=null))switch(f){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,e));default:V(t,e,f,n,l,null)}return;default:if(js(e)){for(y in l)l.hasOwnProperty(y)&&(n=l[y],n!==void 0&&rs(t,e,y,n,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(n=l[s],n!=null&&V(t,e,s,n,l,null))}function Em(t,e,l,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,i=null,s=null,o=null,f=null,y=null;for(m in l){var g=l[m];if(l.hasOwnProperty(m)&&g!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":o=g;default:n.hasOwnProperty(m)||V(t,e,m,null,n,g)}}for(var r in n){var m=n[r];if(g=l[r],n.hasOwnProperty(r)&&(m!=null||g!=null))switch(r){case"type":u=m;break;case"name":a=m;break;case"checked":f=m;break;case"defaultChecked":y=m;break;case"value":i=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(p(137,e));break;default:m!==g&&V(t,e,r,m,n,g)}}Hi(t,i,s,o,f,y,u,a);return;case"select":m=i=s=r=null;for(u in l)if(o=l[u],l.hasOwnProperty(u)&&o!=null)switch(u){case"value":break;case"multiple":m=o;default:n.hasOwnProperty(u)||V(t,e,u,null,n,o)}for(a in n)if(u=n[a],o=l[a],n.hasOwnProperty(a)&&(u!=null||o!=null))switch(a){case"value":r=u;break;case"defaultValue":s=u;break;case"multiple":i=u;default:u!==o&&V(t,e,a,u,n,o)}e=s,l=i,n=m,r!=null?Gl(t,!!l,r,!1):!!n!=!!l&&(e!=null?Gl(t,!!l,e,!0):Gl(t,!!l,l?[]:"",!1));return;case"textarea":m=r=null;for(s in l)if(a=l[s],l.hasOwnProperty(s)&&a!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:V(t,e,s,null,n,a)}for(i in n)if(a=n[i],u=l[i],n.hasOwnProperty(i)&&(a!=null||u!=null))switch(i){case"value":r=a;break;case"defaultValue":m=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(p(91));break;default:a!==u&&V(t,e,i,a,n,u)}R_(t,r,m);return;case"option":for(var v in l)if(r=l[v],l.hasOwnProperty(v)&&r!=null&&!n.hasOwnProperty(v))switch(v){case"selected":t.selected=!1;break;default:V(t,e,v,null,n,r)}for(o in n)if(r=n[o],m=l[o],n.hasOwnProperty(o)&&r!==m&&(r!=null||m!=null))switch(o){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:V(t,e,o,r,n,m)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var A in l)r=l[A],l.hasOwnProperty(A)&&r!=null&&!n.hasOwnProperty(A)&&V(t,e,A,null,n,r);for(f in n)if(r=n[f],m=l[f],n.hasOwnProperty(f)&&r!==m&&(r!=null||m!=null))switch(f){case"children":case"dangerouslySetInnerHTML":if(r!=null)throw Error(p(137,e));break;default:V(t,e,f,r,n,m)}return;default:if(js(e)){for(var B in l)r=l[B],l.hasOwnProperty(B)&&r!==void 0&&!n.hasOwnProperty(B)&&rs(t,e,B,void 0,n,r);for(y in n)r=n[y],m=l[y],!n.hasOwnProperty(y)||r===m||r===void 0&&m===void 0||rs(t,e,y,r,n,m);return}}for(var _ in l)r=l[_],l.hasOwnProperty(_)&&r!=null&&!n.hasOwnProperty(_)&&V(t,e,_,null,n,r);for(g in n)r=n[g],m=l[g],!n.hasOwnProperty(g)||r===m||r==null&&m==null||V(t,e,g,r,n,m)}function wc(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Om(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),n=0;n<l.length;n++){var a=l[n],u=a.transferSize,i=a.initiatorType,s=a.duration;if(u&&s&&wc(i)){for(i=0,s=a.responseEnd,n+=1;n<l.length;n++){var o=l[n],f=o.startTime;if(f>s)break;var y=o.transferSize,g=o.initiatorType;y&&wc(g)&&(o=o.responseEnd,i+=y*(o<s?1:(s-f)/(o-f)))}if(--n,e+=8*(u+i)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ds=null,ms=null;function gu(t){return t.nodeType===9?t:t.ownerDocument}function Hc(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vr(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ys(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zi=null;function Ym(){var t=window.event;return t&&t.type==="popstate"?t===zi?!1:(zi=t,!0):(zi=null,!1)}var kr=typeof setTimeout=="function"?setTimeout:void 0,Mm=typeof clearTimeout=="function"?clearTimeout:void 0,Rc=typeof Promise=="function"?Promise:void 0,Um=typeof queueMicrotask=="function"?queueMicrotask:typeof Rc<"u"?function(t){return Rc.resolve(null).then(t).catch(Cm)}:kr;function Cm(t){setTimeout(function(){throw t})}function el(t){return t==="head"}function Xc(t,e){var l=e,n=0;do{var a=l.nextSibling;if(t.removeChild(l),a&&a.nodeType===8)if(l=a.data,l==="/$"||l==="/&"){if(n===0){t.removeChild(a),un(e);return}n--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")n++;else if(l==="html")Qn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,Qn(l);for(var u=l.firstChild;u;){var i=u.nextSibling,s=u.nodeName;u[ua]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&Qn(t.ownerDocument.body);l=a}while(l);un(e)}function Qc(t,e){var l=t;t=0;do{var n=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=n}while(l)}function gs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":gs(l),Bs(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Dm(t,e,l,n){for(;t.nodeType===1;){var a=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[ua])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=It(t.nextSibling),t===null)break}return null}function Nm(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=It(t.nextSibling),t===null))return null;return t}function Jr(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=It(t.nextSibling),t===null))return null;return t}function hs(t){return t.data==="$?"||t.data==="$~"}function ps(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Bm(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var n=function(){e(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function It(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var bs=null;function Lc(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return It(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function qc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function Kr(t,e,l){switch(e=gu(l),t){case"html":if(t=e.documentElement,!t)throw Error(p(452));return t;case"head":if(t=e.head,!t)throw Error(p(453));return t;case"body":if(t=e.body,!t)throw Error(p(454));return t;default:throw Error(p(451))}}function Qn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Bs(t)}var Pt=new Map,Gc=new Set;function hu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Oe=L.d;L.d={f:jm,r:wm,D:Hm,C:Rm,L:Xm,m:Qm,X:qm,S:Lm,M:Gm};function jm(){var t=Oe.f(),e=Hu();return t||e}function wm(t){var e=cn(t);e!==null&&e.tag===5&&e.type==="form"?Lf(e):Oe.r(t)}var dn=typeof document>"u"?null:document;function Wr(t,e,l){var n=dn;if(n&&typeof e=="string"&&e){var a=Kt(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof l=="string"&&(a+='[crossorigin="'+l+'"]'),Gc.has(a)||(Gc.add(a),t={rel:t,crossOrigin:l,href:e},n.querySelector(a)===null&&(e=n.createElement("link"),vt(e,"link",t),dt(e),n.head.appendChild(e)))}}function Hm(t){Oe.D(t),Wr("dns-prefetch",t,null)}function Rm(t,e){Oe.C(t,e),Wr("preconnect",t,e)}function Xm(t,e,l){Oe.L(t,e,l);var n=dn;if(n&&t&&e){var a='link[rel="preload"][as="'+Kt(e)+'"]';e==="image"&&l&&l.imageSrcSet?(a+='[imagesrcset="'+Kt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(a+='[imagesizes="'+Kt(l.imageSizes)+'"]')):a+='[href="'+Kt(t)+'"]';var u=a;switch(e){case"style":u=an(t);break;case"script":u=mn(t)}Pt.has(u)||(t=tt({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Pt.set(u,t),n.querySelector(a)!==null||e==="style"&&n.querySelector(fa(u))||e==="script"&&n.querySelector(ra(u))||(e=n.createElement("link"),vt(e,"link",t),dt(e),n.head.appendChild(e)))}}function Qm(t,e){Oe.m(t,e);var l=dn;if(l&&t){var n=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Kt(n)+'"][href="'+Kt(t)+'"]',u=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=mn(t)}if(!Pt.has(u)&&(t=tt({rel:"modulepreload",href:t},e),Pt.set(u,t),l.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(ra(u)))return}n=l.createElement("link"),vt(n,"link",t),dt(n),l.head.appendChild(n)}}}function Lm(t,e,l){Oe.S(t,e,l);var n=dn;if(n&&t){var a=ql(n).hoistableStyles,u=an(t);e=e||"default";var i=a.get(u);if(!i){var s={loading:0,preload:null};if(i=n.querySelector(fa(u)))s.loading=5;else{t=tt({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Pt.get(u))&&vo(t,l);var o=i=n.createElement("link");dt(o),vt(o,"link",t),o._p=new Promise(function(f,y){o.onload=f,o.onerror=y}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Ga(i,e,n)}i={type:"stylesheet",instance:i,count:1,state:s},a.set(u,i)}}}function qm(t,e){Oe.X(t,e);var l=dn;if(l&&t){var n=ql(l).hoistableScripts,a=mn(t),u=n.get(a);u||(u=l.querySelector(ra(a)),u||(t=tt({src:t,async:!0},e),(e=Pt.get(a))&&xo(t,e),u=l.createElement("script"),dt(u),vt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function Gm(t,e){Oe.M(t,e);var l=dn;if(l&&t){var n=ql(l).hoistableScripts,a=mn(t),u=n.get(a);u||(u=l.querySelector(ra(a)),u||(t=tt({src:t,async:!0,type:"module"},e),(e=Pt.get(a))&&xo(t,e),u=l.createElement("script"),dt(u),vt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function Zc(t,e,l,n){var a=(a=Le.current)?hu(a):null;if(!a)throw Error(p(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=an(l.href),l=ql(a).hoistableStyles,n=l.get(e),n||(n={type:"style",instance:null,count:0,state:null},l.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=an(l.href);var u=ql(a).hoistableStyles,i=u.get(t);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=a.querySelector(fa(t)))&&!u._p&&(i.instance=u,i.state.loading=5),Pt.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Pt.set(t,l),u||Zm(a,t,l,i.state))),e&&n===null)throw Error(p(528,""));return i}if(e&&n!==null)throw Error(p(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=mn(l),l=ql(a).hoistableScripts,n=l.get(e),n||(n={type:"script",instance:null,count:0,state:null},l.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,t))}}function an(t){return'href="'+Kt(t)+'"'}function fa(t){return'link[rel="stylesheet"]['+t+"]"}function Fr(t){return tt({},t,{"data-precedence":t.precedence,precedence:null})}function Zm(t,e,l,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),vt(e,"link",l),dt(e),t.head.appendChild(e))}function mn(t){return'[src="'+Kt(t)+'"]'}function ra(t){return"script[async]"+t}function Vc(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+Kt(l.href)+'"]');if(n)return e.instance=n,dt(n),n;var a=tt({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),dt(n),vt(n,"style",a),Ga(n,l.precedence,t),e.instance=n;case"stylesheet":a=an(l.href);var u=t.querySelector(fa(a));if(u)return e.state.loading|=4,e.instance=u,dt(u),u;n=Fr(l),(a=Pt.get(a))&&vo(n,a),u=(t.ownerDocument||t).createElement("link"),dt(u);var i=u;return i._p=new Promise(function(s,o){i.onload=s,i.onerror=o}),vt(u,"link",n),e.state.loading|=4,Ga(u,l.precedence,t),e.instance=u;case"script":return u=mn(l.src),(a=t.querySelector(ra(u)))?(e.instance=a,dt(a),a):(n=l,(a=Pt.get(u))&&(n=tt({},l),xo(n,a)),t=t.ownerDocument||t,a=t.createElement("script"),dt(a),vt(a,"link",n),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(p(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(n=e.instance,e.state.loading|=4,Ga(n,l.precedence,t));return e.instance}function Ga(t,e,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,u=a,i=0;i<n.length;i++){var s=n[i];if(s.dataset.precedence===e)u=s;else if(u!==a)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function vo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function xo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Za=null;function kc(t,e,l){if(Za===null){var n=new Map,a=Za=new Map;a.set(l,n)}else a=Za,n=a.get(l),n||(n=new Map,a.set(l,n));if(n.has(t))return n;for(n.set(t,null),l=l.getElementsByTagName(t),a=0;a<l.length;a++){var u=l[a];if(!(u[ua]||u[ht]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(e)||"";i=t+i;var s=n.get(i);s?s.push(u):n.set(i,[u])}}return n}function Jc(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Vm(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function $r(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function km(t,e,l,n){if(l.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(l.state.loading&4)){if(l.instance===null){var a=an(n.href),u=e.querySelector(fa(a));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=pu.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=u,dt(u);return}u=e.ownerDocument||e,n=Fr(n),(a=Pt.get(a))&&vo(n,a),u=u.createElement("link"),dt(u);var i=u;i._p=new Promise(function(s,o){i.onload=s,i.onerror=o}),vt(u,"link",n),l.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&!(l.state.loading&3)&&(t.count++,l=pu.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var Ai=0;function Jm(t,e){return t.stylesheets&&t.count===0&&Va(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var n=setTimeout(function(){if(t.stylesheets&&Va(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&Ai===0&&(Ai=62500*Om());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Va(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Ai?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function pu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Va(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var bu=null;function Va(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,bu=new Map,e.forEach(Km,t),bu=null,pu.call(t))}function Km(t,e){if(!(e.state.loading&4)){var l=bu.get(t);if(l)var n=l.get(null);else{l=new Map,bu.set(t,l);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var i=a[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),n=i)}n&&l.set(null,n)}a=e.instance,i=a.getAttribute("data-precedence"),u=l.get(i)||n,u===n&&l.set(null,a),l.set(i,a),this.count++,n=pu.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),u?u.parentNode.insertBefore(a,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var In={$$typeof:ge,Provider:null,Consumer:null,_currentValue:cl,_currentValue2:cl,_threadCount:0};function Wm(t,e,l,n,a,u,i,s,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ju(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.hiddenUpdates=Ju(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function Ir(t,e,l,n,a,u,i,s,o,f,y,g){return t=new Wm(t,e,l,i,o,f,y,g,s),e=1,u===!0&&(e|=24),u=Bt(3,null,null,e),t.current=u,u.stateNode=t,e=ks(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:n,isDehydrated:l,cache:e},Ws(u),t}function Pr(t){return t?(t=Rl,t):Rl}function t0(t,e,l,n,a,u){a=Pr(a),n.context===null?n.context=a:n.pendingContext=a,n=Ge(e),n.payload={element:l},u=u===void 0?null:u,u!==null&&(n.callback=u),l=Ze(t,n,e),l!==null&&(Mt(l,t,e),Dn(l,t,e))}function Kc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function So(t,e){Kc(t,e),(t=t.alternate)&&Kc(t,e)}function e0(t){if(t.tag===13||t.tag===31){var e=Sl(t,67108864);e!==null&&Mt(e,t,67108864),So(t,67108864)}}function Wc(t){if(t.tag===13||t.tag===31){var e=Xt();e=Ds(e);var l=Sl(t,e);l!==null&&Mt(l,t,e),So(t,e)}}var vu=!0;function Fm(t,e,l,n){var a=E.T;E.T=null;var u=L.p;try{L.p=2,zo(t,e,l,n)}finally{L.p=u,E.T=a}}function $m(t,e,l,n){var a=E.T;E.T=null;var u=L.p;try{L.p=8,zo(t,e,l,n)}finally{L.p=u,E.T=a}}function zo(t,e,l,n){if(vu){var a=vs(n);if(a===null)Si(t,e,n,xu,l),Fc(t,n);else if(Pm(a,t,e,l,n))n.stopPropagation();else if(Fc(t,n),e&4&&-1<Im.indexOf(t)){for(;a!==null;){var u=cn(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=il(u.pendingLanes);if(i!==0){var s=u;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var o=1<<31-Rt(i);s.entanglements[1]|=o,i&=~o}oe(u),!(Q&6)&&(_u=wt()+500,_a(0))}}break;case 31:case 13:s=Sl(u,2),s!==null&&Mt(s,u,2),Hu(),So(u,2)}if(u=vs(n),u===null&&Si(t,e,n,xu,l),u===a)break;a=u}a!==null&&n.stopPropagation()}else Si(t,e,n,null,l)}}function vs(t){return t=ws(t),Ao(t)}var xu=null;function Ao(t){if(xu=null,t=Dl(t),t!==null){var e=ea(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=v_(e),t!==null)return t;t=null}else if(l===31){if(t=x_(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return xu=t,null}function l0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(H0()){case T_:return 2;case E_:return 8;case Fa:case R0:return 32;case O_:return 268435456;default:return 32}default:return 32}}var xs=!1,Je=null,Ke=null,We=null,Pn=new Map,ta=new Map,je=[],Im="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fc(t,e){switch(t){case"focusin":case"focusout":Je=null;break;case"dragenter":case"dragleave":Ke=null;break;case"mouseover":case"mouseout":We=null;break;case"pointerover":case"pointerout":Pn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function xn(t,e,l,n,a,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:n,nativeEvent:u,targetContainers:[a]},e!==null&&(e=cn(e),e!==null&&e0(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function Pm(t,e,l,n,a){switch(e){case"focusin":return Je=xn(Je,t,e,l,n,a),!0;case"dragenter":return Ke=xn(Ke,t,e,l,n,a),!0;case"mouseover":return We=xn(We,t,e,l,n,a),!0;case"pointerover":var u=a.pointerId;return Pn.set(u,xn(Pn.get(u)||null,t,e,l,n,a)),!0;case"gotpointercapture":return u=a.pointerId,ta.set(u,xn(ta.get(u)||null,t,e,l,n,a)),!0}return!1}function n0(t){var e=Dl(t.target);if(e!==null){var l=ea(e);if(l!==null){if(e=l.tag,e===13){if(e=v_(l),e!==null){t.blockedOn=e,Bo(t.priority,function(){Wc(l)});return}}else if(e===31){if(e=x_(l),e!==null){t.blockedOn=e,Bo(t.priority,function(){Wc(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=vs(t.nativeEvent);if(l===null){l=t.nativeEvent;var n=new l.constructor(l.type,l);Xi=n,l.target.dispatchEvent(n),Xi=null}else return e=cn(l),e!==null&&e0(e),t.blockedOn=l,!1;e.shift()}return!0}function $c(t,e,l){ka(t)&&l.delete(e)}function ty(){xs=!1,Je!==null&&ka(Je)&&(Je=null),Ke!==null&&ka(Ke)&&(Ke=null),We!==null&&ka(We)&&(We=null),Pn.forEach($c),ta.forEach($c)}function Ma(t,e){t.blockedOn===e&&(t.blockedOn=null,xs||(xs=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,ty)))}var Ua=null;function Ic(t){Ua!==t&&(Ua=t,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,function(){Ua===t&&(Ua=null);for(var e=0;e<t.length;e+=3){var l=t[e],n=t[e+1],a=t[e+2];if(typeof n!="function"){if(Ao(n||l)===null)continue;break}var u=cn(l);u!==null&&(t.splice(e,3),e-=3,es(u,{pending:!0,data:a,method:l.method,action:n},n,a))}}))}function un(t){function e(o){return Ma(o,t)}Je!==null&&Ma(Je,t),Ke!==null&&Ma(Ke,t),We!==null&&Ma(We,t),Pn.forEach(e),ta.forEach(e);for(var l=0;l<je.length;l++){var n=je[l];n.blockedOn===t&&(n.blockedOn=null)}for(;0<je.length&&(l=je[0],l.blockedOn===null);)n0(l),l.blockedOn===null&&je.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var a=l[n],u=l[n+1],i=a[Ut]||null;if(typeof u=="function")i||Ic(l);else if(i){var s=null;if(u&&u.hasAttribute("formAction")){if(a=u,i=u[Ut]||null)s=i.formAction;else if(Ao(a)!==null)continue}else s=i.action;typeof s=="function"?l[n+1]=s:(l.splice(n,3),n-=3),Ic(l)}}}function a0(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),n||setTimeout(l,20)}function l(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function To(t){this._internalRoot=t}Qu.prototype.render=To.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(p(409));var l=e.current,n=Xt();t0(l,n,t,e,null,null)};Qu.prototype.unmount=To.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t0(t.current,2,null,t,null,null),Hu(),e[on]=null}};function Qu(t){this._internalRoot=t}Qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=D_();t={blockedOn:null,target:t,priority:e};for(var l=0;l<je.length&&e!==0&&e<je[l].priority;l++);je.splice(l,0,t),l===0&&n0(t)}};var Pc=p_.version;if(Pc!=="19.2.4")throw Error(p(527,Pc,"19.2.4"));L.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=U0(e),t=t!==null?S_(t):null,t=t===null?null:t.stateNode,t};var ey={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{la=Ca.inject(ey),Ht=Ca}catch{}}zu.createRoot=function(t,e){if(!b_(t))throw Error(p(299));var l=!1,n="",a=Wf,u=Ff,i=$f;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ir(t,1,!1,null,null,l,n,null,a,u,i,a0),t[on]=e.current,bo(t),new To(e)};zu.hydrateRoot=function(t,e,l){if(!b_(t))throw Error(p(299));var n=!1,a="",u=Wf,i=Ff,s=$f,o=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(o=l.formState)),e=Ir(t,1,!0,e,l??null,n,a,o,u,i,s,a0),e.context=Pr(null),l=e.current,n=Xt(),n=Ds(n),a=Ge(n),a.callback=null,Ze(l,a,n),l=n,e.current.lanes=l,aa(e,l),oe(e),t[on]=e.current,bo(t),new Qu(e)};zu.version="19.2.4";function u0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u0)}catch(t){console.error(t)}}u0(),f_.exports=zu;var ly=f_.exports,ny=`svg[fill=none] {
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
}`,ay={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",t.textContent=ny,document.head.appendChild(t))}var J=ay,uy=({size:t=24})=>b.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Ti="__agentation_freeze";function iy(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Ti]||(t[Ti]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Ti]}var yt=iy();typeof window<"u"&&!yt.installed&&(yt.origSetTimeout=window.setTimeout.bind(window),yt.origSetInterval=window.setInterval.bind(window),yt.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,e,...l)=>typeof t=="string"?yt.origSetTimeout(t,e):yt.origSetTimeout((...n)=>{yt.frozen?yt.frozenTimeoutQueue.push(()=>t(...n)):t(...n)},e,...l),window.setInterval=(t,e,...l)=>typeof t=="string"?yt.origSetInterval(t,e):yt.origSetInterval((...n)=>{yt.frozen||t(...n)},e,...l),window.requestAnimationFrame=t=>yt.origRAF(e=>{yt.frozen?yt.frozenRAFQueue.push(t):t(e)}),yt.installed=!0);var El=yt.origSetTimeout;yt.origSetInterval;Z.forwardRef(function({element:e,timestamp:l,selectedText:n,placeholder:a="What should change?",initialValue:u="",submitLabel:i="Add",onSubmit:s,onCancel:o,onDelete:f,style:y,accentColor:g="#3c82f7",isExiting:r=!1,lightMode:m=!1,computedStyles:v},A){const[B,_]=Z.useState(u),[c,d]=Z.useState(!1),[h,z]=Z.useState("initial"),[M,x]=Z.useState(!1),[T,U]=Z.useState(!1),D=Z.useRef(null),At=Z.useRef(null),qt=Z.useRef(null),Ye=Z.useRef(null);Z.useEffect(()=>{r&&h!=="exit"&&z("exit")},[r,h]),Z.useEffect(()=>{El(()=>{z("enter")},0);const C=El(()=>{z("entered")},200),F=El(()=>{const Gt=D.current;Gt&&(Gt.focus(),Gt.selectionStart=Gt.selectionEnd=Gt.value.length,Gt.scrollTop=Gt.scrollHeight)},50);return()=>{clearTimeout(C),clearTimeout(F),qt.current&&clearTimeout(qt.current),Ye.current&&clearTimeout(Ye.current)}},[]);const da=Z.useCallback(()=>{Ye.current&&clearTimeout(Ye.current),d(!0),Ye.current=El(()=>{var C;d(!1),(C=D.current)==null||C.focus()},250)},[]);Z.useImperativeHandle(A,()=>({shake:da}),[da]);const ll=Z.useCallback(()=>{z("exit"),qt.current=El(()=>{o()},150)},[o]),S=Z.useCallback(()=>{B.trim()&&s(B.trim())},[B,s]),j=Z.useCallback(C=>{C.nativeEvent.isComposing||(C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),S()),C.key==="Escape"&&ll())},[S,ll]),N=[J.popup,m?J.light:"",h==="enter"?J.enter:"",h==="entered"?J.entered:"",h==="exit"?J.exit:"",c?J.shake:""].filter(Boolean).join(" ");return b.jsxs("div",{ref:At,className:N,"data-annotation-popup":!0,style:y,onClick:C=>C.stopPropagation(),children:[b.jsxs("div",{className:J.header,children:[v&&Object.keys(v).length>0?b.jsxs("button",{className:J.headerToggle,onClick:()=>{const C=T;U(!T),C&&El(()=>{var F;return(F=D.current)==null?void 0:F.focus()},0)},type:"button",children:[b.jsx("svg",{className:`${J.chevron} ${T?J.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),b.jsx("span",{className:J.element,children:e})]}):b.jsx("span",{className:J.element,children:e}),l&&b.jsx("span",{className:J.timestamp,children:l})]}),v&&Object.keys(v).length>0&&b.jsx("div",{className:`${J.stylesWrapper} ${T?J.expanded:""}`,children:b.jsx("div",{className:J.stylesInner,children:b.jsx("div",{className:J.stylesBlock,children:Object.entries(v).map(([C,F])=>b.jsxs("div",{className:J.styleLine,children:[b.jsx("span",{className:J.styleProperty,children:C.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",b.jsx("span",{className:J.styleValue,children:F}),";"]},C))})})}),n&&b.jsxs("div",{className:J.quote,children:["“",n.slice(0,80),n.length>80?"...":"","”"]}),b.jsx("textarea",{ref:D,className:J.textarea,style:{borderColor:M?g:void 0},placeholder:a,value:B,onChange:C=>_(C.target.value),onFocus:()=>x(!0),onBlur:()=>x(!1),rows:2,onKeyDown:j}),b.jsxs("div",{className:J.actions,children:[f&&b.jsx("div",{className:J.deleteWrapper,children:b.jsx("button",{className:J.deleteButton,onClick:f,type:"button",children:b.jsx(uy,{size:22})})}),b.jsx("button",{className:J.cancel,onClick:ll,children:"Cancel"}),b.jsx("button",{className:J.submit,style:{backgroundColor:g,opacity:B.trim()?1:.4},onClick:S,disabled:!B.trim(),children:i})]})]})});var sy=`svg[fill=none] {
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
}`;if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",t.textContent=sy,document.head.appendChild(t))}const oy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAsQSURBVHgB7Z1tbFtXGcefc339kjjJnDZr8+KkTksHSYuSbuvKyhgJb9VWUJMJrV8mpaHwASb6JkElQJRKm5iERFoh8QXROkj7MD60KUIIBKgZA01Uok0HTYqoqNskTdelrZsXx3Gu79nzXMfXdmI71/fFjhv/pJt7j4/vtf33yXOec55zHzMoIDdv3vTMOW0dAIKPc2hjDHz4sE+p5It77QRxCwCDIF4rgNe6yhgfcoWloebm5iAUCAZ5hAQNu8R2HmX7QIAuHSLqZYjjxph8obW+aQDySF4EHpkY7ZBl1oMv1oVFDxSWIIo9IAi8v6WucRAsxjKBY63VcZjL/AgUXtRMBNCcnNzm9frBIkwXuEiEXQrZ7tOt9d5TYDKmCjx8+3YXiEJfHm2r2Zjeok0ReGRiAr2A6FkUtgMeBxgbYEw42lJXFwCDCGCQ63fvoDmIXnlsxCU476LPdG1s7AAYRHcLjvmw9hMo7BF4nGFwCm3zUdCJLoEVkyBHz+NhO6wNhphg69ZjMnIWeNHeXjSzI5uemgIzcDid4MTNIgIocmeuIucksFXivvKVPTD96BEY5cdv/RRe3rcPLCRnkUWtT7RC3Dgk7pQJrTgyPw8WQ6bxImqhWWRNXoSV4hYhcZF9Wp6sqQUvdmg+0Mn46Chcev/9tHWSJMGGjRth3bp1YJRrH3yAbSA9DY2N8Nzzz4NJKJ08elKdK83UrSjw8J0xGpkZ8hauDw/DD48eS1tnt9th7969yt4o/7g4CG+f9aet697/qpkCE+2KmwqQ1YXLaiIUR/tx93ONgNpgA8yqT0aBycbgpHUflMgOhxPZ7HFGN234zvh5GjKCTg4d/KZ6LEejMB8KpX0ew2+xtrZW2RslGAxCKMPr2NE/Fh0OtXzw9e9A29NPgykwGMTRXmf6qjSQacDPexYM0NrgVY8bGhpg9+7dUEhu3boFly5dUsu/OPNr+OKePWAaUbm7tWl5tCStiWACnIASuWET+mh+ZunDywSm2bGSv6sLX8ghLuvwlgksy/Jj6TVwzsFqGLDDS1txisCLbpkPSujFs7QVpwhcsr3GoVacXFZHchRa57L+1nv18mWY/OgjtVxdXa0eu1yujO5TviA3MPk9jfz7Pyn1JnoUnpHR0Y6WxtiSANVNuzY+fpYBPwA6+e7Bg/DXP/5JLe/cuRNWMzdu3ICHDx+q5eHxMTALFNXf0uDtpWMh8aD+QUWJVLA77Yp3dorASri9eNYwFAOesCgqE2SKDeY22z4G1rkxDhyiVlVVqeWZmRkIh8PKMdlGmqqMD5XpcaqPQ+c5koa4k5OTplzXajhTlokNxjo5ztutXKUmiiJUVFSo5bgIBAngdrtBEBIOTbIQ1EGWl5er5WSBjVzXchij2NUR4QraCnwvayU6nE98ZIdFFy0nlcF0klsOtSYcIaatp32mOoJGYMn1Zl3XjNm7lYg4bR0i58yS1uv1JmbT5ubmYGws4QaRbYyHiEiEu3fvqmKQOUg+9/79+8pm9nVHMYxlNVEQfCK+g3YawpmN1pZGUF2mVqq3Ba903Xy0YMahTcBX3QQlLAE9CZ+I9tdjxpf54rNNUOf8tFre2VapHkciTpiasqll6vnJO1DeBL6LR/VuiE92uZwuqKhMeAZTXg9EFhLrHWpqahLXnY/A1PT6xHXdleAqcy5eV4bJxihgG45dF18v2ePYWN6MERDjkeys4MSZuHjjiWFef+0ZKI9UZ3lGfdpHGbeBPfSUsjcVFoVIeRm2omiGJ9SklAJgDWSUSiM46/CZ37uVSEHz2rSluBbGoCo8tFhi4JTuaj7XtrAe/4PdyjH54B9OTmPMMP1QfX2VG+2yQ9N1H07PQigcib8l4ALZ3Nh1XRULULluLuO5G6Z/rx7Pi7XwqOxZMAPdAovRabS5/wc9MNkFNik2hyCjsDOheyBnCOk8UVEOWpmPSDA7l7wAMLFaiIkyVGY5V+9nWYmSibCYksAWo9tE5IKA5sAebkpf53DCU68cwncSs7N+vx96e3vV+nNvHYZ9Lz4DWqh77iWo37BFOaZVPs3Nzco+He+c6oavfWErWE2pBVtMSWCLscxExL0EgsllmZ+Ifhp/iDNitliP73vCBl1JJqF2vfZxEA9hEPNBbJbMhpPre3e3weziJHtgYhKG/ncL8g3DaKquWFFFeARqZv+csd45sx1WE/1/eA++8cav1HI2GxxybIZ7lV8FMyiZCIsRcMQTgBJWEbTMBif/O7ZvbYJD+01ci1s8BEjgAID5C/7I5sV5hJ3WmhSYQZAig/nvWtcIGDLCFiwIQzjh1ANFQnA68yJCl8OOM2/GbwczCwzWXBVBkgNgKx5nYsvXj2Ws++X3emH/l3bBaoFF+ZA4H40OOotI4GwtOByJwGrCJUlDwg66FbTkqlmBkhBPcdNw0vuCwFJXZq+EZKuCGWeLWnYtjIMom5P3IRs9L38uY52v7knQS/JniYj6rxMHAypKuEcR2MZhAA1yTgKH7Q3KFodCLmLEeoHP/OhbYAWTFV8GMxGYfEHZ058w2gqI5X4sYQ7BTy6mcFQEVuwwjylewjhoHtQ7PtWhMuPMj2ai4P7w365ch9O/Tdzrcfz4cdi16zPaTp4YAT71oaanUtT4XuULYAky748fqgLTXTE4dUlmoqALUW7ivO3Au/9Syz1H7MDWNWo6lytzwdoEnrfX4rTkFrCAQPwOIyLFAebAT0MJQ+Dw+GRyOUXgSESi5JiF7exYbGlpfMsF62+WXZFAy5K8lykCU2entxVTBCCw/pC66aXnpRdA+nu/uvX3vaGs69Wy/aa/HwoKh2XaLRsjK6240CM7lrRBbBG2lq3ABFq9y9PjLhNYcdkkWXeuxrXKUtsbJ21EgzJ3DN8ZG1wNGVV3bdfe0/vqaqAgMDbQ0tDgT1clZj7H1st59AoU2G37/mvmRHctJEi5hjNVZpynVFIHZmj2JRKgaciayDnrRDAZbZxpK/nGmUBtWlZIR75iVHlBkn7icNg/z4osV3A4sgDHTr8N4fkFpbyheSu82fdztf5T27aBQYZaGxtXTL+zosDkVYxMTHQXW3JQEvidv/wTIyCzSrl7fx28+YNXwSQozW23lidqihWRjcFOr7MU+VDIKYew5oUndEHKm8vB2pZM/9LU+owSnAlBZVUVyCx2e5jTYUpmbOsSNBP5EPl3712Gb//MD0Yhcc+cOwdVVU8oZYfx1OO6UoznvHQqLrLMo+et6PjmMDIct5tGiGLLJXErkxJ2GEB3knxd8Xp6oW0N3h1rwoXDz1gWWejUIy5haPHfdnRTRsbGhjAS0lfucHrstsTtsD09ieBIW5P2e4I3bdqUcu7s/DxE5dwTWjhcTnAYs7tBGmihK2bo941M+6mdpurqvnKnM23mKv7gNvD/vguaeHIzCJ/4rFocfTAJM2HLk9+nwmCQpgpWxU/tEPRG3C4X+YV0e1AAipeAkqa23ttphriEqWumMALhx60ZYnnNA1A8BLnMT6Kt3ZEuB7ARLE37IUnSAYw0nOCRkI/NPkhUJEd/bSKwzbvwq46tiuQONzB3Ii1CCL2K5Mn00Qf3wURI2NPlknTKqt/9tPRGRFEU/bjzo0Ad4HQfwGNKdeVJif4yAZjHq96IuPQbd5v/0zmxn5zE0Hpy9Ncq8nKnJ5qNQdzRRq2xS5bmulDWNgz05GcCiYb4UX6BFoTQikerWms68iJwMig22TjFzvErZz2SZGunxHjYGbRB7FYGT9I+hwurNj8Q/9lfWvtcFo0O5lPQpXwMqNZ1Y7Gza4oAAAAASUVORK5CYII=",cy="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_3508_29716'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='72'%20height='72'%3e%3crect%20width='72'%20height='72'%20rx='19.6364'%20fill='%23F9FBFD'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_3508_29716)'%3e%3crect%20x='-0.203125'%20width='72.2024'%20height='72'%20rx='19.6364'%20fill='%23199B61'/%3e%3cpath%20d='M18.3262%2034.8875C19.1522%2034.8875%2019.9392%2035.054%2020.6562%2035.3542C20.5336%2035.97%2020.4688%2036.6068%2020.4688%2037.2585C20.4688%2039.9795%2021.5909%2042.4379%2023.3955%2044.2C22.32%2045.8613%2020.4526%2046.9616%2018.3262%2046.9617C14.9919%2046.9617%2012.2891%2044.2588%2012.2891%2040.9246C12.2892%2037.5905%2014.992%2034.8875%2018.3262%2034.8875ZM30.1719%2027.5564C31.7294%2027.5564%2033.2006%2027.9256%2034.5049%2028.5779C33.809%2030.1812%2033.4229%2031.9501%2033.4229%2033.8093C33.4229%2037.6214%2035.0445%2041.0546%2037.6357%2043.4568C35.8561%2045.5978%2033.1735%2046.9616%2030.1719%2046.9617C27.5348%2046.9613%2025.1445%2045.9077%2023.3955%2044.2C24.0064%2043.2563%2024.3633%2042.1324%2024.3633%2040.9246C24.3631%2038.4165%2022.8334%2036.266%2020.6562%2035.3542C21.5417%2030.9083%2025.466%2027.557%2030.1719%2027.5564ZM46.5752%2020.657C53.8388%2020.6572%2059.7274%2026.5457%2059.7275%2033.8093C59.7275%2041.0731%2053.8389%2046.9615%2046.5752%2046.9617C43.1234%2046.9617%2039.9821%2045.632%2037.6357%2043.4568C39.0331%2041.7756%2039.874%2039.6155%2039.874%2037.2585C39.8737%2033.4579%2037.6877%2030.1696%2034.5049%2028.5779C36.5278%2023.9173%2041.1707%2020.657%2046.5752%2020.657Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",_y="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_3525_29046'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='72'%20height='72'%3e%3crect%20width='72'%20height='72'%20rx='19.6364'%20fill='%23F9FBFD'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_3525_29046)'%3e%3crect%20x='-0.203125'%20width='72.2024'%20height='72'%20rx='19.6364'%20fill='black'/%3e%3cpath%20d='M17%2041.655C17%2040.7028%2017.7719%2039.9309%2018.7241%2039.9309H33.3793V54.9999H18.7241C17.7719%2054.9999%2017%2054.228%2017%2053.2758V41.655Z'%20fill='white'/%3e%3cpath%20d='M33.3789%2039.9309H53.2755C54.2277%2039.9309%2054.9996%2040.7028%2054.9996%2041.655V53.2758C54.9996%2054.228%2054.2277%2054.9999%2053.2755%2054.9999H49.1267C48.1793%2054.9999%2047.2736%2054.6101%2046.6224%2053.9221L33.3789%2039.9309Z'%20fill='white'/%3e%3cpath%20d='M17%2018.7241C17%2017.7719%2017.7719%2017%2018.7241%2017H31.6552C32.6074%2017%2033.3793%2017.7719%2033.3793%2018.7241V39.9311L17.9881%2024.26C17.3548%2023.6152%2017%2022.7476%2017%2021.8438V18.7241Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",fy="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='72'%20height='72'%20fill='%235A6CFA'/%3e%3cpath%20d='M55.9971%2016.083C55.3509%2016.8041%2054.8456%2017.4047%2054.4053%2017.9902C46.1927%2028.9102%2046.3675%2043.9931%2054.8311%2054.7197C55.1835%2055.1664%2055.5764%2055.6201%2056.0439%2056.1318C55.1066%2055.2937%2054.3402%2054.6578%2053.5869%2054.1152C43.0827%2046.5503%2028.9173%2046.5503%2018.4131%2054.1152C17.6596%2054.6579%2016.8927%2055.2935%2015.9551%2056.1318C16.4229%2055.6199%2016.8164%2055.1665%2017.1689%2054.7197C25.6325%2043.9931%2025.8073%2028.9102%2017.5947%2017.9902C17.1543%2017.4046%2016.6484%2016.8043%2016.002%2016.083C16.5084%2016.544%2016.9591%2016.9328%2017.4023%2017.2812C28.3165%2025.8602%2043.6835%2025.8602%2054.5977%2017.2812C55.0408%2016.9329%2055.4909%2016.5438%2055.9971%2016.083Z'%20fill='url(%23paint0_linear_3525_29032)'%20stroke='url(%23paint1_linear_3525_29032)'%20stroke-width='0.28125'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_3525_29032'%20x1='36'%20y1='11.7422'%20x2='36'%20y2='60.2578'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_3525_29032'%20x1='36'%20y1='11.7422'%20x2='36'%20y2='48.4453'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Ss="/portfolio/assets/Group%20427318942-D_-q_n6o.png",zs="/portfolio/assets/Group%20427318941-D5mVX3q2.png",ry={date:"JULY 2020",title:"How Rive Became Our Marketing Template Engine",description:"Making sure mobile device works across all different devices available on the market. Easy way.",image:Ss,blogPost:{intro:["For a long time, I had a love–hate relationship with Adobe After Effects.","I loved what it could do. The polish. The control. The cinematic results.","But I hated the workflow.","","Every small change meant re-rendering. Every new size meant duplicating compositions. Every campaign variant meant exporting the same asset 50–100 times. The results were great — but the time-to-effect was painfully high. In a high-pace startup environment, that's a serious problem.","","Eventually, I became the bottleneck.","","I was usually the only person who could handle rendering, exporting, and troubleshooting. My time was too valuable to spend pushing pixels through export queues.","Something had to change."],sections:[{image:Ss,heading:"The Shift: From Rendered Video to Interactive Systems",body:["That shift came with Rive.","What immediately stood out was its component system — something that felt very familiar coming from Figma. Instead of thinking in rendered timelines, I started thinking in reusable systems.","","In After Effects, every variant meant: duplicate comp → update text → re-render → repeat.","","In Rive, the workflow became: create a template → expose inputs → let others generate variations.","","That difference is massive. It moved us from a render-on-demand model to a self-service model. Anyone on the team could now produce a polished animation by filling in a few fields."]},{image:zs,heading:"Building the System",body:["The first template we built was a product launch animation — a looping background for social ads. It had three inputs: headline text, accent color, and logo.","","We connected it to a simple Notion table. Marketing filled in the fields. The Rive file did the rest. We went from a 3-day turnaround to under an hour.","","From there we expanded the system: announcement cards, tutorial overlays, event banners. Each one built on the same reusable component structure.","","The result is a library that compounds in value over time. Every new template makes the next one faster to build. Every input added makes the system more flexible without increasing complexity."]}]}},dy={date:"JULY 2020",title:"Creating scalable multi-device mobile system.",description:"Making sure mobile device works across all different devices available on the market. Easy way.",image:zs,blogPost:{intro:["Designing for mobile used to mean designing for one screen. Then two. Now it means designing for hundreds of device configurations — different sizes, densities, aspect ratios, and notch placements.","","The old approach was to design for the most popular device and hope the edges held. That worked when the spread was narrow. It doesn't work anymore.","","We needed a system, not a set of artboards."],sections:[{image:zs,heading:"Starting with Constraints, Not Pixels",body:["The shift started when we stopped thinking in fixed pixel dimensions and started thinking in constraints.","","Instead of: 'this card is 375px wide', we asked: 'what is this card relative to?'. The answer was almost always: relative to its container, with some minimum and maximum bounds.","","That reframe changes everything. Components become adaptive by default. Edge cases shrink because the system accounts for them structurally, not as one-off overrides.","","We built our component library on top of auto-layout in Figma, then mapped those constraints directly to SwiftUI and Jetpack Compose primitives. The design file became a near-direct translation to code."]},{image:Ss,heading:"Testing Across the Matrix",body:["Having a constraint-based system is necessary but not sufficient. You still need to validate it.","","We set up a device matrix: 6 iOS sizes × 3 Android families, covering the 90th percentile of our users. Every major screen gets tested on all of them before shipping.","","The wins were immediate. We caught a nav bar clipping issue on SE-class devices that would have affected 12% of our iOS users. We found a scroll bounce inconsistency on Android that caused layout shifts during momentum scroll.","","None of these would have surfaced in a single-device design review. The matrix made them unavoidable."]}]}},i0={avatarUrl:oy,text:"Current Lead Product Designer @ Layer3. Founder of Talebook–research repository app."},my=[{name:"Ample",description:"A new way to amplify your money.",icon:cy,url:"#"},{name:"Layer3",description:"Discover onchain finance with one app.",icon:_y,url:"#"},{name:"Mellow",description:"Parenting coach mobile app.",icon:fy,url:"#"}],yy=[ry,dy];function gy(){return b.jsx("header",{className:"mb-12",children:b.jsx("p",{className:"text-[26px] leading-relaxed text-gray-900 max-w-[671px]",children:i0.text})})}function hy(){return b.jsxs("section",{className:"mb-12",children:[b.jsx("h2",{className:"text-[24px] font-normal text-gray-900 mb-4 pb-4 border-b border-[#F2F2F2]",children:"Projects"}),b.jsx("div",{className:"flex flex-col gap-2",children:my.map(t=>b.jsx("a",{href:t.url,className:"block group hover:bg-[#F9FBFD] active:bg-[#F2F5F7] rounded-[20px] px-[8px] py-[8px] -mx-[8px] transition-colors",children:b.jsxs("div",{className:"flex items-center gap-8",children:[b.jsx("img",{src:t.icon,alt:`${t.name} logo`,className:"w-[64px] h-[64px] rounded-[20px] shrink-0 object-cover group-active:scale-[0.95] transition-transform"}),b.jsxs("div",{className:"flex-1",children:[b.jsx("h3",{className:"text-[18px] font-normal text-gray-900 group-hover:text-gray-600 transition-colors",children:t.name}),b.jsx("p",{className:"text-[16px] text-gray-400",children:t.description})]}),b.jsx("span",{className:"text-gray-300 text-[18px] shrink-0 group-hover:text-gray-400 transition-colors",children:"›"})]})},t.name))})]})}function py({onSelect:t}){return b.jsxs("section",{children:[b.jsx("h2",{className:"text-[24px] font-normal text-gray-900 mb-4 pb-4 border-b border-[#F2F2F2]",children:"Thoughts"}),b.jsx("div",{className:"flex flex-col gap-2",children:yy.map((e,l)=>b.jsx("button",{onClick:()=>t(e),className:"block text-left w-full group hover:bg-[#F9FBFD] active:bg-[#F2F5F7] rounded-[20px] px-[8px] py-[16px] -mx-[8px] transition-colors",children:b.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 sm:gap-8",children:[b.jsx("span",{className:"text-xs font-normal tracking-wider text-gray-400 uppercase shrink-0 sm:w-[64px] sm:pt-1",children:e.date}),b.jsxs("div",{className:"w-full sm:w-[420px] shrink-0",children:[b.jsx("h3",{className:"text-[18px] font-normal text-gray-900 leading-snug group-hover:text-gray-600 transition-colors",children:e.title}),b.jsx("p",{className:"mt-2 text-[16px] text-gray-400 leading-relaxed",children:e.description})]}),e.image?b.jsx("img",{src:e.image,alt:e.title,className:"w-full sm:flex-1 h-36 bg-gray-100 rounded-xl object-cover group-active:scale-[0.95] transition-transform"}):b.jsx("div",{className:"w-full sm:flex-1 h-36 bg-gray-100 rounded-xl"})]})},l))})]})}function by({thought:t}){const e=t.blogPost;return Z.useEffect(()=>{window.scrollTo(0,0)},[]),b.jsx("div",{className:"bg-white",children:b.jsxs("div",{className:"max-w-[920px] mx-auto px-6 pb-24 flex flex-col items-center gap-[34px]",children:[b.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-[673px]",children:[b.jsx("p",{className:"text-[12px] font-medium tracking-[0.48px] uppercase text-[#73838a]",children:t.date}),b.jsx("h1",{className:"text-[32px] font-normal text-black leading-[1.371]",children:t.title})]}),(e==null?void 0:e.intro)&&b.jsx("div",{className:"w-full max-w-[673px] text-[20px] text-[#404245] leading-[30px]",children:e.intro.map((l,n)=>l===""?b.jsx("p",{className:"mt-[30px]"},n):b.jsx("p",{children:l},n))}),e==null?void 0:e.sections.map((l,n)=>b.jsxs("div",{className:"w-full flex flex-col items-center gap-[34px]",children:[l.image&&b.jsx("div",{className:"w-full rounded-2xl overflow-hidden bg-[#f2f5f7] h-[486px]",children:b.jsx("img",{src:l.image,alt:"",className:"w-full h-full object-cover"})}),(l.heading||l.body.length>0)&&b.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-[673px]",children:[l.heading&&b.jsx("h2",{className:"text-[24px] font-normal text-black leading-[1.371]",children:l.heading}),b.jsx("div",{className:"text-[20px] text-[#404245] leading-[30px]",children:l.body.map((a,u)=>a===""?b.jsx("p",{className:"mt-[30px]"},u):b.jsx("p",{children:a},u))})]})]},n))]})})}const t_=140,vy=()=>b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{d:"M13 8H3M3 8L7 4M3 8L7 12",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})});function e_(t,e){"startViewTransition"in document?document.startViewTransition(()=>h_.flushSync(t)):t()}function xy(){const[t,e]=Z.useState(null),[l,n]=Z.useState(!1),a=Z.useRef(!1),u=Z.useRef(null),i=Z.useRef(null);Z.useEffect(()=>{if(t){n(!1),a.current=!1;return}const o=()=>{var y;const f=window.scrollY>100;f!==a.current&&(a.current=f,i.current=((y=u.current)==null?void 0:y.getBoundingClientRect())??null,n(f))};return window.addEventListener("scroll",o,{passive:!0}),o(),()=>window.removeEventListener("scroll",o)},[t]);const s=!!t||l;return Z.useLayoutEffect(()=>{const o=u.current,f=i.current;if(i.current=null,!o||!f||t)return;const y=o.getBoundingClientRect(),g=f.left-y.left,r=f.top-y.top;if(Math.abs(g)<1&&Math.abs(r)<1)return;o.style.transition="none",o.style.transform=`translate(${g}px, ${r}px)`,o.getBoundingClientRect(),o.style.transition="transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",o.style.transform="";const m=()=>{o.style.transition="",o.style.transform=""};o.addEventListener("transitionend",m,{once:!0})},[s]),b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:s?"fixed top-8 left-9 z-50 flex items-center gap-4":"max-w-[920px] mx-auto px-6 pt-16 pb-5 flex items-center gap-4",children:[b.jsx("img",{ref:u,src:i0.avatarUrl,alt:"Avatar",className:"w-14 h-14 rounded-2xl shrink-0 avatar-img"}),t&&b.jsxs("button",{onClick:()=>e_(()=>{window.scrollTo(0,0),e(null)}),className:"flex items-center gap-[13px] text-[16px] text-black blog-nav-enter hover:opacity-60 transition-opacity bg-white/90 backdrop-blur-xl rounded-2xl px-3 py-2 border border-white/60 shadow-sm",children:[b.jsx(vy,{}),b.jsx("span",{children:"All Thoughts"})]})]}),t?b.jsx("div",{style:{paddingTop:t_},children:b.jsx(by,{thought:t})}):b.jsxs("main",{className:"max-w-[920px] mx-auto px-6 pb-16",style:{paddingTop:l?t_:void 0},children:[b.jsx("div",{className:"fade-in-section",style:{animationDelay:"0s"},children:b.jsx(gy,{})}),b.jsx("div",{className:"fade-in-section",style:{animationDelay:"0.15s"},children:b.jsx(hy,{})}),b.jsx("div",{id:"thoughts",className:"fade-in-section",style:{animationDelay:"0.3s"},children:b.jsx(py,{onSelect:o=>e_(()=>e(o))})})]}),!1]})}ly.createRoot(document.getElementById("root")).render(b.jsx(Z.StrictMode,{children:b.jsx(xy,{})}));

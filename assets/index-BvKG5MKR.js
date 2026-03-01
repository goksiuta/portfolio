(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const i of u.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(a){if(a.ep)return;a.ep=!0;const u=l(a);fetch(a.href,u)}})();var ff={exports:{}},Au={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0=Symbol.for("react.transitional.element"),y0=Symbol.for("react.fragment");function _f(e,t,l){var n=null;if(l!==void 0&&(n=""+l),t.key!==void 0&&(n=""+t.key),"key"in t){l={};for(var a in t)a!=="key"&&(l[a]=t[a])}else l=t;return t=l.ref,{$$typeof:m0,type:e,key:n,ref:t!==void 0?t:null,props:l}}Au.Fragment=y0;Au.jsx=_f;Au.jsxs=_f;ff.exports=Au;var b=ff.exports,rf={exports:{}},O={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ys=Symbol.for("react.transitional.element"),g0=Symbol.for("react.portal"),h0=Symbol.for("react.fragment"),p0=Symbol.for("react.strict_mode"),b0=Symbol.for("react.profiler"),v0=Symbol.for("react.consumer"),x0=Symbol.for("react.context"),S0=Symbol.for("react.forward_ref"),z0=Symbol.for("react.suspense"),A0=Symbol.for("react.memo"),df=Symbol.for("react.lazy"),T0=Symbol.for("react.activity"),wo=Symbol.iterator;function E0(e){return e===null||typeof e!="object"?null:(e=wo&&e[wo]||e["@@iterator"],typeof e=="function"?e:null)}var mf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yf=Object.assign,gf={};function on(e,t,l){this.props=e,this.context=t,this.refs=gf,this.updater=l||mf}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hf(){}hf.prototype=on.prototype;function Cs(e,t,l){this.props=e,this.context=t,this.refs=gf,this.updater=l||mf}var ws=Cs.prototype=new hf;ws.constructor=Cs;yf(ws,on.prototype);ws.isPureReactComponent=!0;var Uo=Array.isArray;function Yi(){}var P={H:null,A:null,T:null,S:null},pf=Object.prototype.hasOwnProperty;function Us(e,t,l){var n=l.ref;return{$$typeof:Ys,type:e,key:t,ref:n!==void 0?n:null,props:l}}function O0(e,t){return Us(e.type,t,e.props)}function Ns(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ys}function M0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(l){return t[l]})}var No=/\/+/g;function ku(e,t){return typeof e=="object"&&e!==null&&e.key!=null?M0(""+e.key):t.toString(36)}function Y0(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Yi,Yi):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ml(e,t,l,n,a){var u=typeof e;(u==="undefined"||u==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(u){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ys:case g0:i=!0;break;case df:return i=e._init,Ml(i(e._payload),t,l,n,a)}}if(i)return a=a(e),i=n===""?"."+ku(e,0):n,Uo(a)?(l="",i!=null&&(l=i.replace(No,"$&/")+"/"),Ml(a,t,l,"",function(r){return r})):a!=null&&(Ns(a)&&(a=O0(a,l+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(No,"$&/")+"/")+i)),t.push(a)),1;i=0;var s=n===""?".":n+":";if(Uo(e))for(var o=0;o<e.length;o++)n=e[o],u=s+ku(n,o),i+=Ml(n,t,l,u,a);else if(o=E0(e),typeof o=="function")for(e=o.call(e),o=0;!(n=e.next()).done;)n=n.value,u=s+ku(n,o++),i+=Ml(n,t,l,u,a);else if(u==="object"){if(typeof e.then=="function")return Ml(Y0(e),t,l,n,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function pa(e,t,l){if(e==null)return e;var n=[],a=0;return Ml(e,n,"","",function(u){return t.call(l,u,a++)}),n}function C0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(l){(e._status===0||e._status===-1)&&(e._status=1,e._result=l)},function(l){(e._status===0||e._status===-1)&&(e._status=2,e._result=l)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Do=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},w0={map:pa,forEach:function(e,t,l){pa(e,function(){t.apply(this,arguments)},l)},count:function(e){var t=0;return pa(e,function(){t++}),t},toArray:function(e){return pa(e,function(t){return t})||[]},only:function(e){if(!Ns(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Activity=T0;O.Children=w0;O.Component=on;O.Fragment=h0;O.Profiler=b0;O.PureComponent=Cs;O.StrictMode=p0;O.Suspense=z0;O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P;O.__COMPILER_RUNTIME={__proto__:null,c:function(e){return P.H.useMemoCache(e)}};O.cache=function(e){return function(){return e.apply(null,arguments)}};O.cacheSignal=function(){return null};O.cloneElement=function(e,t,l){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var n=yf({},e.props),a=e.key;if(t!=null)for(u in t.key!==void 0&&(a=""+t.key),t)!pf.call(t,u)||u==="key"||u==="__self"||u==="__source"||u==="ref"&&t.ref===void 0||(n[u]=t[u]);var u=arguments.length-2;if(u===1)n.children=l;else if(1<u){for(var i=Array(u),s=0;s<u;s++)i[s]=arguments[s+2];n.children=i}return Us(e.type,a,n)};O.createContext=function(e){return e={$$typeof:x0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:v0,_context:e},e};O.createElement=function(e,t,l){var n,a={},u=null;if(t!=null)for(n in t.key!==void 0&&(u=""+t.key),t)pf.call(t,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(a[n]=t[n]);var i=arguments.length-2;if(i===1)a.children=l;else if(1<i){for(var s=Array(i),o=0;o<i;o++)s[o]=arguments[o+2];a.children=s}if(e&&e.defaultProps)for(n in i=e.defaultProps,i)a[n]===void 0&&(a[n]=i[n]);return Us(e,u,a)};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:S0,render:e}};O.isValidElement=Ns;O.lazy=function(e){return{$$typeof:df,_payload:{_status:-1,_result:e},_init:C0}};O.memo=function(e,t){return{$$typeof:A0,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=P.T,l={};P.T=l;try{var n=e(),a=P.S;a!==null&&a(l,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(Yi,Do)}catch(u){Do(u)}finally{t!==null&&l.types!==null&&(t.types=l.types),P.T=t}};O.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()};O.use=function(e){return P.H.use(e)};O.useActionState=function(e,t,l){return P.H.useActionState(e,t,l)};O.useCallback=function(e,t){return P.H.useCallback(e,t)};O.useContext=function(e){return P.H.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e,t){return P.H.useDeferredValue(e,t)};O.useEffect=function(e,t){return P.H.useEffect(e,t)};O.useEffectEvent=function(e){return P.H.useEffectEvent(e)};O.useId=function(){return P.H.useId()};O.useImperativeHandle=function(e,t,l){return P.H.useImperativeHandle(e,t,l)};O.useInsertionEffect=function(e,t){return P.H.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return P.H.useLayoutEffect(e,t)};O.useMemo=function(e,t){return P.H.useMemo(e,t)};O.useOptimistic=function(e,t){return P.H.useOptimistic(e,t)};O.useReducer=function(e,t,l){return P.H.useReducer(e,t,l)};O.useRef=function(e){return P.H.useRef(e)};O.useState=function(e){return P.H.useState(e)};O.useSyncExternalStore=function(e,t,l){return P.H.useSyncExternalStore(e,t,l)};O.useTransition=function(){return P.H.useTransition()};O.version="19.2.4";rf.exports=O;var Q=rf.exports,bf={exports:{}},Tu={},vf={exports:{}},xf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,j){var N=S.length;S.push(j);e:for(;0<N;){var w=N-1>>>1,F=S[w];if(0<a(F,j))S[w]=j,S[N]=F,N=w;else break e}}function l(S){return S.length===0?null:S[0]}function n(S){if(S.length===0)return null;var j=S[0],N=S.pop();if(N!==j){S[0]=N;e:for(var w=0,F=S.length,ke=F>>>1;w<ke;){var ga=2*(w+1)-1,Gu=S[ga],al=ga+1,ha=S[al];if(0>a(Gu,N))al<F&&0>a(ha,Gu)?(S[w]=ha,S[al]=N,w=al):(S[w]=Gu,S[ga]=N,w=ga);else if(al<F&&0>a(ha,N))S[w]=ha,S[al]=N,w=al;else break e}}return j}function a(S,j){var N=S.sortIndex-j.sortIndex;return N!==0?N:S.id-j.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var o=[],r=[],m=1,g=null,_=3,y=!1,v=!1,A=!1,D=!1,f=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;function h(S){for(var j=l(r);j!==null;){if(j.callback===null)n(r);else if(j.startTime<=S)n(r),j.sortIndex=j.expirationTime,t(o,j);else break;j=l(r)}}function z(S){if(A=!1,h(S),!v)if(l(o)!==null)v=!0,Y||(Y=!0,Ge());else{var j=l(r);j!==null&&nl(z,j.startTime-S)}}var Y=!1,x=-1,T=5,C=-1;function U(){return D?!0:!(e.unstable_now()-C<T)}function Te(){if(D=!1,Y){var S=e.unstable_now();C=S;var j=!0;try{e:{v=!1,A&&(A=!1,c(x),x=-1),y=!0;var N=_;try{t:{for(h(S),g=l(o);g!==null&&!(g.expirationTime>S&&U());){var w=g.callback;if(typeof w=="function"){g.callback=null,_=g.priorityLevel;var F=w(g.expirationTime<=S);if(S=e.unstable_now(),typeof F=="function"){g.callback=F,h(S),j=!0;break t}g===l(o)&&n(o),h(S)}else n(o);g=l(o)}if(g!==null)j=!0;else{var ke=l(r);ke!==null&&nl(z,ke.startTime-S),j=!1}}break e}finally{g=null,_=N,y=!1}j=void 0}}finally{j?Ge():Y=!1}}}var Ge;if(typeof d=="function")Ge=function(){d(Te)};else if(typeof MessageChannel<"u"){var Yt=new MessageChannel,ya=Yt.port2;Yt.port1.onmessage=Te,Ge=function(){ya.postMessage(null)}}else Ge=function(){f(Te,0)};function nl(S,j){x=f(function(){S(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_next=function(S){switch(_){case 1:case 2:case 3:var j=3;break;default:j=_}var N=_;_=j;try{return S()}finally{_=N}},e.unstable_requestPaint=function(){D=!0},e.unstable_runWithPriority=function(S,j){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var N=_;_=S;try{return j()}finally{_=N}},e.unstable_scheduleCallback=function(S,j,N){var w=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?w+N:w):N=w,S){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=N+F,S={id:m++,callback:j,priorityLevel:S,startTime:N,expirationTime:F,sortIndex:-1},N>w?(S.sortIndex=N,t(r,S),l(o)===null&&S===l(r)&&(A?(c(x),x=-1):A=!0,nl(z,N-w))):(S.sortIndex=F,t(o,S),v||y||(v=!0,Y||(Y=!0,Ge()))),S},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(S){var j=_;return function(){var N=_;_=j;try{return S.apply(this,arguments)}finally{_=N}}}})(xf);vf.exports=xf;var U0=vf.exports,Sf={exports:{}},Ae={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0=Q;function zf(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ct(){}var ze={d:{f:Ct,r:function(){throw Error(zf(522))},D:Ct,C:Ct,L:Ct,m:Ct,X:Ct,S:Ct,M:Ct},p:0,findDOMNode:null},D0=Symbol.for("react.portal");function j0(e,t,l){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D0,key:n==null?null:""+n,children:e,containerInfo:t,implementation:l}}var Yn=N0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Eu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ze;Ae.createPortal=function(e,t){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(zf(299));return j0(e,t,null,l)};Ae.flushSync=function(e){var t=Yn.T,l=ze.p;try{if(Yn.T=null,ze.p=2,e)return e()}finally{Yn.T=t,ze.p=l,ze.d.f()}};Ae.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,ze.d.C(e,t))};Ae.prefetchDNS=function(e){typeof e=="string"&&ze.d.D(e)};Ae.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var l=t.as,n=Eu(l,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,u=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;l==="style"?ze.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:n,integrity:a,fetchPriority:u}):l==="script"&&ze.d.X(e,{crossOrigin:n,integrity:a,fetchPriority:u,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ae.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var l=Eu(t.as,t.crossOrigin);ze.d.M(e,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&ze.d.M(e)};Ae.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var l=t.as,n=Eu(l,t.crossOrigin);ze.d.L(e,l,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ae.preloadModule=function(e,t){if(typeof e=="string")if(t){var l=Eu(t.as,t.crossOrigin);ze.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else ze.d.m(e)};Ae.requestFormReset=function(e){ze.d.r(e)};Ae.unstable_batchedUpdates=function(e,t){return e(t)};Ae.useFormState=function(e,t,l){return Yn.H.useFormState(e,t,l)};Ae.useFormStatus=function(){return Yn.H.useHostTransitionStatus()};Ae.version="19.2.4";function Af(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Af)}catch(e){console.error(e)}}Af(),Sf.exports=Ae;var Tf=Sf.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re=U0,Ef=Q,B0=Tf;function p(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Of(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function na(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function Mf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yf(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jo(e){if(na(e)!==e)throw Error(p(188))}function H0(e){var t=e.alternate;if(!t){if(t=na(e),t===null)throw Error(p(188));return t!==e?null:e}for(var l=e,n=t;;){var a=l.return;if(a===null)break;var u=a.alternate;if(u===null){if(n=a.return,n!==null){l=n;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===l)return jo(a),e;if(u===n)return jo(a),t;u=u.sibling}throw Error(p(188))}if(l.return!==n.return)l=a,n=u;else{for(var i=!1,s=a.child;s;){if(s===l){i=!0,l=a,n=u;break}if(s===n){i=!0,n=a,l=u;break}s=s.sibling}if(!i){for(s=u.child;s;){if(s===l){i=!0,l=u,n=a;break}if(s===n){i=!0,n=u,l=a;break}s=s.sibling}if(!i)throw Error(p(189))}}if(l.alternate!==n)throw Error(p(190))}if(l.tag!==3)throw Error(p(188));return l.stateNode.current===l?e:t}function Cf(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Cf(e),t!==null)return t;e=e.sibling}return null}var ee=Object.assign,R0=Symbol.for("react.element"),ba=Symbol.for("react.transitional.element"),An=Symbol.for("react.portal"),wl=Symbol.for("react.fragment"),wf=Symbol.for("react.strict_mode"),Ci=Symbol.for("react.profiler"),Uf=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),Ds=Symbol.for("react.forward_ref"),wi=Symbol.for("react.suspense"),Ui=Symbol.for("react.suspense_list"),js=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),Ni=Symbol.for("react.activity"),X0=Symbol.for("react.memo_cache_sentinel"),Bo=Symbol.iterator;function gn(e){return e===null||typeof e!="object"?null:(e=Bo&&e[Bo]||e["@@iterator"],typeof e=="function"?e:null)}var Q0=Symbol.for("react.client.reference");function Di(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q0?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wl:return"Fragment";case Ci:return"Profiler";case wf:return"StrictMode";case wi:return"Suspense";case Ui:return"SuspenseList";case Ni:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case An:return"Portal";case ht:return e.displayName||"Context";case Uf:return(e._context.displayName||"Context")+".Consumer";case Ds:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case js:return t=e.displayName||null,t!==null?t:Di(e.type)||"Memo";case wt:t=e._payload,e=e._init;try{return Di(e(t))}catch{}}return null}var Tn=Array.isArray,E=Ef.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=B0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fl={pending:!1,data:null,method:null,action:null},ji=[],Ul=-1;function ot(e){return{current:e}}function ye(e){0>Ul||(e.current=ji[Ul],ji[Ul]=null,Ul--)}function W(e,t){Ul++,ji[Ul]=e.current,e.current=t}var st=ot(null),Gn=ot(null),qt=ot(null),Wa=ot(null);function Fa(e,t){switch(W(qt,t),W(Gn,e),W(st,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qc(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qc(t),e=Ir(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ye(st),W(st,e)}function Fl(){ye(st),ye(Gn),ye(qt)}function Bi(e){e.memoizedState!==null&&W(Wa,e);var t=st.current,l=Ir(t,e.type);t!==l&&(W(Gn,e),W(st,l))}function $a(e){Gn.current===e&&(ye(st),ye(Gn)),Wa.current===e&&(ye(Wa),ea._currentValue=fl)}var Zu,Ho;function il(e){if(Zu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Zu=t&&t[1]||"",Ho=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zu+e+Ho}var Vu=!1;function Ju(e,t){if(!e||Vu)return"";Vu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(y){var _=y}Reflect.construct(e,[],g)}else{try{g.call()}catch(y){_=y}e.call(g.prototype)}}else{try{throw Error()}catch(y){_=y}(g=e())&&typeof g.catch=="function"&&g.catch(function(){})}}catch(y){if(y&&_&&typeof y.stack=="string")return[y.stack,_.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),i=u[0],s=u[1];if(i&&s){var o=i.split(`
`),r=s.split(`
`);for(a=n=0;n<o.length&&!o[n].includes("DetermineComponentFrameRoot");)n++;for(;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;if(n===o.length||a===r.length)for(n=o.length-1,a=r.length-1;1<=n&&0<=a&&o[n]!==r[a];)a--;for(;1<=n&&0<=a;n--,a--)if(o[n]!==r[a]){if(n!==1||a!==1)do if(n--,a--,0>a||o[n]!==r[a]){var m=`
`+o[n].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=n&&0<=a);break}}}finally{Vu=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?il(l):""}function L0(e,t){switch(e.tag){case 26:case 27:case 5:return il(e.type);case 16:return il("Lazy");case 13:return e.child!==t&&t!==null?il("Suspense Fallback"):il("Suspense");case 19:return il("SuspenseList");case 0:case 15:return Ju(e.type,!1);case 11:return Ju(e.type.render,!1);case 1:return Ju(e.type,!0);case 31:return il("Activity");default:return""}}function Ro(e){try{var t="",l=null;do t+=L0(e,l),l=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Hi=Object.prototype.hasOwnProperty,Bs=re.unstable_scheduleCallback,Ku=re.unstable_cancelCallback,q0=re.unstable_shouldYield,G0=re.unstable_requestPaint,He=re.unstable_now,k0=re.unstable_getCurrentPriorityLevel,Nf=re.unstable_ImmediatePriority,Df=re.unstable_UserBlockingPriority,Ia=re.unstable_NormalPriority,Z0=re.unstable_LowPriority,jf=re.unstable_IdlePriority,V0=re.log,J0=re.unstable_setDisableYieldValue,aa=null,Re=null;function Ht(e){if(typeof V0=="function"&&J0(e),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(aa,e)}catch{}}var Xe=Math.clz32?Math.clz32:F0,K0=Math.log,W0=Math.LN2;function F0(e){return e>>>=0,e===0?32:31-(K0(e)/W0|0)|0}var va=256,xa=262144,Sa=4194304;function sl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ou(e,t,l){var n=e.pendingLanes;if(n===0)return 0;var a=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var s=n&134217727;return s!==0?(n=s&~u,n!==0?a=sl(n):(i&=s,i!==0?a=sl(i):l||(l=s&~e,l!==0&&(a=sl(l))))):(s=n&~u,s!==0?a=sl(s):i!==0?a=sl(i):l||(l=n&~e,l!==0&&(a=sl(l)))),a===0?0:t!==0&&t!==a&&!(t&u)&&(u=a&-a,l=t&-t,u>=l||u===32&&(l&4194048)!==0)?t:a}function ua(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bf(){var e=Sa;return Sa<<=1,!(Sa&62914560)&&(Sa=4194304),e}function Wu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function ia(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function I0(e,t,l,n,a,u){var i=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var s=e.entanglements,o=e.expirationTimes,r=e.hiddenUpdates;for(l=i&~l;0<l;){var m=31-Xe(l),g=1<<m;s[m]=0,o[m]=-1;var _=r[m];if(_!==null)for(r[m]=null,m=0;m<_.length;m++){var y=_[m];y!==null&&(y.lane&=-536870913)}l&=~g}n!==0&&Hf(e,n,0),u!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~t))}function Hf(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Xe(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|l&261930}function Rf(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var n=31-Xe(l),a=1<<n;a&t|e[n]&t&&(e[n]|=t),l&=~a}}function Xf(e,t){var l=t&-t;return l=l&42?1:Hs(l),l&(e.suspendedLanes|t)?0:l}function Hs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rs(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Qf(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:c0(e.type))}function Xo(e,t){var l=q.p;try{return q.p=e,t()}finally{q.p=l}}var tl=Math.random().toString(36).slice(2),pe="__reactFiber$"+tl,we="__reactProps$"+tl,cn="__reactContainer$"+tl,Ri="__reactEvents$"+tl,P0="__reactListeners$"+tl,ed="__reactHandles$"+tl,Qo="__reactResources$"+tl,sa="__reactMarker$"+tl;function Xs(e){delete e[pe],delete e[we],delete e[Ri],delete e[P0],delete e[ed]}function Nl(e){var t=e[pe];if(t)return t;for(var l=e.parentNode;l;){if(t=l[cn]||l[pe]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Jc(e);e!==null;){if(l=e[pe])return l;e=Jc(e)}return t}e=l,l=e.parentNode}return null}function fn(e){if(e=e[pe]||e[cn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function En(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(p(33))}function Gl(e){var t=e[Qo];return t||(t=e[Qo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function me(e){e[sa]=!0}var Lf=new Set,qf={};function vl(e,t){$l(e,t),$l(e+"Capture",t)}function $l(e,t){for(qf[e]=t,e=0;e<t.length;e++)Lf.add(t[e])}var td=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lo={},qo={};function ld(e){return Hi.call(qo,e)?!0:Hi.call(Lo,e)?!1:td.test(e)?qo[e]=!0:(Lo[e]=!0,!1)}function Da(e,t,l){if(ld(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function za(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function ft(e,t,l,n){if(n===null)e.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+n)}}function Ve(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nd(e,t,l){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xi(e){if(!e._valueTracker){var t=Gf(e)?"checked":"value";e._valueTracker=nd(e,t,""+e[t])}}function kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),n="";return e&&(n=Gf(e)?e.checked?"true":"false":e.value),e=n,e!==l?(t.setValue(e),!0):!1}function Pa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ad=/[\n"\\]/g;function We(e){return e.replace(ad,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Qi(e,t,l,n,a,u,i,s){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ve(t)):e.value!==""+Ve(t)&&(e.value=""+Ve(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Li(e,i,Ve(t)):l!=null?Li(e,i,Ve(l)):n!=null&&e.removeAttribute("value"),a==null&&u!=null&&(e.defaultChecked=!!u),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+Ve(s):e.removeAttribute("name")}function Zf(e,t,l,n,a,u,i,s){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Xi(e);return}l=l!=null?""+Ve(l):"",t=t!=null?""+Ve(t):l,s||t===e.value||(e.value=t),e.defaultValue=t}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=s?e.checked:!!n,e.defaultChecked=!!n,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Xi(e)}function Li(e,t,l){t==="number"&&Pa(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function kl(e,t,l,n){if(e=e.options,t){t={};for(var a=0;a<l.length;a++)t["$"+l[a]]=!0;for(l=0;l<e.length;l++)a=t.hasOwnProperty("$"+e[l].value),e[l].selected!==a&&(e[l].selected=a),a&&n&&(e[l].defaultSelected=!0)}else{for(l=""+Ve(l),t=null,a=0;a<e.length;a++){if(e[a].value===l){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Vf(e,t,l){if(t!=null&&(t=""+Ve(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Ve(l):""}function Jf(e,t,l,n){if(t==null){if(n!=null){if(l!=null)throw Error(p(92));if(Tn(n)){if(1<n.length)throw Error(p(93));n=n[0]}l=n}l==null&&(l=""),t=l}l=Ve(t),e.defaultValue=l,n=e.textContent,n===l&&n!==""&&n!==null&&(e.value=n),Xi(e)}function Il(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var ud=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Go(e,t,l){var n=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,l):typeof l!="number"||l===0||ud.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Kf(e,t,l){if(t!=null&&typeof t!="object")throw Error(p(62));if(e=e.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var a in t)n=t[a],t.hasOwnProperty(a)&&l[a]!==n&&Go(e,a,n)}else for(var u in t)t.hasOwnProperty(u)&&Go(e,u,t[u])}function Qs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var id=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ja(e){return sd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pt(){}var qi=null;function Ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dl=null,Zl=null;function ko(e){var t=fn(e);if(t&&(e=t.stateNode)){var l=e[we]||null;e:switch(e=t.stateNode,t.type){case"input":if(Qi(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+We(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var n=l[t];if(n!==e&&n.form===e.form){var a=n[we]||null;if(!a)throw Error(p(90));Qi(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<l.length;t++)n=l[t],n.form===e.form&&kf(n)}break e;case"textarea":Vf(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&kl(e,!!l.multiple,t,!1)}}}var Fu=!1;function Wf(e,t,l){if(Fu)return e(t,l);Fu=!0;try{var n=e(t);return n}finally{if(Fu=!1,(Dl!==null||Zl!==null)&&(Xu(),Dl&&(t=Dl,e=Zl,Zl=Dl=null,ko(t),e)))for(t=0;t<e.length;t++)ko(e[t])}}function kn(e,t){var l=e.stateNode;if(l===null)return null;var n=l[we]||null;if(n===null)return null;l=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(p(231,t,typeof l));return l}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gi=!1;if(zt)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){Gi=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{Gi=!1}var Rt=null,qs=null,Ba=null;function Ff(){if(Ba)return Ba;var e,t=qs,l=t.length,n,a="value"in Rt?Rt.value:Rt.textContent,u=a.length;for(e=0;e<l&&t[e]===a[e];e++);var i=l-e;for(n=1;n<=i&&t[l-n]===a[u-n];n++);return Ba=a.slice(e,1<n?1-n:void 0)}function Ha(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Aa(){return!0}function Zo(){return!1}function Ue(e){function t(l,n,a,u,i){this._reactName=l,this._targetInst=a,this.type=n,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(l=e[s],this[s]=l?l(u):u[s]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Aa:Zo,this.isPropagationStopped=Zo,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),t}var xl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mu=Ue(xl),oa=ee({},xl,{view:0,detail:0}),od=Ue(oa),$u,Iu,pn,Yu=ee({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pn&&(pn&&e.type==="mousemove"?($u=e.screenX-pn.screenX,Iu=e.screenY-pn.screenY):Iu=$u=0,pn=e),$u)},movementY:function(e){return"movementY"in e?e.movementY:Iu}}),Vo=Ue(Yu),cd=ee({},Yu,{dataTransfer:0}),fd=Ue(cd),_d=ee({},oa,{relatedTarget:0}),Pu=Ue(_d),rd=ee({},xl,{animationName:0,elapsedTime:0,pseudoElement:0}),dd=Ue(rd),md=ee({},xl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yd=Ue(md),gd=ee({},xl,{data:0}),Jo=Ue(gd),hd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bd[e])?!!t[e]:!1}function Gs(){return vd}var xd=ee({},oa,{key:function(e){if(e.key){var t=hd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ha(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gs,charCode:function(e){return e.type==="keypress"?Ha(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ha(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sd=Ue(xd),zd=ee({},Yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=Ue(zd),Ad=ee({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gs}),Td=Ue(Ad),Ed=ee({},xl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Od=Ue(Ed),Md=ee({},Yu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yd=Ue(Md),Cd=ee({},xl,{newState:0,oldState:0}),wd=Ue(Cd),Ud=[9,13,27,32],ks=zt&&"CompositionEvent"in window,Cn=null;zt&&"documentMode"in document&&(Cn=document.documentMode);var Nd=zt&&"TextEvent"in window&&!Cn,$f=zt&&(!ks||Cn&&8<Cn&&11>=Cn),Wo=" ",Fo=!1;function If(e,t){switch(e){case"keyup":return Ud.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jl=!1;function Dd(e,t){switch(e){case"compositionend":return Pf(t);case"keypress":return t.which!==32?null:(Fo=!0,Wo);case"textInput":return e=t.data,e===Wo&&Fo?null:e;default:return null}}function jd(e,t){if(jl)return e==="compositionend"||!ks&&If(e,t)?(e=Ff(),Ba=qs=Rt=null,jl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $f&&t.locale!=="ko"?null:t.data;default:return null}}var Bd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bd[e.type]:t==="textarea"}function e_(e,t,l,n){Dl?Zl?Zl.push(n):Zl=[n]:Dl=n,t=hu(t,"onChange"),0<t.length&&(l=new Mu("onChange","change",null,l,n),e.push({event:l,listeners:t}))}var wn=null,Zn=null;function Hd(e){Wr(e,0)}function Cu(e){var t=En(e);if(kf(t))return e}function Io(e,t){if(e==="change")return t}var t_=!1;if(zt){var ei;if(zt){var ti="oninput"in document;if(!ti){var Po=document.createElement("div");Po.setAttribute("oninput","return;"),ti=typeof Po.oninput=="function"}ei=ti}else ei=!1;t_=ei&&(!document.documentMode||9<document.documentMode)}function ec(){wn&&(wn.detachEvent("onpropertychange",l_),Zn=wn=null)}function l_(e){if(e.propertyName==="value"&&Cu(Zn)){var t=[];e_(t,Zn,e,Ls(e)),Wf(Hd,t)}}function Rd(e,t,l){e==="focusin"?(ec(),wn=t,Zn=l,wn.attachEvent("onpropertychange",l_)):e==="focusout"&&ec()}function Xd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cu(Zn)}function Qd(e,t){if(e==="click")return Cu(t)}function Ld(e,t){if(e==="input"||e==="change")return Cu(t)}function qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Le=typeof Object.is=="function"?Object.is:qd;function Vn(e,t){if(Le(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),n=Object.keys(t);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var a=l[n];if(!Hi.call(t,a)||!Le(e[a],t[a]))return!1}return!0}function tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lc(e,t){var l=tc(e);e=0;for(var n;l;){if(l.nodeType===3){if(n=e+l.textContent.length,e<=t&&n>=t)return{node:l,offset:t-e};e=n}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=tc(l)}}function n_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?n_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function a_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Pa(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Pa(e.document)}return t}function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Gd=zt&&"documentMode"in document&&11>=document.documentMode,Bl=null,ki=null,Un=null,Zi=!1;function nc(e,t,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Zi||Bl==null||Bl!==Pa(n)||(n=Bl,"selectionStart"in n&&Zs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Un&&Vn(Un,n)||(Un=n,n=hu(ki,"onSelect"),0<n.length&&(t=new Mu("onSelect","select",null,t,l),e.push({event:t,listeners:n}),t.target=Bl)))}function ul(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Hl={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionrun:ul("Transition","TransitionRun"),transitionstart:ul("Transition","TransitionStart"),transitioncancel:ul("Transition","TransitionCancel"),transitionend:ul("Transition","TransitionEnd")},li={},u_={};zt&&(u_=document.createElement("div").style,"AnimationEvent"in window||(delete Hl.animationend.animation,delete Hl.animationiteration.animation,delete Hl.animationstart.animation),"TransitionEvent"in window||delete Hl.transitionend.transition);function Sl(e){if(li[e])return li[e];if(!Hl[e])return e;var t=Hl[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in u_)return li[e]=t[l];return e}var i_=Sl("animationend"),s_=Sl("animationiteration"),o_=Sl("animationstart"),kd=Sl("transitionrun"),Zd=Sl("transitionstart"),Vd=Sl("transitioncancel"),c_=Sl("transitionend"),f_=new Map,Vi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vi.push("scrollEnd");function nt(e,t){f_.set(e,t),vl(t,[e])}var eu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ze=[],Rl=0,Vs=0;function wu(){for(var e=Rl,t=Vs=Rl=0;t<e;){var l=Ze[t];Ze[t++]=null;var n=Ze[t];Ze[t++]=null;var a=Ze[t];Ze[t++]=null;var u=Ze[t];if(Ze[t++]=null,n!==null&&a!==null){var i=n.pending;i===null?a.next=a:(a.next=i.next,i.next=a),n.pending=a}u!==0&&__(l,a,u)}}function Uu(e,t,l,n){Ze[Rl++]=e,Ze[Rl++]=t,Ze[Rl++]=l,Ze[Rl++]=n,Vs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Js(e,t,l,n){return Uu(e,t,l,n),tu(e)}function zl(e,t){return Uu(e,null,null,t),tu(e)}function __(e,t,l){e.lanes|=l;var n=e.alternate;n!==null&&(n.lanes|=l);for(var a=!1,u=e.return;u!==null;)u.childLanes|=l,n=u.alternate,n!==null&&(n.childLanes|=l),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(a=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,a&&t!==null&&(a=31-Xe(l),e=u.hiddenUpdates,n=e[a],n===null?e[a]=[t]:n.push(t),t.lane=l|536870912),u):null}function tu(e){if(50<Ln)throw Ln=0,ds=null,Error(p(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xl={};function Jd(e,t,l,n){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,l,n){return new Jd(e,t,l,n)}function Ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vt(e,t){var l=e.alternate;return l===null?(l=je(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function r_(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ra(e,t,l,n,a,u){var i=0;if(n=e,typeof e=="function")Ks(e)&&(i=1);else if(typeof e=="string")i=Im(e,l,st.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ni:return e=je(31,l,t,a),e.elementType=Ni,e.lanes=u,e;case wl:return _l(l.children,a,u,t);case wf:i=8,a|=24;break;case Ci:return e=je(12,l,t,a|2),e.elementType=Ci,e.lanes=u,e;case wi:return e=je(13,l,t,a),e.elementType=wi,e.lanes=u,e;case Ui:return e=je(19,l,t,a),e.elementType=Ui,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ht:i=10;break e;case Uf:i=9;break e;case Ds:i=11;break e;case js:i=14;break e;case wt:i=16,n=null;break e}i=29,l=Error(p(130,e===null?"null":typeof e,"")),n=null}return t=je(i,l,t,a),t.elementType=e,t.type=n,t.lanes=u,t}function _l(e,t,l,n){return e=je(7,e,n,t),e.lanes=l,e}function ni(e,t,l){return e=je(6,e,null,t),e.lanes=l,e}function d_(e){var t=je(18,null,null,0);return t.stateNode=e,t}function ai(e,t,l){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ac=new WeakMap;function Fe(e,t){if(typeof e=="object"&&e!==null){var l=ac.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Ro(t)},ac.set(e,t),t)}return{value:e,source:t,stack:Ro(t)}}var Ql=[],Ll=0,lu=null,Jn=0,Je=[],Ke=0,$t=null,at=1,ut="";function yt(e,t){Ql[Ll++]=Jn,Ql[Ll++]=lu,lu=e,Jn=t}function m_(e,t,l){Je[Ke++]=at,Je[Ke++]=ut,Je[Ke++]=$t,$t=e;var n=at;e=ut;var a=32-Xe(n)-1;n&=~(1<<a),l+=1;var u=32-Xe(t)+a;if(30<u){var i=a-a%5;u=(n&(1<<i)-1).toString(32),n>>=i,a-=i,at=1<<32-Xe(t)+a|l<<a|n,ut=u+e}else at=1<<u|l<<a|n,ut=e}function Ws(e){e.return!==null&&(yt(e,1),m_(e,1,0))}function Fs(e){for(;e===lu;)lu=Ql[--Ll],Ql[Ll]=null,Jn=Ql[--Ll],Ql[Ll]=null;for(;e===$t;)$t=Je[--Ke],Je[Ke]=null,ut=Je[--Ke],Je[Ke]=null,at=Je[--Ke],Je[Ke]=null}function y_(e,t){Je[Ke++]=at,Je[Ke++]=ut,Je[Ke++]=$t,at=t.id,ut=t.overflow,$t=e}var be=null,I=null,X=!1,Gt=null,$e=!1,Ji=Error(p(519));function It(e){var t=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kn(Fe(t,e)),Ji}function uc(e){var t=e.stateNode,l=e.type,n=e.memoizedProps;switch(t[pe]=e,t[we]=n,l){case"dialog":B("cancel",t),B("close",t);break;case"iframe":case"object":case"embed":B("load",t);break;case"video":case"audio":for(l=0;l<In.length;l++)B(In[l],t);break;case"source":B("error",t);break;case"img":case"image":case"link":B("error",t),B("load",t);break;case"details":B("toggle",t);break;case"input":B("invalid",t),Zf(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":B("invalid",t);break;case"textarea":B("invalid",t),Jf(t,n.value,n.defaultValue,n.children)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||n.suppressHydrationWarning===!0||$r(t.textContent,l)?(n.popover!=null&&(B("beforetoggle",t),B("toggle",t)),n.onScroll!=null&&B("scroll",t),n.onScrollEnd!=null&&B("scrollend",t),n.onClick!=null&&(t.onclick=pt),t=!0):t=!1,t||It(e,!0)}function ic(e){for(be=e.return;be;)switch(be.tag){case 5:case 31:case 13:$e=!1;return;case 27:case 3:$e=!0;return;default:be=be.return}}function Tl(e){if(e!==be)return!1;if(!X)return ic(e),X=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||ps(e.type,e.memoizedProps)),l=!l),l&&I&&It(e),ic(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));I=Vc(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));I=Vc(e)}else t===27?(t=I,ll(e.type)?(e=Ss,Ss=null,I=e):I=t):I=be?Pe(e.stateNode.nextSibling):null;return!0}function yl(){I=be=null,X=!1}function ui(){var e=Gt;return e!==null&&(Ye===null?Ye=e:Ye.push.apply(Ye,e),Gt=null),e}function Kn(e){Gt===null?Gt=[e]:Gt.push(e)}var Ki=ot(null),Al=null,bt=null;function Nt(e,t,l){W(Ki,t._currentValue),t._currentValue=l}function xt(e){e._currentValue=Ki.current,ye(Ki)}function Wi(e,t,l){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===l)break;e=e.return}}function Fi(e,t,l,n){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){var i=a.child;u=u.firstContext;e:for(;u!==null;){var s=u;u=a;for(var o=0;o<t.length;o++)if(s.context===t[o]){u.lanes|=l,s=u.alternate,s!==null&&(s.lanes|=l),Wi(u.return,l,e),n||(i=null);break e}u=s.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(p(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),Wi(i,l,e),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===e){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function _n(e,t,l,n){e=null;for(var a=t,u=!1;a!==null;){if(!u){if(a.flags&524288)u=!0;else if(a.flags&262144)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(p(387));if(i=i.memoizedProps,i!==null){var s=a.type;Le(a.pendingProps.value,i.value)||(e!==null?e.push(s):e=[s])}}else if(a===Wa.current){if(i=a.alternate,i===null)throw Error(p(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(ea):e=[ea])}a=a.return}e!==null&&Fi(t,e,l,n),t.flags|=262144}function nu(e){for(e=e.firstContext;e!==null;){if(!Le(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gl(e){Al=e,bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ve(e){return g_(Al,e)}function Ta(e,t){return Al===null&&gl(e),g_(e,t)}function g_(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},bt===null){if(e===null)throw Error(p(308));bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else bt=bt.next=t;return l}var Kd=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Wd=re.unstable_scheduleCallback,Fd=re.unstable_NormalPriority,ce={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $s(){return{controller:new Kd,data:new Map,refCount:0}}function ca(e){e.refCount--,e.refCount===0&&Wd(Fd,function(){e.controller.abort()})}var Nn=null,$i=0,Pl=0,Vl=null;function $d(e,t){if(Nn===null){var l=Nn=[];$i=0,Pl=zo(),Vl={status:"pending",value:void 0,then:function(n){l.push(n)}}}return $i++,t.then(sc,sc),t}function sc(){if(--$i===0&&Nn!==null){Vl!==null&&(Vl.status="fulfilled");var e=Nn;Nn=null,Pl=0,Vl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Id(e,t){var l=[],n={status:"pending",value:null,reason:null,then:function(a){l.push(a)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var a=0;a<l.length;a++)(0,l[a])(t)},function(a){for(n.status="rejected",n.reason=a,a=0;a<l.length;a++)(0,l[a])(void 0)}),n}var oc=E.S;E.S=function(e,t){Cr=He(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&$d(e,t),oc!==null&&oc(e,t)};var rl=ot(null);function Is(){var e=rl.current;return e!==null?e:K.pooledCache}function Xa(e,t){t===null?W(rl,rl.current):W(rl,t.pool)}function h_(){var e=Is();return e===null?null:{parent:ce._currentValue,pool:e}}var rn=Error(p(460)),Ps=Error(p(474)),Nu=Error(p(542)),au={then:function(){}};function cc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function p_(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(pt,pt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_c(e),e;default:if(typeof t.status=="string")t.then(pt,pt);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(p(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=n}},function(n){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_c(e),e}throw dl=t,rn}}function ol(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(dl=l,rn):l}}var dl=null;function fc(){if(dl===null)throw Error(p(459));var e=dl;return dl=null,e}function _c(e){if(e===rn||e===Nu)throw Error(p(483))}var Jl=null,Wn=0;function Ea(e){var t=Wn;return Wn+=1,Jl===null&&(Jl=[]),p_(Jl,e,t)}function bn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Oa(e,t){throw t.$$typeof===R0?Error(p(525)):(e=Object.prototype.toString.call(t),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function b_(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function l(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function n(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function a(f,c){return f=vt(f,c),f.index=0,f.sibling=null,f}function u(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=67108866,c):d):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function s(f,c,d,h){return c===null||c.tag!==6?(c=ni(d,f.mode,h),c.return=f,c):(c=a(c,d),c.return=f,c)}function o(f,c,d,h){var z=d.type;return z===wl?m(f,c,d.props.children,h,d.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===wt&&ol(z)===c.type)?(c=a(c,d.props),bn(c,d),c.return=f,c):(c=Ra(d.type,d.key,d.props,null,f.mode,h),bn(c,d),c.return=f,c)}function r(f,c,d,h){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=ai(d,f.mode,h),c.return=f,c):(c=a(c,d.children||[]),c.return=f,c)}function m(f,c,d,h,z){return c===null||c.tag!==7?(c=_l(d,f.mode,h,z),c.return=f,c):(c=a(c,d),c.return=f,c)}function g(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=ni(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ba:return d=Ra(c.type,c.key,c.props,null,f.mode,d),bn(d,c),d.return=f,d;case An:return c=ai(c,f.mode,d),c.return=f,c;case wt:return c=ol(c),g(f,c,d)}if(Tn(c)||gn(c))return c=_l(c,f.mode,d,null),c.return=f,c;if(typeof c.then=="function")return g(f,Ea(c),d);if(c.$$typeof===ht)return g(f,Ta(f,c),d);Oa(f,c)}return null}function _(f,c,d,h){var z=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return z!==null?null:s(f,c,""+d,h);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ba:return d.key===z?o(f,c,d,h):null;case An:return d.key===z?r(f,c,d,h):null;case wt:return d=ol(d),_(f,c,d,h)}if(Tn(d)||gn(d))return z!==null?null:m(f,c,d,h,null);if(typeof d.then=="function")return _(f,c,Ea(d),h);if(d.$$typeof===ht)return _(f,c,Ta(f,d),h);Oa(f,d)}return null}function y(f,c,d,h,z){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return f=f.get(d)||null,s(c,f,""+h,z);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ba:return f=f.get(h.key===null?d:h.key)||null,o(c,f,h,z);case An:return f=f.get(h.key===null?d:h.key)||null,r(c,f,h,z);case wt:return h=ol(h),y(f,c,d,h,z)}if(Tn(h)||gn(h))return f=f.get(d)||null,m(c,f,h,z,null);if(typeof h.then=="function")return y(f,c,d,Ea(h),z);if(h.$$typeof===ht)return y(f,c,d,Ta(c,h),z);Oa(c,h)}return null}function v(f,c,d,h){for(var z=null,Y=null,x=c,T=c=0,C=null;x!==null&&T<d.length;T++){x.index>T?(C=x,x=null):C=x.sibling;var U=_(f,x,d[T],h);if(U===null){x===null&&(x=C);break}e&&x&&U.alternate===null&&t(f,x),c=u(U,c,T),Y===null?z=U:Y.sibling=U,Y=U,x=C}if(T===d.length)return l(f,x),X&&yt(f,T),z;if(x===null){for(;T<d.length;T++)x=g(f,d[T],h),x!==null&&(c=u(x,c,T),Y===null?z=x:Y.sibling=x,Y=x);return X&&yt(f,T),z}for(x=n(x);T<d.length;T++)C=y(x,f,T,d[T],h),C!==null&&(e&&C.alternate!==null&&x.delete(C.key===null?T:C.key),c=u(C,c,T),Y===null?z=C:Y.sibling=C,Y=C);return e&&x.forEach(function(Te){return t(f,Te)}),X&&yt(f,T),z}function A(f,c,d,h){if(d==null)throw Error(p(151));for(var z=null,Y=null,x=c,T=c=0,C=null,U=d.next();x!==null&&!U.done;T++,U=d.next()){x.index>T?(C=x,x=null):C=x.sibling;var Te=_(f,x,U.value,h);if(Te===null){x===null&&(x=C);break}e&&x&&Te.alternate===null&&t(f,x),c=u(Te,c,T),Y===null?z=Te:Y.sibling=Te,Y=Te,x=C}if(U.done)return l(f,x),X&&yt(f,T),z;if(x===null){for(;!U.done;T++,U=d.next())U=g(f,U.value,h),U!==null&&(c=u(U,c,T),Y===null?z=U:Y.sibling=U,Y=U);return X&&yt(f,T),z}for(x=n(x);!U.done;T++,U=d.next())U=y(x,f,T,U.value,h),U!==null&&(e&&U.alternate!==null&&x.delete(U.key===null?T:U.key),c=u(U,c,T),Y===null?z=U:Y.sibling=U,Y=U);return e&&x.forEach(function(Ge){return t(f,Ge)}),X&&yt(f,T),z}function D(f,c,d,h){if(typeof d=="object"&&d!==null&&d.type===wl&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ba:e:{for(var z=d.key;c!==null;){if(c.key===z){if(z=d.type,z===wl){if(c.tag===7){l(f,c.sibling),h=a(c,d.props.children),h.return=f,f=h;break e}}else if(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===wt&&ol(z)===c.type){l(f,c.sibling),h=a(c,d.props),bn(h,d),h.return=f,f=h;break e}l(f,c);break}else t(f,c);c=c.sibling}d.type===wl?(h=_l(d.props.children,f.mode,h,d.key),h.return=f,f=h):(h=Ra(d.type,d.key,d.props,null,f.mode,h),bn(h,d),h.return=f,f=h)}return i(f);case An:e:{for(z=d.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){l(f,c.sibling),h=a(c,d.children||[]),h.return=f,f=h;break e}else{l(f,c);break}else t(f,c);c=c.sibling}h=ai(d,f.mode,h),h.return=f,f=h}return i(f);case wt:return d=ol(d),D(f,c,d,h)}if(Tn(d))return v(f,c,d,h);if(gn(d)){if(z=gn(d),typeof z!="function")throw Error(p(150));return d=z.call(d),A(f,c,d,h)}if(typeof d.then=="function")return D(f,c,Ea(d),h);if(d.$$typeof===ht)return D(f,c,Ta(f,d),h);Oa(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,c!==null&&c.tag===6?(l(f,c.sibling),h=a(c,d),h.return=f,f=h):(l(f,c),h=ni(d,f.mode,h),h.return=f,f=h),i(f)):l(f,c)}return function(f,c,d,h){try{Wn=0;var z=D(f,c,d,h);return Jl=null,z}catch(x){if(x===rn||x===Nu)throw x;var Y=je(29,x,null,f.mode);return Y.lanes=h,Y.return=f,Y}finally{}}}var hl=b_(!0),v_=b_(!1),Ut=!1;function eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ii(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function kt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,l){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,L&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,t=tu(e),__(e,null,l),t}return Uu(e,n,t,l),tu(e)}function Dn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Rf(e,l)}}function ii(e,t){var l=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var a=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?a=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?a=u=t:u=u.next=t}else a=u=t;l={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Pi=!1;function jn(){if(Pi){var e=Vl;if(e!==null)throw e}}function Bn(e,t,l,n){Pi=!1;var a=e.updateQueue;Ut=!1;var u=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var o=s,r=o.next;o.next=null,i===null?u=r:i.next=r,i=o;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==i&&(s===null?m.firstBaseUpdate=r:s.next=r,m.lastBaseUpdate=o))}if(u!==null){var g=a.baseState;i=0,m=r=o=null,s=u;do{var _=s.lane&-536870913,y=_!==s.lane;if(y?(R&_)===_:(n&_)===_){_!==0&&_===Pl&&(Pi=!0),m!==null&&(m=m.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var v=e,A=s;_=t;var D=l;switch(A.tag){case 1:if(v=A.payload,typeof v=="function"){g=v.call(D,g,_);break e}g=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=A.payload,_=typeof v=="function"?v.call(D,g,_):v,_==null)break e;g=ee({},g,_);break e;case 2:Ut=!0}}_=s.callback,_!==null&&(e.flags|=64,y&&(e.flags|=8192),y=a.callbacks,y===null?a.callbacks=[_]:y.push(_))}else y={lane:_,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(r=m=y,o=g):m=m.next=y,i|=_;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;y=s,s=y.next,y.next=null,a.lastBaseUpdate=y,a.shared.pending=null}}while(!0);m===null&&(o=g),a.baseState=o,a.firstBaseUpdate=r,a.lastBaseUpdate=m,u===null&&(a.shared.lanes=0),el|=i,e.lanes=i,e.memoizedState=g}}function x_(e,t){if(typeof e!="function")throw Error(p(191,e));e.call(t)}function S_(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)x_(l[e],t)}var en=ot(null),uu=ot(0);function rc(e,t){e=Ot,W(uu,e),W(en,t),Ot=e|t.baseLanes}function es(){W(uu,Ot),W(en,en.current)}function to(){Ot=uu.current,ye(en),ye(uu)}var qe=ot(null),Ie=null;function Dt(e){var t=e.alternate;W(ae,ae.current&1),W(qe,e),Ie===null&&(t===null||en.current!==null||t.memoizedState!==null)&&(Ie=e)}function ts(e){W(ae,ae.current),W(qe,e),Ie===null&&(Ie=e)}function z_(e){e.tag===22?(W(ae,ae.current),W(qe,e),Ie===null&&(Ie=e)):jt()}function jt(){W(ae,ae.current),W(qe,qe.current)}function De(e){ye(qe),Ie===e&&(Ie=null),ye(ae)}var ae=ot(0);function iu(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||vs(l)||xs(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var At=0,M=null,V=null,se=null,su=!1,Kl=!1,pl=!1,ou=0,Fn=0,Wl=null,Pd=0;function le(){throw Error(p(321))}function lo(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Le(e[l],t[l]))return!1;return!0}function no(e,t,l,n,a,u){return At=u,M=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?er:yo,pl=!1,u=l(n,a),pl=!1,Kl&&(u=T_(t,l,n,a)),A_(e),u}function A_(e){E.H=$n;var t=V!==null&&V.next!==null;if(At=0,se=V=M=null,su=!1,Fn=0,Wl=null,t)throw Error(p(300));e===null||fe||(e=e.dependencies,e!==null&&nu(e)&&(fe=!0))}function T_(e,t,l,n){M=e;var a=0;do{if(Kl&&(Wl=null),Fn=0,Kl=!1,25<=a)throw Error(p(301));if(a+=1,se=V=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}E.H=tr,u=t(l,n)}while(Kl);return u}function em(){var e=E.H,t=e.useState()[0];return t=typeof t.then=="function"?fa(t):t,e=e.useState()[0],(V!==null?V.memoizedState:null)!==e&&(M.flags|=1024),t}function ao(){var e=ou!==0;return ou=0,e}function uo(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function io(e){if(su){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}su=!1}At=0,se=V=M=null,Kl=!1,Fn=ou=0,Wl=null}function Se(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?M.memoizedState=se=e:se=se.next=e,se}function ue(){if(V===null){var e=M.alternate;e=e!==null?e.memoizedState:null}else e=V.next;var t=se===null?M.memoizedState:se.next;if(t!==null)se=t,V=e;else{if(e===null)throw M.alternate===null?Error(p(467)):Error(p(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},se===null?M.memoizedState=se=e:se=se.next=e}return se}function Du(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fa(e){var t=Fn;return Fn+=1,Wl===null&&(Wl=[]),e=p_(Wl,e,t),t=M,(se===null?t.memoizedState:se.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?er:yo),e}function ju(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fa(e);if(e.$$typeof===ht)return ve(e)}throw Error(p(438,String(e)))}function so(e){var t=null,l=M.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var n=M.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Du(),M.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),n=0;n<e;n++)l[n]=X0;return t.index++,l}function Tt(e,t){return typeof t=="function"?t(e):t}function Qa(e){var t=ue();return oo(t,V,e)}function oo(e,t,l){var n=e.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=l;var a=e.baseQueue,u=n.pending;if(u!==null){if(a!==null){var i=a.next;a.next=u.next,u.next=i}t.baseQueue=a=u,n.pending=null}if(u=e.baseState,a===null)e.memoizedState=u;else{t=a.next;var s=i=null,o=null,r=t,m=!1;do{var g=r.lane&-536870913;if(g!==r.lane?(R&g)===g:(At&g)===g){var _=r.revertLane;if(_===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null}),g===Pl&&(m=!0);else if((At&_)===_){r=r.next,_===Pl&&(m=!0);continue}else g={lane:0,revertLane:r.revertLane,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},o===null?(s=o=g,i=u):o=o.next=g,M.lanes|=_,el|=_;g=r.action,pl&&l(u,g),u=r.hasEagerState?r.eagerState:l(u,g)}else _={lane:g,revertLane:r.revertLane,gesture:r.gesture,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},o===null?(s=o=_,i=u):o=o.next=_,M.lanes|=g,el|=g;r=r.next}while(r!==null&&r!==t);if(o===null?i=u:o.next=s,!Le(u,e.memoizedState)&&(fe=!0,m&&(l=Vl,l!==null)))throw l;e.memoizedState=u,e.baseState=i,e.baseQueue=o,n.lastRenderedState=u}return a===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function si(e){var t=ue(),l=t.queue;if(l===null)throw Error(p(311));l.lastRenderedReducer=e;var n=l.dispatch,a=l.pending,u=t.memoizedState;if(a!==null){l.pending=null;var i=a=a.next;do u=e(u,i.action),i=i.next;while(i!==a);Le(u,t.memoizedState)||(fe=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),l.lastRenderedState=u}return[u,n]}function E_(e,t,l){var n=M,a=ue(),u=X;if(u){if(l===void 0)throw Error(p(407));l=l()}else l=t();var i=!Le((V||a).memoizedState,l);if(i&&(a.memoizedState=l,fe=!0),a=a.queue,co(Y_.bind(null,n,a,e),[e]),a.getSnapshot!==t||i||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,tn(9,{destroy:void 0},M_.bind(null,n,a,l,t),null),K===null)throw Error(p(349));u||At&127||O_(n,t,l)}return l}function O_(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=M.updateQueue,t===null?(t=Du(),M.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function M_(e,t,l,n){t.value=l,t.getSnapshot=n,C_(t)&&w_(e)}function Y_(e,t,l){return l(function(){C_(t)&&w_(e)})}function C_(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Le(e,l)}catch{return!0}}function w_(e){var t=zl(e,2);t!==null&&Ce(t,e,2)}function ls(e){var t=Se();if(typeof e=="function"){var l=e;if(e=l(),pl){Ht(!0);try{l()}finally{Ht(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tt,lastRenderedState:e},t}function U_(e,t,l,n){return e.baseState=l,oo(e,V,typeof n=="function"?n:Tt)}function tm(e,t,l,n,a){if(Hu(e))throw Error(p(485));if(e=t.action,e!==null){var u={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};E.T!==null?l(!0):u.isTransition=!1,n(u),l=t.pending,l===null?(u.next=t.pending=u,N_(t,u)):(u.next=l.next,t.pending=l.next=u)}}function N_(e,t){var l=t.action,n=t.payload,a=e.state;if(t.isTransition){var u=E.T,i={};E.T=i;try{var s=l(a,n),o=E.S;o!==null&&o(i,s),dc(e,t,s)}catch(r){ns(e,t,r)}finally{u!==null&&i.types!==null&&(u.types=i.types),E.T=u}}else try{u=l(a,n),dc(e,t,u)}catch(r){ns(e,t,r)}}function dc(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){mc(e,t,n)},function(n){return ns(e,t,n)}):mc(e,t,l)}function mc(e,t,l){t.status="fulfilled",t.value=l,D_(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,N_(e,l)))}function ns(e,t,l){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=l,D_(t),t=t.next;while(t!==n)}e.action=null}function D_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function j_(e,t){return t}function yc(e,t){if(X){var l=K.formState;if(l!==null){e:{var n=M;if(X){if(I){t:{for(var a=I,u=$e;a.nodeType!==8;){if(!u){a=null;break t}if(a=Pe(a.nextSibling),a===null){a=null;break t}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){I=Pe(a.nextSibling),n=a.data==="F!";break e}}It(n)}n=!1}n&&(t=l[0])}}return l=Se(),l.memoizedState=l.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:j_,lastRenderedState:t},l.queue=n,l=$_.bind(null,M,n),n.dispatch=l,n=ls(!1),u=mo.bind(null,M,!1,n.queue),n=Se(),a={state:t,dispatch:null,action:e,pending:null},n.queue=a,l=tm.bind(null,M,a,u,l),a.dispatch=l,n.memoizedState=e,[t,l,!1]}function gc(e){var t=ue();return B_(t,V,e)}function B_(e,t,l){if(t=oo(e,t,j_)[0],e=Qa(Tt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=fa(t)}catch(i){throw i===rn?Nu:i}else n=t;t=ue();var a=t.queue,u=a.dispatch;return l!==t.memoizedState&&(M.flags|=2048,tn(9,{destroy:void 0},lm.bind(null,a,l),null)),[n,u,e]}function lm(e,t){e.action=t}function hc(e){var t=ue(),l=V;if(l!==null)return B_(t,l,e);ue(),t=t.memoizedState,l=ue();var n=l.queue.dispatch;return l.memoizedState=e,[t,n,!1]}function tn(e,t,l,n){return e={tag:e,create:l,deps:n,inst:t,next:null},t=M.updateQueue,t===null&&(t=Du(),M.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(n=l.next,l.next=e,e.next=n,t.lastEffect=e),e}function H_(){return ue().memoizedState}function La(e,t,l,n){var a=Se();M.flags|=e,a.memoizedState=tn(1|t,{destroy:void 0},l,n===void 0?null:n)}function Bu(e,t,l,n){var a=ue();n=n===void 0?null:n;var u=a.memoizedState.inst;V!==null&&n!==null&&lo(n,V.memoizedState.deps)?a.memoizedState=tn(t,u,l,n):(M.flags|=e,a.memoizedState=tn(1|t,u,l,n))}function pc(e,t){La(8390656,8,e,t)}function co(e,t){Bu(2048,8,e,t)}function nm(e){M.flags|=4;var t=M.updateQueue;if(t===null)t=Du(),M.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function R_(e){var t=ue().memoizedState;return nm({ref:t,nextImpl:e}),function(){if(L&2)throw Error(p(440));return t.impl.apply(void 0,arguments)}}function X_(e,t){return Bu(4,2,e,t)}function Q_(e,t){return Bu(4,4,e,t)}function L_(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function q_(e,t,l){l=l!=null?l.concat([e]):null,Bu(4,4,L_.bind(null,t,e),l)}function fo(){}function G_(e,t){var l=ue();t=t===void 0?null:t;var n=l.memoizedState;return t!==null&&lo(t,n[1])?n[0]:(l.memoizedState=[e,t],e)}function k_(e,t){var l=ue();t=t===void 0?null:t;var n=l.memoizedState;if(t!==null&&lo(t,n[1]))return n[0];if(n=e(),pl){Ht(!0);try{e()}finally{Ht(!1)}}return l.memoizedState=[n,t],n}function _o(e,t,l){return l===void 0||At&1073741824&&!(R&261930)?e.memoizedState=t:(e.memoizedState=l,e=Ur(),M.lanes|=e,el|=e,l)}function Z_(e,t,l,n){return Le(l,t)?l:en.current!==null?(e=_o(e,l,n),Le(e,t)||(fe=!0),e):!(At&42)||At&1073741824&&!(R&261930)?(fe=!0,e.memoizedState=l):(e=Ur(),M.lanes|=e,el|=e,t)}function V_(e,t,l,n,a){var u=q.p;q.p=u!==0&&8>u?u:8;var i=E.T,s={};E.T=s,mo(e,!1,t,l);try{var o=a(),r=E.S;if(r!==null&&r(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var m=Id(o,n);Hn(e,t,m,Qe(e))}else Hn(e,t,n,Qe(e))}catch(g){Hn(e,t,{then:function(){},status:"rejected",reason:g},Qe())}finally{q.p=u,i!==null&&s.types!==null&&(i.types=s.types),E.T=i}}function am(){}function as(e,t,l,n){if(e.tag!==5)throw Error(p(476));var a=J_(e).queue;V_(e,a,t,fl,l===null?am:function(){return K_(e),l(n)})}function J_(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fl,baseState:fl,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tt,lastRenderedState:fl},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function K_(e){var t=J_(e);t.next===null&&(t=e.alternate.memoizedState),Hn(e,t.next.queue,{},Qe())}function ro(){return ve(ea)}function W_(){return ue().memoizedState}function F_(){return ue().memoizedState}function um(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Qe();e=kt(l);var n=Zt(t,e,l);n!==null&&(Ce(n,t,l),Dn(n,t,l)),t={cache:$s()},e.payload=t;return}t=t.return}}function im(e,t,l){var n=Qe();l={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Hu(e)?I_(t,l):(l=Js(e,t,l,n),l!==null&&(Ce(l,e,n),P_(l,t,n)))}function $_(e,t,l){var n=Qe();Hn(e,t,l,n)}function Hn(e,t,l,n){var a={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Hu(e))I_(t,a);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,s=u(i,l);if(a.hasEagerState=!0,a.eagerState=s,Le(s,i))return Uu(e,t,a,0),K===null&&wu(),!1}catch{}finally{}if(l=Js(e,t,a,n),l!==null)return Ce(l,e,n),P_(l,t,n),!0}return!1}function mo(e,t,l,n){if(n={lane:2,revertLane:zo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Hu(e)){if(t)throw Error(p(479))}else t=Js(e,l,n,2),t!==null&&Ce(t,e,2)}function Hu(e){var t=e.alternate;return e===M||t!==null&&t===M}function I_(e,t){Kl=su=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function P_(e,t,l){if(l&4194048){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Rf(e,l)}}var $n={readContext:ve,use:ju,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useLayoutEffect:le,useInsertionEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useSyncExternalStore:le,useId:le,useHostTransitionStatus:le,useFormState:le,useActionState:le,useOptimistic:le,useMemoCache:le,useCacheRefresh:le};$n.useEffectEvent=le;var er={readContext:ve,use:ju,useCallback:function(e,t){return Se().memoizedState=[e,t===void 0?null:t],e},useContext:ve,useEffect:pc,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,La(4194308,4,L_.bind(null,t,e),l)},useLayoutEffect:function(e,t){return La(4194308,4,e,t)},useInsertionEffect:function(e,t){La(4,2,e,t)},useMemo:function(e,t){var l=Se();t=t===void 0?null:t;var n=e();if(pl){Ht(!0);try{e()}finally{Ht(!1)}}return l.memoizedState=[n,t],n},useReducer:function(e,t,l){var n=Se();if(l!==void 0){var a=l(t);if(pl){Ht(!0);try{l(t)}finally{Ht(!1)}}}else a=t;return n.memoizedState=n.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},n.queue=e,e=e.dispatch=im.bind(null,M,e),[n.memoizedState,e]},useRef:function(e){var t=Se();return e={current:e},t.memoizedState=e},useState:function(e){e=ls(e);var t=e.queue,l=$_.bind(null,M,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:fo,useDeferredValue:function(e,t){var l=Se();return _o(l,e,t)},useTransition:function(){var e=ls(!1);return e=V_.bind(null,M,e.queue,!0,!1),Se().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var n=M,a=Se();if(X){if(l===void 0)throw Error(p(407));l=l()}else{if(l=t(),K===null)throw Error(p(349));R&127||O_(n,t,l)}a.memoizedState=l;var u={value:l,getSnapshot:t};return a.queue=u,pc(Y_.bind(null,n,u,e),[e]),n.flags|=2048,tn(9,{destroy:void 0},M_.bind(null,n,u,l,t),null),l},useId:function(){var e=Se(),t=K.identifierPrefix;if(X){var l=ut,n=at;l=(n&~(1<<32-Xe(n)-1)).toString(32)+l,t="_"+t+"R_"+l,l=ou++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Pd++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ro,useFormState:yc,useActionState:yc,useOptimistic:function(e){var t=Se();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=mo.bind(null,M,!0,l),l.dispatch=t,[e,t]},useMemoCache:so,useCacheRefresh:function(){return Se().memoizedState=um.bind(null,M)},useEffectEvent:function(e){var t=Se(),l={impl:e};return t.memoizedState=l,function(){if(L&2)throw Error(p(440));return l.impl.apply(void 0,arguments)}}},yo={readContext:ve,use:ju,useCallback:G_,useContext:ve,useEffect:co,useImperativeHandle:q_,useInsertionEffect:X_,useLayoutEffect:Q_,useMemo:k_,useReducer:Qa,useRef:H_,useState:function(){return Qa(Tt)},useDebugValue:fo,useDeferredValue:function(e,t){var l=ue();return Z_(l,V.memoizedState,e,t)},useTransition:function(){var e=Qa(Tt)[0],t=ue().memoizedState;return[typeof e=="boolean"?e:fa(e),t]},useSyncExternalStore:E_,useId:W_,useHostTransitionStatus:ro,useFormState:gc,useActionState:gc,useOptimistic:function(e,t){var l=ue();return U_(l,V,e,t)},useMemoCache:so,useCacheRefresh:F_};yo.useEffectEvent=R_;var tr={readContext:ve,use:ju,useCallback:G_,useContext:ve,useEffect:co,useImperativeHandle:q_,useInsertionEffect:X_,useLayoutEffect:Q_,useMemo:k_,useReducer:si,useRef:H_,useState:function(){return si(Tt)},useDebugValue:fo,useDeferredValue:function(e,t){var l=ue();return V===null?_o(l,e,t):Z_(l,V.memoizedState,e,t)},useTransition:function(){var e=si(Tt)[0],t=ue().memoizedState;return[typeof e=="boolean"?e:fa(e),t]},useSyncExternalStore:E_,useId:W_,useHostTransitionStatus:ro,useFormState:hc,useActionState:hc,useOptimistic:function(e,t){var l=ue();return V!==null?U_(l,V,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:so,useCacheRefresh:F_};tr.useEffectEvent=R_;function oi(e,t,l,n){t=e.memoizedState,l=l(n,t),l=l==null?t:ee({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var us={enqueueSetState:function(e,t,l){e=e._reactInternals;var n=Qe(),a=kt(n);a.payload=t,l!=null&&(a.callback=l),t=Zt(e,a,n),t!==null&&(Ce(t,e,n),Dn(t,e,n))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var n=Qe(),a=kt(n);a.tag=1,a.payload=t,l!=null&&(a.callback=l),t=Zt(e,a,n),t!==null&&(Ce(t,e,n),Dn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Qe(),n=kt(l);n.tag=2,t!=null&&(n.callback=t),t=Zt(e,n,l),t!==null&&(Ce(t,e,l),Dn(t,e,l))}};function bc(e,t,l,n,a,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,u,i):t.prototype&&t.prototype.isPureReactComponent?!Vn(l,n)||!Vn(a,u):!0}function vc(e,t,l,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,n),t.state!==e&&us.enqueueReplaceState(t,t.state,null)}function bl(e,t){var l=t;if("ref"in t){l={};for(var n in t)n!=="ref"&&(l[n]=t[n])}if(e=e.defaultProps){l===t&&(l=ee({},l));for(var a in e)l[a]===void 0&&(l[a]=e[a])}return l}function lr(e){eu(e)}function nr(e){console.error(e)}function ar(e){eu(e)}function cu(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function xc(e,t,l){try{var n=e.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function is(e,t,l){return l=kt(l),l.tag=3,l.payload={element:null},l.callback=function(){cu(e,t)},l}function ur(e){return e=kt(e),e.tag=3,e}function ir(e,t,l,n){var a=l.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;e.payload=function(){return a(u)},e.callback=function(){xc(t,l,n)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){xc(t,l,n),typeof a!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function sm(e,t,l,n,a){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=l.alternate,t!==null&&_n(t,l,a,!0),l=qe.current,l!==null){switch(l.tag){case 31:case 13:return Ie===null?mu():l.alternate===null&&ne===0&&(ne=3),l.flags&=-257,l.flags|=65536,l.lanes=a,n===au?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([n]):t.add(n),bi(e,n,a)),!1;case 22:return l.flags|=65536,n===au?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([n]):l.add(n)),bi(e,n,a)),!1}throw Error(p(435,l.tag))}return bi(e,n,a),mu(),!1}if(X)return t=qe.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,n!==Ji&&(e=Error(p(422),{cause:n}),Kn(Fe(e,l)))):(n!==Ji&&(t=Error(p(423),{cause:n}),Kn(Fe(t,l))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,n=Fe(n,l),a=is(e.stateNode,n,a),ii(e,a),ne!==4&&(ne=2)),!1;var u=Error(p(520),{cause:n});if(u=Fe(u,l),Qn===null?Qn=[u]:Qn.push(u),ne!==4&&(ne=2),t===null)return!0;n=Fe(n,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=a&-a,l.lanes|=e,e=is(l.stateNode,n,e),ii(l,e),!1;case 1:if(t=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Vt===null||!Vt.has(u))))return l.flags|=65536,a&=-a,l.lanes|=a,a=ur(a),ir(a,e,l,n),ii(l,a),!1}l=l.return}while(l!==null);return!1}var go=Error(p(461)),fe=!1;function he(e,t,l,n){t.child=e===null?v_(t,null,l,n):hl(t,e.child,l,n)}function Sc(e,t,l,n,a){l=l.render;var u=t.ref;if("ref"in n){var i={};for(var s in n)s!=="ref"&&(i[s]=n[s])}else i=n;return gl(t),n=no(e,t,l,i,u,a),s=ao(),e!==null&&!fe?(uo(e,t,a),Et(e,t,a)):(X&&s&&Ws(t),t.flags|=1,he(e,t,n,a),t.child)}function zc(e,t,l,n,a){if(e===null){var u=l.type;return typeof u=="function"&&!Ks(u)&&u.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=u,sr(e,t,u,n,a)):(e=Ra(l.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!ho(e,a)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:Vn,l(i,n)&&e.ref===t.ref)return Et(e,t,a)}return t.flags|=1,e=vt(u,n),e.ref=t.ref,e.return=t,t.child=e}function sr(e,t,l,n,a){if(e!==null){var u=e.memoizedProps;if(Vn(u,n)&&e.ref===t.ref)if(fe=!1,t.pendingProps=n=u,ho(e,a))e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Et(e,t,a)}return ss(e,t,l,n,a)}function or(e,t,l,n){var a=n.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if(t.flags&128){if(u=u!==null?u.baseLanes|l:l,e!==null){for(n=t.child=e.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~u}else n=0,t.child=null;return Ac(e,t,u,l,n)}if(l&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xa(t,u!==null?u.cachePool:null),u!==null?rc(t,u):es(),z_(t);else return n=t.lanes=536870912,Ac(e,t,u!==null?u.baseLanes|l:l,l,n)}else u!==null?(Xa(t,u.cachePool),rc(t,u),jt(),t.memoizedState=null):(e!==null&&Xa(t,null),es(),jt());return he(e,t,a,l),t.child}function On(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ac(e,t,l,n,a){var u=Is();return u=u===null?null:{parent:ce._currentValue,pool:u},t.memoizedState={baseLanes:l,cachePool:u},e!==null&&Xa(t,null),es(),z_(t),e!==null&&_n(e,t,n,!0),t.childLanes=a,null}function qa(e,t){return t=fu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Tc(e,t,l){return hl(t,e.child,null,l),e=qa(t,t.pendingProps),e.flags|=2,De(t),t.memoizedState=null,e}function om(e,t,l){var n=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(X){if(n.mode==="hidden")return e=qa(t,n),t.lanes=536870912,On(null,e);if(ts(t),(e=I)?(e=e0(e,$e),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$t!==null?{id:at,overflow:ut}:null,retryLane:536870912,hydrationErrors:null},l=d_(e),l.return=t,t.child=l,be=t,I=null)):e=null,e===null)throw It(t);return t.lanes=536870912,null}return qa(t,n)}var u=e.memoizedState;if(u!==null){var i=u.dehydrated;if(ts(t),a)if(t.flags&256)t.flags&=-257,t=Tc(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(p(558));else if(fe||_n(e,t,l,!1),a=(l&e.childLanes)!==0,fe||a){if(n=K,n!==null&&(i=Xf(n,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,zl(e,i),Ce(n,e,i),go;mu(),t=Tc(e,t,l)}else e=u.treeContext,I=Pe(i.nextSibling),be=t,X=!0,Gt=null,$e=!1,e!==null&&y_(t,e),t=qa(t,n),t.flags|=4096;return t}return e=vt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ga(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(p(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function ss(e,t,l,n,a){return gl(t),l=no(e,t,l,n,void 0,a),n=ao(),e!==null&&!fe?(uo(e,t,a),Et(e,t,a)):(X&&n&&Ws(t),t.flags|=1,he(e,t,l,a),t.child)}function Ec(e,t,l,n,a,u){return gl(t),t.updateQueue=null,l=T_(t,n,l,a),A_(e),n=ao(),e!==null&&!fe?(uo(e,t,u),Et(e,t,u)):(X&&n&&Ws(t),t.flags|=1,he(e,t,l,u),t.child)}function Oc(e,t,l,n,a){if(gl(t),t.stateNode===null){var u=Xl,i=l.contextType;typeof i=="object"&&i!==null&&(u=ve(i)),u=new l(n,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=us,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=n,u.state=t.memoizedState,u.refs={},eo(t),i=l.contextType,u.context=typeof i=="object"&&i!==null?ve(i):Xl,u.state=t.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(oi(t,l,i,n),u.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&us.enqueueReplaceState(u,u.state,null),Bn(t,n,u,a),jn(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){u=t.stateNode;var s=t.memoizedProps,o=bl(l,s);u.props=o;var r=u.context,m=l.contextType;i=Xl,typeof m=="object"&&m!==null&&(i=ve(m));var g=l.getDerivedStateFromProps;m=typeof g=="function"||typeof u.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,m||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s||r!==i)&&vc(t,u,n,i),Ut=!1;var _=t.memoizedState;u.state=_,Bn(t,n,u,a),jn(),r=t.memoizedState,s||_!==r||Ut?(typeof g=="function"&&(oi(t,l,g,n),r=t.memoizedState),(o=Ut||bc(t,l,o,n,_,r,i))?(m||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=r),u.props=n,u.state=r,u.context=i,n=o):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{u=t.stateNode,Ii(e,t),i=t.memoizedProps,m=bl(l,i),u.props=m,g=t.pendingProps,_=u.context,r=l.contextType,o=Xl,typeof r=="object"&&r!==null&&(o=ve(r)),s=l.getDerivedStateFromProps,(r=typeof s=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==g||_!==o)&&vc(t,u,n,o),Ut=!1,_=t.memoizedState,u.state=_,Bn(t,n,u,a),jn();var y=t.memoizedState;i!==g||_!==y||Ut||e!==null&&e.dependencies!==null&&nu(e.dependencies)?(typeof s=="function"&&(oi(t,l,s,n),y=t.memoizedState),(m=Ut||bc(t,l,m,n,_,y,o)||e!==null&&e.dependencies!==null&&nu(e.dependencies))?(r||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,y,o),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,y,o)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),u.props=n,u.state=y,u.context=o,n=m):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),n=!1)}return u=n,Ga(e,t),n=(t.flags&128)!==0,u||n?(u=t.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&n?(t.child=hl(t,e.child,null,a),t.child=hl(t,null,l,a)):he(e,t,l,a),t.memoizedState=u.state,e=t.child):e=Et(e,t,a),e}function Mc(e,t,l,n){return yl(),t.flags|=256,he(e,t,l,n),t.child}var ci={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fi(e){return{baseLanes:e,cachePool:h_()}}function _i(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Be),e}function cr(e,t,l){var n=t.pendingProps,a=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(ae.current&2)!==0),i&&(a=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(X){if(a?Dt(t):jt(),(e=I)?(e=e0(e,$e),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$t!==null?{id:at,overflow:ut}:null,retryLane:536870912,hydrationErrors:null},l=d_(e),l.return=t,t.child=l,be=t,I=null)):e=null,e===null)throw It(t);return xs(e)?t.lanes=32:t.lanes=536870912,null}var s=n.children;return n=n.fallback,a?(jt(),a=t.mode,s=fu({mode:"hidden",children:s},a),n=_l(n,a,l,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n=t.child,n.memoizedState=fi(l),n.childLanes=_i(e,i,l),t.memoizedState=ci,On(null,n)):(Dt(t),os(t,s))}var o=e.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(u)t.flags&256?(Dt(t),t.flags&=-257,t=ri(e,t,l)):t.memoizedState!==null?(jt(),t.child=e.child,t.flags|=128,t=null):(jt(),s=n.fallback,a=t.mode,n=fu({mode:"visible",children:n.children},a),s=_l(s,a,l,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,hl(t,e.child,null,l),n=t.child,n.memoizedState=fi(l),n.childLanes=_i(e,i,l),t.memoizedState=ci,t=On(null,n));else if(Dt(t),xs(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var r=i.dgst;i=r,n=Error(p(419)),n.stack="",n.digest=i,Kn({value:n,source:null,stack:null}),t=ri(e,t,l)}else if(fe||_n(e,t,l,!1),i=(l&e.childLanes)!==0,fe||i){if(i=K,i!==null&&(n=Xf(i,l),n!==0&&n!==o.retryLane))throw o.retryLane=n,zl(e,n),Ce(i,e,n),go;vs(s)||mu(),t=ri(e,t,l)}else vs(s)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,I=Pe(s.nextSibling),be=t,X=!0,Gt=null,$e=!1,e!==null&&y_(t,e),t=os(t,n.children),t.flags|=4096);return t}return a?(jt(),s=n.fallback,a=t.mode,o=e.child,r=o.sibling,n=vt(o,{mode:"hidden",children:n.children}),n.subtreeFlags=o.subtreeFlags&65011712,r!==null?s=vt(r,s):(s=_l(s,a,l,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,On(null,n),n=t.child,s=e.child.memoizedState,s===null?s=fi(l):(a=s.cachePool,a!==null?(o=ce._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=h_(),s={baseLanes:s.baseLanes|l,cachePool:a}),n.memoizedState=s,n.childLanes=_i(e,i,l),t.memoizedState=ci,On(e.child,n)):(Dt(t),l=e.child,e=l.sibling,l=vt(l,{mode:"visible",children:n.children}),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l)}function os(e,t){return t=fu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function fu(e,t){return e=je(22,e,null,t),e.lanes=0,e}function ri(e,t,l){return hl(t,e.child,null,l),e=os(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yc(e,t,l){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Wi(e.return,t,l)}function di(e,t,l,n,a,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:a,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=l,i.tailMode=a,i.treeForkCount=u)}function fr(e,t,l){var n=t.pendingProps,a=n.revealOrder,u=n.tail;n=n.children;var i=ae.current,s=(i&2)!==0;if(s?(i=i&1|2,t.flags|=128):i&=1,W(ae,i),he(e,t,n,l),n=X?Jn:0,!s&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yc(e,l,t);else if(e.tag===19)Yc(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(l=t.child,a=null;l!==null;)e=l.alternate,e!==null&&iu(e)===null&&(a=l),l=l.sibling;l=a,l===null?(a=t.child,t.child=null):(a=l.sibling,l.sibling=null),di(t,!1,a,l,u,n);break;case"backwards":case"unstable_legacy-backwards":for(l=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&iu(e)===null){t.child=a;break}e=a.sibling,a.sibling=l,l=a,a=e}di(t,!0,l,null,u,n);break;case"together":di(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Et(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),el|=t.lanes,!(l&t.childLanes))if(e!==null){if(_n(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,l=vt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=vt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function ho(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&nu(e)))}function cm(e,t,l){switch(t.tag){case 3:Fa(t,t.stateNode.containerInfo),Nt(t,ce,e.memoizedState.cache),yl();break;case 27:case 5:Bi(t);break;case 4:Fa(t,t.stateNode.containerInfo);break;case 10:Nt(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ts(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Dt(t),t.flags|=128,null):l&t.child.childLanes?cr(e,t,l):(Dt(t),e=Et(e,t,l),e!==null?e.sibling:null);Dt(t);break;case 19:var a=(e.flags&128)!==0;if(n=(l&t.childLanes)!==0,n||(_n(e,t,l,!1),n=(l&t.childLanes)!==0),a){if(n)return fr(e,t,l);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(ae,ae.current),n)break;return null;case 22:return t.lanes=0,or(e,t,l,t.pendingProps);case 24:Nt(t,ce,e.memoizedState.cache)}return Et(e,t,l)}function _r(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)fe=!0;else{if(!ho(e,l)&&!(t.flags&128))return fe=!1,cm(e,t,l);fe=!!(e.flags&131072)}else fe=!1,X&&t.flags&1048576&&m_(t,Jn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=ol(t.elementType),t.type=e,typeof e=="function")Ks(e)?(n=bl(e,n),t.tag=1,t=Oc(null,t,e,n,l)):(t.tag=0,t=ss(null,t,e,n,l));else{if(e!=null){var a=e.$$typeof;if(a===Ds){t.tag=11,t=Sc(null,t,e,n,l);break e}else if(a===js){t.tag=14,t=zc(null,t,e,n,l);break e}}throw t=Di(e)||e,Error(p(306,t,""))}}return t;case 0:return ss(e,t,t.type,t.pendingProps,l);case 1:return n=t.type,a=bl(n,t.pendingProps),Oc(e,t,n,a,l);case 3:e:{if(Fa(t,t.stateNode.containerInfo),e===null)throw Error(p(387));n=t.pendingProps;var u=t.memoizedState;a=u.element,Ii(e,t),Bn(t,n,null,l);var i=t.memoizedState;if(n=i.cache,Nt(t,ce,n),n!==u.cache&&Fi(t,[ce],l,!0),jn(),n=i.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Mc(e,t,n,l);break e}else if(n!==a){a=Fe(Error(p(424)),t),Kn(a),t=Mc(e,t,n,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(I=Pe(e.firstChild),be=t,X=!0,Gt=null,$e=!0,l=v_(t,null,n,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(yl(),n===a){t=Et(e,t,l);break e}he(e,t,n,l)}t=t.child}return t;case 26:return Ga(e,t),e===null?(l=Wc(t.type,null,t.pendingProps,null))?t.memoizedState=l:X||(l=t.type,e=t.pendingProps,n=pu(qt.current).createElement(l),n[pe]=t,n[we]=e,xe(n,l,e),me(n),t.stateNode=n):t.memoizedState=Wc(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Bi(t),e===null&&X&&(n=t.stateNode=t0(t.type,t.pendingProps,qt.current),be=t,$e=!0,a=I,ll(t.type)?(Ss=a,I=Pe(n.firstChild)):I=a),he(e,t,t.pendingProps.children,l),Ga(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&X&&((a=n=I)&&(n=Xm(n,t.type,t.pendingProps,$e),n!==null?(t.stateNode=n,be=t,I=Pe(n.firstChild),$e=!1,a=!0):a=!1),a||It(t)),Bi(t),a=t.type,u=t.pendingProps,i=e!==null?e.memoizedProps:null,n=u.children,ps(a,u)?n=null:i!==null&&ps(a,i)&&(t.flags|=32),t.memoizedState!==null&&(a=no(e,t,em,null,null,l),ea._currentValue=a),Ga(e,t),he(e,t,n,l),t.child;case 6:return e===null&&X&&((e=l=I)&&(l=Qm(l,t.pendingProps,$e),l!==null?(t.stateNode=l,be=t,I=null,e=!0):e=!1),e||It(t)),null;case 13:return cr(e,t,l);case 4:return Fa(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=hl(t,null,n,l):he(e,t,n,l),t.child;case 11:return Sc(e,t,t.type,t.pendingProps,l);case 7:return he(e,t,t.pendingProps,l),t.child;case 8:return he(e,t,t.pendingProps.children,l),t.child;case 12:return he(e,t,t.pendingProps.children,l),t.child;case 10:return n=t.pendingProps,Nt(t,t.type,n.value),he(e,t,n.children,l),t.child;case 9:return a=t.type._context,n=t.pendingProps.children,gl(t),a=ve(a),n=n(a),t.flags|=1,he(e,t,n,l),t.child;case 14:return zc(e,t,t.type,t.pendingProps,l);case 15:return sr(e,t,t.type,t.pendingProps,l);case 19:return fr(e,t,l);case 31:return om(e,t,l);case 22:return or(e,t,l,t.pendingProps);case 24:return gl(t),n=ve(ce),e===null?(a=Is(),a===null&&(a=K,u=$s(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=l),a=u),t.memoizedState={parent:n,cache:a},eo(t),Nt(t,ce,a)):(e.lanes&l&&(Ii(e,t),Bn(t,null,null,l),jn()),a=e.memoizedState,u=t.memoizedState,a.parent!==n?(a={parent:n,cache:n},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Nt(t,ce,n)):(n=u.cache,Nt(t,ce,n),n!==a.cache&&Fi(t,[ce],l,!0))),he(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(p(156,t.tag))}function _t(e){e.flags|=4}function mi(e,t,l,n,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(jr())e.flags|=8192;else throw dl=au,Ps}else e.flags&=-16777217}function Cc(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!a0(t))if(jr())e.flags|=8192;else throw dl=au,Ps}function Ma(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bf():536870912,e.lanes|=t,ln|=t)}function vn(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function $(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,n=0;if(t)for(var a=e.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=l,t}function fm(e,t,l){var n=t.pendingProps;switch(Fs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $(t),null;case 1:return $(t),null;case 3:return l=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xt(ce),Fl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Tl(t)?_t(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ui())),$(t),null;case 26:var a=t.type,u=t.memoizedState;return e===null?(_t(t),u!==null?($(t),Cc(t,u)):($(t),mi(t,a,null,n,l))):u?u!==e.memoizedState?(_t(t),$(t),Cc(t,u)):($(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&_t(t),$(t),mi(t,a,e,n,l)),null;case 27:if($a(t),l=qt.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&_t(t);else{if(!n){if(t.stateNode===null)throw Error(p(166));return $(t),null}e=st.current,Tl(t)?uc(t):(e=t0(a,n,l),t.stateNode=e,_t(t))}return $(t),null;case 5:if($a(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&_t(t);else{if(!n){if(t.stateNode===null)throw Error(p(166));return $(t),null}if(u=st.current,Tl(t))uc(t);else{var i=pu(qt.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}u[pe]=t,u[we]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;e:switch(xe(u,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&_t(t)}}return $(t),mi(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&_t(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(p(166));if(e=qt.current,Tl(t)){if(e=t.stateNode,l=t.memoizedProps,n=null,a=be,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}e[pe]=t,e=!!(e.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||$r(e.nodeValue,l)),e||It(t,!0)}else e=pu(e).createTextNode(n),e[pe]=t,t.stateNode=e}return $(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(n=Tl(t),l!==null){if(e===null){if(!n)throw Error(p(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(557));e[pe]=t}else yl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$(t),e=!1}else l=ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(De(t),t):(De(t),null);if(t.flags&128)throw Error(p(558))}return $(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Tl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(p(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(p(317));a[pe]=t}else yl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$(t),a=!1}else a=ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(De(t),t):(De(t),null)}return De(t),t.flags&128?(t.lanes=l,t):(l=n!==null,e=e!==null&&e.memoizedState!==null,l&&(n=t.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==a&&(n.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Ma(t,t.updateQueue),$(t),null);case 4:return Fl(),e===null&&Ao(t.stateNode.containerInfo),$(t),null;case 10:return xt(t.type),$(t),null;case 19:if(ye(ae),n=t.memoizedState,n===null)return $(t),null;if(a=(t.flags&128)!==0,u=n.rendering,u===null)if(a)vn(n,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(u=iu(e),u!==null){for(t.flags|=128,vn(n,!1),e=u.updateQueue,t.updateQueue=e,Ma(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)r_(l,e),l=l.sibling;return W(ae,ae.current&1|2),X&&yt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&He()>ru&&(t.flags|=128,a=!0,vn(n,!1),t.lanes=4194304)}else{if(!a)if(e=iu(u),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ma(t,e),vn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!X)return $(t),null}else 2*He()-n.renderingStartTime>ru&&l!==536870912&&(t.flags|=128,a=!0,vn(n,!1),t.lanes=4194304);n.isBackwards?(u.sibling=t.child,t.child=u):(e=n.last,e!==null?e.sibling=u:t.child=u,n.last=u)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=He(),e.sibling=null,l=ae.current,W(ae,a?l&1|2:l&1),X&&yt(t,n.treeForkCount),e):($(t),null);case 22:case 23:return De(t),to(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?l&536870912&&!(t.flags&128)&&($(t),t.subtreeFlags&6&&(t.flags|=8192)):$(t),l=t.updateQueue,l!==null&&Ma(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==l&&(t.flags|=2048),e!==null&&ye(rl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),xt(ce),$(t),null;case 25:return null;case 30:return null}throw Error(p(156,t.tag))}function _m(e,t){switch(Fs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xt(ce),Fl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $a(t),null;case 31:if(t.memoizedState!==null){if(De(t),t.alternate===null)throw Error(p(340));yl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(De(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(p(340));yl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(ae),null;case 4:return Fl(),null;case 10:return xt(t.type),null;case 22:case 23:return De(t),to(),e!==null&&ye(rl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xt(ce),null;case 25:return null;default:return null}}function rr(e,t){switch(Fs(t),t.tag){case 3:xt(ce),Fl();break;case 26:case 27:case 5:$a(t);break;case 4:Fl();break;case 31:t.memoizedState!==null&&De(t);break;case 13:De(t);break;case 19:ye(ae);break;case 10:xt(t.type);break;case 22:case 23:De(t),to(),e!==null&&ye(rl);break;case 24:xt(ce)}}function _a(e,t){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var a=n.next;l=a;do{if((l.tag&e)===e){n=void 0;var u=l.create,i=l.inst;n=u(),i.destroy=n}l=l.next}while(l!==a)}}catch(s){k(t,t.return,s)}}function Pt(e,t,l){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var u=a.next;n=u;do{if((n.tag&e)===e){var i=n.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,a=t;var o=l,r=s;try{r()}catch(m){k(a,o,m)}}}n=n.next}while(n!==u)}}catch(m){k(t,t.return,m)}}function dr(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{S_(t,l)}catch(n){k(e,e.return,n)}}}function mr(e,t,l){l.props=bl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(n){k(e,t,n)}}function Rn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof l=="function"?e.refCleanup=l(n):l.current=n}}catch(a){k(e,t,a)}}function it(e,t){var l=e.ref,n=e.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(a){k(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(a){k(e,t,a)}else l.current=null}function yr(e){var t=e.type,l=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break e;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(a){k(e,e.return,a)}}function yi(e,t,l){try{var n=e.stateNode;Nm(n,e.type,l,t),n[we]=t}catch(a){k(e,e.return,a)}}function gr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ll(e.type)||e.tag===4}function gi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ll(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cs(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=pt));else if(n!==4&&(n===27&&ll(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(cs(e,t,l),e=e.sibling;e!==null;)cs(e,t,l),e=e.sibling}function _u(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(n!==4&&(n===27&&ll(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(_u(e,t,l),e=e.sibling;e!==null;)_u(e,t,l),e=e.sibling}function hr(e){var t=e.stateNode,l=e.memoizedProps;try{for(var n=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);xe(t,n,l),t[pe]=e,t[we]=l}catch(u){k(e,e.return,u)}}var gt=!1,oe=!1,hi=!1,wc=typeof WeakSet=="function"?WeakSet:Set,de=null;function rm(e,t){if(e=e.containerInfo,gs=Su,e=a_(e),Zs(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var a=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break e}var i=0,s=-1,o=-1,r=0,m=0,g=e,_=null;t:for(;;){for(var y;g!==l||a!==0&&g.nodeType!==3||(s=i+a),g!==u||n!==0&&g.nodeType!==3||(o=i+n),g.nodeType===3&&(i+=g.nodeValue.length),(y=g.firstChild)!==null;)_=g,g=y;for(;;){if(g===e)break t;if(_===l&&++r===a&&(s=i),_===u&&++m===n&&(o=i),(y=g.nextSibling)!==null)break;g=_,_=g.parentNode}g=y}l=s===-1||o===-1?null:{start:s,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(hs={focusedElem:e,selectionRange:l},Su=!1,de=t;de!==null;)if(t=de,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,de=e;else for(;de!==null;){switch(t=de,u=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)a=e[l],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&u!==null){e=void 0,l=t,a=u.memoizedProps,u=u.memoizedState,n=l.stateNode;try{var v=bl(l.type,a);e=n.getSnapshotBeforeUpdate(v,u),n.__reactInternalSnapshotBeforeUpdate=e}catch(A){k(l,l.return,A)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)bs(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(p(163))}if(e=t.sibling,e!==null){e.return=t.return,de=e;break}de=t.return}}function pr(e,t,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:dt(e,l),n&4&&_a(5,l);break;case 1:if(dt(e,l),n&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(i){k(l,l.return,i)}else{var a=bl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){k(l,l.return,i)}}n&64&&dr(l),n&512&&Rn(l,l.return);break;case 3:if(dt(e,l),n&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{S_(e,t)}catch(i){k(l,l.return,i)}}break;case 27:t===null&&n&4&&hr(l);case 26:case 5:dt(e,l),t===null&&n&4&&yr(l),n&512&&Rn(l,l.return);break;case 12:dt(e,l);break;case 31:dt(e,l),n&4&&xr(e,l);break;case 13:dt(e,l),n&4&&Sr(e,l),n&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=xm.bind(null,l),Lm(e,l))));break;case 22:if(n=l.memoizedState!==null||gt,!n){t=t!==null&&t.memoizedState!==null||oe,a=gt;var u=oe;gt=n,(oe=t)&&!u?mt(e,l,(l.subtreeFlags&8772)!==0):dt(e,l),gt=a,oe=u}break;case 30:break;default:dt(e,l)}}function br(e){var t=e.alternate;t!==null&&(e.alternate=null,br(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Xs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var te=null,Me=!1;function rt(e,t,l){for(l=l.child;l!==null;)vr(e,t,l),l=l.sibling}function vr(e,t,l){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(aa,l)}catch{}switch(l.tag){case 26:oe||it(l,t),rt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:oe||it(l,t);var n=te,a=Me;ll(l.type)&&(te=l.stateNode,Me=!1),rt(e,t,l),qn(l.stateNode),te=n,Me=a;break;case 5:oe||it(l,t);case 6:if(n=te,a=Me,te=null,rt(e,t,l),te=n,Me=a,te!==null)if(Me)try{(te.nodeType===9?te.body:te.nodeName==="HTML"?te.ownerDocument.body:te).removeChild(l.stateNode)}catch(u){k(l,t,u)}else try{te.removeChild(l.stateNode)}catch(u){k(l,t,u)}break;case 18:te!==null&&(Me?(e=te,kc(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),sn(e)):kc(te,l.stateNode));break;case 4:n=te,a=Me,te=l.stateNode.containerInfo,Me=!0,rt(e,t,l),te=n,Me=a;break;case 0:case 11:case 14:case 15:Pt(2,l,t),oe||Pt(4,l,t),rt(e,t,l);break;case 1:oe||(it(l,t),n=l.stateNode,typeof n.componentWillUnmount=="function"&&mr(l,t,n)),rt(e,t,l);break;case 21:rt(e,t,l);break;case 22:oe=(n=oe)||l.memoizedState!==null,rt(e,t,l),oe=n;break;default:rt(e,t,l)}}function xr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{sn(e)}catch(l){k(t,t.return,l)}}}function Sr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sn(e)}catch(l){k(t,t.return,l)}}function dm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new wc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new wc),t;default:throw Error(p(435,e.tag))}}function Ya(e,t){var l=dm(e);t.forEach(function(n){if(!l.has(n)){l.add(n);var a=Sm.bind(null,e,n);n.then(a,a)}})}function Ee(e,t){var l=t.deletions;if(l!==null)for(var n=0;n<l.length;n++){var a=l[n],u=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 27:if(ll(s.type)){te=s.stateNode,Me=!1;break e}break;case 5:te=s.stateNode,Me=!1;break e;case 3:case 4:te=s.stateNode.containerInfo,Me=!0;break e}s=s.return}if(te===null)throw Error(p(160));vr(u,i,a),te=null,Me=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)zr(t,e),t=t.sibling}var lt=null;function zr(e,t){var l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ee(t,e),Oe(e),n&4&&(Pt(3,e,e.return),_a(3,e),Pt(5,e,e.return));break;case 1:Ee(t,e),Oe(e),n&512&&(oe||l===null||it(l,l.return)),n&64&&gt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var a=lt;if(Ee(t,e),Oe(e),n&512&&(oe||l===null||it(l,l.return)),n&4){var u=l!==null?l.memoizedState:null;if(n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null){e:{n=e.type,l=e.memoizedProps,a=a.ownerDocument||a;t:switch(n){case"title":u=a.getElementsByTagName("title")[0],(!u||u[sa]||u[pe]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(n),a.head.insertBefore(u,a.querySelector("head > title"))),xe(u,n,l),u[pe]=e,me(u),n=u;break e;case"link":var i=$c("link","href",a).get(n+(l.href||""));if(i){for(var s=0;s<i.length;s++)if(u=i[s],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(s,1);break t}}u=a.createElement(n),xe(u,n,l),a.head.appendChild(u);break;case"meta":if(i=$c("meta","content",a).get(n+(l.content||""))){for(s=0;s<i.length;s++)if(u=i[s],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(s,1);break t}}u=a.createElement(n),xe(u,n,l),a.head.appendChild(u);break;default:throw Error(p(468,n))}u[pe]=e,me(u),n=u}e.stateNode=n}else Ic(a,e.type,e.stateNode);else e.stateNode=Fc(a,n,e.memoizedProps);else u!==n?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,n===null?Ic(a,e.type,e.stateNode):Fc(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&yi(e,e.memoizedProps,l.memoizedProps)}break;case 27:Ee(t,e),Oe(e),n&512&&(oe||l===null||it(l,l.return)),l!==null&&n&4&&yi(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Ee(t,e),Oe(e),n&512&&(oe||l===null||it(l,l.return)),e.flags&32){a=e.stateNode;try{Il(a,"")}catch(v){k(e,e.return,v)}}n&4&&e.stateNode!=null&&(a=e.memoizedProps,yi(e,a,l!==null?l.memoizedProps:a)),n&1024&&(hi=!0);break;case 6:if(Ee(t,e),Oe(e),n&4){if(e.stateNode===null)throw Error(p(162));n=e.memoizedProps,l=e.stateNode;try{l.nodeValue=n}catch(v){k(e,e.return,v)}}break;case 3:if(Va=null,a=lt,lt=bu(t.containerInfo),Ee(t,e),lt=a,Oe(e),n&4&&l!==null&&l.memoizedState.isDehydrated)try{sn(t.containerInfo)}catch(v){k(e,e.return,v)}hi&&(hi=!1,Ar(e));break;case 4:n=lt,lt=bu(e.stateNode.containerInfo),Ee(t,e),Oe(e),lt=n;break;case 12:Ee(t,e),Oe(e);break;case 31:Ee(t,e),Oe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ya(e,n)));break;case 13:Ee(t,e),Oe(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ru=He()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ya(e,n)));break;case 22:a=e.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,r=gt,m=oe;if(gt=r||a,oe=m||o,Ee(t,e),oe=m,gt=r,Oe(e),n&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(l===null||o||gt||oe||cl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){o=l=t;try{if(u=o.stateNode,a)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=o.stateNode;var g=o.memoizedProps.style,_=g!=null&&g.hasOwnProperty("display")?g.display:null;s.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(v){k(o,o.return,v)}}}else if(t.tag===6){if(l===null){o=t;try{o.stateNode.nodeValue=a?"":o.memoizedProps}catch(v){k(o,o.return,v)}}}else if(t.tag===18){if(l===null){o=t;try{var y=o.stateNode;a?Zc(y,!0):Zc(o.stateNode,!1)}catch(v){k(o,o.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,Ya(e,l))));break;case 19:Ee(t,e),Oe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ya(e,n)));break;case 30:break;case 21:break;default:Ee(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{for(var l,n=e.return;n!==null;){if(gr(n)){l=n;break}n=n.return}if(l==null)throw Error(p(160));switch(l.tag){case 27:var a=l.stateNode,u=gi(e);_u(e,u,a);break;case 5:var i=l.stateNode;l.flags&32&&(Il(i,""),l.flags&=-33);var s=gi(e);_u(e,s,i);break;case 3:case 4:var o=l.stateNode.containerInfo,r=gi(e);cs(e,r,o);break;default:throw Error(p(161))}}catch(m){k(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ar(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ar(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function dt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pr(e,t.alternate,t),t=t.sibling}function cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Pt(4,t,t.return),cl(t);break;case 1:it(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&mr(t,t.return,l),cl(t);break;case 27:qn(t.stateNode);case 26:case 5:it(t,t.return),cl(t);break;case 22:t.memoizedState===null&&cl(t);break;case 30:cl(t);break;default:cl(t)}e=e.sibling}}function mt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,a=e,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:mt(a,u,l),_a(4,u);break;case 1:if(mt(a,u,l),n=u,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(r){k(n,n.return,r)}if(n=u,a=n.updateQueue,a!==null){var s=n.stateNode;try{var o=a.shared.hiddenCallbacks;if(o!==null)for(a.shared.hiddenCallbacks=null,a=0;a<o.length;a++)x_(o[a],s)}catch(r){k(n,n.return,r)}}l&&i&64&&dr(u),Rn(u,u.return);break;case 27:hr(u);case 26:case 5:mt(a,u,l),l&&n===null&&i&4&&yr(u),Rn(u,u.return);break;case 12:mt(a,u,l);break;case 31:mt(a,u,l),l&&i&4&&xr(a,u);break;case 13:mt(a,u,l),l&&i&4&&Sr(a,u);break;case 22:u.memoizedState===null&&mt(a,u,l),Rn(u,u.return);break;case 30:break;default:mt(a,u,l)}t=t.sibling}}function po(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&ca(l))}function bo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e))}function tt(e,t,l,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tr(e,t,l,n),t=t.sibling}function Tr(e,t,l,n){var a=t.flags;switch(t.tag){case 0:case 11:case 15:tt(e,t,l,n),a&2048&&_a(9,t);break;case 1:tt(e,t,l,n);break;case 3:tt(e,t,l,n),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e)));break;case 12:if(a&2048){tt(e,t,l,n),e=t.stateNode;try{var u=t.memoizedProps,i=u.id,s=u.onPostCommit;typeof s=="function"&&s(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){k(t,t.return,o)}}else tt(e,t,l,n);break;case 31:tt(e,t,l,n);break;case 13:tt(e,t,l,n);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?tt(e,t,l,n):Xn(e,t):u._visibility&2?tt(e,t,l,n):(u._visibility|=2,Yl(e,t,l,n,(t.subtreeFlags&10256)!==0||!1)),a&2048&&po(i,t);break;case 24:tt(e,t,l,n),a&2048&&bo(t.alternate,t);break;default:tt(e,t,l,n)}}function Yl(e,t,l,n,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,i=t,s=l,o=n,r=i.flags;switch(i.tag){case 0:case 11:case 15:Yl(u,i,s,o,a),_a(8,i);break;case 23:break;case 22:var m=i.stateNode;i.memoizedState!==null?m._visibility&2?Yl(u,i,s,o,a):Xn(u,i):(m._visibility|=2,Yl(u,i,s,o,a)),a&&r&2048&&po(i.alternate,i);break;case 24:Yl(u,i,s,o,a),a&&r&2048&&bo(i.alternate,i);break;default:Yl(u,i,s,o,a)}t=t.sibling}}function Xn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,n=t,a=n.flags;switch(n.tag){case 22:Xn(l,n),a&2048&&po(n.alternate,n);break;case 24:Xn(l,n),a&2048&&bo(n.alternate,n);break;default:Xn(l,n)}t=t.sibling}}var Mn=8192;function El(e,t,l){if(e.subtreeFlags&Mn)for(e=e.child;e!==null;)Er(e,t,l),e=e.sibling}function Er(e,t,l){switch(e.tag){case 26:El(e,t,l),e.flags&Mn&&e.memoizedState!==null&&Pm(l,lt,e.memoizedState,e.memoizedProps);break;case 5:El(e,t,l);break;case 3:case 4:var n=lt;lt=bu(e.stateNode.containerInfo),El(e,t,l),lt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Mn,Mn=16777216,El(e,t,l),Mn=n):El(e,t,l));break;default:El(e,t,l)}}function Or(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xn(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];de=n,Yr(n,e)}Or(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mr(e),e=e.sibling}function Mr(e){switch(e.tag){case 0:case 11:case 15:xn(e),e.flags&2048&&Pt(9,e,e.return);break;case 3:xn(e);break;case 12:xn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ka(e)):xn(e);break;default:xn(e)}}function ka(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];de=n,Yr(n,e)}Or(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Pt(8,t,t.return),ka(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,ka(t));break;default:ka(t)}e=e.sibling}}function Yr(e,t){for(;de!==null;){var l=de;switch(l.tag){case 0:case 11:case 15:Pt(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ca(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,de=n;else e:for(l=e;de!==null;){n=de;var a=n.sibling,u=n.return;if(br(n),n===l){de=null;break e}if(a!==null){a.return=u,de=a;break e}de=u}}}var mm={getCacheForType:function(e){var t=ve(ce),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return ve(ce).controller.signal}},ym=typeof WeakMap=="function"?WeakMap:Map,L=0,K=null,H=null,R=0,G=0,Ne=null,Xt=!1,dn=!1,vo=!1,Ot=0,ne=0,el=0,ml=0,xo=0,Be=0,ln=0,Qn=null,Ye=null,fs=!1,Ru=0,Cr=0,ru=1/0,du=null,Vt=null,_e=0,Jt=null,nn=null,St=0,_s=0,rs=null,wr=null,Ln=0,ds=null;function Qe(){return L&2&&R!==0?R&-R:E.T!==null?zo():Qf()}function Ur(){if(Be===0)if(!(R&536870912)||X){var e=xa;xa<<=1,!(xa&3932160)&&(xa=262144),Be=e}else Be=536870912;return e=qe.current,e!==null&&(e.flags|=32),Be}function Ce(e,t,l){(e===K&&(G===2||G===9)||e.cancelPendingCommit!==null)&&(an(e,0),Qt(e,R,Be,!1)),ia(e,l),(!(L&2)||e!==K)&&(e===K&&(!(L&2)&&(ml|=l),ne===4&&Qt(e,R,Be,!1)),ct(e))}function Nr(e,t,l){if(L&6)throw Error(p(327));var n=!l&&(t&127)===0&&(t&e.expiredLanes)===0||ua(e,t),a=n?pm(e,t):pi(e,t,!0),u=n;do{if(a===0){dn&&!n&&Qt(e,t,0,!1);break}else{if(l=e.current.alternate,u&&!gm(l)){a=pi(e,t,!1),u=!1;continue}if(a===2){if(u=t,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var s=e;a=Qn;var o=s.current.memoizedState.isDehydrated;if(o&&(an(s,i).flags|=256),i=pi(s,i,!1),i!==2){if(vo&&!o){s.errorRecoveryDisabledLanes|=u,ml|=u,a=4;break e}u=Ye,Ye=a,u!==null&&(Ye===null?Ye=u:Ye.push.apply(Ye,u))}a=i}if(u=!1,a!==2)continue}}if(a===1){an(e,0),Qt(e,t,0,!0);break}e:{switch(n=e,u=a,u){case 0:case 1:throw Error(p(345));case 4:if((t&4194048)!==t)break;case 6:Qt(n,t,Be,!Xt);break e;case 2:Ye=null;break;case 3:case 5:break;default:throw Error(p(329))}if((t&62914560)===t&&(a=Ru+300-He(),10<a)){if(Qt(n,t,Be,!Xt),Ou(n,0,!0)!==0)break e;St=t,n.timeoutHandle=Pr(Uc.bind(null,n,l,Ye,du,fs,t,Be,ml,ln,Xt,u,"Throttled",-0,0),a);break e}Uc(n,l,Ye,du,fs,t,Be,ml,ln,Xt,u,null,-0,0)}}break}while(!0);ct(e)}function Uc(e,t,l,n,a,u,i,s,o,r,m,g,_,y){if(e.timeoutHandle=-1,g=t.subtreeFlags,g&8192||(g&16785408)===16785408){g={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pt},Er(t,u,g);var v=(u&62914560)===u?Ru-He():(u&4194048)===u?Cr-He():0;if(v=ey(g,v),v!==null){St=u,e.cancelPendingCommit=v(Dc.bind(null,e,t,u,l,n,a,i,s,o,m,g,null,_,y)),Qt(e,u,i,!r);return}}Dc(e,t,u,l,n,a,i,s,o)}function gm(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var a=l[n],u=a.getSnapshot;a=a.value;try{if(!Le(u(),a))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t,l,n){t&=~xo,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var a=t;0<a;){var u=31-Xe(a),i=1<<u;n[u]=-1,a&=~i}l!==0&&Hf(e,l,t)}function Xu(){return L&6?!0:(ra(0),!1)}function So(){if(H!==null){if(G===0)var e=H.return;else e=H,bt=Al=null,io(e),Jl=null,Wn=0,e=H;for(;e!==null;)rr(e.alternate,e),e=e.return;H=null}}function an(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Bm(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),St=0,So(),K=e,H=l=vt(e.current,null),R=t,G=0,Ne=null,Xt=!1,dn=ua(e,t),vo=!1,ln=Be=xo=ml=el=ne=0,Ye=Qn=null,fs=!1,t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-Xe(n),u=1<<a;t|=e[a],n&=~u}return Ot=t,wu(),l}function Dr(e,t){M=null,E.H=$n,t===rn||t===Nu?(t=fc(),G=3):t===Ps?(t=fc(),G=4):G=t===go?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ne=t,H===null&&(ne=1,cu(e,Fe(t,e.current)))}function jr(){var e=qe.current;return e===null?!0:(R&4194048)===R?Ie===null:(R&62914560)===R||R&536870912?e===Ie:!1}function Br(){var e=E.H;return E.H=$n,e===null?$n:e}function Hr(){var e=E.A;return E.A=mm,e}function mu(){ne=4,Xt||(R&4194048)!==R&&qe.current!==null||(dn=!0),!(el&134217727)&&!(ml&134217727)||K===null||Qt(K,R,Be,!1)}function pi(e,t,l){var n=L;L|=2;var a=Br(),u=Hr();(K!==e||R!==t)&&(du=null,an(e,t)),t=!1;var i=ne;e:do try{if(G!==0&&H!==null){var s=H,o=Ne;switch(G){case 8:So(),i=6;break e;case 3:case 2:case 9:case 6:qe.current===null&&(t=!0);var r=G;if(G=0,Ne=null,ql(e,s,o,r),l&&dn){i=0;break e}break;default:r=G,G=0,Ne=null,ql(e,s,o,r)}}hm(),i=ne;break}catch(m){Dr(e,m)}while(!0);return t&&e.shellSuspendCounter++,bt=Al=null,L=n,E.H=a,E.A=u,H===null&&(K=null,R=0,wu()),i}function hm(){for(;H!==null;)Rr(H)}function pm(e,t){var l=L;L|=2;var n=Br(),a=Hr();K!==e||R!==t?(du=null,ru=He()+500,an(e,t)):dn=ua(e,t);e:do try{if(G!==0&&H!==null){t=H;var u=Ne;t:switch(G){case 1:G=0,Ne=null,ql(e,t,u,1);break;case 2:case 9:if(cc(u)){G=0,Ne=null,Nc(t);break}t=function(){G!==2&&G!==9||K!==e||(G=7),ct(e)},u.then(t,t);break e;case 3:G=7;break e;case 4:G=5;break e;case 7:cc(u)?(G=0,Ne=null,Nc(t)):(G=0,Ne=null,ql(e,t,u,7));break;case 5:var i=null;switch(H.tag){case 26:i=H.memoizedState;case 5:case 27:var s=H;if(i?a0(i):s.stateNode.complete){G=0,Ne=null;var o=s.sibling;if(o!==null)H=o;else{var r=s.return;r!==null?(H=r,Qu(r)):H=null}break t}}G=0,Ne=null,ql(e,t,u,5);break;case 6:G=0,Ne=null,ql(e,t,u,6);break;case 8:So(),ne=6;break e;default:throw Error(p(462))}}bm();break}catch(m){Dr(e,m)}while(!0);return bt=Al=null,E.H=n,E.A=a,L=l,H!==null?0:(K=null,R=0,wu(),ne)}function bm(){for(;H!==null&&!q0();)Rr(H)}function Rr(e){var t=_r(e.alternate,e,Ot);e.memoizedProps=e.pendingProps,t===null?Qu(e):H=t}function Nc(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Ec(l,t,t.pendingProps,t.type,void 0,R);break;case 11:t=Ec(l,t,t.pendingProps,t.type.render,t.ref,R);break;case 5:io(t);default:rr(l,t),t=H=r_(t,Ot),t=_r(l,t,Ot)}e.memoizedProps=e.pendingProps,t===null?Qu(e):H=t}function ql(e,t,l,n){bt=Al=null,io(t),Jl=null,Wn=0;var a=t.return;try{if(sm(e,a,t,l,R)){ne=1,cu(e,Fe(l,e.current)),H=null;return}}catch(u){if(a!==null)throw H=a,u;ne=1,cu(e,Fe(l,e.current)),H=null;return}t.flags&32768?(X||n===1?e=!0:dn||R&536870912?e=!1:(Xt=e=!0,(n===2||n===9||n===3||n===6)&&(n=qe.current,n!==null&&n.tag===13&&(n.flags|=16384))),Xr(t,e)):Qu(t)}function Qu(e){var t=e;do{if(t.flags&32768){Xr(t,Xt);return}e=t.return;var l=fm(t.alternate,t,Ot);if(l!==null){H=l;return}if(t=t.sibling,t!==null){H=t;return}H=t=e}while(t!==null);ne===0&&(ne=5)}function Xr(e,t){do{var l=_m(e.alternate,e);if(l!==null){l.flags&=32767,H=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){H=e;return}H=e=l}while(e!==null);ne=6,H=null}function Dc(e,t,l,n,a,u,i,s,o){e.cancelPendingCommit=null;do Lu();while(_e!==0);if(L&6)throw Error(p(327));if(t!==null){if(t===e.current)throw Error(p(177));if(u=t.lanes|t.childLanes,u|=Vs,I0(e,l,u,i,s,o),e===K&&(H=K=null,R=0),nn=t,Jt=e,St=l,_s=u,rs=a,wr=n,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,zm(Ia,function(){return kr(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,t.subtreeFlags&13878||n){n=E.T,E.T=null,a=q.p,q.p=2,i=L,L|=4;try{rm(e,t,l)}finally{L=i,q.p=a,E.T=n}}_e=1,Qr(),Lr(),qr()}}function Qr(){if(_e===1){_e=0;var e=Jt,t=nn,l=(t.flags&13878)!==0;if(t.subtreeFlags&13878||l){l=E.T,E.T=null;var n=q.p;q.p=2;var a=L;L|=4;try{zr(t,e);var u=hs,i=a_(e.containerInfo),s=u.focusedElem,o=u.selectionRange;if(i!==s&&s&&s.ownerDocument&&n_(s.ownerDocument.documentElement,s)){if(o!==null&&Zs(s)){var r=o.start,m=o.end;if(m===void 0&&(m=r),"selectionStart"in s)s.selectionStart=r,s.selectionEnd=Math.min(m,s.value.length);else{var g=s.ownerDocument||document,_=g&&g.defaultView||window;if(_.getSelection){var y=_.getSelection(),v=s.textContent.length,A=Math.min(o.start,v),D=o.end===void 0?A:Math.min(o.end,v);!y.extend&&A>D&&(i=D,D=A,A=i);var f=lc(s,A),c=lc(s,D);if(f&&c&&(y.rangeCount!==1||y.anchorNode!==f.node||y.anchorOffset!==f.offset||y.focusNode!==c.node||y.focusOffset!==c.offset)){var d=g.createRange();d.setStart(f.node,f.offset),y.removeAllRanges(),A>D?(y.addRange(d),y.extend(c.node,c.offset)):(d.setEnd(c.node,c.offset),y.addRange(d))}}}}for(g=[],y=s;y=y.parentNode;)y.nodeType===1&&g.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<g.length;s++){var h=g[s];h.element.scrollLeft=h.left,h.element.scrollTop=h.top}}Su=!!gs,hs=gs=null}finally{L=a,q.p=n,E.T=l}}e.current=t,_e=2}}function Lr(){if(_e===2){_e=0;var e=Jt,t=nn,l=(t.flags&8772)!==0;if(t.subtreeFlags&8772||l){l=E.T,E.T=null;var n=q.p;q.p=2;var a=L;L|=4;try{pr(e,t.alternate,t)}finally{L=a,q.p=n,E.T=l}}_e=3}}function qr(){if(_e===4||_e===3){_e=0,G0();var e=Jt,t=nn,l=St,n=wr;t.subtreeFlags&10256||t.flags&10256?_e=5:(_e=0,nn=Jt=null,Gr(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Vt=null),Rs(l),t=t.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(aa,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=E.T,a=q.p,q.p=2,E.T=null;try{for(var u=e.onRecoverableError,i=0;i<n.length;i++){var s=n[i];u(s.value,{componentStack:s.stack})}}finally{E.T=t,q.p=a}}St&3&&Lu(),ct(e),a=e.pendingLanes,l&261930&&a&42?e===ds?Ln++:(Ln=0,ds=e):Ln=0,ra(0)}}function Gr(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ca(t)))}function Lu(){return Qr(),Lr(),qr(),kr()}function kr(){if(_e!==5)return!1;var e=Jt,t=_s;_s=0;var l=Rs(St),n=E.T,a=q.p;try{q.p=32>l?32:l,E.T=null,l=rs,rs=null;var u=Jt,i=St;if(_e=0,nn=Jt=null,St=0,L&6)throw Error(p(331));var s=L;if(L|=4,Mr(u.current),Tr(u,u.current,i,l),L=s,ra(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(aa,u)}catch{}return!0}finally{q.p=a,E.T=n,Gr(e,t)}}function jc(e,t,l){t=Fe(l,t),t=is(e.stateNode,t,2),e=Zt(e,t,2),e!==null&&(ia(e,2),ct(e))}function k(e,t,l){if(e.tag===3)jc(e,e,l);else for(;t!==null;){if(t.tag===3){jc(t,e,l);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Vt===null||!Vt.has(n))){e=Fe(l,e),l=ur(2),n=Zt(t,l,2),n!==null&&(ir(l,n,t,e),ia(n,2),ct(n));break}}t=t.return}}function bi(e,t,l){var n=e.pingCache;if(n===null){n=e.pingCache=new ym;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(l)||(vo=!0,a.add(l),e=vm.bind(null,e,t,l),t.then(e,e))}function vm(e,t,l){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,K===e&&(R&l)===l&&(ne===4||ne===3&&(R&62914560)===R&&300>He()-Ru?!(L&2)&&an(e,0):xo|=l,ln===R&&(ln=0)),ct(e)}function Zr(e,t){t===0&&(t=Bf()),e=zl(e,t),e!==null&&(ia(e,t),ct(e))}function xm(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Zr(e,l)}function Sm(e,t){var l=0;switch(e.tag){case 31:case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(l=a.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(p(314))}n!==null&&n.delete(t),Zr(e,l)}function zm(e,t){return Bs(e,t)}var yu=null,Cl=null,ms=!1,gu=!1,vi=!1,Lt=0;function ct(e){e!==Cl&&e.next===null&&(Cl===null?yu=Cl=e:Cl=Cl.next=e),gu=!0,ms||(ms=!0,Tm())}function ra(e,t){if(!vi&&gu){vi=!0;do for(var l=!1,n=yu;n!==null;){if(e!==0){var a=n.pendingLanes;if(a===0)var u=0;else{var i=n.suspendedLanes,s=n.pingedLanes;u=(1<<31-Xe(42|e)+1)-1,u&=a&~(i&~s),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,Bc(n,u))}else u=R,u=Ou(n,n===K?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),!(u&3)||ua(n,u)||(l=!0,Bc(n,u));n=n.next}while(l);vi=!1}}function Am(){Vr()}function Vr(){gu=ms=!1;var e=0;Lt!==0&&jm()&&(e=Lt);for(var t=He(),l=null,n=yu;n!==null;){var a=n.next,u=Jr(n,t);u===0?(n.next=null,l===null?yu=a:l.next=a,a===null&&(Cl=l)):(l=n,(e!==0||u&3)&&(gu=!0)),n=a}_e!==0&&_e!==5||ra(e),Lt!==0&&(Lt=0)}function Jr(e,t){for(var l=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-Xe(u),s=1<<i,o=a[i];o===-1?(!(s&l)||s&n)&&(a[i]=$0(s,t)):o<=t&&(e.expiredLanes|=s),u&=~s}if(t=K,l=R,l=Ou(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,l===0||e===t&&(G===2||G===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ku(n),e.callbackNode=null,e.callbackPriority=0;if(!(l&3)||ua(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(n!==null&&Ku(n),Rs(l)){case 2:case 8:l=Df;break;case 32:l=Ia;break;case 268435456:l=jf;break;default:l=Ia}return n=Kr.bind(null,e),l=Bs(l,n),e.callbackPriority=t,e.callbackNode=l,t}return n!==null&&n!==null&&Ku(n),e.callbackPriority=2,e.callbackNode=null,2}function Kr(e,t){if(_e!==0&&_e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Lu()&&e.callbackNode!==l)return null;var n=R;return n=Ou(e,e===K?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Nr(e,n,t),Jr(e,He()),e.callbackNode!=null&&e.callbackNode===l?Kr.bind(null,e):null)}function Bc(e,t){if(Lu())return null;Nr(e,t,!0)}function Tm(){Hm(function(){L&6?Bs(Nf,Am):Vr()})}function zo(){if(Lt===0){var e=Pl;e===0&&(e=va,va<<=1,!(va&261888)&&(va=256)),Lt=e}return Lt}function Hc(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ja(""+e)}function Rc(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Em(e,t,l,n,a){if(t==="submit"&&l&&l.stateNode===a){var u=Hc((a[we]||null).action),i=n.submitter;i&&(t=(t=i[we]||null)?Hc(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var s=new Mu("action","action",null,n,a);e.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Lt!==0){var o=i?Rc(a,i):new FormData(a);as(l,{pending:!0,data:o,method:a.method,action:u},null,o)}}else typeof u=="function"&&(s.preventDefault(),o=i?Rc(a,i):new FormData(a),as(l,{pending:!0,data:o,method:a.method,action:u},u,o))},currentTarget:a}]})}}for(var xi=0;xi<Vi.length;xi++){var Si=Vi[xi],Om=Si.toLowerCase(),Mm=Si[0].toUpperCase()+Si.slice(1);nt(Om,"on"+Mm)}nt(i_,"onAnimationEnd");nt(s_,"onAnimationIteration");nt(o_,"onAnimationStart");nt("dblclick","onDoubleClick");nt("focusin","onFocus");nt("focusout","onBlur");nt(kd,"onTransitionRun");nt(Zd,"onTransitionStart");nt(Vd,"onTransitionCancel");nt(c_,"onTransitionEnd");$l("onMouseEnter",["mouseout","mouseover"]);$l("onMouseLeave",["mouseout","mouseover"]);$l("onPointerEnter",["pointerout","pointerover"]);$l("onPointerLeave",["pointerout","pointerover"]);vl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vl("onBeforeInput",["compositionend","keypress","textInput","paste"]);vl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var In="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ym=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(In));function Wr(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var n=e[l],a=n.event;n=n.listeners;e:{var u=void 0;if(t)for(var i=n.length-1;0<=i;i--){var s=n[i],o=s.instance,r=s.currentTarget;if(s=s.listener,o!==u&&a.isPropagationStopped())break e;u=s,a.currentTarget=r;try{u(a)}catch(m){eu(m)}a.currentTarget=null,u=o}else for(i=0;i<n.length;i++){if(s=n[i],o=s.instance,r=s.currentTarget,s=s.listener,o!==u&&a.isPropagationStopped())break e;u=s,a.currentTarget=r;try{u(a)}catch(m){eu(m)}a.currentTarget=null,u=o}}}}function B(e,t){var l=t[Ri];l===void 0&&(l=t[Ri]=new Set);var n=e+"__bubble";l.has(n)||(Fr(t,e,2,!1),l.add(n))}function zi(e,t,l){var n=0;t&&(n|=4),Fr(l,e,n,t)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function Ao(e){if(!e[Ca]){e[Ca]=!0,Lf.forEach(function(l){l!=="selectionchange"&&(Ym.has(l)||zi(l,!1,e),zi(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ca]||(t[Ca]=!0,zi("selectionchange",!1,t))}}function Fr(e,t,l,n){switch(c0(t)){case 2:var a=ny;break;case 8:a=ay;break;default:a=Mo}l=a.bind(null,t,l,e),a=void 0,!Gi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,l,{capture:!0,passive:a}):e.addEventListener(t,l,!0):a!==void 0?e.addEventListener(t,l,{passive:a}):e.addEventListener(t,l,!1)}function Ai(e,t,l,n,a){var u=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var s=n.stateNode.containerInfo;if(s===a)break;if(i===4)for(i=n.return;i!==null;){var o=i.tag;if((o===3||o===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;s!==null;){if(i=Nl(s),i===null)return;if(o=i.tag,o===5||o===6||o===26||o===27){n=u=i;continue e}s=s.parentNode}}n=n.return}Wf(function(){var r=u,m=Ls(l),g=[];e:{var _=f_.get(e);if(_!==void 0){var y=Mu,v=e;switch(e){case"keypress":if(Ha(l)===0)break e;case"keydown":case"keyup":y=Sd;break;case"focusin":v="focus",y=Pu;break;case"focusout":v="blur",y=Pu;break;case"beforeblur":case"afterblur":y=Pu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Td;break;case i_:case s_:case o_:y=dd;break;case c_:y=Od;break;case"scroll":case"scrollend":y=od;break;case"wheel":y=Yd;break;case"copy":case"cut":case"paste":y=yd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ko;break;case"toggle":case"beforetoggle":y=wd}var A=(t&4)!==0,D=!A&&(e==="scroll"||e==="scrollend"),f=A?_!==null?_+"Capture":null:_;A=[];for(var c=r,d;c!==null;){var h=c;if(d=h.stateNode,h=h.tag,h!==5&&h!==26&&h!==27||d===null||f===null||(h=kn(c,f),h!=null&&A.push(Pn(c,h,d))),D)break;c=c.return}0<A.length&&(_=new y(_,v,null,l,m),g.push({event:_,listeners:A}))}}if(!(t&7)){e:{if(_=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",_&&l!==qi&&(v=l.relatedTarget||l.fromElement)&&(Nl(v)||v[cn]))break e;if((y||_)&&(_=m.window===m?m:(_=m.ownerDocument)?_.defaultView||_.parentWindow:window,y?(v=l.relatedTarget||l.toElement,y=r,v=v?Nl(v):null,v!==null&&(D=na(v),A=v.tag,v!==D||A!==5&&A!==27&&A!==6)&&(v=null)):(y=null,v=r),y!==v)){if(A=Vo,h="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(A=Ko,h="onPointerLeave",f="onPointerEnter",c="pointer"),D=y==null?_:En(y),d=v==null?_:En(v),_=new A(h,c+"leave",y,l,m),_.target=D,_.relatedTarget=d,h=null,Nl(m)===r&&(A=new A(f,c+"enter",v,l,m),A.target=d,A.relatedTarget=D,h=A),D=h,y&&v)t:{for(A=Cm,f=y,c=v,d=0,h=f;h;h=A(h))d++;h=0;for(var z=c;z;z=A(z))h++;for(;0<d-h;)f=A(f),d--;for(;0<h-d;)c=A(c),h--;for(;d--;){if(f===c||c!==null&&f===c.alternate){A=f;break t}f=A(f),c=A(c)}A=null}else A=null;y!==null&&Xc(g,_,y,A,!1),v!==null&&D!==null&&Xc(g,D,v,A,!0)}}e:{if(_=r?En(r):window,y=_.nodeName&&_.nodeName.toLowerCase(),y==="select"||y==="input"&&_.type==="file")var Y=Io;else if($o(_))if(t_)Y=Ld;else{Y=Xd;var x=Rd}else y=_.nodeName,!y||y.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?r&&Qs(r.elementType)&&(Y=Io):Y=Qd;if(Y&&(Y=Y(e,r))){e_(g,Y,l,m);break e}x&&x(e,_,r),e==="focusout"&&r&&_.type==="number"&&r.memoizedProps.value!=null&&Li(_,"number",_.value)}switch(x=r?En(r):window,e){case"focusin":($o(x)||x.contentEditable==="true")&&(Bl=x,ki=r,Un=null);break;case"focusout":Un=ki=Bl=null;break;case"mousedown":Zi=!0;break;case"contextmenu":case"mouseup":case"dragend":Zi=!1,nc(g,l,m);break;case"selectionchange":if(Gd)break;case"keydown":case"keyup":nc(g,l,m)}var T;if(ks)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else jl?If(e,l)&&(C="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(C="onCompositionStart");C&&($f&&l.locale!=="ko"&&(jl||C!=="onCompositionStart"?C==="onCompositionEnd"&&jl&&(T=Ff()):(Rt=m,qs="value"in Rt?Rt.value:Rt.textContent,jl=!0)),x=hu(r,C),0<x.length&&(C=new Jo(C,e,null,l,m),g.push({event:C,listeners:x}),T?C.data=T:(T=Pf(l),T!==null&&(C.data=T)))),(T=Nd?Dd(e,l):jd(e,l))&&(C=hu(r,"onBeforeInput"),0<C.length&&(x=new Jo("onBeforeInput","beforeinput",null,l,m),g.push({event:x,listeners:C}),x.data=T)),Em(g,e,r,l,m)}Wr(g,t)})}function Pn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function hu(e,t){for(var l=t+"Capture",n=[];e!==null;){var a=e,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=kn(e,l),a!=null&&n.unshift(Pn(e,a,u)),a=kn(e,t),a!=null&&n.push(Pn(e,a,u))),e.tag===3)return n;e=e.return}return[]}function Cm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xc(e,t,l,n,a){for(var u=t._reactName,i=[];l!==null&&l!==n;){var s=l,o=s.alternate,r=s.stateNode;if(s=s.tag,o!==null&&o===n)break;s!==5&&s!==26&&s!==27||r===null||(o=r,a?(r=kn(l,u),r!=null&&i.unshift(Pn(l,r,o))):a||(r=kn(l,u),r!=null&&i.push(Pn(l,r,o)))),l=l.return}i.length!==0&&e.push({event:t,listeners:i})}var wm=/\r\n?/g,Um=/\u0000|\uFFFD/g;function Qc(e){return(typeof e=="string"?e:""+e).replace(wm,`
`).replace(Um,"")}function $r(e,t){return t=Qc(t),Qc(e)===t}function Z(e,t,l,n,a,u){switch(l){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Il(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Il(e,""+n);break;case"className":za(e,"class",n);break;case"tabIndex":za(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":za(e,l,n);break;case"style":Kf(e,n,u);break;case"data":if(t!=="object"){za(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=ja(""+n),e.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(t!=="input"&&Z(e,t,"name",a.name,a,null),Z(e,t,"formEncType",a.formEncType,a,null),Z(e,t,"formMethod",a.formMethod,a,null),Z(e,t,"formTarget",a.formTarget,a,null)):(Z(e,t,"encType",a.encType,a,null),Z(e,t,"method",a.method,a,null),Z(e,t,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=ja(""+n),e.setAttribute(l,n);break;case"onClick":n!=null&&(e.onclick=pt);break;case"onScroll":n!=null&&B("scroll",e);break;case"onScrollEnd":n!=null&&B("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(p(60));e.innerHTML=l}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}l=ja(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""+n):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":n===!0?e.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,n):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(l,n):e.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(l):e.setAttribute(l,n);break;case"popover":B("beforetoggle",e),B("toggle",e),Da(e,"popover",n);break;case"xlinkActuate":ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ft(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ft(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ft(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ft(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Da(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=id.get(l)||l,Da(e,l,n))}}function ys(e,t,l,n,a,u){switch(l){case"style":Kf(e,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(p(60));e.innerHTML=l}}break;case"children":typeof n=="string"?Il(e,n):(typeof n=="number"||typeof n=="bigint")&&Il(e,""+n);break;case"onScroll":n!=null&&B("scroll",e);break;case"onScrollEnd":n!=null&&B("scrollend",e);break;case"onClick":n!=null&&(e.onclick=pt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qf.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(a=l.endsWith("Capture"),t=l.slice(2,a?l.length-7:void 0),u=e[we]||null,u=u!=null?u[l]:null,typeof u=="function"&&e.removeEventListener(t,u,a),typeof n=="function")){typeof u!="function"&&u!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,n,a);break e}l in e?e[l]=n:n===!0?e.setAttribute(l,""):Da(e,l,n)}}}function xe(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":B("error",e),B("load",e);var n=!1,a=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:Z(e,t,u,i,l,null)}}a&&Z(e,t,"srcSet",l.srcSet,l,null),n&&Z(e,t,"src",l.src,l,null);return;case"input":B("invalid",e);var s=u=i=a=null,o=null,r=null;for(n in l)if(l.hasOwnProperty(n)){var m=l[n];if(m!=null)switch(n){case"name":a=m;break;case"type":i=m;break;case"checked":o=m;break;case"defaultChecked":r=m;break;case"value":u=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(p(137,t));break;default:Z(e,t,n,m,l,null)}}Zf(e,u,s,o,r,i,a,!1);return;case"select":B("invalid",e),n=i=u=null;for(a in l)if(l.hasOwnProperty(a)&&(s=l[a],s!=null))switch(a){case"value":u=s;break;case"defaultValue":i=s;break;case"multiple":n=s;default:Z(e,t,a,s,l,null)}t=u,l=i,e.multiple=!!n,t!=null?kl(e,!!n,t,!1):l!=null&&kl(e,!!n,l,!0);return;case"textarea":B("invalid",e),u=a=n=null;for(i in l)if(l.hasOwnProperty(i)&&(s=l[i],s!=null))switch(i){case"value":n=s;break;case"defaultValue":a=s;break;case"children":u=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(p(91));break;default:Z(e,t,i,s,l,null)}Jf(e,n,a,u);return;case"option":for(o in l)if(l.hasOwnProperty(o)&&(n=l[o],n!=null))switch(o){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Z(e,t,o,n,l,null)}return;case"dialog":B("beforetoggle",e),B("toggle",e),B("cancel",e),B("close",e);break;case"iframe":case"object":B("load",e);break;case"video":case"audio":for(n=0;n<In.length;n++)B(In[n],e);break;case"image":B("error",e),B("load",e);break;case"details":B("toggle",e);break;case"embed":case"source":case"link":B("error",e),B("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(r in l)if(l.hasOwnProperty(r)&&(n=l[r],n!=null))switch(r){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:Z(e,t,r,n,l,null)}return;default:if(Qs(t)){for(m in l)l.hasOwnProperty(m)&&(n=l[m],n!==void 0&&ys(e,t,m,n,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(n=l[s],n!=null&&Z(e,t,s,n,l,null))}function Nm(e,t,l,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,i=null,s=null,o=null,r=null,m=null;for(y in l){var g=l[y];if(l.hasOwnProperty(y)&&g!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":o=g;default:n.hasOwnProperty(y)||Z(e,t,y,null,n,g)}}for(var _ in n){var y=n[_];if(g=l[_],n.hasOwnProperty(_)&&(y!=null||g!=null))switch(_){case"type":u=y;break;case"name":a=y;break;case"checked":r=y;break;case"defaultChecked":m=y;break;case"value":i=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,t));break;default:y!==g&&Z(e,t,_,y,n,g)}}Qi(e,i,s,o,r,m,u,a);return;case"select":y=i=s=_=null;for(u in l)if(o=l[u],l.hasOwnProperty(u)&&o!=null)switch(u){case"value":break;case"multiple":y=o;default:n.hasOwnProperty(u)||Z(e,t,u,null,n,o)}for(a in n)if(u=n[a],o=l[a],n.hasOwnProperty(a)&&(u!=null||o!=null))switch(a){case"value":_=u;break;case"defaultValue":s=u;break;case"multiple":i=u;default:u!==o&&Z(e,t,a,u,n,o)}t=s,l=i,n=y,_!=null?kl(e,!!l,_,!1):!!n!=!!l&&(t!=null?kl(e,!!l,t,!0):kl(e,!!l,l?[]:"",!1));return;case"textarea":y=_=null;for(s in l)if(a=l[s],l.hasOwnProperty(s)&&a!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Z(e,t,s,null,n,a)}for(i in n)if(a=n[i],u=l[i],n.hasOwnProperty(i)&&(a!=null||u!=null))switch(i){case"value":_=a;break;case"defaultValue":y=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(p(91));break;default:a!==u&&Z(e,t,i,a,n,u)}Vf(e,_,y);return;case"option":for(var v in l)if(_=l[v],l.hasOwnProperty(v)&&_!=null&&!n.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:Z(e,t,v,null,n,_)}for(o in n)if(_=n[o],y=l[o],n.hasOwnProperty(o)&&_!==y&&(_!=null||y!=null))switch(o){case"selected":e.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:Z(e,t,o,_,n,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var A in l)_=l[A],l.hasOwnProperty(A)&&_!=null&&!n.hasOwnProperty(A)&&Z(e,t,A,null,n,_);for(r in n)if(_=n[r],y=l[r],n.hasOwnProperty(r)&&_!==y&&(_!=null||y!=null))switch(r){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(p(137,t));break;default:Z(e,t,r,_,n,y)}return;default:if(Qs(t)){for(var D in l)_=l[D],l.hasOwnProperty(D)&&_!==void 0&&!n.hasOwnProperty(D)&&ys(e,t,D,void 0,n,_);for(m in n)_=n[m],y=l[m],!n.hasOwnProperty(m)||_===y||_===void 0&&y===void 0||ys(e,t,m,_,n,y);return}}for(var f in l)_=l[f],l.hasOwnProperty(f)&&_!=null&&!n.hasOwnProperty(f)&&Z(e,t,f,null,n,_);for(g in n)_=n[g],y=l[g],!n.hasOwnProperty(g)||_===y||_==null&&y==null||Z(e,t,g,_,n,y)}function Lc(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Dm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),n=0;n<l.length;n++){var a=l[n],u=a.transferSize,i=a.initiatorType,s=a.duration;if(u&&s&&Lc(i)){for(i=0,s=a.responseEnd,n+=1;n<l.length;n++){var o=l[n],r=o.startTime;if(r>s)break;var m=o.transferSize,g=o.initiatorType;m&&Lc(g)&&(o=o.responseEnd,i+=m*(o<s?1:(s-r)/(o-r)))}if(--n,t+=8*(u+i)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var gs=null,hs=null;function pu(e){return e.nodeType===9?e:e.ownerDocument}function qc(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ir(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ps(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ti=null;function jm(){var e=window.event;return e&&e.type==="popstate"?e===Ti?!1:(Ti=e,!0):(Ti=null,!1)}var Pr=typeof setTimeout=="function"?setTimeout:void 0,Bm=typeof clearTimeout=="function"?clearTimeout:void 0,Gc=typeof Promise=="function"?Promise:void 0,Hm=typeof queueMicrotask=="function"?queueMicrotask:typeof Gc<"u"?function(e){return Gc.resolve(null).then(e).catch(Rm)}:Pr;function Rm(e){setTimeout(function(){throw e})}function ll(e){return e==="head"}function kc(e,t){var l=t,n=0;do{var a=l.nextSibling;if(e.removeChild(l),a&&a.nodeType===8)if(l=a.data,l==="/$"||l==="/&"){if(n===0){e.removeChild(a),sn(t);return}n--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")n++;else if(l==="html")qn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,qn(l);for(var u=l.firstChild;u;){var i=u.nextSibling,s=u.nodeName;u[sa]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&qn(e.ownerDocument.body);l=a}while(l);sn(t)}function Zc(e,t){var l=e;e=0;do{var n=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=n}while(l)}function bs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":bs(l),Xs(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Xm(e,t,l,n){for(;e.nodeType===1;){var a=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[sa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Pe(e.nextSibling),e===null)break}return null}function Qm(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Pe(e.nextSibling),e===null))return null;return e}function e0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pe(e.nextSibling),e===null))return null;return e}function vs(e){return e.data==="$?"||e.data==="$~"}function xs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Lm(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var n=function(){t(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Pe(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ss=null;function Vc(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Pe(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Jc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function t0(e,t,l){switch(t=pu(l),e){case"html":if(e=t.documentElement,!e)throw Error(p(452));return e;case"head":if(e=t.head,!e)throw Error(p(453));return e;case"body":if(e=t.body,!e)throw Error(p(454));return e;default:throw Error(p(451))}}function qn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xs(e)}var et=new Map,Kc=new Set;function bu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Mt=q.d;q.d={f:qm,r:Gm,D:km,C:Zm,L:Vm,m:Jm,X:Wm,S:Km,M:Fm};function qm(){var e=Mt.f(),t=Xu();return e||t}function Gm(e){var t=fn(e);t!==null&&t.tag===5&&t.type==="form"?K_(t):Mt.r(e)}var mn=typeof document>"u"?null:document;function l0(e,t,l){var n=mn;if(n&&typeof t=="string"&&t){var a=We(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof l=="string"&&(a+='[crossorigin="'+l+'"]'),Kc.has(a)||(Kc.add(a),e={rel:e,crossOrigin:l,href:t},n.querySelector(a)===null&&(t=n.createElement("link"),xe(t,"link",e),me(t),n.head.appendChild(t)))}}function km(e){Mt.D(e),l0("dns-prefetch",e,null)}function Zm(e,t){Mt.C(e,t),l0("preconnect",e,t)}function Vm(e,t,l){Mt.L(e,t,l);var n=mn;if(n&&e&&t){var a='link[rel="preload"][as="'+We(t)+'"]';t==="image"&&l&&l.imageSrcSet?(a+='[imagesrcset="'+We(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(a+='[imagesizes="'+We(l.imageSizes)+'"]')):a+='[href="'+We(e)+'"]';var u=a;switch(t){case"style":u=un(e);break;case"script":u=yn(e)}et.has(u)||(e=ee({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),et.set(u,e),n.querySelector(a)!==null||t==="style"&&n.querySelector(da(u))||t==="script"&&n.querySelector(ma(u))||(t=n.createElement("link"),xe(t,"link",e),me(t),n.head.appendChild(t)))}}function Jm(e,t){Mt.m(e,t);var l=mn;if(l&&e){var n=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+We(n)+'"][href="'+We(e)+'"]',u=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=yn(e)}if(!et.has(u)&&(e=ee({rel:"modulepreload",href:e},t),et.set(u,e),l.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(ma(u)))return}n=l.createElement("link"),xe(n,"link",e),me(n),l.head.appendChild(n)}}}function Km(e,t,l){Mt.S(e,t,l);var n=mn;if(n&&e){var a=Gl(n).hoistableStyles,u=un(e);t=t||"default";var i=a.get(u);if(!i){var s={loading:0,preload:null};if(i=n.querySelector(da(u)))s.loading=5;else{e=ee({rel:"stylesheet",href:e,"data-precedence":t},l),(l=et.get(u))&&To(e,l);var o=i=n.createElement("link");me(o),xe(o,"link",e),o._p=new Promise(function(r,m){o.onload=r,o.onerror=m}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Za(i,t,n)}i={type:"stylesheet",instance:i,count:1,state:s},a.set(u,i)}}}function Wm(e,t){Mt.X(e,t);var l=mn;if(l&&e){var n=Gl(l).hoistableScripts,a=yn(e),u=n.get(a);u||(u=l.querySelector(ma(a)),u||(e=ee({src:e,async:!0},t),(t=et.get(a))&&Eo(e,t),u=l.createElement("script"),me(u),xe(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function Fm(e,t){Mt.M(e,t);var l=mn;if(l&&e){var n=Gl(l).hoistableScripts,a=yn(e),u=n.get(a);u||(u=l.querySelector(ma(a)),u||(e=ee({src:e,async:!0,type:"module"},t),(t=et.get(a))&&Eo(e,t),u=l.createElement("script"),me(u),xe(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function Wc(e,t,l,n){var a=(a=qt.current)?bu(a):null;if(!a)throw Error(p(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=un(l.href),l=Gl(a).hoistableStyles,n=l.get(t),n||(n={type:"style",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=un(l.href);var u=Gl(a).hoistableStyles,i=u.get(e);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=a.querySelector(da(e)))&&!u._p&&(i.instance=u,i.state.loading=5),et.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},et.set(e,l),u||$m(a,e,l,i.state))),t&&n===null)throw Error(p(528,""));return i}if(t&&n!==null)throw Error(p(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=yn(l),l=Gl(a).hoistableScripts,n=l.get(t),n||(n={type:"script",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,e))}}function un(e){return'href="'+We(e)+'"'}function da(e){return'link[rel="stylesheet"]['+e+"]"}function n0(e){return ee({},e,{"data-precedence":e.precedence,precedence:null})}function $m(e,t,l,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),xe(t,"link",l),me(t),e.head.appendChild(t))}function yn(e){return'[src="'+We(e)+'"]'}function ma(e){return"script[async]"+e}function Fc(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+We(l.href)+'"]');if(n)return t.instance=n,me(n),n;var a=ee({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),me(n),xe(n,"style",a),Za(n,l.precedence,e),t.instance=n;case"stylesheet":a=un(l.href);var u=e.querySelector(da(a));if(u)return t.state.loading|=4,t.instance=u,me(u),u;n=n0(l),(a=et.get(a))&&To(n,a),u=(e.ownerDocument||e).createElement("link"),me(u);var i=u;return i._p=new Promise(function(s,o){i.onload=s,i.onerror=o}),xe(u,"link",n),t.state.loading|=4,Za(u,l.precedence,e),t.instance=u;case"script":return u=yn(l.src),(a=e.querySelector(ma(u)))?(t.instance=a,me(a),a):(n=l,(a=et.get(u))&&(n=ee({},l),Eo(n,a)),e=e.ownerDocument||e,a=e.createElement("script"),me(a),xe(a,"link",n),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(p(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(n=t.instance,t.state.loading|=4,Za(n,l.precedence,e));return t.instance}function Za(e,t,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,u=a,i=0;i<n.length;i++){var s=n[i];if(s.dataset.precedence===t)u=s;else if(u!==a)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function To(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Eo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Va=null;function $c(e,t,l){if(Va===null){var n=new Map,a=Va=new Map;a.set(l,n)}else a=Va,n=a.get(l),n||(n=new Map,a.set(l,n));if(n.has(e))return n;for(n.set(e,null),l=l.getElementsByTagName(e),a=0;a<l.length;a++){var u=l[a];if(!(u[sa]||u[pe]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=e+i;var s=n.get(i);s?s.push(u):n.set(i,[u])}}return n}function Ic(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Im(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function a0(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Pm(e,t,l,n){if(l.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(l.state.loading&4)){if(l.instance===null){var a=un(n.href),u=t.querySelector(da(a));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=vu.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=u,me(u);return}u=t.ownerDocument||t,n=n0(n),(a=et.get(a))&&To(n,a),u=u.createElement("link"),me(u);var i=u;i._p=new Promise(function(s,o){i.onload=s,i.onerror=o}),xe(u,"link",n),l.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&!(l.state.loading&3)&&(e.count++,l=vu.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Ei=0;function ey(e,t){return e.stylesheets&&e.count===0&&Ja(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var n=setTimeout(function(){if(e.stylesheets&&Ja(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Ei===0&&(Ei=62500*Dm());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ja(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Ei?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function vu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ja(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xu=null;function Ja(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xu=new Map,t.forEach(ty,e),xu=null,vu.call(e))}function ty(e,t){if(!(t.state.loading&4)){var l=xu.get(e);if(l)var n=l.get(null);else{l=new Map,xu.set(e,l);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var i=a[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),n=i)}n&&l.set(null,n)}a=t.instance,i=a.getAttribute("data-precedence"),u=l.get(i)||n,u===n&&l.set(null,a),l.set(i,a),this.count++,n=vu.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),u?u.parentNode.insertBefore(a,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var ea={$$typeof:ht,Provider:null,Consumer:null,_currentValue:fl,_currentValue2:fl,_threadCount:0};function ly(e,t,l,n,a,u,i,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wu(0),this.hiddenUpdates=Wu(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function u0(e,t,l,n,a,u,i,s,o,r,m,g){return e=new ly(e,t,l,i,o,r,m,g,s),t=1,u===!0&&(t|=24),u=je(3,null,null,t),e.current=u,u.stateNode=e,t=$s(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:n,isDehydrated:l,cache:t},eo(u),e}function i0(e){return e?(e=Xl,e):Xl}function s0(e,t,l,n,a,u){a=i0(a),n.context===null?n.context=a:n.pendingContext=a,n=kt(t),n.payload={element:l},u=u===void 0?null:u,u!==null&&(n.callback=u),l=Zt(e,n,t),l!==null&&(Ce(l,e,t),Dn(l,e,t))}function Pc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Oo(e,t){Pc(e,t),(e=e.alternate)&&Pc(e,t)}function o0(e){if(e.tag===13||e.tag===31){var t=zl(e,67108864);t!==null&&Ce(t,e,67108864),Oo(e,67108864)}}function ef(e){if(e.tag===13||e.tag===31){var t=Qe();t=Hs(t);var l=zl(e,t);l!==null&&Ce(l,e,t),Oo(e,t)}}var Su=!0;function ny(e,t,l,n){var a=E.T;E.T=null;var u=q.p;try{q.p=2,Mo(e,t,l,n)}finally{q.p=u,E.T=a}}function ay(e,t,l,n){var a=E.T;E.T=null;var u=q.p;try{q.p=8,Mo(e,t,l,n)}finally{q.p=u,E.T=a}}function Mo(e,t,l,n){if(Su){var a=zs(n);if(a===null)Ai(e,t,n,zu,l),tf(e,n);else if(iy(a,e,t,l,n))n.stopPropagation();else if(tf(e,n),t&4&&-1<uy.indexOf(e)){for(;a!==null;){var u=fn(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=sl(u.pendingLanes);if(i!==0){var s=u;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var o=1<<31-Xe(i);s.entanglements[1]|=o,i&=~o}ct(u),!(L&6)&&(ru=He()+500,ra(0))}}break;case 31:case 13:s=zl(u,2),s!==null&&Ce(s,u,2),Xu(),Oo(u,2)}if(u=zs(n),u===null&&Ai(e,t,n,zu,l),u===a)break;a=u}a!==null&&n.stopPropagation()}else Ai(e,t,n,null,l)}}function zs(e){return e=Ls(e),Yo(e)}var zu=null;function Yo(e){if(zu=null,e=Nl(e),e!==null){var t=na(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=Mf(t),e!==null)return e;e=null}else if(l===31){if(e=Yf(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return zu=e,null}function c0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k0()){case Nf:return 2;case Df:return 8;case Ia:case Z0:return 32;case jf:return 268435456;default:return 32}default:return 32}}var As=!1,Kt=null,Wt=null,Ft=null,ta=new Map,la=new Map,Bt=[],uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tf(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":ta.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":la.delete(t.pointerId)}}function Sn(e,t,l,n,a,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:l,eventSystemFlags:n,nativeEvent:u,targetContainers:[a]},t!==null&&(t=fn(t),t!==null&&o0(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function iy(e,t,l,n,a){switch(t){case"focusin":return Kt=Sn(Kt,e,t,l,n,a),!0;case"dragenter":return Wt=Sn(Wt,e,t,l,n,a),!0;case"mouseover":return Ft=Sn(Ft,e,t,l,n,a),!0;case"pointerover":var u=a.pointerId;return ta.set(u,Sn(ta.get(u)||null,e,t,l,n,a)),!0;case"gotpointercapture":return u=a.pointerId,la.set(u,Sn(la.get(u)||null,e,t,l,n,a)),!0}return!1}function f0(e){var t=Nl(e.target);if(t!==null){var l=na(t);if(l!==null){if(t=l.tag,t===13){if(t=Mf(l),t!==null){e.blockedOn=t,Xo(e.priority,function(){ef(l)});return}}else if(t===31){if(t=Yf(l),t!==null){e.blockedOn=t,Xo(e.priority,function(){ef(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ka(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=zs(e.nativeEvent);if(l===null){l=e.nativeEvent;var n=new l.constructor(l.type,l);qi=n,l.target.dispatchEvent(n),qi=null}else return t=fn(l),t!==null&&o0(t),e.blockedOn=l,!1;t.shift()}return!0}function lf(e,t,l){Ka(e)&&l.delete(t)}function sy(){As=!1,Kt!==null&&Ka(Kt)&&(Kt=null),Wt!==null&&Ka(Wt)&&(Wt=null),Ft!==null&&Ka(Ft)&&(Ft=null),ta.forEach(lf),la.forEach(lf)}function wa(e,t){e.blockedOn===t&&(e.blockedOn=null,As||(As=!0,re.unstable_scheduleCallback(re.unstable_NormalPriority,sy)))}var Ua=null;function nf(e){Ua!==e&&(Ua=e,re.unstable_scheduleCallback(re.unstable_NormalPriority,function(){Ua===e&&(Ua=null);for(var t=0;t<e.length;t+=3){var l=e[t],n=e[t+1],a=e[t+2];if(typeof n!="function"){if(Yo(n||l)===null)continue;break}var u=fn(l);u!==null&&(e.splice(t,3),t-=3,as(u,{pending:!0,data:a,method:l.method,action:n},n,a))}}))}function sn(e){function t(o){return wa(o,e)}Kt!==null&&wa(Kt,e),Wt!==null&&wa(Wt,e),Ft!==null&&wa(Ft,e),ta.forEach(t),la.forEach(t);for(var l=0;l<Bt.length;l++){var n=Bt[l];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Bt.length&&(l=Bt[0],l.blockedOn===null);)f0(l),l.blockedOn===null&&Bt.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var a=l[n],u=l[n+1],i=a[we]||null;if(typeof u=="function")i||nf(l);else if(i){var s=null;if(u&&u.hasAttribute("formAction")){if(a=u,i=u[we]||null)s=i.formAction;else if(Yo(a)!==null)continue}else s=i.action;typeof s=="function"?l[n+1]=s:(l.splice(n,3),n-=3),nf(l)}}}function _0(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),n||setTimeout(l,20)}function l(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Co(e){this._internalRoot=e}qu.prototype.render=Co.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(p(409));var l=t.current,n=Qe();s0(l,n,e,t,null,null)};qu.prototype.unmount=Co.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;s0(e.current,2,null,e,null,null),Xu(),t[cn]=null}};function qu(e){this._internalRoot=e}qu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qf();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Bt.length&&t!==0&&t<Bt[l].priority;l++);Bt.splice(l,0,e),l===0&&f0(e)}};var af=Ef.version;if(af!=="19.2.4")throw Error(p(527,af,"19.2.4"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=H0(t),e=e!==null?Cf(e):null,e=e===null?null:e.stateNode,e};var oy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{aa=Na.inject(oy),Re=Na}catch{}}Tu.createRoot=function(e,t){if(!Of(e))throw Error(p(299));var l=!1,n="",a=lr,u=nr,i=ar;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=u0(e,1,!1,null,null,l,n,null,a,u,i,_0),e[cn]=t.current,Ao(e),new Co(t)};Tu.hydrateRoot=function(e,t,l){if(!Of(e))throw Error(p(299));var n=!1,a="",u=lr,i=nr,s=ar,o=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(o=l.formState)),t=u0(e,1,!0,t,l??null,n,a,o,u,i,s,_0),t.context=i0(null),l=t.current,n=Qe(),n=Hs(n),a=kt(n),a.callback=null,Zt(l,a,n),l=n,t.current.lanes=l,ia(t,l),ct(t),e[cn]=t.current,Ao(e),new qu(t)};Tu.version="19.2.4";function r0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r0)}catch(e){console.error(e)}}r0(),bf.exports=Tu;var cy=bf.exports,fy=`svg[fill=none] {
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
}`,_y={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",e.textContent=fy,document.head.appendChild(e))}var J=_y,ry=({size:e=24})=>b.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Oi="__agentation_freeze";function dy(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:t=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const e=window;return e[Oi]||(e[Oi]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[Oi]}var ge=dy();typeof window<"u"&&!ge.installed&&(ge.origSetTimeout=window.setTimeout.bind(window),ge.origSetInterval=window.setInterval.bind(window),ge.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,t,...l)=>typeof e=="string"?ge.origSetTimeout(e,t):ge.origSetTimeout((...n)=>{ge.frozen?ge.frozenTimeoutQueue.push(()=>e(...n)):e(...n)},t,...l),window.setInterval=(e,t,...l)=>typeof e=="string"?ge.origSetInterval(e,t):ge.origSetInterval((...n)=>{ge.frozen||e(...n)},t,...l),window.requestAnimationFrame=e=>ge.origRAF(t=>{ge.frozen?ge.frozenRAFQueue.push(e):e(t)}),ge.installed=!0);var Ol=ge.origSetTimeout;ge.origSetInterval;Q.forwardRef(function({element:t,timestamp:l,selectedText:n,placeholder:a="What should change?",initialValue:u="",submitLabel:i="Add",onSubmit:s,onCancel:o,onDelete:r,style:m,accentColor:g="#3c82f7",isExiting:_=!1,lightMode:y=!1,computedStyles:v},A){const[D,f]=Q.useState(u),[c,d]=Q.useState(!1),[h,z]=Q.useState("initial"),[Y,x]=Q.useState(!1),[T,C]=Q.useState(!1),U=Q.useRef(null),Te=Q.useRef(null),Ge=Q.useRef(null),Yt=Q.useRef(null);Q.useEffect(()=>{_&&h!=="exit"&&z("exit")},[_,h]),Q.useEffect(()=>{Ol(()=>{z("enter")},0);const w=Ol(()=>{z("entered")},200),F=Ol(()=>{const ke=U.current;ke&&(ke.focus(),ke.selectionStart=ke.selectionEnd=ke.value.length,ke.scrollTop=ke.scrollHeight)},50);return()=>{clearTimeout(w),clearTimeout(F),Ge.current&&clearTimeout(Ge.current),Yt.current&&clearTimeout(Yt.current)}},[]);const ya=Q.useCallback(()=>{Yt.current&&clearTimeout(Yt.current),d(!0),Yt.current=Ol(()=>{var w;d(!1),(w=U.current)==null||w.focus()},250)},[]);Q.useImperativeHandle(A,()=>({shake:ya}),[ya]);const nl=Q.useCallback(()=>{z("exit"),Ge.current=Ol(()=>{o()},150)},[o]),S=Q.useCallback(()=>{D.trim()&&s(D.trim())},[D,s]),j=Q.useCallback(w=>{w.nativeEvent.isComposing||(w.key==="Enter"&&!w.shiftKey&&(w.preventDefault(),S()),w.key==="Escape"&&nl())},[S,nl]),N=[J.popup,y?J.light:"",h==="enter"?J.enter:"",h==="entered"?J.entered:"",h==="exit"?J.exit:"",c?J.shake:""].filter(Boolean).join(" ");return b.jsxs("div",{ref:Te,className:N,"data-annotation-popup":!0,style:m,onClick:w=>w.stopPropagation(),children:[b.jsxs("div",{className:J.header,children:[v&&Object.keys(v).length>0?b.jsxs("button",{className:J.headerToggle,onClick:()=>{const w=T;C(!T),w&&Ol(()=>{var F;return(F=U.current)==null?void 0:F.focus()},0)},type:"button",children:[b.jsx("svg",{className:`${J.chevron} ${T?J.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),b.jsx("span",{className:J.element,children:t})]}):b.jsx("span",{className:J.element,children:t}),l&&b.jsx("span",{className:J.timestamp,children:l})]}),v&&Object.keys(v).length>0&&b.jsx("div",{className:`${J.stylesWrapper} ${T?J.expanded:""}`,children:b.jsx("div",{className:J.stylesInner,children:b.jsx("div",{className:J.stylesBlock,children:Object.entries(v).map(([w,F])=>b.jsxs("div",{className:J.styleLine,children:[b.jsx("span",{className:J.styleProperty,children:w.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",b.jsx("span",{className:J.styleValue,children:F}),";"]},w))})})}),n&&b.jsxs("div",{className:J.quote,children:["“",n.slice(0,80),n.length>80?"...":"","”"]}),b.jsx("textarea",{ref:U,className:J.textarea,style:{borderColor:Y?g:void 0},placeholder:a,value:D,onChange:w=>f(w.target.value),onFocus:()=>x(!0),onBlur:()=>x(!1),rows:2,onKeyDown:j}),b.jsxs("div",{className:J.actions,children:[r&&b.jsx("div",{className:J.deleteWrapper,children:b.jsx("button",{className:J.deleteButton,onClick:r,type:"button",children:b.jsx(ry,{size:22})})}),b.jsx("button",{className:J.cancel,onClick:nl,children:"Cancel"}),b.jsx("button",{className:J.submit,style:{backgroundColor:g,opacity:D.trim()?1:.4},onClick:S,disabled:!D.trim(),children:i})]})]})});var my=`svg[fill=none] {
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
}`;if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",e.textContent=my,document.head.appendChild(e))}const zn="underline underline-offset-2 decoration-[1px] decoration-black hover:decoration-[2px] transition-all";function yy(){return b.jsxs("header",{className:"mb-12",children:[b.jsxs("p",{className:"text-[26px] leading-relaxed text-gray-900 max-w-[671px]",children:["Lead Product Designer at"," ",b.jsx("a",{href:"https://app.layer3.xyz",target:"_blank",rel:"noopener noreferrer",className:zn,children:"Layer3"}),", currently working on"," ",b.jsx("a",{href:"http://ample.money/",target:"_blank",rel:"noopener noreferrer",className:zn,children:"Ample"})," ","to bring crypto to mass adoption, and"," ",b.jsx("a",{href:"https://apps.apple.com/sk/app/mellowsleep/id6636552824",target:"_blank",rel:"noopener noreferrer",className:zn,children:"Mellow"}),", a mobile app helping young parents with science-backed parenting techniques."]}),b.jsxs("p",{className:"mt-10 text-[26px] leading-relaxed text-gray-900 max-w-[671px]",children:["You can find me at"," ",b.jsx("a",{href:"https://x.com/goksiuta",target:"_blank",rel:"noopener noreferrer",className:zn,children:"goksiuta"})," ","posting work and design thoughts or"," ",b.jsx("a",{href:"mailto:greg@goksiuta.com",className:zn,children:"greg@goksiuta.com"})]})]})}const gy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAsQSURBVHgB7Z1tbFtXGcefc339kjjJnDZr8+KkTksHSYuSbuvKyhgJb9VWUJMJrV8mpaHwASb6JkElQJRKm5iERFoh8QXROkj7MD60KUIIBKgZA01Uok0HTYqoqNskTdelrZsXx3Gu79nzXMfXdmI71/fFjhv/pJt7j4/vtf33yXOec55zHzMoIDdv3vTMOW0dAIKPc2hjDHz4sE+p5It77QRxCwCDIF4rgNe6yhgfcoWloebm5iAUCAZ5hAQNu8R2HmX7QIAuHSLqZYjjxph8obW+aQDySF4EHpkY7ZBl1oMv1oVFDxSWIIo9IAi8v6WucRAsxjKBY63VcZjL/AgUXtRMBNCcnNzm9frBIkwXuEiEXQrZ7tOt9d5TYDKmCjx8+3YXiEJfHm2r2Zjeok0ReGRiAr2A6FkUtgMeBxgbYEw42lJXFwCDCGCQ63fvoDmIXnlsxCU476LPdG1s7AAYRHcLjvmw9hMo7BF4nGFwCm3zUdCJLoEVkyBHz+NhO6wNhphg69ZjMnIWeNHeXjSzI5uemgIzcDid4MTNIgIocmeuIucksFXivvKVPTD96BEY5cdv/RRe3rcPLCRnkUWtT7RC3Dgk7pQJrTgyPw8WQ6bxImqhWWRNXoSV4hYhcZF9Wp6sqQUvdmg+0Mn46Chcev/9tHWSJMGGjRth3bp1YJRrH3yAbSA9DY2N8Nzzz4NJKJ08elKdK83UrSjw8J0xGpkZ8hauDw/DD48eS1tnt9th7969yt4o/7g4CG+f9aet697/qpkCE+2KmwqQ1YXLaiIUR/tx93ONgNpgA8yqT0aBycbgpHUflMgOhxPZ7HFGN234zvh5GjKCTg4d/KZ6LEejMB8KpX0ew2+xtrZW2RslGAxCKMPr2NE/Fh0OtXzw9e9A29NPgykwGMTRXmf6qjSQacDPexYM0NrgVY8bGhpg9+7dUEhu3boFly5dUsu/OPNr+OKePWAaUbm7tWl5tCStiWACnIASuWET+mh+ZunDywSm2bGSv6sLX8ghLuvwlgksy/Jj6TVwzsFqGLDDS1txisCLbpkPSujFs7QVpwhcsr3GoVacXFZHchRa57L+1nv18mWY/OgjtVxdXa0eu1yujO5TviA3MPk9jfz7Pyn1JnoUnpHR0Y6WxtiSANVNuzY+fpYBPwA6+e7Bg/DXP/5JLe/cuRNWMzdu3ICHDx+q5eHxMTALFNXf0uDtpWMh8aD+QUWJVLA77Yp3dorASri9eNYwFAOesCgqE2SKDeY22z4G1rkxDhyiVlVVqeWZmRkIh8PKMdlGmqqMD5XpcaqPQ+c5koa4k5OTplzXajhTlokNxjo5ztutXKUmiiJUVFSo5bgIBAngdrtBEBIOTbIQ1EGWl5er5WSBjVzXchij2NUR4QraCnwvayU6nE98ZIdFFy0nlcF0klsOtSYcIaatp32mOoJGYMn1Zl3XjNm7lYg4bR0i58yS1uv1JmbT5ubmYGws4QaRbYyHiEiEu3fvqmKQOUg+9/79+8pm9nVHMYxlNVEQfCK+g3YawpmN1pZGUF2mVqq3Ba903Xy0YMahTcBX3QQlLAE9CZ+I9tdjxpf54rNNUOf8tFre2VapHkciTpiasqll6vnJO1DeBL6LR/VuiE92uZwuqKhMeAZTXg9EFhLrHWpqahLXnY/A1PT6xHXdleAqcy5eV4bJxihgG45dF18v2ePYWN6MERDjkeys4MSZuHjjiWFef+0ZKI9UZ3lGfdpHGbeBPfSUsjcVFoVIeRm2omiGJ9SklAJgDWSUSiM46/CZ37uVSEHz2rSluBbGoCo8tFhi4JTuaj7XtrAe/4PdyjH54B9OTmPMMP1QfX2VG+2yQ9N1H07PQigcib8l4ALZ3Nh1XRULULluLuO5G6Z/rx7Pi7XwqOxZMAPdAovRabS5/wc9MNkFNik2hyCjsDOheyBnCOk8UVEOWpmPSDA7l7wAMLFaiIkyVGY5V+9nWYmSibCYksAWo9tE5IKA5sAebkpf53DCU68cwncSs7N+vx96e3vV+nNvHYZ9Lz4DWqh77iWo37BFOaZVPs3Nzco+He+c6oavfWErWE2pBVtMSWCLscxExL0EgsllmZ+Ifhp/iDNitliP73vCBl1JJqF2vfZxEA9hEPNBbJbMhpPre3e3weziJHtgYhKG/ncL8g3DaKquWFFFeARqZv+csd45sx1WE/1/eA++8cav1HI2GxxybIZ7lV8FMyiZCIsRcMQTgBJWEbTMBif/O7ZvbYJD+01ci1s8BEjgAID5C/7I5sV5hJ3WmhSYQZAig/nvWtcIGDLCFiwIQzjh1ANFQnA68yJCl8OOM2/GbwczCwzWXBVBkgNgKx5nYsvXj2Ws++X3emH/l3bBaoFF+ZA4H40OOotI4GwtOByJwGrCJUlDwg66FbTkqlmBkhBPcdNw0vuCwFJXZq+EZKuCGWeLWnYtjIMom5P3IRs9L38uY52v7knQS/JniYj6rxMHAypKuEcR2MZhAA1yTgKH7Q3KFodCLmLEeoHP/OhbYAWTFV8GMxGYfEHZ058w2gqI5X4sYQ7BTy6mcFQEVuwwjylewjhoHtQ7PtWhMuPMj2ai4P7w365ch9O/Tdzrcfz4cdi16zPaTp4YAT71oaanUtT4XuULYAky748fqgLTXTE4dUlmoqALUW7ivO3Au/9Syz1H7MDWNWo6lytzwdoEnrfX4rTkFrCAQPwOIyLFAebAT0MJQ+Dw+GRyOUXgSESi5JiF7exYbGlpfMsF62+WXZFAy5K8lykCU2entxVTBCCw/pC66aXnpRdA+nu/uvX3vaGs69Wy/aa/HwoKh2XaLRsjK6240CM7lrRBbBG2lq3ABFq9y9PjLhNYcdkkWXeuxrXKUtsbJ21EgzJ3DN8ZG1wNGVV3bdfe0/vqaqAgMDbQ0tDgT1clZj7H1st59AoU2G37/mvmRHctJEi5hjNVZpynVFIHZmj2JRKgaciayDnrRDAZbZxpK/nGmUBtWlZIR75iVHlBkn7icNg/z4osV3A4sgDHTr8N4fkFpbyheSu82fdztf5T27aBQYZaGxtXTL+zosDkVYxMTHQXW3JQEvidv/wTIyCzSrl7fx28+YNXwSQozW23lidqihWRjcFOr7MU+VDIKYew5oUndEHKm8vB2pZM/9LU+owSnAlBZVUVyCx2e5jTYUpmbOsSNBP5EPl3712Gb//MD0Yhcc+cOwdVVU8oZYfx1OO6UoznvHQqLrLMo+et6PjmMDIct5tGiGLLJXErkxJ2GEB3knxd8Xp6oW0N3h1rwoXDz1gWWejUIy5haPHfdnRTRsbGhjAS0lfucHrstsTtsD09ieBIW5P2e4I3bdqUcu7s/DxE5dwTWjhcTnAYs7tBGmihK2bo941M+6mdpurqvnKnM23mKv7gNvD/vguaeHIzCJ/4rFocfTAJM2HLk9+nwmCQpgpWxU/tEPRG3C4X+YV0e1AAipeAkqa23ttphriEqWumMALhx60ZYnnNA1A8BLnMT6Kt3ZEuB7ARLE37IUnSAYw0nOCRkI/NPkhUJEd/bSKwzbvwq46tiuQONzB3Ii1CCL2K5Mn00Qf3wURI2NPlknTKqt/9tPRGRFEU/bjzo0Ad4HQfwGNKdeVJif4yAZjHq96IuPQbd5v/0zmxn5zE0Hpy9Ncq8nKnJ5qNQdzRRq2xS5bmulDWNgz05GcCiYb4UX6BFoTQikerWms68iJwMig22TjFzvErZz2SZGunxHjYGbRB7FYGT9I+hwurNj8Q/9lfWvtcFo0O5lPQpXwMqNZ1Y7Gza4oAAAAASUVORK5CYII=",hy="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_3508_29716'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='72'%20height='72'%3e%3crect%20width='72'%20height='72'%20rx='19.6364'%20fill='%23F9FBFD'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_3508_29716)'%3e%3crect%20x='-0.203125'%20width='72.2024'%20height='72'%20rx='19.6364'%20fill='%23199B61'/%3e%3cpath%20d='M18.3262%2034.8875C19.1522%2034.8875%2019.9392%2035.054%2020.6562%2035.3542C20.5336%2035.97%2020.4688%2036.6068%2020.4688%2037.2585C20.4688%2039.9795%2021.5909%2042.4379%2023.3955%2044.2C22.32%2045.8613%2020.4526%2046.9616%2018.3262%2046.9617C14.9919%2046.9617%2012.2891%2044.2588%2012.2891%2040.9246C12.2892%2037.5905%2014.992%2034.8875%2018.3262%2034.8875ZM30.1719%2027.5564C31.7294%2027.5564%2033.2006%2027.9256%2034.5049%2028.5779C33.809%2030.1812%2033.4229%2031.9501%2033.4229%2033.8093C33.4229%2037.6214%2035.0445%2041.0546%2037.6357%2043.4568C35.8561%2045.5978%2033.1735%2046.9616%2030.1719%2046.9617C27.5348%2046.9613%2025.1445%2045.9077%2023.3955%2044.2C24.0064%2043.2563%2024.3633%2042.1324%2024.3633%2040.9246C24.3631%2038.4165%2022.8334%2036.266%2020.6562%2035.3542C21.5417%2030.9083%2025.466%2027.557%2030.1719%2027.5564ZM46.5752%2020.657C53.8388%2020.6572%2059.7274%2026.5457%2059.7275%2033.8093C59.7275%2041.0731%2053.8389%2046.9615%2046.5752%2046.9617C43.1234%2046.9617%2039.9821%2045.632%2037.6357%2043.4568C39.0331%2041.7756%2039.874%2039.6155%2039.874%2037.2585C39.8737%2033.4579%2037.6877%2030.1696%2034.5049%2028.5779C36.5278%2023.9173%2041.1707%2020.657%2046.5752%2020.657Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",py="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_3525_29046'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='72'%20height='72'%3e%3crect%20width='72'%20height='72'%20rx='19.6364'%20fill='%23F9FBFD'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_3525_29046)'%3e%3crect%20x='-0.203125'%20width='72.2024'%20height='72'%20rx='19.6364'%20fill='black'/%3e%3cpath%20d='M17%2041.655C17%2040.7028%2017.7719%2039.9309%2018.7241%2039.9309H33.3793V54.9999H18.7241C17.7719%2054.9999%2017%2054.228%2017%2053.2758V41.655Z'%20fill='white'/%3e%3cpath%20d='M33.3789%2039.9309H53.2755C54.2277%2039.9309%2054.9996%2040.7028%2054.9996%2041.655V53.2758C54.9996%2054.228%2054.2277%2054.9999%2053.2755%2054.9999H49.1267C48.1793%2054.9999%2047.2736%2054.6101%2046.6224%2053.9221L33.3789%2039.9309Z'%20fill='white'/%3e%3cpath%20d='M17%2018.7241C17%2017.7719%2017.7719%2017%2018.7241%2017H31.6552C32.6074%2017%2033.3793%2017.7719%2033.3793%2018.7241V39.9311L17.9881%2024.26C17.3548%2023.6152%2017%2022.7476%2017%2021.8438V18.7241Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",by="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='72'%20height='72'%20fill='%235A6CFA'/%3e%3cpath%20d='M55.9971%2016.083C55.3509%2016.8041%2054.8456%2017.4047%2054.4053%2017.9902C46.1927%2028.9102%2046.3675%2043.9931%2054.8311%2054.7197C55.1835%2055.1664%2055.5764%2055.6201%2056.0439%2056.1318C55.1066%2055.2937%2054.3402%2054.6578%2053.5869%2054.1152C43.0827%2046.5503%2028.9173%2046.5503%2018.4131%2054.1152C17.6596%2054.6579%2016.8927%2055.2935%2015.9551%2056.1318C16.4229%2055.6199%2016.8164%2055.1665%2017.1689%2054.7197C25.6325%2043.9931%2025.8073%2028.9102%2017.5947%2017.9902C17.1543%2017.4046%2016.6484%2016.8043%2016.002%2016.083C16.5084%2016.544%2016.9591%2016.9328%2017.4023%2017.2812C28.3165%2025.8602%2043.6835%2025.8602%2054.5977%2017.2812C55.0408%2016.9329%2055.4909%2016.5438%2055.9971%2016.083Z'%20fill='url(%23paint0_linear_3525_29032)'%20stroke='url(%23paint1_linear_3525_29032)'%20stroke-width='0.28125'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_3525_29032'%20x1='36'%20y1='11.7422'%20x2='36'%20y2='60.2578'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_3525_29032'%20x1='36'%20y1='11.7422'%20x2='36'%20y2='48.4453'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Ts="/assets/Group%20427318942-D_-q_n6o.png",Es="/assets/Group%20427318941-D5mVX3q2.png",vy={slug:"rive-marketing-template-engine",date:"JULY 2020",isoDate:"2020-07-01",title:"How Rive Became Our Marketing Template Engine",description:"Making sure mobile device works across all different devices available on the market. Easy way.",image:Ts,blogPost:{intro:["For a long time, I had a love–hate relationship with Adobe After Effects.","I loved what it could do. The polish. The control. The cinematic results.","But I hated the workflow.","","Every small change meant re-rendering. Every new size meant duplicating compositions. Every campaign variant meant exporting the same asset 50–100 times. The results were great — but the time-to-effect was painfully high. In a high-pace startup environment, that's a serious problem.","","Eventually, I became the bottleneck.","","I was usually the only person who could handle rendering, exporting, and troubleshooting. My time was too valuable to spend pushing pixels through export queues.","Something had to change."],sections:[{image:Ts,heading:"The Shift: From Rendered Video to Interactive Systems",body:["That shift came with Rive.","What immediately stood out was its component system — something that felt very familiar coming from Figma. Instead of thinking in rendered timelines, I started thinking in reusable systems.","","In After Effects, every variant meant: duplicate comp → update text → re-render → repeat.","","In Rive, the workflow became: create a template → expose inputs → let others generate variations.","","That difference is massive. It moved us from a render-on-demand model to a self-service model. Anyone on the team could now produce a polished animation by filling in a few fields."]},{image:Es,heading:"Building the System",body:["The first template we built was a product launch animation — a looping background for social ads. It had three inputs: headline text, accent color, and logo.","","We connected it to a simple Notion table. Marketing filled in the fields. The Rive file did the rest. We went from a 3-day turnaround to under an hour.","","From there we expanded the system: announcement cards, tutorial overlays, event banners. Each one built on the same reusable component structure.","","The result is a library that compounds in value over time. Every new template makes the next one faster to build. Every input added makes the system more flexible without increasing complexity."]}]}},xy={slug:"scalable-multi-device-mobile-system",date:"JULY 2020",isoDate:"2020-07-01",title:"Creating scalable multi-device mobile system.",description:"Making sure mobile device works across all different devices available on the market. Easy way.",image:Es,blogPost:{intro:["Designing for mobile used to mean designing for one screen. Then two. Now it means designing for hundreds of device configurations — different sizes, densities, aspect ratios, and notch placements.","","The old approach was to design for the most popular device and hope the edges held. That worked when the spread was narrow. It doesn't work anymore.","","We needed a system, not a set of artboards."],sections:[{image:Es,heading:"Starting with Constraints, Not Pixels",body:["The shift started when we stopped thinking in fixed pixel dimensions and started thinking in constraints.","","Instead of: 'this card is 375px wide', we asked: 'what is this card relative to?'. The answer was almost always: relative to its container, with some minimum and maximum bounds.","","That reframe changes everything. Components become adaptive by default. Edge cases shrink because the system accounts for them structurally, not as one-off overrides.","","We built our component library on top of auto-layout in Figma, then mapped those constraints directly to SwiftUI and Jetpack Compose primitives. The design file became a near-direct translation to code."]},{image:Ts,heading:"Testing Across the Matrix",body:["Having a constraint-based system is necessary but not sufficient. You still need to validate it.","","We set up a device matrix: 6 iOS sizes × 3 Android families, covering the 90th percentile of our users. Every major screen gets tested on all of them before shipping.","","The wins were immediate. We caught a nav bar clipping issue on SE-class devices that would have affected 12% of our iOS users. We found a scroll bounce inconsistency on Android that caused layout shifts during momentum scroll.","","None of these would have surfaced in a single-device design review. The matrix made them unavoidable."]}]}},Sy="/assets/claude-code-post-pokemon-VAUFhk2w.png",zy="/assets/claude-code-post-portfolio-BZj6IPLw.png",Ay={slug:"building-with-claude-code",date:"FEB 2026",isoDate:"2026-02-01",title:"Building With Claude Code",description:"This new portfolio started from a simple idea. I wanted to build something fully on my own, from start to finish.",blogPost:{intro:["This new portfolio started from a simple idea. I wanted to build something fully on my own, from start to finish. I've been curious about Claude Code for a while, so I decided to use it for something real instead of just reading about it. No pressure. Just building."],sections:[{heading:"Starting Small and Getting Hooked",body:["As a designer, I constantly see things I want to improve. There's always a smoother animation, a cleaner layout, a better flow. So instead of overthinking, I just started. I began with a beginner Claude Code tutorial. It was helpful and surprisingly fast. Within minutes I had a script that scans the internet for the newest Pokémon cards with benchmark data. It was not perfect, but it worked. And that was enough to get excited.","","After some tweaks and styling, it turned into my local Pokémon tracker. Every day at 8 it checks for new Pokémon cards on OLX, reads the barcode from the image, and saves the offer link plus the certificate link if it finds one. The certification API part is still manual, but that's fine for now. Small steps."],image:Sy},{heading:"Building the Portfolio",body:["That early momentum pushed me to build the portfolio itself. I designed everything in Figma and used Figma MCP to translate the project. It works really well. Sometimes it misses tiny details, but it makes building locally much faster. The biggest difference showed up in the transitions. Smooth transitions. Elements morphing between pages. Things that used to feel heavy suddenly felt natural. It finally feels like the tools support the idea instead of slowing it down."]},{heading:"Tools That Made It Smoother",body:["I also connected Agentation, which works like a visual notebook. I can point at something and say fix this, and the communication becomes much clearer. Polishing is still polishing. You fix one thing and something else shifts. That's part of the process. But finishing something end to end, exactly how you imagined it, is one of the best feelings."],image:zy},{heading:"What's Next",body:["On top of that, I built a small web app for myself where I track ideas and open processes straight from the dock. Once you start building tools for yourself, it's hard to stop.","","More soon."]}]}},Os={name:"Greg Oksiuta",siteUrl:"https://goksiuta.github.io/portfolio/",avatarUrl:gy,text:"Current Lead Product Designer @ Layer3. Working on Ample, Layer3, and Mellow."},Ty=[{name:"Ample",description:"A new way to amplify your money.",icon:hy,url:"http://ample.money/"},{name:"Layer3",description:"Discover onchain finance with one app.",icon:py,url:"https://app.layer3.xyz"},{name:"Mellow",description:"Parenting coach mobile app.",icon:by,url:"https://apps.apple.com/sk/app/mellowsleep/id6636552824"}],d0=[Ay,vy,xy],Ey=()=>b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"shrink-0",children:b.jsx("path",{d:"M3 13L13 3M13 3H7M13 3V9",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})});function Oy(){return b.jsxs("section",{className:"mb-12",children:[b.jsx("h2",{className:"text-[24px] font-normal text-gray-900 mb-4 pb-4 border-b border-[#F2F2F2]",children:"Projects"}),b.jsx("div",{className:"flex flex-col gap-2",children:Ty.map(e=>b.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"block group hover:bg-[#F9FBFD] active:bg-[#F2F5F7] rounded-[20px] px-[8px] py-[8px] -mx-[8px] transition-colors",children:b.jsxs("div",{className:"flex items-center gap-8",children:[b.jsx("img",{src:e.icon,alt:`${e.name} logo`,className:"w-[64px] h-[64px] rounded-[20px] shrink-0 object-cover group-active:scale-[0.95] transition-transform"}),b.jsxs("div",{className:"flex-1",children:[b.jsx("h3",{className:"text-[18px] font-normal text-gray-900 group-hover:text-gray-600 transition-colors",children:e.name}),b.jsx("p",{className:"text-[16px] text-gray-400",children:e.description})]}),b.jsx("span",{className:"text-gray-400 shrink-0 mr-6 opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200",children:b.jsx(Ey,{})})]})},e.name))})]})}function My({onSelect:e}){return b.jsxs("section",{children:[b.jsx("h2",{className:"text-[24px] font-normal text-gray-900 mb-4 pb-4 border-b border-[#F2F2F2]",children:"Thoughts"}),b.jsx("div",{className:"flex flex-col gap-2",children:d0.map(t=>b.jsx("button",{onClick:()=>e(t),className:"block text-left w-full group hover:bg-[#F9FBFD] active:bg-[#F2F5F7] rounded-[20px] px-[8px] py-[16px] -mx-[8px] transition-colors",children:b.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 sm:gap-8",children:[b.jsx("span",{className:"text-xs font-normal tracking-wider text-gray-400 uppercase shrink-0 sm:w-[64px] sm:pt-1",children:t.date}),b.jsxs("div",{className:"w-full sm:w-[420px] shrink-0",children:[b.jsx("h3",{className:"text-[18px] font-normal text-gray-900 leading-snug group-hover:text-gray-600 transition-colors",children:t.title}),b.jsx("p",{className:"mt-2 text-[16px] text-gray-400 leading-relaxed",children:t.description})]}),t.image?b.jsx("img",{src:t.image,alt:t.title,loading:"lazy",className:"w-full sm:flex-1 h-36 bg-gray-100 rounded-xl object-cover group-active:scale-[0.95] transition-transform"}):b.jsx("div",{className:"w-full sm:flex-1 h-36 bg-gray-100 rounded-xl"})]})},t.slug))})]})}function Yy({thought:e}){const t=e.blogPost;return Q.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),b.jsx("div",{className:"bg-white",children:b.jsxs("div",{className:"max-w-[920px] mx-auto px-6 pb-24 flex flex-col items-center gap-[34px]",children:[b.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-[673px]",children:[b.jsx("p",{className:"text-[12px] font-medium tracking-[0.48px] uppercase text-[#73838a]",children:e.date}),b.jsx("h1",{className:"text-[26px] font-normal text-black leading-[1.371]",children:e.title})]}),(t==null?void 0:t.intro)&&b.jsx("div",{className:"w-full max-w-[673px] text-[20px] text-[#404245] leading-[30px]",children:t.intro.map((l,n)=>l===""?b.jsx("p",{className:"mt-[30px]"},n):b.jsx("p",{children:l},n))}),t==null?void 0:t.sections.map((l,n)=>b.jsxs("div",{className:"w-full flex flex-col items-center gap-[34px]",children:[l.image&&b.jsx("div",{className:"w-full rounded-2xl bg-[#f2f5f7] flex items-center justify-center py-12 px-6",children:b.jsx("img",{src:l.image,alt:l.heading??e.title,className:"w-full max-w-[670px] rounded-[6px]",style:{filter:"drop-shadow(0px 86px 61.6px rgba(0, 0, 0, 0.05))"}})}),(l.heading||l.body.length>0)&&b.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-[673px]",children:[l.heading&&b.jsx("h2",{className:"text-[24px] font-normal text-black leading-[1.371]",children:l.heading}),b.jsx("div",{className:"text-[20px] text-[#404245] leading-[30px]",children:l.body.map((a,u)=>a===""?b.jsx("p",{className:"mt-[30px]"},u):b.jsx("p",{children:a},u))})]})]},l.heading??n))]})})}function ie(e,t,l){let n=document.querySelector(`meta[${e}="${t}"]`);n||(n=document.createElement("meta"),n.setAttribute(e,t),document.head.appendChild(n)),n.content=l}function uf(e){let t=document.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.rel="canonical",document.head.appendChild(t)),t.href=e}function sf(e){let t=document.querySelector('script[type="application/ld+json"]');t||(t=document.createElement("script"),t.type="application/ld+json",document.head.appendChild(t)),t.textContent=JSON.stringify(e)}function Cy(e){Q.useEffect(()=>{const{name:t,siteUrl:l,text:n,avatarUrl:a}=Os,u=`${window.location.origin}${a}`;if(e){const i=`${l}${e.slug}`,s=e.image?`${window.location.origin}${e.image}`:void 0;document.title=`${e.title} — ${t}`,ie("name","description",e.description),ie("property","og:type","article"),ie("property","og:title",e.title),ie("property","og:description",e.description),ie("property","og:url",i),s&&ie("property","og:image",s),ie("name","twitter:card",s?"summary_large_image":"summary"),ie("name","twitter:title",e.title),ie("name","twitter:description",e.description),s&&ie("name","twitter:image",s),uf(i),sf({"@context":"https://schema.org","@type":"Article",headline:e.title,description:e.description,author:{"@type":"Person",name:t,url:l},url:i,...e.isoDate?{datePublished:e.isoDate}:{},...s?{image:s}:{}})}else{const i=`${t} - Product Designer`;document.title=i,ie("name","description",n),ie("property","og:type","website"),ie("property","og:title",i),ie("property","og:description",n),ie("property","og:url",l),ie("property","og:image",u),ie("name","twitter:card","summary"),ie("name","twitter:title",i),ie("name","twitter:description",n),ie("name","twitter:image",u),uf(l),sf({"@context":"https://schema.org","@type":"Person",name:t,url:l,image:u,jobTitle:"Lead Product Designer",sameAs:["https://github.com/goksiuta"]})}},[e])}const of=140,Ms="/",wy=()=>b.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{d:"M13 8H3M3 8L7 4M3 8L7 12",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})});function Mi(e,t){if("startViewTransition"in document){const l=document.startViewTransition(()=>Tf.flushSync(e));t&&l.finished.then(t)}else e(),t==null||t()}function cf(){const e=window.location.pathname.slice(Ms.length).replace(/\/$/,"");return d0.find(t=>t.slug===e)??null}function Uy(){const[e,t]=Q.useState(cf);Cy(e);const[l,n]=Q.useState(!1),a=Q.useRef(!1),u=Q.useRef(null),i=Q.useRef(null),s=Q.useRef(null);Q.useEffect(()=>{const m=e?`${Ms}${e.slug}`:Ms;window.location.pathname!==m&&window.history.pushState(null,"",m)},[e]),Q.useEffect(()=>{const m=()=>{const g=cf();g?t(g):Mi(()=>{window.scrollTo(0,0),t(null)})};return window.addEventListener("popstate",m),()=>window.removeEventListener("popstate",m)},[]),Q.useEffect(()=>{if(e){n(!1),a.current=!1;return}const m=()=>{var _;const g=window.scrollY>100;g!==a.current&&(a.current=g,i.current=((_=u.current)==null?void 0:_.getBoundingClientRect())??null,n(g))};return window.addEventListener("scroll",m,{passive:!0}),m(),()=>window.removeEventListener("scroll",m)},[e]);const o=!!e||l;Q.useLayoutEffect(()=>{const m=u.current,g=i.current;if(i.current=null,!m||!g||e)return;const _=m.getBoundingClientRect(),y=g.left-_.left,v=g.top-_.top;if(Math.abs(y)<1&&Math.abs(v)<1)return;m.style.transition="none",m.style.transform=`translate(${y}px, ${v}px)`,m.getBoundingClientRect(),m.style.transition="transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",m.style.transform="";const A=()=>{m.style.transition="",m.style.transform=""};m.addEventListener("transitionend",A,{once:!0})},[o]);const r=()=>{document.querySelectorAll("[style*='view-transition-name']").forEach(m=>{m.style.viewTransitionName="none"}),document.querySelectorAll(".blog-nav-btn").forEach(m=>{m.style.visibility="hidden"}),Mi(()=>{window.scrollTo(0,0),t(null)},()=>{var m;(m=s.current)==null||m.focus({preventScroll:!0})})};return b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:o?"fixed top-8 left-9 z-50 flex items-center gap-4":"max-w-[920px] mx-auto px-6 pt-16 pb-5 flex items-center gap-4",children:[b.jsx("img",{ref:u,src:Os.avatarUrl,alt:e?"Go back to homepage":Os.name,onClick:e?r:void 0,role:e?"button":void 0,tabIndex:e?0:void 0,onKeyDown:e?m=>m.key==="Enter"&&r():void 0,className:`w-14 h-14 rounded-2xl shrink-0 avatar-img${e?" cursor-pointer hover:opacity-80 transition-opacity":""}`}),e&&b.jsxs("button",{onClick:r,className:"flex items-center gap-[13px] text-[16px] text-black blog-nav-btn hover:shadow-md transition-shadow bg-white rounded-2xl px-3 py-2 border border-white/60 shadow-sm",children:[b.jsx(wy,{}),b.jsx("span",{children:"All Thoughts"})]})]}),e?b.jsx("div",{style:{paddingTop:of},children:b.jsx(Yy,{thought:e})}):b.jsxs("main",{ref:s,tabIndex:-1,className:"max-w-[920px] mx-auto px-6 pb-16 outline-none",style:{paddingTop:l?of:void 0},children:[b.jsx("div",{className:"fade-in-section",style:{animationDelay:"0s"},children:b.jsx(yy,{})}),b.jsx("div",{className:"fade-in-section",style:{animationDelay:"0.15s"},children:b.jsx(Oy,{})}),b.jsx("div",{id:"thoughts",className:"fade-in-section",style:{animationDelay:"0.3s"},children:b.jsx(My,{onSelect:m=>Mi(()=>t(m))})})]}),!1]})}cy.createRoot(document.getElementById("root")).render(b.jsx(Q.StrictMode,{children:b.jsx(Uy,{})}));

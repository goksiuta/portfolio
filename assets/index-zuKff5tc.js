(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const i of u.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(a){if(a.ep)return;a.ep=!0;const u=e(a);fetch(a.href,u)}})();var Po={exports:{}},Su={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var er=Symbol.for("react.transitional.element"),nr=Symbol.for("react.fragment");function l_(l,t,e){var n=null;if(e!==void 0&&(n=""+e),t.key!==void 0&&(n=""+t.key),"key"in t){e={};for(var a in t)a!=="key"&&(e[a]=t[a])}else e=t;return t=e.ref,{$$typeof:er,type:l,key:n,ref:t!==void 0?t:null,props:e}}Su.Fragment=nr;Su.jsx=l_;Su.jsxs=l_;Po.exports=Su;var A=Po.exports,t_={exports:{}},O={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ss=Symbol.for("react.transitional.element"),ar=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),ir=Symbol.for("react.strict_mode"),sr=Symbol.for("react.profiler"),cr=Symbol.for("react.consumer"),or=Symbol.for("react.context"),_r=Symbol.for("react.forward_ref"),fr=Symbol.for("react.suspense"),rr=Symbol.for("react.memo"),e_=Symbol.for("react.lazy"),dr=Symbol.for("react.activity"),zc=Symbol.iterator;function mr(l){return l===null||typeof l!="object"?null:(l=zc&&l[zc]||l["@@iterator"],typeof l=="function"?l:null)}var n_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},a_=Object.assign,u_={};function sn(l,t,e){this.props=l,this.context=t,this.refs=u_,this.updater=e||n_}sn.prototype.isReactComponent={};sn.prototype.setState=function(l,t){if(typeof l!="object"&&typeof l!="function"&&l!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,l,t,"setState")};sn.prototype.forceUpdate=function(l){this.updater.enqueueForceUpdate(this,l,"forceUpdate")};function i_(){}i_.prototype=sn.prototype;function zs(l,t,e){this.props=l,this.context=t,this.refs=u_,this.updater=e||n_}var As=zs.prototype=new i_;As.constructor=zs;a_(As,sn.prototype);As.isPureReactComponent=!0;var Ac=Array.isArray;function Ei(){}var I={H:null,A:null,T:null,S:null},s_=Object.prototype.hasOwnProperty;function Ts(l,t,e){var n=e.ref;return{$$typeof:Ss,type:l,key:t,ref:n!==void 0?n:null,props:e}}function yr(l,t){return Ts(l.type,t,l.props)}function Es(l){return typeof l=="object"&&l!==null&&l.$$typeof===Ss}function gr(l){var t={"=":"=0",":":"=2"};return"$"+l.replace(/[=:]/g,function(e){return t[e]})}var Tc=/\/+/g;function qu(l,t){return typeof l=="object"&&l!==null&&l.key!=null?gr(""+l.key):t.toString(36)}function hr(l){switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:switch(typeof l.status=="string"?l.then(Ei,Ei):(l.status="pending",l.then(function(t){l.status==="pending"&&(l.status="fulfilled",l.value=t)},function(t){l.status==="pending"&&(l.status="rejected",l.reason=t)})),l.status){case"fulfilled":return l.value;case"rejected":throw l.reason}}throw l}function Oe(l,t,e,n,a){var u=typeof l;(u==="undefined"||u==="boolean")&&(l=null);var i=!1;if(l===null)i=!0;else switch(u){case"bigint":case"string":case"number":i=!0;break;case"object":switch(l.$$typeof){case Ss:case ar:i=!0;break;case e_:return i=l._init,Oe(i(l._payload),t,e,n,a)}}if(i)return a=a(l),i=n===""?"."+qu(l,0):n,Ac(a)?(e="",i!=null&&(e=i.replace(Tc,"$&/")+"/"),Oe(a,t,e,"",function(f){return f})):a!=null&&(Es(a)&&(a=yr(a,e+(a.key==null||l&&l.key===a.key?"":(""+a.key).replace(Tc,"$&/")+"/")+i)),t.push(a)),1;i=0;var s=n===""?".":n+":";if(Ac(l))for(var c=0;c<l.length;c++)n=l[c],u=s+qu(n,c),i+=Oe(n,t,e,u,a);else if(c=mr(l),typeof c=="function")for(l=c.call(l),c=0;!(n=l.next()).done;)n=n.value,u=s+qu(n,c++),i+=Oe(n,t,e,u,a);else if(u==="object"){if(typeof l.then=="function")return Oe(hr(l),t,e,n,a);throw t=String(l),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function ga(l,t,e){if(l==null)return l;var n=[],a=0;return Oe(l,n,"","",function(u){return t.call(e,u,a++)}),n}function br(l){if(l._status===-1){var t=l._result;t=t(),t.then(function(e){(l._status===0||l._status===-1)&&(l._status=1,l._result=e)},function(e){(l._status===0||l._status===-1)&&(l._status=2,l._result=e)}),l._status===-1&&(l._status=0,l._result=t)}if(l._status===1)return l._result.default;throw l._result}var Ec=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},pr={map:ga,forEach:function(l,t,e){ga(l,function(){t.apply(this,arguments)},e)},count:function(l){var t=0;return ga(l,function(){t++}),t},toArray:function(l){return ga(l,function(t){return t})||[]},only:function(l){if(!Es(l))throw Error("React.Children.only expected to receive a single React element child.");return l}};O.Activity=dr;O.Children=pr;O.Component=sn;O.Fragment=ur;O.Profiler=sr;O.PureComponent=zs;O.StrictMode=ir;O.Suspense=fr;O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I;O.__COMPILER_RUNTIME={__proto__:null,c:function(l){return I.H.useMemoCache(l)}};O.cache=function(l){return function(){return l.apply(null,arguments)}};O.cacheSignal=function(){return null};O.cloneElement=function(l,t,e){if(l==null)throw Error("The argument must be a React element, but you passed "+l+".");var n=a_({},l.props),a=l.key;if(t!=null)for(u in t.key!==void 0&&(a=""+t.key),t)!s_.call(t,u)||u==="key"||u==="__self"||u==="__source"||u==="ref"&&t.ref===void 0||(n[u]=t[u]);var u=arguments.length-2;if(u===1)n.children=e;else if(1<u){for(var i=Array(u),s=0;s<u;s++)i[s]=arguments[s+2];n.children=i}return Ts(l.type,a,n)};O.createContext=function(l){return l={$$typeof:or,_currentValue:l,_currentValue2:l,_threadCount:0,Provider:null,Consumer:null},l.Provider=l,l.Consumer={$$typeof:cr,_context:l},l};O.createElement=function(l,t,e){var n,a={},u=null;if(t!=null)for(n in t.key!==void 0&&(u=""+t.key),t)s_.call(t,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(a[n]=t[n]);var i=arguments.length-2;if(i===1)a.children=e;else if(1<i){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+2];a.children=s}if(l&&l.defaultProps)for(n in i=l.defaultProps,i)a[n]===void 0&&(a[n]=i[n]);return Ts(l,u,a)};O.createRef=function(){return{current:null}};O.forwardRef=function(l){return{$$typeof:_r,render:l}};O.isValidElement=Es;O.lazy=function(l){return{$$typeof:e_,_payload:{_status:-1,_result:l},_init:br}};O.memo=function(l,t){return{$$typeof:rr,type:l,compare:t===void 0?null:t}};O.startTransition=function(l){var t=I.T,e={};I.T=e;try{var n=l(),a=I.S;a!==null&&a(e,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(Ei,Ec)}catch(u){Ec(u)}finally{t!==null&&e.types!==null&&(t.types=e.types),I.T=t}};O.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()};O.use=function(l){return I.H.use(l)};O.useActionState=function(l,t,e){return I.H.useActionState(l,t,e)};O.useCallback=function(l,t){return I.H.useCallback(l,t)};O.useContext=function(l){return I.H.useContext(l)};O.useDebugValue=function(){};O.useDeferredValue=function(l,t){return I.H.useDeferredValue(l,t)};O.useEffect=function(l,t){return I.H.useEffect(l,t)};O.useEffectEvent=function(l){return I.H.useEffectEvent(l)};O.useId=function(){return I.H.useId()};O.useImperativeHandle=function(l,t,e){return I.H.useImperativeHandle(l,t,e)};O.useInsertionEffect=function(l,t){return I.H.useInsertionEffect(l,t)};O.useLayoutEffect=function(l,t){return I.H.useLayoutEffect(l,t)};O.useMemo=function(l,t){return I.H.useMemo(l,t)};O.useOptimistic=function(l,t){return I.H.useOptimistic(l,t)};O.useReducer=function(l,t,e){return I.H.useReducer(l,t,e)};O.useRef=function(l){return I.H.useRef(l)};O.useState=function(l){return I.H.useState(l)};O.useSyncExternalStore=function(l,t,e){return I.H.useSyncExternalStore(l,t,e)};O.useTransition=function(){return I.H.useTransition()};O.version="19.2.4";t_.exports=O;var ul=t_.exports,c_={exports:{}},zu={},o_={exports:{}},__={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(l){function t(x,H){var N=x.length;x.push(H);l:for(;0<N;){var C=N-1>>>1,W=x[C];if(0<a(W,H))x[C]=H,x[N]=W,N=C;else break l}}function e(x){return x.length===0?null:x[0]}function n(x){if(x.length===0)return null;var H=x[0],N=x.pop();if(N!==H){x[0]=N;l:for(var C=0,W=x.length,Gl=W>>>1;C<Gl;){var ma=2*(C+1)-1,Lu=x[ma],ne=ma+1,ya=x[ne];if(0>a(Lu,N))ne<W&&0>a(ya,Lu)?(x[C]=ya,x[ne]=N,C=ne):(x[C]=Lu,x[ma]=N,C=ma);else if(ne<W&&0>a(ya,N))x[C]=ya,x[ne]=N,C=ne;else break l}}return H}function a(x,H){var N=x.sortIndex-H.sortIndex;return N!==0?N:x.id-H.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;l.unstable_now=function(){return u.now()}}else{var i=Date,s=i.now();l.unstable_now=function(){return i.now()-s}}var c=[],f=[],g=1,y=null,r=3,m=!1,p=!1,z=!1,B=!1,_=typeof setTimeout=="function"?setTimeout:null,o=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;function h(x){for(var H=e(f);H!==null;){if(H.callback===null)n(f);else if(H.startTime<=x)n(f),H.sortIndex=H.expirationTime,t(c,H);else break;H=e(f)}}function S(x){if(z=!1,h(x),!p)if(e(c)!==null)p=!0,M||(M=!0,ql());else{var H=e(f);H!==null&&ee(S,H.startTime-x)}}var M=!1,v=-1,T=5,U=-1;function D(){return B?!0:!(l.unstable_now()-U<T)}function Al(){if(B=!1,M){var x=l.unstable_now();U=x;var H=!0;try{l:{p=!1,z&&(z=!1,o(v),v=-1),m=!0;var N=r;try{t:{for(h(x),y=e(c);y!==null&&!(y.expirationTime>x&&D());){var C=y.callback;if(typeof C=="function"){y.callback=null,r=y.priorityLevel;var W=C(y.expirationTime<=x);if(x=l.unstable_now(),typeof W=="function"){y.callback=W,h(x),H=!0;break t}y===e(c)&&n(c),h(x)}else n(c);y=e(c)}if(y!==null)H=!0;else{var Gl=e(f);Gl!==null&&ee(S,Gl.startTime-x),H=!1}}break l}finally{y=null,r=N,m=!1}H=void 0}}finally{H?ql():M=!1}}}var ql;if(typeof d=="function")ql=function(){d(Al)};else if(typeof MessageChannel<"u"){var Yt=new MessageChannel,da=Yt.port2;Yt.port1.onmessage=Al,ql=function(){da.postMessage(null)}}else ql=function(){_(Al,0)};function ee(x,H){v=_(function(){x(l.unstable_now())},H)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(x){x.callback=null},l.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<x?Math.floor(1e3/x):5},l.unstable_getCurrentPriorityLevel=function(){return r},l.unstable_next=function(x){switch(r){case 1:case 2:case 3:var H=3;break;default:H=r}var N=r;r=H;try{return x()}finally{r=N}},l.unstable_requestPaint=function(){B=!0},l.unstable_runWithPriority=function(x,H){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var N=r;r=x;try{return H()}finally{r=N}},l.unstable_scheduleCallback=function(x,H,N){var C=l.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?C+N:C):N=C,x){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=N+W,x={id:g++,callback:H,priorityLevel:x,startTime:N,expirationTime:W,sortIndex:-1},N>C?(x.sortIndex=N,t(f,x),e(c)===null&&x===e(f)&&(z?(o(v),v=-1):z=!0,ee(S,N-C))):(x.sortIndex=W,t(c,x),p||m||(p=!0,M||(M=!0,ql()))),x},l.unstable_shouldYield=D,l.unstable_wrapCallback=function(x){var H=r;return function(){var N=r;r=H;try{return x.apply(this,arguments)}finally{r=N}}}})(__);o_.exports=__;var vr=o_.exports,f_={exports:{}},zl={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xr=ul;function r_(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Mt(){}var Sl={d:{f:Mt,r:function(){throw Error(r_(522))},D:Mt,C:Mt,L:Mt,m:Mt,X:Mt,S:Mt,M:Mt},p:0,findDOMNode:null},Sr=Symbol.for("react.portal");function zr(l,t,e){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:n==null?null:""+n,children:l,containerInfo:t,implementation:e}}var On=xr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Au(l,t){if(l==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}zl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Sl;zl.createPortal=function(l,t){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r_(299));return zr(l,t,null,e)};zl.flushSync=function(l){var t=On.T,e=Sl.p;try{if(On.T=null,Sl.p=2,l)return l()}finally{On.T=t,Sl.p=e,Sl.d.f()}};zl.preconnect=function(l,t){typeof l=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Sl.d.C(l,t))};zl.prefetchDNS=function(l){typeof l=="string"&&Sl.d.D(l)};zl.preinit=function(l,t){if(typeof l=="string"&&t&&typeof t.as=="string"){var e=t.as,n=Au(e,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,u=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;e==="style"?Sl.d.S(l,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:n,integrity:a,fetchPriority:u}):e==="script"&&Sl.d.X(l,{crossOrigin:n,integrity:a,fetchPriority:u,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};zl.preinitModule=function(l,t){if(typeof l=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var e=Au(t.as,t.crossOrigin);Sl.d.M(l,{crossOrigin:e,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Sl.d.M(l)};zl.preload=function(l,t){if(typeof l=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var e=t.as,n=Au(e,t.crossOrigin);Sl.d.L(l,e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};zl.preloadModule=function(l,t){if(typeof l=="string")if(t){var e=Au(t.as,t.crossOrigin);Sl.d.m(l,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:e,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Sl.d.m(l)};zl.requestFormReset=function(l){Sl.d.r(l)};zl.unstable_batchedUpdates=function(l,t){return l(t)};zl.useFormState=function(l,t,e){return On.H.useFormState(l,t,e)};zl.useFormStatus=function(){return On.H.useHostTransitionStatus()};zl.version="19.2.4";function d_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d_)}catch(l){console.error(l)}}d_(),f_.exports=zl;var Ar=f_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fl=vr,m_=ul,Tr=Ar;function b(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y_(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function ta(l){var t=l,e=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,t.flags&4098&&(e=t.return),l=t.return;while(l)}return t.tag===3?e:null}function g_(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function h_(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function Oc(l){if(ta(l)!==l)throw Error(b(188))}function Er(l){var t=l.alternate;if(!t){if(t=ta(l),t===null)throw Error(b(188));return t!==l?null:l}for(var e=l,n=t;;){var a=e.return;if(a===null)break;var u=a.alternate;if(u===null){if(n=a.return,n!==null){e=n;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===e)return Oc(a),l;if(u===n)return Oc(a),t;u=u.sibling}throw Error(b(188))}if(e.return!==n.return)e=a,n=u;else{for(var i=!1,s=a.child;s;){if(s===e){i=!0,e=a,n=u;break}if(s===n){i=!0,n=a,e=u;break}s=s.sibling}if(!i){for(s=u.child;s;){if(s===e){i=!0,e=u,n=a;break}if(s===n){i=!0,n=u,e=a;break}s=s.sibling}if(!i)throw Error(b(189))}}if(e.alternate!==n)throw Error(b(190))}if(e.tag!==3)throw Error(b(188));return e.stateNode.current===e?l:t}function b_(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=b_(l),t!==null)return t;l=l.sibling}return null}var P=Object.assign,Or=Symbol.for("react.element"),ha=Symbol.for("react.transitional.element"),Sn=Symbol.for("react.portal"),Ue=Symbol.for("react.fragment"),p_=Symbol.for("react.strict_mode"),Oi=Symbol.for("react.profiler"),v_=Symbol.for("react.consumer"),gt=Symbol.for("react.context"),Os=Symbol.for("react.forward_ref"),Yi=Symbol.for("react.suspense"),Mi=Symbol.for("react.suspense_list"),Ys=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),Ui=Symbol.for("react.activity"),Yr=Symbol.for("react.memo_cache_sentinel"),Yc=Symbol.iterator;function yn(l){return l===null||typeof l!="object"?null:(l=Yc&&l[Yc]||l["@@iterator"],typeof l=="function"?l:null)}var Mr=Symbol.for("react.client.reference");function Ci(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Mr?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case Ue:return"Fragment";case Oi:return"Profiler";case p_:return"StrictMode";case Yi:return"Suspense";case Mi:return"SuspenseList";case Ui:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case Sn:return"Portal";case gt:return l.displayName||"Context";case v_:return(l._context.displayName||"Context")+".Consumer";case Os:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case Ys:return t=l.displayName||null,t!==null?t:Ci(l.type)||"Memo";case Ut:t=l._payload,l=l._init;try{return Ci(l(t))}catch{}}return null}var zn=Array.isArray,E=m_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=Tr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},Di=[],Ce=-1;function st(l){return{current:l}}function ml(l){0>Ce||(l.current=Di[Ce],Di[Ce]=null,Ce--)}function K(l,t){Ce++,Di[Ce]=l.current,l.current=t}var it=st(null),Ln=st(null),Lt=st(null),Ja=st(null);function Ka(l,t){switch(K(Lt,t),K(Ln,l),K(it,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Ho(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Ho(t),l=L0(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}ml(it),K(it,l)}function We(){ml(it),ml(Ln),ml(Lt)}function Ni(l){l.memoizedState!==null&&K(Ja,l);var t=it.current,e=L0(t,l.type);t!==e&&(K(Ln,l),K(it,e))}function Wa(l){Ln.current===l&&(ml(it),ml(Ln)),Ja.current===l&&(ml(Ja),In._currentValue=oe)}var Gu,Mc;function ue(l){if(Gu===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Gu=t&&t[1]||"",Mc=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gu+l+Mc}var Zu=!1;function Vu(l,t){if(!l||Zu)return"";Zu=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var y=function(){throw Error()};if(Object.defineProperty(y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(y,[])}catch(m){var r=m}Reflect.construct(l,[],y)}else{try{y.call()}catch(m){r=m}l.call(y.prototype)}}else{try{throw Error()}catch(m){r=m}(y=l())&&typeof y.catch=="function"&&y.catch(function(){})}}catch(m){if(m&&r&&typeof m.stack=="string")return[m.stack,r.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),i=u[0],s=u[1];if(i&&s){var c=i.split(`
`),f=s.split(`
`);for(a=n=0;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;for(;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;if(n===c.length||a===f.length)for(n=c.length-1,a=f.length-1;1<=n&&0<=a&&c[n]!==f[a];)a--;for(;1<=n&&0<=a;n--,a--)if(c[n]!==f[a]){if(n!==1||a!==1)do if(n--,a--,0>a||c[n]!==f[a]){var g=`
`+c[n].replace(" at new "," at ");return l.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",l.displayName)),g}while(1<=n&&0<=a);break}}}finally{Zu=!1,Error.prepareStackTrace=e}return(e=l?l.displayName||l.name:"")?ue(e):""}function Ur(l,t){switch(l.tag){case 26:case 27:case 5:return ue(l.type);case 16:return ue("Lazy");case 13:return l.child!==t&&t!==null?ue("Suspense Fallback"):ue("Suspense");case 19:return ue("SuspenseList");case 0:case 15:return Vu(l.type,!1);case 11:return Vu(l.type.render,!1);case 1:return Vu(l.type,!0);case 31:return ue("Activity");default:return""}}function Uc(l){try{var t="",e=null;do t+=Ur(l,e),e=l,l=l.return;while(l);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Bi=Object.prototype.hasOwnProperty,Ms=fl.unstable_scheduleCallback,ku=fl.unstable_cancelCallback,Cr=fl.unstable_shouldYield,Dr=fl.unstable_requestPaint,jl=fl.unstable_now,Nr=fl.unstable_getCurrentPriorityLevel,x_=fl.unstable_ImmediatePriority,S_=fl.unstable_UserBlockingPriority,Fa=fl.unstable_NormalPriority,Br=fl.unstable_LowPriority,z_=fl.unstable_IdlePriority,Hr=fl.log,jr=fl.unstable_setDisableYieldValue,ea=null,Xl=null;function jt(l){if(typeof Hr=="function"&&jr(l),Xl&&typeof Xl.setStrictMode=="function")try{Xl.setStrictMode(ea,l)}catch{}}var Rl=Math.clz32?Math.clz32:Qr,Xr=Math.log,Rr=Math.LN2;function Qr(l){return l>>>=0,l===0?32:31-(Xr(l)/Rr|0)|0}var ba=256,pa=262144,va=4194304;function ie(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function Tu(l,t,e){var n=l.pendingLanes;if(n===0)return 0;var a=0,u=l.suspendedLanes,i=l.pingedLanes;l=l.warmLanes;var s=n&134217727;return s!==0?(n=s&~u,n!==0?a=ie(n):(i&=s,i!==0?a=ie(i):e||(e=s&~l,e!==0&&(a=ie(e))))):(s=n&~u,s!==0?a=ie(s):i!==0?a=ie(i):e||(e=n&~l,e!==0&&(a=ie(e)))),a===0?0:t!==0&&t!==a&&!(t&u)&&(u=a&-a,e=t&-t,u>=e||u===32&&(e&4194048)!==0)?t:a}function na(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function wr(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A_(){var l=va;return va<<=1,!(va&62914560)&&(va=4194304),l}function Ju(l){for(var t=[],e=0;31>e;e++)t.push(l);return t}function aa(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function Lr(l,t,e,n,a,u){var i=l.pendingLanes;l.pendingLanes=e,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=e,l.entangledLanes&=e,l.errorRecoveryDisabledLanes&=e,l.shellSuspendCounter=0;var s=l.entanglements,c=l.expirationTimes,f=l.hiddenUpdates;for(e=i&~e;0<e;){var g=31-Rl(e),y=1<<g;s[g]=0,c[g]=-1;var r=f[g];if(r!==null)for(f[g]=null,g=0;g<r.length;g++){var m=r[g];m!==null&&(m.lane&=-536870913)}e&=~y}n!==0&&T_(l,n,0),u!==0&&a===0&&l.tag!==0&&(l.suspendedLanes|=u&~(i&~t))}function T_(l,t,e){l.pendingLanes|=t,l.suspendedLanes&=~t;var n=31-Rl(t);l.entangledLanes|=t,l.entanglements[n]=l.entanglements[n]|1073741824|e&261930}function E_(l,t){var e=l.entangledLanes|=t;for(l=l.entanglements;e;){var n=31-Rl(e),a=1<<n;a&t|l[n]&t&&(l[n]|=t),e&=~a}}function O_(l,t){var e=t&-t;return e=e&42?1:Us(e),e&(l.suspendedLanes|t)?0:e}function Us(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Cs(l){return l&=-l,2<l?8<l?l&134217727?32:268435456:8:2}function Y_(){var l=L.p;return l!==0?l:(l=window.event,l===void 0?32:I0(l.type))}function Cc(l,t){var e=L.p;try{return L.p=l,t()}finally{L.p=e}}var le=Math.random().toString(36).slice(2),hl="__reactFiber$"+le,Ul="__reactProps$"+le,cn="__reactContainer$"+le,Hi="__reactEvents$"+le,qr="__reactListeners$"+le,Gr="__reactHandles$"+le,Dc="__reactResources$"+le,ua="__reactMarker$"+le;function Ds(l){delete l[hl],delete l[Ul],delete l[Hi],delete l[qr],delete l[Gr]}function De(l){var t=l[hl];if(t)return t;for(var e=l.parentNode;e;){if(t=e[cn]||e[hl]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(l=wo(l);l!==null;){if(e=l[hl])return e;l=wo(l)}return t}l=e,e=l.parentNode}return null}function on(l){if(l=l[hl]||l[cn]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function An(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(b(33))}function qe(l){var t=l[Dc];return t||(t=l[Dc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function dl(l){l[ua]=!0}var M_=new Set,U_={};function pe(l,t){Fe(l,t),Fe(l+"Capture",t)}function Fe(l,t){for(U_[l]=t,l=0;l<t.length;l++)M_.add(t[l])}var Zr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nc={},Bc={};function Vr(l){return Bi.call(Bc,l)?!0:Bi.call(Nc,l)?!1:Zr.test(l)?Bc[l]=!0:(Nc[l]=!0,!1)}function Da(l,t,e){if(Vr(t))if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+e)}}function xa(l,t,e){if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+e)}}function ot(l,t,e,n){if(n===null)l.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(e);return}l.setAttributeNS(t,e,""+n)}}function Vl(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function C_(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kr(l,t,e){var n=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){e=""+i,u.call(this,i)}}),Object.defineProperty(l,t,{enumerable:n.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function ji(l){if(!l._valueTracker){var t=C_(l)?"checked":"value";l._valueTracker=kr(l,t,""+l[t])}}function D_(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var e=t.getValue(),n="";return l&&(n=C_(l)?l.checked?"true":"false":l.value),l=n,l!==e?(t.setValue(l),!0):!1}function $a(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var Jr=/[\n"\\]/g;function Kl(l){return l.replace(Jr,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Xi(l,t,e,n,a,u,i,s){l.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?l.type=i:l.removeAttribute("type"),t!=null?i==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+Vl(t)):l.value!==""+Vl(t)&&(l.value=""+Vl(t)):i!=="submit"&&i!=="reset"||l.removeAttribute("value"),t!=null?Ri(l,i,Vl(t)):e!=null?Ri(l,i,Vl(e)):n!=null&&l.removeAttribute("value"),a==null&&u!=null&&(l.defaultChecked=!!u),a!=null&&(l.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?l.name=""+Vl(s):l.removeAttribute("name")}function N_(l,t,e,n,a,u,i,s){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(l.type=u),t!=null||e!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){ji(l);return}e=e!=null?""+Vl(e):"",t=t!=null?""+Vl(t):e,s||t===l.value||(l.value=t),l.defaultValue=t}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,l.checked=s?l.checked:!!n,l.defaultChecked=!!n,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.name=i),ji(l)}function Ri(l,t,e){t==="number"&&$a(l.ownerDocument)===l||l.defaultValue===""+e||(l.defaultValue=""+e)}function Ge(l,t,e,n){if(l=l.options,t){t={};for(var a=0;a<e.length;a++)t["$"+e[a]]=!0;for(e=0;e<l.length;e++)a=t.hasOwnProperty("$"+l[e].value),l[e].selected!==a&&(l[e].selected=a),a&&n&&(l[e].defaultSelected=!0)}else{for(e=""+Vl(e),t=null,a=0;a<l.length;a++){if(l[a].value===e){l[a].selected=!0,n&&(l[a].defaultSelected=!0);return}t!==null||l[a].disabled||(t=l[a])}t!==null&&(t.selected=!0)}}function B_(l,t,e){if(t!=null&&(t=""+Vl(t),t!==l.value&&(l.value=t),e==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=e!=null?""+Vl(e):""}function H_(l,t,e,n){if(t==null){if(n!=null){if(e!=null)throw Error(b(92));if(zn(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),t=e}e=Vl(t),l.defaultValue=e,n=l.textContent,n===e&&n!==""&&n!==null&&(l.value=n),ji(l)}function $e(l,t){if(t){var e=l.firstChild;if(e&&e===l.lastChild&&e.nodeType===3){e.nodeValue=t;return}}l.textContent=t}var Kr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hc(l,t,e){var n=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?n?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":n?l.setProperty(t,e):typeof e!="number"||e===0||Kr.has(t)?t==="float"?l.cssFloat=e:l[t]=(""+e).trim():l[t]=e+"px"}function j_(l,t,e){if(t!=null&&typeof t!="object")throw Error(b(62));if(l=l.style,e!=null){for(var n in e)!e.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?l.setProperty(n,""):n==="float"?l.cssFloat="":l[n]="");for(var a in t)n=t[a],t.hasOwnProperty(a)&&e[a]!==n&&Hc(l,a,n)}else for(var u in t)t.hasOwnProperty(u)&&Hc(l,u,t[u])}function Ns(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Na(l){return Fr.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function ht(){}var Qi=null;function Bs(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Ne=null,Ze=null;function jc(l){var t=on(l);if(t&&(l=t.stateNode)){var e=l[Ul]||null;l:switch(l=t.stateNode,t.type){case"input":if(Xi(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=l;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Kl(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var n=e[t];if(n!==l&&n.form===l.form){var a=n[Ul]||null;if(!a)throw Error(b(90));Xi(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<e.length;t++)n=e[t],n.form===l.form&&D_(n)}break l;case"textarea":B_(l,e.value,e.defaultValue);break l;case"select":t=e.value,t!=null&&Ge(l,!!e.multiple,t,!1)}}}var Ku=!1;function X_(l,t,e){if(Ku)return l(t,e);Ku=!0;try{var n=l(t);return n}finally{if(Ku=!1,(Ne!==null||Ze!==null)&&(Xu(),Ne&&(t=Ne,l=Ze,Ze=Ne=null,jc(t),l)))for(t=0;t<l.length;t++)jc(l[t])}}function qn(l,t){var e=l.stateNode;if(e===null)return null;var n=e[Ul]||null;if(n===null)return null;e=n[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(l=l.type,n=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!n;break l;default:l=!1}if(l)return null;if(e&&typeof e!="function")throw Error(b(231,t,typeof e));return e}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wi=!1;if(St)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){wi=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{wi=!1}var Xt=null,Hs=null,Ba=null;function R_(){if(Ba)return Ba;var l,t=Hs,e=t.length,n,a="value"in Xt?Xt.value:Xt.textContent,u=a.length;for(l=0;l<e&&t[l]===a[l];l++);var i=e-l;for(n=1;n<=i&&t[e-n]===a[u-n];n++);return Ba=a.slice(l,1<n?1-n:void 0)}function Ha(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Sa(){return!0}function Xc(){return!1}function Cl(l){function t(e,n,a,u,i){this._reactName=e,this._targetInst=a,this.type=n,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var s in l)l.hasOwnProperty(s)&&(e=l[s],this[s]=e?e(u):u[s]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Sa:Xc,this.isPropagationStopped=Xc,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),t}var ve={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eu=Cl(ve),ia=P({},ve,{view:0,detail:0}),$r=Cl(ia),Wu,Fu,hn,Ou=P({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:js,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==hn&&(hn&&l.type==="mousemove"?(Wu=l.screenX-hn.screenX,Fu=l.screenY-hn.screenY):Fu=Wu=0,hn=l),Wu)},movementY:function(l){return"movementY"in l?l.movementY:Fu}}),Rc=Cl(Ou),Ir=P({},Ou,{dataTransfer:0}),Pr=Cl(Ir),ld=P({},ia,{relatedTarget:0}),$u=Cl(ld),td=P({},ve,{animationName:0,elapsedTime:0,pseudoElement:0}),ed=Cl(td),nd=P({},ve,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),ad=Cl(nd),ud=P({},ve,{data:0}),Qc=Cl(ud),id={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function od(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=cd[l])?!!t[l]:!1}function js(){return od}var _d=P({},ia,{key:function(l){if(l.key){var t=id[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Ha(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?sd[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:js,charCode:function(l){return l.type==="keypress"?Ha(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Ha(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),fd=Cl(_d),rd=P({},Ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=Cl(rd),dd=P({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:js}),md=Cl(dd),yd=P({},ve,{propertyName:0,elapsedTime:0,pseudoElement:0}),gd=Cl(yd),hd=P({},Ou,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),bd=Cl(hd),pd=P({},ve,{newState:0,oldState:0}),vd=Cl(pd),xd=[9,13,27,32],Xs=St&&"CompositionEvent"in window,Yn=null;St&&"documentMode"in document&&(Yn=document.documentMode);var Sd=St&&"TextEvent"in window&&!Yn,Q_=St&&(!Xs||Yn&&8<Yn&&11>=Yn),Lc=" ",qc=!1;function w_(l,t){switch(l){case"keyup":return xd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L_(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Be=!1;function zd(l,t){switch(l){case"compositionend":return L_(t);case"keypress":return t.which!==32?null:(qc=!0,Lc);case"textInput":return l=t.data,l===Lc&&qc?null:l;default:return null}}function Ad(l,t){if(Be)return l==="compositionend"||!Xs&&w_(l,t)?(l=R_(),Ba=Hs=Xt=null,Be=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Q_&&t.locale!=="ko"?null:t.data;default:return null}}var Td={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gc(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!Td[l.type]:t==="textarea"}function q_(l,t,e,n){Ne?Ze?Ze.push(n):Ze=[n]:Ne=n,t=yu(t,"onChange"),0<t.length&&(e=new Eu("onChange","change",null,e,n),l.push({event:e,listeners:t}))}var Mn=null,Gn=null;function Ed(l){R0(l,0)}function Yu(l){var t=An(l);if(D_(t))return l}function Zc(l,t){if(l==="change")return t}var G_=!1;if(St){var Iu;if(St){var Pu="oninput"in document;if(!Pu){var Vc=document.createElement("div");Vc.setAttribute("oninput","return;"),Pu=typeof Vc.oninput=="function"}Iu=Pu}else Iu=!1;G_=Iu&&(!document.documentMode||9<document.documentMode)}function kc(){Mn&&(Mn.detachEvent("onpropertychange",Z_),Gn=Mn=null)}function Z_(l){if(l.propertyName==="value"&&Yu(Gn)){var t=[];q_(t,Gn,l,Bs(l)),X_(Ed,t)}}function Od(l,t,e){l==="focusin"?(kc(),Mn=t,Gn=e,Mn.attachEvent("onpropertychange",Z_)):l==="focusout"&&kc()}function Yd(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return Yu(Gn)}function Md(l,t){if(l==="click")return Yu(t)}function Ud(l,t){if(l==="input"||l==="change")return Yu(t)}function Cd(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var wl=typeof Object.is=="function"?Object.is:Cd;function Zn(l,t){if(wl(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var e=Object.keys(l),n=Object.keys(t);if(e.length!==n.length)return!1;for(n=0;n<e.length;n++){var a=e[n];if(!Bi.call(t,a)||!wl(l[a],t[a]))return!1}return!0}function Jc(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function Kc(l,t){var e=Jc(l);l=0;for(var n;e;){if(e.nodeType===3){if(n=l+e.textContent.length,l<=t&&n>=t)return{node:e,offset:t-l};l=n}l:{for(;e;){if(e.nextSibling){e=e.nextSibling;break l}e=e.parentNode}e=void 0}e=Jc(e)}}function V_(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?V_(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function k_(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=$a(l.document);t instanceof l.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)l=t.contentWindow;else break;t=$a(l.document)}return t}function Rs(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var Dd=St&&"documentMode"in document&&11>=document.documentMode,He=null,Li=null,Un=null,qi=!1;function Wc(l,t,e){var n=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;qi||He==null||He!==$a(n)||(n=He,"selectionStart"in n&&Rs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Un&&Zn(Un,n)||(Un=n,n=yu(Li,"onSelect"),0<n.length&&(t=new Eu("onSelect","select",null,t,e),l.push({event:t,listeners:n}),t.target=He)))}function ae(l,t){var e={};return e[l.toLowerCase()]=t.toLowerCase(),e["Webkit"+l]="webkit"+t,e["Moz"+l]="moz"+t,e}var je={animationend:ae("Animation","AnimationEnd"),animationiteration:ae("Animation","AnimationIteration"),animationstart:ae("Animation","AnimationStart"),transitionrun:ae("Transition","TransitionRun"),transitionstart:ae("Transition","TransitionStart"),transitioncancel:ae("Transition","TransitionCancel"),transitionend:ae("Transition","TransitionEnd")},li={},J_={};St&&(J_=document.createElement("div").style,"AnimationEvent"in window||(delete je.animationend.animation,delete je.animationiteration.animation,delete je.animationstart.animation),"TransitionEvent"in window||delete je.transitionend.transition);function xe(l){if(li[l])return li[l];if(!je[l])return l;var t=je[l],e;for(e in t)if(t.hasOwnProperty(e)&&e in J_)return li[l]=t[e];return l}var K_=xe("animationend"),W_=xe("animationiteration"),F_=xe("animationstart"),Nd=xe("transitionrun"),Bd=xe("transitionstart"),Hd=xe("transitioncancel"),$_=xe("transitionend"),I_=new Map,Gi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gi.push("scrollEnd");function et(l,t){I_.set(l,t),pe(t,[l])}var Ia=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},Zl=[],Xe=0,Qs=0;function Mu(){for(var l=Xe,t=Qs=Xe=0;t<l;){var e=Zl[t];Zl[t++]=null;var n=Zl[t];Zl[t++]=null;var a=Zl[t];Zl[t++]=null;var u=Zl[t];if(Zl[t++]=null,n!==null&&a!==null){var i=n.pending;i===null?a.next=a:(a.next=i.next,i.next=a),n.pending=a}u!==0&&P_(e,a,u)}}function Uu(l,t,e,n){Zl[Xe++]=l,Zl[Xe++]=t,Zl[Xe++]=e,Zl[Xe++]=n,Qs|=n,l.lanes|=n,l=l.alternate,l!==null&&(l.lanes|=n)}function ws(l,t,e,n){return Uu(l,t,e,n),Pa(l)}function Se(l,t){return Uu(l,null,null,t),Pa(l)}function P_(l,t,e){l.lanes|=e;var n=l.alternate;n!==null&&(n.lanes|=e);for(var a=!1,u=l.return;u!==null;)u.childLanes|=e,n=u.alternate,n!==null&&(n.childLanes|=e),u.tag===22&&(l=u.stateNode,l===null||l._visibility&1||(a=!0)),l=u,u=u.return;return l.tag===3?(u=l.stateNode,a&&t!==null&&(a=31-Rl(e),l=u.hiddenUpdates,n=l[a],n===null?l[a]=[t]:n.push(t),t.lane=e|536870912),u):null}function Pa(l){if(50<Qn)throw Qn=0,_s=null,Error(b(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var Re={};function jd(l,t,e,n){this.tag=l,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bl(l,t,e,n){return new jd(l,t,e,n)}function Ls(l){return l=l.prototype,!(!l||!l.isReactComponent)}function pt(l,t){var e=l.alternate;return e===null?(e=Bl(l.tag,t,l.key,l.mode),e.elementType=l.elementType,e.type=l.type,e.stateNode=l.stateNode,e.alternate=l,l.alternate=e):(e.pendingProps=t,e.type=l.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=l.flags&65011712,e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=l.sibling,e.index=l.index,e.ref=l.ref,e.refCleanup=l.refCleanup,e}function lf(l,t){l.flags&=65011714;var e=l.alternate;return e===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,l.type=e.type,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function ja(l,t,e,n,a,u){var i=0;if(n=l,typeof l=="function")Ls(l)&&(i=1);else if(typeof l=="string")i=Lm(l,e,it.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case Ui:return l=Bl(31,e,t,a),l.elementType=Ui,l.lanes=u,l;case Ue:return _e(e.children,a,u,t);case p_:i=8,a|=24;break;case Oi:return l=Bl(12,e,t,a|2),l.elementType=Oi,l.lanes=u,l;case Yi:return l=Bl(13,e,t,a),l.elementType=Yi,l.lanes=u,l;case Mi:return l=Bl(19,e,t,a),l.elementType=Mi,l.lanes=u,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case gt:i=10;break l;case v_:i=9;break l;case Os:i=11;break l;case Ys:i=14;break l;case Ut:i=16,n=null;break l}i=29,e=Error(b(130,l===null?"null":typeof l,"")),n=null}return t=Bl(i,e,t,a),t.elementType=l,t.type=n,t.lanes=u,t}function _e(l,t,e,n){return l=Bl(7,l,n,t),l.lanes=e,l}function ti(l,t,e){return l=Bl(6,l,null,t),l.lanes=e,l}function tf(l){var t=Bl(18,null,null,0);return t.stateNode=l,t}function ei(l,t,e){return t=Bl(4,l.children!==null?l.children:[],l.key,t),t.lanes=e,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var Fc=new WeakMap;function Wl(l,t){if(typeof l=="object"&&l!==null){var e=Fc.get(l);return e!==void 0?e:(t={value:l,source:t,stack:Uc(t)},Fc.set(l,t),t)}return{value:l,source:t,stack:Uc(t)}}var Qe=[],we=0,lu=null,Vn=0,kl=[],Jl=0,Ft=null,nt=1,at="";function mt(l,t){Qe[we++]=Vn,Qe[we++]=lu,lu=l,Vn=t}function ef(l,t,e){kl[Jl++]=nt,kl[Jl++]=at,kl[Jl++]=Ft,Ft=l;var n=nt;l=at;var a=32-Rl(n)-1;n&=~(1<<a),e+=1;var u=32-Rl(t)+a;if(30<u){var i=a-a%5;u=(n&(1<<i)-1).toString(32),n>>=i,a-=i,nt=1<<32-Rl(t)+a|e<<a|n,at=u+l}else nt=1<<u|e<<a|n,at=l}function qs(l){l.return!==null&&(mt(l,1),ef(l,1,0))}function Gs(l){for(;l===lu;)lu=Qe[--we],Qe[we]=null,Vn=Qe[--we],Qe[we]=null;for(;l===Ft;)Ft=kl[--Jl],kl[Jl]=null,at=kl[--Jl],kl[Jl]=null,nt=kl[--Jl],kl[Jl]=null}function nf(l,t){kl[Jl++]=nt,kl[Jl++]=at,kl[Jl++]=Ft,nt=t.id,at=t.overflow,Ft=l}var bl=null,$=null,Q=!1,qt=null,Fl=!1,Zi=Error(b(519));function $t(l){var t=Error(b(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw kn(Wl(t,l)),Zi}function $c(l){var t=l.stateNode,e=l.type,n=l.memoizedProps;switch(t[hl]=l,t[Ul]=n,e){case"dialog":j("cancel",t),j("close",t);break;case"iframe":case"object":case"embed":j("load",t);break;case"video":case"audio":for(e=0;e<Fn.length;e++)j(Fn[e],t);break;case"source":j("error",t);break;case"img":case"image":case"link":j("error",t),j("load",t);break;case"details":j("toggle",t);break;case"input":j("invalid",t),N_(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":j("invalid",t);break;case"textarea":j("invalid",t),H_(t,n.value,n.defaultValue,n.children)}e=n.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||n.suppressHydrationWarning===!0||w0(t.textContent,e)?(n.popover!=null&&(j("beforetoggle",t),j("toggle",t)),n.onScroll!=null&&j("scroll",t),n.onScrollEnd!=null&&j("scrollend",t),n.onClick!=null&&(t.onclick=ht),t=!0):t=!1,t||$t(l,!0)}function Ic(l){for(bl=l.return;bl;)switch(bl.tag){case 5:case 31:case 13:Fl=!1;return;case 27:case 3:Fl=!0;return;default:bl=bl.return}}function Ae(l){if(l!==bl)return!1;if(!Q)return Ic(l),Q=!0,!1;var t=l.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=l.type,e=!(e!=="form"&&e!=="button")||ys(l.type,l.memoizedProps)),e=!e),e&&$&&$t(l),Ic(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(b(317));$=Qo(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(b(317));$=Qo(l)}else t===27?(t=$,te(l.type)?(l=ps,ps=null,$=l):$=t):$=bl?Il(l.stateNode.nextSibling):null;return!0}function me(){$=bl=null,Q=!1}function ni(){var l=qt;return l!==null&&(Yl===null?Yl=l:Yl.push.apply(Yl,l),qt=null),l}function kn(l){qt===null?qt=[l]:qt.push(l)}var Vi=st(null),ze=null,bt=null;function Dt(l,t,e){K(Vi,t._currentValue),t._currentValue=e}function vt(l){l._currentValue=Vi.current,ml(Vi)}function ki(l,t,e){for(;l!==null;){var n=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),l===e)break;l=l.return}}function Ji(l,t,e,n){var a=l.child;for(a!==null&&(a.return=l);a!==null;){var u=a.dependencies;if(u!==null){var i=a.child;u=u.firstContext;l:for(;u!==null;){var s=u;u=a;for(var c=0;c<t.length;c++)if(s.context===t[c]){u.lanes|=e,s=u.alternate,s!==null&&(s.lanes|=e),ki(u.return,e,l),n||(i=null);break l}u=s.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(b(341));i.lanes|=e,u=i.alternate,u!==null&&(u.lanes|=e),ki(i,e,l),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===l){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function _n(l,t,e,n){l=null;for(var a=t,u=!1;a!==null;){if(!u){if(a.flags&524288)u=!0;else if(a.flags&262144)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(b(387));if(i=i.memoizedProps,i!==null){var s=a.type;wl(a.pendingProps.value,i.value)||(l!==null?l.push(s):l=[s])}}else if(a===Ja.current){if(i=a.alternate,i===null)throw Error(b(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(l!==null?l.push(In):l=[In])}a=a.return}l!==null&&Ji(t,l,e,n),t.flags|=262144}function tu(l){for(l=l.firstContext;l!==null;){if(!wl(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function ye(l){ze=l,bt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function pl(l){return af(ze,l)}function za(l,t){return ze===null&&ye(l),af(l,t)}function af(l,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},bt===null){if(l===null)throw Error(b(308));bt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else bt=bt.next=t;return e}var Xd=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(e,n){l.push(n)}};this.abort=function(){t.aborted=!0,l.forEach(function(e){return e()})}},Rd=fl.unstable_scheduleCallback,Qd=fl.unstable_NormalPriority,cl={$$typeof:gt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zs(){return{controller:new Xd,data:new Map,refCount:0}}function sa(l){l.refCount--,l.refCount===0&&Rd(Qd,function(){l.controller.abort()})}var Cn=null,Ki=0,Ie=0,Ve=null;function wd(l,t){if(Cn===null){var e=Cn=[];Ki=0,Ie=yc(),Ve={status:"pending",value:void 0,then:function(n){e.push(n)}}}return Ki++,t.then(Pc,Pc),t}function Pc(){if(--Ki===0&&Cn!==null){Ve!==null&&(Ve.status="fulfilled");var l=Cn;Cn=null,Ie=0,Ve=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Ld(l,t){var e=[],n={status:"pending",value:null,reason:null,then:function(a){e.push(a)}};return l.then(function(){n.status="fulfilled",n.value=t;for(var a=0;a<e.length;a++)(0,e[a])(t)},function(a){for(n.status="rejected",n.reason=a,a=0;a<e.length;a++)(0,e[a])(void 0)}),n}var lo=E.S;E.S=function(l,t){p0=jl(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&wd(l,t),lo!==null&&lo(l,t)};var fe=st(null);function Vs(){var l=fe.current;return l!==null?l:J.pooledCache}function Xa(l,t){t===null?K(fe,fe.current):K(fe,t.pool)}function uf(){var l=Vs();return l===null?null:{parent:cl._currentValue,pool:l}}var fn=Error(b(460)),ks=Error(b(474)),Cu=Error(b(542)),eu={then:function(){}};function to(l){return l=l.status,l==="fulfilled"||l==="rejected"}function sf(l,t,e){switch(e=l[e],e===void 0?l.push(t):e!==t&&(t.then(ht,ht),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,no(l),l;default:if(typeof t.status=="string")t.then(ht,ht);else{if(l=J,l!==null&&100<l.shellSuspendCounter)throw Error(b(482));l=t,l.status="pending",l.then(function(n){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=n}},function(n){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,no(l),l}throw re=t,fn}}function se(l){try{var t=l._init;return t(l._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(re=e,fn):e}}var re=null;function eo(){if(re===null)throw Error(b(459));var l=re;return re=null,l}function no(l){if(l===fn||l===Cu)throw Error(b(483))}var ke=null,Jn=0;function Aa(l){var t=Jn;return Jn+=1,ke===null&&(ke=[]),sf(ke,l,t)}function bn(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function Ta(l,t){throw t.$$typeof===Or?Error(b(525)):(l=Object.prototype.toString.call(t),Error(b(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function cf(l){function t(_,o){if(l){var d=_.deletions;d===null?(_.deletions=[o],_.flags|=16):d.push(o)}}function e(_,o){if(!l)return null;for(;o!==null;)t(_,o),o=o.sibling;return null}function n(_){for(var o=new Map;_!==null;)_.key!==null?o.set(_.key,_):o.set(_.index,_),_=_.sibling;return o}function a(_,o){return _=pt(_,o),_.index=0,_.sibling=null,_}function u(_,o,d){return _.index=d,l?(d=_.alternate,d!==null?(d=d.index,d<o?(_.flags|=67108866,o):d):(_.flags|=67108866,o)):(_.flags|=1048576,o)}function i(_){return l&&_.alternate===null&&(_.flags|=67108866),_}function s(_,o,d,h){return o===null||o.tag!==6?(o=ti(d,_.mode,h),o.return=_,o):(o=a(o,d),o.return=_,o)}function c(_,o,d,h){var S=d.type;return S===Ue?g(_,o,d.props.children,h,d.key):o!==null&&(o.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ut&&se(S)===o.type)?(o=a(o,d.props),bn(o,d),o.return=_,o):(o=ja(d.type,d.key,d.props,null,_.mode,h),bn(o,d),o.return=_,o)}function f(_,o,d,h){return o===null||o.tag!==4||o.stateNode.containerInfo!==d.containerInfo||o.stateNode.implementation!==d.implementation?(o=ei(d,_.mode,h),o.return=_,o):(o=a(o,d.children||[]),o.return=_,o)}function g(_,o,d,h,S){return o===null||o.tag!==7?(o=_e(d,_.mode,h,S),o.return=_,o):(o=a(o,d),o.return=_,o)}function y(_,o,d){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=ti(""+o,_.mode,d),o.return=_,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case ha:return d=ja(o.type,o.key,o.props,null,_.mode,d),bn(d,o),d.return=_,d;case Sn:return o=ei(o,_.mode,d),o.return=_,o;case Ut:return o=se(o),y(_,o,d)}if(zn(o)||yn(o))return o=_e(o,_.mode,d,null),o.return=_,o;if(typeof o.then=="function")return y(_,Aa(o),d);if(o.$$typeof===gt)return y(_,za(_,o),d);Ta(_,o)}return null}function r(_,o,d,h){var S=o!==null?o.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return S!==null?null:s(_,o,""+d,h);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ha:return d.key===S?c(_,o,d,h):null;case Sn:return d.key===S?f(_,o,d,h):null;case Ut:return d=se(d),r(_,o,d,h)}if(zn(d)||yn(d))return S!==null?null:g(_,o,d,h,null);if(typeof d.then=="function")return r(_,o,Aa(d),h);if(d.$$typeof===gt)return r(_,o,za(_,d),h);Ta(_,d)}return null}function m(_,o,d,h,S){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return _=_.get(d)||null,s(o,_,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ha:return _=_.get(h.key===null?d:h.key)||null,c(o,_,h,S);case Sn:return _=_.get(h.key===null?d:h.key)||null,f(o,_,h,S);case Ut:return h=se(h),m(_,o,d,h,S)}if(zn(h)||yn(h))return _=_.get(d)||null,g(o,_,h,S,null);if(typeof h.then=="function")return m(_,o,d,Aa(h),S);if(h.$$typeof===gt)return m(_,o,d,za(o,h),S);Ta(o,h)}return null}function p(_,o,d,h){for(var S=null,M=null,v=o,T=o=0,U=null;v!==null&&T<d.length;T++){v.index>T?(U=v,v=null):U=v.sibling;var D=r(_,v,d[T],h);if(D===null){v===null&&(v=U);break}l&&v&&D.alternate===null&&t(_,v),o=u(D,o,T),M===null?S=D:M.sibling=D,M=D,v=U}if(T===d.length)return e(_,v),Q&&mt(_,T),S;if(v===null){for(;T<d.length;T++)v=y(_,d[T],h),v!==null&&(o=u(v,o,T),M===null?S=v:M.sibling=v,M=v);return Q&&mt(_,T),S}for(v=n(v);T<d.length;T++)U=m(v,_,T,d[T],h),U!==null&&(l&&U.alternate!==null&&v.delete(U.key===null?T:U.key),o=u(U,o,T),M===null?S=U:M.sibling=U,M=U);return l&&v.forEach(function(Al){return t(_,Al)}),Q&&mt(_,T),S}function z(_,o,d,h){if(d==null)throw Error(b(151));for(var S=null,M=null,v=o,T=o=0,U=null,D=d.next();v!==null&&!D.done;T++,D=d.next()){v.index>T?(U=v,v=null):U=v.sibling;var Al=r(_,v,D.value,h);if(Al===null){v===null&&(v=U);break}l&&v&&Al.alternate===null&&t(_,v),o=u(Al,o,T),M===null?S=Al:M.sibling=Al,M=Al,v=U}if(D.done)return e(_,v),Q&&mt(_,T),S;if(v===null){for(;!D.done;T++,D=d.next())D=y(_,D.value,h),D!==null&&(o=u(D,o,T),M===null?S=D:M.sibling=D,M=D);return Q&&mt(_,T),S}for(v=n(v);!D.done;T++,D=d.next())D=m(v,_,T,D.value,h),D!==null&&(l&&D.alternate!==null&&v.delete(D.key===null?T:D.key),o=u(D,o,T),M===null?S=D:M.sibling=D,M=D);return l&&v.forEach(function(ql){return t(_,ql)}),Q&&mt(_,T),S}function B(_,o,d,h){if(typeof d=="object"&&d!==null&&d.type===Ue&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ha:l:{for(var S=d.key;o!==null;){if(o.key===S){if(S=d.type,S===Ue){if(o.tag===7){e(_,o.sibling),h=a(o,d.props.children),h.return=_,_=h;break l}}else if(o.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ut&&se(S)===o.type){e(_,o.sibling),h=a(o,d.props),bn(h,d),h.return=_,_=h;break l}e(_,o);break}else t(_,o);o=o.sibling}d.type===Ue?(h=_e(d.props.children,_.mode,h,d.key),h.return=_,_=h):(h=ja(d.type,d.key,d.props,null,_.mode,h),bn(h,d),h.return=_,_=h)}return i(_);case Sn:l:{for(S=d.key;o!==null;){if(o.key===S)if(o.tag===4&&o.stateNode.containerInfo===d.containerInfo&&o.stateNode.implementation===d.implementation){e(_,o.sibling),h=a(o,d.children||[]),h.return=_,_=h;break l}else{e(_,o);break}else t(_,o);o=o.sibling}h=ei(d,_.mode,h),h.return=_,_=h}return i(_);case Ut:return d=se(d),B(_,o,d,h)}if(zn(d))return p(_,o,d,h);if(yn(d)){if(S=yn(d),typeof S!="function")throw Error(b(150));return d=S.call(d),z(_,o,d,h)}if(typeof d.then=="function")return B(_,o,Aa(d),h);if(d.$$typeof===gt)return B(_,o,za(_,d),h);Ta(_,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,o!==null&&o.tag===6?(e(_,o.sibling),h=a(o,d),h.return=_,_=h):(e(_,o),h=ti(d,_.mode,h),h.return=_,_=h),i(_)):e(_,o)}return function(_,o,d,h){try{Jn=0;var S=B(_,o,d,h);return ke=null,S}catch(v){if(v===fn||v===Cu)throw v;var M=Bl(29,v,null,_.mode);return M.lanes=h,M.return=_,M}finally{}}}var ge=cf(!0),of=cf(!1),Ct=!1;function Js(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wi(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function Gt(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function Zt(l,t,e){var n=l.updateQueue;if(n===null)return null;if(n=n.shared,w&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,t=Pa(l),P_(l,null,e),t}return Uu(l,n,t,e),Pa(l)}function Dn(l,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var n=t.lanes;n&=l.pendingLanes,e|=n,t.lanes=e,E_(l,e)}}function ai(l,t){var e=l.updateQueue,n=l.alternate;if(n!==null&&(n=n.updateQueue,e===n)){var a=null,u=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};u===null?a=u=i:u=u.next=i,e=e.next}while(e!==null);u===null?a=u=t:u=u.next=t}else a=u=t;e={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},l.updateQueue=e;return}l=e.lastBaseUpdate,l===null?e.firstBaseUpdate=t:l.next=t,e.lastBaseUpdate=t}var Fi=!1;function Nn(){if(Fi){var l=Ve;if(l!==null)throw l}}function Bn(l,t,e,n){Fi=!1;var a=l.updateQueue;Ct=!1;var u=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var c=s,f=c.next;c.next=null,i===null?u=f:i.next=f,i=c;var g=l.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==i&&(s===null?g.firstBaseUpdate=f:s.next=f,g.lastBaseUpdate=c))}if(u!==null){var y=a.baseState;i=0,g=f=c=null,s=u;do{var r=s.lane&-536870913,m=r!==s.lane;if(m?(R&r)===r:(n&r)===r){r!==0&&r===Ie&&(Fi=!0),g!==null&&(g=g.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});l:{var p=l,z=s;r=t;var B=e;switch(z.tag){case 1:if(p=z.payload,typeof p=="function"){y=p.call(B,y,r);break l}y=p;break l;case 3:p.flags=p.flags&-65537|128;case 0:if(p=z.payload,r=typeof p=="function"?p.call(B,y,r):p,r==null)break l;y=P({},y,r);break l;case 2:Ct=!0}}r=s.callback,r!==null&&(l.flags|=64,m&&(l.flags|=8192),m=a.callbacks,m===null?a.callbacks=[r]:m.push(r))}else m={lane:r,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(f=g=m,c=y):g=g.next=m,i|=r;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;m=s,s=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);g===null&&(c=y),a.baseState=c,a.firstBaseUpdate=f,a.lastBaseUpdate=g,u===null&&(a.shared.lanes=0),Pt|=i,l.lanes=i,l.memoizedState=y}}function _f(l,t){if(typeof l!="function")throw Error(b(191,l));l.call(t)}function ff(l,t){var e=l.callbacks;if(e!==null)for(l.callbacks=null,l=0;l<e.length;l++)_f(e[l],t)}var Pe=st(null),nu=st(0);function ao(l,t){l=Et,K(nu,l),K(Pe,t),Et=l|t.baseLanes}function $i(){K(nu,Et),K(Pe,Pe.current)}function Ks(){Et=nu.current,ml(Pe),ml(nu)}var Ll=st(null),$l=null;function Nt(l){var t=l.alternate;K(nl,nl.current&1),K(Ll,l),$l===null&&(t===null||Pe.current!==null||t.memoizedState!==null)&&($l=l)}function Ii(l){K(nl,nl.current),K(Ll,l),$l===null&&($l=l)}function rf(l){l.tag===22?(K(nl,nl.current),K(Ll,l),$l===null&&($l=l)):Bt()}function Bt(){K(nl,nl.current),K(Ll,Ll.current)}function Nl(l){ml(Ll),$l===l&&($l=null),ml(nl)}var nl=st(0);function au(l){for(var t=l;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||hs(e)||bs(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zt=0,Y=null,V=null,il=null,uu=!1,Je=!1,he=!1,iu=0,Kn=0,Ke=null,qd=0;function tl(){throw Error(b(321))}function Ws(l,t){if(t===null)return!1;for(var e=0;e<t.length&&e<l.length;e++)if(!wl(l[e],t[e]))return!1;return!0}function Fs(l,t,e,n,a,u){return zt=u,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=l===null||l.memoizedState===null?Gf:sc,he=!1,u=e(n,a),he=!1,Je&&(u=mf(t,e,n,a)),df(l),u}function df(l){E.H=Wn;var t=V!==null&&V.next!==null;if(zt=0,il=V=Y=null,uu=!1,Kn=0,Ke=null,t)throw Error(b(300));l===null||ol||(l=l.dependencies,l!==null&&tu(l)&&(ol=!0))}function mf(l,t,e,n){Y=l;var a=0;do{if(Je&&(Ke=null),Kn=0,Je=!1,25<=a)throw Error(b(301));if(a+=1,il=V=null,l.updateQueue!=null){var u=l.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}E.H=Zf,u=t(e,n)}while(Je);return u}function Gd(){var l=E.H,t=l.useState()[0];return t=typeof t.then=="function"?ca(t):t,l=l.useState()[0],(V!==null?V.memoizedState:null)!==l&&(Y.flags|=1024),t}function $s(){var l=iu!==0;return iu=0,l}function Is(l,t,e){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~e}function Ps(l){if(uu){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}uu=!1}zt=0,il=V=Y=null,Je=!1,Kn=iu=0,Ke=null}function xl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return il===null?Y.memoizedState=il=l:il=il.next=l,il}function al(){if(V===null){var l=Y.alternate;l=l!==null?l.memoizedState:null}else l=V.next;var t=il===null?Y.memoizedState:il.next;if(t!==null)il=t,V=l;else{if(l===null)throw Y.alternate===null?Error(b(467)):Error(b(310));V=l,l={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},il===null?Y.memoizedState=il=l:il=il.next=l}return il}function Du(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ca(l){var t=Kn;return Kn+=1,Ke===null&&(Ke=[]),l=sf(Ke,l,t),t=Y,(il===null?t.memoizedState:il.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Gf:sc),l}function Nu(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return ca(l);if(l.$$typeof===gt)return pl(l)}throw Error(b(438,String(l)))}function lc(l){var t=null,e=Y.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var n=Y.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=Du(),Y.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(l),n=0;n<l;n++)e[n]=Yr;return t.index++,e}function At(l,t){return typeof t=="function"?t(l):t}function Ra(l){var t=al();return tc(t,V,l)}function tc(l,t,e){var n=l.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var a=l.baseQueue,u=n.pending;if(u!==null){if(a!==null){var i=a.next;a.next=u.next,u.next=i}t.baseQueue=a=u,n.pending=null}if(u=l.baseState,a===null)l.memoizedState=u;else{t=a.next;var s=i=null,c=null,f=t,g=!1;do{var y=f.lane&-536870913;if(y!==f.lane?(R&y)===y:(zt&y)===y){var r=f.revertLane;if(r===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),y===Ie&&(g=!0);else if((zt&r)===r){f=f.next,r===Ie&&(g=!0);continue}else y={lane:0,revertLane:f.revertLane,gesture:null,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null},c===null?(s=c=y,i=u):c=c.next=y,Y.lanes|=r,Pt|=r;y=f.action,he&&e(u,y),u=f.hasEagerState?f.eagerState:e(u,y)}else r={lane:y,revertLane:f.revertLane,gesture:f.gesture,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null},c===null?(s=c=r,i=u):c=c.next=r,Y.lanes|=y,Pt|=y;f=f.next}while(f!==null&&f!==t);if(c===null?i=u:c.next=s,!wl(u,l.memoizedState)&&(ol=!0,g&&(e=Ve,e!==null)))throw e;l.memoizedState=u,l.baseState=i,l.baseQueue=c,n.lastRenderedState=u}return a===null&&(n.lanes=0),[l.memoizedState,n.dispatch]}function ui(l){var t=al(),e=t.queue;if(e===null)throw Error(b(311));e.lastRenderedReducer=l;var n=e.dispatch,a=e.pending,u=t.memoizedState;if(a!==null){e.pending=null;var i=a=a.next;do u=l(u,i.action),i=i.next;while(i!==a);wl(u,t.memoizedState)||(ol=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),e.lastRenderedState=u}return[u,n]}function yf(l,t,e){var n=Y,a=al(),u=Q;if(u){if(e===void 0)throw Error(b(407));e=e()}else e=t();var i=!wl((V||a).memoizedState,e);if(i&&(a.memoizedState=e,ol=!0),a=a.queue,ec(bf.bind(null,n,a,l),[l]),a.getSnapshot!==t||i||il!==null&&il.memoizedState.tag&1){if(n.flags|=2048,ln(9,{destroy:void 0},hf.bind(null,n,a,e,t),null),J===null)throw Error(b(349));u||zt&127||gf(n,t,e)}return e}function gf(l,t,e){l.flags|=16384,l={getSnapshot:t,value:e},t=Y.updateQueue,t===null?(t=Du(),Y.updateQueue=t,t.stores=[l]):(e=t.stores,e===null?t.stores=[l]:e.push(l))}function hf(l,t,e,n){t.value=e,t.getSnapshot=n,pf(t)&&vf(l)}function bf(l,t,e){return e(function(){pf(t)&&vf(l)})}function pf(l){var t=l.getSnapshot;l=l.value;try{var e=t();return!wl(l,e)}catch{return!0}}function vf(l){var t=Se(l,2);t!==null&&Ml(t,l,2)}function Pi(l){var t=xl();if(typeof l=="function"){var e=l;if(l=e(),he){jt(!0);try{e()}finally{jt(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:At,lastRenderedState:l},t}function xf(l,t,e,n){return l.baseState=e,tc(l,V,typeof n=="function"?n:At)}function Zd(l,t,e,n,a){if(Hu(l))throw Error(b(485));if(l=t.action,l!==null){var u={payload:a,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};E.T!==null?e(!0):u.isTransition=!1,n(u),e=t.pending,e===null?(u.next=t.pending=u,Sf(t,u)):(u.next=e.next,t.pending=e.next=u)}}function Sf(l,t){var e=t.action,n=t.payload,a=l.state;if(t.isTransition){var u=E.T,i={};E.T=i;try{var s=e(a,n),c=E.S;c!==null&&c(i,s),uo(l,t,s)}catch(f){ls(l,t,f)}finally{u!==null&&i.types!==null&&(u.types=i.types),E.T=u}}else try{u=e(a,n),uo(l,t,u)}catch(f){ls(l,t,f)}}function uo(l,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(n){io(l,t,n)},function(n){return ls(l,t,n)}):io(l,t,e)}function io(l,t,e){t.status="fulfilled",t.value=e,zf(t),l.state=e,t=l.pending,t!==null&&(e=t.next,e===t?l.pending=null:(e=e.next,t.next=e,Sf(l,e)))}function ls(l,t,e){var n=l.pending;if(l.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=e,zf(t),t=t.next;while(t!==n)}l.action=null}function zf(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Af(l,t){return t}function so(l,t){if(Q){var e=J.formState;if(e!==null){l:{var n=Y;if(Q){if($){t:{for(var a=$,u=Fl;a.nodeType!==8;){if(!u){a=null;break t}if(a=Il(a.nextSibling),a===null){a=null;break t}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){$=Il(a.nextSibling),n=a.data==="F!";break l}}$t(n)}n=!1}n&&(t=e[0])}}return e=xl(),e.memoizedState=e.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Af,lastRenderedState:t},e.queue=n,e=wf.bind(null,Y,n),n.dispatch=e,n=Pi(!1),u=ic.bind(null,Y,!1,n.queue),n=xl(),a={state:t,dispatch:null,action:l,pending:null},n.queue=a,e=Zd.bind(null,Y,a,u,e),a.dispatch=e,n.memoizedState=l,[t,e,!1]}function co(l){var t=al();return Tf(t,V,l)}function Tf(l,t,e){if(t=tc(l,t,Af)[0],l=Ra(At)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ca(t)}catch(i){throw i===fn?Cu:i}else n=t;t=al();var a=t.queue,u=a.dispatch;return e!==t.memoizedState&&(Y.flags|=2048,ln(9,{destroy:void 0},Vd.bind(null,a,e),null)),[n,u,l]}function Vd(l,t){l.action=t}function oo(l){var t=al(),e=V;if(e!==null)return Tf(t,e,l);al(),t=t.memoizedState,e=al();var n=e.queue.dispatch;return e.memoizedState=l,[t,n,!1]}function ln(l,t,e,n){return l={tag:l,create:e,deps:n,inst:t,next:null},t=Y.updateQueue,t===null&&(t=Du(),Y.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=l.next=l:(n=e.next,e.next=l,l.next=n,t.lastEffect=l),l}function Ef(){return al().memoizedState}function Qa(l,t,e,n){var a=xl();Y.flags|=l,a.memoizedState=ln(1|t,{destroy:void 0},e,n===void 0?null:n)}function Bu(l,t,e,n){var a=al();n=n===void 0?null:n;var u=a.memoizedState.inst;V!==null&&n!==null&&Ws(n,V.memoizedState.deps)?a.memoizedState=ln(t,u,e,n):(Y.flags|=l,a.memoizedState=ln(1|t,u,e,n))}function _o(l,t){Qa(8390656,8,l,t)}function ec(l,t){Bu(2048,8,l,t)}function kd(l){Y.flags|=4;var t=Y.updateQueue;if(t===null)t=Du(),Y.updateQueue=t,t.events=[l];else{var e=t.events;e===null?t.events=[l]:e.push(l)}}function Of(l){var t=al().memoizedState;return kd({ref:t,nextImpl:l}),function(){if(w&2)throw Error(b(440));return t.impl.apply(void 0,arguments)}}function Yf(l,t){return Bu(4,2,l,t)}function Mf(l,t){return Bu(4,4,l,t)}function Uf(l,t){if(typeof t=="function"){l=l();var e=t(l);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function Cf(l,t,e){e=e!=null?e.concat([l]):null,Bu(4,4,Uf.bind(null,t,l),e)}function nc(){}function Df(l,t){var e=al();t=t===void 0?null:t;var n=e.memoizedState;return t!==null&&Ws(t,n[1])?n[0]:(e.memoizedState=[l,t],l)}function Nf(l,t){var e=al();t=t===void 0?null:t;var n=e.memoizedState;if(t!==null&&Ws(t,n[1]))return n[0];if(n=l(),he){jt(!0);try{l()}finally{jt(!1)}}return e.memoizedState=[n,t],n}function ac(l,t,e){return e===void 0||zt&1073741824&&!(R&261930)?l.memoizedState=t:(l.memoizedState=e,l=x0(),Y.lanes|=l,Pt|=l,e)}function Bf(l,t,e,n){return wl(e,t)?e:Pe.current!==null?(l=ac(l,e,n),wl(l,t)||(ol=!0),l):!(zt&42)||zt&1073741824&&!(R&261930)?(ol=!0,l.memoizedState=e):(l=x0(),Y.lanes|=l,Pt|=l,t)}function Hf(l,t,e,n,a){var u=L.p;L.p=u!==0&&8>u?u:8;var i=E.T,s={};E.T=s,ic(l,!1,t,e);try{var c=a(),f=E.S;if(f!==null&&f(s,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var g=Ld(c,n);Hn(l,t,g,Ql(l))}else Hn(l,t,n,Ql(l))}catch(y){Hn(l,t,{then:function(){},status:"rejected",reason:y},Ql())}finally{L.p=u,i!==null&&s.types!==null&&(i.types=s.types),E.T=i}}function Jd(){}function ts(l,t,e,n){if(l.tag!==5)throw Error(b(476));var a=jf(l).queue;Hf(l,a,t,oe,e===null?Jd:function(){return Xf(l),e(n)})}function jf(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:At,lastRenderedState:oe},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:At,lastRenderedState:e},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function Xf(l){var t=jf(l);t.next===null&&(t=l.alternate.memoizedState),Hn(l,t.next.queue,{},Ql())}function uc(){return pl(In)}function Rf(){return al().memoizedState}function Qf(){return al().memoizedState}function Kd(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var e=Ql();l=Gt(e);var n=Zt(t,l,e);n!==null&&(Ml(n,t,e),Dn(n,t,e)),t={cache:Zs()},l.payload=t;return}t=t.return}}function Wd(l,t,e){var n=Ql();e={lane:n,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Hu(l)?Lf(t,e):(e=ws(l,t,e,n),e!==null&&(Ml(e,l,n),qf(e,t,n)))}function wf(l,t,e){var n=Ql();Hn(l,t,e,n)}function Hn(l,t,e,n){var a={lane:n,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Hu(l))Lf(t,a);else{var u=l.alternate;if(l.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,s=u(i,e);if(a.hasEagerState=!0,a.eagerState=s,wl(s,i))return Uu(l,t,a,0),J===null&&Mu(),!1}catch{}finally{}if(e=ws(l,t,a,n),e!==null)return Ml(e,l,n),qf(e,t,n),!0}return!1}function ic(l,t,e,n){if(n={lane:2,revertLane:yc(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Hu(l)){if(t)throw Error(b(479))}else t=ws(l,e,n,2),t!==null&&Ml(t,l,2)}function Hu(l){var t=l.alternate;return l===Y||t!==null&&t===Y}function Lf(l,t){Je=uu=!0;var e=l.pending;e===null?t.next=t:(t.next=e.next,e.next=t),l.pending=t}function qf(l,t,e){if(e&4194048){var n=t.lanes;n&=l.pendingLanes,e|=n,t.lanes=e,E_(l,e)}}var Wn={readContext:pl,use:Nu,useCallback:tl,useContext:tl,useEffect:tl,useImperativeHandle:tl,useLayoutEffect:tl,useInsertionEffect:tl,useMemo:tl,useReducer:tl,useRef:tl,useState:tl,useDebugValue:tl,useDeferredValue:tl,useTransition:tl,useSyncExternalStore:tl,useId:tl,useHostTransitionStatus:tl,useFormState:tl,useActionState:tl,useOptimistic:tl,useMemoCache:tl,useCacheRefresh:tl};Wn.useEffectEvent=tl;var Gf={readContext:pl,use:Nu,useCallback:function(l,t){return xl().memoizedState=[l,t===void 0?null:t],l},useContext:pl,useEffect:_o,useImperativeHandle:function(l,t,e){e=e!=null?e.concat([l]):null,Qa(4194308,4,Uf.bind(null,t,l),e)},useLayoutEffect:function(l,t){return Qa(4194308,4,l,t)},useInsertionEffect:function(l,t){Qa(4,2,l,t)},useMemo:function(l,t){var e=xl();t=t===void 0?null:t;var n=l();if(he){jt(!0);try{l()}finally{jt(!1)}}return e.memoizedState=[n,t],n},useReducer:function(l,t,e){var n=xl();if(e!==void 0){var a=e(t);if(he){jt(!0);try{e(t)}finally{jt(!1)}}}else a=t;return n.memoizedState=n.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:a},n.queue=l,l=l.dispatch=Wd.bind(null,Y,l),[n.memoizedState,l]},useRef:function(l){var t=xl();return l={current:l},t.memoizedState=l},useState:function(l){l=Pi(l);var t=l.queue,e=wf.bind(null,Y,t);return t.dispatch=e,[l.memoizedState,e]},useDebugValue:nc,useDeferredValue:function(l,t){var e=xl();return ac(e,l,t)},useTransition:function(){var l=Pi(!1);return l=Hf.bind(null,Y,l.queue,!0,!1),xl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,e){var n=Y,a=xl();if(Q){if(e===void 0)throw Error(b(407));e=e()}else{if(e=t(),J===null)throw Error(b(349));R&127||gf(n,t,e)}a.memoizedState=e;var u={value:e,getSnapshot:t};return a.queue=u,_o(bf.bind(null,n,u,l),[l]),n.flags|=2048,ln(9,{destroy:void 0},hf.bind(null,n,u,e,t),null),e},useId:function(){var l=xl(),t=J.identifierPrefix;if(Q){var e=at,n=nt;e=(n&~(1<<32-Rl(n)-1)).toString(32)+e,t="_"+t+"R_"+e,e=iu++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=qd++,t="_"+t+"r_"+e.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:uc,useFormState:so,useActionState:so,useOptimistic:function(l){var t=xl();t.memoizedState=t.baseState=l;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=ic.bind(null,Y,!0,e),e.dispatch=t,[l,t]},useMemoCache:lc,useCacheRefresh:function(){return xl().memoizedState=Kd.bind(null,Y)},useEffectEvent:function(l){var t=xl(),e={impl:l};return t.memoizedState=e,function(){if(w&2)throw Error(b(440));return e.impl.apply(void 0,arguments)}}},sc={readContext:pl,use:Nu,useCallback:Df,useContext:pl,useEffect:ec,useImperativeHandle:Cf,useInsertionEffect:Yf,useLayoutEffect:Mf,useMemo:Nf,useReducer:Ra,useRef:Ef,useState:function(){return Ra(At)},useDebugValue:nc,useDeferredValue:function(l,t){var e=al();return Bf(e,V.memoizedState,l,t)},useTransition:function(){var l=Ra(At)[0],t=al().memoizedState;return[typeof l=="boolean"?l:ca(l),t]},useSyncExternalStore:yf,useId:Rf,useHostTransitionStatus:uc,useFormState:co,useActionState:co,useOptimistic:function(l,t){var e=al();return xf(e,V,l,t)},useMemoCache:lc,useCacheRefresh:Qf};sc.useEffectEvent=Of;var Zf={readContext:pl,use:Nu,useCallback:Df,useContext:pl,useEffect:ec,useImperativeHandle:Cf,useInsertionEffect:Yf,useLayoutEffect:Mf,useMemo:Nf,useReducer:ui,useRef:Ef,useState:function(){return ui(At)},useDebugValue:nc,useDeferredValue:function(l,t){var e=al();return V===null?ac(e,l,t):Bf(e,V.memoizedState,l,t)},useTransition:function(){var l=ui(At)[0],t=al().memoizedState;return[typeof l=="boolean"?l:ca(l),t]},useSyncExternalStore:yf,useId:Rf,useHostTransitionStatus:uc,useFormState:oo,useActionState:oo,useOptimistic:function(l,t){var e=al();return V!==null?xf(e,V,l,t):(e.baseState=l,[l,e.queue.dispatch])},useMemoCache:lc,useCacheRefresh:Qf};Zf.useEffectEvent=Of;function ii(l,t,e,n){t=l.memoizedState,e=e(n,t),e=e==null?t:P({},t,e),l.memoizedState=e,l.lanes===0&&(l.updateQueue.baseState=e)}var es={enqueueSetState:function(l,t,e){l=l._reactInternals;var n=Ql(),a=Gt(n);a.payload=t,e!=null&&(a.callback=e),t=Zt(l,a,n),t!==null&&(Ml(t,l,n),Dn(t,l,n))},enqueueReplaceState:function(l,t,e){l=l._reactInternals;var n=Ql(),a=Gt(n);a.tag=1,a.payload=t,e!=null&&(a.callback=e),t=Zt(l,a,n),t!==null&&(Ml(t,l,n),Dn(t,l,n))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var e=Ql(),n=Gt(e);n.tag=2,t!=null&&(n.callback=t),t=Zt(l,n,e),t!==null&&(Ml(t,l,e),Dn(t,l,e))}};function fo(l,t,e,n,a,u,i){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(n,u,i):t.prototype&&t.prototype.isPureReactComponent?!Zn(e,n)||!Zn(a,u):!0}function ro(l,t,e,n){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,n),t.state!==l&&es.enqueueReplaceState(t,t.state,null)}function be(l,t){var e=t;if("ref"in t){e={};for(var n in t)n!=="ref"&&(e[n]=t[n])}if(l=l.defaultProps){e===t&&(e=P({},e));for(var a in l)e[a]===void 0&&(e[a]=l[a])}return e}function Vf(l){Ia(l)}function kf(l){console.error(l)}function Jf(l){Ia(l)}function su(l,t){try{var e=l.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function mo(l,t,e){try{var n=l.onCaughtError;n(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function ns(l,t,e){return e=Gt(e),e.tag=3,e.payload={element:null},e.callback=function(){su(l,t)},e}function Kf(l){return l=Gt(l),l.tag=3,l}function Wf(l,t,e,n){var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;l.payload=function(){return a(u)},l.callback=function(){mo(t,e,n)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(l.callback=function(){mo(t,e,n),typeof a!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function Fd(l,t,e,n,a){if(e.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=e.alternate,t!==null&&_n(t,e,a,!0),e=Ll.current,e!==null){switch(e.tag){case 31:case 13:return $l===null?ru():e.alternate===null&&el===0&&(el=3),e.flags&=-257,e.flags|=65536,e.lanes=a,n===eu?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([n]):t.add(n),hi(l,n,a)),!1;case 22:return e.flags|=65536,n===eu?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([n]):e.add(n)),hi(l,n,a)),!1}throw Error(b(435,e.tag))}return hi(l,n,a),ru(),!1}if(Q)return t=Ll.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,n!==Zi&&(l=Error(b(422),{cause:n}),kn(Wl(l,e)))):(n!==Zi&&(t=Error(b(423),{cause:n}),kn(Wl(t,e))),l=l.current.alternate,l.flags|=65536,a&=-a,l.lanes|=a,n=Wl(n,e),a=ns(l.stateNode,n,a),ai(l,a),el!==4&&(el=2)),!1;var u=Error(b(520),{cause:n});if(u=Wl(u,e),Rn===null?Rn=[u]:Rn.push(u),el!==4&&(el=2),t===null)return!0;n=Wl(n,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,l=a&-a,e.lanes|=l,l=ns(e.stateNode,n,l),ai(e,l),!1;case 1:if(t=e.type,u=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Vt===null||!Vt.has(u))))return e.flags|=65536,a&=-a,e.lanes|=a,a=Kf(a),Wf(a,l,e,n),ai(e,a),!1}e=e.return}while(e!==null);return!1}var cc=Error(b(461)),ol=!1;function gl(l,t,e,n){t.child=l===null?of(t,null,e,n):ge(t,l.child,e,n)}function yo(l,t,e,n,a){e=e.render;var u=t.ref;if("ref"in n){var i={};for(var s in n)s!=="ref"&&(i[s]=n[s])}else i=n;return ye(t),n=Fs(l,t,e,i,u,a),s=$s(),l!==null&&!ol?(Is(l,t,a),Tt(l,t,a)):(Q&&s&&qs(t),t.flags|=1,gl(l,t,n,a),t.child)}function go(l,t,e,n,a){if(l===null){var u=e.type;return typeof u=="function"&&!Ls(u)&&u.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=u,Ff(l,t,u,n,a)):(l=ja(e.type,null,n,t,t.mode,a),l.ref=t.ref,l.return=t,t.child=l)}if(u=l.child,!oc(l,a)){var i=u.memoizedProps;if(e=e.compare,e=e!==null?e:Zn,e(i,n)&&l.ref===t.ref)return Tt(l,t,a)}return t.flags|=1,l=pt(u,n),l.ref=t.ref,l.return=t,t.child=l}function Ff(l,t,e,n,a){if(l!==null){var u=l.memoizedProps;if(Zn(u,n)&&l.ref===t.ref)if(ol=!1,t.pendingProps=n=u,oc(l,a))l.flags&131072&&(ol=!0);else return t.lanes=l.lanes,Tt(l,t,a)}return as(l,t,e,n,a)}function $f(l,t,e,n){var a=n.children,u=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if(t.flags&128){if(u=u!==null?u.baseLanes|e:e,l!==null){for(n=t.child=l.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~u}else n=0,t.child=null;return ho(l,t,u,e,n)}if(e&536870912)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&Xa(t,u!==null?u.cachePool:null),u!==null?ao(t,u):$i(),rf(t);else return n=t.lanes=536870912,ho(l,t,u!==null?u.baseLanes|e:e,e,n)}else u!==null?(Xa(t,u.cachePool),ao(t,u),Bt(),t.memoizedState=null):(l!==null&&Xa(t,null),$i(),Bt());return gl(l,t,a,e),t.child}function Tn(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ho(l,t,e,n,a){var u=Vs();return u=u===null?null:{parent:cl._currentValue,pool:u},t.memoizedState={baseLanes:e,cachePool:u},l!==null&&Xa(t,null),$i(),rf(t),l!==null&&_n(l,t,n,!0),t.childLanes=a,null}function wa(l,t){return t=cu({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function bo(l,t,e){return ge(t,l.child,null,e),l=wa(t,t.pendingProps),l.flags|=2,Nl(t),t.memoizedState=null,l}function $d(l,t,e){var n=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(Q){if(n.mode==="hidden")return l=wa(t,n),t.lanes=536870912,Tn(null,l);if(Ii(t),(l=$)?(l=G0(l,Fl),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:Ft!==null?{id:nt,overflow:at}:null,retryLane:536870912,hydrationErrors:null},e=tf(l),e.return=t,t.child=e,bl=t,$=null)):l=null,l===null)throw $t(t);return t.lanes=536870912,null}return wa(t,n)}var u=l.memoizedState;if(u!==null){var i=u.dehydrated;if(Ii(t),a)if(t.flags&256)t.flags&=-257,t=bo(l,t,e);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(b(558));else if(ol||_n(l,t,e,!1),a=(e&l.childLanes)!==0,ol||a){if(n=J,n!==null&&(i=O_(n,e),i!==0&&i!==u.retryLane))throw u.retryLane=i,Se(l,i),Ml(n,l,i),cc;ru(),t=bo(l,t,e)}else l=u.treeContext,$=Il(i.nextSibling),bl=t,Q=!0,qt=null,Fl=!1,l!==null&&nf(t,l),t=wa(t,n),t.flags|=4096;return t}return l=pt(l.child,{mode:n.mode,children:n.children}),l.ref=t.ref,t.child=l,l.return=t,l}function La(l,t){var e=t.ref;if(e===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(b(284));(l===null||l.ref!==e)&&(t.flags|=4194816)}}function as(l,t,e,n,a){return ye(t),e=Fs(l,t,e,n,void 0,a),n=$s(),l!==null&&!ol?(Is(l,t,a),Tt(l,t,a)):(Q&&n&&qs(t),t.flags|=1,gl(l,t,e,a),t.child)}function po(l,t,e,n,a,u){return ye(t),t.updateQueue=null,e=mf(t,n,e,a),df(l),n=$s(),l!==null&&!ol?(Is(l,t,u),Tt(l,t,u)):(Q&&n&&qs(t),t.flags|=1,gl(l,t,e,u),t.child)}function vo(l,t,e,n,a){if(ye(t),t.stateNode===null){var u=Re,i=e.contextType;typeof i=="object"&&i!==null&&(u=pl(i)),u=new e(n,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=es,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=n,u.state=t.memoizedState,u.refs={},Js(t),i=e.contextType,u.context=typeof i=="object"&&i!==null?pl(i):Re,u.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ii(t,e,i,n),u.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&es.enqueueReplaceState(u,u.state,null),Bn(t,n,u,a),Nn(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(l===null){u=t.stateNode;var s=t.memoizedProps,c=be(e,s);u.props=c;var f=u.context,g=e.contextType;i=Re,typeof g=="object"&&g!==null&&(i=pl(g));var y=e.getDerivedStateFromProps;g=typeof y=="function"||typeof u.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,g||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s||f!==i)&&ro(t,u,n,i),Ct=!1;var r=t.memoizedState;u.state=r,Bn(t,n,u,a),Nn(),f=t.memoizedState,s||r!==f||Ct?(typeof y=="function"&&(ii(t,e,y,n),f=t.memoizedState),(c=Ct||fo(t,e,c,n,r,f,i))?(g||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=f),u.props=n,u.state=f,u.context=i,n=c):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{u=t.stateNode,Wi(l,t),i=t.memoizedProps,g=be(e,i),u.props=g,y=t.pendingProps,r=u.context,f=e.contextType,c=Re,typeof f=="object"&&f!==null&&(c=pl(f)),s=e.getDerivedStateFromProps,(f=typeof s=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==y||r!==c)&&ro(t,u,n,c),Ct=!1,r=t.memoizedState,u.state=r,Bn(t,n,u,a),Nn();var m=t.memoizedState;i!==y||r!==m||Ct||l!==null&&l.dependencies!==null&&tu(l.dependencies)?(typeof s=="function"&&(ii(t,e,s,n),m=t.memoizedState),(g=Ct||fo(t,e,g,n,r,m,c)||l!==null&&l.dependencies!==null&&tu(l.dependencies))?(f||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,m,c),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,m,c)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===l.memoizedProps&&r===l.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&r===l.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=m),u.props=n,u.state=m,u.context=c,n=g):(typeof u.componentDidUpdate!="function"||i===l.memoizedProps&&r===l.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&r===l.memoizedState||(t.flags|=1024),n=!1)}return u=n,La(l,t),n=(t.flags&128)!==0,u||n?(u=t.stateNode,e=n&&typeof e.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,l!==null&&n?(t.child=ge(t,l.child,null,a),t.child=ge(t,null,e,a)):gl(l,t,e,a),t.memoizedState=u.state,l=t.child):l=Tt(l,t,a),l}function xo(l,t,e,n){return me(),t.flags|=256,gl(l,t,e,n),t.child}var si={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ci(l){return{baseLanes:l,cachePool:uf()}}function oi(l,t,e){return l=l!==null?l.childLanes&~e:0,t&&(l|=Hl),l}function If(l,t,e){var n=t.pendingProps,a=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=l!==null&&l.memoizedState===null?!1:(nl.current&2)!==0),i&&(a=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,l===null){if(Q){if(a?Nt(t):Bt(),(l=$)?(l=G0(l,Fl),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:Ft!==null?{id:nt,overflow:at}:null,retryLane:536870912,hydrationErrors:null},e=tf(l),e.return=t,t.child=e,bl=t,$=null)):l=null,l===null)throw $t(t);return bs(l)?t.lanes=32:t.lanes=536870912,null}var s=n.children;return n=n.fallback,a?(Bt(),a=t.mode,s=cu({mode:"hidden",children:s},a),n=_e(n,a,e,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n=t.child,n.memoizedState=ci(e),n.childLanes=oi(l,i,e),t.memoizedState=si,Tn(null,n)):(Nt(t),us(t,s))}var c=l.memoizedState;if(c!==null&&(s=c.dehydrated,s!==null)){if(u)t.flags&256?(Nt(t),t.flags&=-257,t=_i(l,t,e)):t.memoizedState!==null?(Bt(),t.child=l.child,t.flags|=128,t=null):(Bt(),s=n.fallback,a=t.mode,n=cu({mode:"visible",children:n.children},a),s=_e(s,a,e,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,ge(t,l.child,null,e),n=t.child,n.memoizedState=ci(e),n.childLanes=oi(l,i,e),t.memoizedState=si,t=Tn(null,n));else if(Nt(t),bs(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var f=i.dgst;i=f,n=Error(b(419)),n.stack="",n.digest=i,kn({value:n,source:null,stack:null}),t=_i(l,t,e)}else if(ol||_n(l,t,e,!1),i=(e&l.childLanes)!==0,ol||i){if(i=J,i!==null&&(n=O_(i,e),n!==0&&n!==c.retryLane))throw c.retryLane=n,Se(l,n),Ml(i,l,n),cc;hs(s)||ru(),t=_i(l,t,e)}else hs(s)?(t.flags|=192,t.child=l.child,t=null):(l=c.treeContext,$=Il(s.nextSibling),bl=t,Q=!0,qt=null,Fl=!1,l!==null&&nf(t,l),t=us(t,n.children),t.flags|=4096);return t}return a?(Bt(),s=n.fallback,a=t.mode,c=l.child,f=c.sibling,n=pt(c,{mode:"hidden",children:n.children}),n.subtreeFlags=c.subtreeFlags&65011712,f!==null?s=pt(f,s):(s=_e(s,a,e,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,Tn(null,n),n=t.child,s=l.child.memoizedState,s===null?s=ci(e):(a=s.cachePool,a!==null?(c=cl._currentValue,a=a.parent!==c?{parent:c,pool:c}:a):a=uf(),s={baseLanes:s.baseLanes|e,cachePool:a}),n.memoizedState=s,n.childLanes=oi(l,i,e),t.memoizedState=si,Tn(l.child,n)):(Nt(t),e=l.child,l=e.sibling,e=pt(e,{mode:"visible",children:n.children}),e.return=t,e.sibling=null,l!==null&&(i=t.deletions,i===null?(t.deletions=[l],t.flags|=16):i.push(l)),t.child=e,t.memoizedState=null,e)}function us(l,t){return t=cu({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function cu(l,t){return l=Bl(22,l,null,t),l.lanes=0,l}function _i(l,t,e){return ge(t,l.child,null,e),l=us(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function So(l,t,e){l.lanes|=t;var n=l.alternate;n!==null&&(n.lanes|=t),ki(l.return,t,e)}function fi(l,t,e,n,a,u){var i=l.memoizedState;i===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:e,tailMode:a,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=e,i.tailMode=a,i.treeForkCount=u)}function Pf(l,t,e){var n=t.pendingProps,a=n.revealOrder,u=n.tail;n=n.children;var i=nl.current,s=(i&2)!==0;if(s?(i=i&1|2,t.flags|=128):i&=1,K(nl,i),gl(l,t,n,e),n=Q?Vn:0,!s&&l!==null&&l.flags&128)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&So(l,e,t);else if(l.tag===19)So(l,e,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(a){case"forwards":for(e=t.child,a=null;e!==null;)l=e.alternate,l!==null&&au(l)===null&&(a=e),e=e.sibling;e=a,e===null?(a=t.child,t.child=null):(a=e.sibling,e.sibling=null),fi(t,!1,a,e,u,n);break;case"backwards":case"unstable_legacy-backwards":for(e=null,a=t.child,t.child=null;a!==null;){if(l=a.alternate,l!==null&&au(l)===null){t.child=a;break}l=a.sibling,a.sibling=e,e=a,a=l}fi(t,!0,e,null,u,n);break;case"together":fi(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Tt(l,t,e){if(l!==null&&(t.dependencies=l.dependencies),Pt|=t.lanes,!(e&t.childLanes))if(l!==null){if(_n(l,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(b(153));if(t.child!==null){for(l=t.child,e=pt(l,l.pendingProps),t.child=e,e.return=t;l.sibling!==null;)l=l.sibling,e=e.sibling=pt(l,l.pendingProps),e.return=t;e.sibling=null}return t.child}function oc(l,t){return l.lanes&t?!0:(l=l.dependencies,!!(l!==null&&tu(l)))}function Id(l,t,e){switch(t.tag){case 3:Ka(t,t.stateNode.containerInfo),Dt(t,cl,l.memoizedState.cache),me();break;case 27:case 5:Ni(t);break;case 4:Ka(t,t.stateNode.containerInfo);break;case 10:Dt(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ii(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Nt(t),t.flags|=128,null):e&t.child.childLanes?If(l,t,e):(Nt(t),l=Tt(l,t,e),l!==null?l.sibling:null);Nt(t);break;case 19:var a=(l.flags&128)!==0;if(n=(e&t.childLanes)!==0,n||(_n(l,t,e,!1),n=(e&t.childLanes)!==0),a){if(n)return Pf(l,t,e);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),K(nl,nl.current),n)break;return null;case 22:return t.lanes=0,$f(l,t,e,t.pendingProps);case 24:Dt(t,cl,l.memoizedState.cache)}return Tt(l,t,e)}function l0(l,t,e){if(l!==null)if(l.memoizedProps!==t.pendingProps)ol=!0;else{if(!oc(l,e)&&!(t.flags&128))return ol=!1,Id(l,t,e);ol=!!(l.flags&131072)}else ol=!1,Q&&t.flags&1048576&&ef(t,Vn,t.index);switch(t.lanes=0,t.tag){case 16:l:{var n=t.pendingProps;if(l=se(t.elementType),t.type=l,typeof l=="function")Ls(l)?(n=be(l,n),t.tag=1,t=vo(null,t,l,n,e)):(t.tag=0,t=as(null,t,l,n,e));else{if(l!=null){var a=l.$$typeof;if(a===Os){t.tag=11,t=yo(null,t,l,n,e);break l}else if(a===Ys){t.tag=14,t=go(null,t,l,n,e);break l}}throw t=Ci(l)||l,Error(b(306,t,""))}}return t;case 0:return as(l,t,t.type,t.pendingProps,e);case 1:return n=t.type,a=be(n,t.pendingProps),vo(l,t,n,a,e);case 3:l:{if(Ka(t,t.stateNode.containerInfo),l===null)throw Error(b(387));n=t.pendingProps;var u=t.memoizedState;a=u.element,Wi(l,t),Bn(t,n,null,e);var i=t.memoizedState;if(n=i.cache,Dt(t,cl,n),n!==u.cache&&Ji(t,[cl],e,!0),Nn(),n=i.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=xo(l,t,n,e);break l}else if(n!==a){a=Wl(Error(b(424)),t),kn(a),t=xo(l,t,n,e);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for($=Il(l.firstChild),bl=t,Q=!0,qt=null,Fl=!0,e=of(t,null,n,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(me(),n===a){t=Tt(l,t,e);break l}gl(l,t,n,e)}t=t.child}return t;case 26:return La(l,t),l===null?(e=qo(t.type,null,t.pendingProps,null))?t.memoizedState=e:Q||(e=t.type,l=t.pendingProps,n=gu(Lt.current).createElement(e),n[hl]=t,n[Ul]=l,vl(n,e,l),dl(n),t.stateNode=n):t.memoizedState=qo(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Ni(t),l===null&&Q&&(n=t.stateNode=Z0(t.type,t.pendingProps,Lt.current),bl=t,Fl=!0,a=$,te(t.type)?(ps=a,$=Il(n.firstChild)):$=a),gl(l,t,t.pendingProps.children,e),La(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&Q&&((a=n=$)&&(n=Ym(n,t.type,t.pendingProps,Fl),n!==null?(t.stateNode=n,bl=t,$=Il(n.firstChild),Fl=!1,a=!0):a=!1),a||$t(t)),Ni(t),a=t.type,u=t.pendingProps,i=l!==null?l.memoizedProps:null,n=u.children,ys(a,u)?n=null:i!==null&&ys(a,i)&&(t.flags|=32),t.memoizedState!==null&&(a=Fs(l,t,Gd,null,null,e),In._currentValue=a),La(l,t),gl(l,t,n,e),t.child;case 6:return l===null&&Q&&((l=e=$)&&(e=Mm(e,t.pendingProps,Fl),e!==null?(t.stateNode=e,bl=t,$=null,l=!0):l=!1),l||$t(t)),null;case 13:return If(l,t,e);case 4:return Ka(t,t.stateNode.containerInfo),n=t.pendingProps,l===null?t.child=ge(t,null,n,e):gl(l,t,n,e),t.child;case 11:return yo(l,t,t.type,t.pendingProps,e);case 7:return gl(l,t,t.pendingProps,e),t.child;case 8:return gl(l,t,t.pendingProps.children,e),t.child;case 12:return gl(l,t,t.pendingProps.children,e),t.child;case 10:return n=t.pendingProps,Dt(t,t.type,n.value),gl(l,t,n.children,e),t.child;case 9:return a=t.type._context,n=t.pendingProps.children,ye(t),a=pl(a),n=n(a),t.flags|=1,gl(l,t,n,e),t.child;case 14:return go(l,t,t.type,t.pendingProps,e);case 15:return Ff(l,t,t.type,t.pendingProps,e);case 19:return Pf(l,t,e);case 31:return $d(l,t,e);case 22:return $f(l,t,e,t.pendingProps);case 24:return ye(t),n=pl(cl),l===null?(a=Vs(),a===null&&(a=J,u=Zs(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=e),a=u),t.memoizedState={parent:n,cache:a},Js(t),Dt(t,cl,a)):(l.lanes&e&&(Wi(l,t),Bn(t,null,null,e),Nn()),a=l.memoizedState,u=t.memoizedState,a.parent!==n?(a={parent:n,cache:n},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Dt(t,cl,n)):(n=u.cache,Dt(t,cl,n),n!==a.cache&&Ji(t,[cl],e,!0))),gl(l,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(b(156,t.tag))}function _t(l){l.flags|=4}function ri(l,t,e,n,a){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(a&335544128)===a)if(l.stateNode.complete)l.flags|=8192;else if(A0())l.flags|=8192;else throw re=eu,ks}else l.flags&=-16777217}function zo(l,t){if(t.type!=="stylesheet"||t.state.loading&4)l.flags&=-16777217;else if(l.flags|=16777216,!J0(t))if(A0())l.flags|=8192;else throw re=eu,ks}function Ea(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?A_():536870912,l.lanes|=t,tn|=t)}function pn(l,t){if(!Q)switch(l.tailMode){case"hidden":t=l.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?l.tail=null:e.sibling=null;break;case"collapsed":e=l.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:n.sibling=null}}function F(l){var t=l.alternate!==null&&l.alternate.child===l.child,e=0,n=0;if(t)for(var a=l.child;a!==null;)e|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=l,a=a.sibling;else for(a=l.child;a!==null;)e|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=l,a=a.sibling;return l.subtreeFlags|=n,l.childLanes=e,t}function Pd(l,t,e){var n=t.pendingProps;switch(Gs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return F(t),null;case 1:return F(t),null;case 3:return e=t.stateNode,n=null,l!==null&&(n=l.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),vt(cl),We(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(l===null||l.child===null)&&(Ae(t)?_t(t):l===null||l.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ni())),F(t),null;case 26:var a=t.type,u=t.memoizedState;return l===null?(_t(t),u!==null?(F(t),zo(t,u)):(F(t),ri(t,a,null,n,e))):u?u!==l.memoizedState?(_t(t),F(t),zo(t,u)):(F(t),t.flags&=-16777217):(l=l.memoizedProps,l!==n&&_t(t),F(t),ri(t,a,l,n,e)),null;case 27:if(Wa(t),e=Lt.current,a=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==n&&_t(t);else{if(!n){if(t.stateNode===null)throw Error(b(166));return F(t),null}l=it.current,Ae(t)?$c(t):(l=Z0(a,n,e),t.stateNode=l,_t(t))}return F(t),null;case 5:if(Wa(t),a=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==n&&_t(t);else{if(!n){if(t.stateNode===null)throw Error(b(166));return F(t),null}if(u=it.current,Ae(t))$c(t);else{var i=gu(Lt.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}u[hl]=t,u[Ul]=n;l:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break l;for(;i.sibling===null;){if(i.return===null||i.return===t)break l;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;l:switch(vl(u,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break l;case"img":n=!0;break l;default:n=!1}n&&_t(t)}}return F(t),ri(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,e),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==n&&_t(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(b(166));if(l=Lt.current,Ae(t)){if(l=t.stateNode,e=t.memoizedProps,n=null,a=bl,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}l[hl]=t,l=!!(l.nodeValue===e||n!==null&&n.suppressHydrationWarning===!0||w0(l.nodeValue,e)),l||$t(t,!0)}else l=gu(l).createTextNode(n),l[hl]=t,t.stateNode=l}return F(t),null;case 31:if(e=t.memoizedState,l===null||l.memoizedState!==null){if(n=Ae(t),e!==null){if(l===null){if(!n)throw Error(b(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(b(557));l[hl]=t}else me(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;F(t),l=!1}else e=ni(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=e),l=!0;if(!l)return t.flags&256?(Nl(t),t):(Nl(t),null);if(t.flags&128)throw Error(b(558))}return F(t),null;case 13:if(n=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(a=Ae(t),n!==null&&n.dehydrated!==null){if(l===null){if(!a)throw Error(b(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(b(317));a[hl]=t}else me(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;F(t),a=!1}else a=ni(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Nl(t),t):(Nl(t),null)}return Nl(t),t.flags&128?(t.lanes=e,t):(e=n!==null,l=l!==null&&l.memoizedState!==null,e&&(n=t.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==a&&(n.flags|=2048)),e!==l&&e&&(t.child.flags|=8192),Ea(t,t.updateQueue),F(t),null);case 4:return We(),l===null&&gc(t.stateNode.containerInfo),F(t),null;case 10:return vt(t.type),F(t),null;case 19:if(ml(nl),n=t.memoizedState,n===null)return F(t),null;if(a=(t.flags&128)!==0,u=n.rendering,u===null)if(a)pn(n,!1);else{if(el!==0||l!==null&&l.flags&128)for(l=t.child;l!==null;){if(u=au(l),u!==null){for(t.flags|=128,pn(n,!1),l=u.updateQueue,t.updateQueue=l,Ea(t,l),t.subtreeFlags=0,l=e,e=t.child;e!==null;)lf(e,l),e=e.sibling;return K(nl,nl.current&1|2),Q&&mt(t,n.treeForkCount),t.child}l=l.sibling}n.tail!==null&&jl()>_u&&(t.flags|=128,a=!0,pn(n,!1),t.lanes=4194304)}else{if(!a)if(l=au(u),l!==null){if(t.flags|=128,a=!0,l=l.updateQueue,t.updateQueue=l,Ea(t,l),pn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!Q)return F(t),null}else 2*jl()-n.renderingStartTime>_u&&e!==536870912&&(t.flags|=128,a=!0,pn(n,!1),t.lanes=4194304);n.isBackwards?(u.sibling=t.child,t.child=u):(l=n.last,l!==null?l.sibling=u:t.child=u,n.last=u)}return n.tail!==null?(l=n.tail,n.rendering=l,n.tail=l.sibling,n.renderingStartTime=jl(),l.sibling=null,e=nl.current,K(nl,a?e&1|2:e&1),Q&&mt(t,n.treeForkCount),l):(F(t),null);case 22:case 23:return Nl(t),Ks(),n=t.memoizedState!==null,l!==null?l.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?e&536870912&&!(t.flags&128)&&(F(t),t.subtreeFlags&6&&(t.flags|=8192)):F(t),e=t.updateQueue,e!==null&&Ea(t,e.retryQueue),e=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==e&&(t.flags|=2048),l!==null&&ml(fe),null;case 24:return e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),vt(cl),F(t),null;case 25:return null;case 30:return null}throw Error(b(156,t.tag))}function lm(l,t){switch(Gs(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return vt(cl),We(),l=t.flags,l&65536&&!(l&128)?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return Wa(t),null;case 31:if(t.memoizedState!==null){if(Nl(t),t.alternate===null)throw Error(b(340));me()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(Nl(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(b(340));me()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return ml(nl),null;case 4:return We(),null;case 10:return vt(t.type),null;case 22:case 23:return Nl(t),Ks(),l!==null&&ml(fe),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return vt(cl),null;case 25:return null;default:return null}}function t0(l,t){switch(Gs(t),t.tag){case 3:vt(cl),We();break;case 26:case 27:case 5:Wa(t);break;case 4:We();break;case 31:t.memoizedState!==null&&Nl(t);break;case 13:Nl(t);break;case 19:ml(nl);break;case 10:vt(t.type);break;case 22:case 23:Nl(t),Ks(),l!==null&&ml(fe);break;case 24:vt(cl)}}function oa(l,t){try{var e=t.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var a=n.next;e=a;do{if((e.tag&l)===l){n=void 0;var u=e.create,i=e.inst;n=u(),i.destroy=n}e=e.next}while(e!==a)}}catch(s){G(t,t.return,s)}}function It(l,t,e){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var u=a.next;n=u;do{if((n.tag&l)===l){var i=n.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,a=t;var c=e,f=s;try{f()}catch(g){G(a,c,g)}}}n=n.next}while(n!==u)}}catch(g){G(t,t.return,g)}}function e0(l){var t=l.updateQueue;if(t!==null){var e=l.stateNode;try{ff(t,e)}catch(n){G(l,l.return,n)}}}function n0(l,t,e){e.props=be(l.type,l.memoizedProps),e.state=l.memoizedState;try{e.componentWillUnmount()}catch(n){G(l,t,n)}}function jn(l,t){try{var e=l.ref;if(e!==null){switch(l.tag){case 26:case 27:case 5:var n=l.stateNode;break;case 30:n=l.stateNode;break;default:n=l.stateNode}typeof e=="function"?l.refCleanup=e(n):e.current=n}}catch(a){G(l,t,a)}}function ut(l,t){var e=l.ref,n=l.refCleanup;if(e!==null)if(typeof n=="function")try{n()}catch(a){G(l,t,a)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(a){G(l,t,a)}else e.current=null}function a0(l){var t=l.type,e=l.memoizedProps,n=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&n.focus();break l;case"img":e.src?n.src=e.src:e.srcSet&&(n.srcset=e.srcSet)}}catch(a){G(l,l.return,a)}}function di(l,t,e){try{var n=l.stateNode;Sm(n,l.type,e,t),n[Ul]=t}catch(a){G(l,l.return,a)}}function u0(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&te(l.type)||l.tag===4}function mi(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||u0(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&te(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function is(l,t,e){var n=l.tag;if(n===5||n===6)l=l.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(l,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(l),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=ht));else if(n!==4&&(n===27&&te(l.type)&&(e=l.stateNode,t=null),l=l.child,l!==null))for(is(l,t,e),l=l.sibling;l!==null;)is(l,t,e),l=l.sibling}function ou(l,t,e){var n=l.tag;if(n===5||n===6)l=l.stateNode,t?e.insertBefore(l,t):e.appendChild(l);else if(n!==4&&(n===27&&te(l.type)&&(e=l.stateNode),l=l.child,l!==null))for(ou(l,t,e),l=l.sibling;l!==null;)ou(l,t,e),l=l.sibling}function i0(l){var t=l.stateNode,e=l.memoizedProps;try{for(var n=l.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);vl(t,n,e),t[hl]=l,t[Ul]=e}catch(u){G(l,l.return,u)}}var yt=!1,sl=!1,yi=!1,Ao=typeof WeakSet=="function"?WeakSet:Set,rl=null;function tm(l,t){if(l=l.containerInfo,ds=vu,l=k_(l),Rs(l)){if("selectionStart"in l)var e={start:l.selectionStart,end:l.selectionEnd};else l:{e=(e=l.ownerDocument)&&e.defaultView||window;var n=e.getSelection&&e.getSelection();if(n&&n.rangeCount!==0){e=n.anchorNode;var a=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{e.nodeType,u.nodeType}catch{e=null;break l}var i=0,s=-1,c=-1,f=0,g=0,y=l,r=null;t:for(;;){for(var m;y!==e||a!==0&&y.nodeType!==3||(s=i+a),y!==u||n!==0&&y.nodeType!==3||(c=i+n),y.nodeType===3&&(i+=y.nodeValue.length),(m=y.firstChild)!==null;)r=y,y=m;for(;;){if(y===l)break t;if(r===e&&++f===a&&(s=i),r===u&&++g===n&&(c=i),(m=y.nextSibling)!==null)break;y=r,r=y.parentNode}y=m}e=s===-1||c===-1?null:{start:s,end:c}}else e=null}e=e||{start:0,end:0}}else e=null;for(ms={focusedElem:l,selectionRange:e},vu=!1,rl=t;rl!==null;)if(t=rl,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,rl=l;else for(;rl!==null;){switch(t=rl,u=t.alternate,l=t.flags,t.tag){case 0:if(l&4&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(e=0;e<l.length;e++)a=l[e],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(l&1024&&u!==null){l=void 0,e=t,a=u.memoizedProps,u=u.memoizedState,n=e.stateNode;try{var p=be(e.type,a);l=n.getSnapshotBeforeUpdate(p,u),n.__reactInternalSnapshotBeforeUpdate=l}catch(z){G(e,e.return,z)}}break;case 3:if(l&1024){if(l=t.stateNode.containerInfo,e=l.nodeType,e===9)gs(l);else if(e===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":gs(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(l&1024)throw Error(b(163))}if(l=t.sibling,l!==null){l.return=t.return,rl=l;break}rl=t.return}}function s0(l,t,e){var n=e.flags;switch(e.tag){case 0:case 11:case 15:rt(l,e),n&4&&oa(5,e);break;case 1:if(rt(l,e),n&4)if(l=e.stateNode,t===null)try{l.componentDidMount()}catch(i){G(e,e.return,i)}else{var a=be(e.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(a,t,l.__reactInternalSnapshotBeforeUpdate)}catch(i){G(e,e.return,i)}}n&64&&e0(e),n&512&&jn(e,e.return);break;case 3:if(rt(l,e),n&64&&(l=e.updateQueue,l!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{ff(l,t)}catch(i){G(e,e.return,i)}}break;case 27:t===null&&n&4&&i0(e);case 26:case 5:rt(l,e),t===null&&n&4&&a0(e),n&512&&jn(e,e.return);break;case 12:rt(l,e);break;case 31:rt(l,e),n&4&&_0(l,e);break;case 13:rt(l,e),n&4&&f0(l,e),n&64&&(l=e.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(e=_m.bind(null,e),Um(l,e))));break;case 22:if(n=e.memoizedState!==null||yt,!n){t=t!==null&&t.memoizedState!==null||sl,a=yt;var u=sl;yt=n,(sl=t)&&!u?dt(l,e,(e.subtreeFlags&8772)!==0):rt(l,e),yt=a,sl=u}break;case 30:break;default:rt(l,e)}}function c0(l){var t=l.alternate;t!==null&&(l.alternate=null,c0(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&Ds(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var ll=null,Ol=!1;function ft(l,t,e){for(e=e.child;e!==null;)o0(l,t,e),e=e.sibling}function o0(l,t,e){if(Xl&&typeof Xl.onCommitFiberUnmount=="function")try{Xl.onCommitFiberUnmount(ea,e)}catch{}switch(e.tag){case 26:sl||ut(e,t),ft(l,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:sl||ut(e,t);var n=ll,a=Ol;te(e.type)&&(ll=e.stateNode,Ol=!1),ft(l,t,e),wn(e.stateNode),ll=n,Ol=a;break;case 5:sl||ut(e,t);case 6:if(n=ll,a=Ol,ll=null,ft(l,t,e),ll=n,Ol=a,ll!==null)if(Ol)try{(ll.nodeType===9?ll.body:ll.nodeName==="HTML"?ll.ownerDocument.body:ll).removeChild(e.stateNode)}catch(u){G(e,t,u)}else try{ll.removeChild(e.stateNode)}catch(u){G(e,t,u)}break;case 18:ll!==null&&(Ol?(l=ll,Xo(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.stateNode),un(l)):Xo(ll,e.stateNode));break;case 4:n=ll,a=Ol,ll=e.stateNode.containerInfo,Ol=!0,ft(l,t,e),ll=n,Ol=a;break;case 0:case 11:case 14:case 15:It(2,e,t),sl||It(4,e,t),ft(l,t,e);break;case 1:sl||(ut(e,t),n=e.stateNode,typeof n.componentWillUnmount=="function"&&n0(e,t,n)),ft(l,t,e);break;case 21:ft(l,t,e);break;case 22:sl=(n=sl)||e.memoizedState!==null,ft(l,t,e),sl=n;break;default:ft(l,t,e)}}function _0(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{un(l)}catch(e){G(t,t.return,e)}}}function f0(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{un(l)}catch(e){G(t,t.return,e)}}function em(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Ao),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Ao),t;default:throw Error(b(435,l.tag))}}function Oa(l,t){var e=em(l);t.forEach(function(n){if(!e.has(n)){e.add(n);var a=fm.bind(null,l,n);n.then(a,a)}})}function Tl(l,t){var e=t.deletions;if(e!==null)for(var n=0;n<e.length;n++){var a=e[n],u=l,i=t,s=i;l:for(;s!==null;){switch(s.tag){case 27:if(te(s.type)){ll=s.stateNode,Ol=!1;break l}break;case 5:ll=s.stateNode,Ol=!1;break l;case 3:case 4:ll=s.stateNode.containerInfo,Ol=!0;break l}s=s.return}if(ll===null)throw Error(b(160));o0(u,i,a),ll=null,Ol=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)r0(t,l),t=t.sibling}var tt=null;function r0(l,t){var e=l.alternate,n=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Tl(t,l),El(l),n&4&&(It(3,l,l.return),oa(3,l),It(5,l,l.return));break;case 1:Tl(t,l),El(l),n&512&&(sl||e===null||ut(e,e.return)),n&64&&yt&&(l=l.updateQueue,l!==null&&(n=l.callbacks,n!==null&&(e=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=e===null?n:e.concat(n))));break;case 26:var a=tt;if(Tl(t,l),El(l),n&512&&(sl||e===null||ut(e,e.return)),n&4){var u=e!==null?e.memoizedState:null;if(n=l.memoizedState,e===null)if(n===null)if(l.stateNode===null){l:{n=l.type,e=l.memoizedProps,a=a.ownerDocument||a;t:switch(n){case"title":u=a.getElementsByTagName("title")[0],(!u||u[ua]||u[hl]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(n),a.head.insertBefore(u,a.querySelector("head > title"))),vl(u,n,e),u[hl]=l,dl(u),n=u;break l;case"link":var i=Zo("link","href",a).get(n+(e.href||""));if(i){for(var s=0;s<i.length;s++)if(u=i[s],u.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&u.getAttribute("rel")===(e.rel==null?null:e.rel)&&u.getAttribute("title")===(e.title==null?null:e.title)&&u.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(s,1);break t}}u=a.createElement(n),vl(u,n,e),a.head.appendChild(u);break;case"meta":if(i=Zo("meta","content",a).get(n+(e.content||""))){for(s=0;s<i.length;s++)if(u=i[s],u.getAttribute("content")===(e.content==null?null:""+e.content)&&u.getAttribute("name")===(e.name==null?null:e.name)&&u.getAttribute("property")===(e.property==null?null:e.property)&&u.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&u.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(s,1);break t}}u=a.createElement(n),vl(u,n,e),a.head.appendChild(u);break;default:throw Error(b(468,n))}u[hl]=l,dl(u),n=u}l.stateNode=n}else Vo(a,l.type,l.stateNode);else l.stateNode=Go(a,n,l.memoizedProps);else u!==n?(u===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):u.count--,n===null?Vo(a,l.type,l.stateNode):Go(a,n,l.memoizedProps)):n===null&&l.stateNode!==null&&di(l,l.memoizedProps,e.memoizedProps)}break;case 27:Tl(t,l),El(l),n&512&&(sl||e===null||ut(e,e.return)),e!==null&&n&4&&di(l,l.memoizedProps,e.memoizedProps);break;case 5:if(Tl(t,l),El(l),n&512&&(sl||e===null||ut(e,e.return)),l.flags&32){a=l.stateNode;try{$e(a,"")}catch(p){G(l,l.return,p)}}n&4&&l.stateNode!=null&&(a=l.memoizedProps,di(l,a,e!==null?e.memoizedProps:a)),n&1024&&(yi=!0);break;case 6:if(Tl(t,l),El(l),n&4){if(l.stateNode===null)throw Error(b(162));n=l.memoizedProps,e=l.stateNode;try{e.nodeValue=n}catch(p){G(l,l.return,p)}}break;case 3:if(Za=null,a=tt,tt=hu(t.containerInfo),Tl(t,l),tt=a,El(l),n&4&&e!==null&&e.memoizedState.isDehydrated)try{un(t.containerInfo)}catch(p){G(l,l.return,p)}yi&&(yi=!1,d0(l));break;case 4:n=tt,tt=hu(l.stateNode.containerInfo),Tl(t,l),El(l),tt=n;break;case 12:Tl(t,l),El(l);break;case 31:Tl(t,l),El(l),n&4&&(n=l.updateQueue,n!==null&&(l.updateQueue=null,Oa(l,n)));break;case 13:Tl(t,l),El(l),l.child.flags&8192&&l.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(ju=jl()),n&4&&(n=l.updateQueue,n!==null&&(l.updateQueue=null,Oa(l,n)));break;case 22:a=l.memoizedState!==null;var c=e!==null&&e.memoizedState!==null,f=yt,g=sl;if(yt=f||a,sl=g||c,Tl(t,l),sl=g,yt=f,El(l),n&8192)l:for(t=l.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(e===null||c||yt||sl||ce(l)),e=null,t=l;;){if(t.tag===5||t.tag===26){if(e===null){c=e=t;try{if(u=c.stateNode,a)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=c.stateNode;var y=c.memoizedProps.style,r=y!=null&&y.hasOwnProperty("display")?y.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(p){G(c,c.return,p)}}}else if(t.tag===6){if(e===null){c=t;try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(p){G(c,c.return,p)}}}else if(t.tag===18){if(e===null){c=t;try{var m=c.stateNode;a?Ro(m,!0):Ro(c.stateNode,!1)}catch(p){G(c,c.return,p)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=l.updateQueue,n!==null&&(e=n.retryQueue,e!==null&&(n.retryQueue=null,Oa(l,e))));break;case 19:Tl(t,l),El(l),n&4&&(n=l.updateQueue,n!==null&&(l.updateQueue=null,Oa(l,n)));break;case 30:break;case 21:break;default:Tl(t,l),El(l)}}function El(l){var t=l.flags;if(t&2){try{for(var e,n=l.return;n!==null;){if(u0(n)){e=n;break}n=n.return}if(e==null)throw Error(b(160));switch(e.tag){case 27:var a=e.stateNode,u=mi(l);ou(l,u,a);break;case 5:var i=e.stateNode;e.flags&32&&($e(i,""),e.flags&=-33);var s=mi(l);ou(l,s,i);break;case 3:case 4:var c=e.stateNode.containerInfo,f=mi(l);is(l,f,c);break;default:throw Error(b(161))}}catch(g){G(l,l.return,g)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function d0(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;d0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function rt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)s0(l,t.alternate,t),t=t.sibling}function ce(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:It(4,t,t.return),ce(t);break;case 1:ut(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&n0(t,t.return,e),ce(t);break;case 27:wn(t.stateNode);case 26:case 5:ut(t,t.return),ce(t);break;case 22:t.memoizedState===null&&ce(t);break;case 30:ce(t);break;default:ce(t)}l=l.sibling}}function dt(l,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,a=l,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:dt(a,u,e),oa(4,u);break;case 1:if(dt(a,u,e),n=u,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(f){G(n,n.return,f)}if(n=u,a=n.updateQueue,a!==null){var s=n.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)_f(c[a],s)}catch(f){G(n,n.return,f)}}e&&i&64&&e0(u),jn(u,u.return);break;case 27:i0(u);case 26:case 5:dt(a,u,e),e&&n===null&&i&4&&a0(u),jn(u,u.return);break;case 12:dt(a,u,e);break;case 31:dt(a,u,e),e&&i&4&&_0(a,u);break;case 13:dt(a,u,e),e&&i&4&&f0(a,u);break;case 22:u.memoizedState===null&&dt(a,u,e),jn(u,u.return);break;case 30:break;default:dt(a,u,e)}t=t.sibling}}function _c(l,t){var e=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==e&&(l!=null&&l.refCount++,e!=null&&sa(e))}function fc(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&sa(l))}function lt(l,t,e,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)m0(l,t,e,n),t=t.sibling}function m0(l,t,e,n){var a=t.flags;switch(t.tag){case 0:case 11:case 15:lt(l,t,e,n),a&2048&&oa(9,t);break;case 1:lt(l,t,e,n);break;case 3:lt(l,t,e,n),a&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&sa(l)));break;case 12:if(a&2048){lt(l,t,e,n),l=t.stateNode;try{var u=t.memoizedProps,i=u.id,s=u.onPostCommit;typeof s=="function"&&s(i,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(c){G(t,t.return,c)}}else lt(l,t,e,n);break;case 31:lt(l,t,e,n);break;case 13:lt(l,t,e,n);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?lt(l,t,e,n):Xn(l,t):u._visibility&2?lt(l,t,e,n):(u._visibility|=2,Ye(l,t,e,n,(t.subtreeFlags&10256)!==0||!1)),a&2048&&_c(i,t);break;case 24:lt(l,t,e,n),a&2048&&fc(t.alternate,t);break;default:lt(l,t,e,n)}}function Ye(l,t,e,n,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=l,i=t,s=e,c=n,f=i.flags;switch(i.tag){case 0:case 11:case 15:Ye(u,i,s,c,a),oa(8,i);break;case 23:break;case 22:var g=i.stateNode;i.memoizedState!==null?g._visibility&2?Ye(u,i,s,c,a):Xn(u,i):(g._visibility|=2,Ye(u,i,s,c,a)),a&&f&2048&&_c(i.alternate,i);break;case 24:Ye(u,i,s,c,a),a&&f&2048&&fc(i.alternate,i);break;default:Ye(u,i,s,c,a)}t=t.sibling}}function Xn(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=l,n=t,a=n.flags;switch(n.tag){case 22:Xn(e,n),a&2048&&_c(n.alternate,n);break;case 24:Xn(e,n),a&2048&&fc(n.alternate,n);break;default:Xn(e,n)}t=t.sibling}}var En=8192;function Te(l,t,e){if(l.subtreeFlags&En)for(l=l.child;l!==null;)y0(l,t,e),l=l.sibling}function y0(l,t,e){switch(l.tag){case 26:Te(l,t,e),l.flags&En&&l.memoizedState!==null&&qm(e,tt,l.memoizedState,l.memoizedProps);break;case 5:Te(l,t,e);break;case 3:case 4:var n=tt;tt=hu(l.stateNode.containerInfo),Te(l,t,e),tt=n;break;case 22:l.memoizedState===null&&(n=l.alternate,n!==null&&n.memoizedState!==null?(n=En,En=16777216,Te(l,t,e),En=n):Te(l,t,e));break;default:Te(l,t,e)}}function g0(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function vn(l){var t=l.deletions;if(l.flags&16){if(t!==null)for(var e=0;e<t.length;e++){var n=t[e];rl=n,b0(n,l)}g0(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)h0(l),l=l.sibling}function h0(l){switch(l.tag){case 0:case 11:case 15:vn(l),l.flags&2048&&It(9,l,l.return);break;case 3:vn(l);break;case 12:vn(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,qa(l)):vn(l);break;default:vn(l)}}function qa(l){var t=l.deletions;if(l.flags&16){if(t!==null)for(var e=0;e<t.length;e++){var n=t[e];rl=n,b0(n,l)}g0(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:It(8,t,t.return),qa(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,qa(t));break;default:qa(t)}l=l.sibling}}function b0(l,t){for(;rl!==null;){var e=rl;switch(e.tag){case 0:case 11:case 15:It(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var n=e.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:sa(e.memoizedState.cache)}if(n=e.child,n!==null)n.return=e,rl=n;else l:for(e=l;rl!==null;){n=rl;var a=n.sibling,u=n.return;if(c0(n),n===e){rl=null;break l}if(a!==null){a.return=u,rl=a;break l}rl=u}}}var nm={getCacheForType:function(l){var t=pl(cl),e=t.data.get(l);return e===void 0&&(e=l(),t.data.set(l,e)),e},cacheSignal:function(){return pl(cl).controller.signal}},am=typeof WeakMap=="function"?WeakMap:Map,w=0,J=null,X=null,R=0,q=0,Dl=null,Rt=!1,rn=!1,rc=!1,Et=0,el=0,Pt=0,de=0,dc=0,Hl=0,tn=0,Rn=null,Yl=null,ss=!1,ju=0,p0=0,_u=1/0,fu=null,Vt=null,_l=0,kt=null,en=null,xt=0,cs=0,os=null,v0=null,Qn=0,_s=null;function Ql(){return w&2&&R!==0?R&-R:E.T!==null?yc():Y_()}function x0(){if(Hl===0)if(!(R&536870912)||Q){var l=pa;pa<<=1,!(pa&3932160)&&(pa=262144),Hl=l}else Hl=536870912;return l=Ll.current,l!==null&&(l.flags|=32),Hl}function Ml(l,t,e){(l===J&&(q===2||q===9)||l.cancelPendingCommit!==null)&&(nn(l,0),Qt(l,R,Hl,!1)),aa(l,e),(!(w&2)||l!==J)&&(l===J&&(!(w&2)&&(de|=e),el===4&&Qt(l,R,Hl,!1)),ct(l))}function S0(l,t,e){if(w&6)throw Error(b(327));var n=!e&&(t&127)===0&&(t&l.expiredLanes)===0||na(l,t),a=n?sm(l,t):gi(l,t,!0),u=n;do{if(a===0){rn&&!n&&Qt(l,t,0,!1);break}else{if(e=l.current.alternate,u&&!um(e)){a=gi(l,t,!1),u=!1;continue}if(a===2){if(u=t,l.errorRecoveryDisabledLanes&u)var i=0;else i=l.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;l:{var s=l;a=Rn;var c=s.current.memoizedState.isDehydrated;if(c&&(nn(s,i).flags|=256),i=gi(s,i,!1),i!==2){if(rc&&!c){s.errorRecoveryDisabledLanes|=u,de|=u,a=4;break l}u=Yl,Yl=a,u!==null&&(Yl===null?Yl=u:Yl.push.apply(Yl,u))}a=i}if(u=!1,a!==2)continue}}if(a===1){nn(l,0),Qt(l,t,0,!0);break}l:{switch(n=l,u=a,u){case 0:case 1:throw Error(b(345));case 4:if((t&4194048)!==t)break;case 6:Qt(n,t,Hl,!Rt);break l;case 2:Yl=null;break;case 3:case 5:break;default:throw Error(b(329))}if((t&62914560)===t&&(a=ju+300-jl(),10<a)){if(Qt(n,t,Hl,!Rt),Tu(n,0,!0)!==0)break l;xt=t,n.timeoutHandle=q0(To.bind(null,n,e,Yl,fu,ss,t,Hl,de,tn,Rt,u,"Throttled",-0,0),a);break l}To(n,e,Yl,fu,ss,t,Hl,de,tn,Rt,u,null,-0,0)}}break}while(!0);ct(l)}function To(l,t,e,n,a,u,i,s,c,f,g,y,r,m){if(l.timeoutHandle=-1,y=t.subtreeFlags,y&8192||(y&16785408)===16785408){y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ht},y0(t,u,y);var p=(u&62914560)===u?ju-jl():(u&4194048)===u?p0-jl():0;if(p=Gm(y,p),p!==null){xt=u,l.cancelPendingCommit=p(Oo.bind(null,l,t,u,e,n,a,i,s,c,g,y,null,r,m)),Qt(l,u,i,!f);return}}Oo(l,t,u,e,n,a,i,s,c)}function um(l){for(var t=l;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var n=0;n<e.length;n++){var a=e[n],u=a.getSnapshot;a=a.value;try{if(!wl(u(),a))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(l,t,e,n){t&=~dc,t&=~de,l.suspendedLanes|=t,l.pingedLanes&=~t,n&&(l.warmLanes|=t),n=l.expirationTimes;for(var a=t;0<a;){var u=31-Rl(a),i=1<<u;n[u]=-1,a&=~i}e!==0&&T_(l,e,t)}function Xu(){return w&6?!0:(_a(0),!1)}function mc(){if(X!==null){if(q===0)var l=X.return;else l=X,bt=ze=null,Ps(l),ke=null,Jn=0,l=X;for(;l!==null;)t0(l.alternate,l),l=l.return;X=null}}function nn(l,t){var e=l.timeoutHandle;e!==-1&&(l.timeoutHandle=-1,Tm(e)),e=l.cancelPendingCommit,e!==null&&(l.cancelPendingCommit=null,e()),xt=0,mc(),J=l,X=e=pt(l.current,null),R=t,q=0,Dl=null,Rt=!1,rn=na(l,t),rc=!1,tn=Hl=dc=de=Pt=el=0,Yl=Rn=null,ss=!1,t&8&&(t|=t&32);var n=l.entangledLanes;if(n!==0)for(l=l.entanglements,n&=t;0<n;){var a=31-Rl(n),u=1<<a;t|=l[a],n&=~u}return Et=t,Mu(),e}function z0(l,t){Y=null,E.H=Wn,t===fn||t===Cu?(t=eo(),q=3):t===ks?(t=eo(),q=4):q=t===cc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dl=t,X===null&&(el=1,su(l,Wl(t,l.current)))}function A0(){var l=Ll.current;return l===null?!0:(R&4194048)===R?$l===null:(R&62914560)===R||R&536870912?l===$l:!1}function T0(){var l=E.H;return E.H=Wn,l===null?Wn:l}function E0(){var l=E.A;return E.A=nm,l}function ru(){el=4,Rt||(R&4194048)!==R&&Ll.current!==null||(rn=!0),!(Pt&134217727)&&!(de&134217727)||J===null||Qt(J,R,Hl,!1)}function gi(l,t,e){var n=w;w|=2;var a=T0(),u=E0();(J!==l||R!==t)&&(fu=null,nn(l,t)),t=!1;var i=el;l:do try{if(q!==0&&X!==null){var s=X,c=Dl;switch(q){case 8:mc(),i=6;break l;case 3:case 2:case 9:case 6:Ll.current===null&&(t=!0);var f=q;if(q=0,Dl=null,Le(l,s,c,f),e&&rn){i=0;break l}break;default:f=q,q=0,Dl=null,Le(l,s,c,f)}}im(),i=el;break}catch(g){z0(l,g)}while(!0);return t&&l.shellSuspendCounter++,bt=ze=null,w=n,E.H=a,E.A=u,X===null&&(J=null,R=0,Mu()),i}function im(){for(;X!==null;)O0(X)}function sm(l,t){var e=w;w|=2;var n=T0(),a=E0();J!==l||R!==t?(fu=null,_u=jl()+500,nn(l,t)):rn=na(l,t);l:do try{if(q!==0&&X!==null){t=X;var u=Dl;t:switch(q){case 1:q=0,Dl=null,Le(l,t,u,1);break;case 2:case 9:if(to(u)){q=0,Dl=null,Eo(t);break}t=function(){q!==2&&q!==9||J!==l||(q=7),ct(l)},u.then(t,t);break l;case 3:q=7;break l;case 4:q=5;break l;case 7:to(u)?(q=0,Dl=null,Eo(t)):(q=0,Dl=null,Le(l,t,u,7));break;case 5:var i=null;switch(X.tag){case 26:i=X.memoizedState;case 5:case 27:var s=X;if(i?J0(i):s.stateNode.complete){q=0,Dl=null;var c=s.sibling;if(c!==null)X=c;else{var f=s.return;f!==null?(X=f,Ru(f)):X=null}break t}}q=0,Dl=null,Le(l,t,u,5);break;case 6:q=0,Dl=null,Le(l,t,u,6);break;case 8:mc(),el=6;break l;default:throw Error(b(462))}}cm();break}catch(g){z0(l,g)}while(!0);return bt=ze=null,E.H=n,E.A=a,w=e,X!==null?0:(J=null,R=0,Mu(),el)}function cm(){for(;X!==null&&!Cr();)O0(X)}function O0(l){var t=l0(l.alternate,l,Et);l.memoizedProps=l.pendingProps,t===null?Ru(l):X=t}function Eo(l){var t=l,e=t.alternate;switch(t.tag){case 15:case 0:t=po(e,t,t.pendingProps,t.type,void 0,R);break;case 11:t=po(e,t,t.pendingProps,t.type.render,t.ref,R);break;case 5:Ps(t);default:t0(e,t),t=X=lf(t,Et),t=l0(e,t,Et)}l.memoizedProps=l.pendingProps,t===null?Ru(l):X=t}function Le(l,t,e,n){bt=ze=null,Ps(t),ke=null,Jn=0;var a=t.return;try{if(Fd(l,a,t,e,R)){el=1,su(l,Wl(e,l.current)),X=null;return}}catch(u){if(a!==null)throw X=a,u;el=1,su(l,Wl(e,l.current)),X=null;return}t.flags&32768?(Q||n===1?l=!0:rn||R&536870912?l=!1:(Rt=l=!0,(n===2||n===9||n===3||n===6)&&(n=Ll.current,n!==null&&n.tag===13&&(n.flags|=16384))),Y0(t,l)):Ru(t)}function Ru(l){var t=l;do{if(t.flags&32768){Y0(t,Rt);return}l=t.return;var e=Pd(t.alternate,t,Et);if(e!==null){X=e;return}if(t=t.sibling,t!==null){X=t;return}X=t=l}while(t!==null);el===0&&(el=5)}function Y0(l,t){do{var e=lm(l.alternate,l);if(e!==null){e.flags&=32767,X=e;return}if(e=l.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(l=l.sibling,l!==null)){X=l;return}X=l=e}while(l!==null);el=6,X=null}function Oo(l,t,e,n,a,u,i,s,c){l.cancelPendingCommit=null;do Qu();while(_l!==0);if(w&6)throw Error(b(327));if(t!==null){if(t===l.current)throw Error(b(177));if(u=t.lanes|t.childLanes,u|=Qs,Lr(l,e,u,i,s,c),l===J&&(X=J=null,R=0),en=t,kt=l,xt=e,cs=u,os=a,v0=n,t.subtreeFlags&10256||t.flags&10256?(l.callbackNode=null,l.callbackPriority=0,rm(Fa,function(){return N0(),null})):(l.callbackNode=null,l.callbackPriority=0),n=(t.flags&13878)!==0,t.subtreeFlags&13878||n){n=E.T,E.T=null,a=L.p,L.p=2,i=w,w|=4;try{tm(l,t,e)}finally{w=i,L.p=a,E.T=n}}_l=1,M0(),U0(),C0()}}function M0(){if(_l===1){_l=0;var l=kt,t=en,e=(t.flags&13878)!==0;if(t.subtreeFlags&13878||e){e=E.T,E.T=null;var n=L.p;L.p=2;var a=w;w|=4;try{r0(t,l);var u=ms,i=k_(l.containerInfo),s=u.focusedElem,c=u.selectionRange;if(i!==s&&s&&s.ownerDocument&&V_(s.ownerDocument.documentElement,s)){if(c!==null&&Rs(s)){var f=c.start,g=c.end;if(g===void 0&&(g=f),"selectionStart"in s)s.selectionStart=f,s.selectionEnd=Math.min(g,s.value.length);else{var y=s.ownerDocument||document,r=y&&y.defaultView||window;if(r.getSelection){var m=r.getSelection(),p=s.textContent.length,z=Math.min(c.start,p),B=c.end===void 0?z:Math.min(c.end,p);!m.extend&&z>B&&(i=B,B=z,z=i);var _=Kc(s,z),o=Kc(s,B);if(_&&o&&(m.rangeCount!==1||m.anchorNode!==_.node||m.anchorOffset!==_.offset||m.focusNode!==o.node||m.focusOffset!==o.offset)){var d=y.createRange();d.setStart(_.node,_.offset),m.removeAllRanges(),z>B?(m.addRange(d),m.extend(o.node,o.offset)):(d.setEnd(o.node,o.offset),m.addRange(d))}}}}for(y=[],m=s;m=m.parentNode;)m.nodeType===1&&y.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<y.length;s++){var h=y[s];h.element.scrollLeft=h.left,h.element.scrollTop=h.top}}vu=!!ds,ms=ds=null}finally{w=a,L.p=n,E.T=e}}l.current=t,_l=2}}function U0(){if(_l===2){_l=0;var l=kt,t=en,e=(t.flags&8772)!==0;if(t.subtreeFlags&8772||e){e=E.T,E.T=null;var n=L.p;L.p=2;var a=w;w|=4;try{s0(l,t.alternate,t)}finally{w=a,L.p=n,E.T=e}}_l=3}}function C0(){if(_l===4||_l===3){_l=0,Dr();var l=kt,t=en,e=xt,n=v0;t.subtreeFlags&10256||t.flags&10256?_l=5:(_l=0,en=kt=null,D0(l,l.pendingLanes));var a=l.pendingLanes;if(a===0&&(Vt=null),Cs(e),t=t.stateNode,Xl&&typeof Xl.onCommitFiberRoot=="function")try{Xl.onCommitFiberRoot(ea,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=E.T,a=L.p,L.p=2,E.T=null;try{for(var u=l.onRecoverableError,i=0;i<n.length;i++){var s=n[i];u(s.value,{componentStack:s.stack})}}finally{E.T=t,L.p=a}}xt&3&&Qu(),ct(l),a=l.pendingLanes,e&261930&&a&42?l===_s?Qn++:(Qn=0,_s=l):Qn=0,_a(0)}}function D0(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,sa(t)))}function Qu(){return M0(),U0(),C0(),N0()}function N0(){if(_l!==5)return!1;var l=kt,t=cs;cs=0;var e=Cs(xt),n=E.T,a=L.p;try{L.p=32>e?32:e,E.T=null,e=os,os=null;var u=kt,i=xt;if(_l=0,en=kt=null,xt=0,w&6)throw Error(b(331));var s=w;if(w|=4,h0(u.current),m0(u,u.current,i,e),w=s,_a(0,!1),Xl&&typeof Xl.onPostCommitFiberRoot=="function")try{Xl.onPostCommitFiberRoot(ea,u)}catch{}return!0}finally{L.p=a,E.T=n,D0(l,t)}}function Yo(l,t,e){t=Wl(e,t),t=ns(l.stateNode,t,2),l=Zt(l,t,2),l!==null&&(aa(l,2),ct(l))}function G(l,t,e){if(l.tag===3)Yo(l,l,e);else for(;t!==null;){if(t.tag===3){Yo(t,l,e);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Vt===null||!Vt.has(n))){l=Wl(e,l),e=Kf(2),n=Zt(t,e,2),n!==null&&(Wf(e,n,t,l),aa(n,2),ct(n));break}}t=t.return}}function hi(l,t,e){var n=l.pingCache;if(n===null){n=l.pingCache=new am;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(e)||(rc=!0,a.add(e),l=om.bind(null,l,t,e),t.then(l,l))}function om(l,t,e){var n=l.pingCache;n!==null&&n.delete(t),l.pingedLanes|=l.suspendedLanes&e,l.warmLanes&=~e,J===l&&(R&e)===e&&(el===4||el===3&&(R&62914560)===R&&300>jl()-ju?!(w&2)&&nn(l,0):dc|=e,tn===R&&(tn=0)),ct(l)}function B0(l,t){t===0&&(t=A_()),l=Se(l,t),l!==null&&(aa(l,t),ct(l))}function _m(l){var t=l.memoizedState,e=0;t!==null&&(e=t.retryLane),B0(l,e)}function fm(l,t){var e=0;switch(l.tag){case 31:case 13:var n=l.stateNode,a=l.memoizedState;a!==null&&(e=a.retryLane);break;case 19:n=l.stateNode;break;case 22:n=l.stateNode._retryCache;break;default:throw Error(b(314))}n!==null&&n.delete(t),B0(l,e)}function rm(l,t){return Ms(l,t)}var du=null,Me=null,fs=!1,mu=!1,bi=!1,wt=0;function ct(l){l!==Me&&l.next===null&&(Me===null?du=Me=l:Me=Me.next=l),mu=!0,fs||(fs=!0,mm())}function _a(l,t){if(!bi&&mu){bi=!0;do for(var e=!1,n=du;n!==null;){if(l!==0){var a=n.pendingLanes;if(a===0)var u=0;else{var i=n.suspendedLanes,s=n.pingedLanes;u=(1<<31-Rl(42|l)+1)-1,u&=a&~(i&~s),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(e=!0,Mo(n,u))}else u=R,u=Tu(n,n===J?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),!(u&3)||na(n,u)||(e=!0,Mo(n,u));n=n.next}while(e);bi=!1}}function dm(){H0()}function H0(){mu=fs=!1;var l=0;wt!==0&&Am()&&(l=wt);for(var t=jl(),e=null,n=du;n!==null;){var a=n.next,u=j0(n,t);u===0?(n.next=null,e===null?du=a:e.next=a,a===null&&(Me=e)):(e=n,(l!==0||u&3)&&(mu=!0)),n=a}_l!==0&&_l!==5||_a(l),wt!==0&&(wt=0)}function j0(l,t){for(var e=l.suspendedLanes,n=l.pingedLanes,a=l.expirationTimes,u=l.pendingLanes&-62914561;0<u;){var i=31-Rl(u),s=1<<i,c=a[i];c===-1?(!(s&e)||s&n)&&(a[i]=wr(s,t)):c<=t&&(l.expiredLanes|=s),u&=~s}if(t=J,e=R,e=Tu(l,l===t?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),n=l.callbackNode,e===0||l===t&&(q===2||q===9)||l.cancelPendingCommit!==null)return n!==null&&n!==null&&ku(n),l.callbackNode=null,l.callbackPriority=0;if(!(e&3)||na(l,e)){if(t=e&-e,t===l.callbackPriority)return t;switch(n!==null&&ku(n),Cs(e)){case 2:case 8:e=S_;break;case 32:e=Fa;break;case 268435456:e=z_;break;default:e=Fa}return n=X0.bind(null,l),e=Ms(e,n),l.callbackPriority=t,l.callbackNode=e,t}return n!==null&&n!==null&&ku(n),l.callbackPriority=2,l.callbackNode=null,2}function X0(l,t){if(_l!==0&&_l!==5)return l.callbackNode=null,l.callbackPriority=0,null;var e=l.callbackNode;if(Qu()&&l.callbackNode!==e)return null;var n=R;return n=Tu(l,l===J?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),n===0?null:(S0(l,n,t),j0(l,jl()),l.callbackNode!=null&&l.callbackNode===e?X0.bind(null,l):null)}function Mo(l,t){if(Qu())return null;S0(l,t,!0)}function mm(){Em(function(){w&6?Ms(x_,dm):H0()})}function yc(){if(wt===0){var l=Ie;l===0&&(l=ba,ba<<=1,!(ba&261888)&&(ba=256)),wt=l}return wt}function Uo(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Na(""+l)}function Co(l,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,l.id&&e.setAttribute("form",l.id),t.parentNode.insertBefore(e,t),l=new FormData(l),e.parentNode.removeChild(e),l}function ym(l,t,e,n,a){if(t==="submit"&&e&&e.stateNode===a){var u=Uo((a[Ul]||null).action),i=n.submitter;i&&(t=(t=i[Ul]||null)?Uo(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var s=new Eu("action","action",null,n,a);l.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(wt!==0){var c=i?Co(a,i):new FormData(a);ts(e,{pending:!0,data:c,method:a.method,action:u},null,c)}}else typeof u=="function"&&(s.preventDefault(),c=i?Co(a,i):new FormData(a),ts(e,{pending:!0,data:c,method:a.method,action:u},u,c))},currentTarget:a}]})}}for(var pi=0;pi<Gi.length;pi++){var vi=Gi[pi],gm=vi.toLowerCase(),hm=vi[0].toUpperCase()+vi.slice(1);et(gm,"on"+hm)}et(K_,"onAnimationEnd");et(W_,"onAnimationIteration");et(F_,"onAnimationStart");et("dblclick","onDoubleClick");et("focusin","onFocus");et("focusout","onBlur");et(Nd,"onTransitionRun");et(Bd,"onTransitionStart");et(Hd,"onTransitionCancel");et($_,"onTransitionEnd");Fe("onMouseEnter",["mouseout","mouseover"]);Fe("onMouseLeave",["mouseout","mouseover"]);Fe("onPointerEnter",["pointerout","pointerover"]);Fe("onPointerLeave",["pointerout","pointerover"]);pe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pe("onBeforeInput",["compositionend","keypress","textInput","paste"]);pe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fn));function R0(l,t){t=(t&4)!==0;for(var e=0;e<l.length;e++){var n=l[e],a=n.event;n=n.listeners;l:{var u=void 0;if(t)for(var i=n.length-1;0<=i;i--){var s=n[i],c=s.instance,f=s.currentTarget;if(s=s.listener,c!==u&&a.isPropagationStopped())break l;u=s,a.currentTarget=f;try{u(a)}catch(g){Ia(g)}a.currentTarget=null,u=c}else for(i=0;i<n.length;i++){if(s=n[i],c=s.instance,f=s.currentTarget,s=s.listener,c!==u&&a.isPropagationStopped())break l;u=s,a.currentTarget=f;try{u(a)}catch(g){Ia(g)}a.currentTarget=null,u=c}}}}function j(l,t){var e=t[Hi];e===void 0&&(e=t[Hi]=new Set);var n=l+"__bubble";e.has(n)||(Q0(t,l,2,!1),e.add(n))}function xi(l,t,e){var n=0;t&&(n|=4),Q0(e,l,n,t)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function gc(l){if(!l[Ya]){l[Ya]=!0,M_.forEach(function(e){e!=="selectionchange"&&(bm.has(e)||xi(e,!1,l),xi(e,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Ya]||(t[Ya]=!0,xi("selectionchange",!1,t))}}function Q0(l,t,e,n){switch(I0(t)){case 2:var a=km;break;case 8:a=Jm;break;default:a=vc}e=a.bind(null,t,e,l),a=void 0,!wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?l.addEventListener(t,e,{capture:!0,passive:a}):l.addEventListener(t,e,!0):a!==void 0?l.addEventListener(t,e,{passive:a}):l.addEventListener(t,e,!1)}function Si(l,t,e,n,a){var u=n;if(!(t&1)&&!(t&2)&&n!==null)l:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var s=n.stateNode.containerInfo;if(s===a)break;if(i===4)for(i=n.return;i!==null;){var c=i.tag;if((c===3||c===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;s!==null;){if(i=De(s),i===null)return;if(c=i.tag,c===5||c===6||c===26||c===27){n=u=i;continue l}s=s.parentNode}}n=n.return}X_(function(){var f=u,g=Bs(e),y=[];l:{var r=I_.get(l);if(r!==void 0){var m=Eu,p=l;switch(l){case"keypress":if(Ha(e)===0)break l;case"keydown":case"keyup":m=fd;break;case"focusin":p="focus",m=$u;break;case"focusout":p="blur",m=$u;break;case"beforeblur":case"afterblur":m=$u;break;case"click":if(e.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Pr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=md;break;case K_:case W_:case F_:m=ed;break;case $_:m=gd;break;case"scroll":case"scrollend":m=$r;break;case"wheel":m=bd;break;case"copy":case"cut":case"paste":m=ad;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=wc;break;case"toggle":case"beforetoggle":m=vd}var z=(t&4)!==0,B=!z&&(l==="scroll"||l==="scrollend"),_=z?r!==null?r+"Capture":null:r;z=[];for(var o=f,d;o!==null;){var h=o;if(d=h.stateNode,h=h.tag,h!==5&&h!==26&&h!==27||d===null||_===null||(h=qn(o,_),h!=null&&z.push($n(o,h,d))),B)break;o=o.return}0<z.length&&(r=new m(r,p,null,e,g),y.push({event:r,listeners:z}))}}if(!(t&7)){l:{if(r=l==="mouseover"||l==="pointerover",m=l==="mouseout"||l==="pointerout",r&&e!==Qi&&(p=e.relatedTarget||e.fromElement)&&(De(p)||p[cn]))break l;if((m||r)&&(r=g.window===g?g:(r=g.ownerDocument)?r.defaultView||r.parentWindow:window,m?(p=e.relatedTarget||e.toElement,m=f,p=p?De(p):null,p!==null&&(B=ta(p),z=p.tag,p!==B||z!==5&&z!==27&&z!==6)&&(p=null)):(m=null,p=f),m!==p)){if(z=Rc,h="onMouseLeave",_="onMouseEnter",o="mouse",(l==="pointerout"||l==="pointerover")&&(z=wc,h="onPointerLeave",_="onPointerEnter",o="pointer"),B=m==null?r:An(m),d=p==null?r:An(p),r=new z(h,o+"leave",m,e,g),r.target=B,r.relatedTarget=d,h=null,De(g)===f&&(z=new z(_,o+"enter",p,e,g),z.target=d,z.relatedTarget=B,h=z),B=h,m&&p)t:{for(z=pm,_=m,o=p,d=0,h=_;h;h=z(h))d++;h=0;for(var S=o;S;S=z(S))h++;for(;0<d-h;)_=z(_),d--;for(;0<h-d;)o=z(o),h--;for(;d--;){if(_===o||o!==null&&_===o.alternate){z=_;break t}_=z(_),o=z(o)}z=null}else z=null;m!==null&&Do(y,r,m,z,!1),p!==null&&B!==null&&Do(y,B,p,z,!0)}}l:{if(r=f?An(f):window,m=r.nodeName&&r.nodeName.toLowerCase(),m==="select"||m==="input"&&r.type==="file")var M=Zc;else if(Gc(r))if(G_)M=Ud;else{M=Yd;var v=Od}else m=r.nodeName,!m||m.toLowerCase()!=="input"||r.type!=="checkbox"&&r.type!=="radio"?f&&Ns(f.elementType)&&(M=Zc):M=Md;if(M&&(M=M(l,f))){q_(y,M,e,g);break l}v&&v(l,r,f),l==="focusout"&&f&&r.type==="number"&&f.memoizedProps.value!=null&&Ri(r,"number",r.value)}switch(v=f?An(f):window,l){case"focusin":(Gc(v)||v.contentEditable==="true")&&(He=v,Li=f,Un=null);break;case"focusout":Un=Li=He=null;break;case"mousedown":qi=!0;break;case"contextmenu":case"mouseup":case"dragend":qi=!1,Wc(y,e,g);break;case"selectionchange":if(Dd)break;case"keydown":case"keyup":Wc(y,e,g)}var T;if(Xs)l:{switch(l){case"compositionstart":var U="onCompositionStart";break l;case"compositionend":U="onCompositionEnd";break l;case"compositionupdate":U="onCompositionUpdate";break l}U=void 0}else Be?w_(l,e)&&(U="onCompositionEnd"):l==="keydown"&&e.keyCode===229&&(U="onCompositionStart");U&&(Q_&&e.locale!=="ko"&&(Be||U!=="onCompositionStart"?U==="onCompositionEnd"&&Be&&(T=R_()):(Xt=g,Hs="value"in Xt?Xt.value:Xt.textContent,Be=!0)),v=yu(f,U),0<v.length&&(U=new Qc(U,l,null,e,g),y.push({event:U,listeners:v}),T?U.data=T:(T=L_(e),T!==null&&(U.data=T)))),(T=Sd?zd(l,e):Ad(l,e))&&(U=yu(f,"onBeforeInput"),0<U.length&&(v=new Qc("onBeforeInput","beforeinput",null,e,g),y.push({event:v,listeners:U}),v.data=T)),ym(y,l,f,e,g)}R0(y,t)})}function $n(l,t,e){return{instance:l,listener:t,currentTarget:e}}function yu(l,t){for(var e=t+"Capture",n=[];l!==null;){var a=l,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=qn(l,e),a!=null&&n.unshift($n(l,a,u)),a=qn(l,t),a!=null&&n.push($n(l,a,u))),l.tag===3)return n;l=l.return}return[]}function pm(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Do(l,t,e,n,a){for(var u=t._reactName,i=[];e!==null&&e!==n;){var s=e,c=s.alternate,f=s.stateNode;if(s=s.tag,c!==null&&c===n)break;s!==5&&s!==26&&s!==27||f===null||(c=f,a?(f=qn(e,u),f!=null&&i.unshift($n(e,f,c))):a||(f=qn(e,u),f!=null&&i.push($n(e,f,c)))),e=e.return}i.length!==0&&l.push({event:t,listeners:i})}var vm=/\r\n?/g,xm=/\u0000|\uFFFD/g;function No(l){return(typeof l=="string"?l:""+l).replace(vm,`
`).replace(xm,"")}function w0(l,t){return t=No(t),No(l)===t}function Z(l,t,e,n,a,u){switch(e){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||$e(l,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&$e(l,""+n);break;case"className":xa(l,"class",n);break;case"tabIndex":xa(l,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":xa(l,e,n);break;case"style":j_(l,n,u);break;case"data":if(t!=="object"){xa(l,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||e!=="href")){l.removeAttribute(e);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){l.removeAttribute(e);break}n=Na(""+n),l.setAttribute(e,n);break;case"action":case"formAction":if(typeof n=="function"){l.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(e==="formAction"?(t!=="input"&&Z(l,t,"name",a.name,a,null),Z(l,t,"formEncType",a.formEncType,a,null),Z(l,t,"formMethod",a.formMethod,a,null),Z(l,t,"formTarget",a.formTarget,a,null)):(Z(l,t,"encType",a.encType,a,null),Z(l,t,"method",a.method,a,null),Z(l,t,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){l.removeAttribute(e);break}n=Na(""+n),l.setAttribute(e,n);break;case"onClick":n!=null&&(l.onclick=ht);break;case"onScroll":n!=null&&j("scroll",l);break;case"onScrollEnd":n!=null&&j("scrollend",l);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(b(61));if(e=n.__html,e!=null){if(a.children!=null)throw Error(b(60));l.innerHTML=e}}break;case"multiple":l.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":l.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){l.removeAttribute("xlink:href");break}e=Na(""+n),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?l.setAttribute(e,""+n):l.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?l.setAttribute(e,""):l.removeAttribute(e);break;case"capture":case"download":n===!0?l.setAttribute(e,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?l.setAttribute(e,n):l.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?l.setAttribute(e,n):l.removeAttribute(e);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?l.removeAttribute(e):l.setAttribute(e,n);break;case"popover":j("beforetoggle",l),j("toggle",l),Da(l,"popover",n);break;case"xlinkActuate":ot(l,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ot(l,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ot(l,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ot(l,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ot(l,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ot(l,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ot(l,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ot(l,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ot(l,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Da(l,"is",n);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Wr.get(e)||e,Da(l,e,n))}}function rs(l,t,e,n,a,u){switch(e){case"style":j_(l,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(b(61));if(e=n.__html,e!=null){if(a.children!=null)throw Error(b(60));l.innerHTML=e}}break;case"children":typeof n=="string"?$e(l,n):(typeof n=="number"||typeof n=="bigint")&&$e(l,""+n);break;case"onScroll":n!=null&&j("scroll",l);break;case"onScrollEnd":n!=null&&j("scrollend",l);break;case"onClick":n!=null&&(l.onclick=ht);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!U_.hasOwnProperty(e))l:{if(e[0]==="o"&&e[1]==="n"&&(a=e.endsWith("Capture"),t=e.slice(2,a?e.length-7:void 0),u=l[Ul]||null,u=u!=null?u[e]:null,typeof u=="function"&&l.removeEventListener(t,u,a),typeof n=="function")){typeof u!="function"&&u!==null&&(e in l?l[e]=null:l.hasAttribute(e)&&l.removeAttribute(e)),l.addEventListener(t,n,a);break l}e in l?l[e]=n:n===!0?l.setAttribute(e,""):Da(l,e,n)}}}function vl(l,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":j("error",l),j("load",l);var n=!1,a=!1,u;for(u in e)if(e.hasOwnProperty(u)){var i=e[u];if(i!=null)switch(u){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(b(137,t));default:Z(l,t,u,i,e,null)}}a&&Z(l,t,"srcSet",e.srcSet,e,null),n&&Z(l,t,"src",e.src,e,null);return;case"input":j("invalid",l);var s=u=i=a=null,c=null,f=null;for(n in e)if(e.hasOwnProperty(n)){var g=e[n];if(g!=null)switch(n){case"name":a=g;break;case"type":i=g;break;case"checked":c=g;break;case"defaultChecked":f=g;break;case"value":u=g;break;case"defaultValue":s=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(b(137,t));break;default:Z(l,t,n,g,e,null)}}N_(l,u,s,c,f,i,a,!1);return;case"select":j("invalid",l),n=i=u=null;for(a in e)if(e.hasOwnProperty(a)&&(s=e[a],s!=null))switch(a){case"value":u=s;break;case"defaultValue":i=s;break;case"multiple":n=s;default:Z(l,t,a,s,e,null)}t=u,e=i,l.multiple=!!n,t!=null?Ge(l,!!n,t,!1):e!=null&&Ge(l,!!n,e,!0);return;case"textarea":j("invalid",l),u=a=n=null;for(i in e)if(e.hasOwnProperty(i)&&(s=e[i],s!=null))switch(i){case"value":n=s;break;case"defaultValue":a=s;break;case"children":u=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(b(91));break;default:Z(l,t,i,s,e,null)}H_(l,n,a,u);return;case"option":for(c in e)if(e.hasOwnProperty(c)&&(n=e[c],n!=null))switch(c){case"selected":l.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Z(l,t,c,n,e,null)}return;case"dialog":j("beforetoggle",l),j("toggle",l),j("cancel",l),j("close",l);break;case"iframe":case"object":j("load",l);break;case"video":case"audio":for(n=0;n<Fn.length;n++)j(Fn[n],l);break;case"image":j("error",l),j("load",l);break;case"details":j("toggle",l);break;case"embed":case"source":case"link":j("error",l),j("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(f in e)if(e.hasOwnProperty(f)&&(n=e[f],n!=null))switch(f){case"children":case"dangerouslySetInnerHTML":throw Error(b(137,t));default:Z(l,t,f,n,e,null)}return;default:if(Ns(t)){for(g in e)e.hasOwnProperty(g)&&(n=e[g],n!==void 0&&rs(l,t,g,n,e,void 0));return}}for(s in e)e.hasOwnProperty(s)&&(n=e[s],n!=null&&Z(l,t,s,n,e,null))}function Sm(l,t,e,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,i=null,s=null,c=null,f=null,g=null;for(m in e){var y=e[m];if(e.hasOwnProperty(m)&&y!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":c=y;default:n.hasOwnProperty(m)||Z(l,t,m,null,n,y)}}for(var r in n){var m=n[r];if(y=e[r],n.hasOwnProperty(r)&&(m!=null||y!=null))switch(r){case"type":u=m;break;case"name":a=m;break;case"checked":f=m;break;case"defaultChecked":g=m;break;case"value":i=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(b(137,t));break;default:m!==y&&Z(l,t,r,m,n,y)}}Xi(l,i,s,c,f,g,u,a);return;case"select":m=i=s=r=null;for(u in e)if(c=e[u],e.hasOwnProperty(u)&&c!=null)switch(u){case"value":break;case"multiple":m=c;default:n.hasOwnProperty(u)||Z(l,t,u,null,n,c)}for(a in n)if(u=n[a],c=e[a],n.hasOwnProperty(a)&&(u!=null||c!=null))switch(a){case"value":r=u;break;case"defaultValue":s=u;break;case"multiple":i=u;default:u!==c&&Z(l,t,a,u,n,c)}t=s,e=i,n=m,r!=null?Ge(l,!!e,r,!1):!!n!=!!e&&(t!=null?Ge(l,!!e,t,!0):Ge(l,!!e,e?[]:"",!1));return;case"textarea":m=r=null;for(s in e)if(a=e[s],e.hasOwnProperty(s)&&a!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Z(l,t,s,null,n,a)}for(i in n)if(a=n[i],u=e[i],n.hasOwnProperty(i)&&(a!=null||u!=null))switch(i){case"value":r=a;break;case"defaultValue":m=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(b(91));break;default:a!==u&&Z(l,t,i,a,n,u)}B_(l,r,m);return;case"option":for(var p in e)if(r=e[p],e.hasOwnProperty(p)&&r!=null&&!n.hasOwnProperty(p))switch(p){case"selected":l.selected=!1;break;default:Z(l,t,p,null,n,r)}for(c in n)if(r=n[c],m=e[c],n.hasOwnProperty(c)&&r!==m&&(r!=null||m!=null))switch(c){case"selected":l.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Z(l,t,c,r,n,m)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var z in e)r=e[z],e.hasOwnProperty(z)&&r!=null&&!n.hasOwnProperty(z)&&Z(l,t,z,null,n,r);for(f in n)if(r=n[f],m=e[f],n.hasOwnProperty(f)&&r!==m&&(r!=null||m!=null))switch(f){case"children":case"dangerouslySetInnerHTML":if(r!=null)throw Error(b(137,t));break;default:Z(l,t,f,r,n,m)}return;default:if(Ns(t)){for(var B in e)r=e[B],e.hasOwnProperty(B)&&r!==void 0&&!n.hasOwnProperty(B)&&rs(l,t,B,void 0,n,r);for(g in n)r=n[g],m=e[g],!n.hasOwnProperty(g)||r===m||r===void 0&&m===void 0||rs(l,t,g,r,n,m);return}}for(var _ in e)r=e[_],e.hasOwnProperty(_)&&r!=null&&!n.hasOwnProperty(_)&&Z(l,t,_,null,n,r);for(y in n)r=n[y],m=e[y],!n.hasOwnProperty(y)||r===m||r==null&&m==null||Z(l,t,y,r,n,m)}function Bo(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zm(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,e=performance.getEntriesByType("resource"),n=0;n<e.length;n++){var a=e[n],u=a.transferSize,i=a.initiatorType,s=a.duration;if(u&&s&&Bo(i)){for(i=0,s=a.responseEnd,n+=1;n<e.length;n++){var c=e[n],f=c.startTime;if(f>s)break;var g=c.transferSize,y=c.initiatorType;g&&Bo(y)&&(c=c.responseEnd,i+=g*(c<s?1:(s-f)/(c-f)))}if(--n,t+=8*(u+i)/(a.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var ds=null,ms=null;function gu(l){return l.nodeType===9?l:l.ownerDocument}function Ho(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function L0(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function ys(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zi=null;function Am(){var l=window.event;return l&&l.type==="popstate"?l===zi?!1:(zi=l,!0):(zi=null,!1)}var q0=typeof setTimeout=="function"?setTimeout:void 0,Tm=typeof clearTimeout=="function"?clearTimeout:void 0,jo=typeof Promise=="function"?Promise:void 0,Em=typeof queueMicrotask=="function"?queueMicrotask:typeof jo<"u"?function(l){return jo.resolve(null).then(l).catch(Om)}:q0;function Om(l){setTimeout(function(){throw l})}function te(l){return l==="head"}function Xo(l,t){var e=t,n=0;do{var a=e.nextSibling;if(l.removeChild(e),a&&a.nodeType===8)if(e=a.data,e==="/$"||e==="/&"){if(n===0){l.removeChild(a),un(t);return}n--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")n++;else if(e==="html")wn(l.ownerDocument.documentElement);else if(e==="head"){e=l.ownerDocument.head,wn(e);for(var u=e.firstChild;u;){var i=u.nextSibling,s=u.nodeName;u[ua]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||e.removeChild(u),u=i}}else e==="body"&&wn(l.ownerDocument.body);e=a}while(e);un(t)}function Ro(l,t){var e=l;l=0;do{var n=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),n&&n.nodeType===8)if(e=n.data,e==="/$"){if(l===0)break;l--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||l++;e=n}while(e)}function gs(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":gs(e),Ds(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}l.removeChild(e)}}function Ym(l,t,e,n){for(;l.nodeType===1;){var a=e;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(n){if(!l[ua])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(u=l.getAttribute("rel"),u==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(u!==a.rel||l.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||l.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||l.getAttribute("title")!==(a.title==null?null:a.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(u=l.getAttribute("src"),(u!==(a.src==null?null:a.src)||l.getAttribute("type")!==(a.type==null?null:a.type)||l.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&l.getAttribute("name")===u)return l}else return l;if(l=Il(l.nextSibling),l===null)break}return null}function Mm(l,t,e){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!e||(l=Il(l.nextSibling),l===null))return null;return l}function G0(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=Il(l.nextSibling),l===null))return null;return l}function hs(l){return l.data==="$?"||l.data==="$~"}function bs(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function Um(l,t){var e=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||e.readyState!=="loading")t();else{var n=function(){t(),e.removeEventListener("DOMContentLoaded",n)};e.addEventListener("DOMContentLoaded",n),l._reactRetry=n}}function Il(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var ps=null;function Qo(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="/$"||e==="/&"){if(t===0)return Il(l.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}l=l.nextSibling}return null}function wo(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return l;t--}else e!=="/$"&&e!=="/&"||t++}l=l.previousSibling}return null}function Z0(l,t,e){switch(t=gu(e),l){case"html":if(l=t.documentElement,!l)throw Error(b(452));return l;case"head":if(l=t.head,!l)throw Error(b(453));return l;case"body":if(l=t.body,!l)throw Error(b(454));return l;default:throw Error(b(451))}}function wn(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);Ds(l)}var Pl=new Map,Lo=new Set;function hu(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Ot=L.d;L.d={f:Cm,r:Dm,D:Nm,C:Bm,L:Hm,m:jm,X:Rm,S:Xm,M:Qm};function Cm(){var l=Ot.f(),t=Xu();return l||t}function Dm(l){var t=on(l);t!==null&&t.tag===5&&t.type==="form"?Xf(t):Ot.r(l)}var dn=typeof document>"u"?null:document;function V0(l,t,e){var n=dn;if(n&&typeof t=="string"&&t){var a=Kl(t);a='link[rel="'+l+'"][href="'+a+'"]',typeof e=="string"&&(a+='[crossorigin="'+e+'"]'),Lo.has(a)||(Lo.add(a),l={rel:l,crossOrigin:e,href:t},n.querySelector(a)===null&&(t=n.createElement("link"),vl(t,"link",l),dl(t),n.head.appendChild(t)))}}function Nm(l){Ot.D(l),V0("dns-prefetch",l,null)}function Bm(l,t){Ot.C(l,t),V0("preconnect",l,t)}function Hm(l,t,e){Ot.L(l,t,e);var n=dn;if(n&&l&&t){var a='link[rel="preload"][as="'+Kl(t)+'"]';t==="image"&&e&&e.imageSrcSet?(a+='[imagesrcset="'+Kl(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(a+='[imagesizes="'+Kl(e.imageSizes)+'"]')):a+='[href="'+Kl(l)+'"]';var u=a;switch(t){case"style":u=an(l);break;case"script":u=mn(l)}Pl.has(u)||(l=P({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:l,as:t},e),Pl.set(u,l),n.querySelector(a)!==null||t==="style"&&n.querySelector(fa(u))||t==="script"&&n.querySelector(ra(u))||(t=n.createElement("link"),vl(t,"link",l),dl(t),n.head.appendChild(t)))}}function jm(l,t){Ot.m(l,t);var e=dn;if(e&&l){var n=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Kl(n)+'"][href="'+Kl(l)+'"]',u=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=mn(l)}if(!Pl.has(u)&&(l=P({rel:"modulepreload",href:l},t),Pl.set(u,l),e.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(ra(u)))return}n=e.createElement("link"),vl(n,"link",l),dl(n),e.head.appendChild(n)}}}function Xm(l,t,e){Ot.S(l,t,e);var n=dn;if(n&&l){var a=qe(n).hoistableStyles,u=an(l);t=t||"default";var i=a.get(u);if(!i){var s={loading:0,preload:null};if(i=n.querySelector(fa(u)))s.loading=5;else{l=P({rel:"stylesheet",href:l,"data-precedence":t},e),(e=Pl.get(u))&&hc(l,e);var c=i=n.createElement("link");dl(c),vl(c,"link",l),c._p=new Promise(function(f,g){c.onload=f,c.onerror=g}),c.addEventListener("load",function(){s.loading|=1}),c.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Ga(i,t,n)}i={type:"stylesheet",instance:i,count:1,state:s},a.set(u,i)}}}function Rm(l,t){Ot.X(l,t);var e=dn;if(e&&l){var n=qe(e).hoistableScripts,a=mn(l),u=n.get(a);u||(u=e.querySelector(ra(a)),u||(l=P({src:l,async:!0},t),(t=Pl.get(a))&&bc(l,t),u=e.createElement("script"),dl(u),vl(u,"link",l),e.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function Qm(l,t){Ot.M(l,t);var e=dn;if(e&&l){var n=qe(e).hoistableScripts,a=mn(l),u=n.get(a);u||(u=e.querySelector(ra(a)),u||(l=P({src:l,async:!0,type:"module"},t),(t=Pl.get(a))&&bc(l,t),u=e.createElement("script"),dl(u),vl(u,"link",l),e.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function qo(l,t,e,n){var a=(a=Lt.current)?hu(a):null;if(!a)throw Error(b(446));switch(l){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=an(e.href),e=qe(a).hoistableStyles,n=e.get(t),n||(n={type:"style",instance:null,count:0,state:null},e.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){l=an(e.href);var u=qe(a).hoistableStyles,i=u.get(l);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(l,i),(u=a.querySelector(fa(l)))&&!u._p&&(i.instance=u,i.state.loading=5),Pl.has(l)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Pl.set(l,e),u||wm(a,l,e,i.state))),t&&n===null)throw Error(b(528,""));return i}if(t&&n!==null)throw Error(b(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=mn(e),e=qe(a).hoistableScripts,n=e.get(t),n||(n={type:"script",instance:null,count:0,state:null},e.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(b(444,l))}}function an(l){return'href="'+Kl(l)+'"'}function fa(l){return'link[rel="stylesheet"]['+l+"]"}function k0(l){return P({},l,{"data-precedence":l.precedence,precedence:null})}function wm(l,t,e,n){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=l.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),vl(t,"link",e),dl(t),l.head.appendChild(t))}function mn(l){return'[src="'+Kl(l)+'"]'}function ra(l){return"script[async]"+l}function Go(l,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var n=l.querySelector('style[data-href~="'+Kl(e.href)+'"]');if(n)return t.instance=n,dl(n),n;var a=P({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return n=(l.ownerDocument||l).createElement("style"),dl(n),vl(n,"style",a),Ga(n,e.precedence,l),t.instance=n;case"stylesheet":a=an(e.href);var u=l.querySelector(fa(a));if(u)return t.state.loading|=4,t.instance=u,dl(u),u;n=k0(e),(a=Pl.get(a))&&hc(n,a),u=(l.ownerDocument||l).createElement("link"),dl(u);var i=u;return i._p=new Promise(function(s,c){i.onload=s,i.onerror=c}),vl(u,"link",n),t.state.loading|=4,Ga(u,e.precedence,l),t.instance=u;case"script":return u=mn(e.src),(a=l.querySelector(ra(u)))?(t.instance=a,dl(a),a):(n=e,(a=Pl.get(u))&&(n=P({},e),bc(n,a)),l=l.ownerDocument||l,a=l.createElement("script"),dl(a),vl(a,"link",n),l.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(b(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(n=t.instance,t.state.loading|=4,Ga(n,e.precedence,l));return t.instance}function Ga(l,t,e){for(var n=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,u=a,i=0;i<n.length;i++){var s=n[i];if(s.dataset.precedence===t)u=s;else if(u!==a)break}u?u.parentNode.insertBefore(l,u.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(l,t.firstChild))}function hc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function bc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Za=null;function Zo(l,t,e){if(Za===null){var n=new Map,a=Za=new Map;a.set(e,n)}else a=Za,n=a.get(e),n||(n=new Map,a.set(e,n));if(n.has(l))return n;for(n.set(l,null),e=e.getElementsByTagName(l),a=0;a<e.length;a++){var u=e[a];if(!(u[ua]||u[hl]||l==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=l+i;var s=n.get(i);s?s.push(u):n.set(i,[u])}}return n}function Vo(l,t,e){l=l.ownerDocument||l,l.head.insertBefore(e,t==="title"?l.querySelector("head > title"):null)}function Lm(l,t,e){if(e===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function J0(l){return!(l.type==="stylesheet"&&!(l.state.loading&3))}function qm(l,t,e,n){if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var a=an(n.href),u=t.querySelector(fa(a));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=bu.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=u,dl(u);return}u=t.ownerDocument||t,n=k0(n),(a=Pl.get(a))&&hc(n,a),u=u.createElement("link"),dl(u);var i=u;i._p=new Promise(function(s,c){i.onload=s,i.onerror=c}),vl(u,"link",n),e.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(l.count++,e=bu.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}var Ai=0;function Gm(l,t){return l.stylesheets&&l.count===0&&Va(l,l.stylesheets),0<l.count||0<l.imgCount?function(e){var n=setTimeout(function(){if(l.stylesheets&&Va(l,l.stylesheets),l.unsuspend){var u=l.unsuspend;l.unsuspend=null,u()}},6e4+t);0<l.imgBytes&&Ai===0&&(Ai=62500*zm());var a=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Va(l,l.stylesheets),l.unsuspend)){var u=l.unsuspend;l.unsuspend=null,u()}},(l.imgBytes>Ai?50:800)+t);return l.unsuspend=e,function(){l.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function bu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Va(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var pu=null;function Va(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,pu=new Map,t.forEach(Zm,l),pu=null,bu.call(l))}function Zm(l,t){if(!(t.state.loading&4)){var e=pu.get(l);if(e)var n=e.get(null);else{e=new Map,pu.set(l,e);for(var a=l.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var i=a[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),n=i)}n&&e.set(null,n)}a=t.instance,i=a.getAttribute("data-precedence"),u=e.get(i)||n,u===n&&e.set(null,a),e.set(i,a),this.count++,n=bu.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),u?u.parentNode.insertBefore(a,u.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(a,l.firstChild)),t.state.loading|=4}}var In={$$typeof:gt,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function Vm(l,t,e,n,a,u,i,s,c){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ju(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.hiddenUpdates=Ju(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function K0(l,t,e,n,a,u,i,s,c,f,g,y){return l=new Vm(l,t,e,i,c,f,g,y,s),t=1,u===!0&&(t|=24),u=Bl(3,null,null,t),l.current=u,u.stateNode=l,t=Zs(),t.refCount++,l.pooledCache=t,t.refCount++,u.memoizedState={element:n,isDehydrated:e,cache:t},Js(u),l}function W0(l){return l?(l=Re,l):Re}function F0(l,t,e,n,a,u){a=W0(a),n.context===null?n.context=a:n.pendingContext=a,n=Gt(t),n.payload={element:e},u=u===void 0?null:u,u!==null&&(n.callback=u),e=Zt(l,n,t),e!==null&&(Ml(e,l,t),Dn(e,l,t))}function ko(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var e=l.retryLane;l.retryLane=e!==0&&e<t?e:t}}function pc(l,t){ko(l,t),(l=l.alternate)&&ko(l,t)}function $0(l){if(l.tag===13||l.tag===31){var t=Se(l,67108864);t!==null&&Ml(t,l,67108864),pc(l,67108864)}}function Jo(l){if(l.tag===13||l.tag===31){var t=Ql();t=Us(t);var e=Se(l,t);e!==null&&Ml(e,l,t),pc(l,t)}}var vu=!0;function km(l,t,e,n){var a=E.T;E.T=null;var u=L.p;try{L.p=2,vc(l,t,e,n)}finally{L.p=u,E.T=a}}function Jm(l,t,e,n){var a=E.T;E.T=null;var u=L.p;try{L.p=8,vc(l,t,e,n)}finally{L.p=u,E.T=a}}function vc(l,t,e,n){if(vu){var a=vs(n);if(a===null)Si(l,t,n,xu,e),Ko(l,n);else if(Wm(a,l,t,e,n))n.stopPropagation();else if(Ko(l,n),t&4&&-1<Km.indexOf(l)){for(;a!==null;){var u=on(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=ie(u.pendingLanes);if(i!==0){var s=u;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var c=1<<31-Rl(i);s.entanglements[1]|=c,i&=~c}ct(u),!(w&6)&&(_u=jl()+500,_a(0))}}break;case 31:case 13:s=Se(u,2),s!==null&&Ml(s,u,2),Xu(),pc(u,2)}if(u=vs(n),u===null&&Si(l,t,n,xu,e),u===a)break;a=u}a!==null&&n.stopPropagation()}else Si(l,t,n,null,e)}}function vs(l){return l=Bs(l),xc(l)}var xu=null;function xc(l){if(xu=null,l=De(l),l!==null){var t=ta(l);if(t===null)l=null;else{var e=t.tag;if(e===13){if(l=g_(t),l!==null)return l;l=null}else if(e===31){if(l=h_(t),l!==null)return l;l=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return xu=l,null}function I0(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nr()){case x_:return 2;case S_:return 8;case Fa:case Br:return 32;case z_:return 268435456;default:return 32}default:return 32}}var xs=!1,Jt=null,Kt=null,Wt=null,Pn=new Map,la=new Map,Ht=[],Km="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ko(l,t){switch(l){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":Pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":la.delete(t.pointerId)}}function xn(l,t,e,n,a,u){return l===null||l.nativeEvent!==u?(l={blockedOn:t,domEventName:e,eventSystemFlags:n,nativeEvent:u,targetContainers:[a]},t!==null&&(t=on(t),t!==null&&$0(t)),l):(l.eventSystemFlags|=n,t=l.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),l)}function Wm(l,t,e,n,a){switch(t){case"focusin":return Jt=xn(Jt,l,t,e,n,a),!0;case"dragenter":return Kt=xn(Kt,l,t,e,n,a),!0;case"mouseover":return Wt=xn(Wt,l,t,e,n,a),!0;case"pointerover":var u=a.pointerId;return Pn.set(u,xn(Pn.get(u)||null,l,t,e,n,a)),!0;case"gotpointercapture":return u=a.pointerId,la.set(u,xn(la.get(u)||null,l,t,e,n,a)),!0}return!1}function P0(l){var t=De(l.target);if(t!==null){var e=ta(t);if(e!==null){if(t=e.tag,t===13){if(t=g_(e),t!==null){l.blockedOn=t,Cc(l.priority,function(){Jo(e)});return}}else if(t===31){if(t=h_(e),t!==null){l.blockedOn=t,Cc(l.priority,function(){Jo(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){l.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}l.blockedOn=null}function ka(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var e=vs(l.nativeEvent);if(e===null){e=l.nativeEvent;var n=new e.constructor(e.type,e);Qi=n,e.target.dispatchEvent(n),Qi=null}else return t=on(e),t!==null&&$0(t),l.blockedOn=e,!1;t.shift()}return!0}function Wo(l,t,e){ka(l)&&e.delete(t)}function Fm(){xs=!1,Jt!==null&&ka(Jt)&&(Jt=null),Kt!==null&&ka(Kt)&&(Kt=null),Wt!==null&&ka(Wt)&&(Wt=null),Pn.forEach(Wo),la.forEach(Wo)}function Ma(l,t){l.blockedOn===t&&(l.blockedOn=null,xs||(xs=!0,fl.unstable_scheduleCallback(fl.unstable_NormalPriority,Fm)))}var Ua=null;function Fo(l){Ua!==l&&(Ua=l,fl.unstable_scheduleCallback(fl.unstable_NormalPriority,function(){Ua===l&&(Ua=null);for(var t=0;t<l.length;t+=3){var e=l[t],n=l[t+1],a=l[t+2];if(typeof n!="function"){if(xc(n||e)===null)continue;break}var u=on(e);u!==null&&(l.splice(t,3),t-=3,ts(u,{pending:!0,data:a,method:e.method,action:n},n,a))}}))}function un(l){function t(c){return Ma(c,l)}Jt!==null&&Ma(Jt,l),Kt!==null&&Ma(Kt,l),Wt!==null&&Ma(Wt,l),Pn.forEach(t),la.forEach(t);for(var e=0;e<Ht.length;e++){var n=Ht[e];n.blockedOn===l&&(n.blockedOn=null)}for(;0<Ht.length&&(e=Ht[0],e.blockedOn===null);)P0(e),e.blockedOn===null&&Ht.shift();if(e=(l.ownerDocument||l).$$reactFormReplay,e!=null)for(n=0;n<e.length;n+=3){var a=e[n],u=e[n+1],i=a[Ul]||null;if(typeof u=="function")i||Fo(e);else if(i){var s=null;if(u&&u.hasAttribute("formAction")){if(a=u,i=u[Ul]||null)s=i.formAction;else if(xc(a)!==null)continue}else s=i.action;typeof s=="function"?e[n+1]=s:(e.splice(n,3),n-=3),Fo(e)}}}function lr(){function l(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),n||setTimeout(e,20)}function e(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){n=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Sc(l){this._internalRoot=l}wu.prototype.render=Sc.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(b(409));var e=t.current,n=Ql();F0(e,n,l,t,null,null)};wu.prototype.unmount=Sc.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;F0(l.current,2,null,l,null,null),Xu(),t[cn]=null}};function wu(l){this._internalRoot=l}wu.prototype.unstable_scheduleHydration=function(l){if(l){var t=Y_();l={blockedOn:null,target:l,priority:t};for(var e=0;e<Ht.length&&t!==0&&t<Ht[e].priority;e++);Ht.splice(e,0,l),e===0&&P0(l)}};var $o=m_.version;if($o!=="19.2.4")throw Error(b(527,$o,"19.2.4"));L.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(b(188)):(l=Object.keys(l).join(","),Error(b(268,l)));return l=Er(t),l=l!==null?b_(l):null,l=l===null?null:l.stateNode,l};var $m={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{ea=Ca.inject($m),Xl=Ca}catch{}}zu.createRoot=function(l,t){if(!y_(l))throw Error(b(299));var e=!1,n="",a=Vf,u=kf,i=Jf;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=K0(l,1,!1,null,null,e,n,null,a,u,i,lr),l[cn]=t.current,gc(l),new Sc(t)};zu.hydrateRoot=function(l,t,e){if(!y_(l))throw Error(b(299));var n=!1,a="",u=Vf,i=kf,s=Jf,c=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.formState!==void 0&&(c=e.formState)),t=K0(l,1,!0,t,e??null,n,a,c,u,i,s,lr),t.context=W0(null),e=t.current,n=Ql(),n=Us(n),a=Gt(n),a.callback=null,Zt(e,a,n),e=n,t.current.lanes=e,aa(t,e),ct(t),l[cn]=t.current,gc(l),new wu(t)};zu.version="19.2.4";function tr(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tr)}catch(l){console.error(l)}}tr(),c_.exports=zu;var Im=c_.exports,Pm=`svg[fill=none] {
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
}`,ly={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let l=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");l||(l=document.createElement("style"),l.id="feedback-tool-styles-annotation-popup-css-styles",l.textContent=Pm,document.head.appendChild(l))}var k=ly,ty=({size:l=24})=>A.jsx("svg",{width:l,height:l,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:A.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Ti="__agentation_freeze";function ey(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:t=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const l=window;return l[Ti]||(l[Ti]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),l[Ti]}var yl=ey();typeof window<"u"&&!yl.installed&&(yl.origSetTimeout=window.setTimeout.bind(window),yl.origSetInterval=window.setInterval.bind(window),yl.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(l,t,...e)=>typeof l=="string"?yl.origSetTimeout(l,t):yl.origSetTimeout((...n)=>{yl.frozen?yl.frozenTimeoutQueue.push(()=>l(...n)):l(...n)},t,...e),window.setInterval=(l,t,...e)=>typeof l=="string"?yl.origSetInterval(l,t):yl.origSetInterval((...n)=>{yl.frozen||l(...n)},t,...e),window.requestAnimationFrame=l=>yl.origRAF(t=>{yl.frozen?yl.frozenRAFQueue.push(l):l(t)}),yl.installed=!0);var Ee=yl.origSetTimeout;yl.origSetInterval;ul.forwardRef(function({element:t,timestamp:e,selectedText:n,placeholder:a="What should change?",initialValue:u="",submitLabel:i="Add",onSubmit:s,onCancel:c,onDelete:f,style:g,accentColor:y="#3c82f7",isExiting:r=!1,lightMode:m=!1,computedStyles:p},z){const[B,_]=ul.useState(u),[o,d]=ul.useState(!1),[h,S]=ul.useState("initial"),[M,v]=ul.useState(!1),[T,U]=ul.useState(!1),D=ul.useRef(null),Al=ul.useRef(null),ql=ul.useRef(null),Yt=ul.useRef(null);ul.useEffect(()=>{r&&h!=="exit"&&S("exit")},[r,h]),ul.useEffect(()=>{Ee(()=>{S("enter")},0);const C=Ee(()=>{S("entered")},200),W=Ee(()=>{const Gl=D.current;Gl&&(Gl.focus(),Gl.selectionStart=Gl.selectionEnd=Gl.value.length,Gl.scrollTop=Gl.scrollHeight)},50);return()=>{clearTimeout(C),clearTimeout(W),ql.current&&clearTimeout(ql.current),Yt.current&&clearTimeout(Yt.current)}},[]);const da=ul.useCallback(()=>{Yt.current&&clearTimeout(Yt.current),d(!0),Yt.current=Ee(()=>{var C;d(!1),(C=D.current)==null||C.focus()},250)},[]);ul.useImperativeHandle(z,()=>({shake:da}),[da]);const ee=ul.useCallback(()=>{S("exit"),ql.current=Ee(()=>{c()},150)},[c]),x=ul.useCallback(()=>{B.trim()&&s(B.trim())},[B,s]),H=ul.useCallback(C=>{C.nativeEvent.isComposing||(C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),x()),C.key==="Escape"&&ee())},[x,ee]),N=[k.popup,m?k.light:"",h==="enter"?k.enter:"",h==="entered"?k.entered:"",h==="exit"?k.exit:"",o?k.shake:""].filter(Boolean).join(" ");return A.jsxs("div",{ref:Al,className:N,"data-annotation-popup":!0,style:g,onClick:C=>C.stopPropagation(),children:[A.jsxs("div",{className:k.header,children:[p&&Object.keys(p).length>0?A.jsxs("button",{className:k.headerToggle,onClick:()=>{const C=T;U(!T),C&&Ee(()=>{var W;return(W=D.current)==null?void 0:W.focus()},0)},type:"button",children:[A.jsx("svg",{className:`${k.chevron} ${T?k.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:A.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),A.jsx("span",{className:k.element,children:t})]}):A.jsx("span",{className:k.element,children:t}),e&&A.jsx("span",{className:k.timestamp,children:e})]}),p&&Object.keys(p).length>0&&A.jsx("div",{className:`${k.stylesWrapper} ${T?k.expanded:""}`,children:A.jsx("div",{className:k.stylesInner,children:A.jsx("div",{className:k.stylesBlock,children:Object.entries(p).map(([C,W])=>A.jsxs("div",{className:k.styleLine,children:[A.jsx("span",{className:k.styleProperty,children:C.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",A.jsx("span",{className:k.styleValue,children:W}),";"]},C))})})}),n&&A.jsxs("div",{className:k.quote,children:["“",n.slice(0,80),n.length>80?"...":"","”"]}),A.jsx("textarea",{ref:D,className:k.textarea,style:{borderColor:M?y:void 0},placeholder:a,value:B,onChange:C=>_(C.target.value),onFocus:()=>v(!0),onBlur:()=>v(!1),rows:2,onKeyDown:H}),A.jsxs("div",{className:k.actions,children:[f&&A.jsx("div",{className:k.deleteWrapper,children:A.jsx("button",{className:k.deleteButton,onClick:f,type:"button",children:A.jsx(ty,{size:22})})}),A.jsx("button",{className:k.cancel,onClick:ee,children:"Cancel"}),A.jsx("button",{className:k.submit,style:{backgroundColor:y,opacity:B.trim()?1:.4},onClick:x,disabled:!B.trim(),children:i})]})]})});var ny=`svg[fill=none] {
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
}`;if(typeof document<"u"){let l=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");l||(l=document.createElement("style"),l.id="feedback-tool-styles-page-toolbar-css-styles",l.textContent=ny,document.head.appendChild(l))}const ay="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAsQSURBVHgB7Z1tbFtXGcefc339kjjJnDZr8+KkTksHSYuSbuvKyhgJb9VWUJMJrV8mpaHwASb6JkElQJRKm5iERFoh8QXROkj7MD60KUIIBKgZA01Uok0HTYqoqNskTdelrZsXx3Gu79nzXMfXdmI71/fFjhv/pJt7j4/vtf33yXOec55zHzMoIDdv3vTMOW0dAIKPc2hjDHz4sE+p5It77QRxCwCDIF4rgNe6yhgfcoWloebm5iAUCAZ5hAQNu8R2HmX7QIAuHSLqZYjjxph8obW+aQDySF4EHpkY7ZBl1oMv1oVFDxSWIIo9IAi8v6WucRAsxjKBY63VcZjL/AgUXtRMBNCcnNzm9frBIkwXuEiEXQrZ7tOt9d5TYDKmCjx8+3YXiEJfHm2r2Zjeok0ReGRiAr2A6FkUtgMeBxgbYEw42lJXFwCDCGCQ63fvoDmIXnlsxCU476LPdG1s7AAYRHcLjvmw9hMo7BF4nGFwCm3zUdCJLoEVkyBHz+NhO6wNhphg69ZjMnIWeNHeXjSzI5uemgIzcDid4MTNIgIocmeuIucksFXivvKVPTD96BEY5cdv/RRe3rcPLCRnkUWtT7RC3Dgk7pQJrTgyPw8WQ6bxImqhWWRNXoSV4hYhcZF9Wp6sqQUvdmg+0Mn46Chcev/9tHWSJMGGjRth3bp1YJRrH3yAbSA9DY2N8Nzzz4NJKJ08elKdK83UrSjw8J0xGpkZ8hauDw/DD48eS1tnt9th7969yt4o/7g4CG+f9aet697/qpkCE+2KmwqQ1YXLaiIUR/tx93ONgNpgA8yqT0aBycbgpHUflMgOhxPZ7HFGN234zvh5GjKCTg4d/KZ6LEejMB8KpX0ew2+xtrZW2RslGAxCKMPr2NE/Fh0OtXzw9e9A29NPgykwGMTRXmf6qjSQacDPexYM0NrgVY8bGhpg9+7dUEhu3boFly5dUsu/OPNr+OKePWAaUbm7tWl5tCStiWACnIASuWET+mh+ZunDywSm2bGSv6sLX8ghLuvwlgksy/Jj6TVwzsFqGLDDS1txisCLbpkPSujFs7QVpwhcsr3GoVacXFZHchRa57L+1nv18mWY/OgjtVxdXa0eu1yujO5TviA3MPk9jfz7Pyn1JnoUnpHR0Y6WxtiSANVNuzY+fpYBPwA6+e7Bg/DXP/5JLe/cuRNWMzdu3ICHDx+q5eHxMTALFNXf0uDtpWMh8aD+QUWJVLA77Yp3dorASri9eNYwFAOesCgqE2SKDeY22z4G1rkxDhyiVlVVqeWZmRkIh8PKMdlGmqqMD5XpcaqPQ+c5koa4k5OTplzXajhTlokNxjo5ztutXKUmiiJUVFSo5bgIBAngdrtBEBIOTbIQ1EGWl5er5WSBjVzXchij2NUR4QraCnwvayU6nE98ZIdFFy0nlcF0klsOtSYcIaatp32mOoJGYMn1Zl3XjNm7lYg4bR0i58yS1uv1JmbT5ubmYGws4QaRbYyHiEiEu3fvqmKQOUg+9/79+8pm9nVHMYxlNVEQfCK+g3YawpmN1pZGUF2mVqq3Ba903Xy0YMahTcBX3QQlLAE9CZ+I9tdjxpf54rNNUOf8tFre2VapHkciTpiasqll6vnJO1DeBL6LR/VuiE92uZwuqKhMeAZTXg9EFhLrHWpqahLXnY/A1PT6xHXdleAqcy5eV4bJxihgG45dF18v2ePYWN6MERDjkeys4MSZuHjjiWFef+0ZKI9UZ3lGfdpHGbeBPfSUsjcVFoVIeRm2omiGJ9SklAJgDWSUSiM46/CZ37uVSEHz2rSluBbGoCo8tFhi4JTuaj7XtrAe/4PdyjH54B9OTmPMMP1QfX2VG+2yQ9N1H07PQigcib8l4ALZ3Nh1XRULULluLuO5G6Z/rx7Pi7XwqOxZMAPdAovRabS5/wc9MNkFNik2hyCjsDOheyBnCOk8UVEOWpmPSDA7l7wAMLFaiIkyVGY5V+9nWYmSibCYksAWo9tE5IKA5sAebkpf53DCU68cwncSs7N+vx96e3vV+nNvHYZ9Lz4DWqh77iWo37BFOaZVPs3Nzco+He+c6oavfWErWE2pBVtMSWCLscxExL0EgsllmZ+Ifhp/iDNitliP73vCBl1JJqF2vfZxEA9hEPNBbJbMhpPre3e3weziJHtgYhKG/ncL8g3DaKquWFFFeARqZv+csd45sx1WE/1/eA++8cav1HI2GxxybIZ7lV8FMyiZCIsRcMQTgBJWEbTMBif/O7ZvbYJD+01ci1s8BEjgAID5C/7I5sV5hJ3WmhSYQZAig/nvWtcIGDLCFiwIQzjh1ANFQnA68yJCl8OOM2/GbwczCwzWXBVBkgNgKx5nYsvXj2Ws++X3emH/l3bBaoFF+ZA4H40OOotI4GwtOByJwGrCJUlDwg66FbTkqlmBkhBPcdNw0vuCwFJXZq+EZKuCGWeLWnYtjIMom5P3IRs9L38uY52v7knQS/JniYj6rxMHAypKuEcR2MZhAA1yTgKH7Q3KFodCLmLEeoHP/OhbYAWTFV8GMxGYfEHZ058w2gqI5X4sYQ7BTy6mcFQEVuwwjylewjhoHtQ7PtWhMuPMj2ai4P7w365ch9O/Tdzrcfz4cdi16zPaTp4YAT71oaanUtT4XuULYAky748fqgLTXTE4dUlmoqALUW7ivO3Au/9Syz1H7MDWNWo6lytzwdoEnrfX4rTkFrCAQPwOIyLFAebAT0MJQ+Dw+GRyOUXgSESi5JiF7exYbGlpfMsF62+WXZFAy5K8lykCU2entxVTBCCw/pC66aXnpRdA+nu/uvX3vaGs69Wy/aa/HwoKh2XaLRsjK6240CM7lrRBbBG2lq3ABFq9y9PjLhNYcdkkWXeuxrXKUtsbJ21EgzJ3DN8ZG1wNGVV3bdfe0/vqaqAgMDbQ0tDgT1clZj7H1st59AoU2G37/mvmRHctJEi5hjNVZpynVFIHZmj2JRKgaciayDnrRDAZbZxpK/nGmUBtWlZIR75iVHlBkn7icNg/z4osV3A4sgDHTr8N4fkFpbyheSu82fdztf5T27aBQYZaGxtXTL+zosDkVYxMTHQXW3JQEvidv/wTIyCzSrl7fx28+YNXwSQozW23lidqihWRjcFOr7MU+VDIKYew5oUndEHKm8vB2pZM/9LU+owSnAlBZVUVyCx2e5jTYUpmbOsSNBP5EPl3712Gb//MD0Yhcc+cOwdVVU8oZYfx1OO6UoznvHQqLrLMo+et6PjmMDIct5tGiGLLJXErkxJ2GEB3knxd8Xp6oW0N3h1rwoXDz1gWWejUIy5haPHfdnRTRsbGhjAS0lfucHrstsTtsD09ieBIW5P2e4I3bdqUcu7s/DxE5dwTWjhcTnAYs7tBGmihK2bo941M+6mdpurqvnKnM23mKv7gNvD/vguaeHIzCJ/4rFocfTAJM2HLk9+nwmCQpgpWxU/tEPRG3C4X+YV0e1AAipeAkqa23ttphriEqWumMALhx60ZYnnNA1A8BLnMT6Kt3ZEuB7ARLE37IUnSAYw0nOCRkI/NPkhUJEd/bSKwzbvwq46tiuQONzB3Ii1CCL2K5Mn00Qf3wURI2NPlknTKqt/9tPRGRFEU/bjzo0Ad4HQfwGNKdeVJif4yAZjHq96IuPQbd5v/0zmxn5zE0Hpy9Ncq8nKnJ5qNQdzRRq2xS5bmulDWNgz05GcCiYb4UX6BFoTQikerWms68iJwMig22TjFzvErZz2SZGunxHjYGbRB7FYGT9I+hwurNj8Q/9lfWvtcFo0O5lPQpXwMqNZ1Y7Gza4oAAAAASUVORK5CYII=",uy="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_3508_29716'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='72'%20height='72'%3e%3crect%20width='72'%20height='72'%20rx='19.6364'%20fill='%23F9FBFD'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_3508_29716)'%3e%3crect%20x='-0.203125'%20width='72.2024'%20height='72'%20rx='19.6364'%20fill='%23199B61'/%3e%3cpath%20d='M18.3262%2034.8875C19.1522%2034.8875%2019.9392%2035.054%2020.6562%2035.3542C20.5336%2035.97%2020.4688%2036.6068%2020.4688%2037.2585C20.4688%2039.9795%2021.5909%2042.4379%2023.3955%2044.2C22.32%2045.8613%2020.4526%2046.9616%2018.3262%2046.9617C14.9919%2046.9617%2012.2891%2044.2588%2012.2891%2040.9246C12.2892%2037.5905%2014.992%2034.8875%2018.3262%2034.8875ZM30.1719%2027.5564C31.7294%2027.5564%2033.2006%2027.9256%2034.5049%2028.5779C33.809%2030.1812%2033.4229%2031.9501%2033.4229%2033.8093C33.4229%2037.6214%2035.0445%2041.0546%2037.6357%2043.4568C35.8561%2045.5978%2033.1735%2046.9616%2030.1719%2046.9617C27.5348%2046.9613%2025.1445%2045.9077%2023.3955%2044.2C24.0064%2043.2563%2024.3633%2042.1324%2024.3633%2040.9246C24.3631%2038.4165%2022.8334%2036.266%2020.6562%2035.3542C21.5417%2030.9083%2025.466%2027.557%2030.1719%2027.5564ZM46.5752%2020.657C53.8388%2020.6572%2059.7274%2026.5457%2059.7275%2033.8093C59.7275%2041.0731%2053.8389%2046.9615%2046.5752%2046.9617C43.1234%2046.9617%2039.9821%2045.632%2037.6357%2043.4568C39.0331%2041.7756%2039.874%2039.6155%2039.874%2037.2585C39.8737%2033.4579%2037.6877%2030.1696%2034.5049%2028.5779C36.5278%2023.9173%2041.1707%2020.657%2046.5752%2020.657Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",iy="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_3525_29046'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='72'%20height='72'%3e%3crect%20width='72'%20height='72'%20rx='19.6364'%20fill='%23F9FBFD'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_3525_29046)'%3e%3crect%20x='-0.203125'%20width='72.2024'%20height='72'%20rx='19.6364'%20fill='black'/%3e%3cpath%20d='M17%2041.655C17%2040.7028%2017.7719%2039.9309%2018.7241%2039.9309H33.3793V54.9999H18.7241C17.7719%2054.9999%2017%2054.228%2017%2053.2758V41.655Z'%20fill='white'/%3e%3cpath%20d='M33.3789%2039.9309H53.2755C54.2277%2039.9309%2054.9996%2040.7028%2054.9996%2041.655V53.2758C54.9996%2054.228%2054.2277%2054.9999%2053.2755%2054.9999H49.1267C48.1793%2054.9999%2047.2736%2054.6101%2046.6224%2053.9221L33.3789%2039.9309Z'%20fill='white'/%3e%3cpath%20d='M17%2018.7241C17%2017.7719%2017.7719%2017%2018.7241%2017H31.6552C32.6074%2017%2033.3793%2017.7719%2033.3793%2018.7241V39.9311L17.9881%2024.26C17.3548%2023.6152%2017%2022.7476%2017%2021.8438V18.7241Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",sy="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='72'%20height='72'%20fill='%235A6CFA'/%3e%3cpath%20d='M55.9971%2016.083C55.3509%2016.8041%2054.8456%2017.4047%2054.4053%2017.9902C46.1927%2028.9102%2046.3675%2043.9931%2054.8311%2054.7197C55.1835%2055.1664%2055.5764%2055.6201%2056.0439%2056.1318C55.1066%2055.2937%2054.3402%2054.6578%2053.5869%2054.1152C43.0827%2046.5503%2028.9173%2046.5503%2018.4131%2054.1152C17.6596%2054.6579%2016.8927%2055.2935%2015.9551%2056.1318C16.4229%2055.6199%2016.8164%2055.1665%2017.1689%2054.7197C25.6325%2043.9931%2025.8073%2028.9102%2017.5947%2017.9902C17.1543%2017.4046%2016.6484%2016.8043%2016.002%2016.083C16.5084%2016.544%2016.9591%2016.9328%2017.4023%2017.2812C28.3165%2025.8602%2043.6835%2025.8602%2054.5977%2017.2812C55.0408%2016.9329%2055.4909%2016.5438%2055.9971%2016.083Z'%20fill='url(%23paint0_linear_3525_29032)'%20stroke='url(%23paint1_linear_3525_29032)'%20stroke-width='0.28125'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_3525_29032'%20x1='36'%20y1='11.7422'%20x2='36'%20y2='60.2578'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_3525_29032'%20x1='36'%20y1='11.7422'%20x2='36'%20y2='48.4453'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",cy="/Portfolio/assets/Group%20427318942-D_-q_n6o.png",oy="/Portfolio/assets/Group%20427318941-D5mVX3q2.png",Io={avatarUrl:ay,text:"Current Lead Product Designer @ Layer3. Founder of Talebook–research repository app."},_y=[{name:"Ample",description:"A new way to amplify your money.",icon:uy,url:"#"},{name:"Layer3",description:"Discover onchain finance with one app.",icon:iy,url:"#"},{name:"Mellow",description:"Parenting coach mobile app.",icon:sy,url:"#"}],fy=[{date:"JULY 2020",title:"Using Rive to create an organization wide assets engine.",description:"Making sure mobile device works across all different devices available on the market. Easy way.",image:cy,url:"#"},{date:"JULY 2020",title:"Creating scalable multi-device mobile system.",description:"Making sure mobile device works across all different devices available on the market. Easy way.",image:oy,url:"#"}];function ry(){return A.jsxs("header",{className:"mb-12",children:[A.jsx("img",{src:Io.avatarUrl,alt:"Avatar",className:"w-14 h-14 rounded-2xl mb-5"}),A.jsx("p",{className:"text-[26px] leading-relaxed text-gray-900 max-w-[671px]",children:Io.text})]})}function dy(){return A.jsxs("section",{className:"mb-12",children:[A.jsx("h2",{className:"text-[24px] font-normal text-gray-900 mb-4 pb-4 border-b border-[#F2F2F2]",children:"Projects"}),A.jsx("div",{className:"flex flex-col gap-2",children:_y.map(l=>A.jsx("a",{href:l.url,className:"block group hover:bg-[#F9FBFD] active:bg-[#F2F5F7] rounded-[20px] px-[8px] py-[8px] -mx-[8px] transition-colors",children:A.jsxs("div",{className:"flex items-center gap-8",children:[A.jsx("img",{src:l.icon,alt:`${l.name} logo`,className:"w-[64px] h-[64px] rounded-[20px] shrink-0 object-cover group-active:scale-[0.95] transition-transform"}),A.jsxs("div",{children:[A.jsx("h3",{className:"text-[18px] font-normal text-gray-900 group-hover:text-gray-600 transition-colors",children:l.name}),A.jsx("p",{className:"text-[16px] text-gray-400",children:l.description})]})]})},l.name))})]})}function my(){return A.jsxs("section",{children:[A.jsx("h2",{className:"text-[24px] font-normal text-gray-900 mb-4 pb-4 border-b border-[#F2F2F2]",children:"Thoughts"}),A.jsx("div",{className:"flex flex-col gap-2",children:fy.map((l,t)=>A.jsx("a",{href:l.url,className:"block group hover:bg-[#F9FBFD] active:bg-[#F2F5F7] rounded-[20px] px-[8px] py-[16px] -mx-[8px] transition-colors",children:A.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 sm:gap-8",children:[A.jsx("span",{className:"text-xs font-normal tracking-wider text-gray-400 uppercase shrink-0 sm:w-[64px] sm:pt-1",children:l.date}),A.jsxs("div",{className:"w-full sm:w-[420px] shrink-0",children:[A.jsx("h3",{className:"text-[18px] font-normal text-gray-900 leading-snug group-hover:text-gray-600 transition-colors",children:l.title}),A.jsx("p",{className:"mt-2 text-[16px] text-gray-400 leading-relaxed",children:l.description})]}),l.image?A.jsx("img",{src:l.image,alt:l.title,className:"w-full sm:flex-1 h-36 bg-gray-100 rounded-xl object-cover group-active:scale-[0.95] transition-transform"}):A.jsx("div",{className:"w-full sm:flex-1 h-36 bg-gray-100 rounded-xl"})]})},t))})]})}function yy(){return A.jsxs(A.Fragment,{children:[A.jsxs("main",{className:"max-w-[920px] mx-auto px-6 py-16",children:[A.jsx(ry,{}),A.jsx(dy,{}),A.jsx(my,{})]}),!1]})}Im.createRoot(document.getElementById("root")).render(A.jsx(ul.StrictMode,{children:A.jsx(yy,{})}));

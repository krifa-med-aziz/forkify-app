var e,t,r,n,i,a,o,s,c,u,l,d,p,f,h,g=globalThis;function v(e){return e&&e.__esModule?e.default:e}var m={},y={},b=function(e){return e&&e.Math===Math&&e};y=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof g&&g)||b("object"==typeof y&&y)||function(){return this}()||Function("return this")();var _={},w={};_=!(w=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var k={},E={};E=!w(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var S=Function.prototype.call;k=E?S.bind(S):function(){return S.apply(S,arguments)};var O={}.propertyIsEnumerable,j=Object.getOwnPropertyDescriptor;r=j&&!O.call({1:2},1)?function(e){var t=j(this,e);return!!t&&t.enumerable}:O;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var $={},P={},x={},T=Function.prototype,M=T.call,q=E&&T.bind.bind(M,M),N={},I=(x=E?q:function(e){return function(){return M.apply(e,arguments)}})({}.toString),F=x("".slice);N=function(e){return F(I(e),8,-1)};var H=Object,D=x("".split);P=w(function(){return!H("z").propertyIsEnumerable(0)})?function(e){return"String"===N(e)?D(e,""):H(e)}:H;var R={},C={};C=function(e){return null==e};var A=TypeError;R=function(e){if(C(e))throw new A("Can't call method on "+e);return e},$=function(e){return P(R(e))};var U={},W={},B={},G={},Q="object"==typeof document&&document.all;G=void 0===Q&&void 0!==Q?function(e){return"function"==typeof e||e===Q}:function(e){return"function"==typeof e},B=function(e){return"object"==typeof e?null!==e:G(e)};var z={},J={};J=function(e,t){var r;return arguments.length<2?(r=y[e],G(r)?r:void 0):y[e]&&y[e][t]};var Y={};Y=x({}.isPrototypeOf);var V={},K={},X={},Z={},ee=y.navigator,et=ee&&ee.userAgent;Z=et?String(et):"";var er=y.process,en=y.Deno,ei=er&&er.versions||en&&en.version,ea=ei&&ei.v8;ea&&(i=(n=ea.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&Z&&(!(n=Z.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=Z.match(/Chrome\/(\d+)/))&&(i=+n[1]),X=i;var eo=y.String;V=(K=!!Object.getOwnPropertySymbols&&!w(function(){var e=Symbol("symbol detection");return!eo(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&X&&X<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var es=Object;z=V?function(e){return"symbol"==typeof e}:function(e){var t=J("Symbol");return G(t)&&Y(t.prototype,es(e))};var ec={},eu={},el={},ed=String;el=function(e){try{return ed(e)}catch(e){return"Object"}};var ep=TypeError;eu=function(e){if(G(e))return e;throw new ep(el(e)+" is not a function")},ec=function(e,t){var r=e[t];return C(r)?void 0:eu(r)};var ef={},eh=TypeError;ef=function(e,t){var r,n;if("string"===t&&G(r=e.toString)&&!B(n=k(r,e))||G(r=e.valueOf)&&!B(n=k(r,e))||"string"!==t&&G(r=e.toString)&&!B(n=k(r,e)))return n;throw new eh("Can't convert object to primitive value")};var eg={},ev={},em={},ey={};ey=!1;var eb={},e_=Object.defineProperty;eb=function(e,t){try{e_(y,e,{value:t,configurable:!0,writable:!0})}catch(r){y[e]=t}return t};var ew="__core-js_shared__",ek=em=y[ew]||eb(ew,{});(ek.versions||(ek.versions=[])).push({version:"3.41.0",mode:ey?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ev=function(e,t){return em[e]||(em[e]=t||{})};var eE={},eS={},eO=Object;eS=function(e){return eO(R(e))};var ej=x({}.hasOwnProperty);eE=Object.hasOwn||function(e,t){return ej(eS(e),t)};var eL={},e$=0,eP=Math.random(),ex=x(1..toString);eL=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++e$+eP,36)};var eT=y.Symbol,eM=ev("wks"),eq=V?eT.for||eT:eT&&eT.withoutSetter||eL,eN=TypeError,eI=function(e){return eE(eM,e)||(eM[e]=K&&eE(eT,e)?eT[e]:eq("Symbol."+e)),eM[e]}("toPrimitive");W=function(e,t){if(!B(e)||z(e))return e;var r,n=ec(e,eI);if(n){if(void 0===t&&(t="default"),r=k(n,e,t),!B(r)||z(r))return r;throw new eN("Can't convert object to primitive value")}return void 0===t&&(t="number"),ef(e,t)},U=function(e){var t=W(e,"string");return z(t)?t:t+""};var eF={},eH={},eD=y.document,eR=B(eD)&&B(eD.createElement);eH=function(e){return eR?eD.createElement(e):{}},eF=!_&&!w(function(){return 7!==Object.defineProperty(eH("div"),"a",{get:function(){return 7}}).a});var eC=Object.getOwnPropertyDescriptor;t=_?eC:function(e,t){if(e=$(e),t=U(t),eF)try{return eC(e,t)}catch(e){}if(eE(e,t))return L(!k(r,e,t),e[t])};var eA={},eU={};eU=_&&w(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eW={},eB=String,eG=TypeError;eW=function(e){if(B(e))return e;throw new eG(eB(e)+" is not an object")};var eQ=TypeError,ez=Object.defineProperty,eJ=Object.getOwnPropertyDescriptor,eY="enumerable",eV="configurable",eK="writable";a=_?eU?function(e,t,r){if(eW(e),t=U(t),eW(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eK in r&&!r[eK]){var n=eJ(e,t);n&&n[eK]&&(e[t]=r.value,r={configurable:eV in r?r[eV]:n[eV],enumerable:eY in r?r[eY]:n[eY],writable:!1})}return ez(e,t,r)}:ez:function(e,t,r){if(eW(e),t=U(t),eW(r),eF)try{return ez(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eQ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eA=_?function(e,t,r){return a(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0={},e1=Function.prototype,e2=_&&Object.getOwnPropertyDescriptor,e3=eE(e1,"name"),e4=e3&&(!_||_&&e2(e1,"name").configurable),e6={},e7=x(Function.toString);G(em.inspectSource)||(em.inspectSource=function(e){return e7(e)}),e6=em.inspectSource;var e5={},e8={},e9=y.WeakMap;e8=G(e9)&&/native code/.test(String(e9));var te={},tt=ev("keys");te=function(e){return tt[e]||(tt[e]=eL(e))};var tr={};tr={};var tn="Object already initialized",ti=y.TypeError,ta=y.WeakMap;if(e8||em.state){var to=em.state||(em.state=new ta);to.get=to.get,to.has=to.has,to.set=to.set,o=function(e,t){if(to.has(e))throw new ti(tn);return t.facade=e,to.set(e,t),t},s=function(e){return to.get(e)||{}},c=function(e){return to.has(e)}}else{var ts=te("state");tr[ts]=!0,o=function(e,t){if(eE(e,ts))throw new ti(tn);return t.facade=e,eA(e,ts,t),t},s=function(e){return eE(e,ts)?e[ts]:{}},c=function(e){return eE(e,ts)}}var tc=(e5={set:o,get:s,has:c,enforce:function(e){return c(e)?s(e):o(e,{})},getterFor:function(e){return function(t){var r;if(!B(t)||(r=s(t)).type!==e)throw new ti("Incompatible receiver, "+e+" required");return r}}}).enforce,tu=e5.get,tl=String,td=Object.defineProperty,tp=x("".slice),tf=x("".replace),th=x([].join),tg=_&&!w(function(){return 8!==td(function(){},"length",{value:8}).length}),tv=String(String).split("String"),tm=eZ=function(e,t,r){"Symbol("===tp(tl(t),0,7)&&(t="["+tf(tl(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eE(e,"name")||e4&&e.name!==t)&&(_?td(e,"name",{value:t,configurable:!0}):e.name=t),tg&&r&&eE(r,"arity")&&e.length!==r.arity&&td(e,"length",{value:r.arity});try{r&&eE(r,"constructor")&&r.constructor?_&&td(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tc(e);return eE(n,"source")||(n.source=th(tv,"string"==typeof t?t:"")),e};Function.prototype.toString=tm(function(){return G(this)&&tu(this).source||e6(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(G(r)&&eZ(r,o,n),n.global)i?e[t]=r:eb(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var ty={},tb={},t_={},tw={},tk={},tE={},tS={},tO=Math.ceil,tj=Math.floor;tS=Math.trunc||function(e){var t=+e;return(t>0?tj:tO)(t)},tE=function(e){var t=+e;return t!=t||0===t?0:tS(t)};var tL=Math.max,t$=Math.min;tk=function(e,t){var r=tE(e);return r<0?tL(r+t,0):t$(r,t)};var tP={},tx={},tT=Math.min;tx=function(e){var t=tE(e);return t>0?tT(t,0x1fffffffffffff):0},tP=function(e){return tx(e.length)};var tM=function(e){return function(t,r,n){var i,a=$(t),o=tP(a);if(0===o)return!e&&-1;var s=tk(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tq={includes:tM(!0),indexOf:tM(!1)}.indexOf,tN=x([].push);t_=function(e,t){var r,n=$(e),i=0,a=[];for(r in n)!eE(tr,r)&&eE(n,r)&&tN(a,r);for(;t.length>i;)eE(n,r=t[i++])&&(~tq(a,r)||tN(a,r));return a};var tI={},tF=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");u=Object.getOwnPropertyNames||function(e){return t_(e,tF)},l=Object.getOwnPropertySymbols;var tH=x([].concat);tb=J("Reflect","ownKeys")||function(e){var t=u(eW(e));return l?tH(t,l(e)):t},ty=function(e,r,n){for(var i=tb(r),o=0;o<i.length;o++){var s=i[o];eE(e,s)||n&&eE(n,s)||a(e,s,t(r,s))}};var tD={},tR=/#|\.prototype\./,tC=function(e,t){var r=tU[tA(e)];return r===tB||r!==tW&&(G(t)?w(t):!!t)},tA=tC.normalize=function(e){return String(e).replace(tR,".").toLowerCase()},tU=tC.data={},tW=tC.NATIVE="N",tB=tC.POLYFILL="P";tD=tC,m=function(e,r){var n,i,a,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?y:l?y[c]||eb(c,{}):y[c]&&y[c].prototype)for(i in r){if(o=r[i],a=e.dontCallGetSet?(s=t(n,i))&&s.value:n[i],!tD(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;ty(o,a)}(e.sham||a&&a.sham)&&eA(o,"sham",!0),eX(n,i,o,e)}};var tG={},tQ={},tz=Function.prototype,tJ=tz.apply,tY=tz.call;tQ="object"==typeof Reflect&&Reflect.apply||(E?tY.bind(tJ):function(){return tY.apply(tJ,arguments)});var tV={},tK={},tX=(tK=function(e){if("Function"===N(e))return x(e)})(tK.bind);tV=function(e,t){return eu(e),void 0===t?e:E?tX(e,t):function(){return e.apply(t,arguments)}};var tZ={};tZ=J("document","documentElement");var t0={};t0=x([].slice);var t1={},t2=TypeError;t1=function(e,t){if(e<t)throw new t2("Not enough arguments");return e};var t3={};t3=/(?:ipad|iphone|ipod).*applewebkit/i.test(Z);var t4={},t6={},t7=function(e){return Z.slice(0,e.length)===e};t4="NODE"===(t6=t7("Bun/")?"BUN":t7("Cloudflare-Workers")?"CLOUDFLARE":t7("Deno/")?"DENO":t7("Node.js/")?"NODE":y.Bun&&"string"==typeof Bun.version?"BUN":y.Deno&&"object"==typeof Deno.version?"DENO":"process"===N(y.process)?"NODE":y.window&&y.document?"BROWSER":"REST");var t5=y.setImmediate,t8=y.clearImmediate,t9=y.process,re=y.Dispatch,rt=y.Function,rr=y.MessageChannel,rn=y.String,ri=0,ra={},ro="onreadystatechange";w(function(){d=y.location});var rs=function(e){if(eE(ra,e)){var t=ra[e];delete ra[e],t()}},rc=function(e){return function(){rs(e)}},ru=function(e){rs(e.data)},rl=function(e){y.postMessage(rn(e),d.protocol+"//"+d.host)};t5&&t8||(t5=function(e){t1(arguments.length,1);var t=G(e)?e:rt(e),r=t0(arguments,1);return ra[++ri]=function(){tQ(t,void 0,r)},p(ri),ri},t8=function(e){delete ra[e]},t4?p=function(e){t9.nextTick(rc(e))}:re&&re.now?p=function(e){re.now(rc(e))}:rr&&!t3?(h=(f=new rr).port2,f.port1.onmessage=ru,p=tV(h.postMessage,h)):y.addEventListener&&G(y.postMessage)&&!y.importScripts&&d&&"file:"!==d.protocol&&!w(rl)?(p=rl,y.addEventListener("message",ru,!1)):p=ro in eH("script")?function(e){tZ.appendChild(eH("script"))[ro]=function(){tZ.removeChild(this),rs(e)}}:function(e){setTimeout(rc(e),0)});var rd=(tG={set:t5,clear:t8}).clear;m({global:!0,bind:!0,enumerable:!0,forced:y.clearImmediate!==rd},{clearImmediate:rd});var rp=tG.set,rf={},rh=y.Function,rg=/MSIE .\./.test(Z)||"BUN"===t6&&((e=y.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rf=function(e,t){var r=t?2:1;return rg?function(n,i){var a=t1(arguments.length,1)>r,o=G(n)?n:rh(n),s=a?t0(arguments,r):[],c=a?function(){tQ(o,this,s)}:o;return t?e(c,i):e(c)}:e};var rv=y.setImmediate?rf(rp,!1):rp;m({global:!0,bind:!0,enumerable:!0,forced:y.setImmediate!==rv},{setImmediate:rv});var rm=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,a){var o,s,c,u,l=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(l,"_invoke",{value:(o=e,s=n,c=new L(a||[]),u=p,function(e,r){if(u===f)throw Error("Generator is already running");if(u===h){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var i=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var o=d(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,c);if(i){if(i===g)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===p)throw u=h,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=f;var a=d(o,s,c);if("normal"===a.type){if(u=c.done?h:"suspendedYield",a.arg===g)continue;return{value:a.arg,done:c.done}}"throw"===a.type&&(u=h,c.method="throw",c.arg=a.arg)}})}),l}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};u(b,o,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_($([])));w&&w!==r&&n.call(w,o)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=d(e[i],e,a);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(l).then(function(e){u.value=e,o(u)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function $(e){if(null!=e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new S(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),u(k,c,"Generator"),u(k,o,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=$,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);else if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(u){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rm}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rm:Function("r","regeneratorRuntime = r")(rm)}const ry="https://forkify-api.jonas.io/api/v2/recipes/",rb="f115abb8-3f67-4147-bee5-e73921e54f46",r_=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rw={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},rk=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,servings:t.servings,image:t.image_url,sourceURL:t.source_url,ingredients:t.ingredients,cookingTime:t.cooking_time,...t.key&&{key:t.key}}},rE=async function(e){try{let t=await r_(`${ry}${e}?key=${rb}`);rw.recipe=rk(t),rw.bookmarks.some(t=>t.id===e)?rw.recipe.bookmarked=!0:rw.recipe.bookmarked=!1}catch(e){throw e}},rS=async function(e){try{rw.search.query=e;let t=await r_(`${ry}?search=${e}&key=${rb}`);rw.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rw.search.page=1}catch(e){throw e}},rO=function(e=rw.search.page){rw.search.page=e;let t=(e-1)*rw.search.resultsPerPage,r=e*rw.search.resultsPerPage;return rw.search.results.slice(t,r)},rj=function(e){rw.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rw.recipe.servings}),rw.recipe.servings=e},rL=function(){localStorage.setItem("bookmarks",JSON.stringify(rw.bookmarks))},r$=function(e){rw.bookmarks.push(e),e.id===rw.recipe.id&&(rw.recipe.bookmarked=!0),rL()},rP=function(e){let t=rw.bookmarks.findIndex(t=>t.id===e);rw.bookmarks.splice(t,1),e===rw.recipe.id&&(rw.recipe.bookmarked=!1),rL()},rx=localStorage.getItem("bookmarks");rx&&(rw.bookmarks=JSON.parse(rx));const rT=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:"",unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await r_(`${ry}?key=${rb}`,r);rw.recipe=rk(n),r$(rw.recipe)}catch(e){throw e}};var rM={};rM=import.meta.resolve("ieQkc");class rq{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n.at(t);e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}renderError(e=this._errorMessage){let t=`
          <div class="error">
            <div>
                <svg>
                    <use href="${v(rM)}#icon-alert-triangle"></use>
                </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
          <div class="message">
              <div>
                <svg>
                  <use href="${v(rM)}#icon-smile"></use>
                </svg>
              </div>
              <p>${e}</p>
            </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderSpinner(){let e=`
              <div class="spinner">
                <svg>
                  <use href="${v(rM)}#icon-loader"></use>
                </svg>
              </div> `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}}class rN extends rq{_parentElement=document.querySelector(".recipe");_errorMessage="No recipes found for your query. Please try again!";_message="Start by searching for a recipe or an ingredient. Have fun!";addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addhandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${v(rM)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${v(rM)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-To="${this._data.servings-1}">
                <svg>
                  <use href="${v(rM)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings"  data-update-To="${this._data.servings+1}">
                <svg>
                  <use href="${v(rM)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
             <svg>
              <use href="${v(rM)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${v(rM)}#icon-bookmark${this._data.bookmarked?"-fill":" "}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceURL}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${v(rM)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        
    `}_generateMarkupIngredient(e){return`
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${v(rM)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${e.quantity?e.quantity:""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
              </div>
            </li>`}}var rI=new rN;class rF{_parentelement=document.querySelector(".search");getQuery(){let e=this._parentelement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentelement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentelement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rH=new rF,rD=new class extends rq{_parentElement=" ";_generateMarkup(){let e=window.location.hash.slice(1);return`<li class="preview">
            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                  <svg>
                    <use href="${v(rM)}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>`}};class rR extends rq{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query. Please try again!";generateMarkupNumPages(){let e=`
          <div class="page_number ">
            <span>6 Pages</span>
          </div>`;this._parentElement.appendChild(e)}_generateMarkup(){return this._data.map(e=>rD.render(e,!1)).join(" ")}}var rC=new rR;class rA extends rq{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){t.preventDefault();let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}generateMarkupNumPages(e){let t=document.querySelector(".page--number");t.parentNode.removeChild(t);let r=`
          <div class="page--number">
            <span class="page">${e} Pages</span>
          </div>`;this._parentElement.insertAdjacentHTML("beforebegin",r)}_generateMarkupRight(e){return`
          <button data-goto='${e+1}' class="btn--inline pagination__btn--next">
              <span>Page ${e+1}</span>
              <svg class="search__icon">
                <use href="${v(rM)}#icon-arrow-right"></use>
              </svg>
          </button>
        `}_generateMarkupLeft(e){return`
          <button data-goto='${e-1}' class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                  <use href="${v(rM)}#icon-arrow-left"></use>
              </svg>
              <span>Page ${e-1}</span>
          </button>
        `}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?this._generateMarkupRight(e):e===t&&t>1?this._generateMarkupLeft(e):e<t?this._generateMarkupLeft(e).concat(this._generateMarkupRight(e)):""}}var rU=new rA;class rW extends rq{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";addHandlerRender(e){window.addEventListener("load",function(){e()})}_generateMarkup(){return this._data.map(e=>rD.render(e,!1)).join(" ")}}var rB=new rW;class rG extends rq{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnClose=document.querySelector(".btn--close-modal");_btnOpen=document.querySelector(".nav__btn--add-recipe");_message="Recipe was successfully uploaded";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHanlderUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}renderForm(){this._clear();let e=`<div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST606" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST606" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST606" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST606" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="${v(rM)}#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>`;this._parentElement.insertAdjacentHTML("afterbegin",e)}}var rQ=new rG;const rz=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rI.renderSpinner(),rC.update(rO()),rB.update(rw.bookmarks),await rE(e),rI.render(rw.recipe)}catch(e){rI.renderSpinner(),rI.renderError()}},rJ=async function(){try{rC.renderSpinner();let e=rH.getQuery();if(!e||0===e.length)return rC.renderError();await rS(e),rC.render(rO()),rU.generateMarkupNumPages(Math.ceil(rw.search.results.length/rw.search.resultsPerPage)),rU.render(rw.search)}catch(e){rC.renderError(e.message)}},rY=async function(e){try{rQ.renderSpinner(),await rT(e),rI.render(rw.recipe),rQ.renderMessage(),setTimeout(()=>{rQ.renderForm()},2500),rB.render(rw.bookmarks),window.history.pushState(null,"",`#${rw.recipe.id}`)}catch(e){rQ.renderError(e.message)}};rB.addHandlerRender(function(){rB.render(rw.bookmarks)}),rI.addHandlerRender(rz),rI.addHandlerUpdateServings(function(e){rj(e),rI.update(rw.recipe)}),rH.addHandlerSearch(rJ),rU.addHandlerClick(function(e){rC.render(rO(e)),rU.render(rw.search)}),rI.addhandlerAddBookmark(function(){rw.recipe.bookmarked?rP(rw.recipe.id):r$(rw.recipe),rI.update(rw.recipe),rB.render(rw.bookmarks)}),rQ.addHanlderUpload(rY);
//# sourceMappingURL=forkify App.e078ee38.js.map

// tslint:disable-next-line:max-line-length
export const worker = `!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t,r){!function(e,t,r,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e,t){return void 0===t?e:t.reduce(function(e,t){if("capitalize"===t){var o=e.charAt(0).toUpperCase(),i=e.slice(1);return"".concat(o).concat(i)}return"dashify"===t?r(e):"prependIndefiniteArticle"===t?"".concat(n(e)," ").concat(e):e},e)},i=function(e,r){for(var n=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,i=[],a=n.exec(e);null!==a;){var s={modifiers:[],name:a[1]};if(void 0!==a[3])for(var u=/\\.[^(]+\\(\\)/g,c=u.exec(a[2]);null!==c;)s.modifiers.push(c[0].slice(1,-2)),c=u.exec(a[2]);i.push(s),a=n.exec(e)}var d=i.reduce(function(e,n){return e.map(function(e){return"string"==typeof e?e.split(function(e){var t=e.name+e.modifiers.map(function(e){return"\\\\.".concat(e,"\\\\(\\\\)")}).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")}(n)).reduce(function(e,i,a){return 0===a?[i]:n.name in r?t(e).concat([o(r[n.name],n.modifiers),i]):t(e).concat([function(e){return o(e[n.name],n.modifiers)},i])},[]):[e]}).reduce(function(e,r){return t(e).concat(t(r))},[])},[e]);return function(e){return d.reduce(function(r,n){return"string"==typeof n?t(r).concat([n]):t(r).concat([n(e)])},[]).join("")}};e.compile=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:i(e.code,t),n=void 0===e.message?void 0:i(e.message,t);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,i=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},a=i.cause,s=i.missingParameters,u=void 0===n?new Error:new Error(n(s));return null!==a&&(u.cause=a),void 0!==r&&(u.code=r(s)),void 0!==e.status&&(u.status=e.status),u}},Object.defineProperty(e,"__esModule",{value:!0})}(t,r(2),r(6),r(7))},function(e,t,r){!function(e){"use strict";var t=new WeakMap,r=Number.MAX_SAFE_INTEGER||9007199254740991,n=function(e,r){return t.set(e,r),r},o=function(e){var o=t.get(e),i=void 0===o?e.size:o>2147483648?0:o+1;if(!e.has(i))return n(e,i);if(e.size<1073741824){for(;e.has(i);)i=Math.floor(2147483648*Math.random());return n(e,i)}if(e.size>r)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(i);)i=Math.floor(Math.random()*r);return n(e,i)};e.addUniqueNumber=function(e){var t=o(e);return e.add(t),t},e.generateUniqueNumber=o,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,r){var n=r(3),o=r(4),i=r(5);e.exports=function(e){return n(e)||o(e)||i()}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,r){"use strict";e.exports=function(e,t){if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,e=>/[À-ž]/.test(e)?e:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,e=>t&&t.condense?"-":e).toLowerCase()}},function(e,t,r){var n=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),i=["honest","hour","hono"];for(t in i)if(0==o.indexOf(i[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var a=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<a.length;t++)if(o.match(a[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=n:window.indefiniteArticle=n},function(e,t,r){"use strict";r.r(t);var n=r(0);const o=-32603,i=-32602,a=-32601,s=Object(n.compile)({message:'The requested method called "\${method}" is not supported.',status:a}),u=Object(n.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:o}),c=Object(n.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:o}),d=Object(n.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:i});var l=r(1);const f=new Map,p=(e,t,r)=>Object.assign({},t,{connect:r=>{let n=r.port;n.start();const o=e(n,t),i=Object(l.generateUniqueNumber)(f);return f.set(i,()=>{o(),n.close(),f.delete(i)}),{result:i}},disconnect:e=>{let t=e.portId;const r=f.get(t);if(void 0===r)throw d({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await(()=>new Promise(e=>{const t=new ArrayBuffer(0),r=new MessageChannel,n=r.port1,o=r.port2;n.onmessage=(t=>{let r=t.data;return e(null!==r)}),o.postMessage(t,[t])}))()){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),h=new Map;!function e(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const o=p(e,r,n),i=((e,t)=>async r=>{let n=r.data,o=n.id,i=n.method,a=n.params;const d=t[i];try{if(void 0===d)throw s({method:i});const t=void 0===a?d():d(a);if(void 0===t)throw u({method:i});const r=t instanceof Promise?await t:t;if(null===o){if(void 0!==r.result)throw c({method:i})}else{if(void 0===r.result)throw c({method:i});const t=r.result,n=r.transferables,a=void 0===n?[]:n;e.postMessage({id:o,result:t},a)}}catch(t){const r=t.message,n=t.status,i=void 0===n?-32603:n;e.postMessage({error:{code:i,message:r},id:o})}})(t,o);return t.addEventListener("message",i),()=>t.removeEventListener("message",i)}(self,{characterize:()=>({result:/^audio\\/wav$/}),encode:e=>{let t=e.recordingId;const r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.bitRate,n=void 0===r?16:r,o=t.sampleRate,i=void 0===o?44100:o;const a=n>>3,s=e.length,u=e[0].reduce((e,t)=>e+t.length,0),c=new ArrayBuffer(u*s*a+44),d=new DataView(c);return d.setUint32(0,1380533830),d.setUint32(4,c.byteLength-8,!0),d.setUint32(8,1463899717),d.setUint32(12,1718449184),d.setUint32(16,16,!0),d.setUint16(20,1,!0),d.setUint16(22,s,!0),d.setUint32(24,i,!0),d.setUint32(28,i*s*a,!0),d.setUint16(32,s*a,!0),d.setUint16(34,n,!0),d.setUint32(36,1684108385),d.setUint32(40,c.byteLength-44,!0),e.forEach((e,t)=>{let r=44+t*a;e.forEach(e=>{const t=e.length;for(let n=0;n<t;n+=1){const t=e[n];d.setUint16(r,t<0?32768*Math.max(-1,t):32767*Math.min(1,t),!0),r+=s*a}})}),[c]}(h.get(t));return h.delete(t),{result:r,transferables:r}},record:e=>{let t=e.recordingId,r=e.typedArrays;const n=h.get(t);return void 0===n?h.set(t,[r]):n.forEach((e,t)=>e.push(r[t])),{result:null}}})}]);`;

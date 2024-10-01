// This is the minified and stringified code of the extendable-media-recorder-wav-encoder-worker package.
export const worker = `(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,s=536870912,a=2*s,o=function(e,t){return function(r){var o=t.get(r),i=void 0===o?r.size:o<a?o+1:0;if(!r.has(i))return e(r,i);if(r.size<s){for(;r.has(i);)i=Math.floor(Math.random()*a);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),l=o(c,i),u=t(l);e.addUniqueNumber=u,e.generateUniqueNumber=l}(t)}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,s=(e,t)=>Object.assign(new Error(e),{status:t}),a=t=>s('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),o=(t,r)=>async({data:{id:o,method:i,params:c}})=>{const l=r[i];try{if(void 0===l)throw(e=>s('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===c?l():l(c);if(void 0===r)throw(t=>s('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const u=r instanceof Promise?await r:r;if(null===o){if(void 0!==u.result)throw a(i)}else{if(void 0===u.result)throw a(i);const{result:e,transferables:r=[]}=u;t.postMessage({id:o,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:o})}};var i=r(455);const c=new Map,l=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),s=(0,i.generateUniqueNumber)(c);return c.set(s,(()=>{n(),t.close(),c.delete(s)})),{result:s}},disconnect:({portId:e})=>{const r=c.get(e);if(void 0===r)throw(e=>s('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),u=(e,t,r=()=>!0)=>{const n=l(u,t,r),s=o(e,n);return e.addEventListener("message",s),()=>e.removeEventListener("message",s)},d=e=>e.reduce(((e,t)=>e+t.length),0),h=(e,t)=>{const r=[];let n=0;e:for(;n<t;){const t=e.length;for(let s=0;s<t;s+=1){const t=e[s];void 0===r[s]&&(r[s]=[]);const a=t.shift();if(void 0===a)break e;r[s].push(a),0===s&&(n+=a.length)}}if(n>t){const s=n-t;r.forEach(((t,r)=>{const n=t.pop(),a=n.length-s;t.push(n.subarray(0,a)),e[r].unshift(n.subarray(a))}))}return r},f=new Map,m=(e=>(t,r,n)=>{const s=e.get(t);if(void 0===s){const s={channelDataArrays:n.map((e=>[e])),isComplete:!0,sampleRate:r};return e.set(t,s),s}return s.channelDataArrays.forEach(((e,t)=>e.push(n[t]))),s})(f),p=((e,t)=>(r,n,s,a)=>{const o=s>>3,i="subsequent"===n?0:44,c=r.length,l=e(r[0]),u=new ArrayBuffer(l*c*o+i),d=new DataView(u);return"subsequent"!==n&&t(d,s,c,"complete"===n?l:Number.POSITIVE_INFINITY,a),r.forEach(((e,t)=>{let r=i+t*o;e.forEach((e=>{const t=e.length;for(let n=0;n<t;n+=1){const t=e[n];d.setInt16(r,t<0?32768*Math.max(-1,t):32767*Math.min(1,t),!0),r+=c*o}}))})),[u]})(d,((e,t,r,n,s)=>{const a=t>>3,o=Math.min(n*r*a,4294967251);e.setUint32(0,1380533830),e.setUint32(4,o+36,!0),e.setUint32(8,1463899717),e.setUint32(12,1718449184),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,r,!0),e.setUint32(24,s,!0),e.setUint32(28,s*r*a,!0),e.setUint16(32,r*a,!0),e.setUint16(34,t,!0),e.setUint32(36,1684108385),e.setUint32(40,o,!0)})),v=new Map;u(self,{characterize:()=>({result:/^audio\\/wav$/}),encode:({recordingId:e,timeslice:t})=>{const r=v.get(e);void 0!==r&&(v.delete(e),r.reject(new Error("Another request was made to initiate an encoding.")));const n=f.get(e);if(null!==t){if(void 0===n||d(n.channelDataArrays[0])*(1e3/n.sampleRate)<t)return new Promise(((r,n)=>{v.set(e,{reject:n,resolve:r,timeslice:t})}));const r=h(n.channelDataArrays,Math.ceil(t*(n.sampleRate/1e3))),s=p(r,n.isComplete?"initial":"subsequent",16,n.sampleRate);return n.isComplete=!1,{result:s,transferables:s}}if(void 0!==n){const t=p(n.channelDataArrays,n.isComplete?"complete":"subsequent",16,n.sampleRate);return f.delete(e),{result:t,transferables:t}}return{result:[],transferables:[]}},record:({recordingId:e,sampleRate:t,typedArrays:r})=>{const n=m(e,t,r),s=v.get(e);if(void 0!==s&&d(n.channelDataArrays[0])*(1e3/t)>=s.timeslice){const r=h(n.channelDataArrays,Math.ceil(s.timeslice*(t/1e3))),a=p(r,n.isComplete?"initial":"subsequent",16,t);n.isComplete=!1,v.delete(e),s.resolve({result:a,transferables:a})}return{result:null}}})})()})();`; // tslint:disable-line:max-line-length

// tslint:disable-next-line:max-line-length
export const worker = `!function(){"use strict";var t=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=new Uint8Array(n.reduce(function(t,e){return t+e.byteLength},0));return n.reduce(function(t,e){return a.set(new Uint8Array(e.buffer),t),t+e.byteLength},0),new t(a.buffer)},e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.bitRate,r=void 0===n?16:n,a=e.sampleRate,i=void 0===a?44100:a,o=r>>3,s=t.length,h=t[0].length,c=new ArrayBuffer(h*s*o+44),d=new DataView(c);return d.setUint8(0,"R".charCodeAt(0)),d.setUint8(1,"I".charCodeAt(0)),d.setUint8(2,"F".charCodeAt(0)),d.setUint8(3,"F".charCodeAt(0)),d.setUint32(4,c.byteLength-8,!0),d.setUint8(8,"W".charCodeAt(0)),d.setUint8(9,"A".charCodeAt(0)),d.setUint8(10,"V".charCodeAt(0)),d.setUint8(11,"E".charCodeAt(0)),d.setUint8(12,"f".charCodeAt(0)),d.setUint8(13,"m".charCodeAt(0)),d.setUint8(14,"t".charCodeAt(0)),d.setUint8(15," ".charCodeAt(0)),d.setUint32(16,16,!0),d.setUint16(20,1,!0),d.setUint16(22,s,!0),d.setUint32(24,i,!0),d.setUint32(28,i*s*o,!0),d.setUint16(32,s*o,!0),d.setUint16(34,r,!0),d.setUint8(36,"d".charCodeAt(0)),d.setUint8(37,"a".charCodeAt(0)),d.setUint8(38,"t".charCodeAt(0)),d.setUint8(39,"a".charCodeAt(0)),d.setUint32(40,c.byteLength-44,!0),t.forEach(function(t,e){for(var n=44+e*o,r=h,a=0;a<r;a+=1){var i=n+a*s*o,c=Math.max(-1,Math.min(t[a],1));d.setUint16(i,c<0?32768*c:32767*c,!0)}}),c},n=[];addEventListener("message",function(r){var a=r.data,i=a.done,o=void 0!==i&&i,s=a.typedArrays,h=void 0===s?[]:s;0===n.length?h.forEach(function(t){return n.push(t)}):h.forEach(function(e,r){var a=n[r];n[r]=t(Float32Array,a,e)}),o&&(postMessage({arrayBuffer:e(n)}),n.length=0)})}();`;

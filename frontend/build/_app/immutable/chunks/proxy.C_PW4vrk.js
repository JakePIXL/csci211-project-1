import{S as x,C as R,D as E,E as v,F as S,d as l,U as u,e as h,g as w,x as T,G as j,H as A,I as K}from"./runtime.Bs8s2Cqe.js";function y(s,I=null,L){if(typeof s!="object"||s===null||x in s)return s;const P=A(s);if(P!==R&&P!==E)return s;var i=new Map,b=K(s),o=v(0);b&&i.set("length",v(s.length));var g;return new Proxy(s,{defineProperty(f,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&S();var n=i.get(e);return n===void 0?(n=v(t.value),i.set(e,n)):l(n,y(t.value,g)),!0},deleteProperty(f,e){var t=i.get(e);if(t===void 0)e in f&&i.set(e,v(u));else{if(b&&typeof e=="string"){var n=i.get("length"),r=Number(e);Number.isInteger(r)&&r<n.v&&l(n,r)}l(t,u),O(o)}return!0},get(f,e,t){var d;if(e===x)return s;var n=i.get(e),r=e in f;if(n===void 0&&(!r||(d=h(f,e))!=null&&d.writable)&&(n=v(y(r?f[e]:u,g)),i.set(e,n)),n!==void 0){var a=w(n);return a===u?void 0:a}return Reflect.get(f,e,t)},getOwnPropertyDescriptor(f,e){var t=Reflect.getOwnPropertyDescriptor(f,e);if(t&&"value"in t){var n=i.get(e);n&&(t.value=w(n))}else if(t===void 0){var r=i.get(e),a=r==null?void 0:r.v;if(r!==void 0&&a!==u)return{enumerable:!0,configurable:!0,value:a,writable:!0}}return t},has(f,e){var a;if(e===x)return!0;var t=i.get(e),n=t!==void 0&&t.v!==u||Reflect.has(f,e);if(t!==void 0||T!==null&&(!n||(a=h(f,e))!=null&&a.writable)){t===void 0&&(t=v(n?y(f[e],g):u),i.set(e,t));var r=w(t);if(r===u)return!1}return n},set(f,e,t,n){var D;var r=i.get(e),a=e in f;if(b&&e==="length")for(var d=t;d<r.v;d+=1){var _=i.get(d+"");_!==void 0?l(_,u):d in f&&(_=v(u),i.set(d+"",_))}r===void 0?(!a||(D=h(f,e))!=null&&D.writable)&&(r=v(void 0),l(r,y(t,g)),i.set(e,r)):(a=r.v!==u,l(r,y(t,g)));var c=Reflect.getOwnPropertyDescriptor(f,e);if(c!=null&&c.set&&c.set.call(n,t),!a){if(b&&typeof e=="string"){var N=i.get("length"),m=Number(e);Number.isInteger(m)&&m>=N.v&&l(N,m+1)}O(o)}return!0},ownKeys(f){w(o);var e=Reflect.ownKeys(f).filter(r=>{var a=i.get(r);return a===void 0||a.v!==u});for(var[t,n]of i)n.v!==u&&!(t in f)&&e.push(t);return e},setPrototypeOf(){j()}})}function O(s,I=1){l(s,s.v+I)}export{y as p};
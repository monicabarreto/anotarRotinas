if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-C8ROkG7J.js",revision:null},{url:"assets/index-K-rcK1u6.css",revision:null},{url:"index.html",revision:"833b57fc7c970dba25d8462e2c3a3e9f"},{url:"registerSW.js",revision:"65e6baf269c599a23c3a68b43d245675"},{url:"icon-192x192.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"manifest.webmanifest",revision:"ef82c8fff3d7bde9696f96926e9d3b45"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

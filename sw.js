if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const d=e=>n(e,t),f={module:{uri:t},exports:o,require:d};i[t]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DV7bUE62.js",revision:null},{url:"assets/index-mtaa6Vkn.css",revision:null},{url:"index.html",revision:"1d788996c787d378a02f4289f9672d4e"},{url:"registerSW.js",revision:"65e6baf269c599a23c3a68b43d245675"},{url:"icon-192x192.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"manifest.webmanifest",revision:"ef82c8fff3d7bde9696f96926e9d3b45"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
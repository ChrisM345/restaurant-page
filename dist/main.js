(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(601),r=n.n(o),c=n(314),a=n.n(c)()(r());a.push([e.id,"body{\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-blend-mode: lighten;\n    border: solid green;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#content{\n    border: solid purple;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 25%;\n    background-color: white;\n}\n\n.class-list{\n    background-color: white;\n}",""]);const i=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);o&&a[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],u=o.base?s[0]+o.base:s[0],l=c[u]||0,d="".concat(u," ").concat(l);c[u]=l+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=i,t.splice(i,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var s=o(e,r),u=0;u<c.length;u++){var l=n(c[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=s}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{function e(){console.log("homecontent");const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("h3");t.textContent="Pancake Bee Cafe";const n=document.createElement("p");n.textContent="Welcome to Pancake Bee Cafe. We believe in simple ingredients, generous portions, and excellent customer service. Please come visit our cozy cafe and enjoy a lovely breakfast with us.",e.append(t),e.append(n)}const t=n.p+"7232809200c801c0bd5b.jpg";var o=n(72),r=n.n(o),c=n(825),a=n.n(c),i=n(659),s=n.n(i),u=n(56),l=n.n(u),d=n(540),p=n.n(d),f=n(113),m=n.n(f),v=n(208),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),r()(v.A,h),v.A&&v.A.locals&&v.A.locals,console.log("testing"),document.querySelector("#content"),e();const y=document.querySelector("body");y.style.backgroundImage=`url(${t})`;const b=document.createElement("p");b.textContent="Image Credit - https://unsplash.com/photos/brown-cookies-on-brown-wooden-table-tk9dBabQde0",b.className="class-list",y.append(b),document.querySelectorAll("button").forEach((t=>{t.addEventListener("click",(n=>{!function(t){switch(t){case"Home":e();break;case"Menu":!function(){console.log("menucontent");const e=document.querySelector("#content");document.createElement("h2").textContent="Menu",document.createElement("h3").textContent="Beverages",e.innerHTML='<div class = "menu-item"\n    <h4>Tea</h4>\n    <p>Enjoy a lovely cup of tea and a variety of flavors. Refills are included!</p>\n    <p>$3.00</p>'}();break;case"About":!function(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("h2");t.textContent="About Us!";const n=document.createElement("p");n.textContent="We'll make sure you'll want to come back";const o=document.createElement("p");o.innerText="123 My Street \n My City, My State 12345",e.append(t),e.append(n),e.append(o)}()}}(t.textContent)}))}))})()})();
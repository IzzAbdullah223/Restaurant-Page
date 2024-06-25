(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(601),d=n.n(o),a=n(314),c=n.n(a)()(d());c.push([e.id,"*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n \n\n \n\nnav{\n    margin-top: 40px;\n    display: flex;\n    gap: 60px;\n    justify-content: center;\n}\n\nnav button{\n    border: none;\n    background-color: transparent;\n    color: white;\n    font-size: 1.4rem;\n    cursor: pointer;\n    transition: background-color 0.5s ease ;\n}\n\nnav button:hover{\n    color: orange;\n    \n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 90vh;\n    gap: 25px;\n}\n\n.Homeimg{\n    width: 25%;\n}\n\n.Homep{\n    font-size: 2rem;\n    color: white;\n    margin-bottom: 30px;\n}\n\n.Homespan{\n    color: orange;\n}\n\n.Homebutton{\n    border: none;\n    font-size: 2rem;\n    padding: 5px 10px;\n    cursor: pointer;\n    transition: background-color 0.5s ease;\n}\n\n.Homebutton:hover{\n    background-color: orange;\n}\n\n.Contactp{\n    color: white;\n    font-size: 1.4rem;\n}\n\n.Contactp:first-child{\n    width: 30%;\n    text-align: center;\n    line-height: 1.5;\n}\n\n.IconsContainer{\n    display: flex;\n    gap: 30px;\n}\n\n.GridContainer{\n    display: flex;\n    display: grid;\n    grid-template-columns: repeat(3,auto);\n    column-gap: 100px;\n    row-gap: 90px;\n     \n   \n}\n\n.GridItem{\n    border-left: 4px solid rgb(236, 230, 230);\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    width: max-content;\n    \n}\n\n\n\n.Top{\n    display: flex;\n    align-items: end;\n    justify-content: flex-start;\n    gap: 120px;\n    margin-bottom: 10px;\n    margin-left: 5px;\n\n    \n}\n\n.Top h2:first-child{\n    color: orange;\n}\n\n.Top h2:last-child{\n    color: white;\n}\n\n.GridItem span{\n    color: white;\n    margin-left: 10px;\n    \n    \n}",""]);const s=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,d,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(c[r]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),d&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=d):l[4]="".concat(d)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],s=0;s<e.length;s++){var r=e[s],i=o.base?r[0]+o.base:r[0],l=a[i]||0,p="".concat(i," ").concat(l);a[i]=l+1;var m=n(p),u={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=d(u,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function d(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,d){var a=o(e=e||[],d=d||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=n(a[c]);t[s].references--}for(var r=o(e,d),i=0;i<a.length;i++){var l=n(a[i]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=r}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var d=void 0!==n.layer;d&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,d&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var d=t[o];if(void 0!==d)return d.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var d=o.length-1;d>-1&&(!e||!/^http(s?):/.test(e));)e=o[d--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;var o=n(72),d=n.n(o),a=n(825),c=n.n(a),s=n(659),r=n.n(s),i=n(56),l=n.n(i),p=n(540),m=n.n(p),u=n(113),h=n.n(u),C=n(208),f={};f.styleTagTransform=h(),f.setAttributes=l(),f.insert=r().bind(null,"head"),f.domAPI=c(),f.insertStyleElement=m(),d()(C.A,f),C.A&&C.A.locals&&C.A.locals;const v=n.p+"3e12d2de58f6856e46cb.png",g=n.p+"da6947b77889fefb4d1a.png",y=document.createElement("Button");function E(){document.body.style.backgroundImage=`url(${v})`,document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundPosition="center",document.body.style.backgroundAttachment="fixed",document.body.style.backgroundSize="cover",document.body.style.overflow="hidden";const e=document.querySelector(".content");e.replaceChildren();const t=document.createElement("img");t.src=g;const n=document.createElement("p");n.textContent="Stat your day with a cup of ";const o=document.createElement("span");o.textContent="Coffe!",t.classList.add("Homeimg"),n.classList.add("Homep"),o.classList.add("Homespan"),y.classList.add("Homebutton"),e.appendChild(t),e.appendChild(n),n.appendChild(o),e.appendChild(y)}y.textContent="Explore Menu",E();const b=n.p+"f9d2e42a7981d7e85493.png";function x(){document.body.style.backgroundImage=`url(${b})`,document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundPosition="center",document.body.style.backgroundAttachment="fixed",document.body.style.backgroundSize="cover",document.body.style.overflow="hidden";const e=document.querySelector(".content");e.replaceChildren(),e.style.height="90vh";const t=document.createElement("div");t.classList.add("GridContainer"),e.appendChild(t);const n=document.createElement("div");n.classList.add("GridItem"),t.appendChild(n);const o=document.createElement("div");o.classList.add("Top"),n.appendChild(o);const d=document.createElement("h2");d.classList.add("Top"),d.textContent="Espresso",o.appendChild(d);const a=document.createElement("h2");a.classList.add("Top"),a.textContent="$ 3.00",o.appendChild(a);const c=document.createElement("span");c.textContent="Rich and bold shot of pure coffe",n.appendChild(c);const s=document.createElement("div");s.classList.add("GridItem"),t.appendChild(s);const r=document.createElement("div");r.classList.add("Top"),s.appendChild(r);const i=document.createElement("h2");i.classList.add("Top"),i.textContent="Americano",r.appendChild(i);const l=document.createElement("h2");l.classList.add("Top"),l.textContent="$ 3.50",r.appendChild(l);const p=document.createElement("span");p.textContent="Espresso with hot water for a smooth taste",s.appendChild(p);const m=document.createElement("div");m.classList.add("GridItem"),t.appendChild(m);const u=document.createElement("div");u.classList.add("Top"),m.appendChild(u);const h=document.createElement("h2");h.classList.add("Top"),h.textContent="Latte",u.appendChild(h);const C=document.createElement("h2");C.classList.add("Top"),C.textContent="$ 4.50",u.appendChild(C);const f=document.createElement("span");f.textContent="Espresso, steamed milk, and light foam",m.appendChild(f);const v=document.createElement("div");v.classList.add("GridItem"),t.appendChild(v);const g=document.createElement("div");g.classList.add("Top"),v.appendChild(g);const y=document.createElement("h2");y.classList.add("Top"),y.textContent="Cappuccino",g.appendChild(y);const E=document.createElement("h2");E.classList.add("Top"),E.textContent="$ 4.50",g.appendChild(E);const x=document.createElement("span");x.textContent="Espresso, steamed milk, and foam, with cocoa",x.style.width="80%",v.appendChild(x);const L=document.createElement("div");L.classList.add("GridItem"),t.appendChild(L);const T=document.createElement("div");T.classList.add("Top"),L.appendChild(T);const w=document.createElement("h2");w.classList.add("Top"),w.textContent="Flat White",T.appendChild(w);const k=document.createElement("h2");k.classList.add("Top"),k.textContent="$ 4.75",T.appendChild(k);const I=document.createElement("span");I.textContent="Smooth blend of espresso and steamed milk",L.appendChild(I),I.style.width="80%";const S=document.createElement("div");S.classList.add("GridItem"),t.appendChild(S);const A=document.createElement("div");A.classList.add("Top"),S.appendChild(A);const $=document.createElement("h2");$.classList.add("Top"),$.textContent="Mocha",A.appendChild($);const G=document.createElement("h2");G.classList.add("Top"),G.textContent="$ 5.00",A.appendChild(G);const H=document.createElement("span");H.textContent="Espresso, chocolte syrup, steamed milk, whipped cream",H.style.width="80%",S.appendChild(H);const M=document.createElement("div");M.classList.add("GridItem"),t.appendChild(M);const j=document.createElement("div");j.classList.add("Top"),M.appendChild(j);const q=document.createElement("h2");q.classList.add("Top"),q.textContent="Macchiato",j.appendChild(q);const z=document.createElement("h2");z.classList.add("Top"),z.textContent="$ 4.00",j.appendChild(z);const P=document.createElement("span");P.textContent="Espresso with a small amount of foamed milk",M.appendChild(P);const R=document.createElement("div");R.classList.add("GridItem"),t.appendChild(R);const N=document.createElement("div");N.classList.add("Top"),R.appendChild(N);const B=document.createElement("h2");B.classList.add("Top"),B.textContent="Cold Brew",N.appendChild(B);const F=document.createElement("h2");F.classList.add("Top"),F.textContent="$ 4.00",N.appendChild(F);const O=document.createElement("span");O.textContent="Slow-steeped coffee served cold and refreshing",R.appendChild(O);const W=document.createElement("div");W.classList.add("GridItem"),t.appendChild(W);const U=document.createElement("div");U.classList.add("Top"),W.appendChild(U);const _=document.createElement("h2");_.classList.add("Top"),_.textContent="Chai Latte",U.appendChild(_);const D=document.createElement("h2");D.classList.add("Top"),D.textContent="$ 4.75",U.appendChild(D);const J=document.createElement("span");J.textContent="Spiced tea concentrate with steamed milk",W.appendChild(J);const K=document.createElement("div");K.classList.add("GridItem"),t.appendChild(K);const Q=document.createElement("div");Q.classList.add("Top"),K.appendChild(Q);const V=document.createElement("h2");V.classList.add("Top"),V.textContent="Affogato",Q.appendChild(V);const X=document.createElement("h2");X.classList.add("Top"),X.textContent="$ 5.50",Q.appendChild(X);const Y=document.createElement("span");Y.textContent="Espresso poured over vanilla ice cream",K.appendChild(Y);const Z=document.createElement("div");Z.classList.add("GridItem"),t.appendChild(Z);const ee=document.createElement("div");ee.classList.add("Top"),Z.appendChild(ee);const te=document.createElement("h2");te.classList.add("Top"),te.textContent="Irish Coffee",ee.appendChild(te);const ne=document.createElement("h2");ne.classList.add("Top"),ne.textContent="$ 6.00",ee.appendChild(ne);const oe=document.createElement("span");oe.textContent="Coffee, Irish whiskey, sugar, and cream",Z.appendChild(oe);const de=document.createElement("div");de.classList.add("GridItem"),t.appendChild(de);const ae=document.createElement("div");ae.classList.add("Top"),de.appendChild(ae);const ce=document.createElement("h2");ce.classList.add("Top"),ce.textContent="Turkish Coffee",ae.appendChild(ce);const se=document.createElement("h2");se.classList.add("Top"),se.textContent="$ 5.00",ae.appendChild(se);const re=document.createElement("span");re.textContent="Rich and bold shot of pure coffe",de.appendChild(re)}const L=n.p+"fdc74c7692fb3e5e7d86.svg",T=n.p+"2cb9032594065d357634.svg",w=n.p+"fbc9f70107341d37476f.svg",k=n.p+"59b154262f9775e631a9.png",I=document.querySelector(".Homebtn"),S=document.querySelector(".Contactbtn"),A=document.querySelector(".Menubtn");I.addEventListener("click",(()=>{E()})),y.addEventListener("click",(()=>{x()})),S.addEventListener("click",(()=>{!function(){document.body.style.backgroundImage=`url(${k})`,document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundPosition="center",document.body.style.backgroundAttachment="fixed",document.body.style.backgroundSize="cover",document.body.style.overflow="hidden";const e=document.querySelector(".content");e.replaceChildren();const t=document.createElement("p");t.textContent="We love hearing from our customers! Whether you have questions, want to place an order, or provide feedback, please get in touch with us",e.appendChild(t),t.classList.add("Contactp");const n=document.createElement("p");n.textContent=" Address: 123 Coffee Street, Brewtown, CA 45678",e.appendChild(n),n.classList.add("Contactp");const o=document.createElement("p");o.textContent=" (123) 456-7890 ",e.appendChild(o),o.classList.add("Contactp");const d=document.createElement("p");d.textContent=" Email: info@brewhaven.com ",e.appendChild(d),d.classList.add("Contactp");const a=document.createElement("div");a.classList.add("IconsContainer"),e.appendChild(a);const c=document.createElement("img");c.src=L,a.appendChild(c);const s=document.createElement("img");s.src=T,a.appendChild(s);const r=document.createElement("img");r.src=w,a.appendChild(r)}()})),A.addEventListener("click",(()=>{x()}))})();
(()=>{"use strict";var e={238:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(81),a=n.n(o),d=n(645),i=n.n(d)()(a());i.push([e.id,"\n\n.content {\n    grid-area: 2 / 2 / -1 / -1;\n    display: grid;\n    grid-template-columns: 1fr 6fr 2fr;\n}\n\n.content-side {\n    color: var(--non-important-color, grey);\n    font-size: 0.9rem;\n    text-align: center;\n    padding: 28px;\n}\n\n.content-side p:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n.open-modal {\n    display: flex;\n    flex-direction: column;\n    padding: 28px;\n    gap: 24px;\n    position: relative;\n    top: 25%;\n}\n\n.open-modal div {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.open-modal-one {\n    left: 40%;\n}\n\n.open-modal-two {\n    left: 39%;\n}\n\n.open-modal-three {\n    left: 37%;\n}\n\n.open-modal-four {\n    left: 36%;\n}\n\n.open-modal-five {\n    left: 35%;\n}\n\n.tasks-projects {\n    display: flex;\n    gap: 16px;\n}\n\n.project-icon {\n    display: none;\n}\n\n.project-icon:not(:checked) + .projects-icon-label {\n    filter: brightness(0.8); /* Reset the filter for unchecked labels */\n}\n\n.project-icon:checked + .projects-icon-label {\n    box-shadow: 2px 2px 1px 1px rgb(86, 85, 85);\n}\n\n.projects-icon-label {\n    padding: 8px 14px;\n    border-radius: 16px;\n    cursor: pointer;\n    transition: background 0.1s; \n}\n\n.tasks-modal-inputs {\n    padding: 2px 6px;\n    border-radius: 8px;\n    border: 2px solid rgb(168, 166, 166);\n    outline: none;\n}\n\n.task-modal-stars {\n    height: 24px;\n    width: 24px;\n    fill: gold;\n}\n\n#due-date-input {\n    border: none;\n}\n\n.confirm-container-modal {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 12px;\n}\n\n.confirm-container-modal p, .confirm-container-modal input{\n    font-size: 0.8rem;\n}\n\n.confirm-task-modal {\n    color: green;\n}\n\n.discard-task-modal {\n    color: red;\n}\n\n#notes-input {\n    padding: 2px 6px;\n}\n\n.notes-input-one {\n    max-width: 250px !important; \n}\n\n.notes-input-two {\n    max-width: 282px !important;\n}\n\n.notes-input-three {\n    max-width: 314px !important;\n}\n\n.notes-input-four {\n    max-width: 346px !important;\n}\n\n.notes-input-five {\n    max-width: 378px !important;\n}",""]);const r=i},254:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(81),a=n.n(o),d=n(645),i=n.n(d)()(a());i.push([e.id,".header {\n    display: grid;\n    grid-template-columns: 1fr 6fr 2fr;\n    background-color: var(--main-color);\n    color: var(--main-text-color);\n}\n\n.header-container {\n    grid-area: 1 / 2 / 2/ 3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n    padding: 28px 0px;\n}\n\n.progress-container {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n}\n\n.progress {\n    width: 600px;\n    height: 40px;\n    border: 2px solid white;\n    border-radius: 24px;\n}\n\n.user-settings {\n    grid-area: 1 / 3 / 2 / -1;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-end;\n    padding: 40px 48px;\n}\n\n.user-settings svg {\n    fill: var(--main-text-color, white);\n    height: 30px;\n}\n\n.user-settings svg:hover {\n    cursor: pointer;\n}\n\n.modal-open {\n    padding: 28px;\n    border: 2px solid black;\n    top: 35%;\n    left: 45%;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.modal-close {\n    display: none;\n}\n\n.inputs div {\n    display: flex;\n    gap: 8px;\n}\n\n.finish {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.save, .discard {\n    font-size: 0.85rem;\n}\n\n.save:hover, .discard:hover {\n    cursor: pointer;\n}\n\n.save {\n    color: green;\n}\n\n.discard {\n    color: red;\n}",""]);const r=i},578:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(81),a=n.n(o),d=n(645),i=n.n(d)()(a());i.push([e.id,".sidebar {\n    grid-area: 1 / 1 / -1 / 2;\n    background-color: var(--sidebar-bck-color);\n    padding: 36px 28px;\n    display: flex;\n    flex-direction: column;\n    gap: 36px;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.default-options {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.default-options svg {\n    height: 1.5rem;\n}\n\n.default-options div {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n}\n\n.default-options div:hover {\n    background-color: var(--sidebar-hover-color);\n    cursor: pointer;\n}\n\n.new-project-div {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    margin-right: -24px;\n}\n\n.new-project-div input {\n    height: 18px;\n    padding: 2px 8px;\n    border-radius: 12px;\n    border: none;\n}\n\n.new-project-div svg{\n    height: 14px;\n}\n\n.new-project-div svg:hover, .close-button:hover {\n    height: 18px;\n    font-size: 1.25rem;\n    cursor: pointer;\n}\n\n.projects-title {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n#add-project {\n    height: 18px;\n    width: 18px;\n    border: none;\n    border-radius: 12px;\n    font-size: 0.9rem;\n}\n\n#add-project:hover {\n    font-size: 1.05rem;\n    cursor: pointer;\n    background-color: var(--sidebar-hover-color);\n}\n\n.new-project-div .color-picker {\n    padding: 0px;\n    height: 22px;\n    width: 20px;\n}\n\n.project-container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 20px;\n    cursor: pointer;\n}\n\n.project-container:hover {\n    background-color: var(--sidebar-hover-color);\n}\n\n.project {\n    border-radius: 20px;\n    padding: 4px 12px;\n    width: 160px;\n}\n\n.close-button {\n    display: flex;\n    align-items: center;\n    width: 14px;\n    height: 14px;\n    color: red;\n    font-size: 1rem;\n    font-weight: bold;\n    background-color: var(--sidebar-bck-color);\n\n}\n\n.remove-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 6px;\n    color: red;\n    font-size: 1rem;\n    border: none;\n    display: none;\n    font-weight: bold;\n    background-color: var(--sidebar-hover-color);\n}\n\n.remove-button:hover {\n    cursor: pointer;\n    font-size: 1.15rem;\n}",""]);const r=i},426:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(81),a=n.n(o),d=n(645),i=n.n(d)()(a());i.push([e.id,":root {\n    --main-background: white;\n    --main-color: rgb(29, 160, 216);\n    --main-text-color: white;\n    --bck-txt-col: black;\n    --sidebar-bck-color: rgb(248, 244, 244);\n    --sidebar-hover-color: rgb(236, 233, 233);\n    --non-important-color: grey;\n}\n\n* {\n    margin: 0px;\n    padding: 0px;\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    grid-template-columns: 2fr 9fr;\n    grid-template-rows: 1fr 4fr;\n    height: 100vh;\n}",""]);const r=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,d){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==d&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=d),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var d={},i=[],r=0;r<e.length;r++){var c=e[r],s=o.base?c[0]+o.base:c[0],l=d[s]||0,p="".concat(s," ").concat(l);d[s]=l+1;var m=n(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=a(u,o);o.byIndex=r,t.splice(r,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var d=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<d.length;i++){var r=n(d[i]);t[r].references--}for(var c=o(e,a),s=0;s<d.length;s++){var l=n(d[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}d=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var d=n.sourceMap;d&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var d=t[o]={id:o,exports:{}};return e[o](d,d.exports,n),d.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),a=n.n(o),d=n(569),i=n.n(d),r=n(565),c=n.n(r),s=n(216),l=n.n(s),p=n(589),m=n.n(p),u=n(426),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;var v=n(578),f={};function g(e,t){const n=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div");return n.classList.add("project-container"),n.id=`Project-${t}`,n.addEventListener("mouseover",(function(){this.lastChild.style.display="block"})),n.addEventListener("mouseleave",(function(){this.lastChild.style.display="none"})),o.classList.add("project"),o.textContent=e.name,o.style.backgroundColor=e.color,o.style.color=(d=e.color,i=(i=d).replace(/^#/,""),parseInt(i.slice(0,2),16)/255*.2126+parseInt(i.slice(2,4),16)/255*.7152+parseInt(i.slice(4,6),16)/255*.0722>.6?"black":"white"),n.appendChild(o),a.classList.add("remove-button"),a.textContent="x",a.addEventListener("click",(function(){const e=this.parentElement;e.remove(),localStorage.removeItem(e.id);const t=parseInt(localStorage.getItem("projCount"),10);let n=!0;for(let o=parseInt(e.id.match(/\d+/)[0],10)+1;o<=t;o++){if(o===t&&n){localStorage.removeItem("Project "+(o-1));break}n=!1;const e=document.querySelector(`#Project-${o}`);e&&(e.id="Project-"+(o-1));const a=`Project ${o}`;let d=JSON.parse(localStorage.getItem(a));d&&(d.id=o-1,d=JSON.stringify(d),localStorage.setItem("Project "+(o-1),d),localStorage.removeItem(a))}localStorage.setItem("projCount",Math.max(t-1,0))})),n.appendChild(a),n;var d,i}f.styleTagTransform=m(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;var C=n(254),x={};x.styleTagTransform=m(),x.setAttributes=c(),x.insert=i().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=l(),t()(C.Z,x),C.Z&&C.Z.locals&&C.Z.locals;var L=n(238),b={};b.styleTagTransform=m(),b.setAttributes=c(),b.insert=i().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=l(),t()(L.Z,b),L.Z&&L.Z.locals&&L.Z.locals;let E=0;function y(){const e=document.createElement("div");e.classList.add("content"),e.appendChild(function(){const e=document.createElement("div");e.classList.add("content-side");const t=document.createElement("p");t.textContent="Add Task +";const n=function(){const e=document.createElement("dialog"),t=document.createElement("div"),n=document.createElement("h3");n.textContent="Create a Task",t.appendChild(n),e.appendChild(t);const o=document.createElement("div");o.classList.add("tasks-project-container"),o.textContent="Pick a Project/Event:";const a=document.createElement("div");a.classList.add("tasks-projects");const d=[...document.querySelectorAll(".project")];for(let e=0;e<d.length;e++){const t=window.getComputedStyle(d[e]),n=document.createElement("input");n.setAttribute("type","radio"),n.setAttribute("value",d[e].textContent),n.setAttribute("name","projects-radio"),n.id=d[e].textContent,n.classList.add("project-icon");const o=document.createElement("label");o.setAttribute("for",n.id),o.textContent=n.id,o.classList.add("projects-icon-label"),o.style.backgroundColor=t.backgroundColor,o.style.color=t.color,a.appendChild(n),a.appendChild(o)}o.appendChild(a),e.appendChild(o);const i=document.createElement("div"),r=document.createElement("input"),c=document.createElement("label");i.classList.add("name-input-container"),r.classList.add("tasks-modal-inputs"),r.setAttribute("placeholder","Name of the task"),r.id="task-name-input",c.setAttribute("for",r.id),c.textContent="Task Name:",i.appendChild(c),i.appendChild(r),e.appendChild(i);const s=document.createElement("div"),l=document.createElement("select"),p=document.createElement("label");l.id="task-time-input";const m=document.createElement("option");m.textContent="< 15 min",l.appendChild(m);const u=document.createElement("option");u.textContent="15-30 min",l.appendChild(u);const h=document.createElement("option");h.textContent="30 min - 1h",l.appendChild(h);const v=document.createElement("option");v.textContent="1h - 2h",l.appendChild(v);const f=document.createElement("option");f.textContent="2h - 4h",l.appendChild(f);const g=document.createElement("option");g.textContent="4h - 8h",l.appendChild(g);const C=document.createElement("option");C.textContent="8h - 24h",l.appendChild(C);const x=document.createElement("option");x.textContent="1 day - 2 days",l.appendChild(x);const L=document.createElement("option");L.textContent="2 days - 4 days",l.appendChild(L);const b=document.createElement("option");b.textContent="4 days - 1 week",l.appendChild(b);const y=document.createElement("option");y.textContent="> 1 week",l.appendChild(y),p.textContent="Estimated Time to Complete Task:",s.appendChild(p),s.appendChild(l),e.appendChild(s);const k=document.createElement("div"),w=document.createElement("label"),j=document.createElement("input");j.setAttribute("type","range"),j.setAttribute("min","1"),j.setAttribute("max","5"),j.setAttribute("step","1"),j.setAttribute("list","difficulty-list"),j.setAttribute("value","1"),j.id="difficulty-input";const A=document.createElement("datalist");A.id="difficulty-list";const S=document.createElement("option");S.value="1",A.appendChild(S);const I=document.createElement("option");I.value="2",A.appendChild(I);const M=document.createElement("option");M.value="3",A.appendChild(M);const T=document.createElement("option");T.value="4",A.appendChild(T);const H=document.createElement("option");H.value="5",A.appendChild(H),w.setAttribute("for","difficulty-input"),w.textContent="Choose the difficulty of the task:",k.appendChild(w),k.appendChild(j);const Z=document.createElement("svg");Z.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>',Z.style.fill="gold",Z.classList.add("task-modal-stars");const P=document.createElement("div");P.classList.add("star-container"),P.appendChild(Z),k.appendChild(P),e.classList.add("open-modal-one"),j.addEventListener("input",(function(){e.classList.remove("open-modal-one"),e.classList.remove("open-modal-two"),e.classList.remove("open-modal-three"),e.classList.remove("open-modal-four"),e.classList.remove("open-modal-five"),D.classList.remove("notes-input-one"),D.classList.remove("notes-input-two"),D.classList.remove("notes-input-three"),D.classList.remove("notes-input-four"),D.classList.remove("notes-input-five"),document.querySelector(".star-container").remove();const t=parseInt(j.value,10),n=document.createElement("div");n.classList.add("star-container");for(let e=0;e<t;e++){const e=Z.cloneNode(!0);n.appendChild(e)}switch(k.appendChild(n),t){case 1:e.classList.add("open-modal-one"),D.classList.add("notes-input-one");break;case 2:e.classList.add("open-modal-two"),D.classList.add("notes-input-two");break;case 3:e.classList.add("open-modal-three"),D.classList.add("notes-input-three");break;case 4:e.classList.add("open-modal-four"),D.classList.add("notes-input-four");break;case 5:e.classList.add("open-modal-five"),D.classList.add("notes-input-five")}})),e.appendChild(k);const V=document.createElement("div"),N=document.createElement("input"),z=document.createElement("label");N.setAttribute("type","date"),N.id="due-date-input",z.setAttribute("for",N.id),z.textContent="Due Date of Task:",V.appendChild(z),V.appendChild(N);const B=document.createElement("label"),O=document.createElement("input"),$=document.createElement("p");O.setAttribute("type","checkbox"),O.id="anytime-checkbox",B.setAttribute("for",O.id),B.textContent="Anytime:",$.textContent="or",V.appendChild($),V.appendChild(B),V.appendChild(O),e.appendChild(V),N.addEventListener("input",(function(){N.value&&(O.checked=!1)})),O.addEventListener("input",(function(){O.checked&&(N.value="")}));const q=document.createElement("div"),D=document.createElement("textarea"),J=document.createElement("label");D.setAttribute("placeholder","Add optional notes"),D.id="notes-input",D.classList.add("notes-input-one"),J.setAttribute("for",D.id),J.textContent="Optional Notes:",q.appendChild(J),q.appendChild(D),e.appendChild(q);const W=document.createElement("div"),R=(document.createElement("div"),document.createElement("div"),document.createElement("p"));R.textContent="Create task",R.classList.add("confirm-task-modal");const U=o.style.color;R.addEventListener("click",(function(){const t=[];let n=!0;const a=document.querySelector('input[name="projects-radio"]:checked');a?o.style.color=U:(o.style.color="red",n=!1),r.value.length<1?(i.style.color="red",n=!1):i.style.color=U;const d=N.value,c=O.checked;var s;d||c||(V.style.color="red",n=!1),n&&(t.push(a.value),t.push(r.value),t.push(l.value),t.push(j.value),d?t.push(d):t.push("Anytime"),t.push(D.value),console.log((E++,{project:(s=t)[0],name:s[1],time:s[2],difficulty:s[3],due:s[4],notes:s[5],id:E})),r.value="",N.value="",O.checked=!1,D.value="",e.classList.remove("open-modal"),e.close())}));const F=document.createElement("p");return F.textContent="Discard task",F.classList.add("discard-task-modal"),F.addEventListener("click",(function(){r.value="",N.value="",O.checked=!1,D.value="",e.classList.remove("open-modal"),e.close()})),W.appendChild(R),W.appendChild(F),W.classList.add("confirm-container-modal"),e.appendChild(W),e}();return e.appendChild(n),t.addEventListener("click",(function(){n.classList.add("open-modal"),n.showModal()})),e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("content-main"),e}());const t=document.createElement("div");return t.classList.add("content-notes"),e.appendChild(t),e}!function(){const e=document.querySelector("body");e.appendChild(function(){const e=document.createElement("div");e.classList.add("sidebar");const t=document.createElement("div");t.classList.add("default-options");const n=document.createElement("div"),o=document.createElement("svg");o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>',o.style.fill="gold",n.appendChild(o);const a=document.createElement("p");a.textContent="Today",n.appendChild(a),t.appendChild(n);const d=document.createElement("div"),i=document.createElement("svg");i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-clock</title><path d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" /></svg>',i.style.fill="rgb(110, 7, 7)",d.appendChild(i);const r=document.createElement("p");r.textContent="Upcoming",d.appendChild(r),t.appendChild(d);const c=document.createElement("div"),s=document.createElement("svg");s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>bookshelf</title><path d="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z" /></svg>',s.style.fill="rgb(11, 89, 11)",c.appendChild(s);const l=document.createElement("p");l.textContent="Anytime",c.appendChild(l),t.appendChild(c),e.appendChild(t);const p=document.createElement("div");p.classList.add("projects");const m=document.createElement("div");m.classList.add("projects-title");const u=document.createElement("h4");u.textContent="Projects/Events",m.appendChild(u);const h=document.createElement("button");h.id="add-project",h.textContent="+";let v=!0;if(h.addEventListener("click",(function(){if(v=!v,v)return void(v=!1);const e=document.createElement("div");e.classList.add("new-project-div");const t=document.createElement("input");t.setAttribute("placeholder","Project Name"),e.appendChild(t);const n=document.createElement("input");n.classList.add("color-picker"),n.setAttribute("type","color"),e.appendChild(n);const o=document.createElement("svg");o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-bold</title><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>',o.style.fill="green";const a=document.createElement("div");a.classList.add("close-button"),a.textContent="x";const d=localStorage.getItem("projCount");let i=d?parseInt(d,10):0;o.addEventListener("click",(function(){const o=t.value;if(o.length<1)return void t.setAttribute("placeholder","Enter a name");const a=n.value;p.removeChild(e);const d={name:o,color:a,id:i},r=g(d,i);p.appendChild(r),localStorage.setItem(`Project ${i}`,JSON.stringify(d)),i++,localStorage.setItem("projCount",i),v=!0})),a.addEventListener("click",(function(){this.parentElement.remove(),v=!0})),e.appendChild(o),e.appendChild(a),p.appendChild(e)})),m.appendChild(h),p.appendChild(m),p.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div");return e.classList.add("project-container"),e.id="all-project",t.classList.add("project"),t.textContent="All Tasks",t.style.backgroundColor="lightgray",t.style.color="black",e.appendChild(t),e}()),localStorage.getItem("Project 0")){let e=0;for(;localStorage.getItem(`Project ${e}`);){const t=JSON.parse(localStorage.getItem(`Project ${e}`));p.appendChild(g(t,t.id)),e++}}return e.appendChild(p),e}()),e.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("div");t.classList.add("header-container");const n=document.createElement("h1");n.id="welcome-message";const o=localStorage.getItem("username");n.textContent=o?`Welcome Back ${o}`:"Welcome Back",t.appendChild(n);const a=document.createElement("div");a.classList.add("progress-container");const d=document.createElement("h3");d.textContent="LVL 0",a.appendChild(d);const i=document.createElement("div");i.classList.add("progress"),a.appendChild(i);const r=document.createElement("h3");r.textContent="LVL 1",a.appendChild(r),t.appendChild(a);const c=document.createElement("div");e.appendChild(c),e.appendChild(t);const s=function(){const e=document.createElement("div"),t=function(){const e=document.createElement("dialog"),t=document.createElement("h3");t.textContent="Settings",e.appendChild(t);const n=document.createElement("div");n.classList.add("inputs");const o=document.createElement("div"),a=document.createElement("label");a.textContent="Name",a.setAttribute("for","name-input"),e.appendChild(a);const d=document.createElement("input");d.id="name-input",d.setAttribute("placeholder","Name"),e.appendChild(d),o.appendChild(a),o.appendChild(d),n.appendChild(o),e.appendChild(n);const i=document.createElement("div");i.classList.add("finish");const r=document.createElement("div");r.classList.add("save"),r.textContent="Save",r.addEventListener("click",(function(){const t=d.value;t.length<1?d.setAttribute("placeholder","Write Your Name"):(e.classList.remove("modal-open"),e.classList.add("modal-close"),document.querySelector("#welcome-message").textContent=`Welcome Back ${t}`,e.close(),localStorage.setItem("username",t))}));const c=document.createElement("div");return c.classList.add("discard"),c.textContent="Discard",c.addEventListener("click",(function(){e.classList.remove("modal-open"),e.classList.add("modal-close"),e.close()})),i.appendChild(r),i.appendChild(c),e.appendChild(i),e}();e.appendChild(t);const n=document.createElement("svg");return n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cog</title><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>',n.addEventListener("click",(function(){t.classList.remove("modal-close"),t.classList.add("modal-open"),t.showModal()})),e.appendChild(n),e}();return s.classList.add("user-settings"),e.appendChild(s),e}()),e.appendChild(y())}()})()})();
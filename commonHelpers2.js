import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as t}from"./assets/vendor-651d7991.js";const o=document.querySelector("form"),n=document.querySelector("[type=number]");function l(r){r.preventDefault(),(()=>new Promise((e,i)=>{const s=n.value,a=o.elements.state.value;setTimeout(()=>{a==="fulfilled"?e(`✅ Fulfilled promise in ${s}ms`):i(`❌ Rejected promise in ${s}ms`)},s)}))().then(e=>t.show({message:e,position:"topRight",backgroundColor:"green",messageColor:"white",close:!1,progressBar:!1,class:".snackbar-izitoast"})).catch(e=>t.show({message:e,position:"topRight",backgroundColor:"red",messageColor:"white",close:!1,progressBar:!1,class:".snackbar-izitoast"})),o.reset()}o.addEventListener("submit",l);
//# sourceMappingURL=commonHelpers2.js.map

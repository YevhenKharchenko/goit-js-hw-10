import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import"./assets/vendor-651d7991.js";const o=document.querySelector("form"),r=document.querySelector("[type=number]");document.querySelector("[type-submit]");function l(n){n.preventDefault(),(()=>new Promise((e,m)=>{const t=r.value,s=o.elements.state.value;setTimeout(()=>{s==="fulfilled"?e(`✅ Fulfilled promise in ${t}ms`):m(`❌ Rejected promise in ${t}ms`)},t)}))().then(e=>console.log(e)).catch(e=>console.log(e)),o.reset()}o.addEventListener("submit",l);
//# sourceMappingURL=commonHelpers2.js.map

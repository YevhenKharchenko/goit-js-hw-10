/* empty css                      */import{f,i as m}from"./assets/vendor-651d7991.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();let i;const a=document.querySelector("[data-start]"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");a.setAttribute("disabled",!0);const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(n){const o=Date.parse(n[0]),r=Date.now();o>r?(a.removeAttribute("disabled"),i=o-r,a.addEventListener("click",()=>{setInterval(S,1e3)})):(a.setAttribute("disabled",!0),m.error({title:"",message:"Please choose a date in the future",position:"topRight",backgroundColor:"orangered",messageColor:"white",close:!1,progressBar:!1}))}};function S(){a.setAttribute("disabled",!0);const n=setInterval(()=>{console.log(i);const o=v(i);h.textContent=c(o.days),y.textContent=c(o.hours),p.textContent=c(o.minutes),g.textContent=c(o.seconds)},1e3);i<1e3?clearInterval(n):i-=1e3}function c(n){return n.toString().padStart(2,"0")}function v(n){const t=Math.floor(n/864e5),s=Math.floor(n%864e5/36e5),d=Math.floor(n%864e5%36e5/6e4),l=Math.floor(n%864e5%36e5%6e4/1e3);return{days:t,hours:s,minutes:d,seconds:l}}f("#datetime-picker",b);
//# sourceMappingURL=commonHelpers.js.map

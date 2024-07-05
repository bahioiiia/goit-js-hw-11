import{S as d,i as l}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();async function g(t,s=12){const r=`https://pixabay.com/api/?${new URLSearchParams({key:"44785846-fbfadd775113e3685d7630ccf",q:t,image_type:"photo",orientation:"horizontal",safesearch:!1,per_page:s})}`;return fetch(r).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(!e.length)return e.hits}).catch(e=>console.log(e))}let a;function u(){const t=document.getElementById("gallery");t.innerHTML=""}function f(){const t=document.getElementById("loader");t.style.display="inline-block"}function c(){const t=document.getElementById("loader");t.style.display="none"}function m(t){const s=document.getElementById("gallery"),n=t.map(r=>`
    <div class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="info">
        <p><strong>Likes:</strong><br>${r.likes}</p>
        <p><strong>Views:</strong><br>${r.views}</p>
        <p><strong>Comments:</strong><br>${r.comments}</p>
        <p><strong>Downloads:</strong><br>${r.downloads}</p>
      </div>
    </div>
  `).join("");s.insertAdjacentHTML("beforeend",n),a?a.refresh():a=new d(".gallery a")}function p(){l.warning({title:"Not found",message:"Sorry, there are no images matching search query. Please try again!",position:"topRight"})}function y(t){l.error({title:"Error",message:t.message,position:"topRight"})}document.getElementById("searchButton").addEventListener("click",async()=>{const t=document.getElementById("searchInput").value.trim();if(t==="")return;const s=6;u(),f();try{const n=await g(t,s);console.log("Fetched images:",n),c(),n.length===0?p():m(n)}catch(n){c(),y(n)}});
//# sourceMappingURL=commonHelpers.js.map

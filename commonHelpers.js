import{S as d,i as l}from"./assets/vendor-0fc460d7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function u(o,n=12){const e=`https://pixabay.com/api/?key=44785846-fbfadd775113e3685d7630ccf&q=${encodeURIComponent(o)}&image_type=photo&pretty=true&per_page=${n}`;try{const t=await fetch(e);if(!t.ok)throw new Error("Network response was not ok");return(await t.json()).hits}catch(t){throw console.error("Fetching images failed:",t),t}}let c;function f(){const o=document.getElementById("gallery");o.innerHTML=""}function g(){const o=document.getElementById("loader");o.style.display="inline-block"}function a(){const o=document.getElementById("loader");o.style.display="none"}function p(o){const n=document.getElementById("gallery"),s=o.map(r=>`
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
  `).join("");n.insertAdjacentHTML("beforeend",s),c?c.refresh():c=new d(".gallery a")}function m(){l.info({title:"No results",message:"No images found for your query",position:"topRight"})}function y(o){l.error({title:"Error",message:o.message,position:"topRight"})}document.getElementById("searchButton").addEventListener("click",async()=>{const o=document.getElementById("searchInput").value.trim();if(o==="")return;const n=30;f(),g();try{const s=await u(o,n);console.log("Fetched images:",s),a(),s.length===0?m():p(s)}catch(s){a(),y(s)}});
//# sourceMappingURL=commonHelpers.js.map

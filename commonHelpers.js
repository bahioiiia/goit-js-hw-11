import{S as c,i as l}from"./assets/vendor-0fc460d7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();async function d(r,n=12){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"44785846-fbfadd775113e3685d7630ccf",q:r,image_type:"photo",orientation:"horizontal",safesearch:!1,per_page:n})}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(!e.length)return e.hits}).catch(e=>console.log(e))}function g(){const r=document.getElementById("gallery");r.innerHTML=""}let a;function f(r){document.getElementById("gallery").insertAdjacentHTML("beforeend",r.map(t=>`
        <div class="gallery-item">
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" />
            </a>
            <div class="info">
                <p><strong>Likes:</strong><br>${t.likes}</p>
                <p><strong>Views:</strong><br>${t.views}</p>
                <p><strong>Comments:</strong><br>${t.comments}</p>
                <p><strong>Downloads:</strong><br>${t.downloads}</p>
            </div>
        </div>`).join("")),a?a.refresh():a=new c(".gallery a")}function u(){const r=document.getElementById("loader");r.style.display="inline-block"}function m(){const r=document.getElementById("loader");r.style.display="none"}function y(){l.warning({title:"Not found",message:"Sorry, there are no images matching search query. Please try again!",position:"topRight"})}function p(r){l.error({title:"Error",message:r.message,position:"topRight"})}document.getElementById("searchButton").addEventListener("click",async()=>{const r=document.getElementById("searchInput").value.trim();if(r==="")return;g(),u();const n=6;try{const t=await d(r,n);console.log("Fetched images:",t),t.length===0?y():f(t)}catch(t){p(t)}finally{m()}});
//# sourceMappingURL=commonHelpers.js.map

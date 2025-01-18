import{i as u,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function p(t){return fetch(`https://pixabay.com/api/?q=${t}&key=48292121-37734ba9461bf6417934fa015&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}function d(t){return` 
        <li class="li-gallery">

        <a class="li-gallery-a" href="${t.largeImageURL}">
        <img class="img" src="${t.webformatURL}" 
        alt="${t.tags}" 
        />
        </a>
        <ul class="baner-info">
          <li class="baner-info-li">
            <p class="baner-info-li-title">Likes</p>
            <p class="baner-info-li-text">${t.likes}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Views</p>
            <p class="baner-info-li-text">${t.views}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Comments</p>
            <p class="baner-info-li-text">${t.comments}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Downloads</p>
            <p class="baner-info-li-text">${t.downloads}</p>
          
            </li>
        </ul>
        </li> `}const a=document.querySelector(".form"),c=document.querySelector(".ul-gallery"),g=document.querySelector(".button"),n=document.querySelector(".loader");a.addEventListener("submit",m);function m(t){n.classList.toggle("visually-hidden"),t.preventDefault();const i=t.currentTarget.elements.user_request.value.trim();if(i===""){g.disabled=!0;return}p(i).then(s=>{if(s.hits.length===0){n.classList.toggle("visually-hidden"),u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",a.reset();return}const o=s.hits.map(r=>d(r)).join("");c.innerHTML=o,n.classList.toggle("visually-hidden"),a.reset(),new f(".ul-gallery a",{captionsData:"alt"}).refresh()}).catch(s=>{console.log(s)})}
//# sourceMappingURL=index.js.map

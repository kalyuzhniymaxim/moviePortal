import{d as E,s as R,j as e,h as b,r as c,i as j,L as p,a as w,P as z}from"./index-DLt2Spjj.js";import{P as v,F as P}from"./FavoriteButton-DNpzPDEY.js";const k="_moviesCard_hu5cz_1",D="_moviesCardImg_hu5cz_7",F="_moviesCardInfo_hu5cz_12",I="_moviesCardPoster_hu5cz_21",$="_moviesCardTitle_hu5cz_24",B="_moviesCardYear_hu5cz_27",Y="_moviesCardDescription_hu5cz_32",d={moviesCard:k,moviesCardImg:D,moviesCardInfo:F,moviesCardPoster:I,moviesCardTitle:$,moviesCardYear:B,moviesCardDescription:Y};function S({posterUrl:s,nameRu:a,year:r,nameOriginal:n,kinopoiskId:t}){const i=E(R);return e.jsxs("li",{className:d.moviesCard,children:[e.jsx(b,{to:`/movie/${t}`,children:e.jsx("img",{className:d.moviesCardImg,src:s,alt:"poster"})}),e.jsxs("div",{children:[e.jsxs("div",{className:d.moviesCardInfo,children:[e.jsx("p",{className:d.moviesCardTitle,children:a??n}),e.jsx("span",{className:d.moviesCardYear,children:r})]}),i&&e.jsx(P,{kinopoiskId:t})]})]})}S.propTypes={posterUrl:v.string,nameRu:v.string,year:v.number,nameOriginal:v.string};function M(s,a){const[r,n]=c.useState(s);return c.useEffect(()=>{const t=setTimeout(()=>{n(s)},a);return()=>{clearTimeout(t)}},[s,a]),r}const A=s=>`https://kinopoiskapiunofficial.tech/api/v2.2${s}`;function q(s,a={}){const[r,n]=c.useState(null),[t,i]=c.useState(!1),[l,m]=c.useState(!1);return c.useEffect(()=>{s&&(i(!0),fetch(s,{...a,method:"GET",headers:{"X-API-KEY":"8db19cf6-074e-4d76-8dcd-4d6ae6582783","Content-Type":"application/json"}}).then(o=>o.json()).then(o=>{n(o)}).catch(()=>{m(!0)}).finally(()=>{i(!1)}))},[s]),{data:r,loading:t,error:l,setData:n}}const Q="_searchSuggest_1ebgq_1",C={searchSuggest:Q};function U({data:s,setData:a,error:r,setQuery:n,setIsOpen:t}){const i=c.useRef(null),l=j(),m=c.useCallback(u=>{l(`/movie/${u}`),t(!1)},[l,t]),o=c.useCallback(u=>{i.current&&!i.current.contains(u.target)&&t(!1)},[t]);return c.useEffect(()=>(document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}),[o]),e.jsx("ul",{className:C.searchSuggest,ref:i,children:r?e.jsxs("li",{className:C.error,children:["Error: ",r.message]}):s===void 0?e.jsx(p,{}):s.length===0?e.jsx("li",{children:"Ничего не найдено"}):s.map(({nameRu:u,nameOriginal:g,kinopoiskId:h})=>e.jsx("li",{onClick:()=>{a([]),n(""),m(h)},children:e.jsx("p",{children:u??g})},h))})}const V="_search_144ur_1",Z="_searchText_144ur_10",G="_searchRemove_144ur_21",K="_searchBtn_144ur_30",f={search:V,searchText:Z,searchRemove:G,searchBtn:K};function O(){const[s,a]=c.useState(""),[r]=w(),n=r.get("keyword")||"",t=M(s,500),[i,l]=c.useState(!1),m=j(),{data:o,setData:u,loading:g,error:h}=q(t.length>2?A(`/films?keyword=${t}`):null),y=()=>{a(""),u(o.items=[])},L=_=>{a(_.target.value),u([])},N=_=>{_.preventDefault(),t.length>2&&!g&&o.items.length>0&&(m(`/search?keyword=${s}`),l(!1))},T=()=>{l(!0)};return c.useEffect(()=>{a(n)},[n,r]),e.jsxs("form",{onSubmit:N,className:f.search,children:[e.jsx("input",{value:s,onChange:L,className:f.searchText,type:"text",onClick:T,placeholder:"Введите название"}),s&&e.jsxs("svg",{onClick:y,className:f.searchRemove,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:"Clear"}),e.jsx("path",{d:"M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.21,11.79a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-1.79,1.8a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12l-1.8-1.79a1,1,0,0,1,1.42-1.42L12,10.59l1.79-1.8a1,1,0,0,1,1.42,1.42L13.41,12Z"})]}),e.jsx(z,{text:"Search"}),s.length===0||i&&e.jsx(U,{setIsOpen:l,data:o==null?void 0:o.items,setData:u,error:h,setQuery:a})]})}const X="_movies_x1z2g_1",H="_moviesFoundResult_x1z2g_9",J="_moviesList_x1z2g_14",x={movies:X,moviesFoundResult:H,moviesList:J};function se({films:s,error:a,showSearch:r=!1}){return a||!s?e.jsx(p,{}):e.jsxs("div",{className:x.movies,children:[r&&e.jsx(O,{}),e.jsxs("p",{className:x.moviesFoundResult,children:[e.jsx("b",{children:s.length})," movies found"]}),e.jsx("ul",{className:x.moviesList,children:s.map(({nameRu:n,year:t,posterUrl:i,kinopoiskId:l,nameOriginal:m})=>e.jsx(S,{nameRu:n,year:t,posterUrl:i,nameOriginal:m,kinopoiskId:l},l))})]})}export{se as M};

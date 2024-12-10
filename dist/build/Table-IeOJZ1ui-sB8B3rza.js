import{r as w,u as g,b_ as k,b$ as B,j as e,d as M,L as E,aO as I,a3 as L,bo as R,s as $,aQ as a,T as j,F as A,bj as v,B as F,I as P,bi as U,bk as N,G as O,a4 as H}from"./strapi-DZ91I6rk.js";const W=["years","months","days","hours","minutes","seconds"],y=w.forwardRef(({timestamp:s,customIntervals:n=[],...l},i)=>{const{formatRelativeTime:d,formatDate:r,formatTime:c}=g(),u=k({start:s,end:Date.now()}),x=W.find(o=>u[o]>0&&Object.keys(u).includes(o)),h=B(s)?-u[x]:u[x],m=n.find(o=>u[o.unit]<o.threshold),p=m?m.text:d(h,x,{numeric:"auto"});return e.jsx("time",{ref:i,dateTime:s.toISOString(),role:"time",title:`${r(s)} ${c(s)}`,...l,children:p})}),K=({permissions:s,headers:n=[],isLoading:l=!1,tokens:i=[],onConfirmDelete:d,tokenType:r})=>{const[{query:c}]=I(),{formatMessage:u,locale:x}=g(),[,h]=c&&c.sort?c.sort.split(":"):[void 0,"ASC"],m=L(),{trackUsage:p}=R(),o=$(x),f=[...i].sort((t,b)=>h==="DESC"?o.compare(b.name,t.name):o.compare(t.name,b.name)),{canDelete:C,canUpdate:T,canRead:D}=s,S=t=>()=>{D&&(p("willEditTokenFromList",{tokenType:r}),m(t.toString()))};return e.jsx(a.Root,{headers:n,rows:f,isLoading:l,children:e.jsxs(a.Content,{children:[e.jsx(a.Head,{children:n.map(t=>e.jsx(a.HeaderCell,{...t},t.name))}),e.jsx(a.Empty,{}),e.jsx(a.Loading,{}),e.jsx(a.Body,{children:f.map(t=>e.jsxs(a.Row,{onClick:S(t.id),children:[e.jsx(a.Cell,{maxWidth:"25rem",children:e.jsx(j,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:t.name})}),e.jsx(a.Cell,{maxWidth:"25rem",children:e.jsx(j,{textColor:"neutral800",ellipsis:!0,children:t.description})}),e.jsx(a.Cell,{children:e.jsx(j,{textColor:"neutral800",children:e.jsx(y,{timestamp:new Date(t.createdAt)})})}),e.jsx(a.Cell,{children:t.lastUsedAt&&e.jsx(j,{textColor:"neutral800",children:e.jsx(y,{timestamp:new Date(t.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:u({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),T||D||C?e.jsx(a.Cell,{children:e.jsxs(A,{justifyContent:"end",children:[T&&e.jsx(z,{tokenName:t.name,tokenId:t.id}),C&&e.jsx(q,{tokenName:t.name,onClickDelete:()=>d?.(t.id),tokenType:r})]})}):null]},t.id))})]})})},G={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},Q=({tokenName:s,tokenId:n,buttonType:l="edit",children:i})=>{const{formatMessage:d}=g();return e.jsx(_,{tag:H,to:n.toString(),onClick:r=>r.stopPropagation(),title:d(G[l],{target:s}),variant:"ghost",size:"S",children:i})},_=M(E)`
  padding: 0.7rem;

  & > span {
    display: flex;
  }
`,q=({tokenName:s,onClickDelete:n,tokenType:l})=>{const{formatMessage:i}=g(),{trackUsage:d}=R(),r=()=>{d("willDeleteToken",{tokenType:l}),n()};return e.jsx(v.Root,{children:e.jsxs(F,{paddingLeft:1,onClick:c=>c.stopPropagation(),children:[e.jsx(v.Trigger,{children:e.jsx(P,{label:i({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${s}`}),name:"delete",variant:"ghost",children:e.jsx(U,{})})}),e.jsx(N,{onConfirm:r})]})})},z=({tokenName:s,tokenId:n})=>e.jsx(Q,{tokenName:s,tokenId:n,children:e.jsx(O,{})});export{K as T};

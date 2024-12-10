import{g as Y,k as G,h as q,d as R,u as I,bo as Q,n as N,q as X,cE as k,cJ as J,eV as Z,r as f,eE as K,j as e,b8 as ee,P as L,b as P,ba as te,Z as z,F as S,b3 as se,bn as ae,bS as x,bt as ne,cu as oe,S as $,eB as u,eW as _,s as ie,T as O,Q as D,_ as H,cC as re,eO as le,B as V,eS as w,V as de,be as ce,a9 as ue,eX as pe,M as C,G as me,bV as ge,aV as fe}from"./strapi-DZ91I6rk.js";import{u as he}from"./hooks-E5u1mcgM-CpJejbFp.js";import{s as be}from"./objects-D6yBsdmx-NHU4XEhf.js";import{C as B}from"./CardDragPreview-DOxamsuj-DNHOBL2E.js";import{u as ye,I as je}from"./useDragAndDrop-DJ6jqvZN-ECx9v1Xo.js";import{F as xe}from"./FieldTypeIcon-CMlNO8PE-36tqd9f8.js";import{g as Se}from"./getEmptyImage-CjqolaH3.js";const Me=({name:t})=>{const{formatMessage:c}=I(),l=ae(),n=x("Header",p=>p.modified),g=x("Header",p=>p.isSubmitting);return e.jsx(P.Header,{navigationAction:e.jsx(ne,{fallback:`../${oe}/${l.slug}`}),primaryAction:e.jsx($,{size:"S",disabled:!n,type:"submit",loading:g,children:c({id:"global.save",defaultMessage:"Save"})}),subtitle:c({id:u("components.SettingsViewWrapper.pluginHeader.description.list-settings"),defaultMessage:"Define the settings of the list view."}),title:c({id:u("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:"Configure the view - {name}"},{name:_(t)})})},ve=["media","richtext","dynamiczone","relation","component","json","blocks"],Ce=()=>{const{formatMessage:t,locale:c}=I(),l=ie(c,{sensitivity:"base"}),{schema:n}=k(),g=x("Settings",o=>o.values.layout??[]),p=x("Settings",o=>o.values.settings.defaultSortBy),b=x("Settings",o=>o.onChange),i=f.useMemo(()=>Object.values(g).reduce((o,a)=>(n&&!ve.includes(n.attributes[a.name].type)&&o.push({value:a.name,label:typeof a.label!="string"?t(a.label):a.label}),o),[]),[t,g,n]).sort((o,a)=>l.compare(o.label,a.label));f.useEffect(()=>{i.findIndex(o=>o.value===p)===-1&&b("settings.defaultSortBy",i[0]?.value)},[p,b,i]);const h=f.useMemo(()=>Fe.map(o=>o.map(a=>a.type==="enumeration"?{...a,hint:a.hint?t(a.hint):void 0,label:t(a.label),options:a.name==="settings.defaultSortBy"?i:a.options}:{...a,hint:a.hint?t(a.hint):void 0,label:t(a.label)})),[t,i]);return e.jsxs(S,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(O,{variant:"delta",tag:"h2",children:t({id:u("containers.SettingPage.settings"),defaultMessage:"Settings"})}),e.jsx(D.Root,{gap:4,children:h.map(o=>o.map(({size:a,...m})=>e.jsx(D.Item,{s:12,col:a,direction:"column",alignItems:"stretch",children:e.jsx(H,{...m})},m.name)))},"bottom")]})},Fe=[[{label:{id:u("form.Input.search"),defaultMessage:"Enable search"},name:"settings.searchable",size:4,type:"boolean"},{label:{id:u("form.Input.filters"),defaultMessage:"Enable filters"},name:"settings.filterable",size:4,type:"boolean"},{label:{id:u("form.Input.bulkActions"),defaultMessage:"Enable bulk actions"},name:"settings.bulkable",size:4,type:"boolean"}],[{hint:{id:u("form.Input.pageEntries.inputDescription"),defaultMessage:"Note: You can override this value in the Collection Type settings page."},label:{id:u("form.Input.pageEntries"),defaultMessage:"Entries per page"},name:"settings.pageSize",options:["10","20","50","100"].map(t=>({value:t,label:t})),size:6,type:"enumeration"},{label:{id:u("form.Input.defaultSort"),defaultMessage:"Default sort attribute"},name:"settings.defaultSortBy",options:[],size:3,type:"enumeration"},{label:{id:u("form.Input.sort.order"),defaultMessage:"Default sort order"},name:"settings.defaultSortOrder",options:["ASC","DESC"].map(t=>({value:t,label:t})),size:3,type:"enumeration"}]],Ie=Y().shape({label:G().required(),sortable:q()}),Ee=({attribute:t,name:c,onClose:l})=>{const{formatMessage:n}=I(),{toggleNotification:g}=N(),{value:p,onChange:b}=fe(c);if(!p)return console.error("You've opened a field to edit without it being part of the form, this is likely a bug with Strapi. Please open an issue."),g({message:n({id:"content-manager.containers.list-settings.modal-form.error",defaultMessage:"An error occurred while trying to open the form."}),type:"danger"}),null;let d=!["media","relation"].includes(t.type);return"relation"in t&&["oneWay","oneToOne","manyToOne"].includes(t.relation)&&(d=!0),e.jsx(C.Content,{children:e.jsxs(z,{method:"PUT",initialValues:p,validationSchema:Ie,onSubmit:i=>{b(c,i),l()},children:[e.jsx(C.Header,{children:e.jsxs(Re,{children:[e.jsx(xe,{type:t.type}),e.jsx(C.Title,{children:n({id:u("containers.list-settings.modal-form.label"),defaultMessage:"Edit {fieldName}"},{fieldName:_(p.label)})})]})}),e.jsx(C.Body,{children:e.jsx(D.Root,{gap:4,children:[{name:"label",label:n({id:u("form.Input.label"),defaultMessage:"Label"}),hint:n({id:u("form.Input.label.inputDescription"),defaultMessage:"This value overrides the label displayed in the table's head"}),size:6,type:"string"},{label:n({id:u("form.Input.sort.field"),defaultMessage:"Enable sort on this field"}),name:"sortable",size:6,type:"boolean"}].filter(i=>i.name!=="sortable"||i.name==="sortable"&&d).map(({size:i,...h})=>e.jsx(D.Item,{s:12,col:i,direction:"column",alignItems:"stretch",children:e.jsx(H,{...h})},h.name))})}),e.jsxs(C.Footer,{children:[e.jsx($,{onClick:l,variant:"tertiary",children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),e.jsx($,{type:"submit",children:n({id:"global.finish",defaultMessage:"Finish"})})]})]})})},Re=R(S)`
  svg {
    width: 3.2rem;
    margin-right: ${({theme:t})=>t.spaces[3]};
  }
`,Te=({attribute:t,index:c,isDraggingSibling:l,label:n,name:g,onMoveField:p,onRemoveField:b,setIsDraggingSibling:d})=>{const[i,h]=f.useState(!1),{formatMessage:o}=I(),[,a]=f.useState(!1),[{isDragging:m},y,M,F,j]=ye(!0,{type:je.FIELD,item:{index:c,label:n,name:g},index:c,onMoveItem:p,onEnd:()=>d(!1)});f.useEffect(()=>{j(Se(),{captureDraggingState:!1})},[j]),f.useEffect(()=>{m&&d(!0)},[m,d]),f.useEffect(()=>{l||a(r=>!r)},[l]);const s=ue(M,y);return e.jsxs(Le,{ref:s,children:[m&&e.jsx(B,{label:n}),!m&&l&&e.jsx(B,{isSibling:!0,label:n}),!m&&!l&&e.jsxs(De,{borderColor:"neutral150",background:"neutral100",hasRadius:!0,justifyContent:"space-between",onClick:()=>h(!0),children:[e.jsxs(S,{gap:3,children:[e.jsx(we,{ref:F,"aria-label":o({id:u("components.DraggableCard.move.field"),defaultMessage:"Move {item}"},{item:n}),onClick:r=>r.stopPropagation(),children:e.jsx(pe,{})}),e.jsx(O,{fontWeight:"bold",children:n})]}),e.jsxs(S,{paddingLeft:3,onClick:r=>r.stopPropagation(),children:[e.jsxs(C.Root,{open:i,onOpenChange:h,children:[e.jsx(C.Trigger,{children:e.jsx(A,{onClick:r=>{r.stopPropagation()},"aria-label":o({id:u("components.DraggableCard.edit.field"),defaultMessage:"Edit {item}"},{item:n}),type:"button",children:e.jsx(me,{width:"1.2rem",height:"1.2rem"})})}),e.jsx(Ee,{attribute:t,name:`layout.${c}`,onClose:()=>{h(!1)}})]}),e.jsx(A,{onClick:b,"data-testid":`delete-${g}`,"aria-label":o({id:u("components.DraggableCard.delete.field"),defaultMessage:"Delete {item}"},{item:n}),type:"button",children:e.jsx(ge,{width:"1.2rem",height:"1.2rem"})})]})]})]})},A=R.button`
  display: flex;
  align-items: center;
  height: ${({theme:t})=>t.spaces[7]};
  color: ${({theme:t})=>t.colors.neutral600};

  &:hover {
    color: ${({theme:t})=>t.colors.neutral700};
  }

  &:last-child {
    padding: 0 ${({theme:t})=>t.spaces[3]};
  }
`,we=R(A)`
  padding: 0 ${({theme:t})=>t.spaces[3]};
  border-right: 1px solid ${({theme:t})=>t.colors.neutral150};
  cursor: all-scroll;
`,De=R(S)`
  max-height: 3.2rem;
  cursor: pointer;
`,Le=R(V)`
  &:last-child {
    padding-right: ${({theme:t})=>t.spaces[3]};
  }
`,Pe=()=>{const{formatMessage:t}=I(),{model:c,schema:l}=k(),[n,g]=f.useState(!1),[p,b]=f.useState(null),d=f.useRef(null),i=x("SortDisplayedFields",s=>s.values.layout??[]),h=x("SortDisplayedFields",s=>s.addFieldRow),o=x("SortDisplayedFields",s=>s.removeFieldRow),a=x("SortDisplayedFields",s=>s.moveFieldRow),{metadata:m}=re(c,{selectFromResult:({data:s})=>({metadata:s?.contentType.metadatas??{}})}),y=f.useMemo(()=>{if(!l)return[];const s=i.map(r=>r.name);return Object.entries(l.attributes).reduce((r,[v,E])=>{if(!s.includes(v)&&le(E)){const{list:T}=m[v];r.push({name:v,label:T.label||v,sortable:T.sortable})}return r},[])},[m,i,l]),M=s=>{b("add"),h("layout",s)},F=s=>{b("remove"),o("layout",s)},j=(s,r)=>{a("layout",s,r)};return f.useEffect(()=>{p==="add"&&d?.current&&(d.current.scrollLeft=d.current.scrollWidth)},[p]),e.jsxs(S,{alignItems:"stretch",direction:"column",gap:4,children:[e.jsx(O,{variant:"delta",tag:"h2",children:t({id:u("containers.SettingPage.view"),defaultMessage:"View"})}),e.jsxs(S,{padding:4,borderColor:"neutral300",borderStyle:"dashed",borderWidth:"1px",hasRadius:!0,children:[e.jsx(V,{flex:"1",overflow:"auto hidden",ref:d,children:e.jsx(S,{gap:3,children:i.map((s,r)=>e.jsx(Te,{index:r,isDraggingSibling:n,onMoveField:j,onRemoveField:()=>F(r),setIsDraggingSibling:g,...s,attribute:l.attributes[s.name],label:typeof s.label=="object"?t(s.label):s.label},s.name))})}),e.jsxs(w.Root,{children:[e.jsxs(w.Trigger,{paddingLeft:2,paddingRight:2,justifyContent:"center",endIcon:null,disabled:y.length===0,variant:"tertiary",children:[e.jsx(de,{tag:"span",children:t({id:u("components.FieldSelect.label"),defaultMessage:"Add a field"})}),e.jsx(ce,{"aria-hidden":!0,focusable:!1,style:{position:"relative",top:2}})]}),e.jsx(w.Content,{children:y.map(s=>e.jsx(w.Item,{onSelect:()=>M(s),children:typeof s.label=="object"?t(s.label):s.label},s.name))})]})]})]})},$e=()=>{const{formatMessage:t}=I(),{trackUsage:c}=Q(),{toggleNotification:l}=N(),{_unstableFormatAPIError:n}=X(),{model:g,collectionType:p}=k(),{isLoading:b,list:d,edit:i}=J(),[h]=Z(),o=async m=>{try{c("willSaveContentTypeLayout");const y=m.layout??[],M=Object.entries(i.metadatas).reduce((j,[s,r])=>{const{mainField:v,...E}=d.metadatas[s],{label:T,sortable:W}=y.find(U=>U.name===s)??{};return j[s]={edit:r,list:{...E,label:T||E.label,sortable:W||E.sortable}},j},{}),F=await h({layouts:{edit:i.layout.flatMap(j=>j.map(s=>s.map(({name:r,size:v})=>({name:r,size:v})))),list:y.map(j=>j.name)},settings:be(m.settings,"displayName",void 0),metadatas:M,uid:g});"data"in F?(c("didEditListSettings"),l({type:"success",message:t({id:"notification.success.saved",defaultMessage:"Saved"})})):l({type:"danger",message:n(F.error)})}catch(y){console.error(y),l({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})}},a=f.useMemo(()=>({layout:d.layout.map(({label:m,sortable:y,name:M})=>({label:typeof m=="string"?m:t(m),sortable:y,name:M})),settings:d.settings}),[t,d.layout,d.settings]);return p===K?e.jsx(ee,{to:`/single-types/${g}`}):b?e.jsx(L.Loading,{}):e.jsxs(P.Root,{children:[e.jsx(L.Title,{children:`Configure ${d.settings.displayName} List View`}),e.jsx(te,{children:e.jsxs(z,{initialValues:a,onSubmit:o,method:"PUT",children:[e.jsx(Me,{collectionType:p,model:g,name:d.settings.displayName??""}),e.jsx(P.Content,{children:e.jsxs(S,{alignItems:"stretch",background:"neutral0",direction:"column",gap:6,hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[e.jsx(Ce,{}),e.jsx(se,{}),e.jsx(Pe,{})]})})]})})]})},He=()=>{const t=he(c=>c.admin_app.permissions.contentManager?.collectionTypesConfigurations);return e.jsx(L.Protect,{permissions:t,children:e.jsx($e,{})})};export{$e as ListConfiguration,He as ProtectedListConfiguration};

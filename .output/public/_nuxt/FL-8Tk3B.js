import{_ as y}from"./CK6ChEDz.js";import{_ as T}from"./DuVpJfMY.js";import{n as g,r as c,A as k,o as p,c as h,b as l,w as b,a as t,d as v,u as i,B as E,T as D,F as B,z as N}from"./BQPsq2sp.js";const $={class:"btn-group"},j=["onClick"],F=g({__name:"TableCategory",props:["categorys","fetchCategory","loading"],setup(d){const o=c(!1),e=c(!1),a=c(""),n=s=>{a.value=s,e.value=!0},r=[{text:"หมวดหมู่",value:"name",sortable:!0},{text:"จัดการ",value:"action"}],_=d,m=async()=>{o.value=!0;try{const s=await fetch("/api/category/"+a.value,{method:"DELETE",headers:{"Content-Type":"application/json"}});_.fetchCategory()}catch(s){console.log(s)}finally{e.value=!1,o.value=!1}};return(s,f)=>{const C=y,x=k("EasyDataTable"),w=T;return p(),h(B,null,[l(x,{headers:r,items:d.categorys,loading:i(o),"theme-color":"#5c60f5","show-index":""},{"item-action":b(({id:u})=>[t("div",$,[l(C,{to:{name:"category-id",params:{id:u}},class:"btn btn-warning btn-sm"},{default:b(()=>[v("แก้ไข")]),_:2},1032,["to"]),t("button",{class:"btn btn-danger btn-sm",type:"button",onClick:I=>n(u)}," ลบ ",8,j)])]),_:1},8,["items","loading"]),(p(),E(D,{to:"body"},[l(w,{deleteData:m,show:i(e),onClose:f[0]||(f[0]=u=>e.value=!1)},null,8,["show"])]))],64)}}}),L={class:"card shadow border-0 mb-7"},M={class:"card-header d-flex justify-content-between align-items-center"},V=t("h5",{class:"mb-0"},"หมวดหมู่ทั้งหมด",-1),z=t("div",{class:""},[t("button",{class:"btn btn-sm btn-secondary"},"Export PDF"),t("button",{class:"btn btn-sm btn-dark"})],-1),A=t("i",{class:"bi bi-patch-plus fs-6 me-2"},null,-1),G={class:"card-body"},J=g({__name:"index",setup(d){const o=c([]),e=c(!1),a=async()=>{e.value=!0;try{const r=await(await fetch("/api/category",{method:"GET",headers:{"Content-Type":"application/json"}})).json();o.value=r.data}catch(n){console.log(n)}finally{e.value=!1}};return N(()=>{a()}),(n,r)=>{const _=y,m=F;return p(),h("div",L,[t("div",M,[V,z,l(_,{class:"btn-primary btn btn-sm",to:{name:"category-create"}},{default:b(()=>[A,v("เพิ่มหมวดหมู่")]),_:1})]),t("div",G,[l(m,{categorys:i(o),fetchCategory:a,loading:i(e)},null,8,["categorys","loading"])])])}}});export{J as default};

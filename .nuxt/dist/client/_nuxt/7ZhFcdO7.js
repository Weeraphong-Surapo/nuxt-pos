import{_ as f}from"./BDY35pRu.js";import{_ as E}from"./FrOfWjOF.js";import{n as g,r as c,B as D,o as b,c as y,b as r,w as h,a as t,d as v,u as i,C as N,T as $,F as B,A as j,z as A}from"./DV78moFj.js";const F={class:"btn-group"},I=["onClick"],L=g({__name:"TableCategory",props:["categorys","fetchCategory","loading"],setup(d){const l=j(),s=o=>{l.$toast.success(o,{position:"bottom-right",timeout:2500})},a=c(!1),e=c(!1),n=c(""),_=o=>{n.value=o,e.value=!0},u=[{text:"หมวดหมู่",value:"name",sortable:!0},{text:"จัดการ",value:"action"}],x=d,C=async()=>{a.value=!0;try{const o=await fetch("/api/category/"+n.value,{method:"DELETE",headers:{"Content-Type":"application/json"}});x.fetchCategory()}catch(o){console.log(o)}finally{s("ลบข้อมูลสำเร็จ"),e.value=!1,a.value=!1}};return(o,m)=>{const w=f,T=D("EasyDataTable"),k=E;return b(),y(B,null,[r(T,{headers:u,items:d.categorys,loading:i(a),"theme-color":"#5c60f5","show-index":""},{"item-action":h(({id:p})=>[t("div",F,[r(w,{to:{name:"category-id",params:{id:p}},class:"btn btn-warning btn-sm"},{default:h(()=>[v("แก้ไข")]),_:2},1032,["to"]),t("button",{class:"btn btn-danger btn-sm",type:"button",onClick:H=>_(p)}," ลบ ",8,I)])]),_:1},8,["items","loading"]),(b(),N($,{to:"body"},[r(k,{deleteData:C,show:i(e),onClose:m[0]||(m[0]=p=>e.value=!1)},null,8,["show"])]))],64)}}}),M={class:"card shadow border-0 mb-7"},V={class:"card-header d-flex justify-content-between align-items-center"},z=t("h5",{class:"mb-0"},"หมวดหมู่ทั้งหมด",-1),G=t("div",{class:""},[t("button",{class:"btn btn-sm btn-secondary"},"Export PDF"),t("button",{class:"btn btn-sm btn-dark"})],-1),P=t("i",{class:"bi bi-patch-plus fs-6 me-2"},null,-1),q={class:"card-body"},Q=g({__name:"index",setup(d){const l=c([]),s=c(!1),a=async()=>{s.value=!0;try{const n=await(await fetch("/api/category",{method:"GET",headers:{"Content-Type":"application/json"}})).json();l.value=n.data}catch(e){console.log(e)}finally{s.value=!1}};return A(()=>{a()}),(e,n)=>{const _=f,u=L;return b(),y("div",M,[t("div",V,[z,G,r(_,{class:"btn-primary btn btn-sm",to:{name:"category-create"}},{default:h(()=>[P,v("เพิ่มหมวดหมู่")]),_:1})]),t("div",q,[r(u,{categorys:i(l),fetchCategory:a,loading:i(s)},null,8,["categorys","loading"])])])}}});export{Q as default};

import{_ as p}from"./CK6ChEDz.js";import{n as b,A as x,o as h,B as g,w as r,a as t,b as _,d as f,r as u,z as v,c as y,u as m}from"./BQPsq2sp.js";const w={class:"btn-group"},T=["onClick"],k=t("button",{class:"badge text-bg-success"},"ปกติ",-1),C=b({__name:"TableUser",props:["users","fetchUsers","loading"],setup(n){const o=[{text:"ชื่อ",value:"firstName",sortable:!0},{text:"ชื่อผู้ใช้งาน",value:"username"},{text:"อีเมล",value:"email"},{text:"เงินเดือน",value:"salary"},{text:"สถานะ",value:"active"},{text:"จัดการ",value:"action"}],a=n,c=async s=>{try{const e=await fetch("/api/user/"+s,{method:"DELETE",headers:{"Content-Type":"application/json"}});a.fetchUsers()}catch(e){console.log(e)}};return(s,e)=>{const l=p,i=x("EasyDataTable");return h(),g(i,{headers:o,items:n.users,loading:n.loading,"theme-color":"#5c60f5","show-index":""},{"item-action":r(({id:d})=>[t("div",w,[_(l,{to:{name:"user-id",params:{id:d}},class:"btn btn-warning btn-sm"},{default:r(()=>[f("แก้ไข")]),_:2},1032,["to"]),t("button",{class:"btn btn-danger btn-sm",type:"button",onClick:j=>c(Number(d))}," ลบ ",8,T)])]),"item-active":r(({id:d})=>[k]),_:1},8,["items","loading"])}}}),E={class:"card shadow border-0 mb-7"},N={class:"card-header d-flex justify-content-between align-items-center"},U=t("h5",{class:"mb-0"},"ผู้ใช้งานทั้งหมด",-1),B=t("i",{class:"bi bi-patch-plus fs-6 me-2"},null,-1),$={class:"card-body"},V=b({__name:"index",setup(n){const o=u([]);u(!1);const a=u(!1),c=async()=>{a.value=!0;try{const e=await(await fetch("/api/user",{method:"GET",headers:{"Content-Type":"application/json"}})).json();o.value=e.data,console.log(e.data)}catch(s){console.log(s)}finally{a.value=!1}};return v(()=>{c()}),(s,e)=>{const l=p,i=C;return h(),y("div",E,[t("div",N,[U,_(l,{class:"btn-primary btn btn-sm",to:{name:"user-create"}},{default:r(()=>[B,f("เพิ่มผู้ใช้งาน")]),_:1})]),t("div",$,[_(i,{users:m(o),fetchUsers:c,loading:m(a)},null,8,["users","loading"])])])}}});export{V as default};

import{_ as p}from"./BDY35pRu.js";import{n as m,B as b,o as d,C as h,w as r,a as e,b as u,t as f,r as i,z as v,c as x,u as _}from"./DV78moFj.js";const y={class:"btn-group"},g=e("i",{class:"bi bi-eye-fill"},null,-1),S=m({__name:"TableSale",props:["sales","fetchSales","loading"],setup(l){const a=[{text:"รหัส",value:"order_code",sortable:!0},{text:"ลูกค้า",value:"customers.full_name"},{text:"รูปแบบ",value:"type_pay",sortable:!0},{text:"ภาษี",value:"vat",sortable:!0},{text:"ราคาขาย",value:"total_price",sortable:!0},{text:"ราคาขายรวมภาษี",value:"total_price_sum_vat",sortable:!0},{text:"วันที่",value:"createdDate"},{text:"จัดการ",value:"action"}];return(n,c)=>{const t=p,s=b("EasyDataTable");return d(),h(s,{headers:a,items:l.sales,"theme-color":"#5c60f5",loading:l.loading},{"item-action":r(({id:o})=>[e("div",y,[u(t,{to:{name:"sale-id",params:{id:o}},class:"btn btn-primary btn-sm"},{default:r(()=>[g]),_:2},1032,["to"])])]),"item-type_pay":r(({type_pay:o})=>[e("span",null,f(o?"โอนชำระ":"ชำระเงินสด"),1)]),_:1},8,["items","loading"])}}}),T={class:"card shadow border-0 mb-7"},w=e("div",{class:"card-header"},[e("h5",{class:"mb-0"},"Sale")],-1),B={class:"card-body"},D={__name:"index",setup(l){const a=i(!1),n=i([]),c=async()=>{a.value=!0;try{const s=await(await fetch("/api/sale",{method:"GET",headers:{"Content-Type":"application/json"}})).json();n.value=s.data,console.log(s.data)}catch(t){console.log(t)}finally{a.value=!1}};return v(()=>{c()}),(t,s)=>{const o=S;return d(),x("div",T,[w,e("div",B,[u(o,{loading:_(a),fetchSales:c,sales:_(n)},null,8,["loading","sales"])])])}}};export{D as default};

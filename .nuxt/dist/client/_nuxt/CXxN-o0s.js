import{_ as v}from"./B8mqVfVr.js";import{n as b,r,z as x,o as i,c as d,b as w,u as a,d as T,t as m,a as e,q as C,s as E,v as N,F as V,E as j,x as I,A as S}from"./DV78moFj.js";const k={class:"card shadow border-0 mb-7"},A={class:"card-body"},B={class:"row"},M={class:"col-md-6"},D={class:"mb-3"},F=e("label",{for:"exampleInputEmail1",class:"form-label"},"ประเภท",-1),L={class:"col-md-6"},O={class:"mb-3"},$=e("label",{for:"exampleInputEmail1",class:"form-label"},"หมวดหมู่",-1),q=e("option",{value:"",disabled:"",selected:""},"เลือกหมวดหมู่",-1),z=["value"],G=["disabled"],H=b({__name:"create",setup(J){const n=r({name:"",category:""}),u=r(null),o=r(!1),p=S(),_=s=>{p.$toast.success(s,{position:"bottom-right",timeout:2500})},y=async()=>{o.value=!0;try{const t=await(await fetch("/api/subcategory",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.value)})).json();_("บันทึกสำเร็จ"),I({name:"category-subcategory"})}catch(s){console.log(s)}finally{o.value=!1}},f=async()=>{o.value=!0;try{const t=await(await fetch("/api/category",{method:"GET",headers:{"Content-Type":"application/json"}})).json();u.value=t.data}catch(s){console.log(s)}finally{o.value=!1}},g=async s=>{try{const l=s.target.value;n.value.category=l}catch(t){console.log(t)}};return x(()=>{f()}),(s,t)=>{const l=v;return i(),d("div",k,[w(l,{loading:a(o)},null,8,["loading"]),T(" "+m(a(n))+" ",1),e("div",A,[e("form",{onSubmit:t[1]||(t[1]=C(c=>y(),["prevent"]))},[e("div",B,[e("div",M,[e("div",D,[F,E(e("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":t[0]||(t[0]=c=>a(n).name=c)},null,512),[[N,a(n).name]])])]),e("div",L,[e("div",O,[$,e("select",{class:"form-select form-select-sm",onChange:g},[q,(i(!0),d(V,null,j(a(u),(c,h)=>(i(),d("option",{value:c.id,key:h},m(c.name),9,z))),128))],32)])])]),e("button",{type:"submit",class:"btn btn-primary btn-sm",disabled:a(o)},m(a(o)?"กำลังบันทึก...":"บันทึก"),9,G)],32)])])}}});export{H as default};
import{_ as p}from"./B8mqVfVr.js";import{n as u,r as c,o as _,c as f,b,u as a,a as e,q as y,s as v,v as g,t as h,x,A as w}from"./DV78moFj.js";const T={class:"card shadow border-0 mb-7"},N={class:"card-body"},S={class:"mb-3"},A=e("label",{for:"exampleInputEmail1",class:"form-label"},"หมวดหมู่",-1),B=["disabled"],j=u({__name:"create",setup(C){const i=w(),l=s=>{i.$toast.success(s,{position:"bottom-right",timeout:2500})},n=c({name:""}),o=c(!1),d=async()=>{o.value=!0;try{const t=await(await fetch("/api/category",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.value)})).json();l("บันทึกสำเร็จ"),x({name:"category"})}catch(s){console.log(s)}finally{o.value=!1}};return(s,t)=>{const m=p;return _(),f("div",T,[b(m,{loading:a(o)},null,8,["loading"]),e("div",N,[e("form",{onSubmit:t[1]||(t[1]=y(r=>d(),["prevent"]))},[e("div",S,[A,v(e("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":t[0]||(t[0]=r=>a(n).name=r),required:""},null,512),[[g,a(n).name]])]),e("button",{type:"submit",class:"btn btn-primary btn-sm",disabled:a(o)},h(a(o)?"กำลังบันทึก...":"บันทึก"),9,B)],32)])])}}});export{j as default};

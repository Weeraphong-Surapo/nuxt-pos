import{_ as m}from"./DAiWPfT3.js";import{n as u,y as f,r as i,z as y,o as _,c as b,b as v,u as s,a as o,q as g,s as h,v as w,t as x,x as T}from"./BQPsq2sp.js";const C={class:"card shadow border-0 mb-7"},j={class:"card-body"},B={class:"mb-3"},E=o("label",{for:"exampleInputEmail1",class:"form-label"},"หมวดหมู่",-1),M=["disabled"],k=u({__name:"[id]",setup(N){const r=f(),n=i({name:""}),e=i(!1),c=async()=>{e.value=!0;try{const a=await(await fetch("/api/category/"+r.params.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.value)})).json();T({name:"category"})}catch(t){console.log(t)}finally{e.value=!1}},d=async()=>{e.value=!0;try{const a=await(await fetch("/api/category/"+r.params.id,{method:"GET",headers:{"Content-Type":"application/json"}})).json();n.value=a.data}catch(t){console.log(t)}finally{e.value=!1}};return y(()=>{d()}),(t,a)=>{const p=m;return _(),b("div",C,[v(p,{loading:s(e)},null,8,["loading"]),o("div",j,[o("form",{onSubmit:a[1]||(a[1]=g(l=>c(),["prevent"]))},[o("div",B,[E,h(o("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":a[0]||(a[0]=l=>s(n).name=l)},null,512),[[w,s(n).name]])]),o("button",{type:"submit",class:"btn btn-primary btn-sm",disabled:s(e)},x(s(e)?"กำลังอัพเดต":"อัพเดต"),9,M)],32)])])}}});export{k as default};
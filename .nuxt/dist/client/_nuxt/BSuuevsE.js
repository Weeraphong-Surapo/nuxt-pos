import{_ as f}from"./DAiWPfT3.js";import{n as _,y as b,r as c,z as v,o as h,c as y,b as x,u as t,a as o,q as g,s as r,v as d,x as w}from"./BQPsq2sp.js";const T={class:"card shadow border-0 mb-7"},V={class:"card-body"},C={class:"mb-3"},U=o("label",{for:"",class:"form-label"},"ชื่อลูกค้า",-1),j={class:"row"},B={class:"mb-3"},M=o("label",{for:"",class:"form-label"},"เบอร์โทร",-1),N={class:"mb-3"},S=o("label",{for:"",class:"form-label"},"ไลน์",-1),k={class:"mb-3"},E=o("label",{for:"",class:"form-label"},"ที่อยู่",-1),O=["disabled"],G=_({__name:"[id]",setup(q){const i=b(),e=c({full_name:"",phone:"",line:"",address:""}),n=c(!1),m=async()=>{n.value=!0;try{const s=await(await fetch("/api/customer/"+i.params.id,{method:"GET",headers:{"Content-Type":"application/json"}})).json();e.value=s.data}catch(l){console.log(l)}finally{n.value=!1}},u=async()=>{n.value=!0;try{const l=await fetch("/api/customer/"+i.params.id,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.value)});w({name:"customer"})}catch(l){console.log(l)}finally{n.value=!1}};return v(()=>{m()}),(l,s)=>{const p=f;return h(),y("div",T,[x(p,{loading:t(n)},null,8,["loading"]),o("div",V,[o("form",{onSubmit:s[4]||(s[4]=g(a=>u(),["prevent"]))},[o("div",C,[U,r(o("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":s[0]||(s[0]=a=>t(e).full_name=a)},null,512),[[d,t(e).full_name]])]),o("div",j,[o("div",B,[M,r(o("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":s[1]||(s[1]=a=>t(e).phone=a)},null,512),[[d,t(e).phone]])]),o("div",N,[S,r(o("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":s[2]||(s[2]=a=>t(e).line=a)},null,512),[[d,t(e).line]])])]),o("div",k,[E,r(o("textarea",{rows:"3",cols:"10",class:"form-control form-control-sm","onUpdate:modelValue":s[3]||(s[3]=a=>t(e).address=a)},null,512),[[d,t(e).address]])]),o("button",{type:"submit",class:"btn btn-primary btn-sm",disabled:t(n)}," บันทึก ",8,O)],32)])])}}});export{G as default};

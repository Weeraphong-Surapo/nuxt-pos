import{_ as b}from"./B8mqVfVr.js";import{n as h,y as v,r as i,z as y,o as x,c as g,b as w,u as e,a as o,q as T,s as r,v as c,x as V,A as C}from"./DV78moFj.js";const N={class:"card shadow border-0 mb-7"},U={class:"card-body"},j={class:"mb-3"},A=o("label",{for:"",class:"form-label"},"ชื่อลูกค้า",-1),B={class:"row"},M={class:"mb-3"},S=o("label",{for:"",class:"form-label"},"เบอร์โทร",-1),k={class:"mb-3"},E=o("label",{for:"",class:"form-label"},"ไลน์",-1),I={class:"mb-3"},O=o("label",{for:"",class:"form-label"},"ที่อยู่",-1),$=["disabled"],G=h({__name:"[id]",setup(q){const d=v(),m=C(),u=a=>{m.$toast.success(a,{position:"bottom-right",timeout:2500})},t=i({full_name:"",phone:"",line:"",address:""}),l=i(!1),p=async()=>{l.value=!0;try{const s=await(await fetch("/api/customer/"+d.params.id,{method:"GET",headers:{"Content-Type":"application/json"}})).json();t.value=s.data}catch(a){console.log(a)}finally{l.value=!1}},f=async()=>{l.value=!0;try{const a=await fetch("/api/customer/"+d.params.id,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.value)});u("อัพเดตสำเร็จ"),V({name:"customer"})}catch(a){console.log(a)}finally{l.value=!1}};return y(()=>{p()}),(a,s)=>{const _=b;return x(),g("div",N,[w(_,{loading:e(l)},null,8,["loading"]),o("div",U,[o("form",{onSubmit:s[4]||(s[4]=T(n=>f(),["prevent"]))},[o("div",j,[A,r(o("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":s[0]||(s[0]=n=>e(t).full_name=n)},null,512),[[c,e(t).full_name]])]),o("div",B,[o("div",M,[S,r(o("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":s[1]||(s[1]=n=>e(t).phone=n)},null,512),[[c,e(t).phone]])]),o("div",k,[E,r(o("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":s[2]||(s[2]=n=>e(t).line=n)},null,512),[[c,e(t).line]])])]),o("div",I,[O,r(o("textarea",{rows:"3",cols:"10",class:"form-control form-control-sm","onUpdate:modelValue":s[3]||(s[3]=n=>e(t).address=n)},null,512),[[c,e(t).address]])]),o("button",{type:"submit",class:"btn btn-primary btn-sm",disabled:e(l)}," บันทึก ",8,$)],32)])])}}});export{G as default};

import{_ as u}from"./B8mqVfVr.js";import{n as _,r as i,o as f,c as b,b as v,u as e,a as s,q as h,s as a,v as n}from"./DV78moFj.js";const x={class:"card shadow border-0 mb-7"},y={class:"card-body"},g={class:"mb-3"},w=s("label",{for:"exampleInputEmail1",class:"form-label"},"ชื่อผู้ใช้",-1),N={class:"mb-3"},V=s("label",{for:"exampleInputEmail1",class:"form-label"},"รหัสผ่าน",-1),E={class:"row"},I={class:"col-md-6"},U={class:"mb-3"},S=s("label",{for:"exampleInputEmail1",class:"form-label"},"ชื่อ",-1),A={class:"col-md-6"},B={class:"mb-3"},C=s("label",{for:"exampleInputEmail1",class:"form-label"},"นามสกุล",-1),T={class:"mb-3"},j=s("label",{for:"exampleInputEmail1",class:"form-label"},"อีเมล",-1),k={class:"mb-3"},M=s("label",{for:"exampleInputEmail1",class:"form-label"},"เงินเดือน",-1),O={class:"mb-3"},q=s("label",{for:"exampleInputEmail1",class:"form-label"},"สถานะ",-1),D=s("option",{value:"0",selected:""},"พนักงาน",-1),J=s("option",{value:"1"},"ผู้ดูแลร้าน",-1),L=[D,J],P=s("button",{class:"btn btn-sm btn-primary"},"บันทึก",-1),G=_({__name:"create",setup($){const d=i(!1),t=i({firstName:"",lastName:"",email:"",username:"",password:"",salary:"",isAdmin:!1}),c=async()=>{try{const o=await(await fetch("/api/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.value)})).json();console.log(o.data)}catch(r){console.log(r)}},p=r=>{const m=r.target.value;t.value.isAdmin=!!m};return(r,o)=>{const m=u;return f(),b("div",x,[v(m,{loading:e(d)},null,8,["loading"]),s("div",y,[s("form",{onSubmit:o[6]||(o[6]=h(l=>c(),["prevent"]))},[s("div",g,[w,a(s("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":o[0]||(o[0]=l=>e(t).username=l)},null,512),[[n,e(t).username]])]),s("div",N,[V,a(s("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":o[1]||(o[1]=l=>e(t).password=l)},null,512),[[n,e(t).password]])]),s("div",E,[s("div",I,[s("div",U,[S,a(s("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":o[2]||(o[2]=l=>e(t).firstName=l)},null,512),[[n,e(t).firstName]])])]),s("div",A,[s("div",B,[C,a(s("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":o[3]||(o[3]=l=>e(t).lastName=l)},null,512),[[n,e(t).lastName]])])])]),s("div",T,[j,a(s("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":o[4]||(o[4]=l=>e(t).email=l)},null,512),[[n,e(t).email]])]),s("div",k,[M,a(s("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":o[5]||(o[5]=l=>e(t).salary=l)},null,512),[[n,e(t).salary]])]),s("div",O,[q,s("select",{class:"form-select form-select-sm",onChange:p},L,32)]),P],32)])])}}});export{G as default};
import{_ as l,o as n,B as i,w as r,c as m,a as t,G as d,C as _,K as p,p as u,e as b}from"./BQPsq2sp.js";const c=e=>(u("data-v-a8fae1ae"),e=e(),b(),e),f={key:0,class:"modal-mask"},h={class:"modal-container"},k={class:"modal-body p-0 text-center"},v=c(()=>t("i",{class:"bi bi-exclamation-square text-warning",style:{"font-size":"60px"}},null,-1)),x=c(()=>t("h4",{class:"text-dark"},"ต้องการลบข้อมูล ?",-1)),C={class:"modal-footer d-flex justify-content-center pt-3 pb-0"},w={class:""},y={__name:"ConfirmModal",props:{show:Boolean,deleteData:Function},setup(e){return(o,s)=>(n(),i(p,{name:"modal"},{default:r(()=>[e.show?(n(),m("div",f,[t("div",h,[t("div",k,[d(o.$slots,"body",{},()=>[v,x],!0)]),t("div",C,[d(o.$slots,"footer",{},()=>[t("div",w,[t("button",{class:"btn btn-danger btn-sm me-5",onClick:s[0]||(s[0]=(...a)=>e.deleteData&&e.deleteData(...a))}," DELETE "),t("button",{class:"btn btn-secondary btn-sm",onClick:s[1]||(s[1]=a=>o.$emit("close"))}," Close ")])],!0)])])])):_("",!0)]),_:3}))}},D=l(y,[["__scopeId","data-v-a8fae1ae"]]);export{D as _};

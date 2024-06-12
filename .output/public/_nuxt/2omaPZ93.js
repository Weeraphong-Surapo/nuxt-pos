import{_ as st}from"./DAiWPfT3.js";import{_ as at}from"./CK6ChEDz.js";import{o as h,c as g,a as t,G as nt,n as G,A as lt,B as it,w as I,r as v,H as b,z as rt,b as C,u as l,t as k,d as $,F as B,D as O,s as D,v as J,I as F,E as ct,p as dt,e as ut,_ as pt}from"./BQPsq2sp.js";const vt={class:"modal-dialog modal-xl",id:"exampleModal"},bt={class:"modal-content"},_t=t("div",{class:"modal-header"},[t("h1",{class:"modal-title fs-5",id:"staticBackdropLabel"},"Modal title"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),mt={class:"modal-body"},ht={__name:"ModalPos",props:["total_price"],setup(u){return(y,_)=>(h(),g("div",vt,[t("div",bt,[_t,t("div",mt,[nt(y.$slots,"default")])])]))}},yt={class:"btn-group"},gt=["onClick"],ft=t("i",{class:"bi bi-cart-plus-fill"},null,-1),xt=[ft],wt=["src"],Ct=G({__name:"TablePos",props:["products","fetchProduct","loading","addToCart"],setup(u){const y=[{text:"บาร์โค้ด",value:"barcode",sortable:!0},{text:"รูปภาพ",value:"image"},{text:"สินค้า",value:"name",sortable:!0},{text:"ราคา",value:"price",sortable:!0},{text:"จำนวน",value:"quantity"},{text:"Action",value:"action"}];return(_,r)=>{const p=lt("EasyDataTable");return h(),it(p,{headers:y,items:u.products,"theme-color":"#5c60f5",loading:u.loading,"rows-per-page":9},{"item-action":I(c=>[t("div",yt,[t("button",{class:"btn btn-primary btn-sm",type:"button",onClick:s=>u.addToCart(c)},xt,8,gt)])]),"item-image":I(({file_path:c})=>[t("img",{src:c,alt:"",style:{height:"60px",width:"80px","object-fit":"cover"},class:"rounded"},null,8,wt)]),_:1},8,["items","loading"])}}}),i=u=>(dt("data-v-e171234a"),u=u(),ut(),u),kt={class:"container-fluid px-0"},$t={class:"row"},It={class:"col-md-7"},St={class:"card border border-bottom-0 border-end-0 border-start-0 border-4 vh-100"},Nt={class:"card-header d-flex justify-content-between align-items-center"},Tt=i(()=>t("div",{class:"input-group mb-3 input-group-sm"},[t("span",{class:"input-group-text",id:"basic-addon1"},[t("i",{class:"bi bi-person-circle"})]),t("input",{readonly:"",type:"text",class:"form-control form-control-sm",placeholder:"วีระพงษ์ สุราโพธิ์"})],-1)),qt={class:"input-group input-group-sm mb-3"},Mt=i(()=>t("span",{class:"input-group-text"},[t("i",{class:"bi bi-people-fill"})],-1)),Bt=i(()=>t("option",{value:"",disabled:"",selected:""},"เลือกลูกค้า",-1)),jt=["value"],Pt=i(()=>t("button",{type:"button",class:"input-group-text bg-dark text-white"}," ยกเลิก ",-1)),Vt=i(()=>t("div",{class:"border border-1 border-warning"},null,-1)),At={class:"text-center mt-1"},Et={class:"card-body mb-0 pb-0",style:{"max-height":"calc(100vh - 150px)","overflow-y":"auto"}},Lt={class:"input-group input-group-sm rounded-0"},Ot=["onClick"],Dt=["value"],Jt={class:"d-flex"},Ft=["onClick"],Gt={style:{width:"70px"},class:"text-center border"},Ht=["onClick"],zt={class:"input-group input-group-sm w-100"},Qt=["value"],Rt=i(()=>t("button",{type:"button",class:"input-group-text bg-info text-white rounded-0"}," ฿ ",-1)),Ut={class:"p-3 border-3 border-secondary"},Xt={class:"row mb-3"},Kt=i(()=>t("label",{for:"",class:"col-sm-2 col-form-label"},"เปอร์เซ็น (VAT)",-1)),Wt={class:"col-sm-10"},Yt={class:"row mb-3"},Zt=i(()=>t("label",{for:"",class:"col-sm-2 col-form-label"},"ภาษี",-1)),te={class:"col-sm-10"},ee=["value"],oe={class:"row mb-3"},se=i(()=>t("label",{for:"",class:"col-sm-2 col-form-label"},"รวมทั้งสิ้น",-1)),ae={class:"col-sm-10"},ne=["value"],le=["disabled"],ie={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},re={class:"row"},ce={class:"col-12"},de={class:"list-group list-group-horizontal-sm",id:"list-tab",role:"tablist"},ue={class:"col-12"},pe={class:"tab-content",id:"nav-tabContent"},ve={class:"tab-pane fade show active",id:"list-home",role:"tabpanel","aria-labelledby":"list-home-list"},be={class:"row"},_e={class:"col-md-6"},me={class:"my-3"},he={class:"input-group flex-nowrap"},ye=i(()=>t("span",{class:"input-group-text",style:{width:"150px"},id:"addon-wrapping"},"ยอดรวมเงินชำระ",-1)),ge=["value"],fe={class:"mb-3"},xe={class:"input-group flex-nowrap"},we=i(()=>t("span",{class:"input-group-text",style:{width:"150px"},id:"addon-wrapping"},"ยอดรับเงิน",-1)),Ce={class:"mb-3"},ke={class:"input-group flex-nowrap"},$e=i(()=>t("span",{class:"input-group-text",style:{width:"150px"},id:"addon-wrapping"},"ยอดเงินทอน",-1)),Ie=["value"],Se={class:"row"},Ne={class:"col-md-6"},Te=i(()=>t("button",{type:"button",class:"btn btn-secondary w-100","data-bs-dismiss":"modal"}," ปิด ",-1)),qe={class:"col-md-6"},Me={class:"calculator mt-3"},Be={class:"calculator-keys"},je={class:"tab-pane fade",id:"list-profile",role:"tabpanel","aria-labelledby":"list-profile-list"},Pe=i(()=>t("span",{class:"text-muted d-block my-3"},[$(" เมื่อลูกค้าทำการโอนเงินผ่านธนาคารออนไลน์ "),t("span",{class:"text-danger"},"แนะนำให้คุณตรวจสอบเลขที่บัญชีและข้อมูลการโอนให้ถูกต้อง และให้เก็บหลักฐานการโอนเงินเอาไว้"),$(" เมื่อโอนเงินเสร็จสิ้น "),t("span",{class:"text-success"},'คุณสามารถปุ่ม "ชำระเงินแล้ว"'),$(" เพื่อช่วยให้กระบวนการดำเนินการได้รวดเร็วและถูกต้อง.")],-1)),Ve={class:"d-flex justify-content-center"},Ae={class:"col-md-5"},Ee={class:"card border border-bottom-0 border-start-0 border-end-0 border-4"},Le=ct('<div class="card-header" data-v-e171234a><input type="text" class="form-control mb-3 border-danger" placeholder="search..." data-v-e171234a><select class="form-select form-select-sm border-danger" data-v-e171234a><option value="" data-v-e171234a></option><option value="" data-v-e171234a></option></select></div>',1),Oe={class:"card-bod"},De={class:"table-responsive"},Je=G({__name:"index",setup(u){const y=v([]),_=v(0),r=v(""),p=v(0),c=v(!1),s=v([]),j=v([]),S=v(0),N=b(()=>r.value==""?0:r.value),P=async()=>{c.value=!0;try{await Z();const e=await(await fetch("/api/product",{method:"GET",headers:{"Content-Type":"application/json"}})).json();y.value=e.data}catch(o){console.log(o)}finally{c.value=!1}},d=o=>{r.value+=o},H=o=>{const e=s.value.findIndex(a=>a.id===o.id);if(e!==-1)s.value[e].qty++,s.value[e].total_price=s.value[e].price*s.value[e].qty;else{const a={id:String(o.id),name:String(o.name),price:Number(o.price),stock:Number(o.quantity),cost:Number(o.cost),qty:1,total_price:Number(o.price)*1};s.value.push(a),localStorage.setItem("cart",JSON.stringify(s.value))}},z=o=>{const e=s.value.findIndex(a=>a.id===o);e!==-1&&s.value.splice(e,1),localStorage.setItem("cart",JSON.stringify(s.value))},Q=o=>{const e=s.value.findIndex(a=>a.id===o);if(e!==-1){const a=s.value[e];a.qty<a.stock&&(a.qty++,a.total_price=a.price*a.qty)}localStorage.setItem("cart",JSON.stringify(s.value))},R=o=>{const e=s.value.findIndex(a=>a.id===o);e!==-1&&(s.value[e].qty>1?(s.value[e].qty--,s.value[e].total_price=s.value[e].price*s.value[e].qty):s.value.splice(e,1)),localStorage.setItem("cart",JSON.stringify(s.value))},U=()=>{r.value=String(m.value)},T=b(()=>s.value.reduce((o,e)=>o+e.price*e.qty,0)),m=b(()=>{let o;return p.value>0?o=s.value.reduce((e,a)=>e+a.price*a.qty,0)+f.value:o=s.value.reduce((e,a)=>e+a.price*a.qty,0),o}),f=b(()=>{const o=s.value.reduce((a,w)=>a+w.price*w.qty,0);return p.value?o*p.value/100:0}),x=o=>new Intl.NumberFormat("th-TH",{style:"currency",currency:"THB"}).format(o),q=b(()=>m.value-Number(r.value)),X=()=>{r.value="0"},K=()=>{r.value=r.value.slice(0,-1)},V=()=>{const o=localStorage.getItem("cart");o&&(s.value=JSON.parse(o))},W=b(()=>s.value.reduce((o,e)=>o+e.cost,0)),Y=b(()=>s.value.reduce((o,e)=>o+e.price*e.qty,0)),A=b(()=>Y.value-W.value),E=async()=>{c.value=!0;let o;_.value==0?o={customer:S.value,total_price:T.value,vat:f.value,total_price_sum_vat:m.value,getMoney:r.value,change_money:q.value,type_pay:_.value,orders:s.value,profit:A.value}:o={customer:S.value,total_price:T.value,vat:f.value,total_price_sum_vat:m.value,getMoney:m.value,change_money:q.value,type_pay:_.value,orders:s.value,profit:A.value};try{const a=await(await fetch("/api/sale",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();s.value=[],localStorage.removeItem("cart"),V()}catch(e){console.log(e)}finally{c.value=!1}},Z=async()=>{try{const e=await(await fetch("/api/customer",{method:"GET",headers:{"Content-Type":"application/json"}})).json();j.value=e.data}catch(o){console.log(o)}},tt=o=>{const a=o.target.value;S.value=Number(a)};return rt(()=>{P(),V()}),(o,e)=>{const a=st,w=at,et=ht,ot=Ct;return h(),g(B,null,[C(a,{loading:l(c)},null,8,["loading"]),t("div",kt,[t("div",$t,[t("div",It,[t("div",St,[t("div",Nt,[t("h2",null,"ขายสินค้าหน้าร้าน "+k(l(f)),1),C(w,{to:{name:"index"},class:"btn btn-danger btn-sm"},{default:I(()=>[$("Exit")]),_:1})]),Tt,t("div",qt,[Mt,t("select",{class:"form-select form-select-sm",onChange:tt},[Bt,(h(!0),g(B,null,O(l(j),(n,M)=>(h(),g("option",{value:n.id,key:M},k(n.full_name),9,jt))),128))],32),Pt]),Vt,t("p",At,"รายการสินค้า ("+k(l(s).length)+")",1),t("div",Et,[(h(!0),g(B,null,O(l(s),(n,M)=>(h(),g("div",{class:"d-flex align-items-center mb-3",key:M,style:{"overflow-y":"auto"}},[t("div",Lt,[t("button",{onClick:L=>z(n.id),type:"button",class:"input-group-text bg-danger text-white rounded-0"}," X ",8,Ot),t("input",{readonly:"",type:"text",class:"form-control form-control-sm rounded-0",value:n.name},null,8,Dt)]),t("div",Jt,[t("button",{class:"btn btn-warning btn-sm rounded-0",onClick:L=>R(n.id)}," - ",8,Ft),t("span",Gt,k(n.qty),1),t("button",{class:"btn btn-primary btn-sm rounded-0",onClick:L=>Q(n.id)}," + ",8,Ht)]),t("div",zt,[t("input",{readonly:"",type:"text",class:"form-control form-control-sm text-end rounded-0",value:n.total_price},null,8,Qt),Rt])]))),128))]),t("div",Ut,[t("div",Xt,[Kt,t("div",Wt,[D(t("input",{type:"number",class:"form-control form-control-sm text-end","onUpdate:modelValue":e[0]||(e[0]=n=>F(p)?p.value=n:null)},null,512),[[J,l(p)]])])]),t("div",Yt,[Zt,t("div",te,[t("input",{readonly:"",type:"text",class:"form-control form-control-sm text-end",value:x(l(f))},null,8,ee)])]),t("div",oe,[se,t("div",ae,[t("input",{type:"text",class:"form-control form-control-sm text-end",value:x(l(m)),readonly:""},null,8,ne)])])]),t("button",{class:"btn btn-success w-100 rounded-0 btn-lg","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",disabled:l(s).length<1}," ดำเนินการต่อ ",8,le),t("div",ie,[C(et,{total_price:l(T)},{default:I(()=>[t("div",re,[t("div",ce,[t("div",de,[t("a",{class:"list-group-item list-group-item-action active text-center",id:"list-home-list","data-bs-toggle":"list",href:"#list-home",role:"tab","aria-controls":"list-home",onClick:e[1]||(e[1]=n=>_.value=0)},"ชำระเงินสด"),t("a",{class:"list-group-item list-group-item-action text-center",id:"list-profile-list","data-bs-toggle":"list",href:"#list-profile",role:"tab","aria-controls":"list-profile",onClick:e[2]||(e[2]=n=>_.value=1)},"โอนชำระ")])]),t("div",ue,[t("div",pe,[t("div",ve,[t("div",be,[t("div",_e,[t("div",me,[t("div",he,[ye,t("input",{type:"text",class:"form-control from-control-sm text-end",value:x(l(m)),readonly:""},null,8,ge)])]),t("div",fe,[t("div",xe,[we,D(t("input",{type:"text",class:"form-control from-control-sm text-end","onUpdate:modelValue":e[3]||(e[3]=n=>F(N)?N.value=n:null)},null,512),[[J,l(N)]])])]),t("div",Ce,[t("div",ke,[$e,t("input",{type:"text",class:"form-control from-control-sm text-end",value:x(l(q)),readonly:""},null,8,Ie)])]),t("div",Se,[t("div",{class:"col-md-6"},[t("button",{type:"button",class:"btn btn-info text-white w-100 mb-3",onClick:U}," ชำระเงินพอดี ")]),t("div",Ne,[t("button",{type:"button",class:"btn btn-success w-100 mb-3",onClick:e[4]||(e[4]=n=>E())}," ชำระเงิน ")])]),Te]),t("div",qe,[t("div",Me,[t("div",Be,[t("button",{type:"button",class:"bg-primary text-white btn-hover",onClick:e[5]||(e[5]=n=>d("7"))}," 7 "),t("button",{type:"button",class:"bg-primary text-white btn-hover",onClick:e[6]||(e[6]=n=>d("8"))}," 8 "),t("button",{type:"button",class:"bg-primary text-white btn-hover",onClick:e[7]||(e[7]=n=>d("9"))}," 9 "),t("button",{type:"button",class:"bg-primary text-white btn-hover",onClick:e[8]||(e[8]=n=>d("4"))}," 4 "),t("button",{type:"button",class:"bg-primary text-white btn-hover",onClick:e[9]||(e[9]=n=>d("5"))}," 5 "),t("button",{type:"button",class:"bg-primary text-white btn-hover",onClick:e[10]||(e[10]=n=>d("6"))}," 6 "),t("button",{type:"button",class:"bg-primary text-white btn-hover",onClick:e[11]||(e[11]=n=>d("1"))}," 1 "),t("button",{type:"button",class:"bg-primary text-white btn-hover",onClick:e[12]||(e[12]=n=>d("2"))}," 2 "),t("button",{type:"button",class:"bg-primary text-white btn-hover",onClick:e[13]||(e[13]=n=>d("3"))}," 3 "),t("button",{type:"button",class:"decimal text-white btn-hover bg-primary",onClick:K}," <= "),t("button",{type:"button",class:"bg-primary text-white btn-hover",onClick:e[14]||(e[14]=n=>d("0"))}," 0 "),t("button",{type:"button",class:"all-clear text-white btn-hover bg-primary",onClick:e[15]||(e[15]=n=>X())}," AC ")])])])])]),t("div",je,[Pe,t("div",Ve,[t("button",{class:"btn btn-success btn-lg",onClick:e[16]||(e[16]=n=>E())}," ชำระเงินแล้ว ")])])])])])]),_:1},8,["total_price"])])])]),t("div",Ae,[t("div",Ee,[Le,t("div",Oe,[t("div",De,[C(ot,{fetchProduct:P,products:l(y),loading:l(c),addToCart:H},null,8,["products","loading"])])])])])])])],64)}}}),ze=pt(Je,[["__scopeId","data-v-e171234a"]]);export{ze as default};

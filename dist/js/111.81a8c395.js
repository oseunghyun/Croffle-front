"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[111],{8111:function(t,e,n){n.r(e),n.d(e,{default:function(){return V}});var o=n(3396),a=n(7139),r=n(9242);const s={id:"report-component"},l={class:"page-title"},c={class:"input__box"},i=(0,o._)("label",null,"수정하고 싶은 정보",-1),u=(0,o._)("option",{value:"cafeInfo"},"카페 정보 정정",-1),d=(0,o._)("option",{value:"menuInfo"},"메뉴 정정",-1),p=(0,o._)("option",{value:"etc"},"기타",-1),h=[u,d,p],f={class:"input__box"},_=(0,o._)("label",null,"정정 내용",-1),b={class:"count"},g=["disabled"];function m(t,e,n,u,d,p){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("header",l,(0,a.zw)(d.header),1),(0,o._)("form",null,[(0,o._)("div",c,[i,(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>d.category=t)},h,512),[[r.bM,d.category]])]),(0,o._)("div",f,[_,(0,o.wy)((0,o._)("textarea",{placeholder:"정정하고 싶은 내용을 입력해주세요.",onInput:e[1]||(e[1]=t=>this.content=t.target.value),rows:"5",maxlength:"100","onUpdate:modelValue":e[2]||(e[2]=t=>d.content=t)},null,544),[[r.nr,d.content]]),(0,o._)("span",b,(0,a.zw)(p.contentLength)+"/100",1)])]),(0,o._)("button",{type:"button",class:(0,a.C_)(["btn--md",p.isValid?"btnPrimary":"btnDisabled"]),disabled:0==p.isValid,onClick:e[3]||(e[3]=(...t)=>p.reportInfo&&p.reportInfo(...t))}," 완료 ",10,g)])}var y=n(6265),v=n.n(y),w={data(){return{header:"카페 정보 수정 제보",category:"cafeInfo",content:""}},computed:{isValid(){return!!this.content},contentLength(){return this.content.length}},methods:{async reportInfo(){try{await v().post("http://34.64.139.239/report/info",{cafeId:this.$route.params.id,category:this.category,content:this.content},{headers:{Authorization:`Bearer ${this.$store.state.token}`}})}catch(t){console.log(t.response.status),console.log(t.response.headers)}finally{this.initForm}},initForm(){this.content=""}}},I=n(89);const k=(0,I.Z)(w,[["render",m]]);var V=k}}]);
//# sourceMappingURL=111.81a8c395.js.map
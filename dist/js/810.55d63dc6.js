"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[810],{8810:function(e,a,n){n.r(a),n.d(a,{default:function(){return F}});var c=n(3396),f=n(7139);const s={class:"owner"},l=(0,c._)("header",{class:"owner__header"},[(0,c._)("h1",null,"매장 관리"),(0,c._)("span",null,"매장 정보를 관리해주세요.")],-1),r={id:"cafe-page"},o={class:"cafe-info"},t={class:"cafe__name"},_={class:"cafe__address"},i={class:"cafe-info__detail"},d={class:"cafe-info__wrapper"},u=(0,c._)("label",null,"전화번호",-1),p={class:"cafe-info__wrapper"},w=(0,c._)("label",null,"운영시간",-1),h={class:"cafe-info__wrapper"},m=(0,c._)("label",null,"SNS",-1),b={class:"cafe-info__wrapper"},g=(0,c._)("label",null,"제공 혜택",-1);function v(e,a,n,v,I,z){return(0,c.wg)(),(0,c.iD)("div",s,[l,(0,c._)("div",r,[(0,c._)("div",o,[(0,c._)("span",t,(0,f.zw)(I.cafeInfo.cafeName),1),(0,c._)("span",_,(0,f.zw)(I.cafeInfo.cafeAddr),1)]),(0,c._)("div",i,[(0,c._)("div",d,[u,(0,c._)("span",null,(0,f.zw)(I.cafeInfo.cafeTelephone),1)]),(0,c._)("div",p,[w,(0,c._)("span",null,(0,f.zw)(I.cafeInfo.cafeHours),1)]),(0,c._)("div",h,[m,(0,c._)("span",null,(0,f.zw)(I.cafeInfo.cafeSite),1)]),(0,c._)("div",b,[g,(0,c._)("span",null,(0,f.zw)(I.cafeInfo.cafeBenefit),1)])])]),(0,c._)("button",{type:"button",onClick:a[0]||(a[0]=(...e)=>z.manageForm&&z.manageForm(...e)),class:"btn--border btn__manage"}," 매장 관리하기 ")])}var I=n(6265),z=n.n(I),k={data(){return{cafeInfo:[]}},created(){this.fetchOwnerCafe()},methods:{manageForm(){this.$router.push("/owner/cafemanage")},async fetchOwnerCafe(){try{console.log("사장님 - 매장 정보 조회");const{data:e}=await z().get("http://34.64.139.239/owner/cafe",{headers:{Authorization:`Bearer ${this.$store.state.token}`}});this.cafeInfo=e.data}catch(e){console.log(e.message)}}}},C=n(89);const y=(0,C.Z)(k,[["render",v]]);var F=y}}]);
//# sourceMappingURL=810.55d63dc6.js.map
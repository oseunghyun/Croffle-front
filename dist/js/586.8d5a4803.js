"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[586],{3376:function(e,n,t){t.d(n,{Uj:function(){return u},yC:function(){return _}});var r=t(6265),a=t.n(r),c=t(5008);function s(e){return e.interceptors.request.use((function(e){return console.log(e),e.headers.Authorization=`Bearer ${(0,c.cd)()}`,e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),e}function o(){return a().create({baseURL:"http://192.168.0.3:8080/"})}function i(){const e=a().create({baseURL:"/api"});return s(e)}o();const u=i();function l(){return a().create({baseURL:"/v1/search",headers:{"X-Naver-Client-Id":"WDBUTDGAh6YGJ6Umihxr","X-Naver-Client-Secret":"Vjn2nII5K3"}})}function f(){const e=a().create({baseURL:"/v4"});return s(e)}function d(){const e=Math.floor(+new Date).toString(),n=a().create({baseURL:"/v3/geolocation/v2",headers:{"x-ncp-apigw-timestamp":e,"x-ncp-iam-access-key":"wnm6dyQfAzJLgs1r8r9I","x-ncp-apigw-signature-v2":"l9RFKQeUe3n09f4cu2m6CWyayyoC0p5jgrPXerDf"}});return n}function p(){const e=a().create({baseURL:"/v2"});return e}const _=l();d(),f(),p()},6370:function(e,n,t){t.d(n,{Yx:function(){return a}});var r=t(3376);function a(e){return r.yC.get(`/local.json?query=${encodeURI(e)}&display=5`)}},3586:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(3396),a=t(9242),c=t(7139);const s={id:"owner-main",class:"verify-header"},o=["src"],i={class:"cafe-view"},u={id:"report-component"},l={class:"input__box"},f=(0,r._)("label",null,"카페명",-1),d={class:"search__box"},p={class:"card__wrapper--column"},_=["onClick"],h={class:"card__addr"};function m(e,n,t,m,v,b){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",s,[(0,r._)("header",null,[(0,r._)("img",{src:v.logo_owner},null,8,o)])]),(0,r._)("div",i,[(0,r._)("div",u,[(0,r._)("form",{onSubmit:n[3]||(n[3]=(0,a.iM)(((...e)=>b.searchCafe&&b.searchCafe(...e)),["prevent"]))},[(0,r._)("div",l,[f,(0,r._)("div",d,[(0,r.wy)((0,r._)("input",{placeholder:"카페명을 입력해주세요.",type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>v.cafeData=e),id:"input__search",onKeypress:n[1]||(n[1]=(0,a.D2)(((...e)=>b.searchCafe&&b.searchCafe(...e)),["enter"]))},null,544),[[a.nr,v.cafeData]]),(0,r._)("button",{type:"button",class:"btn__duplicate btn--primary",id:"btn__search",onClick:n[2]||(n[2]=(...e)=>b.searchCafe&&b.searchCafe(...e))}," 검색 ")])])],32)]),(0,r._)("div",p,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(v.cafes,((e,n)=>((0,r.wg)(),(0,r.iD)("div",{key:n,class:"recommend__card"},[(0,r._)("div",null,[(0,r._)("span",{onClick:e=>b.submitCafeInfo(n),class:"card__name"},(0,c.zw)(e.title),9,_),(0,r._)("span",h,(0,c.zw)(e.roadAddress),1)])])))),128))])])],64)}var v=t(6370),b=t(3574),C={data(){return{cafeData:"",cafes:[],logo_owner:b}},methods:{async searchCafe(){try{const e=await(0,v.Yx)(this.cafeData);this.cafes=e.data.items,this.cafes=this.cafes.map((e=>(e.title=e.title.replaceAll("<b>","").replaceAll("</b>",""),e))),console.log(e.data.items[0])}catch(e){console.log(e)}},submitCafeInfo(e){const n=this.cafes[e];this.$emit("submitCafeInfo",n),this.$router.push("/verify/owner")}}},g=t(89);const w=(0,g.Z)(C,[["render",m]]);var y=w},3574:function(e,n,t){e.exports=t.p+"img/logo_owner.18d68e17.svg"}}]);
//# sourceMappingURL=586.8d5a4803.js.map
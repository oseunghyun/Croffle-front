"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[353],{3376:function(n,e,t){t.d(e,{eE:function(){return i},Uj:function(){return f},yC:function(){return m}});var r=t(6265),o=t.n(r),c=t(5008);function u(n){return n.interceptors.request.use((function(n){return console.log(n),n.headers.Authorization=`Bearer ${(0,c.cd)()}`,n}),(function(n){return Promise.reject(n)})),n.interceptors.response.use((function(n){return n}),(function(n){return Promise.reject(n)})),n}function s(){return o().create({baseURL:"192.168.0.17:8080/"})}function a(){const n=o().create({baseURL:"/api"});return u(n)}const i=s(),f=a();function l(){return o().create({baseURL:"/v1/search",headers:{"X-Naver-Client-Id":"WDBUTDGAh6YGJ6Umihxr","X-Naver-Client-Secret":"Vjn2nII5K3"}})}function p(){const n=o().create({baseURL:"/v4"});return u(n)}function d(){const n=Math.floor(+new Date).toString(),e=o().create({baseURL:"/v3/geolocation/v2",headers:{"x-ncp-apigw-timestamp":n,"x-ncp-iam-access-key":"wnm6dyQfAzJLgs1r8r9I","x-ncp-apigw-signature-v2":"l9RFKQeUe3n09f4cu2m6CWyayyoC0p5jgrPXerDf"}});return e}function _(){const n=o().create({baseURL:"/v2"});return n}const m=l();d(),p(),_()},8762:function(n,e,t){t.d(e,{CF:function(){return i},Gr:function(){return l},P$:function(){return a},R$:function(){return o},X7:function(){return c},aj:function(){return u},qp:function(){return s},th:function(){return f}});var r=t(3376);function o(){return r.Uj.put("/owner/verify")}function c(n,e){return r.Uj.put(`owner/menu/${n}`,e)}function u(){return r.Uj.get("owner/menus")}function s(){return r.Uj.get("owner/cafe")}function a(n,e,t,o,c,u){return r.Uj.put(`owner/cafe/${n}?cafeName=${e}&telephone=${t}&hours=${o}&site=${c}&benefit=${u}`)}function i(){return r.Uj.post("owner/menu")}function f(n,e){return r.Uj.post("owner/stamp",n,e)}function l(n){return r.Uj.post("owner/find-user",n)}},353:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r=t(3396),o=t(7139);const c={class:"owner-stamp"},u=(0,r._)("header",{class:"owner__header"},[(0,r._)("h1",null,"스탬프 찍어주기"),(0,r._)("span",null,"회원 정보가 일치하면 스탬프를 적립해주세요.")],-1),s={class:"owner__card"},a=(0,r._)("span",{class:"owner__card-title"},"고객정보",-1),i=(0,r._)("br",null,null,-1),f={class:"owner__card-text"},l=(0,r.Uk)(" 님"),p={class:"owner__card"},d=(0,r._)("span",{class:"owner__card-title"},"보유 스탬프",-1),_=(0,r._)("br",null,null,-1),m={class:"owner__card-text"},w={class:"count"},h=(0,r.Uk)(" / 10개");function U(n,e,t,U,g,v){return(0,r.wg)(),(0,r.iD)("div",c,[u,(0,r._)("div",s,[a,i,(0,r._)("span",f,[(0,r._)("strong",null,(0,o.zw)(t.stampInfo[0].name),1),l])]),(0,r._)("div",p,[d,_,(0,r._)("span",m,[(0,r._)("strong",w,(0,o.zw)(t.stampInfo[0].stampCnt),1),h])]),(0,r._)("button",{type:"button",onClick:e[0]||(e[0]=(...n)=>v.createStamp&&v.createStamp(...n)),class:"btn--primary"}," 스탬프 적립하기 ")])}var g=t(8762),v={props:{stampInfo:{},cafeId:Number},methods:{async createStamp(){try{console.log("스탬프 적립 완료");const n=await(0,g.th)({cafeId:this.cafeId,userId:this.stampInfo[0].userId});console.log(n)}catch(n){console.log(n.message)}finally{let n="적립이";this.$emit("setMessage",n),this.$router.push("/owner/complete")}}}},b=t(89);const j=(0,b.Z)(v,[["render",U]]);var I=j}}]);
//# sourceMappingURL=353.35d4a04a.js.map
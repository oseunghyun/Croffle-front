"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[827],{6427:function(t,e,n){n.d(e,{SD:function(){return o},dq:function(){return i},fR:function(){return c},qb:function(){return a}});var r=n(3376);function o(t){return r.eE.get(`board/${t}`)}function a(t){return r.Uj.post("board",t)}function c(t){return r.Uj["delete"](`board/${t}`)}function i(t,e){return r.Uj.put(`board/${t}`,e)}},3376:function(t,e,n){n.d(e,{eE:function(){return u},Uj:function(){return l},yC:function(){return b}});var r=n(6265),o=n.n(r),a=n(5008);function c(t){return t.interceptors.request.use((function(t){return console.log(t),t.headers.Authorization=`Bearer ${(0,a.cd)()}`,t}),(function(t){return Promise.reject(t)})),t.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),t}function i(){return o().create({baseURL:"192.168.0.17:8080/"})}function s(){const t=o().create({baseURL:"/api"});return c(t)}const u=i(),l=s();function d(){return o().create({baseURL:"/v1/search",headers:{"X-Naver-Client-Id":"WDBUTDGAh6YGJ6Umihxr","X-Naver-Client-Secret":"Vjn2nII5K3"}})}function f(){const t=o().create({baseURL:"/v4"});return c(t)}function h(){const t=Math.floor(+new Date).toString(),e=o().create({baseURL:"/v3/geolocation/v2",headers:{"x-ncp-apigw-timestamp":t,"x-ncp-iam-access-key":"wnm6dyQfAzJLgs1r8r9I","x-ncp-apigw-signature-v2":"l9RFKQeUe3n09f4cu2m6CWyayyoC0p5jgrPXerDf"}});return e}function p(){const t=o().create({baseURL:"/v2"});return t}const b=d();h(),f(),p()},8827:function(t,e,n){n.r(e),n.d(e,{default:function(){return P}});var r=n(3396),o=n(9242),a=n(7139);const c={class:"community"},i=(0,r._)("header",{class:"page-title"},"커뮤니티",-1),s={class:"input__box"},u=(0,r._)("label",null,"게시글 카테고리",-1),l=(0,r._)("option",{value:"RECIPE"},"레시피 공유 글",-1),d=(0,r._)("option",{value:"FREE"},"자유 글",-1),f=[l,d],h={class:"input__box"},p=(0,r._)("label",null,"게시글 제목",-1),b={class:"count"},g={class:"input__box"},_=(0,r._)("label",null,"게시글 내용",-1),m={class:"count"},y=["disabled"];function v(t,e,n,l,d,v){return(0,r.wg)(),(0,r.iD)("div",c,[i,(0,r._)("form",null,[(0,r._)("div",s,[u,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>d.category=t)},f,512),[[o.bM,d.category]])]),(0,r._)("div",h,[p,(0,r.wy)((0,r._)("input",{placeholder:"게시글 제목을 입력해주세요.","onUpdate:modelValue":e[1]||(e[1]=t=>d.title=t),maxlength:"30"},null,512),[[o.nr,d.title]]),(0,r._)("span",b,(0,a.zw)(v.titleLength)+"/30",1)]),(0,r._)("div",g,[_,(0,r.wy)((0,r._)("textarea",{placeholder:"게시글 내용을 입력해주세요.","onUpdate:modelValue":e[2]||(e[2]=t=>d.content=t),maxlength:"1500"},null,512),[[o.nr,d.content]]),(0,r._)("span",m,(0,a.zw)(v.contentLength)+"/1500",1)])]),(0,r._)("button",{onClick:e[3]||(e[3]=(...t)=>v.editPost&&v.editPost(...t)),type:"button",class:(0,a.C_)(["btn--md",v.isValid?"btnPrimary":"btnDisabled"]),disabled:0==v.isValid}," 게시글 수정 ",10,y)])}var U=n(6427),w={data(){return{title:"",content:"",category:"RECIPE"}},created(){this.fetchPost()},computed:{isValid(){return!(!this.title||!this.content)},titleLength(){return this.title.length},contentLength(){return this.content.length}},methods:{async editPost(){const t=this.$route.params.id;try{console.log("커뮤니티 글 수정"),await(0,U.dq)(t,{title:this.title,content:this.content,boardCategory:this.boardCategory})}catch(e){console.log(e.message)}},async fetchPost(){const{data:t}=await(0,U.SD)(this.$route.params.id);this.title=t.title,this.content=t.content}}},C=n(89);const L=(0,C.Z)(w,[["render",v]]);var P=L}}]);
//# sourceMappingURL=827.c30ead1c.js.map
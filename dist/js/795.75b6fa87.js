"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[795],{6427:function(t,n,e){e.d(n,{SD:function(){return r},T6:function(){return l},dq:function(){return u},fR:function(){return c},qb:function(){return a}});var o=e(3376);function l(){return o.eE.get("boards")}function r(t){return o.eE.get(`board/${t}`)}function a(t){return o.Uj.post("board",t)}function c(t){return o.Uj["delete"](`board/${t}`)}function u(t,n){return o.Uj.put(`board/${t}`,n)}},5795:function(t,n,e){e.r(n),e.d(n,{default:function(){return P}});var o=e(3396),l=e(9242),r=e(7139);const a={class:"community"},c=(0,o._)("header",{class:"page-title"},"커뮤니티",-1),u={class:"input__box"},i=(0,o._)("label",null,"게시글 카테고리",-1),s=(0,o._)("option",{value:"RECIPE"},"레시피 글",-1),d=(0,o._)("option",{value:"FREE"},"자유 글",-1),b=[s,d],f={class:"input__box"},h=(0,o._)("label",null,"게시글 제목",-1),_={class:"count"},p={class:"input__box"},g=(0,o._)("label",null,"게시글 내용",-1),m={class:"count"},y=["disabled"];function v(t,n,e,s,d,v){return(0,o.wg)(),(0,o.iD)("div",a,[c,(0,o._)("form",null,[(0,o._)("div",u,[i,(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":n[0]||(n[0]=t=>d.category=t)},b,512),[[l.bM,d.category]])]),(0,o._)("div",f,[h,(0,o.wy)((0,o._)("input",{placeholder:"게시글 제목을 입력해주세요.","onUpdate:modelValue":n[1]||(n[1]=t=>d.title=t),maxlength:"30"},null,512),[[l.nr,d.title]]),(0,o._)("span",_,(0,r.zw)(v.titleLength)+"/30",1)]),(0,o._)("div",p,[g,(0,o.wy)((0,o._)("textarea",{placeholder:"게시글 내용을 입력해주세요.","onUpdate:modelValue":n[2]||(n[2]=t=>d.content=t),maxlength:"1500"},null,512),[[l.nr,d.content]]),(0,o._)("span",m,(0,r.zw)(v.contentLength)+"/1500",1)])]),(0,o._)("button",{onClick:n[3]||(n[3]=(...t)=>v.createPost&&v.createPost(...t)),type:"button",class:(0,r.C_)(["btn--md",v.isValid?"btnPrimary":"btnDisabled"]),disabled:0==v.isValid}," 게시글 작성 완료 ",10,y)])}var w=e(6427),E={data(){return{title:"",content:"",category:"RECIPE"}},computed:{isValid(){return!(!this.title||!this.content)},titleLength(){return this.title.length},contentLength(){return this.content.length}},methods:{async createPost(){try{console.log("폼 제출");const t=await(0,w.qb)({title:this.title,content:this.content,boardCategory:this.category});console.log(t),this.$router.push("/community")}catch(t){console.log(t.message)}}}},C=e(89);const x=(0,C.Z)(E,[["render",v]]);var P=x}}]);
//# sourceMappingURL=795.75b6fa87.js.map
"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[585],{9585:function(t,e,n){n.r(e),n.d(e,{default:function(){return E}});var l=n(3396),a=n(9242),o=n(7139);const s={class:"community"},i=(0,l._)("header",{class:"page-title"},"커뮤니티",-1),r={class:"input__box"},c=(0,l._)("label",null,"게시글 카테고리",-1),d=(0,l._)("option",{value:"RECIPE"},"레시피 공유 글",-1),u=(0,l._)("option",{value:"FREE"},"자유 글",-1),h=[d,u],p={class:"input__box"},_=(0,l._)("label",null,"게시글 제목",-1),b={class:"count"},f={class:"input__box"},g=(0,l._)("label",null,"게시글 내용",-1),m={class:"count"},y=["disabled"];function w(t,e,n,d,u,w){return(0,l.wg)(),(0,l.iD)("div",s,[i,(0,l._)("form",null,[(0,l._)("div",r,[c,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>u.category=t)},h,512),[[a.bM,u.category]])]),(0,l._)("div",p,[_,(0,l.wy)((0,l._)("input",{placeholder:"게시글 제목을 입력해주세요.","onUpdate:modelValue":e[1]||(e[1]=t=>u.title=t),maxlength:"30"},null,512),[[a.nr,u.title]]),(0,l._)("span",b,(0,o.zw)(w.titleLength)+"/30",1)]),(0,l._)("div",f,[g,(0,l.wy)((0,l._)("textarea",{placeholder:"게시글 내용을 입력해주세요.","onUpdate:modelValue":e[2]||(e[2]=t=>u.content=t),maxlength:"1500"},null,512),[[a.nr,u.content]]),(0,l._)("span",m,(0,o.zw)(w.contentLength)+"/1500",1)])]),(0,l._)("button",{onClick:e[3]||(e[3]=(...t)=>w.editPost&&w.editPost(...t)),type:"button",class:(0,o.C_)(["btn--md",w.isValid?"btnPrimary":"btnDisabled"]),disabled:0==w.isValid}," 게시글 수정 ",10,y)])}var v=n(6265),P=n.n(v),k={data(){return{title:"",content:"",category:"RECIPE"}},created(){this.fetchPost()},computed:{isValid(){return!(!this.title||!this.content)},titleLength(){return this.title.length},contentLength(){return this.content.length}},methods:{async editPost(){await P().post.put(`http://34.64.139.239/board/${this.$route.params.id}`,{headers:{Authorization:`Bearer ${this.$store.state.token}`}})},async fetchPost(){const{data:t}=await P().get(`http://34.64.139.239/board/${this.$route.params.id}`);console.log("커뮤니티 특정 게시글 조회",t),this.title=t.title,this.content=t.content}}},x=n(89);const C=(0,x.Z)(k,[["render",w]]);var E=C}}]);
//# sourceMappingURL=585.8dec05cc.js.map
"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[7],{6427:function(t,e,n){n.d(e,{SD:function(){return r},T6:function(){return a},dq:function(){return i},fR:function(){return c},qb:function(){return s}});var o=n(3376);function a(){return o.eE.get("boards")}function r(t){return o.eE.get(`board/${t}`)}function s(t){return o.Uj.post("board",t)}function c(t){return o.Uj["delete"](`board/${t}`)}function i(t,e){return o.Uj.put(`board/${t}`,e)}},2007:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var o=n(3396),a=n(7139);const r={class:"community"},s=(0,o._)("header",{class:"page-title"},"커뮤니티",-1),c=(0,o._)("p",{class:"guide"},"크로플 원정대와 공유하고 싶은 내용이 있나요?",-1),i={class:"card__wrapper--column"},u={class:"card__text"},d={class:"card__category"},l={class:"card__nick_name"},f={class:"card__create_date"};function _(t,e,n,_,p,m){return(0,o.wg)(),(0,o.iD)("div",r,[s,c,(0,o._)("div",i,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(p.postItems,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.id,class:"community__card"},[(0,o._)("span",{onClick:e[0]||(e[0]=(...t)=>m.toDetailPage&&m.toDetailPage(...t)),class:"card__title"},(0,a.zw)(t.title),1),(0,o._)("div",u,[(0,o._)("span",d," ["+(0,a.zw)(t.boardCategory)+"] ",1),(0,o._)("div",null,[(0,o._)("span",l,(0,a.zw)(t.user_nickname)+"  ",1),(0,o._)("span",f,(0,a.zw)(m.formatDate(t.modifiedDate)),1)])])])))),128))]),(0,o._)("button",{onClick:e[1]||(e[1]=(...t)=>m.toPostPage&&m.toPostPage(...t)),type:"button",class:"btn--border"}," 게시글 작성 + ")])}var p=n(6427),m={data(){return{postItems:[]}},computed:{formatDate(t){return t.split("T")[0]}},created(){this.fetchPosts()},methods:{toPostPage(){this.$router.push("/community/post")},toDetailPage(){this.$router.push(`/community/detail/${this.$route.params.id}`)},async fetchPosts(){try{console.log("게시글 정보 조회");const{data:t}=await(0,p.T6)();this.postItems=t.data,console.log(this.postItems)}catch(t){console.log(t.message)}}}},g=n(89);const h=(0,g.Z)(m,[["render",_]]);var b=h}}]);
//# sourceMappingURL=7.47333a68.js.map
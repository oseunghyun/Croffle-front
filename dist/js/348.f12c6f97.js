"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[348],{3376:function(t,e,a){a.d(e,{eE:function(){return l},Uj:function(){return u},yC:function(){return _}});var n=a(6265),o=a.n(n),s=a(5008);function c(t){return t.interceptors.request.use((function(t){return console.log(t),t.headers.Authorization=`Bearer ${(0,s.cd)()}`,t}),(function(t){return Promise.reject(t)})),t.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),t}function i(){return o().create({baseURL:"192.168.0.17:8080/"})}function r(){const t=o().create({baseURL:"/api"});return c(t)}const l=i(),u=r();function p(){return o().create({baseURL:"/v1/search",headers:{"X-Naver-Client-Id":"WDBUTDGAh6YGJ6Umihxr","X-Naver-Client-Secret":"Vjn2nII5K3"}})}function d(){const t=o().create({baseURL:"/v4"});return c(t)}function m(){const t=Math.floor(+new Date).toString(),e=o().create({baseURL:"/v3/geolocation/v2",headers:{"x-ncp-apigw-timestamp":t,"x-ncp-iam-access-key":"wnm6dyQfAzJLgs1r8r9I","x-ncp-apigw-signature-v2":"l9RFKQeUe3n09f4cu2m6CWyayyoC0p5jgrPXerDf"}});return e}function f(){const t=o().create({baseURL:"/v2"});return t}const _=p();m(),d(),f()},5140:function(t,e,a){a.d(e,{AF:function(){return o},AJ:function(){return c},Xp:function(){return s}});var n=a(3376);function o(t){return n.Uj.post("like",t)}function s(t){return n.Uj.post("like/del",t)}function c(){return n.Uj.get("likes")}},1955:function(t,e,a){a.d(e,{$F:function(){return i},Bg:function(){return o},GR:function(){return l},VN:function(){return r},ci:function(){return c},l_:function(){return s}});var n=a(3376);function o(){return n.Uj.get("user/me")}function s(t){return n.Uj.put("nickname",t)}function c(t){return n.Uj.post("nickname/verify",t)}function i(){return n.Uj.get("stamps")}function r(){return n.Uj.get("coupons")}function l(t){return n.Uj["delete"](`coupon/use?couponId=${t}`)}},1142:function(t,e,a){a.d(e,{Z:function(){return p}});var n=a(3396);const o={class:"modal"},s=(0,n._)("div",{class:"overlay"},null,-1),c={class:"modal-card"};function i(t,e,a,i,r,l){return(0,n.wg)(),(0,n.iD)("div",o,[s,(0,n._)("div",c,[(0,n.WI)(t.$slots,"default")])])}var r={props:{couponData:[]}},l=a(89);const u=(0,l.Z)(r,[["render",i]]);var p=u},6944:function(t,e,a){a.r(e),a.d(e,{default:function(){return nt}});var n=a(3396);function o(t,e,a,o,s,c){const i=(0,n.up)("router-view"),r=(0,n.up)("scraped-list-component"),l=(0,n.up)("coupon-list-component"),u=(0,n.up)("coupon-modal-content"),p=(0,n.up)("modal-component");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(i,{onShowList:c.showList,activeList:s.activeList,onSetMessage:c.setMessage,message:s.message},null,8,["onShowList","activeList","onSetMessage","message"]),1==s.activeList?((0,n.wg)(),(0,n.j4)(r,{key:0})):2==s.activeList?((0,n.wg)(),(0,n.j4)(l,{key:1,onModalActive:c.modalActive,isModalActive:s.isModalActive},null,8,["onModalActive","isModalActive"])):(0,n.kq)("",!0),s.isModalActive?((0,n.wg)(),(0,n.j4)(p,{key:2,couponData:s.couponData},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{onCloseModal:e[0]||(e[0]=t=>s.isModalActive=!1),couponData:s.couponData},null,8,["couponData"])])),_:1},8,["couponData"])):(0,n.kq)("",!0)])}var s=a(7139);const c={class:"mypage-scrap"},i=(0,n._)("h1",null,"예정된 원정",-1),r={class:"card__wrapper--column"},l=["onClick"],u={class:"card__title"},p={class:"card__text"};function d(t,e,a,o,d,m){return(0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("header",null,[i,(0,n._)("span",null,(0,s.zw)(d.scrapList.length),1)]),(0,n._)("div",r,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(d.scrapList,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:"card",onClick:t=>m.toCafeDetail(e)},[(0,n._)("span",u,(0,s.zw)(t.name),1),(0,n._)("span",p,(0,s.zw)(t.addr),1)],8,l)))),128))])])}var m=a(5140),f={created(){this.fetchScrapList()},data(){return{scrapList:[{id:0,name:"밀크북",addr:"서울특별시 성북구 "}]}},methods:{async fetchScrapList(){try{console.log("마이페이지 - 내가 스크랩 한 리스트 조회");const{data:t}=await(0,m.AJ)();this.scrapList=t.data,console.log(this.scrapLists)}catch(t){console.log(t.message)}},toCafeDetail(t){this.$router.push(`/cafe/${this.scrapList[t].id}`)}}},_=a(89);const g=(0,_.Z)(f,[["render",d]]);var v=g;const h={class:"mypage-membership"},w={class:"mypage-stamp"},D=(0,n._)("h1",null,"내가 모은 스탬프",-1),y={class:"card__wrapper--column"},C={class:"card__title"},b={class:"stamp-list"},k={class:"stamp-list"},L={class:"mypage-coupon"},A=(0,n._)("h1",null,"내가 모은 쿠폰",-1),U={class:"card__wrapper--column"},x=["onClick"],j={class:"card__title"},M={class:"card__text"},I={class:"card__text"};function z(t,e,a,o,c,i){return(0,n.wg)(),(0,n.iD)("div",h,[(0,n._)("div",w,[(0,n._)("header",null,[D,(0,n._)("span",null,(0,s.zw)(c.stampData.length),1)]),(0,n._)("div",y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(c.stampData,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:"card"},[(0,n._)("span",C,(0,s.zw)(t.cafeName),1),(0,n._)("div",b,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(10,(t=>(0,n._)("i",{key:t,class:"fas fa-stroopwafel fa-3x"}))),64))]),(0,n._)("div",k,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(c.stampData[e].stampCount,(t=>((0,n.wg)(),(0,n.iD)("i",{key:t,class:"fas fa-stroopwafel fa-3x stampActive"})))),128))])])))),128))])]),(0,n._)("div",L,[(0,n._)("header",null,[A,(0,n._)("span",null,(0,s.zw)(c.couponData.length),1)]),(0,n._)("div",U,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(c.couponData,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:"card",onClick:t=>i.modalActive(e)},[(0,n._)("span",j,(0,s.zw)(t.cafeName),1),(0,n._)("span",M,(0,s.zw)(t.benefit),1),(0,n._)("span",I,(0,s.zw)(t.expiredDate),1)],8,x)))),128))])])])}var $=a(1955),N={data(){return{coupons:{cafeName:"엔드테라스",benefit:"아메리카노(HOT/ICE) 1잔 무료",expiredDate:"2022-04-11 ~ 2022-05-11",couponId:0},stampData:[{cafeName:"엔드테라스",stampCount:3},{cafeName:"엔드테라스",stampCount:2}],couponData:[{cafeId:1,cafeName:"엔드테라스",benefit:"아메리카노(HOT/ICE) 1잔 무료",expiredDate:"2022-04-11 ~ 2022-05-11"},{cafeId:2,cafeName:"메가 커피",benefit:"아메리카노(HOT/ICE) 1잔 무료",expiredDate:"2022-04-11 ~ 2022-05-11"}]}},created(){this.fetchStamps(),this.fetchCoupons()},methods:{modalActive(t){let e=!0,a=this.couponData[t];this.$emit("modalActive",e,a)},async fetchStamps(){try{console.log("스탬프 조회");const{stampData:t}=await(0,$.$F)();this.stampData=t.body.stamps,console.log(this.stampData)}catch(t){console.log(t.message)}},async fetchCoupons(){try{console.log("쿠폰 조회");const{data:t}=await(0,$.VN)();this.couponData=t.data,console.log(this.couponData)}catch(t){console.log(t.message)}}}};const S=(0,_.Z)(N,[["render",z]]);var R=S,H=a(1142),K=a(9242);const V={class:"content-mypage"},Z={class:"btn__close"},Y=["src"],W={class:"content__wrapper"},E={class:"content__wrapper--text"},F=["src"],G={class:"card__title"},J={class:"card__text--benefit"},O={class:"card__text--expire"},P=["disabled"];function T(t,e,a,o,c,i){return(0,n.wg)(),(0,n.iD)("div",V,[(0,n._)("div",Z,[(0,n._)("button",{type:"button",class:"btn--transparent",onClick:e[0]||(e[0]=e=>t.$emit("close-modal"))},[(0,n._)("img",{src:c.ic__close},null,8,Y)])]),(0,n._)("div",W,[(0,n._)("div",E,[(0,n._)("img",{src:c.ic__ticket},null,8,F),(0,n._)("span",G,(0,s.zw)(a.couponData.cafeName),1),(0,n._)("span",J,(0,s.zw)(a.couponData.benefit),1),(0,n._)("span",O,(0,s.zw)(a.couponData.expiredDate),1)]),(0,n.wy)((0,n._)("input",{placeholder:"사장님 아이디를 입력하세요.","onUpdate:modelValue":e[1]||(e[1]=t=>c.ownerId=t)},null,512),[[K.nr,c.ownerId]]),(0,n._)("button",{type:"button",class:(0,s.C_)(["btn--md",i.isValid?"btnPrimary":"btnDisabled"]),disabled:0==i.isValid,onClick:e[2]||(e[2]=(...t)=>i.useCoupon&&i.useCoupon(...t))}," 사용하기 ",10,P)])])}var X=a(8391),q=a.p+"img/ticket.6fcdceec.svg",B={name:"ModalContent",props:{msg:String,couponData:Object},created(){console.log("쿠폰 데이터",this.couponData)},data(){return{ic__close:X,ic__ticket:q,ownerId:""}},computed:{isValid(){return""!=this.ownerId}},methods:{addReport(){this.$emit("close-modal")},modifyReport(){this.$emit("close-modal")},async useCoupon(){try{console.log("쿠폰 사용");const{data:t}=await(0,$.GR)(this.couponData.cafeId);console.log(t.message),this.$emit("close-modal")}catch(t){console.log(t.message),this.$emit("close-modal")}}}};const Q=(0,_.Z)(B,[["render",T]]);var tt=Q,et={components:{ScrapedListComponent:v,CouponListComponent:R,ModalComponent:H.Z,CouponModalContent:tt},data(){return{message:"",activeList:1,isModalActive:!1,couponData:[]}},methods:{setMessage(t){this.message=t},showList(t){this.activeList=t},modalActive(t,e){this.isModalActive=t,this.couponData=e}},created(){let t=!1;this.$store.commit("isHeaderActive",t)}};const at=(0,_.Z)(et,[["render",o]]);var nt=at},8391:function(t,e,a){t.exports=a.p+"img/close.a59852f9.svg"}}]);
//# sourceMappingURL=348.f12c6f97.js.map
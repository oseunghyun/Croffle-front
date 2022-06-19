"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[116],{2541:function(e,n,a){a.r(n),a.d(n,{default:function(){return G}});var t=a(3396),s=a(7139);const o={key:0,class:"search"},i={key:1},r=["src"],c={key:0,class:"infoWindow"},l={class:"map__wrapper"},d=(0,t._)("p",{class:"guide",id:"guide"},[(0,t.Uk)(" 원정대에게 알려주고 싶은 카페가 있나요?"),(0,t._)("br"),(0,t.Uk)(" 카페를 찾아 크로플 원정대에 제보해주세요! ")],-1);function p(e,n,a,p,f,u){const m=(0,t.up)("searchbar-component"),h=(0,t.up)("not-registered-cafe"),g=(0,t.up)("cafe-list-component"),w=(0,t.up)("naver-marker"),v=(0,t.up)("naver-info-window"),_=(0,t.up)("naver-maps");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(m,{onShowResult:u.showResult,onFetchInfo:u.fetchInfo,onFetchResult:u.fetchResult,service:f.service,registered:f.registered},null,8,["onShowResult","onFetchInfo","onFetchResult","service","registered"]),0==f.service?((0,t.wg)(),(0,t.iD)("div",o,[0==f.registered?((0,t.wg)(),(0,t.j4)(h,{key:0,onClosePage:n[0]||(n[0]=e=>f.service=!0)})):(0,t.kq)("",!0),1==f.registered?((0,t.wg)(),(0,t.j4)(g,{key:1,onClosePage:n[1]||(n[1]=e=>f.service=!0)})):(0,t.kq)("",!0)])):(0,t.kq)("",!0),1==f.service?((0,t.wg)(),(0,t.iD)("div",i,[(0,t.Wm)(_,{width:"100%",height:"100vh",class:"main-container--map",onOnLoad:n[4]||(n[4]=n=>e.onLoadMap(f.cafes))},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(f.cafes,((a,o)=>((0,t.wg)(),(0,t.j4)(w,{key:o,latitude:a.mapy,longitude:a.mapx,onOnLoad:n[2]||(n[2]=n=>e.onLoadMarker(n)),onClick:e=>u.openInfo(o)},{default:(0,t.w5)((()=>[(0,t._)("img",{src:f.ic__marker},null,8,r),f.isWindowOpen?((0,t.wg)(),(0,t.iD)("div",c,(0,s.zw)(a[o].id),1)):(0,t.kq)("",!0)])),_:2},1032,["latitude","longitude","onClick"])))),128)),(0,t.Wm)(v,{marker:e.marker,isOpen:e.isOpen,onOnLoad:n[3]||(n[3]=n=>e.onLoadInfoWindow(e.event))},null,8,["marker","isOpen"])])),_:1}),(0,t._)("div",l,[d,(0,t._)("button",{type:"button",onClick:n[5]||(n[5]=(...e)=>u.toCafeReport&&u.toCafeReport(...e)),class:"btn--primary",id:"btn-report"}," 제보하기 + ")])])):(0,t.kq)("",!0)])}var f=a.p+"img/speechBubble.a260e7b2.svg",u=a.p+"img/marker.22f42703.svg",m=a(6265),h=a.n(m);const g={id:"not-regi-cafe",class:"container"},w=(0,t._)("i",{class:"fas fa-arrow-left fa-2x"},null,-1),v=[w],_=(0,t._)("p",null,[(0,t.Uk)(" 아직 등록되지 않은 카페네요."),(0,t._)("br"),(0,t.Uk)(" 조금만 기다려 주세요! ")],-1);function k(e,n,a,s,o,i){return(0,t.wg)(),(0,t.iD)("div",g,[(0,t._)("button",{onClick:n[0]||(n[0]=n=>e.$emit("close-page"))},v),_])}var b={},C=a(89);const y=(0,C.Z)(b,[["render",k]]);var L=y;const R={id:"cafe-list",class:"container"},I={class:"card__wrapper--column"},O={class:"text__name"},$={class:"text__addr"},D=(0,t._)("i",{class:"far fa-times-circle fa-2x"},null,-1),W=[D];function x(e,n,a,o,i,r){return(0,t.wg)(),(0,t.iD)("div",R,[(0,t._)("div",I,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.cafeList,(e=>((0,t.wg)(),(0,t.iD)("div",{key:e.id,class:"cafe__card"},[(0,t._)("span",O,(0,s.zw)(e.name),1),(0,t._)("span",$,(0,s.zw)(e.addr),1)])))),128))]),(0,t._)("button",{onClick:n[0]||(n[0]=n=>e.$emit("close-page"))},W)])}var H={data(){return{}},props:{cafeList:[{name:"카페 이름1",addr:"주소1"},{name:"카페 이름2",addr:"주소2"}]}};const M=(0,C.Z)(H,[["render",x]]);var S=M,q=a(9242);const F={id:"searchbar"},U={class:"input__box"},Z=["src"];function j(e,n,a,s,o,i){return(0,t.wg)(),(0,t.iD)("div",F,[(0,t._)("div",U,[(0,t.wy)((0,t._)("input",{placeholder:"크로플 원정을 떠날 카페를 검색해주세요.","onUpdate:modelValue":n[0]||(n[0]=e=>o.name=e)},null,512),[[q.nr,o.name]]),(0,t._)("button",{type:"button",onClick:n[1]||(n[1]=(...e)=>i.searchCafe&&i.searchCafe(...e))},[(0,t._)("img",{src:o.ic_magnifier},null,8,Z)])])])}var K=a.p+"img/position.c2587f93.svg",N=a.p+"img/magnifier.ba2bdae4.svg",z={data(){return{ic_position:K,ic_magnifier:N,address:"서울특별시 성북구",name:"",cafeInfo:[]}},methods:{async searchCafe(){const e=!1;this.$emit("showResult",e);try{const{cafeData:e}=await h().get(`http://34.64.139.239/cafe/search?name=${this.name}`);if("4040"==e.code){const e=!1;this.$emit("fetchResult",e)}else{const n=!1;this.$emit("fetchResult",n,e)}}catch(n){console.log(n)}}}};const A=(0,C.Z)(z,[["render",j]]);var B=A,P=a(4870),T=a(8960),Y=a(5008),V={components:{SearchbarComponent:B,NaverMaps:T.K0,NaverMarker:T.At,NaverInfoWindow:T._T,NotRegisteredCafe:L,CafeListComponent:S},setup:()=>{const e=(0,P.iH)(),n=(0,P.iH)(),a=(0,P.iH)(),t=(0,P.iH)(!1),s=e=>{a.value=e},o=e=>{n.value=e},i=e=>{console.log("cafes",e),e=e.map((e=>(window.naver.maps.Service.geocode({address:e.addr},(function(n,a){if(n!==window.naver.maps.Service.Status.OK)return alert("Something wrong!");var t=a.result;console.log("도로명 주소->좌표 반환결과",t.items[0].point),e.mapx=parseFloat(t.items[0].point.x),e.mapy=parseFloat(t.items[0].point.y)})),console.log("카페 도로명 주소",e),e)))};return{onLoadMarker:o,map:e,marker:n,onLoadMap:i,isOpen:t,onLoadInfoWindow:s}},mounted(){this.fetchCafes();const e=this.$route.query.token;console.log("token",e),this.$store.commit("setToken",e),(0,Y.aZ)(e)},async created(){let e=!0;this.$store.commit("isHeaderActive",e)},data(){return{registered:!1,ic__speechBubble:f,ic__marker:u,page:"main",clientIp:"",clientAddr:"",service:!0,email:"",cafeList:[],cafes:[],isWindowOpen:!1}},methods:{fetchInfo(e){this.cafeInfo=e},fetchResult(e,n){this.registered=e,this.cafeList=n},showResult(e){this.service=e},toCafeReport(){this.$router.push("/cafes/report")},async fetchCafes(){try{const{data:e}=await h().get("http://34.64.139.239/cafes");console.log("카페 로그 찍기",e),this.cafes=e.data}catch(e){console.log(e)}},openInfo(e){this.$router.push(`/cafe/${e}`),console.log(e),this.isWindowOpen},openInfoWindow(e){console.log("jh cafe",this.marker,e),this.marker=new window.naver.maps.Marker({position:new window.naver.maps.LatLng(e.mapy,e.mapx),map:window.naver.maps}),this.isOpen=!this.isOpen}}};const E=(0,C.Z)(V,[["render",p]]);var G=E}}]);
//# sourceMappingURL=116.fcd714cd.js.map
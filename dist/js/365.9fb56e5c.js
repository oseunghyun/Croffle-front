"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[365],{3376:function(e,n,t){t.d(n,{eE:function(){return s},Uj:function(){return l},yC:function(){return h}});var r=t(6265),u=t.n(r),c=t(5008);function o(e){return e.interceptors.request.use((function(e){return console.log(e),e.headers.Authorization=`Bearer ${(0,c.cd)()}`,e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),e}function i(){return u().create({baseURL:"192.168.0.17:8080/"})}function a(){const e=u().create({baseURL:"/api"});return o(e)}const s=i(),l=a();function f(){return u().create({baseURL:"/v1/search",headers:{"X-Naver-Client-Id":"WDBUTDGAh6YGJ6Umihxr","X-Naver-Client-Secret":"Vjn2nII5K3"}})}function p(){const e=u().create({baseURL:"/v4"});return o(e)}function m(){const e=Math.floor(+new Date).toString(),n=u().create({baseURL:"/v3/geolocation/v2",headers:{"x-ncp-apigw-timestamp":e,"x-ncp-iam-access-key":"wnm6dyQfAzJLgs1r8r9I","x-ncp-apigw-signature-v2":"l9RFKQeUe3n09f4cu2m6CWyayyoC0p5jgrPXerDf"}});return n}function d(){const e=u().create({baseURL:"/v2"});return e}const h=f();m(),p(),d()},8762:function(e,n,t){t.d(n,{CF:function(){return s},Gr:function(){return f},P$:function(){return a},R$:function(){return u},X7:function(){return c},aj:function(){return o},qp:function(){return i},th:function(){return l}});var r=t(3376);function u(){return r.Uj.put("/owner/verify")}function c(e,n){return r.Uj.put(`owner/menu/${e}`,n)}function o(){return r.Uj.get("owner/menus")}function i(){return r.Uj.get("owner/cafe")}function a(e,n,t,u,c,o){return r.Uj.put(`owner/cafe/${e}?cafeName=${n}&telephone=${t}&hours=${u}&site=${c}&benefit=${o}`)}function s(){return r.Uj.post("owner/menu")}function l(e,n){return r.Uj.post("owner/stamp",e,n)}function f(e){return r.Uj.post("owner/find-user",e)}},7365:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var r=t(3396),u=t(9242),c=t(7139);const o={class:"owner-form"},i=(0,r._)("header",{class:"page-title"},"메뉴 추가하기",-1),a={class:"input__box"},s=(0,r._)("label",{for:"menu"},"메뉴명",-1),l={class:"count"},f={class:"input__box"},p=(0,r._)("label",{for:"price"},[(0,r.Uk)("가격 "),(0,r._)("span",{class:"won"},"원")],-1),m={class:"count"},d=["disabled"];function h(e,n,t,h,_,g){return(0,r.wg)(),(0,r.iD)("div",o,[i,(0,r._)("form",null,[(0,r._)("div",a,[s,(0,r.wy)((0,r._)("input",{id:"menu","onUpdate:modelValue":n[0]||(n[0]=n=>e.menu_name=n),placeholder:"메뉴명을 입력해주세요.",onInput:n[1]||(n[1]=e=>this.menu_name=e.target.value),maxlength:"40"},null,544),[[u.nr,e.menu_name]]),(0,r._)("span",l,(0,c.zw)(g.menuLength)+"/40",1)]),(0,r._)("div",f,[p,(0,r.wy)((0,r._)("input",{id:"price","onUpdate:modelValue":n[2]||(n[2]=n=>e.menu_price=n),placeholder:"가격을 입력해주세요.",maxlength:"20",oninput:"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1')"},null,512),[[u.nr,e.menu_price]]),(0,r._)("span",m,(0,c.zw)(g.priceLength)+"/20",1)])]),(0,r._)("button",{type:"button",onClick:n[3]||(n[3]=(...e)=>g.createOwnerMenu&&g.createOwnerMenu(...e)),class:(0,c.C_)(["btn--md",g.isValid?"btnPrimary":"btnDisabled"]),disabled:0==g.isValid}," 완료 ",10,d)])}var _=t(8762),g={props:{cafeId:Number},data:function(){return{menu_name:"",menu_price:""}},computed:{menuLength(){return this.menu_name.length},priceLength(){return this.menu_price.length},isValid(){return!(!this.menu_name||!this.menu_price)}},methods:{async createOwnerMenu(){try{console.log("사장님 - 메뉴 추가 폼 제출"),await(0,_.CF)({cafeId:this.cafeId,name:this.menu_name,price:this.menu_price})}catch(e){console.log(e.message)}finally{let e="추가가";this.$emit("setMessage",e),this.$router.push("/owner/complete")}}}},w=t(89);const b=(0,w.Z)(g,[["render",h]]);var U=b}}]);
//# sourceMappingURL=365.9fb56e5c.js.map
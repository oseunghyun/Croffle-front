"use strict";(self["webpackChunkcroffle_frontend"]=self["webpackChunkcroffle_frontend"]||[]).push([[182],{182:function(e,a,n){n.r(a),n.d(a,{default:function(){return _}});var s=n(3396),t=n(9242),i=n(7139);const r={class:"mypage-nickname"},o=(0,s._)("header",null,[(0,s._)("h1",null,"닉네임 수정"),(0,s._)("span",null,"1~10자의 한글, 영어, 숫자를 혼용하여 입력할 수 있습니다.")],-1),c={class:"input__box"},l=(0,s._)("label",{for:"nickname"},"닉네임",-1),m=["disabled"],d={class:"count"},u=["disabled"];function h(e,a,n,h,k,b){return(0,s.wg)(),(0,s.iD)("div",r,[o,(0,s._)("form",null,[(0,s._)("div",c,[l,(0,s.wy)((0,s._)("input",{id:"nickname","onUpdate:modelValue":a[0]||(a[0]=e=>k.nickname=e),placeholder:"닉네임을 입력해주세요.",maxlength:"10",onInput:a[1]||(a[1]=e=>this.nickname=e.target.value)},null,544),[[t.nr,k.nickname]]),(0,s._)("button",{type:"button",onClick:a[2]||(a[2]=(...e)=>b.verifyNickname&&b.verifyNickname(...e)),class:(0,i.C_)(["btn__duplicate",this.nickname?"btnPrimary":"btnDisabled"]),disabled:!this.nickname}," 중복 확인 ",10,m),(0,s._)("span",d,(0,i.zw)(b.nicknameLength)+"/10",1),(0,s._)("span",{class:(0,i.C_)(["error-message",["verifyMessage",k.isValid?"passMessage":"verifyMessage"]])},(0,i.zw)(k.errorMessage),3)])]),(0,s._)("button",{type:"button",onClick:a[3]||(a[3]=(...e)=>b.submitForm&&b.submitForm(...e)),class:(0,i.C_)(["btn--md",k.isValid?"btnPrimary":"btnDisabled"]),disabled:0==k.isValid}," 닉네임 수정하기 ",10,u)])}var k=n(6265),b=n.n(k),g={data(){return{errorMessage:"",nickname:"",isValid:!1}},computed:{nicknameLength(){return this.nickname.length}},methods:{async submitForm(){try{console.log("닉네임 수정 폼 제출");const{postData:e}=await b().put("http://34.64.139.239/board/nickname",{nickname:this.nickname},{headers:{Authorization:`Bearer ${this.$store.state.token}`}});console.log(e);let a="수정이";this.$emit("setMessage",a),this.$router.push("/mypage/nicknamecomplete")}catch(e){console.log(e.message)}},async verifyNickname(){try{const{data:e}=await b().post("http://34.64.139.239/board/nickname/verify}",{headers:{Authorization:`Bearer ${this.$store.state.token}`}});this.errorMessage=e.messages,this.isValidated=!0}catch(e){console.log(e.message),this.errorMessage=e.message,this.isValidated=!1}}}},p=n(89);const f=(0,p.Z)(g,[["render",h]]);var _=f}}]);
//# sourceMappingURL=182.eb55e10a.js.map
<template>
  <div id="main-container">
    <div id="landing-container">
      <img :src="main_logo" class="main__logo" />
      <div class="btn__wrapper">
        <button type="button" class="btn--primary" @click="toMain">
          로그인 없이 크로플 원정 떠나기
        </button>
        <button type="button" class="btn--naver" @click="tologin">
          <img :src="logo_naver" />네이버 로그인
        </button>
        <div id="naver_id_login" @click="tologin"></div>
      </div>
      <!-- <div class="link__wrapper">
        <span>크로플 원정대가 처음이신가요?</span>
        <button type="button" class="btn--transparent" @click="toSignup">
          회원가입
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
import main_logo from "@/assets/Image/main_logo.svg";
import logo_naver from "@/assets/Image/logo_naver.svg";

export default {
  mounted() {
    const naver_id_login = new window.naver_id_login(
      "WDBUTDGAh6YGJ6Umihxr",
      // "http://34.64.32.174:8080/oauth2/authorization/naver?http://localhost:3000/cafes=34.64.45.86"
      // 'http://34.64.32.174:8080/oauth2/authorization/naver?http://localhost:3000/cafes=34.64.45.86'
      // "http://34.64.32.174:8080/oauth2/authorization/naver?http://localhost:3000/cafes"
      "http://34.64.32.174:8080/oauth2/authorization/naver?redirect_uri=http://34.64.45.86/cafes"

      // http://34.64.32.174:8080/oauth2/authorization/naver?redirect_uri=http://34.64.45.86/cafes
    );
    const state = naver_id_login.getUniqState();
    naver_id_login.setButton("white", 3, 45);
    naver_id_login.setState(state);
    naver_id_login.init_naver_id_login();
  },
  data() {
    return {
      main_logo,
      logo_naver,
    };
  },
  methods: {
    toMain() {
      this.$router.push("/cafes");
    },
    toLogin() {},
    toSignup() {
      this.$router.push("/signup");
    },
  },
  created() {
    let headerActive = false;
    this.$store.commit("isHeaderActive", headerActive);
  },
};
</script>

<style></style>

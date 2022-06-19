<template>
  <div id="main-container">
    <div id="landing-container">
      <img :src="main_logo" class="main__logo" />
      <div class="btn__wrapper">
        <button type="button" class="btn--primary" @click="toMain">
          로그인 없이 크로플 원정 떠나기
        </button>
        <button type="button" class="btn--naver" @click="tologin">
          <div id="naver_id_login" @click="tologin"></div>
        </button>
      </div>
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
      // "http://34.64.139.239/oauth2/authorization/naver?redirect_uri=http://34.64.173.239/cafes"
      "http://192.168.0.17:8080/oauth2/authorization/naver?redirect_uri=http://localhost:3000/cafes"
    );
    naver_id_login.setButton("green", 3, 45);
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
  },
  created() {
    let headerActive = false;
    this.$store.commit("isHeaderActive", headerActive);
  },
};
</script>

<style></style>

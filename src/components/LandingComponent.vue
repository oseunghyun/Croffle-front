<template>
  <div id="main-container">
    <img :src="main_logo" class="main__logo">
    <div class="btn__wrapper">
      <button class="btn--primary">
        <router-link to="/main">로그인 없이 크로플 원정 떠나기</router-link>
      </button>
      <button class="btn--naver">
        <router-link to="/login"><img :src="logo_naver">네이버 로그인</router-link>
      </button>
    </div>
    <div class="link__wrapper">
      <span>크로플 원정대가 처음이신가요?</span>
      <button class="btn-transparent">
        <router-link to="/signup">회원가입</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import main_logo from '@/assets/Image/main_logo.svg';
import logo_naver from '@/assets/Image/logo_naver.svg';
export default {
  data() {
    return {
      main_logo,
      logo_naver
    }
  },
}
</script>

<style>

</style>
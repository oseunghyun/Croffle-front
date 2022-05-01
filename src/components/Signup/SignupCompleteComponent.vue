<template>
  <div class="sign-up">
    <header class="page-header">
      <h1>회원가입</h1>
    </header>
    <div class="signup-complete__wrapper">
      <img :src="ic__complete">
      <span>회원가입이 완료되었습니다.</span>
    </div>
    <button @click="submitForm" class="btn--primary btn__complete">크로플 원정 떠나기</button>
  </div>
</template>

<script>
import ic__complete from '@/assets/ic/complete.svg';
export default {
  data() {
    return {
      ic__complete,
    }
  },
  methods: {
    submitForm() {
      this.$router.push("/");
    }
  }
}
</script>

<style>

</style>
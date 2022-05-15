<template>
  <div class="sign-up">
    <header class="page-header">
      <h1>회원가입</h1>
      <span>회원가입 유형을 선택해주세요.</span>
    </header>
    <div class="btn__wrapper">
      <button type="button" @click="toPersonalSignup" class="btn--lg personal">
        개인 회원가입
      </button>
      <button type="button" class="btn--lg business">사장님 회원가입</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toPersonalSignup() {
      this.$router.push("/signup/info").catch(() => {});
    },
  },
};
</script>

<style></style>

<template>
  <div class="sign-up">
    <header class="page-header">
      <h1>회원가입</h1>
      <span>크로플 원정대에서 사용할 닉네임을 입력해주세요.</span>
    </header>
    <div class="input__box">
      <label id="signup--nickname">닉네임</label>
      <input
        class="input"
        id="signup--nickname"
        v-model="form.userNickname"
        placeholder="닉네임을 입력해주세요."
        maxlength="15"
        type="text"
      />
    </div>
    <button type="button" @click="submitForm" class="btn--primary btn__signup">
      크로플 원정대 가입하기
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nickName: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/signup/complete");
    },
  },
};
</script>

<style></style>

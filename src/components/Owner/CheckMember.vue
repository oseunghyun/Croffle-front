<template>
  <div class="owner-stamp">
    <header class="owner__header">
      <h1>회원 조회</h1>
      <span>적립할 회원의 전화번호를 입력해주세요.</span>
    </header>
    <form>
      <div class="input__box">
        <label>회원 전화번호</label>
        <input v-model="phoneNum" placeholder="회원 전화번호를 입력해주세요." />
        <span class="count">{{ phoneLength }}/15</span>
      </div>
    </form>
    <button type="button" @click="checkMember" class="btn--primary">
      회원조회
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNum: "",
    };
  },
  computed: {
    phoneLength() {
      return this.phoneNum.length;
    },
  },
  methods: {
    checkMember() {
      this.$router.push("/owner/stampcoupon");
    },
  },
};
</script>

<style></style>

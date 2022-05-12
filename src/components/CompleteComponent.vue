<template>
  <div class="complete-component">
    <div class="complete__wrapper">
      <img :src="ic__complete" />
      <h3>{{ message }} 완료되었습니다.</h3>

      <button @click="toHome" class="btn--primary">홈으로</button>
    </div>
  </div>
</template>

<script>
import ic__complete from "@/assets/ic/complete.svg";
export default {
  data() {
    return {
      ic__complete,
    };
  },
  props: {
    message: {
      type: String,
      default: "",
    },
  },
  methods: {
    toHome() {
      this.$router.push("/owner");
    },
  },
};
</script>

<style></style>

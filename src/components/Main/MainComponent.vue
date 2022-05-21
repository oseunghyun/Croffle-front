<template>
  <div class="main-container">
    <p class="guide">
      원정대에게 알려주고 싶은 카페가 있나요?<br />
      카페를 찾아 크로플 원정대에 제보해주세요!
    </p>
    <button @click="toDetail" class="btn--transparent">
      <img :src="ic__speechBubble" />
    </button>
  </div>
</template>

<script>
import ic__speechBubble from "@/assets/ic/speechBubble.svg";
export default {
  data() {
    return {
      ic__speechBubble,
    };
  },
  methods: {
    toDetail() {
      let pageNum = 6;
      this.$emit("toDetail", pageNum);
    },
  },
};
</script>

<style></style>

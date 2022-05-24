<template>
  <div class="main-container">
    <p class="guide">
      원정대에게 알려주고 싶은 카페가 있나요?<br />
      카페를 찾아 크로플 원정대에 제보해주세요!
    </p>
    <button @click="fetchInfo" class="btn--transparent">
      <img :src="ic__speechBubble" />
    </button>
  </div>
</template>

<script>
import ic__speechBubble from "@/assets/ic/speechBubble.svg";
import { fetchCafeInfo } from "@/api/index";

export default {
  data() {
    return {
      ic__speechBubble,
    };
  },
  methods: {
    // 카페 상세정보 조회
    async fetchInfo() {
      try {
        console.log("카페 상세정보 조회");
        const { data } = await fetchCafeInfo();
        // 카페 아이디 조회
        console.log(data.id);
        this.$emit("fetchInfo", data);
        this.$router.push("/cafe");
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>

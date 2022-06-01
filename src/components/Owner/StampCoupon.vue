<template>
  <div class="owner-stamp">
    <header class="owner__header">
      <h1>스탬프 찍어주기</h1>
      <span>회원 정보가 일치하면 스탬프를 적립해주세요.</span>
    </header>
    <div class="owner__card">
      <span class="owner__card-title">고객정보</span><br />
      <span class="owner__card-text"
        ><strong>{{ stampInfo.user_nickname }}</strong> 님</span
      >
    </div>
    <div class="owner__card">
      <span class="owner__card-title">보유 스탬프</span><br />
      <span class="owner__card-text"
        ><strong class="count">{{ stampInfo.stamp_cnt }}</strong> / 10개</span
      >
    </div>
    <button type="button" @click="createStamp" class="btn--primary">
      스탬프 적립하기
    </button>
  </div>
</template>

<script>
import { createStamp } from "@/api/owner";

export default {
  data() {
    return {
      user: {
        user_nickname: "닉네임",
        stamp_cnt: "2",
      },
    };
  },
  props: {
    stampInfo: {
      type: Object,
    },
  },
  methods: {
    async createStamp() {
      try {
        console.log("스탬프 적립 완료");
        const stampData = await createStamp({
          cafe_id: this.cafe_id,
          user_id: this.user_id,
        });
        console.log(stampData);
      } catch (error) {
        console.log(error.message);
      } finally {
        let message = "적립이";
        this.$emit("setMessage", message);
        this.$router.push("/owner/complete");
      }
    },
  },
};
</script>

<style></style>

<template>
  <div class="owner">
    <header class="owner__header">
      <h1>매장 관리</h1>
      <span>매장 정보를 관리해주세요.</span>
    </header>
    <!-- 카페 정보 -->
    <div id="cafe-page">
      <div class="cafe-info">
        <span class="cafe__name">{{ cafeInfo.cafeName }}</span>
        <span class="cafe__address">{{ cafeInfo.cafeAddr }}</span>
      </div>
      <div class="cafe-info__detail">
        <div class="cafe-info__wrapper">
          <label>전화번호</label>
          <span>{{ cafeInfo.cafeTelephone }}</span>
        </div>
        <div class="cafe-info__wrapper">
          <label>운영시간</label>
          <span>{{ cafeInfo.cafeHours }}</span>
        </div>
        <div class="cafe-info__wrapper">
          <label>SNS</label>
          <span>{{ cafeInfo.cafeSite }}</span>
        </div>
        <div class="cafe-info__wrapper">
          <label>제공 혜택</label>
          <span>{{ cafeInfo.cafeBenefit }}</span>
        </div>
      </div>
    </div>
    <button type="button" @click="manageForm" class="btn--border btn__manage">
      매장 관리하기
    </button>
  </div>
</template>

<script>
// import { fetchOwnerCafe } from "@/api/owner";
import axios from "axios";

export default {
  data() {
    return {
      cafeInfo: [],
    };
  },
  created() {
    this.fetchOwnerCafe();
  },
  methods: {
    manageForm() {
      this.$router.push("/owner/cafemanage");
    },
    // 매장 정보 조회
    async fetchOwnerCafe() {
      try {
        console.log("사장님 - 매장 정보 조회");
        // const { data } = await fetchOwnerCafe();
        const { data } = await axios.get(" http://34.64.32.174:8080/owner/cafe", {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        });
        this.cafeInfo = data.data[0];
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>

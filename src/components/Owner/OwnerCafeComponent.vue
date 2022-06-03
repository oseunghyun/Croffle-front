<template>
  <div class="owner">
    <header class="owner__header">
      <h1>매장 관리</h1>
      <span>매장 정보를 관리해주세요.</span>
    </header>
    <!-- 카페 정보 -->
    <div id="cafe-page">
      <div class="cafe-info">
        <span class="cafe__name">{{ cafeInfo.cafe_name }}</span>
        <span class="cafe__address">{{ cafeInfo.cafe_addr }}</span>
      </div>
      <div class="cafe-info__detail">
        <div class="cafe-info__wrapper">
          <label>전화번호</label>
          <span>{{ cafeInfo.cafe_telephone }}</span>
        </div>
        <div class="cafe-info__wrapper">
          <label>운영시간</label>
          <span>{{ cafeInfo.cafe_hours }}</span>
        </div>
        <div class="cafe-info__wrapper">
          <label>SNS</label>
          <span>{{ cafeInfo.cafe_site }}</span>
        </div>
        <div class="cafe-info__wrapper">
          <label>제공 혜택</label>
          <span>{{ cafeInfo.cafe_benefit }}</span>
        </div>
      </div>
    </div>
    <button type="button" @click="manageForm" class="btn--border btn__manage">
      매장 관리하기
    </button>
  </div>
</template>

<script>
import { fetchOwnerCafe } from "@/api/owner";
export default {
  created() {
    this.fetchOwnerCafe();
  },
  components: {
    // CafeInfoComponent,
  },
  methods: {
    manageForm() {
      this.$router.push("/owner/cafemanage");
    },
    // 매장 정보 조회
    async fetchOwnerCafe() {
      try {
        console.log("사장님 - 매장 정보 조회");
        const { ownerCafeData } = await fetchOwnerCafe();
        this.cafeInfo = ownerCafeData.body.cafe;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  data() {
    return {
      cafeInfo: [],
    };
  },
};
</script>

<style></style>

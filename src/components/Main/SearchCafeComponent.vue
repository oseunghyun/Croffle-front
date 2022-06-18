<template>
  <div class="cafe-view">
    <div id="report-component">
      <form @submit.prevent="searchCafe">
        <div class="input__box">
          <label>카페명</label>
          <div class="search__box">
            <input
              placeholder="카페명을 입력해주세요."
              type="text"
              v-model="cafeData"
              id="input__search"
              @keypress.enter="searchCafe"
            />
            <button
              type="button"
              class="btn__duplicate btn--primary"
              id="btn__search"
              @click="searchCafe"
            >
              검색
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="card__wrapper--column">
      <div v-for="(cafe, index) in cafes" :key="index" class="recommend__card">
        <div>
          <span @click="submitCafeInfo(index)" class="card__name">{{
            cafe.title
          }}</span>
          <span class="card__addr">{{ cafe.roadAddress }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { searchCafe } from "@/api/naver";

export default {
  created() {
    let headerActive = true;
    this.$store.commit("isHeaderActive", headerActive);
  },
  data() {
    return {
      cafeData: "",
      cafes: [],
    };
  },
  methods: {
    async searchCafe() {
      try {
        const data = await searchCafe(this.cafeData);
        /* this.cafes [{title: ''},{title: ''}]*/
        this.cafes = data.data.items;
        this.cafes = this.cafes.map((cafe) => {
          cafe.title = cafe.title.replaceAll("<b>", "").replaceAll("</b>", "");
          return cafe;
        });
        console.log(data.data.items[0]);
      } catch (error) {
        console.log(error);
      }
    },
    submitCafeInfo(index) {
      const cafeInfo = this.cafes[index];
      this.$emit("submitCafeInfo", cafeInfo);
      this.$router.push("/cafes/report");
    },
  },
};
</script>

<style></style>

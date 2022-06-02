<template>
  <div class="recommend">
    <header class="page-title">추천 크로플 카페</header>
    <div class="guide">좋아요, 평점이 높은 크로플 카페를 공유해요!</div>
    <div class="select__wrapper">
      <select v-model="filter">
        <option value="liked">좋아요 순</option>
        <option value="review">평점순</option>
      </select>
    </div>

    <div class="card__wrapper--column">
      <div v-for="i in cafeNum" :key="'start' + i" class="recommend__card">
        <div>
          <span @click="showDetail" class="card__name">{{ cafes.name }}</span>
          <span class="card__addr">{{ cafes.roadaddr }}</span>
        </div>
        <div class="card__wrapper--row">
          <div class="card__ic">
            <img :src="ic__like" /><span>{{ cafes.like_count }} </span>
          </div>
          <div class="card__ic">
            <img :src="ic__rate" /><span>{{ cafes.rate }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ic__rate from "@/assets/ic/review.svg";
import ic__like from "@/assets/ic/heart.svg";
import recommendCafe from "@/api/cafe";

export default {
  data() {
    return {
      ic__rate,
      ic__like,
      cafeNum: 3,
      filter: "liked",
      cafes: {
        name: "카페명",
        roadaddr: "도로명 주소",
        rate: 4.5,
        like_count: 5,
      },
      cafeData: [],
    };
  },
  created() {
    let headerActive = true;
    this.$store.commit("isHeaderActive", headerActive);
    this.recommendCafe();
  },
  computed: {
    changeQuery() {
      return this.$router.replace({
        path: this.$route.path,
        query: {
          filter: this.filter,
        },
      });
    },
  },
  methods: {
    async recommendCafe() {
      // 카페 추천 게시판
      try {
        console.log("추천 게시판");
        const { cafeData } = await recommendCafe(this.filter);
        console.log(cafeData);
        this.cafeData = cafeData;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>

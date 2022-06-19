<template>
  <div class="container">
    <div class="recommend">
      <header class="page-title">인기 카페</header>
      <div class="guide">좋아요, 평점이 높은 크로플 카페를 공유해요!</div>
      <div class="select__wrapper">
        <select v-model="filter" @change="recommendCafe(this.filter)">
          <option value="liked">좋아요 순</option>
          <option value="review">평점순</option>
        </select>
      </div>

      <div class="card__wrapper--column">
        <div v-for="cafe in cafeData" :key="cafe" class="recommend__card">
          <div>
            <span @click="showDetail" class="card__name">{{ cafe.name }}</span>
            <span class="card__addr">{{ cafe.roadaddr }}</span>
          </div>
          <div class="card__wrapper--row">
            <div class="card__ic">
              <img :src="ic__like" /><span>{{ cafe.liked_count }} </span>
            </div>
            <div class="card__ic">
              <img :src="ic__rate" /><span>{{ cafe.review_count }} </span>
            </div>
            <div class="card__ic">
              <i class="fas fa-star fa-1x"></i
              ><span>
                {{ cafe.rate }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ic__rate from "@/assets/ic/review.svg";
import ic__like from "@/assets/ic/heart.svg";
// import { recommendCafe } from "@/api/recommend";
import axios from "axios";

export default {
  data() {
    return {
      ic__rate,
      ic__like,
      filter: "liked",
      cafeData: [
        {
          name: "카페명",
          roadaddr: "도로명 주소",
          rate: 4.5,
          review_count: 10,
          liked_count: 5,
        },
      ],
    };
  },
  created() {
    let headerActive = true;
    this.$store.commit("isHeaderActive", headerActive);
    // 최초 좋아요 순 카페 불러오기
    this.recommendCafe(this.filter);
  },
  methods: {
    async recommendCafe(filter) {
      // 카페 추천 게시판
      try {
        console.log("추천 게시판");
        // const { cafeData } = await recommendCafe(filter);
        const { data } = await axios.get(
          `http://34.64.139.239/cafe/recommend?filter=${filter}`
        );
        console.log(data);
        this.cafeData = data.data;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>

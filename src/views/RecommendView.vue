<template>
  <div class="recommend">
    <header class="page-title">추천 크로플 카페</header>
    <div class="guide">좋아요, 평점이 높은 크로플 카페를 공유해요!</div>
    <div class="select__wrapper">
      <select>
        <option selected>좋아요 순</option>
        <option>평점순</option>
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
export default {
  data() {
    return {
      ic__rate,
      ic__like,
      cafeNum: 3,
      cafes: {
        name: "카페명",
        roadaddr: "도로명 주소",
        rate: 4.5,
        like_count: 5,
      },
    };
  },
  created() {
    let headerActive = true;
    this.$store.commit("isHeaderActive", headerActive);
  },
};
</script>

<style></style>

<template>
  <div class="mypage-scrap">
    <header>
      <h1>예정된 원정</h1>
      <span>{{ scrapList.length }} </span>
    </header>
    <div class="card__wrapper--column">
      <div v-for="scrap in scrapList" :key="scrap" class="card">
        <span class="card__title">{{ scrap.name }}</span>
        <span class="card__text">{{ scrap.addr }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchLikedList } from "@/api/like";

export default {
  created() {
    this.fetchScrapList();
  },
  data() {
    return {
      // cafe: {
      //   name: "헬로우 크로플",
      //   addr: "서울특별시 성북구 보문로 34다길 87",
      // },
      scrapList: [],
    };
  },
  methods: {
    async fetchScrapList() {
      try {
        console.log("마이페이지 - 내가 스크랩 한 리스트 조회");
        const { scrapList } = await fetchLikedList();
        this.scrapList = scrapList.body.cafes;
        console.log(this.scrapLists);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>

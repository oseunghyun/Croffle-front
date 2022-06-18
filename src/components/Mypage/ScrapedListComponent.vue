<template>
  <div class="mypage-scrap">
    <header>
      <h1>예정된 원정</h1>
      <span>{{ scrapList.length }} </span>
    </header>
    <div class="card__wrapper--column">
      <div
        v-for="(scrap, index) in scrapList"
        :key="scrap"
        class="card"
        @click="toCafeDetail(index)"
      >
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
      scrapList: [
        {
          id: 0,
          name: "밀크북",
          addr: "서울특별시 성북구 ",
        },
      ],
    };
  },
  methods: {
    async fetchScrapList() {
      try {
        console.log("마이페이지 - 내가 스크랩 한 리스트 조회");
        const { data } = await fetchLikedList();
        this.scrapList = data.data;
        console.log(this.scrapLists);
      } catch (error) {
        console.log(error.message);
      }
    },
    toCafeDetail(index) {
      this.$router.push(`/cafe/${this.scrapList[index].id}`);
    },
  },
};
</script>

<style></style>

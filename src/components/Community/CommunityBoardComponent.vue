<template>
  <div class="community">
    <header class="page-title">커뮤니티</header>
    <p class="guide">크로플 원정대와 공유하고 싶은 내용이 있나요?</p>
    <div class="card__wrapper--column">
      <div
        v-for="(postItem, index) in postItems"
        :key="index"
        class="community__card"
      >
        <span @click="toDetailPage(index)" class="card__title">
          {{ postItem.title }}
        </span>
        <div class="card__text">
          <span class="card__category">
            &#91;{{ postItem.category }}&#93;
          </span>
          <div>
            <span class="card__nick_name">
              {{ postItem.user_nickname }}&nbsp;
            </span>
            <span class="card__create_date">
              {{ postItem.modifiedDate }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <button @click="toPostPage" type="button" class="btn--border">
      게시글 작성 +
    </button>
  </div>
</template>

<script>
// import { fetchPosts } from "@/api/board";
import axios from "axios";

export default {
  data() {
    return {
      postItems: [],
    };
  },
  // computed: {
  //   formatDate(date) {
  //     return date.split("T")[0];
  //   },
  // },
  created() {
    this.fetchPosts();
  },
  methods: {
    // 커뮤니티 게시글 작성
    toPostPage() {
      this.$router.push("/community/post");
    },
    // 커뮤니티 게시글 조회
    toDetailPage(index) {
      console.log("게시글 id 조회", this.postItems[index].id);
      this.$router.push(`/community/detail/${this.postItems[index].id}`);
    },
    // 게시글 정보 조회
    async fetchPosts() {
      try {
        // const { data } = await fetchPosts();
        const { data } = await axios.get("http://34.64.139.239/boards");
        console.log("게시글 정보 조회", data.data);
        this.postItems = data.data;
        // console.log(JSON.stringify(this.postItems));
        console.log("this.postItems", this.postItems);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>

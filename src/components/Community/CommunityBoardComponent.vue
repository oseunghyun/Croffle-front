<template>
  <div class="community">
    <header class="page-title">커뮤니티</header>
    <p class="guide">크로플 원정대와 공유하고 싶은 내용이 있나요?</p>
    <div class="card__wrapper--column">
      <div v-for="i in postNum" :key="'start' + i" class="community__card">
        <span @click="toDetailPage" class="card__title">
          {{ board.title }}
        </span>
        <div class="card__text">
          <span class="card__category"> &#91;{{ board.category }}&#93; </span>
          <div>
            <span class="card__nick_name"> {{ board.nick_name }}&nbsp; </span>
            <span class="card__create_date">
              {{ board.create_date }}
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
export default {
  data() {
    return {
      postNum: 4,
      board: {
        title: "제목",
        category: "자유",
        nick_name: "씽씽",
        create_date: "2022-02-01",
      },
    };
  },
  methods: {
    // 커뮤니티 게시글 작성
    toPostPage() {
      this.$router.push("/community/form");
    },
    // 커뮤니티 게시글 조회
    toDetailPage() {
      this.$router.push("/community/detail");
    },
  },
};
</script>

<style></style>

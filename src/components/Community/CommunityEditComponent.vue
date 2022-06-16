<template>
  <div class="community">
    <header class="page-title">커뮤니티</header>
    <form>
      <div class="input__box">
        <label>게시글 카테고리</label>
        <select v-model="category">
          <option value="RECIPE">레시피 공유 글</option>
          <option value="FREE">자유 글</option>
        </select>
      </div>
      <div class="input__box">
        <label>게시글 제목</label>
        <input
          placeholder="게시글 제목을 입력해주세요."
          v-model="title"
          maxlength="30"
        />
        <span class="count">{{ titleLength }}/30</span>
      </div>
      <div class="input__box">
        <label>게시글 내용</label>
        <textarea
          placeholder="게시글 내용을 입력해주세요."
          v-model="content"
          maxlength="1500"
        />
        <span class="count">{{ contentLength }}/1500</span>
      </div>
    </form>
    <button
      @click="editPost"
      type="button"
      :class="['btn--md', isValid ? 'btnPrimary' : 'btnDisabled']"
      :disabled="isValid == false"
    >
      게시글 수정
    </button>
  </div>
</template>

<script>
import { editPost, fetchPost } from "@/api/board";

export default {
  data() {
    return {
      title: "",
      content: "",
      category: "RECIPE",
    };
  },
  // 수정할 게시글 내용 불러오기
  created() {
    this.fetchPost();
  },
  computed: {
    isValid() {
      if (this.title && this.content) {
        return true;
      } else {
        return false;
      }
    },
    titleLength() {
      return this.title.length;
    },
    contentLength() {
      return this.content.length;
    },
  },
  methods: {
    // 커뮤니티 게시글 수정하기
    async editPost() {
      const id = this.$route.params.id;
      try {
        console.log("커뮤니티 글 수정");
        await editPost(id, {
          title: this.title,
          content: this.content,
          boardCategory: this.boardCategory,
        });
        // this.$router.push("/community");
      } catch (error) {
        console.log(error.message);
      }
    },
    async fetchPost() {
      const { data } = await fetchPost(this.$route.params.id);
      this.title = data.title;
      this.content = data.content;
    },
  },
};
</script>

<style></style>

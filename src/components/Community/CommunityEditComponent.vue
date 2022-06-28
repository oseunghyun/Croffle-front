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
        <!-- <span class="count">{{ titleLength }}/30</span> -->
      </div>
      <div class="input__box">
        <label>게시글 내용</label>
        <textarea
          placeholder="게시글 내용을 입력해주세요."
          v-model="content"
          maxlength="1500"
        />
        <!-- <span class="count">{{ contentLength }}/1500</span> -->
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
// import { editPost } from "@/api/board";
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      content: "",
      category: "",
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
    // titleLength() {
    //   return this.title.length;
    // },
    // contentLength() {
    //   return this.content.length;
    // },
  },
  methods: {
    // 커뮤니티 게시글 수정하기
    async editPost() {
      // const id = this.$route.params.id;
      // try {
      //   console.log("커뮤니티 글 수정");
      //   await editPost(id, {
      //     title: this.title,
      //     content: this.content,
      //     boardCategory: this.boardCategory,
      //   });
      //   // this.$router.push("/community");
      // } catch (error) {
      //   console.log(error.message);
      await axios.put(
        ` http://34.64.32.174:8080/board/${this.$route.params.id}`,
        {
          title: this.title,
          content: this.content,
          boardCategory: this.category,
        },
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        }
      );
      this.$router.push("/community");
    },
    async fetchPost() {
      // const { data } = await fetchPost(this.$route.params.id);
      const { data } = await axios.get(
        ` http://34.64.32.174:8080/board/${this.$route.params.id}`
      );
      console.log("커뮤니티 특정 게시글 조회", data);
      this.title = data.data[0].title;
      this.content = data.data[0].content;
      this.category = data.data[0].category;
    },
  },
};
</script>

<style></style>

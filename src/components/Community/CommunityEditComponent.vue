<template>
  <div class="community">
    <header class="page-title">커뮤니티</header>
    <form>
      <div class="input__box">
        <label>게시글 카테고리</label>
        <select>
          <option selected>게시글 카테고리</option>
          <option>게시글 공유 글</option>
          <option>자유 글</option>
        </select>
      </div>
      <div class="input__box">
        <label>게시글 제목</label>
        <input
          placeholder="게시글 제목을 입력해주세요."
          v-model="board.title"
        />
        <span class="count">{{ titleLength }}/30</span>
      </div>
      <div class="input__box">
        <label>게시글 내용</label>
        <textarea
          placeholder="게시글 내용을 입력해주세요."
          v-model="board.content"
        />
        <span class="count">{{ contentLength }}/1500</span>
      </div>
    </form>
    <button @click="submitForm" type="button" class="btn--border">
      게시글 작성 완료
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: {
        title: "",
        content: "",
      },
    };
  },
  computed: {
    titleLength() {
      return this.board.title.length;
    },
    contentLength() {
      return this.board.content.length;
    },
  },
  methods: {
    submitForm() {
      console.log("폼 제출");
    },
  },
};
</script>

<style></style>

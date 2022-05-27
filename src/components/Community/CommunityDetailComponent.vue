<template>
  <div class="community-post">
    <div class="post__wrapper">
      <div>
        <span class="post__category">
          &#91;{{ board.category }}&#93;&nbsp;</span
        >
        <span class="post__title"> {{ board.title }} </span>
      </div>
      <span class="post__create_date"> {{ board.create_date }} </span>
      <span class="post__nick_name"> {{ board.nick_name }}&nbsp; </span>
      <p class="post__content">{{ board.content }}&nbsp;</p>
    </div>
    <div class="btn__wrapper">
      <button type="button" class="btn--border" @click="showDelModal">
        삭제하기
      </button>
      <button type="button" class="btn--primary" @click="modifyForm">
        수정하기
      </button>
    </div>
    <modal-component v-if="isDelModalActive">
      <del-modal-content @close-modal="isDelModalActive = false" />
    </modal-component>
  </div>
</template>

<script>
import ic__arrow_left from "@/assets/ic/arrow_left.svg";
import ModalComponent from "@/components/Modal/ModalComponent.vue";
import DelModalContent from "@/components/Modal/DelModalContent.vue";
import { fetchPost } from "@/api/board";

export default {
  components: { ModalComponent, DelModalContent },
  data() {
    return {
      board: {
        id: "",
        title: "제목",
        boardCategory: "자유",
        nick_name: "씽씽",
        create_date: "2022-02-01",
        content:
          "크로플 맛집이란 크로플 맛집이란 크로플 맛집이란크로플 맛집이란크로플 맛집이란",
      },
      ic__arrow_left,
      isDelModalActive: false,
      postItem: [],
    };
  },
  methods: {
    showDelModal() {
      this.isDelModalActive = true;
    },
    modifyForm() {
      // 게시글 수정 페이지
      this.$router.push("/community/edit/:id");
    },
  },
  // 게시글 내용 조회
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.board.title = data.title;
    this.board.content = data.content;
    this.board.boardCategory = data.category;
    this.board.nick_name = data.nick_name;
    this.board.create_date = data.create_date;
  },
};
</script>

<style></style>

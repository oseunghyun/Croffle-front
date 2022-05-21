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

export default {
  components: { ModalComponent, DelModalContent },
  data() {
    return {
      board: {
        title: "제목",
        category: "자유",
        nick_name: "씽씽",
        create_date: "2022-02-01",
        content:
          "크로플 맛집이란 크로플 맛집이란 크로플 맛집이란크로플 맛집이란크로플 맛집이란",
      },
      ic__arrow_left,
      isDelModalActive: false,
    };
  },
  methods: {
    showDelModal() {
      this.isDelModalActive = true;
    },
    modifyForm() {
      let pageNum = 4;
      this.$store.commit("changePage", pageNum);
      // 게시글 수정 페이지
      this.$router.push("/community/edit");
    },
  },
};
</script>

<style></style>

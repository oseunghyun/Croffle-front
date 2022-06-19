<template>
  <div class="content">
    <div class="btn__close">
      <button
        type="button"
        class="btn--transparent"
        @click="$emit('close-modal')"
      >
        <img :src="ic__close" />
      </button>
    </div>
    <h1>정말 삭제하시겠습니까?</h1>
    <div class="btn__wrapper">
      <button type="button" class="btn--secondary" @click="deletePost">
        예
      </button>
      <button type="button" class="btn--negative" @click="$emit('close-modal')">
        아니오
      </button>
    </div>
  </div>
</template>

<script>
import ic__close from "@/assets/ic/close.svg";
// import { deletePost } from "@/api/board";
import axios from "axios";

export default {
  name: "DelModalContent",
  props: {
    msg: String,
    postItem: {
      type: Object,
    },
  },
  data() {
    return {
      ic__close,
    };
  },
  methods: {
    // 커뮤니티 게시글 삭제
    async deletePost() {
      // await deletePost(this.$route.params.id);
      await axios.delete(
        `http://34.64.139.239/board/${this.$route.params.id}`,
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        }
      );
      // 커뮤니티 게시판 동기화
      // this.$emit("refresh");
      this.$emit("close-modal");
      this.$router.push("/community");
    },
  },
};
</script>

<style></style>

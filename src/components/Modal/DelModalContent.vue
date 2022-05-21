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
export default {
  name: "DelModalContent",
  props: {
    msg: String,
  },
  data() {
    return {
      ic__close,
    };
  },
  methods: {
    deletePost() {
      this.$emit("close-modal");
      this.$router.push("/community");
    },
  },
};
</script>

<style></style>

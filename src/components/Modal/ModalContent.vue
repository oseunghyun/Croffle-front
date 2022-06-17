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
    <h1>무엇을 제보하시나요?</h1>
    <div class="btn__wrapper">
      <button type="button" class="btn--secondary" @click="addReport">
        크로플 메뉴 추가 제보
      </button>
      <button type="button" class="btn--negative" @click="reportInfo">
        카페 정보 수정 제보
      </button>
    </div>
  </div>
</template>

<script>
import ic__close from "@/assets/ic/close.svg";
export default {
  name: "ModalContent",
  props: {
    msg: String,
  },
  data() {
    return {
      ic__close,
    };
  },
  methods: {
    // 크로플 메뉴 추가 제보 버튼 이벤트
    addReport() {
      this.$emit("close-modal");
      this.$router.push(`/cafe/${this.$route.params.id}/addreport`);
    },
    // 카페 정보 수정 이벤트
    reportInfo() {
      this.$emit("close-modal");
      this.$router.push(`/cafe/${this.$route.params.id}/reportinfo`);
    },
  },
};
</script>

<style></style>

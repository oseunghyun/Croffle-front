<template>
  <div class="owner">
    <header class="owner__header">
      <h1>매장 관리</h1>
      <span>매장 정보를 관리해주세요.</span>
    </header>
    <cafe-info-component></cafe-info-component>
    <button type="button" @click="manageForm" class="btn--border">
      매장 관리하기
    </button>
  </div>
</template>

<script>
import CafeInfoComponent from "../Cafe/CafeInfoComponent.vue";
export default {
  components: {
    CafeInfoComponent,
  },
  methods: {
    manageForm() {
      this.$router.push("/owner/cafemanage");
    },
  },
};
</script>

<style></style>

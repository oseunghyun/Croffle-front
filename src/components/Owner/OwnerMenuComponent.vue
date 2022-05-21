<template>
  <div class="owner">
    <header class="owner__header">
      <h1>메뉴 관리</h1>
      <span>메뉴를 관리해주세요.</span>
    </header>
    <cafe-menu-component class="cafe-menu-component"></cafe-menu-component>
    <div class="btn__wrapper">
      <button type="button" class="btn--primary" @click="modifyMenu">
        수정하기
      </button>
      <button type="button" class="btn--border" @click="addMenu">
        추가하기
      </button>
    </div>
  </div>
</template>

<script>
import CafeMenuComponent from "../Cafe/CafeMenuComponent.vue";
export default {
  components: {
    CafeMenuComponent,
  },
  methods: {
    modifyMenu() {
      this.$router.push("/owner/menumodify");
    },
    addMenu() {
      this.$router.push("/owner/menuadd");
    },
  },
};
</script>

<style></style>

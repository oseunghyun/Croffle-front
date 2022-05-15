<template>
  <header id="main-header">
    <router-link to="/main"><img :src="main_logo" /></router-link>
    <nav>
      <button
        type="button"
        @click="showHome"
        class="main-header__btn"
        :class="{ isActive: isActive1 }"
      >
        홈
      </button>
      <button
        type="button"
        @click="isBtnActive2"
        class="main-header__btn"
        :class="{ isActive: isActive2 }"
      >
        추천
      </button>
      <button
        type="button"
        @click="showCommunity"
        class="main-header__btn"
        :class="{ isActive: isActive3 }"
      >
        커뮤니티
      </button>
    </nav>
  </header>
</template>

<script>
import main_logo from "../assets/Image/logo_main.svg";
export default {
  data() {
    return {
      main_logo,
      isActive1: true,
      isActive2: false,
      isActive3: false,
    };
  },
  methods: {
    showHome() {
      this.isActive1 = true;
      this.isActive2 = false;
      this.isActive3 = false;
      let pageNum = 1;
      this.$emit("showHome", pageNum);
    },
    isBtnActive2() {
      this.isActive2 = true;
      this.isActive1 = false;
      this.isActive3 = false;
    },
    showCommunity() {
      this.isActive3 = true;
      this.isActive2 = false;
      this.isActive1 = false;
      let pageNum = 3;
      this.$emit("showCommunity", pageNum);
    },
  },
};
</script>

<style></style>

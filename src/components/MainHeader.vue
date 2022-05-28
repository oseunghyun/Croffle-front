<template>
  <header id="main-header">
    <img :src="main_logo" @click="showHome" />
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
        @click="showRecommend"
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
      this.$router.push("/cafes");
    },
    showRecommend() {
      this.isActive2 = true;
      this.isActive1 = false;
      this.isActive3 = false;
      // this.$router.push("/recommend");
      this.$router.push({ path: "/recommend", query: { filter: "liked" } });
    },
    showCommunity() {
      this.isActive3 = true;
      this.isActive2 = false;
      this.isActive1 = false;
      this.$router.push("/community");
    },
  },
};
</script>

<style></style>

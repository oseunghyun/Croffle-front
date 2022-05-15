<template>
  <header id="main-header">
    <router-link to="/main"><img :src="main_logo" /></router-link>
    <nav>
      <button
        type="button"
        @click="isBtnActive1"
        class="main-header__btn"
        :class="{ isActive: isActive1 }"
      >
        <router-link to="/main">홈</router-link>
      </button>
      <button
        type="button"
        @click="isBtnActive2"
        class="main-header__btn"
        :class="{ isActive: isActive2 }"
      >
        <router-link to="/main">추천</router-link>
      </button>
      <button
        type="button"
        @click="isBtnActive3"
        class="main-header__btn"
        :class="{ isActive: isActive3 }"
      >
        <router-link to="/main">커뮤니티</router-link>
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
    isBtnActive1() {
      this.isActive1 = true;
      this.isActive2 = false;
      this.isActive3 = false;
    },
    isBtnActive2() {
      this.isActive2 = true;
      this.isActive1 = false;
      this.isActive3 = false;
    },
    isBtnActive3() {
      this.isActive3 = true;
      this.isActive2 = false;
      this.isActive1 = false;
    },
  },
};
</script>

<style></style>

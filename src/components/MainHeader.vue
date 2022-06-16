<template>
  <header id="main-header">
    <div class="main-header__wrapper">
      <img :src="main_logo" @click="showHome" class="main-logo" />
      <!-- 로그인 후 마이 페이지 버튼 등장 -->
      <div v-if="isUserLogin" class="main-header__isLogin">
        <button
          type="button"
          class="btn--transparent btn__mypage"
          @click="toMypage"
        >
          My Page
        </button>
      </div>
    </div>

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
import btn_my from "@/assets/ic/my.svg";
export default {
  created() {},
  data() {
    return {
      main_logo,
      isActive1: true,
      isActive2: false,
      isActive3: false,
      btn_my,
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
      this.$router.push("/recommend");
    },
    showCommunity() {
      this.isActive3 = true;
      this.isActive2 = false;
      this.isActive1 = false;
      this.$router.push("/community");
    },
    toMypage() {
      this.$router.push("/mypage");
    },
  },
  computed: {
    isUserLogin() {
      if (this.$store.getters.userToken) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>

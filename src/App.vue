<template>
  <div>
    <!-- 메인 헤더 -->
    <main-header v-if="pageNum == 1 || 6"></main-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";

export default {
  name: "App",
  components: {
    MainHeader,
  },
  data() {
    return {
      pageNum: 0,
    };
  },
};
</script>

<style></style>

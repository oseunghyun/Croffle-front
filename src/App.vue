<template>
  <div>
    <!-- 메인 헤더 -->
    <main-header v-if="this.$store.state.headerActive"></main-header>
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
    return {};
  },
};
</script>

<style></style>

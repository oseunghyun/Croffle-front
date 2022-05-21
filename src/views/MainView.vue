<template>
  <div>
    <!-- 검색 바 -->
    <searchbar-component></searchbar-component>
    <main-component> </main-component>
  </div>
</template>

<script>
import SearchbarComponent from "../components/Main/SearchbarComponent.vue";
import MainComponent from "@/components/Main/MainComponent.vue";

export default {
  components: {
    SearchbarComponent,
    MainComponent,
  },
  data() {
    return {
      page: "main",
    };
  },
  created() {
    let headerActive = true;
    this.$store.commit("isHeaderActive", headerActive);
  },
};
</script>

<style></style>

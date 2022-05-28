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
  mounted() {
    const naver_id_login = new window.naver_id_login(
      "qczgKIdunrBy3nbGO9yM",
      // "http://34.64.32.174:8080/oauth2/authorization/naver?http://localhost:3000/main=34.64.45.86"
      "http://localhost:3000/cafes"
    );
    console.log("access token", naver_id_login.getAccessToken());
    this.$store.commit("setToken", naver_id_login.getAccessToken());
  },
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
    // 토큰값 스토어에 저장
  },
};
</script>

<style></style>

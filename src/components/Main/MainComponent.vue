<template>
  <div>
    <searchbar-component></searchbar-component>
    <naver-maps width="100%" height="100vh" class="main-container--map">
      <p class="guide" id="guide">
        원정대에게 알려주고 싶은 카페가 있나요?<br />
        카페를 찾아 크로플 원정대에 제보해주세요!
      </p>
      <!-- <button @click="fetchInfo" class="btn--transparent" id="btn-detail">
        <img :src="ic__speechBubble" />
      </button> -->
      <button
        type="button"
        @click="toCafeReport"
        class="btn--primary"
        id="btn-report"
      >
        제보하기 +
      </button>
    </naver-maps>
  </div>
</template>

<script>
import ic__speechBubble from "@/assets/ic/speechBubble.svg";
import { fetchCafeInfo } from "@/api/index";
import SearchbarComponent from "@/components/Main/SearchbarComponent.vue";
import { NaverMaps } from "vue3-naver-maps";

export default {
  components: {
    SearchbarComponent,
    NaverMaps,
  },
  mounted() {
    const naver_id_login = new window.naver_id_login(
      "qczgKIdunrBy3nbGO9yM",
      // "http://34.64.32.174:8080/oauth2/authorization/naver?http://localhost:3000/main=34.64.45.86"
      "http://localhost:3000/cafes"
    );
    console.log("access token", naver_id_login.getAccessToken());
    // 토큰값 스토어에 저장
    this.$store.commit("setToken", naver_id_login.getAccessToken());
  },
  created() {
    let headerActive = true;
    this.$store.commit("isHeaderActive", headerActive);
  },
  data() {
    return {
      ic__speechBubble,
      page: "main",
    };
  },
  methods: {
    // 카페 상세정보 조회
    async fetchInfo() {
      try {
        console.log("카페 상세정보 조회");
        const { data } = await fetchCafeInfo();
        // 카페 아이디 조회
        console.log(data.id);
        this.$emit("fetchInfo", data);
        this.$router.push("/cafe/:id");
      } catch (error) {
        console.log(error.message);
      }
    },
    toCafeReport() {
      this.$router.push("/cafes/report");
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <searchbar-component></searchbar-component>
    <naver-maps width="100%" height="100vh" class="main-container--map">
      <naver-marker
        v-for="cafe in cafes"
        :key="cafe.id"
        :latitude="cafe.mapx"
        :longitude="cafe.mapy"
      >
        <!-- <img :src="ic__speechBubble" /> -->
      </naver-marker>
      <div class="map__wrapper">
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
      </div>
    </naver-maps>
  </div>
</template>

<script>
import ic__speechBubble from "@/assets/ic/speechBubble.svg";
import { fetchCafes } from "@/api/index";
import SearchbarComponent from "@/components/Main/SearchbarComponent.vue";
import { ref } from "vue";
import { NaverMaps, NaverMarker } from "vue3-naver-maps";

export default {
  components: {
    SearchbarComponent,
    NaverMaps,
    NaverMarker,
  },
  setup: () => {
    // const map = ref();
    // const mapOptions = {
    //   latitude: 37.541, // 지도 중앙 위도
    //   longtitude: 126.986, // 지도 중앙 경도
    //   zoom: 16,
    // };

    const marker = ref();
    const onLoadMarker = (markerObject) => {
      marker.value = markerObject;
    };

    return { onLoadMarker, marker };
  },
  mounted() {
    // 네이버 로그인
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
  // props: {
  //   cafe: [],
  // },
  data() {
    return {
      ic__speechBubble,
      page: "main",
      cafes: [
        {
          id: "0",
          name: "",
          roadaddr: "",
          coords: "",
          mapx: 37.542,
          mapy: 26.986,
        },
        {
          id: "2",
          name: "",
          roadaddr: "",
          coords: "",
          mapx: 49.542,
          mapy: 26.986,
        },
      ],
    };
  },
  methods: {
    // 카페 제보하기
    toCafeReport() {
      this.$router.push("/cafes/report");
    },
    // 등록된 카페 전체 지도에 출력
    async fetchCafes() {
      try {
        console.log("전체 카페 조회(지도 출력)");
        const { cafeData } = await fetchCafes();
        this.cafes.id = cafeData.data.id;
        this.cafes.name = cafeData.data.name;
        // (this.roadaddr = cafeData.data.roadaddr),
        // // 위도 경도 문자열로 받아와 -> , 기준으로 분리
        // (this.coords = cafeData.data.coords.split(",")),
        // (this.mapx = this.coords[0]),
        // (this.mapy = this.coords[1]);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>

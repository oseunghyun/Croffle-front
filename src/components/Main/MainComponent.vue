<template>
  <div>
    <searchbar-component></searchbar-component>
    <naver-maps
      width="100%"
      height="100vh"
      class="main-container--map"
      @onLoad="onLoadMap(cafes)"
    >
      <naver-marker
        v-for="cafe in cafes"
        :key="cafe.id"
        :latitude="cafe.mapy"
        :longitude="cafe.mapx"
        @onLoad="onLoadMarker($event)"
      >
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
import { saveAuthToCookie } from "@/utils/cookies";

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

    /* 마커 */
    const marker = ref();
    const onLoadMarker = (markerObject) => {
      marker.value = markerObject;
    };

    // 도로명 주소를 위경도로 반환
    const onLoadMap = (cafes) => {
      // console.log("test", window.naver.maps);
      // console.log("test", window.naver.maps.UTMK_NAVER);

      console.log("cafes", cafes);
      cafes = cafes.map((cafe) => {
        window.naver.maps.Service.geocode(
          {
            address: cafe.roadaddr,
            // mapx: cafe.mapx,
            // mapy: cafe.mapy,
          },
          function (status, response) {
            if (status !== window.naver.maps.Service.Status.OK) {
              return alert("Something wrong!");
            }
            var result = response.result;
            console.log("도로명 주소->좌표 반환결과", result.items[0].point);
            cafe.mapx = result.items[0].point.x;
            cafe.mapy = result.items[0].point.y;
          }
        );
        console.log("카페 도로명 주소", cafe);
        return cafe;
      });
    };

    return { onLoadMarker, marker, onLoadMap };
  },
  mounted() {
    // 네이버 로그인
    const naver_id_login = new window.naver_id_login(
      "qczgKIdunrBy3nbGO9yM",
      // "http://34.64.32.174:8080/oauth2/authorization/naver?http://localhost:3000/cafes=34.64.45.86"
      // "http://34.64.32.174:8080/oauth2/authorization/naver?http://localhost:3000/cafes"
      "http://localhost:3000/cafes"
    );
    const token = naver_id_login.getAccessToken();
    console.log("access token", token);
    // 토큰값 스토어에 저장
    this.$store.commit("setToken", token);
    saveAuthToCookie(token);
  },
  created() {
    let headerActive = true;
    this.$store.commit("isHeaderActive", headerActive);
  },
  data() {
    return {
      ic__speechBubble,
      page: "main",
      cafes: [
        {
          id: "0",
          name: "",
          roadaddr: "서울 중구 세종대로 135",
          coords: "",
          mapx: 0,
          mapy: 0,
        },
        {
          id: "2",
          name: "",
          roadaddr: "서울 중구 세종대로22길 16",
          coords: "",
          mapx: 0,
          mapy: 0,
        },
        {
          id: "3",
          name: "",
          roadaddr: "서울 중구 세종대로 110 서울특별시청 ",
          coords: "",
          mapx: 0,
          mapy: 0,
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
        this.cafes.roadaddr = cafeData.data.roadaddr;
      } catch (error) {
        console.log(error);
      }
    },
    selectCafe(cafe) {
      this.$router.push(`cafe/${cafe.id}`);
    },
  },
};
</script>

<style></style>

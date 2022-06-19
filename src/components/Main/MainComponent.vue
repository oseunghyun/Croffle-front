<template>
  <div>
    <searchbar-component
      @showResult="showResult"
      @fetchInfo="fetchInfo"
      @fetchResult="fetchResult"
      :service="service"
      :registered="registered"
    ></searchbar-component>
    <div v-if="service == false" class="search">
      <not-registered-cafe
        v-if="registered == false"
        @close-page="service = true"
      >
      </not-registered-cafe>
      <cafe-list-component
        v-if="registered == true"
        @close-page="service = true"
      ></cafe-list-component>
    </div>

    <div v-if="service == true">
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
          @click="openInfoWindow(cafe)"
        >
          <img :src="ic__marker" />
          <!-- <button @click="fetchInfo" class="btn--transparent" id="btn-detail"> -->
          <!-- <img :src="ic__speechBubble" /> -->
          <!-- </button> -->
        </naver-marker>
        <naver-info-window
          :marker="marker"
          :isOpen="isOpen"
          @onLoad="onLoadInfoWindow($event)"
        >
          <div class="infowindow-style">click Marker!😎</div>
        </naver-info-window>
      </naver-maps>
      <div class="map__wrapper">
        <p class="guide" id="guide">
          원정대에게 알려주고 싶은 카페가 있나요?<br />
          카페를 찾아 크로플 원정대에 제보해주세요!
        </p>
        <button
          type="button"
          @click="toCafeReport"
          class="btn--primary"
          id="btn-report"
        >
          제보하기 +
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ic__speechBubble from "@/assets/ic/speechBubble.svg";
import ic__marker from "@/assets/ic/marker.svg";
// import { fetchIpAddr, fetchLocation } from "@/api/naver";
import { fetchCafes } from "@/api/cafe";
import NotRegisteredCafe from "@/components/Main/NotRegisteredCafe.vue";
import CafeListComponent from "@/components/Main/CafeListComponent.vue";
import SearchbarComponent from "@/components/Main/SearchbarComponent.vue";
import { ref } from "vue";
import { NaverMaps, NaverMarker, NaverInfoWindow } from "vue3-naver-maps";
import { saveAuthToCookie } from "@/utils/cookies";

export default {
  components: {
    SearchbarComponent,
    NaverMaps,
    NaverMarker,
    NaverInfoWindow,
    NotRegisteredCafe,
    CafeListComponent,
  },
  setup: () => {
    const map = ref();
    // const mapOptions = {
    //   latitude: 37.541, // 지도 중앙 위도
    //   longtitude: 126.986, // 지도 중앙 경도
    //   zoom: 16,
    // };
    const marker = ref();
    const infoWindow = ref();
    const isOpen = ref(false); // false: 안보임, true: 보임

    const onLoadInfoWindow = (infoWindowObject) => {
      infoWindow.value = infoWindowObject;
    };
    const onLoadMarker = (markerObject) => {
      marker.value = markerObject;
    };
    // 도로명 주소를 위경도로 반환
    const onLoadMap = (cafes) => {
      console.log("cafes", cafes);
      cafes = cafes.map((cafe) => {
        window.naver.maps.Service.geocode(
          {
            address: cafe.roadaddr,
          },
          function (status, response) {
            if (status !== window.naver.maps.Service.Status.OK) {
              return alert("Something wrong!");
            }
            var result = response.result;
            console.log("도로명 주소->좌표 반환결과", result.items[0].point);
            cafe.mapx = parseFloat(result.items[0].point.x);
            cafe.mapy = parseFloat(result.items[0].point.y);
          }
        );
        console.log("카페 도로명 주소", cafe);
        return cafe;
      });
    };

    return {
      onLoadMarker,
      map,
      marker,
      onLoadMap,
      isOpen,
      onLoadInfoWindow,
    };
  },
  mounted() {
    // // 네이버 로그인
    // const naver_id_login = new window.naver_id_login(
    //   "WDBUTDGAh6YGJ6Umihxr",
    //   //   // "http://34.64.32.174:8080/oauth2/authorization/naver?redirect_uri=http://34.64.45.86/cafes"
    //   //   "http://34.64.32.174:8080/oauth2/authorization/naver?redirect_uri=http://localhost:3000/cafes&response_type=code&state=STATE_STRING"
    //   // "http://34.64.32.174:8080/oauth2/authorization/naver?redirect_uri=http://localhost:3000/cafes"
    //   // "/apioauth2/authorization/naver?redirect_uri=http://localhost:3000/cafes"
    //   `/login=/local`
    // );
    // const accessToken = naver_id_login.getAccessToken();

    // const naverState = naver_id_login.getUniqState();
    // naver_id_login.setState(naverState);
    // this.$store.commit("setNaverState", naverState);
    const token = this.$route.query.token;
    console.log("token", token);

    // 토큰값 스토어에 저장
    this.$store.commit("setToken", token);
    saveAuthToCookie(token);

    /* 네이버 로그인 처리 */
    // let self = this;
    // try {
    //   //네이버로 로그인할때만 실행
    //   if (this.$route.query.token.length !== undefined) {
    //     const callbackFuc = async () => {
    //       const res = await fetch(
    //         "http://34.64.32.174:8080/oauth2/authorization/naver",
    //         {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify({
    //             code: `${self.$route.query.code}`,
    //             state: `${self.$route.query.state}`,
    //           }),
    //         }
    //       );
    //       const data = await res.json();
    //       console.log(`네이버 로그인 : ${data.email}`);

    //       //네이버 로그인 인증 코드 (nodejs api)
    //     };
    //     callbackFuc();
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  },
  async created() {
    let headerActive = true;
    this.$store.commit("isHeaderActive", headerActive);
    // await this.getIpClient();
    // await this.fetchLocation2();
    await this.fetchCafes();
  },
  data() {
    return {
      registered: false,
      ic__speechBubble,
      ic__marker,
      page: "main",
      clientIp: "",
      clientAddr: "",
      service: true,
      email: "",
      cafeList: [],
      cafes: [
        {
          id: "0",
          name: "",
          roadaddr: "서울 중구 세종대로 135",
          mapx: 0,
          mapy: 0,
        },
        {
          id: "2",
          name: "",
          roadaddr: "서울 중구 세종대로22길 16",
          mapx: 0,
          mapy: 0,
        },
        {
          id: "3",
          name: "",
          roadaddr: "서울 중구 세종대로 110 서울특별시청 ",
          mapx: 0,
          mapy: 0,
        },
      ],
    };
  },

  methods: {
    fetchInfo(data) {
      this.cafeInfo = data;
    },
    fetchResult(registered, cafeData) {
      this.registered = registered;
      this.cafeList = cafeData;
    },
    showResult(service) {
      this.service = service;
    },
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
        this.cafes.roadaddr = cafeData.data.addr;
      } catch (error) {
        console.log(error);
      }
    },
    selectCafe(cafe) {
      this.$router.push(`cafe/${cafe.id}`);
    },
    // 클라이언트 ip 주소 fetch
    // async getIpClient() {
    //   try {
    //     const response = await fetchIpAddr();
    //     console.log("클라이언드 ip 주소", response.data);
    //     // this.clientIp = response.data;
    //     this.clientIp = response.data.toString();
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    // // 현재 주소 fetch
    // async fetchLocation2() {
    //   try {
    //     // console.log("jh teset", await fetchLocation(this.clientIp));
    //     // const { location } = await fetchLocation(this.clientIp);
    //     console.log("jh clientIp", this.clientIp);
    //     const test = await fetchLocation(this.clientIp);
    //     console.log("jh test", test);
    //     // console.log("현위치", location);
    //     // this.clientAddr = location;
    //   } catch (error) {
    //     console.error(error.message);
    //   }
    // },
    openInfoWindow(cafe) {
      console.log("jh cafe", this.marker, cafe);
      this.marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(cafe.mapy, cafe.mapx),
        map: window.naver.maps,
      });
      this.isOpen = !this.isOpen;

      // console.log(
      //   this.marker.getPosition(),
      //   "\n",
      //   test.getPosition(),
      //   JSON.stringify(this.marker.getPosition()) !==
      //     JSON.stringify(test?.getPosition())
      // );
      // this.isOpen = false;
      // if (
      //   JSON.stringify(this.marker.getPosition()) !==
      //   JSON.stringify(test?.getPosition())
      // ) {
      //   this.marker = test;
      //   this.isOpen = true;
      //   return;
      // }
      // this.marker = test;
      // // this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style></style>

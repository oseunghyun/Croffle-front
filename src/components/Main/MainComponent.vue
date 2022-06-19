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
          v-for="(cafe, index) in cafes"
          :key="index"
          :latitude="cafe.mapy"
          :longitude="cafe.mapx"
          @onLoad="onLoadMarker($event)"
          @click="openInfo(index)"
        >
          <img :src="ic__marker" />
          <!-- <button @click="fetchInfo" class="btn--transparent" id="btn-detail"> -->
          <!-- <img :src="ic__speechBubble" /> -->
          <!-- </button> -->
          <div v-if="isWindowOpen" class="infoWindow">
            {{ cafe[index].id }}
          </div>
        </naver-marker>
        <naver-info-window
          :marker="marker"
          :isOpen="isOpen"
          @onLoad="onLoadInfoWindow(event)"
        >
          <!-- <div class="infowindow-style">
            {{ cafes.mapx }}
          </div> -->
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
// import { fetchCafes } from "@/api/cafe";
import axios from "axios";
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
      //   console.log("cafe window", cafes);
      //   cafes = cafes.map((cafe) => {
      //     console.log(cafes);
      //     console.log("cafe.name");
      //   });
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
            address: cafe.addr,
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
    this.fetchCafes();

    const token = this.$route.query.token;
    console.log("token", token);

    // 토큰값 스토어에 저장
    this.$store.commit("setToken", token);
    saveAuthToCookie(token);
  },
  async created() {
    let headerActive = true;
    this.$store.commit("isHeaderActive", headerActive);
    // await this.getIpClient();
    // await this.fetchLocation2();
    // await this.fetchCafes();
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
        // {
        //   id: "0",
        //   name: "메가 커피",
        //   roadaddr: "서울 중구 세종대로 135",
        //   mapx: 0,
        //   mapy: 0,
        // },
        // {
        //   id: "2",
        //   name: "빽다방",
        //   roadaddr: "서울 중구 세종대로22길 16",
        //   mapx: 0,
        //   mapy: 0,
        // },
        // {
        //   id: "3",
        //   name: "투썸",
        //   roadaddr: "서울 중구 세종대로 110 서울특별시청 ",
        //   mapx: 0,
        //   mapy: 0,
        // },
      ],

      isWindowOpen: false,
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
        // console.log("전체 카페 조회(지도 출력)");
        const { data } = await axios.get("http://192.168.0.17:8080/cafes");
        console.log("카페 로그 찍기", data);

        // axios
        //   .get("http://192.168.0.17:8080/cafes")
        //   .then(function (response) {
        //     // response
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     // 오류발생시 실행
        //     console.log(error);
        //   })
        //   .then(function () {
        //     // 항상 실행
        //   });
        this.cafes = data.data;
        // this.cafes.id = cafeData.data.id;
        // this.cafes.name = cafeData.data.name;
        // this.cafes.roadaddr = cafeData.data.addr;
      } catch (error) {
        console.log(error);
      }
    },
    openInfo(cafeId) {
      this.$router.push(`/cafe/${cafeId}`);
      console.log(cafeId);
      this.isWindowOpen;
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

<template>
  <div class="cafe-view">
    <div id="report-component">
      <form @submit.prevent="searchCafe">
        <div class="input__box">
          <label>카페명</label>
          <div class="search__box">
            <input
              placeholder="카페명을 입력해주세요."
              type="text"
              v-model="cafeData"
              id="input__search"
              @keypress.enter="searchCafe"
            />
            <button
              type="button"
              class="btn__duplicate btn--primary"
              id="btn__search"
              @click="searchCafe"
            >
              검색
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="card__wrapper--column">
      <div v-for="(cafe, index) in cafes" :key="index" class="recommend__card">
        <div>
          <span @click="submitCafeInfo(index)" class="card__name">{{
            cafe.title
          }}</span>
          <span class="card__addr">{{ cafe.roadAddress }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { searchCafe } from "@/api/index";

export default {
  created() {
    let headerActive = true;
    this.$store.commit("isHeaderActive", headerActive);
  },
  data() {
    return {
      cafeData: "",
      cafes: [],
    };
  },
  methods: {
    async searchCafe() {
      try {
        const cafeData = await searchCafe(this.cafeData);
        /* this.cafes [{title: ''},{title: ''}]*/
        this.cafes = cafeData.data.items;
        this.cafes = this.cafes.map((cafe) => {
          cafe.title = cafe.title.replaceAll("<b>", "").replaceAll("</b>", "");
          return cafe;
        });
        // this.cafes.title = this.cafes.title
        //   .replaceAll("<b>", "")
        //   .replaceAll("</b>", "");
        // this.cafes.title;
        // this.cafes.name = cafeData.data.items.title;
        // this.cafes.roadaddr = cafeData.data.items.roadAddress;
        console.log(cafeData.data.items[0]);
      } catch (error) {
        console.log(error);
      }
    },
    submitCafeInfo(index) {
      const cafeInfo = this.cafes[index];

      // const test = new window.naver.maps();
      // console.log("test", test);
      // const tm128 = NaverMaps.maps.fromNaverToLatLng({
      //   mapx: cafeInfo.mapx,
      //   mapy: cafeInfo.mapy,
      // });
      // console.log(tm128);
      // // const latLng = tm128.toLatLng(); //window.naver.maps.TransCoord.fromTM128ToLatLng(tm128);
      // cafeInfo.mapx = tm128.x;
      // cafeInfo.mapy = tm128.y;
      this.$emit("submitCafeInfo", cafeInfo);
      this.$router.push("/cafes/report");
    },
  },
};
</script>

<style></style>

<template>
  <div class="cafe-view">
    <router-view
      @fetchInfo="fetchInfo"
      @fetchResult="fetchResult"
      :registered="registered"
      :cafeInfo="cafeInfo"
      :cafeList="cafeList"
    ></router-view>
  </div>
</template>

<script>
export default {
  created() {
    let headerActive = true;
    this.$store.commit("isHeaderActive", headerActive);
  },
  data() {
    return {
      cafeInfo: [],
      // 등록된 카페 검색 했을 때 정보
      cafeList: [],
      registered: {
        type: Boolean,
      },
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
  },
};
</script>

<style></style>

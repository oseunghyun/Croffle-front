<template>
  <div>
    <router-view
      @fetchStamp="fetchStamp"
      :stampInfo="stampInfo"
      @setMessage="setMessage"
      :message="message"
      @fetchInfo="fetchInfo"
      :cafeInfo="cafeInfo"
      @setCafeId="setCafeId"
      :cafeId="cafeId"
    ></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cafeInfo: [],
      message: "",
      stampInfo: {
        type: Object,
      },
      cafeId: 0,
    };
  },
  methods: {
    fetchInfo(data) {
      this.cafeInfo = data;
    },
    setMessage(message) {
      this.message = message;
    },
    fetchStamp(stampInfo) {
      this.stampInfo = stampInfo;
    },
    setCafeId(cafeId) {
      this.cafeId = cafeId;
    },
  },
  created() {
    let headerActive = false;
    this.$store.commit("isHeaderActive", headerActive);
  },
};
</script>

<style></style>

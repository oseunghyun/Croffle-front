<template>
  <div>
    <router-view
      @fetchStamp="fetchStamp"
      :stampInfo="stampInfo"
      @setMessage="setMessage"
      :message="message"
      @fetchInfo="fetchInfo"
      :cafeInfo="cafeInfo"
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
  },
  created() {
    let headerActive = false;
    this.$store.commit("isHeaderActive", headerActive);
  },
};
</script>

<style></style>

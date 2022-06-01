<template>
  <div>
    <router-view
      @fetchStamp="fetchStamp"
      :stampInfo="stampInfo"
      @setMessage="setMessage"
      :message="message"
    ></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      stampInfo: {
        type: Object,
      },
    };
  },
  methods: {
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

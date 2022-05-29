<template>
  <router-view
    @submitCafeInfo="submitCafeInfo"
    :cafeInfo="cafeInfo"
  ></router-view>
</template>

<script>
export default {
  data() {
    return {
      cafeInfo: [],
    };
  },
  methods: {
    submitCafeInfo(cafeInfo) {
      this.cafeInfo = cafeInfo;
    },
  },
};
</script>

<style></style>

<template>
  <div class="cafe-view">
    <router-view @fetchInfo="fetchInfo" :cafeInfo="cafeInfo"></router-view>
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
    };
  },
  methods: {
    fetchInfo(data) {
      this.cafeInfo = data;
    },
  },
};
</script>

<style></style>

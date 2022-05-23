<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    let headerActive = false;
    this.$store.commit("isHeaderActive", headerActive);
  },
};
</script>

<style></style>

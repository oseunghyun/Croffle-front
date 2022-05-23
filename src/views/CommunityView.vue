<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    let headerActive = true;
    this.$store.commit("isHeaderActive", headerActive);
  },
};
</script>

<style></style>

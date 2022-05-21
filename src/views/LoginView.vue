<template>로그인</template>

<script>
export default {
  created() {
    let headerActive = false;
    this.$store.commit("isHeaderActive", headerActive);
  },
};
</script>

<style></style>

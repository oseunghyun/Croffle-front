<template>
  <div>
    <router-view @setMessage="setMessage" :message="message"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    setMessage(message) {
      this.message = message;
    },
  },
  created() {
    let headerActive = false;
    this.$store.commit("isHeaderActive", headerActive);
  },
};
</script>

<style></style>

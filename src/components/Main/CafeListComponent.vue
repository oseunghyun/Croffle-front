<template>
  <div id="cafe-list" class="container">
    <div class="card__wrapper--column">
      <div
        v-for="cafe in cafeList"
        :key="cafe.id"
        class="cafe__card"
        @click="toCafeDetail"
      >
        <span class="text__name">{{ cafe.name }} </span>
        <span class="text__addr">{{ cafe.addr }} </span>
      </div>
    </div>
    <button @click="$emit('close-page')">
      <i class="far fa-times-circle fa-2x"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    cafeList: [],
  },
  methods: {
    toCafeDetail() {
      const cafeId = this.cafeList.id;
      this.$router.push(`/cafe/${cafeId}`);
    },
  },
};
</script>

<style></style>

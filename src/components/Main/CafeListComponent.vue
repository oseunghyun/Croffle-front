<template>
  <div id="cafe-list" class="container">
    <div class="card__wrapper--column">
      <div v-for="cafe in cafeList" :key="cafe.id" class="cafe__card">
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
    cafeList: Array,
  },
};
</script>

<style></style>

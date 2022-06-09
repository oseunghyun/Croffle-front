<template>
  <div id="cafe-list" class="container">
    <div class="card__wrapper--column">
      <div v-for="cafe in cafes" :key="cafe.id" class="cafe__card">
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
    return {
      cafes: [
        {
          name: "카페 이름",
          addr: "주소",
        },
        {
          name: "카페 이름",
          addr: "주소",
        },
      ],
    };
  },
  props: {
    cafeList: [],
  },
};
</script>

<style></style>

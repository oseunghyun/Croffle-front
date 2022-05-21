<template>
  <div class="mypage-scrap">
    <header>
      <h1>예정된 원정</h1>
      <span>{{ cnt }} </span>
    </header>
    <div class="card__wrapper--column">
      <div class="card">
        <span class="card__title">{{ cafe.name }}</span>
        <span class="card__text">{{ cafe.addr }}</span>
      </div>
      <div class="card">
        <span class="card__title">{{ cafe.name }}</span>
        <span class="card__text">{{ cafe.addr }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cnt: 4,
      cafe: {
        name: "헬로우 크로플",
        addr: "서울특별시 성북구 보문로 34다길 87",
      },
    };
  },
};
</script>

<style></style>

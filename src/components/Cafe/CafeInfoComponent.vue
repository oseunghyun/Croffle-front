<template>
  <div id="cafe-page">
    <div class="cafe-info">
      <span class="cafe__name">{{ cafe.name }}</span>
      <span class="cafe__address">{{ cafe.address }}</span>
    </div>
    <div class="cafe-info__detail">
      <div class="cafe-info__wrapper">
        <label>전화번호</label>
        <span>{{ cafe.telephone }}</span>
      </div>
      <div class="cafe-info__wrapper">
        <label>운영시간</label>
        <span>{{ cafe.hours }}</span>
      </div>
      <div class="cafe-info__wrapper">
        <label>SNS</label>
        <span>{{ cafe.site }}</span>
      </div>
    </div>
    <p class="guide">
      이 가게에서 크로플을 파나요?<br>
      원정대를 위해 제보해주세요!
    </p>
    <button class="btn--primary">제보하기 +</button>
    <button class="btn--border">리뷰 작성하기 +</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cafe: {
        name: "카페이름",
        address: '카페주소',
        telephone: '전화번호',
        hours: '운영시간',
        site: 'sns'
      }
    }
  },
}
</script>

<style>

</style>
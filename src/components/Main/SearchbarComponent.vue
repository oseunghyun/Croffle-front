<template>
  <div id="searchbar">
    <div class="searchbar__address"><img :src="ic_position">
      <span>
        <strong>현재 위치</strong>
      </span>
      <span class="address">
        {{ address }}
      </span>
    </div>
    <div class="input__box">
      <input placeholder="크로플 원정을 떠날 지역, 카페를 검색해주세요.">
      <button @click="search"><img :src="ic_magnifier"></button>
    </div>
  </div>
</template>

<script>
import ic_position from '@/assets/ic/position.svg';
import ic_magnifier from '@/assets/ic/magnifier.svg';
export default {
  data() {
    return {
      ic_position, 
      ic_magnifier,
      address: "서울특별시 성북구"
    }
  },
}
</script>

<style>

</style>
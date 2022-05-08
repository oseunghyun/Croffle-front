<template>
  <div id="cafe-menu">
    <span>메뉴</span>
    <p class="guide">
      아래 버튼을 눌러 크로플 메뉴 추가 제보 또는<br>
      카페 정보 수정 제보를 해주세요!
    </p>
    <div class="menu__list"> 
      <div class="menu-info__wrapper">
        <span class="menus__name">{{ menus.name }}</span>
        <span class="menus__price">{{ menus.price }}</span>
      </div>
      <div class="menu-info__wrapper">
        <span class="menus__name">{{ menus.name }}</span>
        <span class="menus__price">{{ menus.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: {
        name: '메뉴이름',
        price: '가격'
      }
    }
  },
}
</script>

<style>

</style>
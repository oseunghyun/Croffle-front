<template>
  <div id="cafe-menu">
    <span>메뉴</span>
    <p class="guide">
      아래 버튼을 눌러 크로플 메뉴 추가 제보 또는<br />
      카페 정보 수정 제보를 해주세요!
    </p>
    <div class="menu__list">
      <div v-for="menu in menuList" :key="menu" class="menu-info__wrapper">
        <span class="menus__name">{{ menu.menu_name }}</span>
        <span class="menus__price">{{ menu.menu_price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuList: {
      type: Array,
    },
  },
};
</script>

<style></style>

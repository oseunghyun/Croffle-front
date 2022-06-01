<template>
  <div class="owner">
    <header class="owner__header">
      <h1>메뉴 관리</h1>
      <span>메뉴를 관리해주세요.</span>
    </header>
    <cafe-menu-component
      :menuList="menuList"
      class="cafe-menu-component"
    ></cafe-menu-component>
    <div class="btn__wrapper">
      <button type="button" class="btn--primary" @click="modifyMenu">
        수정하기
      </button>
      <button type="button" class="btn--border" @click="addMenu">
        추가하기
      </button>
    </div>
  </div>
</template>

<script>
import CafeMenuComponent from "@/components/Cafe/CafeMenuComponent.vue";
import { fetchOwnerMenu } from "@/api/owner";
export default {
  data() {
    return {
      menuList: [
        {
          menu_name: "메뉴1",
          menu_price: "가격",
        },
        {
          menu_name: "메뉴2",
          menu_price: "가격",
        },
      ],
    };
  },
  components: {
    CafeMenuComponent,
  },
  created() {
    this.fetchOwnerMenu();
  },
  methods: {
    modifyMenu() {
      this.$router.push("/owner/menumodify");
    },
    addMenu() {
      this.$router.push("/owner/menuadd");
    },
    // 메뉴 조회
    async fetchOwnerMenu() {
      try {
        console.log("사장님 메뉴 조회");
        const { ownerMenuData } = await fetchOwnerMenu();
        this.menuList = ownerMenuData.body.menu;
        console.log(this.menuList);
      } catch (error) {
        console.log("error.message");
      }
    },
  },
};
</script>

<style></style>

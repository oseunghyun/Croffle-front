<template>
  <div class="owner">
    <header class="owner__header">
      <h1>메뉴 관리</h1>
      <span>메뉴를 관리해주세요.</span>
    </header>
    <div id="cafe-menu">
      <p class="guide">
        아래 버튼을 눌러 메뉴 수정 또는<br />
        메뉴 추가를 해주세요!
      </p>
      <div class="menu__list">
        <div v-for="menu in menuList" :key="menu" class="menu-info__wrapper">
          <span class="menus__name">{{ menu.menuName }}</span>
          <span class="menus__price">{{ menu.menuPrice }}</span>
        </div>
      </div>
    </div>

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
// import { fetchOwnerMenu } from "@/api/owner";
import axios from "axios";
export default {
  data() {
    return {
      menuList: [
        {
          menuName: "메뉴1",
          menuPrice: "가격",
        },
        {
          menuName: "메뉴2",
          menuPrice: "가격",
        },
        {
          menuName: "메뉴2",
          menuPrice: "가격",
        },
      ],
    };
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
        // const { data } = await fetchOwnerMenu();
        const { data } = await axios.get("http://34.64.139.239/owner/menus", {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        });
        this.menuList = data.data;
        console.log(this.menuList);
      } catch (error) {
        console.log("error.message");
      }
    },
  },
};
</script>

<style></style>

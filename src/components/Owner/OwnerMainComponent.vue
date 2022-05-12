<template>
  <div id="owner-main">
    <header>
      <img :src="logo_owner" />
    </header>
    <div class="sub-header">
      <div>
        <h2>환영합니다 :)</h2>
        <span class="cafe-name">{{ cafe.cafe_name }}</span
        ><span class="cafe-owner"> 사장님</span>
      </div>
      <img :src="logo_img" />
    </div>
    <div class="btn__wrapper">
      <button @click="toOwnerCafe" class="btn--border btn--lg">
        매장 관리
      </button>
      <button @click="toOwnerMenu" class="btn--border btn--lg">
        메뉴 관리
      </button>
      <button @click="toOwnerStamp" class="btn--border btn--lg">
        스탬프 찍어주기
      </button>
    </div>
  </div>
</template>

<script>
import logo_owner from "@/assets/Image/logo_owner.svg";
import logo_img from "@/assets/Image/logo_img.svg";
export default {
  data() {
    return {
      logo_owner,
      logo_img,
      cafe: {
        cafe_name: "헬로우 크로플",
      },
    };
  },
  methods: {
    toOwnerCafe() {
      this.$router.push("/owner/cafe");
    },
    toOwnerMenu() {
      this.$router.push("/owner/menu");
    },
    toOwnerStamp() {
      this.$router.push("/owner/checkmember");
    },
  },
};
</script>

<style></style>

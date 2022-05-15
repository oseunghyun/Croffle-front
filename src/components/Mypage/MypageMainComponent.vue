<template>
  <div class="mypage-main">
    <header class="page-title">마이 페이지</header>
    <div class="mypage__wrapper">
      <div class="mypage__user-info">
        <span class="mypage-main__text-croffler">Croffler&nbsp;&nbsp; </span
        ><span class="mypage-main__text-id"
          >{{ user.id }} <strong> 님&nbsp;&nbsp;</strong></span
        >
        <button type="button" @click="editInfo" class="btn--sm btn--border">
          수정<img :src="ic_edit" />
        </button>
      </div>
      <p>크로플 원정을 떠나 보시겠어요?</p>
    </div>
    <div class="btn__wrapper">
      <button
        type="button"
        @click="showScrapedList"
        :class="['btn--transparent', isActive1 ? 'active' : 'inActive']"
      >
        예정된 원정
      </button>
      <button
        type="button"
        @click="showCouponList"
        :class="['btn--transparent', isActive2 ? 'active' : 'inActive']"
      >
        내 쿠폰
      </button>
    </div>
  </div>
</template>

<script>
import ic_edit from "@/assets/ic/edit.svg";
export default {
  data() {
    return {
      ic_edit,
      user: {
        id: "hello",
      },
      isActive1: true,
      isActive2: false,
    };
  },
  methods: {
    editInfo() {
      this.$router.push("/mypage/changenickname");
    },
    showScrapedList() {
      let activeList = "1";
      this.$emit("showList", activeList);
      this.isActive1 = true;
      this.isActive2 = false;
    },
    showCouponList() {
      let activeList = "2";
      this.$emit("showList", activeList);
      this.isActive1 = false;
      this.isActive2 = true;
    },
  },
};
</script>

<style></style>

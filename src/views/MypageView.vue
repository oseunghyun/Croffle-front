<template>
  <div>
    <router-view
      @showList="showList"
      :activeList="activeList"
      @setMessage="setMessage"
      :message="message"
    ></router-view>
    <scraped-list-component v-if="activeList == 1"></scraped-list-component>
    <coupon-list-component
      v-else-if="activeList == 2"
      @modalActive="modalActive"
      :isModalActive="isModalActive"
    ></coupon-list-component>
    <modal-component v-if="isModalActive" :couponData="couponData">
      <coupon-modal-content
        @close-modal="isModalActive = false"
        :couponData="couponData"
      />
    </modal-component>
  </div>
</template>

<script>
import ScrapedListComponent from "@/components/Mypage/ScrapedListComponent.vue";
import CouponListComponent from "@/components/Mypage/CouponListComponent.vue";
import ModalComponent from "../components/Modal/ModalComponent.vue";
import CouponModalContent from "../components/Modal/CouponModalContent.vue";

export default {
  components: {
    ScrapedListComponent,
    CouponListComponent,
    ModalComponent,
    CouponModalContent,
  },
  data() {
    return {
      message: "",
      activeList: 1,
      isModalActive: false,
      couponData: [],
    };
  },
  methods: {
    setMessage(message) {
      this.message = message;
    },
    showList(activeList) {
      this.activeList = activeList;
    },
    modalActive(isModalActive, couponData) {
      this.isModalActive = isModalActive;
      this.couponData = couponData;
    },
  },
  created() {
    let headerActive = false;
    this.$store.commit("isHeaderActive", headerActive);
  },
};
</script>

<style></style>

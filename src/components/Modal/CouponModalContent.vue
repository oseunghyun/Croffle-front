<template>
  <div class="content-mypage">
    <div class="btn__close">
      <button
        type="button"
        class="btn--transparent"
        @click="$emit('close-modal')"
      >
        <img :src="ic__close" />
      </button>
    </div>
    <div class="content__wrapper">
      <div class="content__wrapper--text">
        <img :src="ic__ticket" />
        <span class="card__title">{{ couponData.cafeName }}</span>
        <span class="card__text--benefit">{{ couponData.benefit }}</span>
        <span class="card__text--expire">{{ couponData.expiredDate }}</span>
      </div>

      <input placeholder="사장님 아이디를 입력하세요." v-model="ownerId" />
      <button
        type="button"
        :class="['btn--md', isValid ? 'btnPrimary' : 'btnDisabled']"
        :disabled="isValid == false"
        @click="useCoupon"
      >
        사용하기
      </button>
    </div>
  </div>
</template>

<script>
import ic__close from "@/assets/ic/close.svg";
import ic__ticket from "@/assets/ic/ticket.svg";
// import { useCoupon } from "@/api/mypage";
import axios from "axios";

export default {
  name: "ModalContent",
  props: {
    msg: String,
    couponData: Object,
  },
  created() {
    console.log("쿠폰 데이터", this.couponData);
  },
  data() {
    return {
      ic__close,
      ic__ticket,
      ownerId: "",
    };
  },
  computed: {
    isValid() {
      return this.ownerId != "";
    },
  },
  methods: {
    // 크로플 메뉴 추가 제보 버튼 이벤트
    addReport() {
      this.$emit("close-modal");
    },
    // 카페 정보 수정 이벤트
    modifyReport() {
      this.$emit("close-modal");
    },
    // 쿠폰 사용하기
    async useCoupon() {
      try {
        console.log("쿠폰 사용");
        // const { data } = await useCoupon(this.couponData.cafeId);
        const { data } = await axios.delete(
          `http://34.64.139.239/coupon/use?couponId=${this.couponData.cafeId}`,

          {
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          }
        );

        console.log(data.message);
        this.$emit("close-modal");
      } catch (error) {
        console.log(error.message);
        this.$emit("close-modal");
      }
    },
  },
};
</script>

<style></style>

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
        <span class="card__title">{{ coupons.cafe_name }}</span>
        <span class="card__text--benefit">{{ coupons.benefit }}</span>
        <span class="card__text--expire">{{ coupons.expire_date }}</span>
      </div>

      <input placeholder="사장님 아이디를 입력하세요." />
      <button type="button" class="btn--primary" @click="addReport">
        사용하기
      </button>
    </div>
  </div>
</template>

<script>
import ic__close from "@/assets/ic/close.svg";
import ic__ticket from "@/assets/ic/ticket.svg";
export default {
  name: "ModalContent",
  props: {
    msg: String,
  },
  data() {
    return {
      ic__close,
      ic__ticket,
      coupons: {
        cafe_name: "엔드테라스",
        benefit: "아메리카노(HOT/ICE) 1잔 무료",
        expire_date: "2022-0411 ~ 2022-05-11",
      },
    };
  },
  methods: {
    // 크로플 메뉴 추가 제보 버튼 이벤트
    addReport() {
      this.$emit("close-modal");
      this.$router.push("/report/add");
    },
    // 카페 정보 수정 이벤트
    modifyReport() {
      this.$emit("close-modal");
      this.$router.push("/report/modify");
    },
  },
};
</script>

<style></style>

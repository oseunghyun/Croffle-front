<template>
  <div class="mypage-membership">
    <div class="mypage-stamp">
      <header>
        <h1>내가 모은 스탬프</h1>
        <span>{{ cnt.stamp }} </span>
      </header>
      <div class="card__wrapper--column">
        <div class="card">
          <span class="card__title">{{ stamps.cafe_name }}</span>
          <span class="card__text">{{ stamps.stamp_count }}</span>
        </div>
        <div class="card">
          <span class="card__title">{{ stamps.cafe_name }}</span>
          <span class="card__text">{{ stamps.stamp_count }}</span>
        </div>
      </div>
    </div>
    <div class="mypage-coupon">
      <header>
        <h1>내가 모은 쿠폰</h1>
        <span>{{ cnt.coupon }} </span>
      </header>
      <div class="card__wrapper--column">
        <div class="card">
          <span @click="modalActive" class="card__title">
            {{ coupons.cafe_name }}
          </span>
          <span class="card__text">{{ coupons.benefit }}</span>
          <span class="card__text">{{ coupons.expire_date }}</span>
        </div>
        <div class="card">
          <span class="card__title">{{ coupons.cafe_name }}</span>
          <span class="card__text">{{ coupons.benefit }}</span>
          <span class="card__text">{{ coupons.expire_date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cnt: {
        stamp: 3,
        coupon: 1,
      },
      stamps: {
        cafe_name: "엔드테라스",
        stamp_count: "3",
      },
      coupons: {
        cafe_name: "엔드테라스",
        benefit: "아메리카노(HOT/ICE) 1잔 무료",
        expire_date: "2022-0411 ~ 2022-05-11",
      },
    };
  },
  methods: {
    modalActive() {
      let isModalActive = true;
      this.$emit("modalActive", isModalActive);
    },
  },
};
</script>

<style></style>

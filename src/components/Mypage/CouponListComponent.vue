<template>
  <div class="mypage-membership">
    <!-- 스탬프 -->
    <div class="mypage-stamp">
      <header>
        <h1>내가 모은 스탬프</h1>
        <span>{{ stampData.length }} </span>
      </header>
      <div class="card__wrapper--column">
        <div v-for="(stamp, index) in stampData" :key="index" class="card">
          <span class="card__title">{{ stamp.cafe_name }}</span>

          <!-- <span class="card__text">{{ stamp.stamp_count }}</span> -->
          <div class="stamp-list">
            <i v-for="i in 10" :key="i" class="fas fa-stroopwafel fa-3x"></i>
          </div>
          <div class="stamp-list">
            <i
              v-for="j in stampData[index].stamp_count"
              :key="j"
              class="fas fa-stroopwafel fa-3x stampActive"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 쿠폰 -->
    <div class="mypage-coupon">
      <header>
        <h1>내가 모은 쿠폰</h1>
        <span>{{ couponData.length }} </span>
      </header>
      <div class="card__wrapper--column">
        <div v-for="(coupon, index) in couponData" :key="index" class="card">
          <span @click="modalActive(index)" class="card__title">
            {{ coupon.cafe_name }}
          </span>
          <span class="card__text">{{ coupon.benefit }}</span>
          <span class="card__text">{{ coupon.expire_date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchStamps, fetchCoupons } from "@/api/mypage";

export default {
  data() {
    return {
      coupons: {
        cafe_name: "엔드테라스",
        benefit: "아메리카노(HOT/ICE) 1잔 무료",
        expire_date: "2022-0411 ~ 2022-05-11",
      },
      stampData: [
        {
          cafe_name: "엔드테라스",
          stamp_count: 3,
        },
        {
          cafe_name: "엔드테라스",
          stamp_count: 2,
        },
      ],
      // 더미 데이터
      couponData: [
        {
          id: 1,
          cafe_name: "엔드테라스",
          benefit: "아메리카노(HOT/ICE) 1잔 무료",
          expire_date: "2022-04-11 ~ 2022-05-11",
        },
        {
          id: 2,
          cafe_name: "메가 커피",
          benefit: "아메리카노(HOT/ICE) 1잔 무료",
          expire_date: "2022-04-11 ~ 2022-05-11",
        },
      ],
    };
  },
  created() {
    this.fetchStamps();
    this.fetchCoupons();
  },
  methods: {
    modalActive(index) {
      let isModalActive = true;
      let couponData = this.couponData[index];
      this.$emit("modalActive", isModalActive, couponData);
    },
    // 카페 별 모은 스탬프 리스트 보기
    async fetchStamps() {
      try {
        console.log("스탬프 조회");
        const { stampData } = await fetchStamps();
        this.stampData = stampData.body.stamps;
        console.log(this.stampData);
      } catch (error) {
        console.log(error.message);
      }
    },
    // 카페 별 모은 쿠폰 리스트 전체 보기
    async fetchCoupons() {
      try {
        console.log("쿠폰 조회");
        const { couponData } = await fetchCoupons();
        this.couponData = couponData.body.coupons;
        console.log(this.couponData);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>

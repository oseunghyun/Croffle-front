<template>
  <div>
    <!-- 카페 정보 -->
    <div id="cafe-page">
      <div class="cafe-info">
        <span class="cafe__name">{{ cafeInfo.name }}</span>
        <span class="cafe__address">{{ cafeInfo.roadaddr }}</span>
        <button type="button" class="cafe__btn-like" @click="scrapCafe">
          좋아요&nbsp;<i :class="['fa-heart', liked ? 'fas' : 'far']"></i>
        </button>
      </div>
      <div class="cafe-info__detail">
        <div class="cafe-info__wrapper">
          <label>전화번호</label>
          <span>{{ cafeInfo.telephone }}</span>
        </div>
        <div class="cafe-info__wrapper">
          <label>운영시간</label>
          <span>{{ cafeInfo.hours }}</span>
        </div>
        <div class="cafe-info__wrapper">
          <label>SNS</label>
          <span>{{ cafeInfo.site }}</span>
        </div>
      </div>
      <!-- <p class="guide">
        이 가게에서 크로플을 파나요?<br />
        원정대를 위해 제보해주세요!
      </p> -->
    </div>
    <!-- 카페 메뉴 -->
    <div id="cafe-menu">
      <span>메뉴</span>
      <p class="guide">
        아래 버튼을 눌러 크로플 메뉴 추가 제보 또는<br />
        카페 정보 수정 제보를 해주세요!
      </p>
      <div class="menu__list">
        <div
          class="menu-info__wrapper"
          v-for="menu in cafeInfo.menus"
          :key="menu"
        >
          <span class="menus__name">{{ cafeInfo.menus.name }}</span>
          <span class="menus__price">{{ cafeInfo.menus.price }}</span>
        </div>
      </div>
    </div>
    <!-- 메뉴 제보 버튼 -->
    <button type="button" @click="isModalActive = true" class="btn--primary">
      제보하기 +
    </button>
    <!-- 리뷰 조회 -->
    <div class="review__wrapper">
      <span
        >리뷰&nbsp;&nbsp;<strong>{{ reviewData.length }}</strong></span
      >
      <div
        v-for="(review, index) in reviewData"
        :key="index"
        class="review__card"
      >
        <div class="card__info">
          <div class="card__user">
            <div class="text__nickname">
              {{ review.author }}
            </div>
            <div class="text__date">{{ review.createdate }}</div>
          </div>
          <div class="rate__stars">
            <i
              v-for="i in reviewData[index].rate"
              :key="i"
              class="fas fa-star fa-1x"
            ></i>
          </div>
          <div class="text__content">
            {{ review.content }}
          </div>
        </div>
      </div>
    </div>
    <!-- 카페 제보 버튼 -->
    <button type="button" @click="toReviewForm" class="btn--border">
      리뷰 작성하기 +
    </button>
    <!-- 모달 -->
    <modal-component v-if="isModalActive">
      <modal-content @close-modal="isModalActive = false" />
    </modal-component>
  </div>
</template>

<script>
import ModalComponent from "@/components/Modal/ModalComponent.vue";
import ModalContent from "@/components/Modal/ModalContent.vue";
import { likeCafe, delLikeCafe, fetchLikedList } from "@/api/like";
import { fetchReview } from "@/api/review";
import { fetchCafeInfo } from "@/api/cafe";

export default {
  created() {
    this.fetchCafeInfo();
  },
  components: {
    ModalComponent,
    ModalContent,
  },
  data() {
    return {
      isModalActive: false,
      isHeaderActive: true,
      liked: false,
      reviewData: [
        {
          nickname: "씽씽",
          date: "2022.04.01",
          content:
            "냉동 생지 사다가 만드는게 아니라 사장님이 직접 만든 반죽으로 하심",
          rate: 3,
        },
        {
          nickname: "씽씽",
          date: "2022.04.01",
          content:
            "냉동 생지 사다가 만드는게 아니라 사장님이 직접 만든 반죽으로 하심",
          rate: 2,
        },
      ],
      cafeInfo: {
        id: 0,
        name: "밀크북",
        roadaddr: "서울특별시 성북구 80로 ",
        telephone: "02-345-6720",
        hours: "오전 10시 부터 오후 8시 까지",
        site: "",
      },
    };
  },
  methods: {
    // 리뷰 작성 페이지로 이동
    toReviewForm() {
      this.$router.push(`/cafe/${this.$route.params.id}/review`);
    },
    // 리뷰 조회
    async fetchReview() {
      console.log("리뷰 조회");
      try {
        const reviewData = await fetchReview(this.$route.params.id);
        this.reviewsData = reviewData.reviews;
      } catch (error) {
        console.log(error);
      }
    },
    // 내가 이 카페 좋아요 했는지 여부 조회
    async checkLike() {
      try {
        const { likedData } = await fetchLikedList;
        likedData.some(function findCafe(element) {
          if (element.id == this.$route.params.id) {
            return (this.liked = true);
          } else {
            return (this.liked = false);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    // 좋아요
    async scrapCafe() {
      if (this.liked == false) {
        try {
          console.log("좋아요");
          await likeCafe(this.$route.params.id);
          this.liked = !this.liked;
        } catch (error) {
          console.log(error.message);
        }
      } else {
        try {
          console.log("좋아요 취소");
          await delLikeCafe(this.$route.params.id);
          this.liked = !this.liked;
        } catch (error) {
          console.log(error.message);
        }
      }
    },
    // 카페 상세정보 조회
    async fetchCafeInfo() {
      try {
        console.log("카페 상세정보 조회");
        const { data } = await fetchCafeInfo(this.$route.params.id);
        this.cafeInfo = data.data;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>

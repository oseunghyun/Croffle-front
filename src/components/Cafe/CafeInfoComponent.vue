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
      <p class="guide">
        이 가게에서 크로플을 파나요?<br />
        원정대를 위해 제보해주세요!
      </p>
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
        >리뷰&nbsp;&nbsp;<strong>{{ reviews.length }}</strong></span
      >
      <div v-for="(review, index) in reviews" :key="index" class="review__card">
        <div class="card__info">
          <div class="card__user">
            <div class="text__nickname">
              {{ review.nickname }}
            </div>
            <div class="text__date">{{ review.date }}</div>
          </div>
          <div class="rate__stars">
            <i
              v-for="i in reviews[index].rate"
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
import { fetchReview, likeCafe, delLikeCafe } from "@/api/index";

export default {
  created() {
    console.log(this.$route.query.id);
  },
  components: {
    ModalComponent,
    ModalContent,
  },
  props: {
    cafeInfo: {
      type: Object,
    },
  },
  data() {
    return {
      isModalActive: false,
      isHeaderActive: true,
      reviews: [
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
      liked: true,
    };
  },
  methods: {
    toReviewForm() {
      this.$router.push("/cafe/review");
    },
    async fetchReview() {
      console.log("리뷰 조회");
      try {
        const reviewData = await fetchReview();
        this.reviews.nickname = reviewData.reviews.author;
        this.reviews.date = reviewData.reviews.createdate;
        this.reviews.content = reviewData.reviews.content;
        this.reviews.rate = reviewData.reviews.rate;
      } catch (error) {
        console.log(error);
      }
    },
    // 스크랩
    async scrapCafe() {
      console.log("스크랩하는 카페 id 출력");
      this.liked = !this.liked;
      // 좋아요 취소
      if (this.liked == false) {
        try {
          console.log("스크랩 취소");
          await likeCafe({
            // 카페 아이디 값 넣어주기
            cafe: this.id,
          });
        } catch (error) {
          console.log(error.message);
        }
        // 좋아요 하기
      } else {
        try {
          console.log("스크랩 하기");
          await delLikeCafe({
            // 카페 아이디 값 넣어주기
            cafe: this.id,
          });
        } catch (error) {
          console.log(error.message);
        }
      }
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <!-- 카페 정보 -->
    <div id="cafe-page">
      <div class="cafe-info">
        <span class="cafe__name">{{ cafeInfo.name }}</span>
        <span class="cafe__address">{{ cafeInfo.roadaddr }}</span>
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
    <!-- 버튼 -->
    <button type="button" @click="isModalActive = true" class="btn--primary">
      제보하기 +
    </button>
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

export default {
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
    };
  },
  methods: {
    toReviewForm() {
      this.$router.push("/cafe/review");
    },
  },
};
</script>

<style></style>

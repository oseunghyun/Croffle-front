<template>
  <div>
    <!-- 메인 헤더 -->
    <main-header
      @showCommunity="showCommunity"
      @showHome="showHome"
      @showRecommend="showRecommend"
      :pageNum="pageNum"
    ></main-header>
    <!-- 검색 바 -->
    <searchbar-component v-if="pageNum == 1"></searchbar-component>
    <main-component v-if="pageNum == 1" @toDetail="toDetail" :pageNum="pageNum">
    </main-component>
    <!-- 1. 카페 상세 페이지 -->
    <div class="cafe-view" v-if="pageNum == 6">
      <cafe-info-component></cafe-info-component>
      <cafe-menu-component></cafe-menu-component>
      <button type="button" @click="isModalActive = true" class="btn--primary">
        제보하기 +
      </button>
      <button type="button" @click="toWriteReview" class="btn--border">
        리뷰 작성하기 +
      </button>
      <modal-component v-if="isModalActive">
        <modal-content @close-modal="isModalActive = false" />
      </modal-component>
    </div>
    <!-- 2.추천 게시판 -->
    <recommend-board-component v-if="pageNum == 2"></recommend-board-component>
    <!-- 3. 커뮤니티 게시판 -->
    <community-board-component
      @showForm="showForm"
      @showPost="showPost"
      :pageNum="pageNum"
      v-if="pageNum == 3"
    ></community-board-component>
    <community-form-component
      @submitForm="submitForm"
      v-if="pageNum == 4"
    ></community-form-component>
    <community-post-component
      @showDelModal="showDelModal"
      @modifyForm="modifyForm"
      :pageNum="pageNum"
      :isDelModalActive="isDelModalActive"
      v-if="pageNum == 5"
    ></community-post-component>
    <modal-component v-if="isDelModalActive">
      <del-modal-content @close-modal="isDelModalActive = false" />
    </modal-component>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import SearchbarComponent from "../components/Main/SearchbarComponent.vue";
import CafeMenuComponent from "../components/Cafe/CafeMenuComponent.vue";
import CafeInfoComponent from "../components/Cafe/CafeInfoComponent.vue";
import ModalComponent from "../components/Modal/ModalComponent.vue";
import ModalContent from "../components/Modal/ModalContent.vue";
import CommunityFormComponent from "@/components/Community/CommunityFormComponent.vue";
import CommunityBoardComponent from "@/components/Community/CommunityBoardComponent.vue";
import CommunityPostComponent from "@/components/Community/CommunityPostComponent.vue";
import DelModalContent from "@/components/Modal/DelModalContent.vue";
import RecommendBoardComponent from "@/components/Recommend/RecommendBoardComponent.vue";
import MainComponent from "@/components/Main/MainComponent.vue";

export default {
  components: {
    MainHeader,
    SearchbarComponent,
    CafeMenuComponent,
    CafeInfoComponent,
    ModalComponent,
    ModalContent,
    CommunityFormComponent,
    CommunityBoardComponent,
    CommunityPostComponent,
    DelModalContent,
    RecommendBoardComponent,
    MainComponent,
  },
  data() {
    return {
      page: "main",
      isModalActive: false,
      isDelModalActive: false,
      pageNum: 1,
    };
  },
  methods: {
    toWriteReview() {
      this.$router.push("/review");
    },
    showCommunity(pageNum) {
      this.pageNum = pageNum;
    },
    showHome(pageNum) {
      this.pageNum = pageNum;
    },
    showRecommend(pageNum) {
      this.pageNum = pageNum;
    },
    showForm(pageNum) {
      this.pageNum = pageNum;
    },
    submitForm(pageNum) {
      this.pageNum = pageNum;
    },
    showPost(pageNum) {
      this.pageNum = pageNum;
    },
    toDetail(pageNum) {
      this.pageNum = pageNum;
    },
    modifyForm(pageNum) {
      this.pageNum = pageNum;
    },
    showDelModal(isDelModalActive) {
      this.isDelModalActive = isDelModalActive;
    },
  },
};
</script>

<style></style>

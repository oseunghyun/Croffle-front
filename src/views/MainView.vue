<template>
  <div>
    <!-- 검색 바 -->
    <searchbar-component v-if="pageNum == 1"></searchbar-component>
    <main-component v-if="pageNum == 1"> </main-component>
    <!-- 7. 리뷰 폼 -->
    <review-form-component v-if="pageNum == 7"></review-form-component>
    <!-- 2.추천 게시판 -->
    <recommend-board-component v-if="pageNum == 2"></recommend-board-component>
    <!-- 3. 커뮤니티 게시판
    <community-board-component v-if="pageNum == 3"></community-board-component>
    <community-form-component v-if="pageNum == 4"></community-form-component>
    <community-post-component
      @showDelModal="showDelModal"
      :isDelModalActive="isDelModalActive"
      v-if="pageNum == 5" -->
    <!-- </community-post-component> -->
    <!-- <modal-component v-if="isDelModalActive">
      <del-modal-content @close-modal="isDelModalActive = false" />
    </modal-component> -->
  </div>
</template>

<script>
import SearchbarComponent from "../components/Main/SearchbarComponent.vue";
// import ModalComponent from "../components/Modal/ModalComponent.vue";

// import CommunityFormComponent from "@/components/Community/CommunityFormComponent.vue";
// import CommunityBoardComponent from "@/components/Community/CommunityBoardComponent.vue";
// import CommunityPostComponent from "@/components/Community/CommunityDetailComponent.vue";
// import DelModalContent from "@/components/Modal/DelModalContent.vue";
// import RecommendBoardComponent from "@/components/Recommend/RecommendBoardComponent.vue";
import MainComponent from "@/components/Main/MainComponent.vue";
import ReviewFormComponent from "@/components/Cafe/ReviewFormComponent.vue";

export default {
  components: {
    SearchbarComponent,
    // ModalComponent,
    // CommunityFormComponent,
    // CommunityBoardComponent,
    // CommunityPostComponent,
    // DelModalContent,
    // RecommendBoardComponent,
    MainComponent,
    ReviewFormComponent,
  },
  data() {
    return {
      page: "main",
      isDelModalActive: false,
      pageNum: 1,
    };
  },
  methods: {
    showDelModal(isDelModalActive) {
      this.isDelModalActive = isDelModalActive;
    },
  },
};
</script>

<style></style>

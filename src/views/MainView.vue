<template>
  <div>
    <main-header
      @showCommunity="showCommunity"
      @showHome="showHome"
      :pageNum="pageNum"
    ></main-header>
    <searchbar-component v-if="pageNum == 1"></searchbar-component>
    <div class="cafe-view" v-if="pageNum == 1">
      <router-view></router-view>
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
import ModalComponent from "../components/Modal/ModalComponent.vue";
import ModalContent from "../components/Modal/ModalContent.vue";
import CommunityFormComponent from "@/components/Community/CommunityFormComponent.vue";
import CommunityBoardComponent from "@/components/Community/CommunityBoardComponent.vue";
import CommunityPostComponent from "@/components/Community/CommunityPostComponent.vue";
import DelModalContent from "@/components/Modal/DelModalContent.vue";

export default {
  components: {
    MainHeader,
    SearchbarComponent,
    CafeMenuComponent,
    ModalComponent,
    ModalContent,
    CommunityFormComponent,
    CommunityBoardComponent,
    CommunityPostComponent,
    DelModalContent,
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
    showForm(pageNum) {
      this.pageNum = pageNum;
    },
    submitForm(pageNum) {
      this.pageNum = pageNum;
    },
    showPost(pageNum) {
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

<template>
  <div class="review-form">
    <header class="page-title">리뷰 작성</header>
    <form>
      <div class="input__box">
        <label for="rate">별점</label>
        <div class="btn__wrapper-stars">
          <button
            type="button"
            v-for="(ia, i) in isActive"
            :key="'start' + i"
            @click="plusRate(i)"
          >
            <i class="fas fa-star fa-3x" :class="{ active: isActive[i] }"></i>
          </button>
        </div>
      </div>
      <div class="input__box">
        <label for="content">내용</label>
        <textarea
          id="content"
          @input="content = $event.target.value"
          rows="7"
          maxlength="255"
        />
        <span class="count">{{ contentLength }}/255</span>
      </div>
    </form>
    <button
      type="button"
      @click="submitForm"
      :class="['btn--md', isValid ? 'btnPrimary' : 'btnDisabled']"
      :disabled="isValid == false"
    >
      완료
    </button>
  </div>
</template>

<script>
// import { createReview } from "@/api/review";
import axios from "axios";
export default {
  data() {
    return {
      rate: 0,
      content: "", // varchar(255)
      isActive: [false, false, false, false, false],
    };
  },
  computed: {
    isValid() {
      if (this.isActive[0] == true && this.content != "") {
        return true;
      } else {
        return false;
      }
    },
    contentLength() {
      return this.content.length;
    },
  },
  methods: {
    // 별점
    plusRate(index) {
      this.isActive = this.isActive.map((ia, idx) => {
        return idx <= index;
      });
      this.rate = this.isActive.filter((ia) => ia).length;
    },
    async submitForm() {
      try {
        console.log("리뷰하기 폼 제출");
        // const reviewData = await createReview({
        //   cafeId: this.$route.params.id,
        //   rate: this.rate,
        //   content: this.content,
        // });
        const { reviewData } = await axios.post(
          "http://34.64.139.239/review/",
          {
            cafeId: this.$route.params.id,
            rate: this.rate,
            content: this.content,
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          }
        );
        console.log(reviewData);
      } catch (error) {
        console.log(error.message);
      } finally {
        this.initForm;
      }
    },
    initForm() {
      this.rate = "";
      this.content = "";
    },
  },
};
</script>

<style></style>

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
          rows="5"
          :disabled="formValid == false"
        />
        <span class="count">{{ contentByte }}/255bytes</span>
      </div>
    </form>
    <button
      type="button"
      @click="submitForm"
      :class="['btn--md', isValid ? 'btnPrimary' : 'btnDisabled']"
      :disabled="isValid == false"
      maxlength="255"
    >
      완료
    </button>
  </div>
</template>

<script>
import { registerReview } from "@/api/index";
import { getByte } from "@/utils/validation";
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
    contentByte() {
      return getByte(this.content);
    },
    // // 바이트 계산
    // getByte() {
    //   return this.content
    //     .split("")
    //     .map((s) => s.charCodeAt(0))
    //     .reduce((prev, c) => prev + (c === 10 ? 2 : c >> 7 ? 2 : 1), 0);
    // },
    formValid() {
      if (getByte(this.content) > 255) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    // 별점
    plusRate(index) {
      // this.isActive.map(() => {
      //   return false;
      // });
      // // this.isActive = [false, false, false, false, false];
      this.isActive = this.isActive.map((ia, idx) => {
        return idx <= index;
      });
      this.rate = this.isActive.filter((ia) => ia).length;
      // console.log(this.rate);
    },

    async submitForm() {
      try {
        console.log("리뷰하기 폼 제출");
        const reviewData = await registerReview({
          rate: this.rate,
          content: this.content,
        });
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

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
        <textarea maxlength="255" id="content" v-model="content" />
        <span class="count">{{ contentLength }}/255</span>
      </div>
    </form>
    <button @click="submitForm" class="btn--disabled">완료</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rate: 0,
      content: "",
      isActive: [false, false, false, false, false],
    };
  },
  computed: {
    contentLength() {
      return this.content.length;
    },
  },
  methods: {
    plusRate(index) {
      // this.isActive.map(() => {
      //   return false;
      // });
      // // this.isActive = [false, false, false, false, false];
      this.isActive = this.isActive.map((ia, idx) => {
        return idx <= index;
      });
    },
    submitForm() {
      this.rate = this.isActive.filter((ia) => ia).length;
      console.log(this.rate);
    },
  },
};
</script>

<style></style>

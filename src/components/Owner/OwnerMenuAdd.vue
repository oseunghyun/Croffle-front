<template>
  <div class="owner-form">
    <header class="page-title">메뉴 추가하기</header>
    <form>
      <div class="input__box">
        <label for="menu">메뉴명</label>
        <input
          id="menu"
          v-model="menu.cnt"
          placeholder="메뉴명을 입력해주세요."
        />
        <span class="count">{{ menuLength }}/15</span>
      </div>
      <div class="input__box">
        <label for="price">가격 <span class="won">원</span></label>
        <input
          id="price"
          v-model="price.cnt"
          placeholder="가격을 입력해주세요."
        />
        <span class="count">{{ priceLength }}/15</span>
      </div>
    </form>
    <button @click="submitForm" class="btn--disabled">완료</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      menu: {
        cnt: "",
      },
      price: {
        cnt: "",
      },
    };
  },
  computed: {
    menuLength() {
      return this.menu.cnt.length;
    },
    priceLength() {
      return this.price.cnt.length;
    },
  },
  methods: {
    submitForm() {
      let message = "추가가";
      this.$emit("setMessage", message);
      this.$router.push("/owner/complete");
    },
  },
};
</script>

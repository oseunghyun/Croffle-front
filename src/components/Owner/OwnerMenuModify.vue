<template>
  <div class="owner-form">
    <header class="page-title">메뉴 수정하기</header>
    <form>
      <div class="input__box">
        <label>메뉴명</label>
        <select>
          <option selected>메뉴명</option>
          <option>메뉴명 1</option>
          <option>메뉴명 2</option>
          <option>메뉴명 3</option>
        </select>
      </div>
      <div class="input__box">
        <label>메뉴명</label>
        <input v-model="menu.cnt" placeholder="메뉴명을 입력해주세요." />
        <span class="count">{{ menuLength }}/15</span>
      </div>
      <div class="input__box">
        <label>가격<span class="won">원</span></label>
        <input v-model="price.cnt" placeholder="가격을 입력해주세요." />
        <span class="count">{{ priceLength }}/15</span>
      </div>
    </form>
    <button type="button" @click="submitForm" class="btn--disabled">
      완료
    </button>
  </div>
</template>

<script>
export default {
  data() {
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
      let message = "수정이";
      this.$emit("setMessage", message);
      this.$router.push("/owner/complete");
    },
  },
};
</script>

<template>
  <div class="owner-form">
    <header class="page-title">메뉴 수정하기</header>
    <form>
      <div class="input__box">
        <label>메뉴명</label>
        <select v-model="menu_id">
          <option selected>메뉴명</option>
          <option>메뉴명 1</option>
          <option>메뉴명 2</option>
          <option>메뉴명 3</option>
        </select>
      </div>
      <div class="input__box">
        <label>메뉴명</label>
        <input
          @input="this.menu_name = $event.target.value"
          v-model="menu_length"
          maxlength="40"
          placeholder="메뉴명을 입력해주세요."
        />
        <span class="count">{{ menuLength }}/40</span>
      </div>
      <div class="input__box">
        <label>가격<span class="won">원</span></label>
        <input
          v-model="menu_price"
          placeholder="가격을 입력해주세요."
          maxlength="20"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
        />
        <span class="count">{{ priceLength }}/20</span>
      </div>
    </form>
    <button
      type="button"
      @click="editOwnerMenu"
      :class="['btn--md', isValid ? 'btnPrimary' : 'btnDisabled']"
      :disabled="isValid == false"
    >
      완료
    </button>
  </div>
</template>

<script>
import { editOwnerMenu } from "@/api/owner";

export default {
  data() {
    return {
      cafe_id: "",
      menu_id: "",
      menu_name: "",
      menu_price: "",
    };
  },
  computed: {
    menuLength() {
      return this.menu_name.length;
    },
    priceLength() {
      return this.menu_price.length;
    },
    isValid() {
      if (this.menu_id && this.menu_name && this.menu_price) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    //메뉴 수정
    async editOwnerMenu() {
      try {
        console.log("사장님 - 메뉴 수정 폼 제출");
        await editOwnerMenu({
          cafe_id: this.cafe_id,
          menu_id: this.menu_id,
          menu_name: this.menu_name,
          menu_price: this.menu_price,
        });
      } catch (error) {
        console.log(error.message);
      } finally {
        let message = "수정이";
        this.$emit("setMessage", message);
        this.$router.push("/owner/complete");
      }
    },
  },
};
</script>

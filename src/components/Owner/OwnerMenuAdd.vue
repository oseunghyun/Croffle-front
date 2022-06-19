<template>
  <div class="owner-form">
    <header class="page-title">메뉴 추가하기</header>
    <form>
      <div class="input__box">
        <label for="menu">메뉴명</label>
        <input
          id="menu"
          v-model="menu_name"
          placeholder="메뉴명을 입력해주세요."
          @input="this.menu_name = $event.target.value"
          maxlength="40"
        />
        <span class="count">{{ menuLength }}/40</span>
      </div>
      <div class="input__box">
        <label for="price">가격 <span class="won">원</span></label>
        <input
          id="price"
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
      @click="createOwnerMenu"
      :class="['btn--md', isValid ? 'btnPrimary' : 'btnDisabled']"
      :disabled="isValid == false"
    >
      완료
    </button>
  </div>
</template>

<script>
// import { createOwnerMenu } from "@/api/owner";
import axios from "axios";

export default {
  data: function () {
    return {
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
      if (this.menu_name && this.menu_price) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    // 메뉴 추가
    async createOwnerMenu() {
      try {
        // console.log("사장님 - 메뉴 추가 폼 제출");
        // await createOwnerMenu({
        //   menu_name: this.menu_name,
        //   menu_price: this.menu_price,
        // });
        await axios.post(
          "http://34.64.139.239/owner/menu",
          {
            menu_name: this.menu_name,
            menu_price: this.menu_price,
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          }
        );
      } catch (error) {
        console.log(error.message);
      } finally {
        let message = "추가가";
        this.$emit("setMessage", message);
        this.$router.push("/owner/complete");
      }
    },
  },
};
</script>

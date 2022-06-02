<template>
  <div class="owner-form">
    <header class="page-title">메뉴 수정하기</header>
    <form>
      <div class="input__box">
        <label>현재 메뉴</label>
        <select v-model="menu_id">
          <option selected>메뉴명</option>
          <option
            v-for="menu in menuData"
            :key="menu.menu_id"
            :value="menu.menu_id"
          >
            {{ menu.menu_name }}
          </option>
        </select>
      </div>
      <div class="input__box">
        <label>수정할 메뉴명</label>
        <input
          @input="this.menu_name = $event.target.value"
          v-model="menu_name"
          maxlength="40"
          placeholder="수정하실 메뉴명을 입력해주세요."
        />
        <span class="count">{{ menuLength }}/40</span>
      </div>
      <div class="input__box">
        <label>수정할 가격<span class="won">원</span></label>
        <input
          v-model="menu_price"
          placeholder="수정하실 가격을 입력해주세요."
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
import { editOwnerMenu, fetchOwnerMenu } from "@/api/owner";

export default {
  created() {
    this.fetchOwnerMenu();
  },
  data() {
    return {
      cafe_id: "",
      // 바꿀 메뉴
      menu_name: "",
      menu_price: "",
      // 기존 메뉴
      menuData: [
        // {
        //   menu_id: 1,
        //   menu_name: "menu",
        // },
      ],
      menu_id: "",
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
    //메뉴 조회
    async fetchOwnerMenu() {
      try {
        const { menuData } = await fetchOwnerMenu();
        this.menuData = menuData.body.menu;
      } catch (error) {
        console.log(error.message);
      }
    },
    //메뉴 수정
    async editOwnerMenu() {
      try {
        console.log("사장님 - 메뉴 수정 폼 제출");
        const { newMenuData } = await editOwnerMenu({
          cafe_id: this.cafe_id,
          menu_id: this.menu_id,
          menu_name: this.menu_name,
          menu_price: this.menu_price,
        });
        console.log(newMenuData);
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

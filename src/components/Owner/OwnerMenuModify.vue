<template>
  <div class="owner-form">
    <header class="page-title">메뉴 수정하기</header>
    <form>
      <div class="input__box">
        <label>현재 메뉴</label>
        <select v-model="menuId">
          <option selected>메뉴명</option>
          <option
            v-for="menu in menuData"
            :key="menu.menuId"
            :value="menu.menuId"
          >
            {{ menu.menuName }}
          </option>
        </select>
      </div>
      <div class="input__box">
        <label>수정될 메뉴명</label>
        <input
          @input="this.menuName = $event.target.value"
          v-model="menuName"
          maxlength="40"
          placeholder="수정될 메뉴명을 입력해주세요."
        />
        <span class="count">{{ menuLength }}/40</span>
      </div>
      <div class="input__box">
        <label>수정할 가격<span class="won">원</span></label>
        <input
          v-model="menuPrice"
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
// import { editOwnerMenu, fetchOwnerMenu } from "@/api/owner";
import axios from "axios";

export default {
  created() {
    this.fetchOwnerMenu();
  },
  data() {
    return {
      // 바꿀 메뉴
      menuName: "",
      menuPrice: "",
      // 기존 메뉴
      menuId: 0,
      menuData: [],
    };
  },
  computed: {
    menuLength() {
      return this.menuName.length;
    },
    priceLength() {
      return this.menuPrice.length;
    },
    isValid() {
      if (this.menuId && this.menuName && this.menuPrice) {
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
        // const { data } = await fetchOwnerMenu();
        // this.menuData = data.data;

        console.log("사장님 메뉴 조회");
        const { data } = await axios.get(
          " http://34.64.32.174:8080/owner/menus",
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          }
        );
        this.menuList = data.data[0];
        console.log(this.menuList);
      } catch (error) {
        console.log(error.message);
      }
    },
    //메뉴 수정
    async editOwnerMenu() {
      try {
        console.log("사장님 - 메뉴 수정 폼 제출");
        // await editOwnerMenu(this.menuId, {
        //   menuName: this.menuName,
        //   menuPrice: this.menuPrice,
        // });
        await axios.put(
          ` http://34.64.32.174:8080/owner/menu/${this.menuId}`,
          {
            menuName: this.menuName,
            menuPrice: this.menuPrice,
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
        let message = "수정이";
        this.$emit("setMessage", message);
        this.$router.push("/owner/complete");
      }
    },
  },
};
</script>

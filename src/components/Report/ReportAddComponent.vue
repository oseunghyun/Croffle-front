<template>
  <div id="report-component">
    <header class="page-title">
      {{ header }}
    </header>
    <form>
      <div class="input__box">
        <label>메뉴명</label>
        <input
          placeholder="메뉴명을 입력해주세요."
          type="text"
          @input="this.menus.name = $event.target.value"
          maxlength="40"
        />
        <span class="count">{{ menuLength }}/40</span>
      </div>
      <div class="input__box">
        <label>가격</label>
        <input
          placeholder="가격을 입력해주세요."
          type="text"
          v-model="this.menus.price"
          maxlength="20"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
        />
        <span class="count">{{ priceLength }}/20</span>
      </div>
    </form>
    <div class="guide">크로플 메뉴만 등록할 수 있어요!</div>
    <button
      type="button"
      :class="['btn--md', isValid ? 'btnPrimary' : 'btnDisabled']"
      :disabled="isValid == false"
      @click="reportMenu"
    >
      완료
    </button>
  </div>
</template>

<script>
import { reportMenu } from "@/api/report";

export default {
  data() {
    return {
      header: "메뉴 추가 제보하기",
      // 카페 상세 페이지 부터 이어지는 값
      cafe_name: "",
      coord: "",
      roadAddress: "",
      menus: {
        name: "",
        price: "",
      },
    };
  },
  computed: {
    isValid() {
      if (this.menus.name && this.menus.price) {
        return true;
      } else {
        return false;
      }
    },
    menuLength() {
      return this.menus.name.length;
    },
    priceLength() {
      {
        return this.menus.price.length;
      }
    },
  },
  methods: {
    // 메뉴 제보 폼 제출
    async reportMenu() {
      try {
        console.log("메뉴 제보 폼 제출");
        const menuData = await reportMenu({
          cafe_name: this.cafe_name,
          coord: this.coord,
          roadAddress: this.roadAddress,
          menus: { name: this.menus.name, price: this.menus.price },
        });
        console.log(menuData);
      } catch (error) {
        console.log(error.response.status);
        console.log(error.response.headers);
      } finally {
        this.initForm();
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

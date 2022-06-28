<template>
  <div id="report-component">
    <header class="page-title">
      {{ header }}
    </header>
    <form>
      <div class="input__box">
        <label>카페명</label>
        <span class="info">{{ cafeData.name }}</span>
      </div>
      <div class="input__box">
        <label>도로명 주소</label>
        <span class="info">{{ cafeData.roadaddr }}</span>
      </div>
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
// import { reportMenu } from "@/api/report";
// import { fetchCafeInfo } from "@/api/cafe";
import axios from "axios";

export default {
  created() {
    this.fetchCafeInfo();
  },
  data() {
    return {
      header: "메뉴 추가 제보하기",
      // 카페 상세 페이지 부터 이어지는 값
      menus: {
        name: "",
        price: "",
      },
      cafeData: [],
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
        // const menuData = await reportMenu({
        //   cafe_name: this.cafeData[0].name,
        //   roadAddress: this.cafeData[0].roadaddr,
        //   menus: { name: this.menus.name, price: this.menus.price },
        // });
        // console.log(menuData);
        await axios.post(
          " http://34.64.32.174:8080/report/menu",
          {
            cafeName: this.cafeData.name,
            roadAddress: this.cafeData.roadaddr,
            menuList: { name: this.menus.name, price: this.menus.price },
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          }
        );
      } catch (error) {
        console.log(error.response.status);
        console.log(error.response.headers);
      } finally {
        this.initForm();
        alert("메뉴 추가가 완료되었습니다.");
      }
    },
    initForm() {
      this.rate = "";
      this.content = "";
    },
    async fetchCafeInfo() {
      try {
        // const { cafeData } = await fetchCafeInfo(this.$route.params.id);
        // this.cafeData = cafeData;
        const { data } = await axios.get(
          ` http://34.64.32.174:8080/cafe/${this.$route.params.id}`
        );
        console.log("카페 상세 정보 조회", data);
        this.cafeData = data.data[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>

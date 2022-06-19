<template>
  <div class="cafe-view">
    <div id="report-component">
      <header class="page-title">
        {{ header }}
      </header>
      <form>
        <div class="input__box">
          <div><label>카페명</label><em>*</em></div>
          <router-link v-if="this.cafeInfo == ''" to="/cafes/searchcafe">
            <button type="button" class="btn--border--black btn--sm-2">
              카페 검색하기
            </button></router-link
          >
          <div class="text__cafe-title" v-if="this.cafeInfo != ''">
            {{ this.cafeInfo.title }}
          </div>
          <div class="input__box">
            <div><label>도로명 주소</label><em>*</em></div>
            <span class="info">{{ this.cafeInfo.roadAddress }}</span>
          </div>
        </div>
        <div class="input__box">
          <div><label>메뉴</label><em>*</em></div>
          <input
            placeholder="메뉴를 입력해주세요."
            type="text"
            v-model="this.menus.name"
            maxlength="40"
          />
          <span class="count">{{ priceLength }}/40</span>
        </div>
        <div class="input__box">
          <div><label>가격</label><em>*</em></div>
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

      <button
        type="button"
        :class="['btn--md', isValid ? 'btnPrimary' : 'btnDisabled']"
        :disabled="isValid == false"
        @click="reportCafe"
      >
        완료
      </button>
    </div>
  </div>
</template>

<script>
import { searchCafe } from "@/api/naver";
import { reportMenu } from "@/api/report";

export default {
  created() {
    let headerActive = true;
    this.$store.commit("isHeaderActive", headerActive);
  },
  props: {
    cafeInfo: {
      title: "",
      roadAddress: "",
    },
  },
  data() {
    return {
      header: "카페 제보하기",
      menus: {
        name: "",
        price: "",
      },
    };
  },
  computed: {
    isValid() {
      if (this.cafeInfo && this.menus.name && this.menus.price) {
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
    async reportCafe() {
      try {
        console.log("카페 제보 폼 제출");
        const cafeData = await reportMenu({
          cafeName: this.cafeInfo.title,
          roadAddress: this.cafeInfo.roadAddress,
          menuList: {
            name: this.menus.name,
            price: this.menus.price,
          },
        });
        console.lot(cafeData);
      } catch (error) {
        console.log(error);
      } finally {
        this.initForm();
        this.$router.push("/cafes");
      }
    },
    initForm() {
      // eslint-disable-next-line vue/no-mutating-props
      this.cafeInfo.title = "";
    },
    // 카페 검색
    async searchCafe() {
      try {
        const cafeData = await searchCafe(this.cafeData);
        console.log(cafeData.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>

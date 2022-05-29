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
        <div class="input__box">
          <label>운영시간</label>
          <textarea
            placeholder="운영시간을 입력해주세요."
            type="text"
            v-model="this.hours"
            maxlength="255"
          />
          <span class="count">{{ hoursLength }}/255</span>
        </div>
        <div class="input__box">
          <label>sns</label>
          <textarea
            placeholder="sns 주소를 입력해주세요."
            type="text"
            v-model="this.site"
            maxlength="255"
          />
          <span class="count">{{ snsLength }}/255</span>
        </div>
      </form>

      <button
        type="button"
        :class="['btn--md', isValid ? 'btnPrimary' : 'btnDisabled']"
        :disabled="isValid == false"
        @click="reportMenu"
      >
        완료
      </button>
    </div>
  </div>
</template>

<script>
import { searchCafe, reportCafe } from "@/api/index";
export default {
  created() {
    let headerActive = true;
    this.$store.commit("isHeaderActive", headerActive);
  },
  props: {
    cafeInfo: {
      type: Object,
    },
  },
  data() {
    return {
      header: "카페 제보하기",
      hours: "",
      site: "",
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
    hoursLength() {
      return this.hours.length;
    },
    snsLength() {
      return this.site.length;
    },
    priceLength() {
      {
        return this.menus.price.length;
      }
    },
  },
  methods: {
    // 카페 제보 폼 제출: api 명세 완성 후 수정하기
    async reportCafe() {
      try {
        console.log("카페 제보 폼 제출");
        const reportCafeData = await reportCafe({
          cafe_name: this.cafeInfo.title,
          coord: (this.cafeInfo.mapx, this.cafeInfo.mapy),
          roadaddr: this.cafeInfo.roadAddress,
          menus: {
            name: this.menus.name,
            price: this.menus.price,
          },
          hours: this.hours,
          site: this.site,
        });
        console.lot(reportCafeData);
      } catch (error) {
        console.log(error);
      } finally {
        this.initForm();
        this.$router.push("/cafes");
      }
    },
    // // 메뉴 제보 폼 제출
    // async reportMenu() {
    //   try {
    //     console.log("메뉴 제보 폼 제출");
    //     const menuData = await reportMenu({
    //       cafe_name: this.cafe_name,
    //       coord: this.coord,
    //       roadAddress: this.roadAddress,
    //       menus: { name: this.menus.name, price: this.menus.price },
    //     });
    //     console.log(menuData);
    //   } catch (error) {
    //     console.log(error.response.status);
    //     console.log(error.response.headers);
    //   } finally {
    //     this.initForm();
    //   }
    // },
    initForm() {
      this.rate = "";
      this.content = "";
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

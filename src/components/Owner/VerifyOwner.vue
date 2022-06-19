<template>
  <div id="owner-main" class="verify-header">
    <header>
      <img :src="logo_owner" />
    </header>
  </div>
  <div class="container">
    <div id="report-component">
      <header class="page-title">
        {{ header }}
      </header>
      <form>
        <div class="input__box">
          <div><label>카페명</label><em>*</em></div>
          <router-link v-if="this.cafeInfo == ''" to="/owner/searchcafe">
            <button type="button" class="btn--border--black btn--sm-2">
              카페 검색하기
            </button></router-link
          >
          <div class="text__cafe-title" v-if="this.cafeInfo != ''">
            {{ this.cafeInfo.title }}
          </div>
        </div>
        <div class="input__box">
          <div><label>도로명 주소</label><em>*</em></div>
          <span class="info">{{ this.cafeInfo.addr }}</span>
        </div>
        <div class="input__box">
          <div><label>사업자 등록번호</label><em>*</em></div>
          <input
            placeholder="사업자 등록번호 10자리를 입력해주세요."
            type="text"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
            v-model="b_no"
            maxlength="10"
          />
          <span class="count">{{ bNumLength }}/10</span>
        </div>
        <div class="input__box">
          <div><label>개업일자</label><em>*</em></div>
          <input
            placeholder="개업일자 8자리를 입력해주세요."
            type="text"
            v-model="start_dt"
            maxlength="8"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
          />
          <span class="count">{{ startDayLength }}/8</span>
        </div>
        <div class="input__box">
          <div><label>대표자 성명</label><em>*</em></div>
          <input
            placeholder="대표자 성명을 입력해주세요."
            type="text"
            v-model="p_nm"
            maxlength="10"
          />
          <span class="count">{{ pNameLength }}/10</span>
        </div>
      </form>
      <button
        type="button"
        :class="['btn--md', isValid ? 'btnPrimary' : 'btnDisabled']"
        :disabled="isValid == false"
        @click="verifyOwner"
      >
        인증하기
      </button>
    </div>
  </div>
</template>

<script>
// import { verifyOwner } from "@/api/owner";
import axios from "axios";
import logo_owner from "@/assets/Image/logo_owner.svg";

export default {
  data() {
    return {
      header: "사장님 인증하기",
      logo_owner,
      b_no: "",
      start_dt: "",
      p_nm: "",
      cafeData: [
        {
          name: "밀크북",
          roadaddr: "파주시 회현로",
        },
      ],
    };
  },
  props: {
    cafeInfo: {
      type: Object,
    },
  },
  computed: {
    isValid() {
      if (this.b_no && this.start_dt && this.p_nm && this.cafeInfo) {
        return true;
      } else {
        return false;
      }
    },
    bNumLength() {
      return this.b_no.length;
    },
    startDayLength() {
      {
        return this.start_dt.length;
      }
    },
    pNameLength() {
      {
        return this.p_nm.length;
      }
    },
  },
  methods: {
    // 사장님 권한 인증
    async verifyOwner() {
      try {
        console.log("사장님 권한 인증");
        // const { data } = await verifyOwner({
        //   cafeName: this.cafeInfo.title,
        //   cafeAddr: this.cafeInfo.roadAddress,
        //   b_no: this.b_no,
        //   start_dt: this.start_dt,
        //   p_nm: this.p_nm,
        // });
        const { data } = await axios.put(
          "http://34.64.139.239/owner/verify",
          {
            cafeName: this.cafeInfo.title,
            cafeAddr: this.cafeInfo.roadAddress,
            b_no: this.b_no,
            start_dt: this.start_dt,
            p_nm: this.p_nm,
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          }
        );
        console.log(data);
      } catch (error) {
        console.log(error);
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

<template>
  <div class="owner-form">
    <header class="page-title">매장 관리하기</header>
    <form>
      <div class="input__box">
        <label>카페이름</label>
        <input
          v-model="cafeInfo.cafeName"
          placeholder="카페이름을 입력해주세요."
          maxlength="40"
          @input="this.cafeInfo.cafeName = $event.target.value"
        />
        <span class="count">{{ cafeNameLength }}/40</span>
      </div>
      <div class="input__box">
        <label>전화번호</label>
        <input
          v-model="cafeInfo.cafeTelephone"
          placeholder="전화번호를 입력해주세요."
          maxlength="30"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
        />
        <span class="count">{{ cafeTelephoneLength }}/30</span>
      </div>
      <div class="input__box">
        <label>운영시간</label>
        <textarea
          v-model="cafeInfo.cafeHours"
          placeholder="운영시간을 입력해주세요."
          rows="2"
          maxlength="255"
          @input="this.cafeInfo.cafeHours = $event.target.value"
        />
        <span class="count">{{ cafeHoursLength }}/255</span>
      </div>
      <div class="input__box">
        <label>SNS</label>
        <input
          v-model="cafeInfo.cafeSite"
          placeholder="SNS 주소를 입력해주세요."
          maxlength="255"
          @input="this.cafeInfo.cafeSite = $event.target.value"
        />
        <span class="count">{{ cafeSiteLength }}/255</span>
      </div>
      <div class="input__box">
        <label>제공혜택</label>
        <textarea
          v-model="cafeInfo.cafeBenefit"
          placeholder="제공혜택을 입력해주세요."
          maxlength="255"
          @input="this.cafeInfo.cafeBenefit = $event.target.value"
        />
        <span class="count">{{ cafeBenefitLength }}/255</span>
      </div>
    </form>
    <button
      type="button"
      @click="editOwnerCafe"
      :class="['btn--md', isValid ? 'btnPrimary' : 'btnDisabled']"
      :disabled="isValid == false"
    >
      완료
    </button>
  </div>
</template>

<script>
// import { fetchOwnerCafe, editOwnerCafe } from "@/api/owner";
import axios from "axios";

export default {
  data() {
    return {
      cafeInfo: {
        cafeId: "",
        cafeName: "",
        cafeTelephone: "",
        cafeHours: "",
        cafeSite: "",
        cafeBenefit: "",
      },
    };
  },
  computed: {
    cafeNameLength() {
      return this.cafeInfo.cafeName.length;
    },
    cafeTelephoneLength() {
      return this.cafeInfo.cafeTelephone.length;
    },
    cafeHoursLength() {
      return this.cafeInfo.cafeHours.length;
    },
    cafeSiteLength() {
      return this.cafeInfo.cafeSite.length;
    },
    cafeBenefitLength() {
      return this.cafeInfo.cafeBenefit.length;
    },
    isValid() {
      if (
        this.cafeInfo.cafeName &&
        this.cafeInfo.cafeTelephone &&
        this.cafeInfo.cafe_Hours &&
        this.cafeInfo.cafeSite &&
        this.cafeInfo.cafeBenefit
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    // 매장 정보 조회
    async fetchOwnerCafe() {
      try {
        console.log("사장님 - 매장 정보 조회");
        // const { data } = await fetchOwnerCafe();
        const { data } = await axios.get("http://34.64.139.239/owner/cafe", {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        });
        this.cafeInfo = data.data;
      } catch (error) {
        console.log(error.message);
      }
    },
    // 매장 정보 수정
    async editOwnerCafe() {
      try {
        // await editOwnerCafe(
        //   this.cafeInfo.cafeId,
        //   this.cafeInfo.cafeName,
        //   this.cafeInfo.cafeTelephone,
        //   this.cafeInfo.cafeHours,
        //   this.cafeInfo.cafeSite,
        //   this.cafeInfo.cafeBenefit
        // );
        await axios.put(
          `http://34.64.139.239/owner/cafe/${this.cafeInfo.cafeId}`,
          {
            cafeName: this.cafeInfo.cafeName,
            telephone: this.cafeInfo.cafeTelephone,
            hours: this.cafeInfo.cafeHours,
            site: this.cafeInfo.cafeSite,
            benefit: this.cafeInfo.cafeBenefit,
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
        let cafeId = this.cafeInfo.cafeId;
        this.$emit("setCafeId", cafeId);
        this.$router.push("/owner/complete");
      }
    },
  },
};
</script>

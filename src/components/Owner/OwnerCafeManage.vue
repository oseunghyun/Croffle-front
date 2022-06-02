<template>
  <div class="owner-form">
    <header class="page-title">매장 관리하기</header>
    <form>
      <div class="input__box">
        <label>카페이름</label>
        <input
          v-model="cafeInfo.cafe_name"
          placeholder="카페이름을 입력해주세요."
          maxlength="40"
          @input="this.cafeInfo.cafe_name = $event.target.value"
        />
        <span class="count">{{ cafeNameLength }}/40</span>
      </div>
      <div class="input__box">
        <label>전화번호</label>
        <input
          v-model="cafeInfo.cafe_telephone"
          placeholder="전화번호를 입력해주세요."
          maxlength="30"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
        />
        <span class="count">{{ cafeTelephoneLength }}/30</span>
      </div>
      <div class="input__box">
        <label>운영시간</label>
        <textarea
          v-model="cafeInfo.cafe_hours"
          placeholder="운영시간을 입력해주세요."
          rows="2"
          maxlength="255"
          @input="this.cafeInfo.cafe_hours = $event.target.value"
        />
        <span class="count">{{ cafeHoursLength }}/255</span>
      </div>
      <div class="input__box">
        <label>SNS</label>
        <input
          v-model="cafeInfo.cafe_site"
          placeholder="SNS 주소를 입력해주세요."
          maxlength="255"
          @input="this.cafeInfo.cafe_site = $event.target.value"
        />
        <span class="count">{{ cafeSiteLength }}/255</span>
      </div>
      <div class="input__box">
        <label>제공혜택</label>
        <textarea
          v-model="cafeInfo.cafe_benefit"
          placeholder="제공혜택을 입력해주세요."
          maxlength="255"
          @input="this.cafeInfo.cafe_benefit = $event.target.value"
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
import { fetchOwnerCafe, editOwnerCafe } from "@/api/owner";

export default {
  data() {
    return {
      cafeInfo: {
        cafe_id: "",
        cafe_name: "",
        cafe_telephone: "",
        cafe_hours: "",
        cafe_site: "",
        cafe_benefit: "",
      },
    };
  },
  computed: {
    cafeNameLength() {
      return this.cafeInfo.cafe_name.length;
    },
    cafeTelephoneLength() {
      return this.cafeInfo.cafe_telephone.length;
    },
    cafeHoursLength() {
      return this.cafeInfo.cafe_hours.length;
    },
    cafeSiteLength() {
      return this.cafeInfo.cafe_site.length;
    },
    cafeBenefitLength() {
      return this.cafeInfo.cafe_benefit.length;
    },
    isValid() {
      if (
        this.cafeInfo.cafe_name &&
        this.cafeInfo.cafe_telephone &&
        this.cafeInfo.cafe_hours &&
        this.cafeInfo.cafe_site &&
        this.cafeInfo.cafe_benefit
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
        const { ownerCafeData } = await fetchOwnerCafe();
        this.cafeInfo = ownerCafeData.body.cafe;
      } catch (error) {
        console.log(error.message);
      }
    },
    // 매장 정보 수정
    async editOwnerCafe() {
      try {
        await editOwnerCafe({
          cafe_id: this.cafeInfo.cafe_id,
          cafe_name: this.cafeInfo.cafe_name,
          cafe_telephone: this.cafeInfo.cafe_telephone,
          cafe_hours: this.cafeInfo.cafe_hours,
          cafe_site: this.cafeInfo.cafe_site,
          cafe_benefit: this.cafeInfo.cafe_benefit,
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

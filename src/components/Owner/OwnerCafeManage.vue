<template>
  <div class="owner-form">
    <header class="page-title">매장 관리하기</header>
    <form>
      <div class="input__box">
        <label>카페이름</label>
        <input v-model="cafe.name" placeholder="카페이름을 입력해주세요." />
        <span class="count">{{ cafeNameLength }}/15</span>
      </div>
      <div class="input__box">
        <label>주소</label>
        <input readonly />
      </div>
      <div class="input__box">
        <label>전화번호</label>
        <input
          v-model="cafe.telephone"
          placeholder="전화번호를 입력해주세요."
        />
        <span class="count">{{ cafeTelephoneLength }}/15</span>
      </div>
      <div class="input__box">
        <label>운영시간</label>
        <input v-model="cafe.hours" placeholder="운영시간을 입력해주세요." />
        <span class="count">{{ cafeHoursLength }}/15</span>
      </div>
      <div class="input__box">
        <label>SNS</label>
        <input v-model="cafe.site" placeholder="SNS 주소를 입력해주세요." />
        <span class="count">{{ cafeSiteLength }}/15</span>
      </div>
      <div class="input__box">
        <label>제공혜택</label>
        <input v-model="cafe.benefit" placeholder="제공혜택을 입력해주세요." />
        <span class="count">{{ cafeBenefitLength }}/15</span>
      </div>
    </form>
    <button @click="submitForm" class="btn--disabled">완료</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cafe: {
        name: "",
        telephone: "",
        hours: "",
        site: "",
        benefit: "",
      },
    };
  },
  computed: {
    cafeNameLength() {
      return this.cafe.name.length;
    },
    cafeTelephoneLength() {
      return this.cafe.telephone.length;
    },
    cafeHoursLength() {
      return this.cafe.hours.length;
    },
    cafeSiteLength() {
      return this.cafe.site.length;
    },
    cafeBenefitLength() {
      return this.cafe.benefit.length;
    },
  },
  methods: {
    submitForm() {
      let message = "수정이";
      this.$emit("setMessage", message);
      this.$router.push("/owner/complete");
    },
  },
};
</script>

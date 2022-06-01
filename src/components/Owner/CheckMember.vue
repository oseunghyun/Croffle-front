<template>
  <div class="owner-stamp">
    <header class="owner__header">
      <h1>회원 조회</h1>
      <span>적립할 회원의 전화번호를 입력해주세요.</span>
    </header>
    <form>
      <div class="input__box">
        <label>회원 전화번호</label>
        <input
          v-model="user_phone"
          placeholder="회원 전화번호를 입력해주세요."
          maxlength="15"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
        />
        <span class="count">{{ phoneLength }}/15</span>
      </div>
    </form>
    <button
      type="button"
      @click="fetchMembership"
      :class="['btn--md', isValid ? 'btnPrimary' : 'btnDisabled']"
      :disabled="isValid == false"
    >
      회원조회
    </button>
  </div>
</template>

<script>
import { fetchMembership } from "@/api/owner";

export default {
  data() {
    return {
      cafe_id: "",
      user_id: "",
      user_phone: "",
      stampInfo: {
        user_nickname: "",
        stamp_cnt: 0,
      },
    };
  },
  computed: {
    isValid() {
      if (this.user_phone) {
        return true;
      } else {
        return false;
      }
    },
    phoneLength() {
      return this.user_phone.length;
    },
  },
  methods: {
    async fetchMembership() {
      try {
        console.log("회원정보 조회");
        const { memberInfo } = await fetchMembership({
          cafe_id: this.cafe_id,
          user_phone: this.user_phone,
          user_id: this.user_id,
        });
        this.stampInfo.user_nickname = memberInfo.user_nickname;
        this.stampInfo.stamp_cnt = memberInfo.stamp_cnt;
      } catch (error) {
        console.log(error.message);
      } finally {
        const stampInfo = this.stampInfo;
        this.$emit("fetchStamp", stampInfo);
        this.$router.push("/owner/stampcoupon");
      }
    },
  },
};
</script>

<style></style>

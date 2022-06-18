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
          v-model="contact"
          placeholder="회원 전화번호를 입력해주세요."
          maxlength="20"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
          @keyup="getPhoneMask(contact)"
        />
        <span class="count">{{ phoneLength }}/20</span>
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
      contact: "",
      stampInfo: {
        user_nickname: "",
        stamp_cnt: 0,
      },
    };
  },
  computed: {
    isValid() {
      if (this.contact) {
        return true;
      } else {
        return false;
      }
    },
    phoneLength() {
      return this.contact.length;
    },
  },
  methods: {
    getPhoneMask(val) {
      let res = this.getMask(val);
      this.contact = res;
    },
    getMask(phoneNumber) {
      if (!phoneNumber) return phoneNumber;
      phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
      let res = "";
      if (phoneNumber.length < 3) {
        res = phoneNumber;
      } else {
        if (phoneNumber.substr(0, 2) == "02") {
          if (phoneNumber.length <= 5) {
            //02-123-5678
            res = phoneNumber.substr(0, 2) + "-" + phoneNumber.substr(2, 3);
          } else if (phoneNumber.length > 5 && phoneNumber.length <= 9) {
            //02-123-5678
            res =
              phoneNumber.substr(0, 2) +
              "-" +
              phoneNumber.substr(2, 3) +
              "-" +
              phoneNumber.substr(5);
          } else if (phoneNumber.length > 9) {
            //02-1234-5678
            res =
              phoneNumber.substr(0, 2) +
              "-" +
              phoneNumber.substr(2, 4) +
              "-" +
              phoneNumber.substr(6);
          }
        } else {
          if (phoneNumber.length < 8) {
            res = phoneNumber;
          } else if (phoneNumber.length == 8) {
            res = phoneNumber.substr(0, 4) + "-" + phoneNumber.substr(4);
          } else if (phoneNumber.length == 9) {
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 3) +
              "-" +
              phoneNumber.substr(6);
          } else if (phoneNumber.length == 10) {
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 3) +
              "-" +
              phoneNumber.substr(6);
          } else if (phoneNumber.length > 10) {
            //010-1234-5678
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 4) +
              "-" +
              phoneNumber.substr(7);
          }
        }
      }
      return res;
    },
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

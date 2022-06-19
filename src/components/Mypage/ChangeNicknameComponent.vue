<template>
  <div class="mypage-nickname">
    <header>
      <h1>닉네임 수정</h1>
      <span>1~10자의 한글, 영어, 숫자를 혼용하여 입력할 수 있습니다.</span>
    </header>
    <form>
      <div class="input__box">
        <label for="nickname">닉네임</label>

        <input
          id="nickname"
          v-model="nickname"
          placeholder="닉네임을 입력해주세요."
          maxlength="10"
          @input="this.nickname = $event.target.value"
        />
        <button
          type="button"
          @click="verifyNickname"
          :class="[
            'btn__duplicate',
            this.nickname ? 'btnPrimary' : 'btnDisabled',
          ]"
          :disabled="!this.nickname"
        >
          중복 확인
        </button>
        <span class="count">{{ nicknameLength }}/10</span>
        <span
          class="error-message"
          :class="['verifyMessage', isValid ? 'passMessage' : 'verifyMessage']"
          >{{ errorMessage }}</span
        >
      </div>
    </form>
    <button
      type="button"
      @click="submitForm"
      :class="['btn--md', isValid ? 'btnPrimary' : 'btnDisabled']"
      :disabled="isValid == false"
    >
      닉네임 수정하기
    </button>
  </div>
</template>

<script>
// import { editNickname, verifyNickname } from "@/api/mypage";
import axios from "axios";

export default {
  data() {
    return {
      errorMessage: "",
      nickname: "",
      isValid: false,
    };
  },
  computed: {
    nicknameLength() {
      return this.nickname.length;
    },
  },
  methods: {
    async submitForm() {
      try {
        console.log("닉네임 수정 폼 제출");
        // const postData = await editNickname({
        //   nickname: this.nickname,
        // });
        const { postData } = await axios.put(
          `http://34.64.139.239/board/nickname`,
          {
            nickname: this.nickname,
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          }
        );
        console.log(postData);
        let message = "수정이";
        this.$emit("setMessage", message);
        this.$router.push("/mypage/nicknamecomplete");
      } catch (error) {
        console.log(error.message);
      }
    },
    async verifyNickname() {
      try {
        // console.log("닉네임 검증 완료");
        // const { data } = await verifyNickname({
        //   nickname: this.nickname,
        // });
        const { data } = await axios.post(
          `http://34.64.139.239/board/nickname/verify}`,
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          }
        );
        this.errorMessage = data.messages;
        this.isValidated = true;
      } catch (error) {
        console.log(error.message);
        this.errorMessage = error.message;
        this.isValidated = false;
      }
    },
  },
};
</script>

<style></style>

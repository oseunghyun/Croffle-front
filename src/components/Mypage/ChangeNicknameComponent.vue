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
          maxlength="20"
        />
        <!-- <button type="button" class="btn__duplicate btn--primary">
          중복 확인
        </button> -->
        <span class="count">{{ nicknameLength }}/20</span>
        <!-- <span class="error-message">{{ errorMessage }}</span> -->
      </div>
    </form>
    <button type="button" @click="submitForm" class="btn--primary">
      닉네임 수정하기
    </button>
  </div>
</template>

<script>
import { editNickname } from "@/api/mypage";

export default {
  data() {
    return {
      errorMessage: "유효성검사 메세지",
      nickname: "",
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
        const postData = await editNickname({
          nickname: this.nickname,
        });
        console.log(postData);
        let message = "수정이";
        this.$emit("setMessage", message);
        this.$router.push("/mypage/nicknamecomplete");
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>

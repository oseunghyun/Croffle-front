<template>
  <div id="report-component">
    <header class="page-title">
      {{ header }}
    </header>
    <form>
      <div class="input__box">
        <label>수정하고 싶은 정보</label>
        <select v-model="category">
          <option value="cafeInfo">카페 정보 정정</option>
          <option value="menuInfo">메뉴 정정</option>
          <option value="etc">기타</option>
        </select>
      </div>
      <div class="input__box">
        <label>정정 내용</label>
        <textarea
          placeholder="정정하고 싶은 내용을 입력해주세요."
          @input="this.content = $event.target.value"
          rows="5"
          maxlength="100"
        ></textarea>
        <span class="count">{{ contentLength }}/100</span>
      </div>
    </form>
    <button
      type="button"
      :class="['btn--md', isValid ? 'btnPrimary' : 'btnDisabled']"
      :disabled="isValid == false"
      @click="reportInfo"
    >
      완료
    </button>
  </div>
</template>

<script>
import { reportInfo } from "@/api/report";

export default {
  data() {
    return {
      header: "카페 정보 수정 제보",
      cafe_id: "",
      category: "cafeInfo",
      content: "",
    };
  },
  computed: {
    isValid() {
      if (this.content) {
        return true;
      } else {
        return false;
      }
    },
    contentLength() {
      return this.content.length;
    },
  },
  methods: {
    async reportInfo() {
      try {
        console.log("카페정보 수정 제보 폼 제출");
        console.log(process.env.VUE_APP_API_URL);
        const infoData = await reportInfo({
          cafe_id: this.cafe_id,
          category: this.category,
          content: this.content,
        });

        console.log(infoData);
      } catch (error) {
        console.log(error.response.status);
        console.log(error.response.headers);
      } finally {
        this.initForm;
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

<template>
  <div id="report-component">
    <header class="page-title">
      {{ header }}
    </header>
    <form>
      <div class="input__box">
        <label>수정하고 싶은 정보</label>
        <select>
          <option selected>수정하고 싶은 정보</option>
          <option>카페 정보 정정</option>
          <option>메뉴 정정</option>
          <option>기타</option>
        </select>
      </div>
      <div class="input__box">
        <label>정정 내용</label>
        <textarea placeholder="정정하고 싶은 내용을 입력해주세요."></textarea>
      </div>
    </form>
    <button type="button" class="btn--disabled">완료</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "카페 정보 수정 제보",
    };
  },
};
</script>

<style></style>

<template>
  <div id="report-component">
    <header class="page-title">
      {{ header }}
    </header>
    <form>
      <div class="input__box">
        <label>메뉴명</label>
        <input placeholder="메뉴명을 입력해주세요." />
      </div>
      <div class="input__box">
        <label>가격</label>
        <input placeholder="가격을 입력해주세요." />
      </div>
    </form>
    <div class="guide">크로플 메뉴만 등록할 수 있어요!</div>
    <button type="button" class="btn--disabled">완료</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "메뉴 추가 제보하기",
    };
  },
};
</script>

<style></style>

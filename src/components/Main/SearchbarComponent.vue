<template>
  <div id="searchbar">
    <!-- <div class="searchbar__address">
      <img :src="ic_position" />
      <span>
        <strong>현재 위치</strong>
      </span>
      <span class="address">
        {{ address }}
      </span>
    </div> -->
    <div class="input__box">
      <input
        placeholder="크로플 원정을 떠날 카페를 검색해주세요."
        v-model="name"
      />
      <button type="button" @click="searchCafe">
        <img :src="ic_magnifier" />
      </button>
    </div>
  </div>
</template>

<script>
import ic_position from "@/assets/ic/position.svg";
import ic_magnifier from "@/assets/ic/magnifier.svg";
import { searchCafeInfo } from "@/api/cafe";

export default {
  data() {
    return {
      ic_position,
      ic_magnifier,
      address: "서울특별시 성북구",
      name: "",
      cafeInfo: [],
    };
  },
  methods: {
    async searchCafe() {
      const service = false;
      this.$emit("showResult", service);
      try {
        console.log("등록된 카페 여부 검색");
        const { cafeData } = await searchCafeInfo(this.name);

        // 카페 등록 여부에 따른 페이지 처리 다시 하기
        if (cafeData.code == "4040") {
          const registered = false;
          this.$emit("fetchResult", registered);
        } else {
          const registered = false;
          this.$emit("fetchResult", registered, cafeData);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>

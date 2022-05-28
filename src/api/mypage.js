/* 마이페이지 api 함수 */
import { instance } from "./index";

// 닉네임 수정하기
function editNickname(postData) {
  return instance.put("nickname", postData);
}

// 카페 별 모은 스탬프 리스트 보기
function fetchStamps() {
  return instance.get("stamps");
}

// 카페 별 모은 쿠폰 리스트 전체 보기
function fetchCoupons() {
  return instance.get("coupons");
}

export { editNickname, fetchStamps, fetchCoupons };

/* 마이페이지 api 함수 */
import { instance } from "./index";

// 유저 마이페이지 조회
function fetchMypage() {
  return instance.get("user/me");
}

// 닉네임 수정하기
function editNickname(postData) {
  return instance.put("nickname", postData);
}

// 닉네임 검증
function verifyNickname(nickName) {
  return instance.post("nickname/verify", nickName);
}

// 카페 별 모은 스탬프 리스트 보기
function fetchStamps() {
  return instance.get("stamps");
}

// 카페 별 모은 쿠폰 리스트 전체 보기
function fetchCoupons() {
  return instance.get("coupons");
}

// 내 쿠폰 사용하기
function useCoupon(couponID) {
  return instance.delete(`coupon/use?couponId=${couponID}`);
}

export {
  editNickname,
  fetchStamps,
  fetchCoupons,
  fetchMypage,
  useCoupon,
  verifyNickname,
};

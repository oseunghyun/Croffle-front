/* 사장님 서비스 api 함수 */
import { owner } from "@/api/index";

// 메뉴 조회
function fetchOwnerMenu() {
  return owner.get("menu");
}

// 메뉴 추가
function createOwnerMenu() {
  return owner.post("menu");
}

// 메뉴 수정
function editOwnerMenu() {
  return owner.put("menu");
}

// 스탬프 찍어주기 - 회원 조회
function fetchMembership(memberData) {
  return owner.get("coupon", memberData);
}

// 스탬프 찍어주기
function createStamp(stampData) {
  return owner.post("stamp", stampData);
}

export {
  fetchOwnerMenu,
  createOwnerMenu,
  editOwnerMenu,
  fetchMembership,
  createStamp,
};

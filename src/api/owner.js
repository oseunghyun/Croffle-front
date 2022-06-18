/* 사장님 서비스 api 함수 */
import { instanceWithAuth } from "@/api/index";

// 매장 조회
function fetchOwnerCafe() {
  return instanceWithAuth.get("owner/cafe");
}

// 매장 정보 수정
function editOwnerCafe(id) {
  return instanceWithAuth.put(`owner/menu/${id}`);
}

// 메뉴 조회
function fetchOwnerMenu(menuId) {
  return instanceWithAuth.get(`owner/menu/${menuId}`);
}

// 메뉴 추가
function createOwnerMenu() {
  return instanceWithAuth.post("owner/menu");
}

// 메뉴 수정
function editOwnerMenu(menuId) {
  return instanceWithAuth.put(`owner/menu/${menuId}`);
}

// 쿠폰 찍어주기 - 회원 조회
function fetchMembership(memberData) {
  return instanceWithAuth.get("owner/coupon", memberData);
}

// 스탬프 찍어주기
function createStamp(stampData) {
  return instanceWithAuth.post("/owner/stamp", stampData);
}

// 사장님 인증하기
function verifyOwner() {
  return instanceWithAuth.put("/owner/verify");
}

export {
  fetchOwnerMenu,
  createOwnerMenu,
  editOwnerMenu,
  fetchMembership,
  createStamp,
  editOwnerCafe,
  fetchOwnerCafe,
  verifyOwner,
};

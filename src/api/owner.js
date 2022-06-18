/* 사장님 서비스 api 함수 */
import { instanceWithAuth } from "@/api/index";

// 사장님 인증하기(확인)
function verifyOwner() {
  return instanceWithAuth.put("/owner/verify");
}

// 메뉴 수정(확인)
function editOwnerMenu(menuId, menuData) {
  return instanceWithAuth.put(`owner/menu/${menuId}`, menuData);
}

// 메뉴 조회(확인)
function fetchOwnerMenu() {
  return instanceWithAuth.get("owner/menus");
}

// 매장 조회(수정필요)
function fetchOwnerCafe() {
  return instanceWithAuth.get("owner/cafe");
}

// 매장 정보 수정(카페 아이디 보내는 부분 수정필요)
function editOwnerCafe(cafeId) {
  return instanceWithAuth.put(`owner/cafe/${cafeId}`);
}

// 메뉴 추가(카페 아이디 값 추가하기 - OwnerMenuAdd.vue 에서 )
function createOwnerMenu() {
  return instanceWithAuth.post("owner/menu");
}

// 스탬프 찍어주기(카페 아이디 값 추가하기 - OwnerMenuAdd.vue 에서)
function createStamp(cafeId, userId) {
  return instanceWithAuth.post("owner/stamp", cafeId, userId);
}

// 회원 조회(카페 아이디 값 추가하기 - OwnerMenuAdd.vue 에서)
function fetchMemberInfo(phoneNum) {
  return instanceWithAuth.post("owner/find-user", phoneNum);
}

export {
  fetchOwnerMenu,
  createOwnerMenu,
  editOwnerMenu,
  createStamp,
  editOwnerCafe,
  fetchOwnerCafe,
  verifyOwner,
  fetchMemberInfo,
};

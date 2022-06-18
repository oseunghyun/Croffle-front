/* 사장님 서비스 api 함수 */
import { instanceWithAuth } from "@/api/index";

// 사장님 인증하기(확인)
function verifyOwner() {
  return instanceWithAuth.put("/owner/verify");
}

// 메뉴 수정(수정필요)
function editOwnerMenu(menuId, menuData) {
  return instanceWithAuth.put(`owner/menu/${menuId}`, menuData);
}

// 메뉴 조회(수정필요)
function fetchOwnerMenu(menuId) {
  return instanceWithAuth.get(`owner/menu/${menuId}`);
}

// 매장 조회(수정필요)
function fetchOwnerCafe() {
  return instanceWithAuth.get("owner/cafe");
}

// 매장 정보 수정(수정필요)
function editOwnerCafe(cafeId) {
  return instanceWithAuth.put(`owner/cafe/${cafeId}`);
}

// 메뉴 추가(카페 아이디 값 추가하기 - OwnerMenuAdd.vue 에서 )
function createOwnerMenu() {
  return instanceWithAuth.post("owner/menu");
}

// 스탬프 찍어주기(수정 필요)
function createStamp(cafeId) {
  return instanceWithAuth.post("/owner/stamp", cafeId);
}

export {
  fetchOwnerMenu,
  createOwnerMenu,
  editOwnerMenu,
  createStamp,
  editOwnerCafe,
  fetchOwnerCafe,
  verifyOwner,
};

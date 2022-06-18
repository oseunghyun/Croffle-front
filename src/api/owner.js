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

// 매장 조회(완료)
function fetchOwnerCafe() {
  return instanceWithAuth.get("owner/cafe");
}

// 매장 정보 수정(완료)
function editOwnerCafe(cafeId, name, telephone, hours, site, benefit) {
  return instanceWithAuth.put(
    `owner/cafe/${cafeId}?cafeName=${name}&telephone=${telephone}&hours=${hours}&site=${site}&benefit=${benefit}`
  );
}

// 메뉴 추가(완료)
function createOwnerMenu() {
  return instanceWithAuth.post("owner/menu");
}

// 스탬프 찍어주기(완료)
function createStamp(cafeId, userId) {
  return instanceWithAuth.post("owner/stamp", cafeId, userId);
}

// 회원 조회(회원 id 보내지는거 체크)
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

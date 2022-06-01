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

// // 메뉴 수정
// function editOwnerMenu() {
//   return owner.put("menu");
// }

export { fetchOwnerMenu, createOwnerMenu };

/* 사장님 서비스 api 함수 */
import { owner } from "@/api/index";

// 메뉴 조회
function fetchOwnerMenu() {
  return owner.get("menu");
}

export { fetchOwnerMenu };

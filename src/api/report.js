/* 제보하기 관련 api 함수 */
import { instanceWithAuth } from "@/api/index";

// 카페 제보하기 + 메뉴 제보 공통
function reportMenu(reportMenuData) {
  return instanceWithAuth.post("/report/menu", reportMenuData);
}

// 정보 수정 요청 제보
function reportInfo(reportInfoData) {
  return instanceWithAuth.post("/report/info", reportInfoData);
}

export { reportMenu, reportInfo };

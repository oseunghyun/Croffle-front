/* 제보하기 관련 api 함수 */
import { report } from "@/api/index";

// 메뉴 제보하기
function reportMenu(reportMenuData) {
  return report.post("report/menu", reportMenuData);
}

// 카페 제보하기: 경로 수정하기
function reportCafe(reportCafeData) {
  return report.post("report/cafe", reportCafeData);
}

// 정보 수정 요청 제보
function reportInfo(reportInfoData) {
  return report.post("report/info", reportInfoData);
}

export { reportMenu, reportCafe, reportInfo };

import axios from "axios";
import { setInterceptors } from "./common/interceptors";

// 액시오스 초기화 함수
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}

// 회원 조회가 필요한 경우
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

// 공통
export const instance = createInstance();
// 커뮤니티 게시판 경로
export const board = createInstanceWithAuth("board");

// 리뷰 작성하기
function registerReview(reviewData) {
  return instance.post("review", reviewData);
}

// 메뉴 제보하기
function reportMenu(reportMenuData) {
  return instance.post("report/menu", reportMenuData);
}

// 정보 수정 요청 제보
function reportInfo(reportInfoData) {
  return instance.post("report/info", reportInfoData);
}

// 카페 상세정보 조회
function fetchCafeInfo() {
  return instance.get("cafe");
}

// // 카페 추천 기능
// function recommendCafe() {
//   const params = { filter: ["liked", "review"] };
//   return instance.get("cafe/recommend", { params });
// }

// // 로그인
// function loginUser() {
//   return instance.get("oauth2/authorization/naver");
// }

export {
  registerReview,
  reportMenu,
  reportInfo,
  fetchCafeInfo,
  // loginUser,
};

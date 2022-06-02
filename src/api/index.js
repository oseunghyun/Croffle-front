import axios from "axios";
// import { search } from "core-js/fn/symbol";
import { setInterceptors } from "./common/interceptors";

// 액시오스 초기화 함수
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL, // 안되면 '/'로 변경
  });
  return setInterceptors(instance);
}

// 네이버 검색
function createNaverInstance() {
  const instance = axios.create({
    baseURL: `/v1/search`,
    headers: {
      "X-Naver-Client-Id": "qczgKIdunrBy3nbGO9yM",
      "X-Naver-Client-Secret": "cpfeOmGgLb",
    },
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

// 사장님 페이지 경로
export const owner = createInstanceWithAuth("owner");

// 카페 제보 검색
export const search = createNaverInstance();

// 카페 관련 경로
export const cafe = createInstance("cafe");

// 제보 관련 경로
export const report = createInstanceWithAuth("report");

function searchCafe(cafeData) {
  return search.get(`/local.json?query=${encodeURI(cafeData)}&display=5`);
}

// 리뷰 작성하기
function registerReview(reviewData) {
  return instance.post("review", reviewData);
}

// /review/list?cafe_id=1
// 리뷰 조회하기
function fetchReview(cafeId) {
  return instance.get(`review/list/${cafeId}`);
}

// 카페 전체 조회
function fetchCafes() {
  return instance.get("cafes");
}

// 스크랩 기능
function likeCafe(cafeId) {
  return instance.post("like", cafeId);
}

// 스크랩 취소
function delLikeCafe(cafeId) {
  return instance.post("like/del", cafeId);
}

// // 로그인
// function loginUser() {
//   return instance.get("oauth2/authorization/naver");
// }

export {
  registerReview,
  fetchCafes,
  searchCafe,
  fetchReview,
  likeCafe,
  delLikeCafe,
  // loginUser,
};

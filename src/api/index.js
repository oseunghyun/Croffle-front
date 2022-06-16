import axios from "axios";
// import { search } from "core-js/fn/symbol";
import { setInterceptors } from "./common/interceptors";

// 액시오스 초기화 함수
function createInstance() {
  const instance = axios.create({
    // baseURL: process.env.VUE_APP_API_URL, // 안되면 '/'로 변경
    baseURL: `/api`,
  });
  return setInterceptors(instance);
}

// ip 주소 가져오기
function createIpInstance() {
  const instance = axios.create({
    baseURL: `/v2`,
  });
  return setInterceptors(instance);
}

// 네이버 검색
function createNaverInstance() {
  const instance = axios.create({
    baseURL: `/v1/search`,
    headers: {
      "X-Naver-Client-Id": "WDBUTDGAh6YGJ6Umihxr",
      "X-Naver-Client-Secret": "Vjn2nII5K3",
    },
  });
  return setInterceptors(instance);
}

// 네이버 프로필 호출
function createNaverProfile() {
  const instance = axios.create({
    baseURL: `/v4`,
  });
  return setInterceptors(instance);
}

// 네이버 GeoLocation 현재 위치 제공
function createNaverGeoLocation() {
  const time = Math.floor(+new Date()).toString();
  const instance = axios.create({
    baseURL: `/v3/geolocation/v2`,
    headers: {
      "x-ncp-apigw-timestamp": time,
      "x-ncp-iam-access-key": "wnm6dyQfAzJLgs1r8r9I",
      "x-ncp-apigw-signature-v2": "l9RFKQeUe3n09f4cu2m6CWyayyoC0p5jgrPXerDf",
    },
  });
  return setInterceptors(instance);
}

// 회원 조회가 필요한 경우
function createInstanceWithAuth(url) {
  const instance = axios.create({
    // baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    baseURL: `/api${url}`,
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

// 현재 위치 정보 제공
export const geolocation = createNaverGeoLocation();

// 네이버 프로필 호출
export const profile = createNaverProfile();

// 클라이언드 ip 주소 제공
export const getIp = createIpInstance();

// 카페 관련 경로
// export const cafe = createInstanceWithAuth("cafe");

// 제보 관련 경로
export const report = createInstanceWithAuth("report");

// 카페 검색 조회
function searchCafe(cafeData) {
  return search.get(`/local.json?query=${encodeURI(cafeData)}&display=5`);
}

// 현재 위치 정보 조회
function fetchLocation(ip) {
  return geolocation.get(`/geoLocation?ip=${ip}`);
}

// ip 주소 가져오기
function fetchIpAddr() {
  return getIp.get();
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

// 카페 추천 기능
function recommendCafe(filter) {
  // const params = { filter: filter };
  return instance.get(`cafe/recommend?filter=${filter}`);
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
  searchCafe,
  fetchReview,
  likeCafe,
  delLikeCafe,
  recommendCafe,
  fetchLocation,
  fetchIpAddr,
  // loginUser,
};

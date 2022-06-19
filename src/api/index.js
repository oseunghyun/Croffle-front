import axios from "axios";

import { setInterceptors } from "./common/interceptors";

// 1. 액시오스 초기화 함수 - 회원 권한 필요 없는
function createInstance() {
  return axios.create({
    // baseURL: process.env.VUE_APP_API_URL, // 안되면 '/'로 변경
    // baseURL: `/api`,
    baseURL: "192.168.0.17:8080/",
  });
  // return instance;
  // return setInterceptors(instance);
}

// 2. 회원 권한 필요한 경우
function createInstanceWithAuth() {
  const instance = axios.create({
    baseURL: `/api`,
  });
  return setInterceptors(instance);
}

// 1. 공통(회원 권한 x)
export const instance = createInstance();

// 2. 회원 권한 필요한 경우
export const instanceWithAuth = createInstanceWithAuth();

/*********** 네이버 ************/
// 네이버 검색
function createNaverInstance() {
  return axios.create({
    baseURL: `/v1/search`,
    headers: {
      "X-Naver-Client-Id": "WDBUTDGAh6YGJ6Umihxr",
      "X-Naver-Client-Secret": "Vjn2nII5K3",
    },
  });
  // return instance;
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
  return instance;
}

// ip 주소 가져오기
function createIpInstance() {
  const instance = axios.create({
    baseURL: `/v2`,
  });
  return instance;
}

// 카페 제보 네이버 검색
export const search = createNaverInstance();

// 현재 위치 정보 제공
export const geolocation = createNaverGeoLocation();

// 네이버 프로필 호출
export const profile = createNaverProfile();

// 클라이언드 ip 주소 제공
export const getIp = createIpInstance();

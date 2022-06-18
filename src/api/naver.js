import { search, geolocation, getIp } from "@/api/index";

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

export { searchCafe, fetchLocation, fetchIpAddr };

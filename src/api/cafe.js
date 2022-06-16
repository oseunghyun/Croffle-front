/* 카페 관련 서비스 api 함수 */
import { instance } from "@/api/index";

/* 카페 */
// 카페 전체 조회
function fetchCafes() {
  return instance.get("cafes");
}

// 카페 상세정보 조회
function fetchCafeInfo(cafeId) {
  return instance.get(`cafe?id=${cafeId}`);
}

// 전체 검색 - 카페
function searchCafeInfo(cafeName) {
  const params = { name: cafeName };
  return instance.get("cafe/search", { params });
}

export { fetchCafes, fetchCafeInfo, searchCafeInfo };

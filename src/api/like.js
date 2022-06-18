import { instanceWithAuth } from "./index";

// 스크랩 기능
function likeCafe(cafeId) {
  return instanceWithAuth.post("like", cafeId);
}

// 스크랩 취소
function delLikeCafe(cafeId) {
  return instanceWithAuth.post("like/del", cafeId);
}

// 내가 한 스크랩 모아보기
function fetchLikedList() {
  return instanceWithAuth.get("likes");
}

export { likeCafe, delLikeCafe, fetchLikedList };

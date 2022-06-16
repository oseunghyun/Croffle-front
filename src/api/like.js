import { instance } from "./index";

// 스크랩 기능
function likeCafe(cafeId) {
  return instance.post("like", cafeId);
}

// 스크랩 취소
function delLikeCafe(cafeId) {
  return instance.post("like/del", cafeId);
}

// 내가 한 스크랩 모아보기
function fetchLikedList() {
  return instance.get("likes");
}

export { likeCafe, delLikeCafe, fetchLikedList };

import { instance } from "@/api/index";

// 리뷰 작성하기
function createReview(reviewData) {
  return instance.post("review", reviewData);
}

// 리뷰 조회하기
function fetchReview(cafeId) {
  return instance.get(`review/${cafeId}`);
}

export { fetchReview, createReview };

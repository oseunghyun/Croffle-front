import { instance, instanceWithAuth } from "@/api/index";

// 리뷰 작성하기
function createReview(reviewData) {
  return instanceWithAuth.post("review", reviewData);
}

// 리뷰 조회하기(확인)
function fetchReview(cafeId) {
  return instance.get(`review/${cafeId}`);
}

export { fetchReview, createReview };

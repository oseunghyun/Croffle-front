import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

// 리뷰 작성하기
function registerReview(reviewData) {
  return instance.post("review", reviewData);
}

export { registerReview };

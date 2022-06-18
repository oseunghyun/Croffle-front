import { instance } from "@/api/index";

// 카페 추천 기능
function recommendCafe(filter) {
  return instance.get(`cafe/recommend?filter=${filter}`);
}

export { recommendCafe };

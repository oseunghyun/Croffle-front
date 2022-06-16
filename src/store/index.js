import { createStore } from "vuex";
import { getAuthFromCookie } from "@/utils/cookies";

export const store = createStore({
  state: {
    // 메인 크로플 서비스에만 헤더를 보여주기 위함
    headerActive: false,
    accessToken: getAuthFromCookie() || "",
    refreshToken: "",
    naverState: "",
  },
  getters: {
    userToken(state) {
      return state.accessToken;
    },
    isLogin(state) {
      return state.accessToken == "";
    },
  },
  mutations: {
    // 메인 크로플 서비스에만 헤더를 보여주기 위함
    isHeaderActive(state, headerActive) {
      state.headerActive = headerActive;
    },
    setAccessToken(state, token) {
      state.accessToken = token;
    },
    setNaverState(state, naverState) {
      state.naverState = naverState;
    },
  },
  // 로그인 이후 발생하는 모든 요청 헤더에 토큰값을 담아 보내기
  actions: {},
});

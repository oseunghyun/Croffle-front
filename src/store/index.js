import { createStore } from "vuex";
import { getAuthFromCookie } from "@/utils/cookies";

export const store = createStore({
  state: {
    // 메인 크로플 서비스에만 헤더를 보여주기 위함
    headerActive: false,
    token: getAuthFromCookie(),
  },
  getters: {
    // isLogin(state) {
    // }
    // 토큰 반환
    userToken(state) {
      return state.token;
    },
  },
  mutations: {
        // 메인 크로플 서비스에만 헤더를 보여주기 위함
    isHeaderActive(state, headerActive) {
      state.headerActive = headerActive;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {},
});

import { createStore } from "vuex";
import { getAuthFromCookie } from "@/utils/cookies";

export const store = createStore({
  state: {
    // 메인 크로플 서비스에만 헤더를 보여주기 위함
    headerActive: false,
    token: getAuthFromCookie() || "",
    owner: false,
  },
  getters: {
    userToken(state) {
      return state.token;
    },
    isLogin(state) {
      return !(state.token !== "" || "undefined");
    },
    isOwner(state) {
      return state.owner;
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
    clearToken(state) {
      state.token = "";
    },
    setOwner(state, isOwner) {
      state.owner = isOwner;
    },
  },
});

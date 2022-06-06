import { createStore } from "vuex";
import { getAuthFromCookie } from "@/utils/cookies";

export const store = createStore({
  state: {
    headerActive: false,
    token: getAuthFromCookie(),
  },
  getters: {
    // isLogin(state) {
    // }
    userToken(state) {
      return state.token;
    },
  },
  mutations: {
    isHeaderActive(state, headerActive) {
      state.headerActive = headerActive;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {},
});

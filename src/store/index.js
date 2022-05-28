import { createStore } from "vuex";

export const store = createStore({
  state: {
    headerActive: false,
    token: "",
  },
  getters: {
    // isLogin(state) {
    // }
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

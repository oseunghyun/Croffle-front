import { createStore } from "vuex";

export const store = createStore({
  state: {
    headerActive: false,
  },
  getters: {},
  mutations: {
    isHeaderActive(state, headerActive) {
      state.headerActive = headerActive;
    },
  },
  actions: {},
});

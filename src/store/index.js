import { createStore } from "vuex";

export const store = createStore({
  state: {
    pageNum: 0,
  },
  getters: {},
  mutations: {
    changePage(state, pageNum) {
      state.pageNum = pageNum;
    },
  },
  actions: {},
});

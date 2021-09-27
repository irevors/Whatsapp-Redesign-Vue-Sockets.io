import { createStore } from 'vuex';

export default createStore({
  state: {
    theme: 'light',
  },
  getters: {
    getCurrentTheme(state) {
      return state.theme;
    },
  },
  mutations: {
    toggleTheme(state) {
      state.theme === 'light'
        ? (state.theme = 'dark')
        : (state.theme = 'light');
    },
  },
  actions: {},
  modules: {},
});

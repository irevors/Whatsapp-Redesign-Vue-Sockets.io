import { createStore } from 'vuex';

import conversations from './modules/conversations';

export default createStore({
  modules: {
    conversations,
  },
  state: {
    theme: 'light',
    auth: {
      userId: '21asdsdad',
    },
  },
  getters: {
    getCurrentTheme(state) {
      return state.theme;
    },
    getUserId(state) {
      return state.auth.userId;
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
});

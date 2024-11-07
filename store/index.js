// Vuex store to manage authentication state
export const state = () => ({
  authenticated: false,
});

export const mutations = {
  setAuthenticated(state, value) {
    state.authenticated = value;
  },
};

export const actions = {
  login({ commit }) {
    // Simulate login
    commit('setAuthenticated', true);
  },
  logout({ commit }) {
    // Simulate logout
    commit('setAuthenticated', false);
  },
};
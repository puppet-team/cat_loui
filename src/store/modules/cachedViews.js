const state = {
  cachedViews: []
};
const mutations = {
  ADD_CACHE_VIEWS (state, view) {
    if (!state.cachedViews.includes(view.name)) {
      state.cachedViews.push(view.name);
    }
  },
  DELETE_CACHE_VIEWS (state, view) {
    if (state.cachedViews.includes(view.name)) {
      const index = state.cachedViews.findIndex(view.name);
      state.cachedViews.splice(index, 1);
    }
  }
}
const actions = {
  addCacheViews ({commit}, view) {
    commit('ADD_CACHE_VIEWS', view);
  },
  deleteCacheViews ({commit}, view) {
    commit('DELETE_CACHE_VIEWS', view)
  }
}
export default {
  state,
  mutations,
  actions
}
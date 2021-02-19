const state = {
  userName: '',
  transitionName: 'fade'
}
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  SET_TRANSITION_NAME (state, value) {
    state.transitionName = value;
  }
}
const actions = {
  // 设置name
  setUserName({ commit }, name) {
    commit('SET_USER_NAME', name)
  },
  setTransitionName ({commit}, value) {
    commit('SET_TRANSITION_NAME', value)
  }
}
export default {
  state,
  mutations,
  actions
}

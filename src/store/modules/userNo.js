const state = {
    userNo: "127"
};
const mutations = {
    ADD_CACHE_VIEWS (state, view) {
        if (!state.userNo.includes(view.name)) {
            state.userNo.push(view.name);
        }
    },
    DELETE_CACHE_VIEWS (state, view) {
        if (state.userNo.includes(view.name)) {
            const index = state.userNo.findIndex(view.name);
            state.userNo.splice(index, 1);
        }
    }
}
const actions = {
    addUserNo ({commit}, view) {
        commit('ADD_USER_NO', view);
    },
    deleteUserNo ({commit}, view) {
        commit('DELETE_USER_NO', view)
    }
}
export default {
    state,
    mutations,
    actions
}
// const {add} = require("lodash");

const state = {
  // 地址信息（对象）
  address: null,
  // 地址信息（字符串）
  formattedAddress: null,
  // 经度
  longitude: null,
  // 纬度
  latitude: null
}

const mutations = {
  SET_ADDRESS (state, address) {
    state.address = address.addressComponent;
    state.formattedAddress = address.formattedAddress;
  },
  SET_LOCATION (state, coords) {
    console.log(coords, 'mutations')
    let { longitude, latitude } = coords;
    state.longitude = longitude;
    state.latitude = latitude;
  }
}

const actions = {
  setAddress({commit}, address) {
    commit('SET_ADDRESS', address)
  },
  setLocation({commit}, coords) {
    commit('SET_LOCATION', coords)
  }
}
export default {
  state,
  mutations,
  actions
}
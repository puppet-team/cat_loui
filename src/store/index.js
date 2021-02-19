import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import location from '@/store/modules/location'
import cachedViews from '@/store/modules/cachedViews'
import userNo from '@/store/modules/userNo'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        location,
        cachedViews,
        userNo
    },
    getters
})

export default store;

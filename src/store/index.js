import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        totalPrice: 0,
        shopCartList: [],
        name: 'zkj'
    },
    mutations
})
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getter from './getter'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        totalPrice: 0,
        zkj: 1111
    },

})
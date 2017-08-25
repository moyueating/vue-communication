// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false



// const store = new Vuex.Store({
//     state: {
//         count: 0
//     },
//     mutations: {
//         increment(state, payload) {
//             state.count += payload.step;
//         },
//         minus(state, payload) {
//             state.count -= payload.step;
//         }
//     },
//     actions: {
//         minus(context, payload) {
//             setTimeout(() => {
//                 context.commit('minus', payload);
//             }, 1000)
//         }
//     }
// })


new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
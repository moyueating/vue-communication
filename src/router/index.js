import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
        path: '/parent',
        name: 'parent',
        component: parent => require(['@/components/parent/parent'], parent)
    },
    {
        path: '/any',
        name: 'any',
        component: any => require(['@/components/any/pro'], any)
    },
    {
        path: '/shop',
        name: 'shop',
        component: shop => require(['@/components/shop/shop'], shop)
    }
  ]
})

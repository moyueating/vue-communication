import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
        path: '/',
        name: 'Hello',
        component: Hello
    },
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
        path: '/vx',
        name: 'vx',
        component: vx => require(['@/components/vx/vx'], vx)
    }
  ]
})

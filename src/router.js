import Vue from 'vue'
import VueRouter from 'vue-router'

import Chat from './views/Chat.vue'
import Login from './views/Login.vue'

import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'chat',
            component: Chat,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(store.state.currentUser) {
            next()
        } else {
            next({name: 'login'})
        }
    }
    next()
})

export default router
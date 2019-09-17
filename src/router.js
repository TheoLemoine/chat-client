import Vue from 'vue'
import VueRouter from 'vue-router'
import Chat from './views/Chat.vue'
import Login from './views/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { 
            path: '/', 
            component: Chat 
        },
        { 
            path: '/login', 
            component: Login 
        }
    ]
})
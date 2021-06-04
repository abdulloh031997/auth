import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const lazyload = companentaPath => {
    return () =>
        import ( /* webpackChunkName: "[request]" */ `@/pages/${companentaPath}.vue`)
}
const routes = [

    {
        path: '/',
        name: 'home',
        component: lazyload('index')
    },
    {
        path: '/about',
        name: 'about',
        component: lazyload('about')
    },
    {
        path: '/doc',
        name: 'doc',
        component: lazyload('doc')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
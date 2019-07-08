import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/vue',
            component: () => import('../App.vue')
        },
        {
            path: '/css',
            beforeEnter () {
                window.location = 'css.html'
            }
        }
    ]
})

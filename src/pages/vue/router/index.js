import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    // base: 'vue.html',
    routes: [
        {
            path: '/components',
            name: 'vue-components',
            component: () => import('../views/components.vue')
        },
        {
            path: '/css',
            beforeEnter () {
                window.location = 'css.html'
            }
        }
    ]
})

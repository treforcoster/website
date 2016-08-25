import 'material-design-lite'

import Vue from 'vue/dist/vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Components from './components'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: {template: '<h2>Home</h2>'}},
        { path: '/auth/:token', component: Components.Auth },
    ]
})

export const app = new Vue({
    router
}).$mount('#app')
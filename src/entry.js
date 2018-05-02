/*global Vue*/

/* weex initialized here, please do not move this line */
import App from '@/index.vue'
import router from './router'
import store from '@/store'
import { sync } from 'vuex-router-sync'

sync(store, router)

/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router, store }, App))

router.push('/');

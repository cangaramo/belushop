import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'
import checkView from 'vue-check-view'
export const EventBus = new Vue()

Vue.use(checkView)
Vue.use(VueScrollProgressBar)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

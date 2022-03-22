import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import widget from '../widget'

Vue.config.productionTip = false

Vue.use(widget)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

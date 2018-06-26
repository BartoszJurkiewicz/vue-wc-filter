import Vue from 'vue'
import store from './store/'
import App from './App.vue'
import { MdField, MdMenu, MdList } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdField)
Vue.use(MdMenu)
Vue.use(MdList)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#vue-wc-filter')

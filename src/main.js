import Vue from 'vue'
import store from './store/'
import App from './App.vue'
import { Select, Option, Card, Button } from 'element-ui'

Vue.use(Select)
Vue.use(Option)
Vue.use(Card)
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#vue-wc-filter')

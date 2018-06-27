import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
    }
  },
  actions: {
    async getProducts ({commit}, query) {
      await axios.get(`http://bartoszjurkiewicz.com.pl/dev/vue-filter/wp-json/vuefilter/v1/filter${query || ''}`, {auth: {
        username: 'ck_3392648afe0bde3238c292915fd4824ec6047b3b',
        password: 'cs_eb1aabc80f9609713f2f86e9acf5f2b1e2c2fe58'
      }})
      .then(res => {
        commit('SET_PRODUCTS', res.data.products)
      })
    }
  }
})

export default store

<template>
  <div id="app">
    <transition name="fade">
      <loader v-if="loader" />
    </transition>
    <ul class="filters-container">
      <app-filter ref="filter" v-for="filter in filters" :key="`filter-${filter.slug}`" :filter-data="filter" @changed="getProducts()" />
      <li>
        <el-button @click="resetFilters()">Reset</el-button>
      </li>
    </ul>
    <div class="products-container">
      <product v-for="product in products" :key="product.id" :product-data="product" />
      <p v-if="products.length == 0" class="nothing-found">Nothing found</p>
    </div>
  </div>
</template>

<script>
import Loader from './components/Loader'
import Product from './components/Product'
import AppFilter from './components/AppFilter'

export default {
  name: 'app',
  components: { Loader, Product, AppFilter },
  data () {
    return {
      loader: true,
      // activeFilters: [],
      filters: [
        {
          slug: 'price',
          name: 'Price',
          options: [
            {slug: 'asc', name: 'Asc'},
            {slug: 'desc', name: 'Desc'}
          ]
        },
        {
          slug: 'per_page',
          name: 'Posts per page',
          options: [
            {slug: '10'},
            {slug: '20'},
            {slug: '30'}
          ]
        },
        {
          slug: 'title',
          name: 'Title',
          options: [
            {slug: 'asc', name: 'A-Z'},
            {slug: 'desc', name: 'Z-A'}
          ]
        },
        ...ajax_options.vue_wc_filter
      ]
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    query () {
      return this.$refs.filter.filter(appFilter => {
        return appFilter.value
      }).map(appFilter => {
        return {slug: appFilter.$props.filterData.slug, value: appFilter._data.value}
      })
    }
  },
  methods: {
    getProducts () {
      this.loader = true
      let url = new URL(ajax_options.shop_url)
      this.query.forEach(param => { url.searchParams.append(param.slug, param.value) })
      this.$store.dispatch('getProducts', url.search)
        .then(() => {
          history.pushState({}, '', url.href)
          this.loader = false
        })
    },
    urlToActiveFilters () {
      const params = window.location.search.replace('?', '')
      if (params.length > 0) {
        params.split('&').forEach(param => {
          const splitted = param.split('=')
          this.setFilterOption(splitted[0], splitted[1])
        })
      }
      this.getProducts()
    },
    setFilterOption (filterSlug, option) {
      this.$refs.filter.find(appFilter => {
        return appFilter.filterData.slug == filterSlug
      })._data.value = option
    },
    resetFilters () {
      this.$refs.filter.forEach(appFilter => { appFilter.value = '' })
      this.getProducts()
    }
  },
  mounted () {
    this.urlToActiveFilters()
  }
}
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/element-ui@1.4.2/lib/theme-default/index.css");
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.filters-container, .products-container {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
}
.products-container {
  .nothing-found {
    margin: 0 auto;
    margin-top: 2rem;
  }
}
.el-select {
  margin-bottom: 1rem;
}
</style>

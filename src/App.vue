<template>
  <div id="app">
    <ul class="products-container">
      <product v-for="product in products" :key="product.id" :product-data="product" />
    </ul>
  </div>
</template>

<script>
import Product from './components/Product'

export default {
  name: 'app',
  components: {
    Product
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.products-container {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
}
.md-field.md-theme-default {
  margin-bottom: 1rem;
}
.md-list {
  background: white;
}
</style>

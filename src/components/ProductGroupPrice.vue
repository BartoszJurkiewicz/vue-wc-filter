<template>
  <div class="product__price--group">
    <template v-if="typeof(selectedChildIndex) == 'number'">
      <product-price :product="children[selectedChildIndex]" />
    </template>
    <template v-else>
      ${{minPrice}} - ${{maxPrice}}
    </template>
  </div>
</template>

<script>
import ProductPrice from './ProductPrice'

export default {
  name: 'GroupProductPrice',
  components: { ProductPrice },
  props: {
    children: {
      type: Array,
      required: true
    },
    selectedChildIndex: [Number, String]
  },
  computed: {
    minPrice () { return this.children[0].sale_price || this.children[0].price },
    maxPrice () { return this.children[this.children.length - 1].sale_price || this.children[this.children.length - 1].price }
  }
}
</script>

<style lang="scss" scoped>
.product__price--group {
  margin-bottom: 1rem;
}
</style>

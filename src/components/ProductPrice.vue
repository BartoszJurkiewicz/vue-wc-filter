<template>
  <p class="product__price">
      <template v-if="!product.sale_price">
        ${{product.price}}
      </template>
      <template v-else>
        <del class="product__price--regular">
          ${{product.price}}
        </del>
        <ins class="product__price--sale">
          ${{product.sale_price}}
        </ins>
      </template>
    <!-- </template> -->
  </p>
</template>

<script>
export default {
  name: 'ProductPrice',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

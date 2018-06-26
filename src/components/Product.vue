<template>
  <li class="product" :class="`product-${productData.ID}`">
    <a :href="productData.permalink" class="product__permalink">
      <div class="product__thumbnail">
        <img :src="productData.thumbnail || 'http://via.placeholder.com/350x350'" :alt="productData.title">
      </div>
      <rating :rating="productData.rating" />
      <p class="product__title">{{productData.title}}</p>
    </a>
    <div class="product__content">
      <template v-if="productData.hasOwnProperty('children')">
        <md-field>
          <label for="child-product">Child product</label>
          <md-select v-model="selectedChildIndex" name="child-product" id="child-product">
            <md-option v-for="(childProd, index) in productData.children" :key="childProd.id" :value="index">{{childProd.title}} - {{childProd.package}}</md-option>
          </md-select>
        </md-field>
      </template>
      <product-group-price v-if="productData.hasOwnProperty('children')" :children="productData.children" :selected-child-index="selectedChildIndex" />
      <product-price v-else :product="productData"  />
    </div>
  </li>
</template>

<script>
import Rating from './Rating'
import ProductPrice from './ProductPrice'
import ProductGroupPrice from './ProductGroupPrice'

export default {
  name: 'Product',
  props: [ 'productData' ],
  components: { Rating, ProductPrice, ProductGroupPrice },
  data () {
    return {
      selectedChildIndex: ''
    }
  },
  computed: {
    selectedChild () {
      return this.productData.children[this.selectedChildIndex]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.product {
  flex: 0 calc(25% - 2rem);
  width: calc(25% - 2rem);
  padding: .6rem;
  margin: 1rem;
  box-sizing: border-box;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.15);
  transition: .4s;
  &:hover {
    box-shadow: 8px 8px 20px 0px rgba(0, 0, 0, 0.15);
  }
  .product__thumbnail {
    display: flex;
    justify-content: center;
    position: relative;
    padding-bottom: 100%;
    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%)
    }
  }
  .product__title {
    padding-top: 1rem;
  }
  .product__price {
    padding-bottom: 1rem;
  }
}
</style>

<template>
  <div class="d-flex flex-row flex-wrap p-1">
    <shop-products-items v-for="product in products" :key="product.id" :product="product"></shop-products-items>
  </div>
</template>

<script>
import ShopProductsItems from './ShopProductsItems';

export default {
  components: {
    ShopProductsItems
  },
  props: [ 'products' ]
}
</script>

<style>

</style>
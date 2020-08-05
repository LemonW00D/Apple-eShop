<template>
  <div class="d-flex flex-column p-5">    
    <h5 class="border-bottom pb-3">Mon panier</h5>
    <cart-products-items v-for="item in cart" :key="item.id" :item="item"></cart-products-items>
    <template v-if="cart.length">
      <hr class="w-100">
      <span>Total : {{ total }} €</span>
    </template>
  </div>
</template>

<script>
import CartProductsItems from './CartProductsItems';

export default {
  components: {
    CartProductsItems
  },
  props: [ 'cart' ],
  computed: {
    total() {
      return this.cart.reduce((acc, value) => {
        acc += value.price;
        return acc;
      }, 0)
    }
  }
}
</script>

<style>

</style>
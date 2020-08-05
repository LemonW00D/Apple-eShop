<template>
  <div class="d-flex flex-row">
    <transition name="shop-left" appear>
      <shop class="w-75"></shop>
    </transition>
    <transition name="cart-right" appear>
      <cart class="w-25"></cart>
    </transition>
  </div>
</template>

<script>
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';

export default {
  components: {
    Shop,
    Cart
  }
}
</script>

<style lang="scss" scoped>

  @keyframes fromLeft {
    from {
      transform: translateX(-100px);
      filter: grayscale(100%);
      opacity: 25%;
    }
    to {}
  }

  @keyframes fromRight {
    from {
      transform: translateX(100px)
    }
    to {}
  }

  .shop-left-enter-active {
    animation: fromLeft 1.25s;
  }

  .cart-right-enter-active {
    animation: fromRight 1.25s;
  }
</style>
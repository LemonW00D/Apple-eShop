<template>
  <div class="w-25 p-3 mb-5 product-container d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
      <img v-bind:src="product.img" alt="product" style="height: 150px">
    </div>
    <div>
      <h3>{{ product.title }}</h3>
      <hr>
    </div>
    <div>
      <p style="height: 80px">{{ product.heading }}</p>
      <p>
        <a type="button" @click="fullDescription = !fullDescription">
          <p v-if="!fullDescription">Lire la suite...</p>
          <p v-if="fullDescription">Masquer</p>
        </a>
      </p>     
      <div class="mb-2">
        <transition name="description">
          <p class="card card-body" v-if="fullDescription">{{ product.description }}</p>
        </transition>
      </div>     
    </div>
    <div>
      <span>{{ product.price | price }}</span>
      <button @click="addProductToCart" class="btn btn-primary btn-sm float-right">Commander</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../../../../main';


export default {
  props: ['product'],
  data() {
    return {
      fullDescription: false,
    }
  },
  methods: {
    addProductToCart() {
      eventBus.addProductToCart({ ...this.product })
    },
  }
}
</script>

<style lang="scss">
  .product-container {
    min-height: 400px;
    height: auto;
    background-color: white;
    border-radius: 12px;
    margin-right: 10px;
    min-width: 250px;
    max-width: 300px;
  }

  p{
    font-size: 12px;
    margin-bottom: 5px;
  }

  span{
    font-weight: bold;
  }

  a{
    display: block;
    text-align: end;
    p{
      font-size: 13px;     
      color: darkblue;
      margin-bottom: 10px;
      &:hover{
        font-weight: 700;
      }
    }
  }

  .description-enter{
    opacity: 0;
    transform: translateX(-1000px);
  }
  .description-enter-active{
    transition: all 1s;
  }
  .description-leave-to{
    opacity: 0;
    transform: translateX(1000px);
  }
  .description-leave-active{
    transition: all 0.5s;
  }
</style>
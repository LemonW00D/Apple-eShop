<template>
  <transition name="nav-top" appear>
    <nav class="navbar navbar-light navbar-expand-lg" style="background-color: #333333;">
      <a class="navbar-brand text-light" href="#">
        <img src="../assets/favicon-white.svg" width="30" height="30" class="mx-2"/>
        Arnaud Shop
      </a>
      <button class="navbar-toggler navbar-light" style="background-color: #D9D9D9;">
        <span class="navbar-toggler-icon" v-trigger-collapse="'collapse'"></span>
      </button>    
      <div id="collapse" class="collapse navbar-collapse">
        <ul class="navbar-nav mx-5">
          <li class="nav-item mx-2">
            <router-link class="nav-link text-light" to="/shop">Boutique</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link text-light" to="/admin">Admin</router-link>
          </li>
        </ul>
      <!--  <form class="form-inline my-lg-0 search-product">
          <input class="form-control mr-sm-2" type="search" placeholder="Chercher un produit" aria-label="Search">
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
        </form>  -->
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  directives: {
    triggerCollapse: {
      inserted(el, binding) {
        window.addEventListener('click', () => {
          nav.classList.remove('show'); 
        })
        const nav = document.querySelector(`#${ binding.value }`);
        el.addEventListener('click', (event) => {
          if (nav.classList.contains('show')) {
            nav.classList.remove('show');            
          } else {
            nav.classList.add('show'); 
          }
          event.stopPropagation();
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a{
  cursor: pointer;
}

@keyframes fromTop {
    from {
      transform: translateY(-100px)
    }
    to {}
  }

  .nav-top-enter-active {
    animation: fromTop 1s;
  }

  .router-link-active {
    font-weight: bold;
    border-bottom: 2px solid;
    border-radius: 10px;
  }



/*
.search-product{
  float: right;
  margin: auto;
}*/
</style>
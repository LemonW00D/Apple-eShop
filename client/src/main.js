import Vue from 'vue';
import App from './App.vue';
import './style.css';
import * as Filters from './utils/filters';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://at-apple-shop---vuejs.firebaseio.com/';
Vue.prototype.$http = axios;

Object.keys(Filters).forEach( (f) => {
  Vue.filter(f, Filters[f]);
});

export const eventBus = new Vue ({
  data: {
    products: [],
    cart: [],
  },
  methods: {
    addProductToCart(product) {
      if (!this.cart.map( i => i.id).includes(product.id) ) {
        this.cart = [ ...this.cart, product ];
        this.$emit('update:cart', this.cart.slice()); 
      }      
    },
    removeItemFromCart(item) {
      this.cart = this.cart.slice().filter( i => i.id !== item.id );
      this.$emit('update:cart', this.cart.slice()); 
    },
    addProduct(product){
      this.$http.post('products.json', product)
                .then( () => {
                  this.products = [ ...this.products, { ...product, id: this.products.length + 1 + ''}];
                  this.$emit('update:products', this.products);
                })      
    },
    getProductsDatabase(products) {
      this.products = products;
      this.$emit('update:products', this.products);
    },
    initProducts() {
      this.$http.get('products.json')
                .then( res => {
                  const data = res.data;
                  this.getProductsDatabase(Object.keys(data).map(key => data[key]));
                } )
    }
  },    
  created() {
  /*[                     //pour envoyer mes premières données manuelles sur le server de Firebase:
      {
        id: '1',
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_EMEA_LANG_FR?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1587460001468',
        title: 'MacBook Pro 13"',
        heading: `MacBook Pro 13 pouces, avec processeurs quadricœurs, graphismes jusqu'à 60 % plus rapides, Magic Keyboard, puce T2 Security et superbe écran Retina.`,
        description: 'Avec le MacBook Pro, l’ordinateur portable atteint des sommets inédits en matière de performances et de portabilité. Quelles que soient les contrées où vous mènera votre imagination, vous parviendrez plus vite que jamais à vos objectifs grâce, entre autres, à des processeurs et à une mémoire hautes performances, à des graphismes avancés et à un système de stockage d’une rapidité fulgurante. Le tout, dans un design compact ultra‑léger.',
        price: 1499
      },
      {
        id: '2',
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=892&hei=820&&qlt=80&.v=1541713862468',
        title: 'MacBook Air 13"',
        heading: 'Plus léger (poids : 1,29 kg), le MacBook Air 13 pouces est disponible avec un Magic Keyboard et des processeurs plus performants.',
        description: 'Incroyablement fin et léger, le MacBook Air monte encore en gamme. Il intègre désormais un superbe écran Retina, un nouveau Magic Keyboard, Touch ID, des processeurs jusqu’à deux fois plus performants1, des graphismes plus rapides et une capacité de stockage multipliée par deux. Son boîtier au design épuré est constitué d’aluminium 100 % recyclé, ce qui en fait le Mac le plus respectueux de l’environ­nement jamais créé2. Et avec son autonomie d’une journée, notre Mac le plus apprécié vous permet de tout faire, partout.',
        price: 1199
      },
      {
        id: '3',
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-215-selection-hero-201706?wid=892&hei=820&&qlt=80&.v=1570231130149',
        title: 'iMac Pro 27"',
        heading: `L'iMac Pro intègre une carte graphique Radeon Pro Vega et délivre la qualité de graphismes la plus avancée de tous les iMac.`,
        description: 'L’iMac, un monstre ? De puissance, c’est certain. De beauté, aussi. C’est d’ailleurs toute l’idée sur laquelle il repose depuis le début : transformer l’utilisation d’un ordinateur de bureau en une fabuleuse expérience, en intégrant des technologies puissantes et faciles à utiliser dans un élégant design tout‑en‑un. Et cette fois, le nouvel iMac va encore plus loin. Non seulement il est équipé de processeurs dernier cri, de prodigieux outils, d’une mémoire plus rapide et d’une carte graphique impressionnante, mais tous ces atouts sont mis en valeur par l’écran Retina le plus lumineux et le plus spectaculaire jamais vu sur un Mac. Il a tout, en encore plus puissant.',
        price: 2099
      },
      {
        id: '4',
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-mini-hero-201810?wid=892&hei=820&&qlt=80&.v=1558559818403',
        title: 'Mac mini',
        heading: 'Le Mac mini se réinvente avec des processeurs plus rapides, une mémoire extensible, un stockage flash, Thunderbolt 3, HDMI 2.0 et 10 Gigabit Ethernet.',
        description: 'Le Mac mini est plus qu’un formidable ordinateur de bureau, c’est aussi une petite merveille qui sait tout faire, du pilotage d’appareils domotiques à la gestion de gigantesques fermes de rendu. Désormais équipé de processeurs Intel quadricœurs et hexacœurs de huitième génération et de processeurs graphiques Intel UHD Graphics 630, il déploie encore plus de puissance de calcul pour répondre aux exigences professionnelles les plus musclées. Alors, que vous assuriez le direct d’un concert ou que vous testiez votre nouvelle app iOS ou iPadOS, le Mac mini reste le chemin le plus court entre une vraie bonne idée et un superbe résultat.',
        price: 929
      },
    ].forEach( p => {
      this.$http.post('https://at-apple-shop---vuejs.firebaseio.com/products.json', p);
    })*/
    this.initProducts();
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

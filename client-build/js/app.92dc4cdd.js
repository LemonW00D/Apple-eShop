(function(t){function e(e){for(var o,i,a=e[0],c=e[1],u=e[2],p=0,d=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],o=!0,a=1;a<r.length;a++){var c=r[a];0!==n[c]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},n={app:0},s=[];function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"25c2":function(t,e,r){"use strict";var o=r("f06c"),n=r.n(o);n.a},"38c8":function(t,e,r){},"4c72":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e),r.d(e,"eventBus",(function(){return $t}));var o={};r.r(o),r.d(o,"price",(function(){return x}));r("99af"),r("4de4"),r("4160"),r("caad"),r("d81d"),r("fb6a"),r("b64b"),r("2532"),r("159b");var n=r("5530"),s=r("2909"),i=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("2b0e")),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("the-header"),r("div",{staticClass:"d-flex flex-column w-100"},[r("router-view")],1)],1)},c=[],u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"nav-top",appear:""}},[o("nav",{staticClass:"navbar navbar-light navbar-expand-lg",staticStyle:{"background-color":"#333333"}},[o("a",{staticClass:"navbar-brand text-light",attrs:{href:"#"}},[o("img",{staticClass:"mx-2",attrs:{src:r("7024"),width:"30",height:"30"}}),t._v(" Arnaud Shop ")]),o("button",{staticClass:"navbar-toggler navbar-light",staticStyle:{"background-color":"#D9D9D9"}},[o("span",{directives:[{name:"trigger-collapse",rawName:"v-trigger-collapse",value:"collapse",expression:"'collapse'"}],staticClass:"navbar-toggler-icon"})]),o("div",{staticClass:"collapse navbar-collapse",attrs:{id:"collapse"}},[o("ul",{staticClass:"navbar-nav mx-5"},[o("li",{staticClass:"nav-item mx-2"},[o("router-link",{staticClass:"nav-link text-light",attrs:{to:"/shop"}},[t._v("Boutique")])],1),o("li",{staticClass:"nav-item mx-2"},[o("router-link",{staticClass:"nav-link text-light",attrs:{to:"/admin"}},[t._v("Admin")])],1)])])])])},l=[],p={directives:{triggerCollapse:{inserted:function(t,e){window.addEventListener("click",(function(){r.classList.remove("show")}));var r=document.querySelector("#".concat(e.value));t.addEventListener("click",(function(t){r.classList.contains("show")?r.classList.remove("show"):r.classList.add("show"),t.stopPropagation()}))}}}},d=p,f=(r("7150"),r("2877")),m=Object(f["a"])(d,u,l,!1,null,"44b99f9a",null),h=m.exports,v={name:"App",components:{TheHeader:h}},b=v,g=Object(f["a"])(b,a,c,!1,null,null,null),_=g.exports;r("38c8");function x(t){return"".concat(t," €")}var C=r("8c4f"),w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-row"},[r("transition",{attrs:{name:"shop-left",appear:""}},[r("shop",{staticClass:"w-75"})],1),r("transition",{attrs:{name:"cart-right",appear:""}},[r("cart",{staticClass:"w-25"})],1)],1)},y=[],j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("shop-products-list",{staticClass:"p-3",attrs:{products:t.products}})},P=[],$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-row flex-wrap p-1"},t._l(t.products,(function(t){return r("shop-products-items",{key:t.id,attrs:{product:t}})})),1)},O=[],k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-25 p-3 mb-5 product-container d-flex flex-column"},[r("div",{staticClass:"d-flex flex-row justify-content-center"},[r("img",{staticStyle:{height:"150px"},attrs:{src:t.product.img,alt:"product"}})]),r("div",[r("h3",[t._v(t._s(t.product.title))]),r("hr")]),r("div",[r("p",{staticStyle:{height:"80px"}},[t._v(t._s(t.product.heading))]),r("p",[r("a",{attrs:{type:"button"},on:{click:function(e){t.fullDescription=!t.fullDescription}}},[t.fullDescription?t._e():r("p",[t._v("Lire la suite...")]),t.fullDescription?r("p",[t._v("Masquer")]):t._e()])]),r("div",{staticClass:"mb-2"},[r("transition",{attrs:{name:"description"}},[t.fullDescription?r("p",{staticClass:"card card-body"},[t._v(t._s(t.product.description))]):t._e()])],1)]),r("div",[r("span",[t._v(t._s(t._f("price")(t.product.price)))]),r("button",{staticClass:"btn btn-primary btn-sm float-right",on:{click:t.addProductToCart}},[t._v("Commander")])])])},S=[],E={props:["product"],data:function(){return{fullDescription:!1}},methods:{addProductToCart:function(){$t.addProductToCart(Object(n["a"])({},this.product))}}},L=E,D=(r("25c2"),Object(f["a"])(L,k,S,!1,null,null,null)),I=D.exports,F={components:{ShopProductsItems:I},props:["products"]},N=F,T=Object(f["a"])(N,$,O,!1,null,null,null),q=T.exports,U={components:{ShopProductsList:q},data:function(){return{products:[]}},created:function(){var t=this;this.products=$t.products,$t.$on("update:products",(function(e){t.products=e}))}},A=U,M=Object(f["a"])(A,j,P,!1,null,null,null),B=M.exports,J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("cart-products-list",{staticClass:"p-3",attrs:{cart:t.cart}})},R=[],V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column p-5"},[r("h5",{staticClass:"border-bottom pb-3"},[t._v("Mon panier")]),t._l(t.cart,(function(t){return r("cart-products-items",{key:t.id,attrs:{item:t}})})),t.cart.length?[r("hr",{staticClass:"w-100"}),r("span",[t._v("Total : "+t._s(t.total)+" €")])]:t._e()],2)},H=[],z=(r("13d5"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-row justify-content-between p-2"},[r("div",{staticClass:"d-flex flex-row justify-content-between flex-grow-1 p-2"},[r("span",[t._v(t._s(t.item.title))]),r("span",[r("strong",[t._v(t._s(t._f("price")(t.item.price)))])])]),r("button",{staticClass:"close ml-3",on:{click:t.removeItemFromCart}},[r("span",[t._v("×")])])])}),G=[],K={props:["item"],methods:{removeItemFromCart:function(){$t.removeItemFromCart(Object(n["a"])({},this.item))}}},Q=K,W=Object(f["a"])(Q,z,G,!1,null,null,null),X=W.exports,Y={components:{CartProductsItems:X},props:["cart"],computed:{total:function(){return this.cart.reduce((function(t,e){return t+=e.price,t}),0)}}},Z=Y,tt=Object(f["a"])(Z,V,H,!1,null,null,null),et=tt.exports,rt={components:{CartProductsList:et},data:function(){return{cart:[]}},created:function(){var t=this;this.cart=$t.cart,$t.$on("update:cart",(function(e){t.cart=e}))}},ot=rt,nt=Object(f["a"])(ot,J,R,!1,null,null,null),st=nt.exports,it={components:{Shop:B,Cart:st}},at=it,ct=(r("b2a2"),Object(f["a"])(at,w,y,!1,null,"52da1b78",null)),ut=ct.exports,lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-row justify-content-center p-5"},[r("admin-product-form",{staticClass:"w-50"})],1)},pt=[],dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"d-flex flex-column",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[r("h4",[t._v("Ajouter un produit :")]),r("hr",{staticClass:"w-100"}),r("div",{staticClass:"form-group"},[r("label",[t._v("Image")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.img,expression:"form.img",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL de l'image du produit"},domProps:{value:t.form.img},on:{input:function(e){e.target.composing||t.$set(t.form,"img",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Nom du produit")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.title,expression:"form.title",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nom du produit"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Courte description")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.heading,expression:"form.heading",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Accroche visiteur"},domProps:{value:t.form.heading},on:{input:function(e){e.target.composing||t.$set(t.form,"heading",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Longue description")]),r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.description,expression:"form.description",modifiers:{trim:!0}}],staticClass:"form-control",staticStyle:{height:"200px"},attrs:{placeholder:"Longue description"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Prix")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.price,expression:"form.price",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",placeholder:"Prix"},domProps:{value:t.form.price},on:{input:function(e){e.target.composing||t.$set(t.form,"price",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t.errors.length?r("ul",t._l(t.errors,(function(e){return r("li",{key:e,staticClass:"text-danger"},[t._v(t._s(e))])})),0):t._e(),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Publier le nouvel article")])])},ft=[],mt=(r("a4d3"),r("e01a"),{data:function(){return{form:{img:"",title:"",heading:"",description:"",price:""},errors:[]}},methods:{submitForm:function(t){t.preventDefault(),this.formIsValid()&&(console.log(this.form),$t.addProduct(Object(n["a"])({},this.form)),this.resetForm(),this.$router.push("/shop"))},resetForm:function(){this.form={img:"",title:"",heading:"",description:"",price:""}},formIsValid:function(){return this.errors=[],this.form.img||this.errors.push("Image requise"),this.form.title||this.errors.push("Nom du produit requis"),this.form.heading||this.errors.push("Courte description requise"),this.form.description||this.errors.push("Longue description requise"),this.form.price||this.errors.push("Prix requis"),!this.errors.length}}}),ht=mt,vt=Object(f["a"])(ht,dt,ft,!1,null,null,null),bt=vt.exports,gt={components:{AdminProductForm:bt}},_t=gt,xt=Object(f["a"])(_t,lt,pt,!1,null,null,null),Ct=xt.exports;i["a"].use(C["a"]);var wt=new C["a"]({mode:"history",routes:[{path:"",redirect:"/shop"},{path:"/shop",component:ut},{path:"/admin",component:Ct},{path:"**",redirect:"/shop"}]}),yt=wt,jt=r("bc3a"),Pt=r.n(jt);i["a"].config.productionTip=!1,Pt.a.defaults.baseURL="https://at-apple-shop---vuejs.firebaseio.com/",i["a"].prototype.$http=Pt.a,Object.keys(o).forEach((function(t){i["a"].filter(t,o[t])}));var $t=new i["a"]({data:{products:[],cart:[]},methods:{addProductToCart:function(t){this.cart.map((function(t){return t.id})).includes(t.id)||(this.cart=[].concat(Object(s["a"])(this.cart),[t]),this.$emit("update:cart",this.cart.slice()))},removeItemFromCart:function(t){this.cart=this.cart.slice().filter((function(e){return e.id!==t.id})),this.$emit("update:cart",this.cart.slice())},addProduct:function(t){var e=this;this.$http.post("products.json",t).then((function(){e.products=[].concat(Object(s["a"])(e.products),[Object(n["a"])(Object(n["a"])({},t),{},{id:e.products.length+1+""})]),e.$emit("update:products",e.products)}))},getProductsDatabase:function(t){this.products=t,this.$emit("update:products",this.products)},initProducts:function(){var t=this;this.$http.get("products.json").then((function(e){var r=e.data;t.getProductsDatabase(Object.keys(r).map((function(t){return r[t]})))}))}},created:function(){this.initProducts()}});new i["a"]({router:yt,render:function(t){return t(_)}}).$mount("#app")},7024:function(t,e,r){t.exports=r.p+"img/favicon-white.5a17b7f0.svg"},7150:function(t,e,r){"use strict";var o=r("4c72"),n=r.n(o);n.a},"9f23":function(t,e,r){},b2a2:function(t,e,r){"use strict";var o=r("9f23"),n=r.n(o);n.a},f06c:function(t,e,r){}});
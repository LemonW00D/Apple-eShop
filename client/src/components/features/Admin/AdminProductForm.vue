<template>
  <form class="d-flex flex-column" @submit.prevent="submitForm">
    <h4>Ajouter un produit :</h4>
    <hr class="w-100">
    <div class="form-group">
				<label>Image</label>
        <input v-model.trim="form.img" type="text" placeholder="URL de l'image du produit" class="form-control">
    </div>
    <div class="form-group">
				<label>Nom du produit</label>
        <input v-model.trim="form.title" type="text" placeholder="Nom du produit" class="form-control">
    </div>
    <div class="form-group">
				<label>Courte description</label>
        <input v-model.trim="form.heading" type="text" placeholder="Accroche visiteur" class="form-control">
    </div>
    <div class="form-group">
				<label>Longue description</label>
        <textarea v-model.trim="form.description" placeholder="Longue description" class="form-control" style="height: 200px"></textarea>
    </div>
    <div class="form-group">
				<label>Prix</label>
        <input v-model.number="form.price" type="number" placeholder="Prix" class="form-control">
    </div>
    <ul v-if="errors.length">
        <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
    <button type="submit" class="btn btn-primary">Publier le nouvel article</button>
  </form>
</template>

<script>
import { eventBus } from './../../../main';

export default {
  data() {
    return {
      form: {
        img: '',
        title: '',
        heading:'',
        description: '',
        price: ''
      },
      errors: []
    }
  },
  methods: {
    submitForm(event){
      event.preventDefault();
      if (this.formIsValid()) {
        console.log(this.form);
        eventBus.addProduct({ ...this.form });
        this.resetForm();
        this.$router.push('/shop');
      }
    },
    resetForm() {
      this.form = {
        img: '',
        title: '',
        heading:'',
        description: '',
        price: ''
      };
    },
    formIsValid() {
      this.errors = [];
      if (!this.form.img) {
        this.errors.push('Image requise')
      }
      if (!this.form.title) {
        this.errors.push('Nom du produit requis')
      }
      if (!this.form.heading) {
        this.errors.push('Courte description requise')
      }
      if (!this.form.description) {
        this.errors.push('Longue description requise')
      }
      if (!this.form.price) {
        this.errors.push('Prix requis')
      }
      return this.errors.length ? false : true;
    },
  }
}
</script>

<style lang="scss">
</style>
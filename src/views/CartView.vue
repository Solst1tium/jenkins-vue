<script setup>
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia';

const useCart = useCartStore();

const { cart } = storeToRefs(useCart);

const { removeCart } = useCart;
</script>

<template>
  <div class="container">
    <h1 class="titulo">Tu Carro ( {{ cart.length }} Pokémon) </h1>
    <div v-if="cart.length === 0" class="alert alert-danger" role="alert">
      No has agregado ningún Pokémon
    </div>

    <div v-else class="row justify-content-md-center">
      <div class="col-md-4">
        <div class="card text-center mt-4" v-for="pokemon in cart" :key="pokemon.id">
          <div class="card-header">
            <h4 class="card-title">{{ pokemon.name }} </h4>
          </div>
          <div class="card-body ">
            <img :src="pokemon.sprites?.front_default" class="rounded mx-auto d-block" alt="...">

            <button type="button" class="btn btn-outline-danger" @click="removeCart(pokemon.id)">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.titulo {
  color: #AF4417;
  font-size: 48px;
  text-align: center;
  margin: 30px;
}
</style>


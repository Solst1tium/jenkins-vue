<script setup>

import { RouterLink } from 'vue-router';
import { useObtenerDatos } from '../composables/obtenerDatos';

const { obtenerDatos, data, loading } = useObtenerDatos()

obtenerDatos('https://pokeapi.co/api/v2/pokemon');
</script>

<template>
  <div class="container">
    <h1 class="titulo">Lista de Pokémon</h1>
    <div class="alert alert-warning" role="alert" v-if="loading">
      Cargando información...
    </div>

    <div v-if="data">
      <div class="row">
        <div class="col-sm-6 mb-4 mb-sm-0" v-for="poke in data.results">
          <div class="card" style="text-align: center;">
            <div class="card-body">
              <h3 class="card-title">{{ poke.name }}</h3>
              <router-link :to="`/pokemones/${poke.name}`" class="btn btn-primary">Ver características</router-link>
            </div>
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

.card-body {
  background-color: #19072d;
  color: white;
}
</style>
<script setup>
import { useRoute } from 'vue-router';
import { useObtenerDatos } from '@/composables/obtenerDatos';

import { useCartStore } from '@/stores/cart';

const { obtenerDatos, data, loading } = useObtenerDatos();

const route = useRoute();
const useCart = useCartStore();

const { addCart } = useCart;

obtenerDatos(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

</script>

<template>
    <div class="container">

        <div class="alert alert-warning" role="alert" v-if="loading">
            Cargando información...
        </div>
        <div v-if="data">
            <div class="row">
                <div class="col">
                    <div class="card border-warning mb-3" style="max-width: 18rem;">
                        <div class="card-body">
                            <h3 class="card-title" style="text-align: center;">{{ data.name }}</h3>
                            <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
                                nostrum
                                aliquid nesciunt consequuntur voluptatibus,
                                libero laudantium voluptate doloremque magni quisquam consequatur fugiat nobis quia
                                sapiente
                                vitae voluptatem veritatis dolor quae?</p>
                        </div>
                    </div>
                </div>
                <div class="col" style="text-align: center;">
                    <img class="rounded float-start" :src="data.sprites?.front_default" width="380">
                    <button type="button" class="btn btn-outline-success" @click="addCart(data)">Agregar al Carro</button>
                </div>
                <div class="col">
                    <span class="placeholder col-12" style="text-align: center;"><strong>Características</strong>
                    </span>
                    <div class="alert " role="alert">Peso: {{ data.weight }}</div>
                    <div class="alert " role="alert"> Altura {{ data.height }}</div>

                    <span class="placeholder col-12" style="text-align: center;">
                        <strong>Habilidades</strong> </span>
                    <div class="alert" role="alert" v-for="habilidad in data.abilities" :key="habilidad">
                        {{ habilidad.ability.name }}
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped>
.container {
    margin: 40px;
}

.alert {
    background-color: #ffc107;
}

.placeholder {
    background-color: #052c65;
    color: white;
}
</style>
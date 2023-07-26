<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>


<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">

      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" 
      alt="Logo" width="120" height="40" class="d-inline-block align-text-top">


    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" active-class= "active"  aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class= "active" to="/pokemones">Pokemones</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class= "active" to="/cart">Cart</router-link>
        </li>
       </ul>
    </div>
  </div>
</nav>

  <router-view/>
</template>

<style scoped>
nav{
  background-color: #6523b6;
 
}

.nav-link{
  color: white;
}

</style>
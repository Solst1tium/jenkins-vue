import { defineStore } from 'pinia'
import { computed, ref } from 'vue'


export const useCartStore = defineStore('cart', () => {

const cart = ref ([]);
 
const addCart = (pokemon) =>{
    cart.value.push(pokemon)
}

const removeCart = (id) =>{
  let index = cart.value.findIndex(poke => poke.id === id);
  cart.value.splice(index, 1)
}

return{
    cart,
    addCart,
    removeCart,
   
  }
})




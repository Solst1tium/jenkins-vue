import axios from 'axios'
import { ref } from 'vue'

export const useObtenerDatos = () => {

    const data = ref(null);
    const loading = ref(true)

    const obtenerDatos = async (url) => {
        loading.value = true
        try {
            const resp = await axios.get(url)
            data.value = resp.data;
        } catch (error) {
            console.log(error)
        }finally {
            loading.value = false
        }
    };
    return {
        obtenerDatos, data,loading
    };
};



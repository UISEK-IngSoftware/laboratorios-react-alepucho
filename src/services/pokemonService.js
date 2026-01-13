const API_BASE_URL= import.meta.env.VITE_API_BASE_URL;
const CLIENT_ID= import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET= import.meta.env.VITE_CLIENT_SECRET;
import axios from 'axios';

axios.interceptors.request.use((config)=>{
    const token= localStorage.getItem("access_token");
    if(token){
        config.headers.Authorization=`Bearer ${token}`;
    }
    return config;
});

/**
 * Convertir un archivo a Base64
 * @param {} file 
 * @returns 
 */
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      // reader.result ya incluye el encabezado, lo usamos completo
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
export async function createPokemon(pokemonData){
    let pictureBase64= "";
    if(pokemonData.picture){
        pictureBase64= await fileToBase64(pokemonData.picture);
    }
    const payload={
        ...pokemonData,
        picture:pictureBase64
    }
    const response =await axios.post (`${API_BASE_URL}/pokemons/`, payload);
    return response.data;
}
/**
 * Obtener Pokémons desde la API
 * @returns Data de Pokémons 
 */
export async function fetchPokemons () {
    const response = await axios.get(`${API_BASE_URL}/pokemons`);
    return response.data;
}
export async function deletePokemon(pokemonId){
    const response = await axios.delete(`${API_BASE_URL}/pokemons/${pokemonId}/`);
    return response.data;
}
export async function getPokemonById(pokemonId){
    const response = await axios.get(`${API_BASE_URL}/pokemons/${pokemonId}/`);
    return response.data;
}
export async function updatePokemon(pokemonId, pokemonData, pictureChanged = false){
    const payload = { ...pokemonData };
    if (pictureChanged) {
        let pictureBase64 = "";
        if (pokemonData.picture && typeof pokemonData.picture !== 'string') {
            pictureBase64 = await fileToBase64(pokemonData.picture);
        }
        payload.picture = pictureBase64;
    }
    // If not pictureChanged, don't include picture, assuming partial update
    const response = await axios.put(`${API_BASE_URL}/pokemons/${pokemonId}/`, payload);
    return response.data;
}
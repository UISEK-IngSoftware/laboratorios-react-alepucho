const API_BASE_URL= import.meta.env.VITE_API_BASE_URL;
const CLIENT_ID= import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET= import.meta.env.VITE_CLIENT_SECRET;
import axios from 'axios';

/**
 * Obtener Pokémons desde la API
 * @returns Data de Pokémons 
 */
export async function fetchPokemons () {
    const response = await axios.get(`${API_BASE_URL}/pokemons`);
    return response.data;
}
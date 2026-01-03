const API_BASE_URL= import.meta.env.VITE_API_BASE_URL;
const CLIENT_ID= import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET= import.meta.env.VITE_CLIENT_SECRET;
import axios from 'axios';

/**
 * Obtener Entrenadores desde la API
 * @returns Data de Entrenadores 
 */
export async function fetchTrainers () {
    const response = await axios.get(`${API_BASE_URL}/trainers`);
    return response.data;
}
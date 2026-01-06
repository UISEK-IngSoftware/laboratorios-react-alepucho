import { Grid } from '@mui/material'
import PokemonCard from '../components/PokemonCard'
import { useEffect, useState } from 'react'
import { fetchPokemons } from '../services/pokemonService';

export default function PokemonList() {
    const [pokemons, setPokemons]= useState([]);
    useEffect(()=>{
        fetchPokemons()
        .then(data => setPokemons(data))
        .catch(error => {
            console.error("Error fetching pokemons:", error)
            alert("Error fetching pokemons, intenta nuevamente más tarde.");
        });
    },[]);
    return (
        <Grid container spacing={2}>
            {pokemons.map(
                (pokemon) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <PokemonCard pokemon={pokemon} />
                    </Grid>
                ))}
        </Grid>
    )
}
import { TextField, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createPokemon } from "../services/pokemonService";
import './PokemonForm.css'

export default function PokemonForm() {

  const [pokemonData, setPokemonData] = useState({
    name: '',
    type: '',
    weight: '',
    height: '',
    picture: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'picture') {
      setPokemonData({ ...pokemonData, picture: files[0] });
    } else {
      setPokemonData({ ...pokemonData, [name]: value });
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await createPokemon(pokemonData);
      alert('Pokémon creado con éxito');
      navigate('/');
    }catch(error){
      alert('Error al crear el Pokémon');
      console.error(error);
      return;
    }
  }
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Formulario de Pokémon
        <Box component="form" onSubmit ={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Nombre" name="name" variant="outlined" onChange={handleChange}/>
          <TextField label="Tipo" name="type" typvariant="outlined" onChange={handleChange}/>
          <TextField label="Peso" name="weight" variant="outlined" type="number" onChange={handleChange}/>
          <TextField label="Altura" name="height" variant="outlined" typer="number" onChange={handleChange}/>
          <input type="file" name="picture" accept="image/*" className="picture" required onChange={handleChange}/>
          <Button type="submit" variant="contained">Guardar</Button>
        </Box>
      </Typography>
    </>
  )
}
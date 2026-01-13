import { TextField, Typography, Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPokemon, updatePokemon, getPokemonById } from "../services/pokemonService";
import './PokemonForm.css'

export default function PokemonForm() {
  const { id } = useParams(); // Obtiene el ID de la URL (/edit-pokemon/17)
  const isEdit = !!id; // true si hay ID, false si es crear nuevo

  const [pokemonData, setPokemonData] = useState({
    name: '',
    type: '',
    weight: '',
    height: '',
    picture: null
  });

  const [loading, setLoading] = useState(false);
  const [pictureChanged, setPictureChanged] = useState(false);
  const navigate = useNavigate();

  // Cargar datos del pokemon si es edición
  useEffect(() => {
    if (isEdit) {
      setLoading(true);
      getPokemonById(id)
        .then(data => {
          setPokemonData({
            name: data.name,
            type: data.type,
            weight: data.weight,
            height: data.height,
            picture: data.picture // Será string (base64 o URL)
          });
          setPictureChanged(false);
        })
        .catch(error => {
          console.error('Error al cargar pokemon:', error);
          alert('Error al cargar el pokemon');
        })
        .finally(() => setLoading(false));
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'picture') {
      if (files.length > 0) {
        setPokemonData({ ...pokemonData, picture: files[0] });
        setPictureChanged(true);
      }
    } else {
      setPokemonData({ ...pokemonData, [name]: value });
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      if (isEdit) {
        await updatePokemon(id, pokemonData, pictureChanged);
        alert('Pokémon actualizado con éxito');
      } else {
        await createPokemon(pokemonData);
        alert('Pokémon creado con éxito');
      }
      navigate('/');
    }catch(error){
      alert(`Error al ${isEdit ? 'actualizar' : 'crear'} el Pokémon`);
      console.error(error);
      return;
    }
  }
  return (
    <>
      <Typography variant="h4" gutterBottom>
        {isEdit ? 'Editar Pokémon' : 'Crear Pokémon'}
      </Typography>
      {loading ? (
        <Typography>Cargando...</Typography>
      ) : (
        <Box component="form" onSubmit ={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Nombre" name="name" variant="outlined" value={pokemonData.name} onChange={handleChange}/>
          <TextField label="Tipo" name="type" variant="outlined" value={pokemonData.type} onChange={handleChange}/>
          <TextField label="Peso" name="weight" variant="outlined" type="number" value={pokemonData.weight} onChange={handleChange}/>
          <TextField label="Altura" name="height" variant="outlined" type="number" value={pokemonData.height} onChange={handleChange}/>
          {pokemonData.picture && <img src={pokemonData.picture} alt="Pokemon" style={{ maxWidth: '200px' }} />}
          <input type="file" name="picture" accept="image/*" className="picture" onChange={handleChange}/>
          <Button type="submit" variant="contained">{isEdit ? 'Actualizar' : 'Guardar'}</Button>
        </Box>
      )}
    </>
  )
}
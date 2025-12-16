import { TextField, Typography, Box, Button} from "@mui/material";
import './PokemonForm.css'

export default function PokemonForm() {
  return (
    <>
        <Typography variant="h4" gutterBottom>
            Formulario de Pokémon
            <Box component="form" sx={{ display:"flex", flexDirection:"column", gap:2 }}>
                <TextField label="Nombre" name="name" variant="outlined" />
                <TextField label="Tipo" name="type" typvariant="outlined" />
                <TextField label="Peso" name="weight" variant="outlined" type="number"/>
                <TextField label="Altura" name="height" variant="outlined" typer="number"/>
                <input type="file" name="picture" accept="image/*" className="picture" required/>
                <Button type="submit" variant="contained">Guardar</Button>
            </Box>
        </Typography>
    </>
  )
}
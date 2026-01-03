import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { Container, Grid } from '@mui/material'
import PokemonList from './components/PokemonList'
import './App.css'
import PokemonForm from './components/PokemonForm'
import TrainerList from './components/TrainerList'

function App() {
  return (
    <>
      <Header />
      <Container>
        <BrowserRouter>
          {/* Rutas y componentes irían aquí */}
          <Routes>
            <Route path="/" element={<PokemonList/>} />
            <Route path="/add-pokemon" element={<PokemonForm/>} />
            <Route path="/trainers" element={<TrainerList/>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  )
}
export default App
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container, Grid } from '@mui/material'
import Header from './components/Header'
import PokemonList from './components/PokemonList'
import './App.css'
import PokemonForm from './components/PokemonForm'

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
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  )
}
export default App
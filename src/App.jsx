import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { Container, Grid } from '@mui/material'
import Login from './pages/Login'
import PokemonList from './pages/PokemonList'
import './App.css'
import PokemonForm from './pages/PokemonForm'
import TrainerList from './components/TrainerList'

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <Header />
          {/* Rutas y componentes irían aquí */}
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/add-pokemon" element={<PokemonForm />} />
            <Route path="/trainers" element={<TrainerList />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  )
}
export default App
import { AppBar, Container, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/userService";
import pokedexLogo from "../assets/pokedex_logo.png";
import "./Header.css";

export default function Header() {
    const isLoggedIn = localStorage.getItem("access_token") !== null;

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    }
    return (
        <>
            <header>
                <div className="pokedex-navbar">
                    <AppBar position="static">
                        <Toolbar>
                            <div className="image-container">
                                <img src={pokedexLogo} alt="Pokedex Logo" height={100} />
                            </div>
                        </Toolbar>
                        <Toolbar>
                            {isLoggedIn && (
                                <>
                                    <Button color="inherit" onClick={handleLogout}>Cerrar Sesión</Button>
                                    <Button color="inherit" href="/add-pokemon">Crear Pokémon</Button>
                                </>
                            )}
                            {!isLoggedIn && (
                                <Button color="inherit" href="/login">Iniciar Sesión</Button>
                            )}
                            <Button color="inherit" href="/">Inicio</Button>
                            <Button color="inherit" href="/trainers">Entrenadores</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </header>
        </>
    );
}
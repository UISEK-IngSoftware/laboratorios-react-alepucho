import { AppBar, Container, Toolbar } from "@mui/material";
import pokedexLogo from "../assets/pokedex_logo.png";
import "./Header.css";

export default function Header() {
    return (
        <Container>
            <header>
                <div className="pokedex-navbar">
                    <AppBar position="static">
                        <Toolbar>
                            <div className="image-container">
                                <img src={pokedexLogo} alt="Pokedex Logo" height={100} />
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
            </header>
        </Container>
    );
}
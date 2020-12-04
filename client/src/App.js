import "./app.scss";
import { Home, NotFound, Footer, PokemonDetails, Toolbar } from "./components";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";

export default function App() {
  const [theme, setTheme] = useState("ligth");
  return (
    <ThemeContext.Provider value={(theme, setTheme)}>
      <Router>
        <Toolbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/pokemons/:id">
            <PokemonDetails />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeContext.Provider>
  );
}

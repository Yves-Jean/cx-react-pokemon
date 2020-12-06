import { Home, NotFound, PokemonDetails, Toolbar } from "./components";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";

import "./app.scss";
import "./scss/style.scss";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Router>
        <Toolbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/pokemon/:id">
            <PokemonDetails />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </ThemeContext.Provider>
  );
}

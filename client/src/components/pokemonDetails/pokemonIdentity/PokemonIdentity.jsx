import React, { useContext } from "react";
import "./PokemonIdentity.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";

const PokemonIdentity = ({ pokemonIndentity }) => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <div className="container">
      <h2>Identity</h2>
      <div
        className={`identity ${
          theme === "dark" ? "identity-dark" : "identity-light"
        }`}
      >
        {Object.keys(pokemonIndentity).map((key, i) => {
          if (pokemonIndentity[key]) {
            return (
              <div
                className={`identity-item ${
                  theme === "dark"
                    ? "identity-item-dark"
                    : "identity-item-light"
                }`}
                key={i}
              >
                <div className="key">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </div>
                <div className="value">{pokemonIndentity[key]}</div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
export default PokemonIdentity;

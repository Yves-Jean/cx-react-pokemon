import React, { useContext, useEffect, useState } from "react";
import {
  getPokemonById,
  deletePokemonById,
} from "../../services/pokemon.service";
import { Link, useHistory, useParams } from "react-router-dom";
import PokemonIdentity from "./pokemonIdentity/PokemonIdentity";
import PokemonAttack from "./pokemonAttack/PokemonAttack";
import "./pokemonDetails.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

const PokemonDetails = () => {
  let { id } = useParams();
  let pokemon_image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
  const [pokemon, setPokemon] = useState({ attaques: [] });
  const { attaques, ...pokemonIdentity } = pokemon;
  let history = useHistory();
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    getPokemonById(id).then((res) => setPokemon(res[0]));
  }, [id]);

  const deletePokemon = () => {
    return deletePokemonById(id).then(() => history.push("/"));
  };

  return (
    <main className="container">
      <div className="container header-details">
        <Link to="/" className="return-arrow">
          <span
            style={{
              fontSize: "3em",
              color: theme === "light" ? "black" : "white",
            }}
          >
            <i class="fas fa-arrow-left"></i>
          </span>
        </Link>
        <h1>
          #{id} {pokemon.nom}
        </h1>
        <img
          src={pokemon_image}
          className="pokemon_image"
          alt="pokemon_image"
        />
      </div>
      <div className="container">
        <div className="edit-pokemon">
          <button onClick={deletePokemon} className="btn btn-pink">
            Delete
          </button>
        </div>
      </div>
      <PokemonIdentity pokemonIndentity={pokemonIdentity} />
      <PokemonAttack attaques={attaques} />
    </main>
  );
};

export default PokemonDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../../services/pokemon.service";
import { Link } from "react-router-dom";

const PokemonDetails = () => {
  let { id } = useParams();
  let pokemon_image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    getPokemonById(id).then((res) => setPokemon(res));
  }, [id]);
  return (
    <main className="container">
      <Link to="/" className="returnArrow" />
      <img src="../../assets/images/arrow_white.png" alt="" />
      <h1>
        #{id} {pokemon.nom}
      </h1>
      <img src={pokemon_image} alt="pokemon_image" />
    </main>
  );
};

export default PokemonDetails;

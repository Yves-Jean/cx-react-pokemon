import React from "react";
import "./home.scss";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import PokemonList from "../pokemonList/PokemonList";

import logo from "../../assets/images/logo.svg"; //! Change logo to logo pokedex

const Home = () => {
  return (
    <main className="container">
      <div className="display-flex flex-d-col flex-align-center mg-y-4">
        <NavLink to="/">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
        <SearchBar />
        <PokemonList />
      </div>
    </main>
  );
};

export default Home;

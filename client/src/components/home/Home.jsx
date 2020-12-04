import React from "react";
import "./home.scss";
import logo from "../../assets/images/logo.svg"; //! Change logo to logo pokedex
import { NavLink } from "react-router-dom";
import SearchBar from '../searchBar/SearchBar';
import PokemonList from '../pokemonList/PokemonList';

const Home = () => {
  return (
    <main className="container">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <SearchBar/>
      <PokemonList/>
    </main>
  );
};

export default Home;

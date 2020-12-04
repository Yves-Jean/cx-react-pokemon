import React from "react";
import "./home.scss";

import logo from '../../assets/images/logo.svg'; //! Change logo to logo pokedex
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className="container">
      <NavLink to="/">
      <img src={logo} alt="logo"/>
      </NavLink>
    </main>
  );
};

export default Home;

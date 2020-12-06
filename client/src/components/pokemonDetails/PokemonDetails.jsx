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
import Modal from "react-modal";

const PokemonDetails = () => {
  let { id } = useParams();
  let pokemon_image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
  const [pokemon, setPokemon] = useState({ attaques: [] });
  const { attaques, ...pokemonIdentity } = pokemon;
  let history = useHistory();
  const [theme, setTheme] = useContext(ThemeContext);
  const [modalIsOpen, setIsOpen] = useState(false);

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "300px",
      display: "flex",
      justifyContent: "center",
      alignItmes: "center",
      flexDirection: "column",
      padding: "50px",
      textAlign: "center",
      background:
        theme === "dark" ? "var(--background-drak)" : "var(--background-light)",
    },
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };
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
          <button onClick={openModal} className="btn btn-pink">
            Delete
          </button>
        </div>
      </div>
      <PokemonIdentity pokemonIndentity={pokemonIdentity} />
      <PokemonAttack attaques={attaques} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <h3>Are you sure to delete this pokemon ?</h3>

        <div className="btns">
          <button className="btn btn-blue mg-r-4" onClick={closeModal}>
            Cancel
          </button>
          <button onClick={deletePokemon} className="btn btn-pink">
            Delete
          </button>
        </div>
      </Modal>
    </main>
  );
};

export default PokemonDetails;

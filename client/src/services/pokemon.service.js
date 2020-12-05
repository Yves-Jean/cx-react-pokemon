const url = process.env.REACT_APP_POKEDEX_API;

export function getPokemonById(id) {
  return fetch(`${url}/pokemons/${id}`)
    .then((res) => res.json())
    .then((data) => new Promise(data));
}
export function getAllPokemons() {
  return fetch(`${url}`)
    .then((res) => res.json())
    .then((data) => new Promise(data));
}

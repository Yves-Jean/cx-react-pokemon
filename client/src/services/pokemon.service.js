const url = process.env.REACT_APP_POKEDEX_API;

export function getPokemonById(id) {
  return fetch(`${url}/pokemons/${id}`).then((res) => res.json());
}
export function getAllPokemons() {
  return fetch(`${url}/pokemons`).then((res) => res.json());
}
export function deletePokemonById(id) {
  return fetch(`${url}/pokemons/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
}

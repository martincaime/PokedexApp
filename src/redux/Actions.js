// add pokemon to card

export function addPokemonSearch(pokemon) {
  return function (dispatch) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(r => r.json())
      .then((data) => dispatch({
        type: 'ADD_POKEMON_SEARCH',
        payload: data
      })
      );
  };
}

// remove pokemon from card

export function removePokemonSearch(pokemon) {
  return {
    type: 'REMOVE_POKEMON_SEARCH',
    payload: pokemon
  };
}

// add pokemon to favorite

export function addPokemonFavorite(pokemon) {
  return {
    type: 'ADD_POKEMON_FAVORITE',
    payload: pokemon
  };
}

// remove pokemon from favorite

export function removePokemonFavorite(pokemon) {
  return {
    type: 'REMOVE_POKEMON_FAVORITE',
    payload: pokemon
  };
}

// search pokemon evolutions

export function searchPokemonEvolutions(pokemon) {
  return function (dispatch) {
    fetch(pokemon)
      .then(r => r.json())
      .then((result) =>
        fetch(result.evolution_chain.url)
          .then(res => res.json())
          .then((evodata) => dispatch({
            type: 'SEARCH_POKEMON_EVOLUTIONS',
            payload: evodata
          })
          ));
  };
}

// search previous and next pokemon

export function previousNextPokemon(pokemon) {
  return {
    type: 'PREVIOUS_NEXT_POKEMON',
    payload: pokemon
  };
}

// set pokemon details

export function pokemonDetails(pokemon) {
  return function (dispatch) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(r => r.json())
      .then((data) => dispatch({
        type: 'POKEMON_DETAILS',
        payload: data
      })
      );
  };
}
const initialState = {
  pokemonSearch: [],
  pokemonFavorite: [],
  pokemonEvolutions: {},
  prevNextPokemon: [],
  pokemonDetails: {}
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_POKEMON_SEARCH':
      return {
        ...state,
        pokemonSearch: state.pokemonSearch.concat(action.payload)
      }
    case 'REMOVE_POKEMON_SEARCH':
      return {
        ...state,
        pokemonSearch: state.pokemonSearch.filter(pokemon => pokemon.id !== action.payload)
      }
    case 'ADD_POKEMON_FAVORITE':
      return {
        ...state,
        pokemonFavorite: state.pokemonFavorite.concat(action.payload)
      }
    case 'REMOVE_POKEMON_FAVORITE':
      return {
        ...state,
        pokemonFavorite: state.pokemonFavorite.filter(pokemon => pokemon.id !== action.payload)
      }
    case 'SEARCH_POKEMON_EVOLUTIONS':
      return {
        ...state,
        pokemonEvolutions: action.payload
      }
    case 'PREVIOUS_NEXT_POKEMON':
      return {
        ...state,
        prevNextPokemon: [action.payload - 1, action.payload + 1]
      }
    case 'POKEMON_DETAILS':
      return {
        ...state,
        pokemonDetails: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchPokemonEvolutions, previousNextPokemon, pokemonDetails } from '../redux/Actions.js';
import Detail from './Detail.jsx';
import Evolutions from './Evolutions.jsx';
import './Details.css';

function PokemonDetails({ pokemon, evolutions, previousandnext, searchPokemonEvolutions, pokemonDetails, previousNextPokemon }) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (Object.keys(pokemon).length > 0) {
      searchPokemonEvolutions(pokemon.species.url);
      previousNextPokemon(pokemon.id);
      setActive(true);
    }
    return () => { setActive(false) }
  }, [pokemon, searchPokemonEvolutions, previousNextPokemon])

  function prevandnextpokemon(id) {
    if (id > 0 && id < 899) {
      return pokemonDetails(id)
    }
    return null
  }
  return (
    <div>
      {active ?
        <div>
          <div className='buttons'>
            <button className='button' onClick={() => { prevandnextpokemon(previousandnext[0]) }}>
              <Link className='buttonLeft' to={`/pokemon/${previousandnext[0]}`} key={pokemon.name + previousandnext[0]}>{'<'}
              </Link>
            </button>
            <button className='button' onClick={() => { prevandnextpokemon(previousandnext[1]) }}>
              <Link className='buttonRight' to={`/pokemon/${previousandnext[1]}`} key={pokemon.name + previousandnext[1]}>{'>'}
              </Link>
            </button>
          </div>
          <div className='Detail'>
            <Detail pokemon={pokemon} />
            <Evolutions evolutions={evolutions} />
          </div>
        </div>
        : <div>Loading</div>}
    </div>

  )
}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemonDetails,
    evolutions: state.pokemonEvolutions,
    previousandnext: state.prevNextPokemon
  }
}
function mapDispatchToProps(dispatch) {
  return {
    searchPokemonEvolutions: pokemon => dispatch(searchPokemonEvolutions(pokemon)),
    previousNextPokemon: id => dispatch(previousNextPokemon(id)),
    pokemonDetails: id => dispatch(pokemonDetails(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails)
import React, { useState } from 'react';
import Logo from '../img/Pokelogo.svg';
import { addPokemonSearch } from '../redux/Actions.js';
import './Nav.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function NavBar(props) {
  const [pokemon, setPokemon] = useState('');
  const min = 1;
  const max = 898;
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function handleChange(event) {
    setPokemon(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.addPokemonSearch(pokemon);
    setPokemon('') 
  }

return (
  <nav className='navBar'>
    <Link to='/'>
      <img className='pokeLogo' src={Logo} alt='Pokémon Logo'/> 
    </Link>
    <Link to='/about' style={{ textDecoration: 'none' }}>
      <div className='aboutNav'>
        <h4>About</h4>
      </div>
    </Link>
    <Link to='/myteam' style={{ textDecoration: 'none' }}>
      <div className='myTeam'>
        <h4>My Team</h4>
      </div>
    </Link>
    <div className='navButtons'>
        <button className='randomPokemon' onClick={() => props.addPokemonSearch(getRandomInt(min, max))}>Push</button>
        <form
        onSubmit={(e) => {handleSubmit(e);}}>
        <div className='searchBar'>
          <input className='searchInput' type='text' placeholder='Pokémon' value={pokemon}
          onChange={(e) => handleChange(e)} />
          <input className='searchButton' type='submit' value='Search'/>
        </div>
        </form>
    </div>
  </nav>
  )
}

function mapStateToProps (state) {
  return {
    pokemon: state.pokemonSearch
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPokemonSearch: (pokemon) => dispatch(addPokemonSearch(pokemon))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
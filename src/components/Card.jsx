import React, {useState, useEffect } from 'react';
import './Card.css'
import pokeball from '../img/pokeball.png'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removePokemonSearch, addPokemonFavorite, removePokemonFavorite, pokemonDetails } from '../redux/Actions';

function Card(props) {
  const [active, setActive] = useState(false)
  let classType = props.types[0].type.name;
  let classes = `card ${classType}`

  useEffect(() => {
    if (props.team.filter(pokemon => pokemon.name === props.name).length > 0) {
      setActive(true);
    }
    else {
      setActive(false); 
    }
  }, [active, props.name, props.team])

  function toggle() {
    setActive(!active);
  }

  function addToTeam() {
    if (props.team.filter(pokemon => pokemon.name === props.name).length > 0) {
      return props.removePokemonFavorite(props.id);
    }
    else {
      return props.addPokemonFavorite(props); 
    }
  }
  return (
    <div className={classes} >
      <div className='nameId'>
        <h3 className='pokemonName'>{props.name}</h3>
        <h3 className='id'>{props.id}</h3>
      </div>
      <div className='info'>
        <div className='heightInfo'>
          <p className='heightTitle'>Height:</p>
          <p className='height'>{props.height / 10} m</p>
        </div>
        <div className='weightInfo'>
          <p className='weightTitle'>Weight:</p>
          <p className='weight'> {props.weight / 10} kg</p>
        </div>
        <img src={props.img} className='pokemonIcon' alt='Pokémon Icon' />
        <p className='types'>{props.types.map(p => <span key={props.name + p.type.name}>{p.type.name}</span>)}</p>
      </div>
      <Link to={`/pokemon/${props.id}`}>
        <button onClick={() => props.pokemonDetails(props.id)}className='buttonInfo'>Info</button>
      </Link>
      <button onClick={() => props.removePokemonSearch(props.id)} className='buttonClose'>Close</button>
      <button className='buttonTeam' onClick={() => {addToTeam(); toggle()}}>
        <img className={active ? 'active' : 'inactive'} src={pokeball} alt='Pokéball Icon'/>
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    team: state.pokemonFavorite,
    pokemons: state.pokemonSearch
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removePokemonSearch: pokemon => dispatch(removePokemonSearch(pokemon)),
    addPokemonFavorite: pokemon => dispatch(addPokemonFavorite(pokemon)),
    removePokemonFavorite: pokemon => dispatch(removePokemonFavorite(pokemon)),
    pokemonDetails: pokemon => dispatch(pokemonDetails(pokemon))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
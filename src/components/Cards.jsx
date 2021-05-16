import React from 'react';
import Card from './Card.jsx';
import './Cards.css'
import { connect } from 'react-redux';

function Cards(props) {
  if (props.pokemons.length > 0) {
    return (
      <div className='pokeSearch'>
        {props.pokemons.map(p =>
          <div key={p.id}>
            <Card
              key={p.id}
              id={p.id}
              name={p.name}
              height={p.height}
              weight={p.weight}
              types={p.types}
              img={p.sprites.front_default}
            />
          </div>)}
      </div>
    )
  }
  else {
    return (
      <div className='noPokemons'>
        <h4>There are no Pokémons</h4>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemonSearch
  }
}

export default connect(mapStateToProps, null)(Cards)
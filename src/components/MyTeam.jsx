import React from 'react';
import { connect } from 'react-redux';
import Card from './Card.jsx';
import './MyTeam.css';

function Team(props) {
  return (
    <div>
      <div className='myPokemons'>
        {props.team.map(p =>
          <div key={p.id}>
            <Card
              key={p.id}
              id={p.id}
              name={p.name}
              height={p.height}
              weight={p.weight}
              types={p.types}
              img={p.img}
            />
          </div>)}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    team: state.pokemonFavorite
  }
}

export default connect(mapStateToProps, null)(Team);
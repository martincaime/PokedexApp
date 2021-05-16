import React from 'react';
import './Detail.css'

export default function Detail({ pokemon }) {
  return (
    <div className='details'>
      <div className='pokemonInfo'>
        <h2 className='pokeName'>{pokemon.name}</h2>
        <img className='pokemonImage' src={pokemon.sprites.front_default} alt='Pokémon' />
        <div className='type'>
          <p>Type: </p>
          <div>
            {pokemon.types.map(p =>
              <span key={pokemon.name + p.type.name}>{p.type.name}
              </span>)}
          </div>
        </div>
        <div className='abilities'>
          <p className='abilitiesTitle'>Abilities: </p>
          <div className='abi'>{pokemon.abilities.map(a =>
            <span className='ability' key={pokemon.name + a.ability.name}>{a.ability.name}
            </span>)}
          </div>
        </div>
        <div className='stats'>
          <div  className='stat'>
          {pokemon.stats.map(s =>
              <p key={pokemon.name + s.stat.name} className='statName'>
                {s.stat.name}:
              </p>
            )}</div>
            <div className='statBars'>
          {pokemon.stats.map(s =>
              <p className='statBar' key={pokemon.name + s.stat.name + 1}>
                <span style={{ 'width': `${s.base_stat * 100 / 225}%` }} className={s.stat.name}>
                  {s.base_stat}
                </span>
              </p>
            )}</div>
        </div>
      </div>
    </div>
  )
}
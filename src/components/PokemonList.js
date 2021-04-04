import React from 'react'
import {NavLink} from 'react-router-dom'
import PokemonCard from './PokemonCard'
import SpinnerLoader from './SpinnerLoader'

const PokemonList = ({isLoading, pokemons}) => {

    return isLoading ? (<SpinnerLoader/>) :
    (
        <div className="pokemon-list">
          { pokemons.map((pokemon, index)=>{
              return (
                <div className="col"  key={index}>
                    <NavLink to={{
                        pathname: `/pokemon/${pokemon.name}`
                    }}  key={index}>
                        <PokemonCard pokemon={pokemon}/>
                    </NavLink>
              </div>
              )
          })}
          
        </div>
    )
}

export default PokemonList;

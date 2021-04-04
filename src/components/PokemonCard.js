import React from 'react'

const PokemonCard = ({pokemon}) => {
    return (
        
            <div className="card">
                <div className="card-title">{pokemon.name.toUpperCase()}</div>
            </div>
    )
}

export default PokemonCard

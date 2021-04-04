import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import SpinnerLoader from '../components/SpinnerLoader'

const Pokemons = () => {

    const [pokemon, setPokemon] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {pokemonName} = useParams()

    useEffect(() => {
        const fetchPokemonList = async () =>{
            const res =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            setPokemon(res.data)
            setIsLoading(false)

        }
        fetchPokemonList().catch(error=>{
            setIsLoading(false) 
        })
    }, [])


    return isLoading ? (<SpinnerLoader/>) :(
        <div>
            <h2 className="title">Poke`mon Details</h2>
            <h1>{pokemon.name.toUpperCase()}</h1>
            {Object.values(pokemon.sprites).map((sprite, index) =>{
                return <img className="sprites" key={index} src={sprite} alt=""/>
            })}
        </div>
    )
}

export default Pokemons

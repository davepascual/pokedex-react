import React, {useState, useEffect} from 'react'
import axios from 'axios'
import _ from 'lodash'
import PokemonList from '../components/PokemonList'
import Button from '../components/Button'

const Pokemons = () => {

    const [pokemons, setPokemons] = useState([])
    const [pokemonsData, setPokemonsData] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const fetchNextPage = async (url) =>{
        const res =  await axios.get(`${url}`)
        setPokemons([...pokemons, ...res.data.results])
        setPokemonsData(res.data)
        console.log(res)
    }

    let button;
    if( !_.isEmpty(pokemonsData.next))
        button = <Button onClick={()=>fetchNextPage(pokemonsData.next)} text="Load more" isLoading={isLoading}></Button>
    else
        button = <p>End of result</p>


    useEffect(() => {
        console.log(pokemons)

        const fetchPokemonList = async () =>{
            const res =  await axios.get(`https://pokeapi.co/api/v2/pokemon?`)
            setPokemonsData(res.data)
            setPokemons(res.data.results)
            setIsLoading(false)

        }
        fetchPokemonList().catch(error=>{
            setIsLoading(false) 
        })
    }, [])


    return (
        <div>
            <h2 className="title">List of Pokemons ({pokemonsData.count})</h2>
            <PokemonList isLoading={isLoading} pokemons={pokemons}/>
            {button}
        </div>
    )
}

export default Pokemons

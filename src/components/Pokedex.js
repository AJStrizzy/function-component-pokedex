import Axios from 'axios'
import { useState, useEffect } from 'react'

function Pokedex() {
    //use useState to handle the pokemonName and pokemonImage
    const [pokemonName, setPokemonName] = useState('pikachu')
    const [pokemonImage, setPokemonImage] = useState('')

    useEffect(() => {
        console.log('infinite loop test')

        if(pokemonName === ''){
            return
        }
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) => {
            setPokemonImage(res.data.sprites.front_default)
        }).catch((err) => {
            setPokemonImage('')
        })
    })

    return(
        <div>
            <h1>Fishcher-Price My First Pokedex</h1>
            <input value={pokemonName} onChange={(e) => 
            {setPokemonName(e.target.value.toLowerCase())}} />
            <div>
                <img src={pokemonImage} />
            </div>
        </div>
    )

}

export default Pokedex;

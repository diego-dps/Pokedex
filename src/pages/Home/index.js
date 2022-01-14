import React, { useEffect, useState } from 'react';
import api from '../../services/pokeApi'
import PokemonCard from '../../components/PokemonCard';

function Home() {
    
    const [pokemons, setPokemons] = useState({ pokemon: [] });

    async function getPokemon() {
        const response = await api.get('pokemon/pikachu')
        setPokemons({ pokemon: response.data })
        console.log(response.data)

    }

    useEffect(() => {
        getPokemon();
    }, []);


    const { pokemon } = pokemons
    console.log(pokemon)

    return (
        <PokemonCard
            imageUrl={pokemon.sprites.front_default}
            tipo={pokemon.types['0'].type.name}
            nome={pokemon.name}
        />
    )
}

export default Home;
import React, { useState } from 'react';
import axios from 'axios';

const PokeApiAxios = () => {
    const [pokemon, setPokemon] = useState([]);
    const getPoke = e => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
        .then(response=>setPokemon(response.data.results))
        .catch(error => console.log(error));
    }
    return (
        <div>
            <button type="submit" onClick={getPoke}>Fetch Pokemon!</button>
            {pokemon.map((pokemon, i)=>
                <li key={i}>{pokemon.name}</li>
            )}
        </div>
    );
}

export default PokeApiAxios;
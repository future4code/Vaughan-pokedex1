import react, { useState } from 'react';
import useRequestData from '../../hooks/useRequestData';
import { CardContainer } from './styled';
import { baseURL } from '../../constants/baseURL';
import axios from 'axios';

const PokemonCard = () => {
    const [data, pokemon] = useRequestData([], `${baseURL}/pokemon/`);

    console.log(pokemon)
    // console.log(pokemon[0])
    // const pokemons = pokemon.map((item) => {
    //     console.log(item.name)
    //     return (
    //         <CardContainer>
    //             {item.name}
    //             {/* <img src={item.sprites.other.dream_world.front_default} alt="Pokemon" /> */}

    //             <button>Adicionar</button>
    //             <button>Detalhes</button>
    //         </CardContainer>
    //     )
    // })

    return (
        <div>
            {pokemon}

        </div>
    );
}

export default PokemonCard;
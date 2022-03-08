import react, { useState } from 'react';
import useRequestData from '../../hooks/useRequestData';
import { ButtonContainer, CardContainer, DivContainer, ImageContainer } from './styled';
import { baseURL } from '../../constants/baseURL';
import axios from 'axios';

const PokemonCard = () => {
    const [data, arrayData] = useRequestData([], `${baseURL}/pokemon/`);
        
    const pokemons = arrayData && arrayData.map((item) => {
        return (
            <CardContainer key={item.id}>
                <p>{item.name[0].toUpperCase()}{item.name.slice(1)}</p>
                <ImageContainer>
                    <img src={item.sprites.other.dream_world.front_default} alt={item.name} />
                </ImageContainer>
                
                <ButtonContainer>
                    <button>Adicionar</button>
                    <button>Detalhes</button>
                </ButtonContainer>
                
            </CardContainer>
        )
    })
   
    return (
        <DivContainer>
            {pokemons}
        </DivContainer>
    );
}

export default PokemonCard;
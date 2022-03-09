import react, { useState } from 'react';
import useRequestData from '../../hooks/useRequestData';
import { ButtonContainer, CardContainer, DivContainer, ImageContainer } from './styled';
import { baseURL } from '../../constants/baseURL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { goToDetails } from '../../routers/coordenation';


const PokemonCard = ({buttonAddRem}) => {
    const [data, arrayData] = useRequestData([], `${baseURL}/pokemon/`);
    const navigate = useNavigate();
    
    const pokemons = arrayData && arrayData.map((item) => {
        return (
            <CardContainer key={item.id}>
                <p>{item.name[0].toUpperCase()}{item.name.slice(1)}</p>
                <ImageContainer>
                    <img src={item.sprites.other.dream_world.front_default} alt={item.name} />
                </ImageContainer>
                
                <ButtonContainer>
                  <button>{buttonAddRem}</button>
                    <button onClick={() => {goToDetails(navigate, item.id)}}>Detalhes</button>
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
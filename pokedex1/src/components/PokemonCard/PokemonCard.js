import React, { useContext } from 'react';
import { ButtonContainer, CardContainer, DivContainer, ImageContainer } from './styled';
import { useNavigate } from 'react-router-dom';
import { goToDetails } from '../../routers/coordenation';
import { GlobalStateContext } from '../../global/GlobalStateContext';



const PokemonCard = ({buttonAddRem, pokemonDetails ,   }) => {
    const navigate = useNavigate();
    const {add, setAdd} = useContext(GlobalStateContext);
    

   const onClickHandler = (id) => { 
       const arrayAdd = [...add]
       arrayAdd.push(id)
       setAdd(arrayAdd)
      

   }


    const pokemons = 
    pokemonDetails 
    && 
    pokemonDetails
    .filter(item => { 
        if(add.includes(item.id)){ 
            return false 
        }else  
            return true
        }
       

    
    
    ).map((item) => {
        return (
            <CardContainer key={item.id}>
                <p>{item.name[0].toUpperCase()}{item.name.slice(1)}</p>
                <ImageContainer>
                    <img src={item.sprites.other.dream_world.front_default} alt={item.name} />
                </ImageContainer>
                
                <ButtonContainer>
                  <button
                  onClick={()=> onClickHandler(item.id)}
                  >{buttonAddRem}</button>
                    <button onClick={() => {goToDetails(navigate, item.id)}}>Detalhes</button>
                </ButtonContainer>
                
            </CardContainer>
        )
    });
   
    return (
        <DivContainer>
         {console.log(add)}
            {pokemons}
        </DivContainer>
    );
}

export default PokemonCard;
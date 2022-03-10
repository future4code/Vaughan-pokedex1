import { useContext } from 'react';
import { ButtonContainer, CardContainer, DivContainer, ImageContainer, MainContainer, PaginationStyled } from './styled';
import { useNavigate } from 'react-router-dom';
import { goToDetails } from '../../routers/coordenation';
import { GlobalStateContext } from '../../global/GlobalStateContext';



const PokemonCard = ({buttonAddRem  }) => {
    const navigate = useNavigate();
    const { add, setAdd , pokemonDetails, currentPage, setCurrentPage, setOffset } = useContext(GlobalStateContext);
    
    const changeCurrentPage = (event, number) => {
        setCurrentPage(number)
        setOffset((number - 1) * 20);
    };

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
                    <img src={item.sprites.other.home.front_default} alt={item.name} />
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
        <MainContainer>
            <PaginationStyled count={56} page={currentPage} onChange={changeCurrentPage} color="primary"/>
            <DivContainer>

                {pokemons}
                
            </DivContainer>
            <PaginationStyled count={56} page={currentPage} onChange={changeCurrentPage} color="primary" />
        </MainContainer>
    );
}

export default PokemonCard;
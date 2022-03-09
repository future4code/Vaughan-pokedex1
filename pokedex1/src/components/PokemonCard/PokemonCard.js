import { useContext } from 'react';
import { ButtonContainer, CardContainer, DivContainer, ImageContainer, MainContainer, PaginationStyled } from './styled';
import { useNavigate } from 'react-router-dom';
import { goToDetails } from '../../routers/coordenation';
import { GlobalStateContext } from '../../global/GlobalStateContext';

const PokemonCard = ({ buttonAddRem }) => {
    const { pokemonDetails, currentPage, setCurrentPage, setOffset } = useContext(GlobalStateContext);
    const navigate = useNavigate();

    const changeCurrentPage = (event, number) => {
        setCurrentPage(number)
        setOffset((number - 1) * 20);
    };

    const pokemons = pokemonDetails && pokemonDetails.map((item) => {
        return (
            <CardContainer key={item.id}>
                <p>{item.name[0].toUpperCase()}{item.name.slice(1)}</p>
                <ImageContainer>
                    <img src={item.sprites.other.dream_world.front_default} alt={item.name} />
                </ImageContainer>

                <ButtonContainer>
                    <button>{buttonAddRem}</button>
                    <button onClick={() => { goToDetails(navigate, item.id) }}>Detalhes</button>
                </ButtonContainer>

            </CardContainer>
        )
    });

    return (
        <MainContainer>
            <PaginationStyled count={33} page={currentPage} onChange={changeCurrentPage} color="primary"/>
            <DivContainer>
                {pokemons}
            </DivContainer>
            <PaginationStyled count={33} page={currentPage} onChange={changeCurrentPage} color="primary" />
        </MainContainer>
    );
}

export default PokemonCard;
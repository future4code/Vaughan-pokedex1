import react, { useContext } from 'react';
import { ButtonContainer, CardContainer, DivContainer, ImageContainer, MainContainer } from './styled';
import { useNavigate } from 'react-router-dom';
import { goToDetails } from '../../routers/coordenation';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const PokemonCard = ({ buttonAddRem }) => {
    const { pokemonDetails, currentPage, setCurrentPage, offset, setOffset } = useContext(GlobalStateContext);
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
            <Pagination count={33} page={currentPage} onChange={changeCurrentPage} color="primary"/>
            <DivContainer>
                {pokemons}
            </DivContainer>
            <Pagination count={33} page={currentPage} onChange={changeCurrentPage} />
        </MainContainer>
    );
}

export default PokemonCard;
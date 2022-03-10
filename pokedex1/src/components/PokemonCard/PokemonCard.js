import { useContext } from "react";
import {
  ButtonContainer,
  CardContainer,
  DivContainer,
  ImageContainer,
  MainContainer,
  PaginationStyled,
  Loading
} from "./styled";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../routers/coordenation";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { CircularProgress } from "@mui/material";

const PokemonCard = ({ buttonAddRem, pokemonDetails, dataUp, isPokedex }) => {
  const navigate = useNavigate();
  const { currentPage, setCurrentPage, setOffset, isLoading } =
    useContext(GlobalStateContext);

  const changeCurrentPage = (event, number) => {
    setCurrentPage(number);
    setOffset((number - 1) * 20);
  };

  const onClickHandler = (id) => {
    dataUp(id);
  };

  const pokemons =
    pokemonDetails &&
    pokemonDetails.map((item) => {
      return (
        <CardContainer key={item.id}>
          <p>
            {item.name[0].toUpperCase()}
            {item.name.slice(1)}
          </p>
          <ImageContainer>
            {item.sprites.other.dream_world.front_default ? 
            <img src={item.sprites.other.dream_world.front_default} alt={item.name} /> :
            <img src={item.sprites.other.home.front_default} alt={item.name} />}
            
          </ImageContainer>

          <ButtonContainer>
            <button onClick={() => onClickHandler(item.id)}>
              {buttonAddRem}
            </button>
            <button
              onClick={() => {
                goToDetails(navigate, item.id);
              }}
            >
              Detalhes
            </button>
          </ButtonContainer>
        </CardContainer>
      );
    });

  return (
    <MainContainer>
      {isLoading && <Loading color="primary"/> }
      {!isLoading &&
     !isPokedex && <PaginationStyled
        count={56}
        page={currentPage}
        onChange={changeCurrentPage}
        color='primary'
      /> }
      <DivContainer>{pokemons}</DivContainer>
      {!isLoading && !isPokedex && <PaginationStyled
        count={56}
        page={currentPage}
        onChange={changeCurrentPage}
        color='primary'
      />}
    </MainContainer>
  );
};

export default PokemonCard;

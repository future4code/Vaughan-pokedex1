import { useContext, useEffect, useState } from "react";
import {
  ButtonContainer,
  CardContainer,
  DivContainer,
  ImageContainer,
  MainContainer,
  PaginationStyled,
  Loading,
  EmptyPokedexImage,
  BattleMessage,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../routers/coordenation";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import PikachuAloneImage from "../../assets/images/all-alone-pikachu.gif"

const PokemonCard = ({ buttonAddRem, pokemonDetails, dataUp, isPokedex, buttonBattle }) => {
  const navigate = useNavigate();
  const { currentPage, setCurrentPage, numbersOfPokemonsAtHome, setOffset, isLoading, error } =
    useContext(GlobalStateContext);

  const [pokemonBattle, setPokemonBattle] = useState([]);
  const [pokemonBattleNames, setPokemonBattleNames] = useState([]);
  const [pokemonBattleImages, setPokemonBattleImages] = useState([]);

  const changeCurrentPage = (event, number) => {
    setCurrentPage(number);
    setOffset((number - 1) * 20);
  };

  const onClickHandler = (id) => {
    dataUp(id);
  };

  const onClickBattle = (id, name, image) => {
    if (pokemonBattle.length === 0) {
      setPokemonBattle([...pokemonBattle, id])
      setPokemonBattleNames([...pokemonBattleNames, name])
      setPokemonBattleImages([...pokemonBattleImages, image])
    }
    if (pokemonBattle.length <= 1) {
      setPokemonBattle([...pokemonBattle, id])
      setPokemonBattleNames([...pokemonBattleNames, name])
      setPokemonBattleImages([...pokemonBattleImages, image])
    }
  };

  const clickNewBattle = () => {
    setPokemonBattle([])
    setPokemonBattleNames([])
    setPokemonBattleImages([])
  };

  const pokemons =
    pokemonDetails &&
    pokemonDetails.map((item) => {
      return (
        <CardContainer key={item.id}>
          <p>
            {item.name}
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
            {isPokedex ?
              <div>
                <button onClick={() => {
                  let sum = 0
                  for (let stat of item.stats) {
                    sum = sum + stat.base_stat
                  }
                  onClickBattle(sum, item.name, item.sprites.front_default)
                }}>

                  {buttonBattle}

                </button>
              </div> :
              false}
          </ButtonContainer>
        </CardContainer>
      );
    });

  return (
    <MainContainer>
      {numbersOfPokemonsAtHome ? <EmptyPokedexImage src={PikachuAloneImage} alt="Pikachu Sozinho" /> : <>
        {pokemonBattle.length === 1 ?
          <BattleMessage>Escolha outro Pokemon para batalhar com {pokemonBattleNames[0][0].toUpperCase()}
            {pokemonBattleNames[0].slice(1)}!</BattleMessage> :
          <></>}
        {pokemonBattle[0] > pokemonBattle[1] ? <div>
          <BattleMessage><img src={pokemonBattleImages[0]}/>{pokemonBattleNames[0][0].toUpperCase()}{pokemonBattleNames[0].slice(1)} ganhou
            de {pokemonBattleNames[1][0].toUpperCase()}{pokemonBattleNames[1].slice(1)} com {pokemonBattle[0]} pontos!</BattleMessage>
        </div>
          :
          <></>}
        {pokemonBattle[0] < pokemonBattle[1] ? <div>
          <BattleMessage><img src={pokemonBattleImages[1]}/>{pokemonBattleNames[1][0].toUpperCase()}{pokemonBattleNames[1].slice(1)} ganhou
            de {pokemonBattleNames[0][0].toUpperCase()}{pokemonBattleNames[0].slice(1)} com {pokemonBattle[0]} pontos!</BattleMessage>
        </div>
          :
          <></>}
        {pokemonBattle.length === 2 && pokemonBattleNames[0] !== pokemonBattleNames[1] && pokemonBattle[0] === pokemonBattle[1] ? <div>
          <BattleMessage>Empatou!</BattleMessage>
        </div>
          :
          <></>}
        {pokemonBattle.length === 2 && pokemonBattleNames[0] === pokemonBattleNames[1] ? <div>
          <BattleMessage>Um pokemon não pode batalhar com si mesmo! Escolha outro.</BattleMessage>
        </div>
          :
          <></>}
        {pokemonBattle.length === 2 ? <ButtonContainer>
          <button onClick={clickNewBattle}>Começar Nova Batalha</button>
        </ButtonContainer> : <></>}
        {isLoading && <Loading color="primary" />}
        {(!isLoading &&
          !isPokedex && <PaginationStyled
            count={56}
            page={currentPage}
            onChange={changeCurrentPage}
            color='primary'
          />)}
        <DivContainer>{!isLoading && pokemons}</DivContainer>
        {(!isLoading &&
          !isPokedex && <PaginationStyled
            count={56}
            page={currentPage}
            onChange={changeCurrentPage}
            color='primary'
          />)}</>}
        {!isLoading && error && <p>Ocorreu um erro! Tente novamente.</p>}
    </MainContainer>
  );
};

export default PokemonCard;

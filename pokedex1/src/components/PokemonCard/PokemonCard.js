import { useContext, useEffect, useState } from "react";
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

const PokemonCard = ({ buttonAddRem, pokemonDetails, dataUp, isPokedex, buttonBattle }) => {
  const navigate = useNavigate();
  const { currentPage, setCurrentPage, setOffset, isLoading } =
    useContext(GlobalStateContext);

  const [pokemonBattle, setPokemonBattle] = useState([]);
  const [pokemonBattleNames, setPokemonBattleNames] = useState([]);

  useEffect(() => {
    battleResults()
  }, [pokemonBattle])

  const changeCurrentPage = (event, number) => {
    setCurrentPage(number);
    setOffset((number - 1) * 20);
  };

  const onClickHandler = (id) => {
    dataUp(id);
  };

  const onClickBattle = (id, name) => {
    console.log('funçao adicionar', id)
    if (pokemonBattle.length === 0) {
      setPokemonBattle([...pokemonBattle, id])
      setPokemonBattleNames([...pokemonBattleNames, name])
      alert("Escolha outro Pokemon para Batalhar!")
    }
    if (pokemonBattle.length <= 1) {
      setPokemonBattle([...pokemonBattle, id])
      setPokemonBattleNames([...pokemonBattleNames, name])
    }
  };

  const battleResults = () => {
    if (pokemonBattle.length === 2 && pokemonBattle[0] > pokemonBattle[1]) {
      setPokemonBattle([])
      alert(`${pokemonBattleNames[0][0].toUpperCase()}${pokemonBattleNames[0].slice(1)} ganhou com ${pokemonBattle[0]}!`)
      setPokemonBattleNames([])
      console.log("")
    } else if (pokemonBattle.length === 2 && pokemonBattle[0] < pokemonBattle[1]) {
      setPokemonBattle([])
      alert(`${pokemonBattleNames[1][0].toUpperCase()}${pokemonBattleNames[1].slice(1)} ganhou com ${pokemonBattle[1]} pontos!`)
      setPokemonBattleNames([])
    } else if (pokemonBattle.length === 2 && pokemonBattle[0] === pokemonBattle[1]) {
      setPokemonBattle([])
      alert("Empatou!")
      setPokemonBattleNames([])
    };
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
            {isPokedex ?
              <div>
                <button onClick={() => {
                  let sum = 0
                  for (let stat of item.stats) {
                    sum = sum + stat.base_stat
                  }
                  onClickBattle(sum, item.name)
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
      {isLoading && <Loading color="primary" />}
      {!isLoading &&
        !isPokedex && <PaginationStyled
          count={56}
          page={currentPage}
          onChange={changeCurrentPage}
          color='primary'
        />}
      <DivContainer>{!isLoading && pokemons}</DivContainer>
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

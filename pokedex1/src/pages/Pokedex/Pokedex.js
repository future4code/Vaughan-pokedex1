import React, { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToDetails, goToHomePage } from "../../routers/coordenation";

const Pokedex = () => {
  const { pokemonDetailsPokedex, numbersOfPokemonsAtHome, setNumbersOfPokemonsAtHome, add, setAdd } = useContext(GlobalStateContext);

  const dataUp = (id) => {
    const arrayAdd = [...add];
    const arrayId = arrayAdd.splice(arrayAdd.indexOf(id), 1);
    setAdd(arrayAdd);
  };


  setNumbersOfPokemonsAtHome(add.length === 0)

  const pokemonDetailsFromHome =
    pokemonDetailsPokedex &&
    pokemonDetailsPokedex.filter((item) => {
      if (add.includes(item.id)) {
        return true;
      } else {
        return false;
      }
    });

  return (
    <>
      <Header
        isDetails={false}
        title='Voltar' goto={goToHomePage} />
      <PokemonCard
        isPokedex="true"
        buttonAddRem='Remover'
        pokemonDetails={pokemonDetailsFromHome}
        dataUp={dataUp}
        buttonBattle='Batalhar'
      />
    </>
  );
};

export default Pokedex;
import React, { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToPokedex } from "../../routers/coordenation";

const HomePage = () => {
  const { pokemonDetails, numbersOfPokemonsAtHome, setNumbersOfPokemonsAtHome, setAdd, add } = useContext(GlobalStateContext);

  const dataUp = (id) => {
    const arrayAdd = [...add];
    arrayAdd.push(id);
    setAdd(arrayAdd);
  };


  useEffect(() => {
    setNumbersOfPokemonsAtHome(false)
  }, [])


  const pokemonDetailsFromHome =
    pokemonDetails &&
    pokemonDetails.filter((item) => {
      if (add.includes(item.id)) {
        return false;
      } else {
        return true;
      }
    });




  return (
    <div>
      <Header
        isDetails={false}
        title='Pokedex' goto={goToPokedex} />
      <PokemonCard
        buttonAddRem='Adicionar'
        pokemonDetails={pokemonDetailsFromHome}
        dataUp={dataUp}
        buttonBattle={false}
      />
    </div>
  );
};

export default HomePage;

import React, { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToPokedex } from "../../routers/coordenation";

const HomePage = () => {
  const { pokemonDetails, setAdd, add } = useContext(GlobalStateContext);

  const dataUp = (id) => {
    const arrayAdd = [...add];
    arrayAdd.push(id);
    setAdd(arrayAdd);
  };

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
      {/* {console.log(add)} */}
      <Header title='Pokedex' goto={goToPokedex} />
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

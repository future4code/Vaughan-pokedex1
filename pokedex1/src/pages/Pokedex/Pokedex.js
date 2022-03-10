import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToDetails, goToHomePage } from "../../routers/coordenation";

const Pokedex = () => {
  const {  pokemonDetailsPokedex ,  add, setAdd } = useContext(GlobalStateContext);

  const dataUp = (id) => {
    const arrayAdd = [...add];
    const arrayId = arrayAdd.splice(arrayAdd.indexOf(id), 1);
    setAdd(arrayAdd);
  };

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
      {console.log(add)}
      <Header title='Voltar' goto={goToHomePage} />
      <PokemonCard
      isPokedex="true"
        buttonAddRem='Remover'
        pokemonDetails={pokemonDetailsFromHome}
        dataUp={dataUp}
      />
    </>
  );
};

export default Pokedex;

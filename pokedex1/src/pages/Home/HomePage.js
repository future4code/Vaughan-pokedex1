import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import { goToPokedex } from '../../routers/coordenation';

const HomePage = () => {
  const { pokemonDetails , setAdd , add  } = useContext(GlobalStateContext);

    
    return (
      <div>
           {console.log(add)}
        <Header
        title="Pokedex"
        goto={goToPokedex}
        />
        <PokemonCard
        buttonAddRem="Adicionar"
        pokemonDetails= {pokemonDetails}
        />
      </div>
    );
  }
  
  export default HomePage;
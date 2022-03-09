import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToDetails, goToHomePage } from "../../routers/coordenation";



const Pokedex =()=> { 
    const { pokemonDetails , add , setAdd  } = useContext(GlobalStateContext);

    


    return( <>
        <Header
        title='Voltar'
        goto ={goToHomePage}
        />
        <PokemonCard
         buttonAddRem="Remover"
         pokemonDetails= {pokemonDetails}
        />
        </>

    )
}

export default Pokedex;

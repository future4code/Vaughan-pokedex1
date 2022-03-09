import React from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { goToDetails, goToHomePage } from "../../routers/coordenation";



const Pokedex =()=> { 


    return( <>
        <Header
        title='Voltar'
        goto ={goToHomePage}
        />
        <h1>Pokedex</h1>
        <PokemonCard
         buttonAddRem="Remover"
        />
        </>

    )
}

export default Pokedex;

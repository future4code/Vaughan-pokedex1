import React from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";



const Pokedex =()=> { 


    return( <>
        <Header
        title='Voltar'/>
        <h1>Pokedex</h1>
        <PokemonCard/>
        </>

    )
}

export default Pokedex;

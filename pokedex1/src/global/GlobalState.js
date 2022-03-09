import { GlobalStateContext } from "./GlobalStateContext";
import React, { useState } from "react";
import useRequestData from "../hooks/useRequestData";
import { baseURL } from "../constants/baseURL";

const GlobalState = (props) => {
    const [pokemonList, pokemonDetails] = useRequestData([], `${baseURL}/pokemon/`);
    
    const data = {
        pokemonList,
        pokemonDetails
    }

    return (
        <GlobalStateContext.Provider value={ data }>
            {props.children}
        </GlobalStateContext.Provider>
    )


}

export default GlobalState;

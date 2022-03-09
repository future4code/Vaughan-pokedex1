import { GlobalStateContext } from "./GlobalStateContext";
import React, { useState } from "react";
import useRequestData from "../hooks/useRequestData";
import { baseURL } from "../constants/baseURL";

const GlobalState = (props) => {
    const [pokemonList, pokemonDetails] = useRequestData([], `${baseURL}/pokemon/`);
    const [add , setAdd] = React.useState([]);
    
    const data = {
        pokemonList,
        pokemonDetails, 
        add,
        setAdd,
    }

    return (
        <GlobalStateContext.Provider value={ data }>
            {props.children}
        </GlobalStateContext.Provider>
    )


}

export default GlobalState;

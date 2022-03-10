import { GlobalStateContext } from "./GlobalStateContext";
import React, { useEffect, useState } from "react";
import useRequestData from "../hooks/useRequestData";
import { baseURL } from "../constants/baseURL";

const GlobalState = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffset] = useState(0);
    const [add , setAdd] = React.useState([]);
    const [pokemonList, pokemonDetails, getPokemon, isLoading] = useRequestData([], `${baseURL}/pokemon/?limit=20&offset=${offset}`);
    const [pokemonListPokedex, pokemonDetailsPokedex] = useRequestData([], `${baseURL}/pokemon/?limit=1120`);

    const data = {
        pokemonList,
        pokemonDetails,
        isLoading,
        pokemonListPokedex,
        pokemonDetailsPokedex,
        currentPage,
        setCurrentPage,
        offset,
        setOffset,
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

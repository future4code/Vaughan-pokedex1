import { GlobalStateContext } from "./GlobalStateContext";
import React, { useEffect, useState } from "react";
import useRequestData from "../hooks/useRequestData";
import { baseURL } from "../constants/baseURL";

const GlobalState = (props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [offset, setOffset] = useState(0);
    const [pokemonList, pokemonDetails] = useRequestData([], `${baseURL}/pokemon/?limit=20&offset=${offset}`);

    const data = {
        pokemonList,
        pokemonDetails,
        currentPage,
        setCurrentPage,
        offset,
        setOffset
    }

    return (
        <GlobalStateContext.Provider value={ data }>
            {props.children}
        </GlobalStateContext.Provider>
    )


}

export default GlobalState;

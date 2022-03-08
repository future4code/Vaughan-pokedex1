import {useEffect, useState } from 'react';
import axios from 'axios';

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData);
    const [dataDetails, setDataDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");


    const arrayData = [];

    useEffect(() => {
        getData(url)
    }, [url]);

    const getData = async(url) => {
        setIsLoading(true);

        try {
            const response = await axios.get(url)
            setData(response.data.results);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        };
    };

    const pokemons = data.map((pokemon) => {
        const getPokemon = async() => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)   
                    arrayData.push(response.data)
                    // setDataDetails(arrayData)
                    console.log(arrayData)
                    
            } catch (error) {
                console.log(error)
            }
        }
        return getPokemon()
    })
    console.log(data)
    return [data, pokemons, getData, isLoading, error];
};

export default useRequestData;
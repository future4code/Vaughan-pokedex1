import { useEffect, useState } from 'react';
import axios from 'axios';

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData);
    const [dataDetails, setDataDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        getData(url)
    }, [url]);

    const getData = async (url) => {
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

    useEffect(() => {
        let pokemonsList = []

        data.forEach((pokemon) => {

            const getPokemon = async () => {
                setIsLoading(true);
                try {
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                    setIsLoading(false);
                    pokemonsList.push(response.data)
                    if (pokemonsList.length === 20) {
                        setDataDetails(pokemonsList)
                    }
                }

                catch (error) {
                    setIsLoading(false);
                    setError(error)
                }
            }
            return getPokemon()
        })
    }, [data])

    return [data, dataDetails, getData, isLoading, error];
};

export default useRequestData;
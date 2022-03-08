import react, { useState } from 'react';
import useRequestData from '../../hooks/useRequestData';
import { ButtonContainer, CardContainer, DivContainer, ImageContainer } from './styled';
import { baseURL } from '../../constants/baseURL';
import axios from 'axios';

const PokemonCard = () => {
    const [data, pokemon] = useRequestData([], `${baseURL}/pokemon/`);

    // console.log(pokemon[0])
    // const pokemons = pokemon.map((item) => {
    //     console.log(item.name)
    //     return (
    //         <CardContainer>
    //             {item.name}
    //             {/* <img src={item.sprites.other.dream_world.front_default} alt="Pokemon" /> */}

    //             <button>Adicionar</button>
    //             <button>Detalhes</button>
    //         </CardContainer>
    //     )
    // })

    return (
        <DivContainer>
        <CardContainer>
            <p>Charmosinho</p>
            <ImageContainer>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/152.svg"}/>
            </ImageContainer>
            <ButtonContainer>
            <button>Adicionar</button>
            <button>Detalhes</button>
            </ButtonContainer>
        </CardContainer>
        <CardContainer>
            <p>Charmandinho</p>
            <ImageContainer>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"}/>
            </ImageContainer>
            <ButtonContainer>
            <button>Adicionar</button>
            <button>Detalhes</button>
            </ButtonContainer>
        </CardContainer>
        <CardContainer>
            <p>Charmeleonzinho</p>
            <ImageContainer>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/62.svg"}/>
            </ImageContainer>
            <ButtonContainer>
            <button>Adicionar</button>
            <button>Detalhes</button>
            </ButtonContainer>
        </CardContainer>
        <CardContainer>
            <p>Bulbasaurinho</p>
            <ImageContainer>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/88.svg"}/>
            </ImageContainer>
            <ButtonContainer>
            <button>Adicionar</button>
            <button>Detalhes</button>
            </ButtonContainer>
        </CardContainer>
        <CardContainer>
            <p>Charmosinho</p>
            <ImageContainer>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/122.svg"}/>
            </ImageContainer>
            <ButtonContainer>
            <button>Adicionar</button>
            <button>Detalhes</button>
            </ButtonContainer>
        </CardContainer>
        <CardContainer>
            <p>Charmosinho</p>
            <ImageContainer>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg"}/>
            </ImageContainer>
            <ButtonContainer>
            <button>Adicionar</button>
            <button>Detalhes</button>
            </ButtonContainer>
        </CardContainer>
        <CardContainer>
            <p>Charmosinho</p>
            <ImageContainer>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/649.svg"}/>
            </ImageContainer>
            <ButtonContainer>
            <button>Adicionar</button>
            <button>Detalhes</button>
            </ButtonContainer>
        </CardContainer>


        </DivContainer>
    );
}

export default PokemonCard;
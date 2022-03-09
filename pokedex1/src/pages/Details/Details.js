import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToHomePage } from "../../routers/coordenation";
import {
  NameContainer,
  Container,
  MovesContainer,
  Images,
  StatsContainer,
  TypeContainer
} from "./styled";
import { useParams } from "react-router-dom";

const Details = () => {
  const { pokemonDetails } = useContext(GlobalStateContext);
  const params = useParams();
  console.log(pokemonDetails)

  let filterPokemon =
    pokemonDetails &&
    pokemonDetails.filter((pokemon) => {
      if (params.id == pokemon.id) {
        return true;
      }
    }).map((pokemon) => {
      return(
        <Container type={pokemon.types[0].type.name} key={pokemon.id}>
         <NameContainer>
           <h2>{pokemon.name[0].toUpperCase()}{pokemon.name.slice(1)}</h2>
           <h3>#{pokemon.id}</h3>
           <TypeContainer>
            <h4>Tipos:</h4>
            {pokemon.types.map((tipo)=>{
              return (
                <p key={tipo.type.name}>{tipo.type.name}</p>
              )
            })}
            
          </TypeContainer>
            
         </NameContainer>

         <MovesContainer>
            <h4>Moves:</h4>
            {/* {pokemon.moves.map((move) => {
              return (
                <ul max- key={move.move.name} max>
                  <li>{move.move.name}</li>
                </ul>
              )
            })} */}
         </MovesContainer>

         <Images>
          <img src={pokemon.sprites.other.dream_world.front_default} />
         </Images>

         <StatsContainer>
           <ul>
             <li>{pokemon.stats[0].stat.name}: {pokemon.stats[0].base_stat}</li>
             <li>{pokemon.stats[1].stat.name}: {pokemon.stats[1].base_stat}</li>
             <li>{pokemon.stats[2].stat.name}: {pokemon.stats[2].base_stat}</li>
             <li>{pokemon.stats[3].stat.name}: {pokemon.stats[3].base_stat}</li>
             <li>{pokemon.stats[4].stat.name}: {pokemon.stats[4].base_stat}</li>
             <li>{pokemon.stats[5].stat.name}: {pokemon.stats[5].base_stat}</li>
           </ul>
         </StatsContainer>
      </Container>
      )
  });
  
  return (
    <div>
      <div>
        <Header goto={goToHomePage} title="Voltar" />
        {filterPokemon}
      </div>
    </div>
  );
};

export default Details;

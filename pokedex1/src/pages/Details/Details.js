import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToReturn } from "../../routers/coordenation";
import {
  NameContainer,
  Container,
  MovesContainer,
  Images,
  StatsContainer,
  TypeContainer,
  BorderLinearProgress,
  ContainerContent,
  PokemonImage,
  PokeballImage
} from "./styled";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import pokeball from '../../assets/images/pokeball.webp';

const Details = () => {
  const { pokemonDetails, add, setAdd } = useContext(GlobalStateContext);
  const params = useParams();

  const dataUp = (id) => {
    if (!add.includes(id)) {
      const arrayAdd = [...add];
      arrayAdd.push(id);
      setAdd(arrayAdd);
    } else {
      const arrayAdd = [...add];
      const arrayId = arrayAdd.splice(arrayAdd.indexOf(id), 1);
      setAdd(arrayAdd);

    }
  };

  let filterPokemon =
    pokemonDetails &&
    pokemonDetails
      .filter((pokemon) => {
        if (params.id == pokemon.id) {
          return true;
        }
      })
      .map((pokemon) => {
        return (
          <Container type={pokemon.types[0].type.name} key={pokemon.id}>
            <NameContainer>
              <h2>
                {pokemon.name[0].toUpperCase()}
                {pokemon.name.slice(1)}
              </h2>
              <h3>#{pokemon.id}</h3>
              <TypeContainer>
                {pokemon.types.map((tipo) => {
                  return <p key={tipo.type.name}>{tipo.type.name}</p>;
                })}
              </TypeContainer>
            </NameContainer>

            <ContainerContent>
              <Images>
                <PokeballImage src={pokeball} />
                <PokemonImage src={pokemon.sprites.other.dream_world.front_default} />
              </Images>

              <MovesContainer>
                <h4>Moves:</h4>
                <div>
                  <p>{pokemon.moves && pokemon.moves[0].move.name}</p>
                  <p>{pokemon.moves && pokemon.moves[1].move.name}</p>
                  <p>{pokemon.moves && pokemon.moves[2].move.name}</p>
                  <p>{pokemon.moves && pokemon.moves[3].move.name}</p>
                </div>
              </MovesContainer>

              <StatsContainer>
                <h4>Stats:</h4>
                <Box mt={1}>
                  {pokemon.stats[0].stat.name}:{" "}
                  <BorderLinearProgress
                    color="secondary"
                    variant="determinate"
                    value={pokemon.stats[0].base_stat / 1.5}
                  />
                </Box>
                <Box mt={1}>
                  {pokemon.stats[1].stat.name}:{" "}
                  <BorderLinearProgress
                    variant="determinate"
                    value={pokemon.stats[1].base_stat / 1.5}
                  />
                </Box>
                <Box mt={1}>
                  {pokemon.stats[3].stat.name}:{" "}
                  <BorderLinearProgress
                    variant="determinate"
                    value={pokemon.stats[3].base_stat / 1.5}
                  />
                </Box>
                <Box mt={1}>
                  {pokemon.stats[4].stat.name}:{" "}
                  <BorderLinearProgress
                    variant="determinate"
                    value={pokemon.stats[4].base_stat / 1.5}
                  />
                </Box>
                <Box mt={1}>
                  {pokemon.stats[5].stat.name}:{" "}
                  <BorderLinearProgress
                    variant="determinate"
                    value={pokemon.stats[5].base_stat / 1.5}
                  />
                </Box>
              </StatsContainer>
            </ContainerContent>
          </Container>
        );
      });

  return (
    <div>
      <div>
        <Header
          isDetails="true"
          dataUp={dataUp}
          goto={goToReturn} title="Voltar" />
        {filterPokemon}
      </div>
    </div>
  );
};

export default Details;

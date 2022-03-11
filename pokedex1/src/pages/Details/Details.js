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
  PokeballImage,
} from "./styled";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import pokeball from "../../assets/images/pokeball.webp";
import bug from '../../assets/images/bug.png'
import dark from '../../assets/images/dark.png'
import dragon from '../../assets/images/dragon.png'
import eletric from '../../assets/images/eletric.png'
import fairy from '../../assets/images/fairy.png'
import fighting from '../../assets/images/fighting.png'
import fire from '../../assets/images/fire.png'
import flying from '../../assets/images/flying.png'
import ghost from '../../assets/images/ghost.png'
import grass from '../../assets/images/grass.png'
import ground from '../../assets/images/ground.png'
import ice from '../../assets/images/ice.png'
import normal from '../../assets/images/normal.png'
import poison from '../../assets/images/poison.png'
import psychic from '../../assets/images/psychic.png'
import rock from '../../assets/images/rock.png'
import steel from '../../assets/images/steel.png'
import water from '../../assets/images/water.png'
import { Tooltip } from "@mui/material";

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
          <Container key={pokemon.id}>
            <NameContainer>
              <h2>
                {pokemon.name[0].toUpperCase()}
                {pokemon.name.slice(1)}
              </h2>
              <h3>#{pokemon.id}</h3>

              <TypeContainer>
                {pokemon.types.map((tipo) => {
                  switch (tipo.type.name) {
                    case "bug":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Bug">
                          <img src={bug} />
                        </Tooltip>
                      </div>;
                    case "dark":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Dark">
                          <img src={dark} />
                        </Tooltip>
                      </div>;
                    case "dragon":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Dragon">
                          <img src={dragon} />
                        </Tooltip>
                      </div>;
                    case "electric":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Electric">
                          <img src={eletric} />
                        </Tooltip>
                      </div>;
                    case "fairy":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Fairy">
                          <img src={fairy} />
                        </Tooltip>
                      </div>;
                    case "fighting":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Fighting">
                          <img src={fighting} />
                        </Tooltip>
                      </div>;
                    case "fire":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Fire">
                          <img src={fire} />
                        </Tooltip>
                      </div>;
                    case "flying":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Flying">
                          <img src={flying} />
                        </Tooltip>
                      </div>;
                    case "ghost":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Ghost">
                          <img src={ghost} />
                        </Tooltip>
                      </div>;
                    case "grass":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Grass">
                          <img src={grass} />
                        </Tooltip>
                      </div>;
                    case "ground":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Ground">
                          <img src={ground} />
                        </Tooltip>
                      </div>;
                    case "ice":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Ice">
                          <img src={ice} />
                        </Tooltip>
                      </div>;
                    case "normal":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Normal">
                          <img src={normal} />
                        </Tooltip>
                      </div>;
                    case "poison":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Poison">
                          <img src={poison} />
                        </Tooltip>
                      </div>;
                    case "psychic":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Psychic">
                          <img src={psychic} />
                        </Tooltip>
                      </div>;
                    case "rock":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Rock">
                          <img src={rock} />
                        </Tooltip>
                      </div>;
                    case "steel":
                      return <div key={tipo.type.name}>
                        <Tooltip title="Steel">
                          <img src={steel} />
                        </Tooltip>
                      </div>;
                    default:
                      return <div key={tipo.type.name}>
                        <Tooltip title="Water">
                          <img src={water} />
                        </Tooltip>
                      </div>
                  }
                })}
              </TypeContainer>
            </NameContainer>

            <ContainerContent>
              <Images>
                <PokeballImage src={pokeball} />
                <PokemonImage
                  src={pokemon.sprites.other.dream_world.front_default ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.other.home.front_default}
                />
              </Images>

              <MovesContainer type={pokemon.types[0].type.name}>
                <h4>Moves:</h4>
                <div>
                  <p>{pokemon.moves && pokemon.moves[0].move.name}</p>
                  <p>{pokemon.moves && pokemon.moves[1].move.name}</p>
                  <p>{pokemon.moves && pokemon.moves[2].move.name}</p>
                  <p>{pokemon.moves && pokemon.moves[3].move.name}</p>
                </div>
              </MovesContainer>

              <StatsContainer
                type2={
                  pokemon.types[1]
                    ? pokemon.types[1].type.name
                    : pokemon.types[0].type.name
                }
              >
                <h4>Stats:</h4>
                <Box mt={1}>
                  {pokemon.stats[0].stat.name}:{" "}
                  <BorderLinearProgress
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
          goto={goToReturn}
          title="Voltar"
        />
        {filterPokemon}
      </div>
    </div>
  );
};

export default Details;

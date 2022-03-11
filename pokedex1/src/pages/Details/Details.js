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
                      return <div>
                        <Tooltip title="Bug">
                          <img key={tipo.type.name} src={bug} />
                        </Tooltip>
                      </div>;
                    case "dark":
                      return <div>
                        <Tooltip title="Dark">
                          <img key={tipo.type.name} src={dark} />
                        </Tooltip>
                      </div>;
                    case "dragon":
                      return <div>
                        <Tooltip title="Dragon">
                          <img key={tipo.type.name} src={dragon} />
                        </Tooltip>
                      </div>;
                    case "electric":
                      return <div>
                        <Tooltip title="Electric">
                          <img key={tipo.type.name} src={eletric} />
                        </Tooltip>
                      </div>;
                    case "fairy":
                      return <div>
                        <Tooltip title="Fairy">
                          <img key={tipo.type.name} src={fairy} />
                        </Tooltip>
                      </div>;
                    case "fighting":
                      return <div>
                        <Tooltip title="Fighting">
                          <img key={tipo.type.name} src={fighting} />
                        </Tooltip>
                      </div>;
                    case "fire":
                      return <div>
                        <Tooltip title="Fire">
                          <img key={tipo.type.name} src={fire} />
                        </Tooltip>
                      </div>;
                    case "flying":
                      return <div>
                        <Tooltip title="Flying">
                          <img key={tipo.type.name} src={flying} />
                        </Tooltip>
                      </div>;
                    case "ghost":
                      return <div>
                        <Tooltip title="Ghost">
                          <img key={tipo.type.name} src={ghost} />
                        </Tooltip>
                      </div>;
                    case "grass":
                      return <div>
                        <Tooltip title="Grass">
                          <img key={tipo.type.name} src={grass} />
                        </Tooltip>
                      </div>;
                    case "ground":
                      return <div>
                        <Tooltip title="Ground">
                          <img key={tipo.type.name} src={ground} />
                        </Tooltip>
                      </div>;
                    case "ice":
                      return <div>
                        <Tooltip title="Ice">
                          <img key={tipo.type.name} src={ice} />
                        </Tooltip>
                      </div>;
                    case "normal":
                      return <div>
                        <Tooltip title="Normal">
                          <img key={tipo.type.name} src={normal} />
                        </Tooltip>
                      </div>;
                    case "poison":
                      return <div>
                        <Tooltip title="Poison">
                          <img key={tipo.type.name} src={poison} />
                        </Tooltip>
                      </div>;
                    case "psychic":
                      return <div>
                        <Tooltip title="Psychic">
                          <img key={tipo.type.name} src={psychic} />
                        </Tooltip>
                      </div>;
                    case "rock":
                      return <div>
                        <Tooltip title="Rock">
                          <img key={tipo.type.name} src={rock} />
                        </Tooltip>
                      </div>;
                    case "steel":
                      return <div>
                        <Tooltip title="Steel">
                          <img key={tipo.type.name} src={steel} />
                        </Tooltip>
                      </div>;
                    default:
                      return <div>
                        <Tooltip title="Water">
                          <img key={tipo.type.name} src={water} />
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

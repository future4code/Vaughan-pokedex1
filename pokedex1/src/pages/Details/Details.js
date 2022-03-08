import React from "react";
import Header from "../../components/Header/Header";
import { baseURL } from "../../constants/baseURL";
import useRequestData from "../../hooks/useRequestData";
import { goToHomePage } from "../../routers/coordenation";
import { NameContainer, Container, TypeContainer, Images, StatsContainer } from './styled';

const Details = () => {
  const [data, arrayData] = useRequestData([], `${baseURL}/pokemon/`);
  const pokemons = arrayData && arrayData.map((item) => {
    return (  
    <div key={item.id}>
      <div>
        <Header goto={goToHomePage} title="Voltar" />
        {item.name}
      </div>
      <Container>
        <NameContainer>
          <h2>{item.name}</h2>
          <h4>#{item.id}</h4>
        </NameContainer>

        <TypeContainer>
          <p>{item.types}</p>
          <p>{item.moves}</p>
        </TypeContainer>

        <Images>
          <img src={item.sprites.other.dream_world.front_default}/>
        </Images>

        <StatsContainer>
          <ul>
            <li>{item.stats}</li>
            <li>stats</li>
            <li>stats</li>
            <li>stats</li>
            <li>stats</li>
            <li>stats</li>
          </ul>
        </StatsContainer>
      </Container>
    </div>
  )})

  return (
    {pokemons}
  )
}

export default Details;

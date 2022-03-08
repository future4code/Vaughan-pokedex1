import React from "react";
import Header from "../../components/Header/Header";
import { goToHomePage } from "../../routers/coordenation";
import { NameContainer, Container, TypeContainer, Images, StatsContainer } from './styled';
const Details = () => {
  return (
    <div>
      <div>
        <Header goto={goToHomePage} title="Voltar" />
        Detalhes do pokemonzinho
      </div>
      <Container>
        <NameContainer>
          <h2>Nome</h2>
          <h4>#número</h4>
        </NameContainer>

        <TypeContainer>
          <p>tipos</p>
          <p>moves</p>
        </TypeContainer>

        <Images>
          <p>foto do pokemon de frente</p>
          <p>bundinha do pokemon</p>
        </Images>

        <StatsContainer>
          <ul>
            <li>stats</li>
            <li>stats</li>
            <li>stats</li>
            <li>stats</li>
            <li>stats</li>
            <li>stats</li>
          </ul>
        </StatsContainer>
      </Container>
    </div>
  );
};

export default Details;

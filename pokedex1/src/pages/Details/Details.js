import React from 'react'
import { Container, NameContainer, Images, StatsContainer, TypeContainer } from './styled'

const Details = () => {


    return (
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
    );
  }
  
  export default Details;
import React from 'react'
import Header from '../../components/Header/Header';
import { goToHomePage } from '../../routers/coordenation';

const Details = () => {
    return (
      <div>
           <Header
             goto ={goToHomePage}
        title='Voltar'/>
        Detalhes do pokemonzinho
      </div>
    );
  }
  
  export default Details;
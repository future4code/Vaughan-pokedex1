import react from 'react';
import Header from '../../components/Header/Header';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { goToPokedex } from '../../routers/coordenation';

const HomePage = () => {
    return (
      <div>
        <Header
        title="Pokedex"
        goto={goToPokedex}
        />
        <PokemonCard/>
      </div>
    );
  }
  
  export default HomePage;
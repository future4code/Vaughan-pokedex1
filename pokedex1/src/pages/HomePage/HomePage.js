import react from 'react';
import Header from '../../components/Header/Header';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const HomePage = () => {
    return (
      <div>
        <Header
        title="Pokedex"/>
        <PokemonCard/>
      </div>
    );
  }
  
  export default HomePage;
import react from 'react';
import { HeaderStyled } from './styled';
import PokemonLogo from '../../assets/images/pokemon-logo.png';

const Header = () => {
    return (
      <HeaderStyled>
         <img src={PokemonLogo} alt="Logo do Pokemon"/>
         <button>Pokedex</button>
      </HeaderStyled>
    );
  }
  
  export default Header;
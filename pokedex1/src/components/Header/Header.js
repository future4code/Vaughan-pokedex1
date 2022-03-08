import react from 'react';
import { HeaderStyled } from './styled';
import PokemonLogo from '../../assets/images/pokemon-logo.png';

const Header = ({title}) => {
    return (
      <HeaderStyled>
         <img src={PokemonLogo} alt="Logo do Pokemon"/>
         <button>{title}</button>
      </HeaderStyled>
    );
  }
  
  export default Header;
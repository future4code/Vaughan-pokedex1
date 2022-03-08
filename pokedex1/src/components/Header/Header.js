import react from 'react';
import { HeaderStyled } from './styled';
import { useNavigate } from 'react-router';
import PokemonLogo from '../../assets/images/pokemon-logo.png';


const Header = ({title, goto}) => {
  const navigate =useNavigate();

    const onClick =()=>{ 
      goto(navigate)
      
    }

    return (
      <HeaderStyled>
         <img src={PokemonLogo} alt="Logo do Pokemon"/>
         <button
         onClick={onClick}
         >{title}</button>
      </HeaderStyled>
    );
  }
  
  export default Header;
import React, { useContext, useEffect } from 'react';
import { HeaderStyled } from './styled';
import { useNavigate, useParams } from 'react-router';
import PokemonLogo from '../../assets/images/pokemon-logo.png';
import { GlobalStateContext } from '../../global/GlobalStateContext';


const Header = ({title, goto , isDetails,dataUp}) => {
  const { add } = useContext(GlobalStateContext);
  const navigate =useNavigate();
  const {id} =useParams();
   
    const onClick2 =()=>{ 
      dataUp(Number(id))
    }
    const onClick =()=>{ 
      goto(navigate)
    }

    return (
      <HeaderStyled>
         <div> 
         <button
         onClick={onClick}
         >{title}</button> 
         <img src={PokemonLogo} alt="Logo do Pokemon"/>
         </div>
        {isDetails && 
        <button
         onClick={onClick2}
         >{(add.includes(Number(id))) ? "Remover" : "Adicionar" }</button>
         }
      </HeaderStyled>
    );
  }
  
  export default Header;
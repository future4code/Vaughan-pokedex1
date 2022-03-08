import react from 'react';
import { CardContainer } from './styled';

const PokemonCard = () => {
    return (
        <CardContainer>
            <p>Imagem do Pokemon</p>
            <p>Nome: Pokemon</p>
            <button>de</button>
            <button>Detalhes</button>

        </CardContainer>
    );
}

export default PokemonCard;
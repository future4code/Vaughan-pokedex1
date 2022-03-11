import styled from 'styled-components';
import { lightColor, mainColor, secondColor } from '../../constants/colors';

export const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 4%;
    background-color: ${mainColor};
    color: ${mainColor};
    div{ 
        width: 58%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    img{
        width: 200px;

    }
    button{
        display: flex;
        align-items: center;
        background: ${mainColor};
        border: 1px solid white;
        font-size: 1.3rem;
        padding: 15px;
        height: 6vh;
        border-radius: .5em;
        color: white;
        cursor: pointer;
        :hover{
            background-color: ${lightColor};
            color: white;
        }
    }

@media (max-width: 480px) {
    div {
        width: 70%;
    }
    button{
        padding: 10px;
        font-size: 1.1rem;
    }
}
`
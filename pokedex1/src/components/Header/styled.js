import styled from 'styled-components';
import { lightColor, mainColor, secondColor } from '../../constants/colors';

export const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    background-color: ${mainColor};
    color: ${mainColor};
    img{
        width: 200px;
    }
    button{
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
`
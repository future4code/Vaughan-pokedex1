import styled from 'styled-components';
import { mainColor, secondColor } from '../../constants/colors';

export const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    background-color: ${secondColor};
    color: ${mainColor};
    img{
        width: 200px;
    }
    button{
        background: none;
        border: 1px solid ${mainColor};
        padding: 15px;
        height: 8vh;
        border-radius: .5em;
        color: ${mainColor};
        cursor: pointer;
        :hover{
            background-color: ${mainColor};
            color: ${secondColor};
        }
    }
`
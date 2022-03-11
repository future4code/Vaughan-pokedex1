import styled from 'styled-components';
import {lightColor, mainColor, secondColor} from '../../constants/colors';
import { Pagination } from '@mui/material';
import { CircularProgress } from "@mui/material";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const EmptyPokedexImage = styled.img`
    margin-top: 10vh;

@media (max-width:650px) {
    width: 80vw;
}
`

export const PaginationStyled = styled(Pagination)`
    background-color: rgba(222, 222, 222, .2);
    border-radius: .5em;
    margin: 10px;
`

export const DivContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);

@media (max-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 480px) {
    grid-template-columns: 1fr;
}
`

export const Loading = styled(CircularProgress)`
    margin: 30px;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(222, 222, 222, .2);
    color: white;
    border-radius: .5em;
    width: 18vw;
    padding: 20px;
    margin: 10px;
    p{
        font-size: 1.5rem;
    }
    img{
        max-width: 20vw;
        max-height: 20vh;
        margin: 10px;
    }

@media (max-width: 850px) {
    width: 30vw;
    img{
        max-width: 30vw;
    }
}

@media (max-width: 640px) {
    width: 45vw;
}

@media (max-width: 480px) {
    width: 85vw;
    img{
        max-width: 40vw;
        max-height: 30vh;
    }
}
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 20vw;
    height: 20vh;

@media (max-width: 480px) {
    width: 80vw;
    height: 30vh;
}
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    button{
        margin: 10px;
        padding: 10px;
        border: 1px solid white;
        background: ${secondColor};
        color: white;
        border-radius: .5em;
        cursor: pointer;
        :hover{
            background-color: ${lightColor};
            border: 1px solid white;
            color: white;
        }
    }
@media (max-width: 1000px) {
    flex-direction: column;
}

@media (max-width: 480px) {
    flex-direction: row;
    button{
        padding: 15px;
    }
}

`
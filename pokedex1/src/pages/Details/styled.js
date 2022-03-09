import styled from "styled-components";
import { mainColor, secondColor } from "../../constants/colors";

export const Container = styled.div`
    display: grid;
    grid-template: 60px 60px 1fr / 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    margin-top: 1%;
    color: white;
`

export const NameContainer = styled.div`
    color: mainColor;
    grid-area: 1 / 1 / 2 / 4;
`
export const TypeContainer = styled.div`
    display: flex;
`

export const MovesContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: 3 / 1 / 4 / 2
`

export const Images = styled.div`
    grid-area: 3 / 2 / 4 / 2;
`

export const StatsContainer = styled.div`
    grid-area: 3 / 3 / 4 / 4;
    display: flex;
    flex-direction: column;
`
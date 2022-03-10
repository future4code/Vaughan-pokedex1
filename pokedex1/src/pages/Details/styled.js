import styled from "styled-components";
import { mainColor, secondColor } from "../../constants/colors";

const typeColor = {
    'bug': '#1c5013',
    'poison': '#4b1b81',
    'fire': '#ff0202',
    'dark': '#525252',
    'dragon': '#3b79a3',
    'electric': '#fffb03',
    'fairy': '#af0755',
    'fighting': '#991700',
    'ghost': '#28197c',
    'grass': '#2b7e35',
    'ground': '#77440b',
    'ice': '#8dccdb',
    'normal': '#7c588d',
    'psychic': '#aa1796',
    'rock': '#46190e',
    'steel': '#466279',
    'water': '#2458e6'
};


export const Container = styled.div`
    display: grid;
    grid-template: 60px 0 1fr / 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    color: ${secondColor};
    background: radial-gradient(circle, #b8b8b8 0%, ${(p) => typeColor[p.type]} 100%);
    height: 85vh;
    width: 100vw;
`
// background: linear-gradient(0deg, rgba(255,255,255,1) 0%, ${(p) => typeColor[p.type]} 100%); 

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


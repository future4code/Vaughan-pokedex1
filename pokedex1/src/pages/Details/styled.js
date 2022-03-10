import styled from "styled-components";
import { mainColor, secondColor } from "../../constants/colors";
import { LinearProgress, linearProgressClasses } from "@mui/material";


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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    color: white;
    // background: radial-gradient(circle, #b8b8b8 0%, ${(p) => typeColor[p.type]} 50%);
    height: 85vh;
    width: 100vw;
`

export const NameContainer = styled.div`
    color: mainColor;
    margin-top: 1%;
    text-align: center;
    h2 {
        font-size: 3rem;
    }
    h3 {
        font-size: 2rem;
    }
`

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 4vh;
    width: 80vw;
    justify-content: space-evenly;
    align-items: center;
`

export const TypeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 200px;
    text-transform: capitalize;
    p {
        font-size: 1rem;
        margin-top: 5%;
        // background-color: ${(p) => typeColor[p.type]}
    } 
`

export const MovesContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    margin-top: 3vh;
    text-align: center;
    p {
        text-transform: capitalize;
        margin-top: 2vh;
    }
    h4 {
        font-size: 1.2rem;
    }
`

export const Images = styled.div`
    height: 400px;
    width: 400px;
    position: relative;
    top: 0;
    left: 0;
`
export const PokemonImage = styled.img`
    position: absolute;
    top: 50px;
    left: 50px;
    height: 300px; 
    max-width: 300px;

`
export const PokeballImage = styled.img`
    position: relative;
    top: 0;
    left: 0;
    height: 400px;

`

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    text-transform: capitalize;
    margin-top: 3vh;
    h4 {
        font-size: 1.2rem;
    }
`
export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorSecondary}`]: {
      backgroundColor: {secondColor},
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: {secondColor},
    },
  }));

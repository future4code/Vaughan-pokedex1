import styled from "styled-components";
import { mainColor, secondColor } from "../../constants/colors";
import { LinearProgress, linearProgressClasses } from "@mui/material";


const typeColor = {
    'bug': '#1c5013',
    'poison': '#b289e0',
    'fire': '#ff7c24',
    'dark': '#525252',
    'dragon': '#3b79a3',
    'electric': '#f1ef6d',
    'fairy': '#fa6cae',
    'fighting': '#f61950',
    'flying': '#7d8dbb',
    'ghost': '#5163c8',
    'grass': '#59ce66',
    'ground': '#fb7e36',
    'ice': '#8dccdb',
    'normal': '#979697',
    'psychic': '#fb4655',
    'rock': '#c7a958',
    'steel': '#466279',
    'water': '#408adf'
};


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    color: white;
    height: 85vh;
    width: 100vw;
`

export const NameContainer = styled.div`
    color: mainColor;
    margin-top: 1%;
    text-align: center;
    display: flex;
    flex-direction: column;
    img {
        max-width: 40px;
    }
    h2 {
        font-size: 3rem;
    }
    h3 {
        font-size: 1.5rem;
    }
`

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 80vw;
    justify-content: space-evenly;
    align-items: center;
`

export const TypeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 200px;
    height: 40px;
    margin-top: 2vh;
    align-self: center;
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
    // border: 1px white solid;
    width: 200px;
    height: 220px;
    padding: 20px;
    background-color: rgba(117, 117, 117, 0.25);
    box-shadow: 3px 3px 8px ${(p) => typeColor[p.type]};
    border-radius: 5px;
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
    width: 200px;
    height: 220px;
    padding: 20px;
    background-color: rgba(117, 117, 117, 0.25);
    box-shadow: 3px 3px 8px ${(p) => typeColor[p.type2]};
    border-radius: 5px;
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

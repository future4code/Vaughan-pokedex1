import styled, { createGlobalStyle } from 'styled-components';
import { secondColor } from './constants/colors';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body{
        background-color: ${secondColor};
    }
`
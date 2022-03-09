import { createTheme } from '@mui/material'; 
import { lightColor, secondColor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: lightColor,
    },
    text: {
      primary: secondColor,
    },
  },
});

export default theme; 
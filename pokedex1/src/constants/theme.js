import { createTheme } from '@mui/material'; 
import { lightColor, secondColor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: lightColor,
    },
  },
});

export default theme; 
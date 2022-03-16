import { createTheme } from '@mui/material'; 
import { lightColor, secondColor } from './colors';
import { amber } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: lightColor,
    },
    secondary: {
      main: amber[900],
    },
    text: {
      primary: secondColor,
    },

  },
});

export default theme; 
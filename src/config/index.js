import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
const colorPrimary = pink[400]


export const theme = createTheme({
    palette: {
      primary: {
          main: colorPrimary
      },
    },
  });
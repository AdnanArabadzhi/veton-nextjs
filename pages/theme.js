import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#D6D6D6',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    facebook: {
      main: '#149EF9',
    },
  },
});

export default theme;

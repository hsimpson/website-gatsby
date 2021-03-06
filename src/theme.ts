import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, purple, indigo } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700],
    },
    secondary: {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700],
    },
  },
  typography: {
    fontFamily: ['Barlow', 'Oswald', 'Anton', 'san-serif'].join(','),
    h1: {
      fontWeight: 500,
      fontSize: 60,
    },
    h2: {
      fontWeight: 500,
      fontSize: 60,
    },
    h3: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 500,
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: '#000000',
      },
    },
  },
});

export default theme;

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
  },
  typography: {
    h1: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '48px',
      lineHeight: '150%',
      textTransform: 'uppercase',
      '@media (max-width:960px)': {
        fontSize: '40px',
      },
      '@media (max-width:600px)': {
        fontSize: '36px',
      },
    },
    h2: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '40px',
      lineHeight: '150%',
      '@media (max-width:960px)': {
        fontSize: '36px',
      },
      '@media (max-width:600px)': {
        fontSize: '30px',
      },
    },
    h3: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '38px',
      lineHeight: '150%',
      '@media (max-width:960px)': {
        fontSize: '30px',
      },
      '@media (max-width:600px)': {
        fontSize: '24px',
      },
    },
    h4: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontSize: '36px',
      lineHeight: '150%',
      '@media (max-width:960px)': {
        fontSize: '24px',
      },
      '@media (max-width:600px)': {
        fontSize: '20px',
      },
    },
    button: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '24px',
      lineHeight: '150%',
      textTransform: 'uppercase',
      '@media (max-width:960px)': {
        fontSize: '18px',
      },
    },
    subtitle1: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '24px',
      lineHeight: '150%',
      '@media (max-width:960px)': {
        fontSize: '20px',
      },
      '@media (max-width:600px)': {
        fontSize: '18px',
      },
    },
    subtitle2: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '30px',
      lineHeight: '150%',
      '@media (max-width:960px)': {
        fontSize: '20px',
      },
      '@media (max-width:600px)': {
        fontSize: '18px',
      },
    },
    body1: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: '150%',
      '@media (max-width:960px)': {
        fontSize: '16px',
      },
      '@media (max-width:600px)': {
        fontSize: '14px',
      },
    },
    body2: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '30px',
      lineHeight: '150%',
      '@media (max-width:960px)': {
        fontSize: '18px',
      },
      '@media (max-width:600px)': {
        fontSize: '16px',
      },
    },
  },
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#432480',
    },
    success: {
      main: '#FFC221',
    },
    error: {
      main: '#F44336',
    },
  },
});

const OverridesCss = ({ children }) => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </StylesProvider>
);

export default OverridesCss;

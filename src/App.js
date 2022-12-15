import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LandingPage from './views/LandingPage';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

const themeLight = createTheme({
  palette: {
    background: {
      default: 'e3f2fd',
    },
  },
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#ffffff',
    },
  },
});

const App = () => {
  const [light, setLight] = React.useState(true);
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => setLight((prev) => !prev)}
        color="inherit"
      >
        {light === true ? <ToggleOnIcon /> : <ToggleOffIcon />}
      </IconButton>
      <LandingPage />;
    </ThemeProvider>
  );
};

export default App;

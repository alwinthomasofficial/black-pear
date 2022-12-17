import React, { Fragment } from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LandingPage from './views/LandingPage';
import ResultsPage from './views/ResultsPage';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        aria-label="Dark/Light Mode Toggle"
      >
        {light === true ? (
          <ToggleOnIcon sx={{ height: 40, width: 40 }} />
        ) : (
          <ToggleOffIcon sx={{ height: 40, width: 40 }} />
        )}
      </IconButton>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, PaletteMode, Switch } from '@mui/material';

// const mode: PaletteMode = 'light';
const lightOptions = {
  palette: {
    mode: 'light' as PaletteMode,
    primary: {
      main: '#00b5cd'
    },
    background: {
      default: '#c7d1e1',
      paper: 'rgb(236, 239, 245)'
    },
    secondary: {
      main: '#b3e028'
    }
  }
};

const darkOptions = {
  palette: {
    mode: 'dark' as PaletteMode,
    primary: {
      main: '#00b5cd'
    },
    background: {
      default: '#1e2838',
      paper: '#1e2838'
    },
    secondary: {
      main: '#b3e028'
    }
  }
};
const light = createTheme(lightOptions);
const dark = createTheme(darkOptions);
function App() {
  const [isDark, setModeDark] = useState<boolean>(false);
  const changeTheme = () => {
    setModeDark(!isDark);
  }

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <CssBaseline />
      <Switch value={isDark} onChange={changeTheme} />
      <Home />
    </ThemeProvider>
  );
}

export default App;

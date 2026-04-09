import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import { CustomThemeProvider } from './context/theme/ColorModeContext';

function App() {
  return (
    <CustomThemeProvider>
      <Home />
    </CustomThemeProvider>
  );
}

export default App;

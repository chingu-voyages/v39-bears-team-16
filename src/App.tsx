import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme.js';
import { SignUp } from './components';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import { GlobalStyle } from './global-style';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

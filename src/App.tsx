import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useCookies } from 'react-cookie';
import { darkTheme } from './theme';
import { GlobalStyle } from './global-style';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import AdminRoutes from './pages/Admin/AdminRoutes';

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    'name',
    'email',
    'profilePicture',
    'location',
  ]);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigate to="sign-in" replace />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn setCookie={setCookie} />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password/:token" element={<ResetPassword />} />
        <Route path="/*" element={<AdminRoutes />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

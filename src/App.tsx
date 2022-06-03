import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme.js';
import { GlobalStyle } from './global-style';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import AdminRoutes from './pages/Admin/AdminRoutes';
import StudentRoutes from './pages/Student/StudentRoutes';

// Temporary Routes

import AdminUpdateClass from './pages/Admin/AdminUpdateClass/AdminUpdateClass';
import Example from './components/Accordion/Accordion';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Routes>
        {/* <Route path="/" element={<Navigate to="sign-in" replace />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password/:token" element={<ResetPassword />} />
        <Route path="admin/*" element={<AdminRoutes />} />
        <Route path="student/*" element={<StudentRoutes />} /> */}

        {/* temporary Routes  */}
        <Route path="/" element={<AdminUpdateClass />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

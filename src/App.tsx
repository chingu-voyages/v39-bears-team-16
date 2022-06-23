import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useCookies } from 'react-cookie';
import { darkTheme } from './theme';
import { GlobalStyle } from './global-style';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import MemberLayout from './pages/Member/MemberLayout';
import Home from './pages/Home/Home';
import HomeFeatured from './pages/Home/HomeFeatured';
import HomeEnrolled from './pages/Home/HomeEnrolled';
import EditorPlans from './pages/Editor/EditorPlans';
import EditorClasses from './pages/Editor/EditorClasses';

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
        <Route path="member" element={<MemberLayout />}>
          <Route path="home" element={<Home />}>
            <Route path="featured" element={<HomeFeatured />} />
            <Route path="enrolled" element={<HomeEnrolled />} />
            <Route index element={<Navigate to="featured" replace />} />
          </Route>
          <Route path="editor" element={<EditorPlans />}>
            <Route path="editor/plans/:id" element={<EditorClasses />} />
            <Route index element={<Navigate to="plans" replace />} />
          </Route>
          <Route index element={<Navigate to="home" replace />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;

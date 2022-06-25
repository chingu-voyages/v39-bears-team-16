import React, { createContext } from 'react';
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
import EditorPlans from './pages/Editor/EditorPlans';
import EditorClasses from './pages/Editor/EditorClasses';
import HomeEnrolled from './pages/Home/Enrolled/HomeEnrolled';
import HomeFeatured from './pages/Home/Featured/HomeFeatured';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UserContext = createContext<any | null>(null);

const App = () => {
  const [cookies, setCookie] = useCookies([
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
        <Route
          path="member"
          element={
            <UserContext.Provider value={cookies}>
              <MemberLayout />{' '}
            </UserContext.Provider>
          }
        >
          <Route path="home" element={<Home />}>
            <Route path="enrolled" element={<HomeEnrolled />} />
            <Route path="featured" element={<HomeFeatured />} />
            <Route index element={<Navigate to="enrolled" replace />} />
          </Route>
          <Route path="editor">
            <Route path="plans" element={<EditorPlans />} />
            <Route path="plans/:id" element={<EditorClasses />} />
            <Route index element={<Navigate to="plans" replace />} />
          </Route>
          <Route path="plans/:planId" />
          <Route index element={<Navigate to="home" replace />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;

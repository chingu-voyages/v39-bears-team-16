import React, { createContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useCookies } from 'react-cookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { darkTheme } from './theme';
import { GlobalStyle } from './global-style';
import SignUp from './pages/Authentication/SignUp';
import SignIn from './pages/Authentication/SignIn';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import ResetPassword from './pages/Authentication/ResetPassword';
import MemberLayout from './pages/Member/MemberLayout';
import Home from './pages/Home/Home';
import EditorPlans from './pages/Editor/EditorPlans';
import EditorClasses from './pages/Editor/EditorClasses';
import HomeEnrolled from './pages/Home/Enrolled/HomeEnrolled';
import HomeFeatured from './pages/Home/Featured/HomeFeatured';
import PlanClassesComponent from './pages/Home/PlanClassesComponent';

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
      <ToastContainer autoClose={5000} />
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
          <Route path="plans/:planId" element={<PlanClassesComponent />} />
          <Route index element={<Navigate to="home" replace />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;

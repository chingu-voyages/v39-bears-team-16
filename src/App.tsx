import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme.js';
import { GlobalStyle } from './global-style';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import CreatePassword from './pages/CreatePassword/CreatePassword';
import StudentMainLayout from './pages/Student/StudentMainLayout';
import StudentDashboard from './pages/Student/StudentDashboard';
import StudentClassTracker from './pages/Student/StudentClassTracker';
import AdminMainLayout from './pages/Admin/AdminMainLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminUpdateClass from './pages/Admin/AdminUpdateClass';
import AdminCohortPage from './pages/Admin/AdminCohortPage';
import StudentCohortPage from './pages/Student/StudentCohortPage';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="create-password" element={<CreatePassword />} />
        <Route path="admin">
          <Route path="cohort" element={<AdminMainLayout />}>
            <Route index element={<AdminCohortPage />} />
            <Route path=":id">
              <Route path="home" element={<AdminDashboard />} />
              <Route path="class" element={<AdminUpdateClass />} />
              <Route index element={<Navigate to="home" replace />} />
            </Route>
          </Route>
          <Route index element={<Navigate to="cohort" replace />} />
        </Route>
        <Route path="student">
          <Route path="cohort" element={<StudentMainLayout />}>
            <Route index element={<StudentCohortPage />} />
            <Route path=":id">
              <Route path="home" element={<StudentDashboard />} />
              <Route path="class" element={<StudentClassTracker />} />
              <Route index element={<Navigate to="home" replace />} />
            </Route>
          </Route>
          <Route index element={<Navigate to="cohort" replace />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;

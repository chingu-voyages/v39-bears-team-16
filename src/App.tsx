import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme.js';
import { GlobalStyle } from './global-style';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import StudentMainLayout from './pages/Student/StudentMainLayout';
import StudentDashboard from './pages/Student/StudentDashboard';
import StudentClassTracker from './pages/Student/StudentClassTracker';
import AdminMainLayout from './pages/Admin/AdminMainLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminUpdateClass from './pages/Admin/AdminUpdateClass/AdminUpdateClass';
import AdminCohortPage from './pages/Admin/AdminCohortPage';
import StudentCohortPage from './pages/Student/StudentCohortPage';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password/:token" element={<ResetPassword />} />
        <Route path="admin">
          <Route path="cohorts" element={<AdminMainLayout />}>
            <Route index element={<AdminCohortPage />} />
            <Route path=":id">
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="class" element={<AdminUpdateClass />} />
              <Route index element={<Navigate to="dashboard" replace />} />
            </Route>
          </Route>
          <Route index element={<Navigate to="cohorts" replace />} />
        </Route>
        <Route path="student">
          <Route path="cohorts" element={<StudentMainLayout />}>
            <Route index element={<StudentCohortPage />} />
            <Route path=":id">
              <Route path="dashboard" element={<StudentDashboard />} />
              <Route path="class" element={<StudentClassTracker />} />
              <Route index element={<Navigate to="dashboard" replace />} />
            </Route>
          </Route>
          <Route index element={<Navigate to="cohorts" replace />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;

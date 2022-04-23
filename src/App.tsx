import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme.js';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import AdminDashboard from './pages/Admin/AdminDashboard';
import StudentDashboard from './pages/Student/StudentDashboard';
import StudentClassTracker from './pages/Student/StudentClassTracker';
import AdminUpdateClass from './pages/Admin/AdminUpdateClass';
import MainLayout from './pages/MainLayout';

const App = () => {
  // theme provider here
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="admin" element={<MainLayout userRole="admin" />}>
          <Route path="home" element={<AdminDashboard />} />
          <Route path="class" element={<AdminUpdateClass />} />
          <Route index element={<Navigate to="/admin/home" replace />} />
        </Route>
        <Route path="student" element={<MainLayout userRole="student" />}>
          <Route path="home" element={<StudentDashboard />} />
          <Route path="class" element={<StudentClassTracker />} />
          <Route index element={<Navigate to="/student/home" replace />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;

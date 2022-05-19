import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import StudentMainLayout from './StudentMainLayout';
import StudentDashboard from './StudentDashboard';
import StudentClassTracker from './StudentClassTracker';
import StudentCohortsPage from './StudentCohortsPage';

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="cohorts" element={<StudentMainLayout />}>
        <Route index element={<StudentCohortsPage />} />
        <Route path=":id">
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="class" element={<StudentClassTracker />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>
      </Route>
      <Route index element={<Navigate to="cohorts" replace />} />
    </Routes>
  );
};

export default StudentRoutes;

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminMainLayout } from './AdminMainLayout';
import AdminDashboard from './AdminDashboard';
import AdminUpdateClass from './AdminUpdateClass/AdminUpdateClass';
import AdminCohortsPage from './AdminCohortsPage/AdminCohortsPage';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="plans" element={<AdminMainLayout />}>
        <Route index element={<AdminCohortsPage />} />
        <Route path=":id">
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="class" element={<AdminUpdateClass />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>
      </Route>
      <Route index element={<Navigate to="cohorts" replace />} />
    </Routes>
  );
};

export default AdminRoutes;

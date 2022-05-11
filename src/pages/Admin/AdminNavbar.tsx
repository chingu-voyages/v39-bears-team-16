import React from 'react';
import { useMatch, useParams } from 'react-router-dom';
import MenuItem from '../../components/Navbar/MenuItem';
import Navbar from '../../components/Navbar/Navbar';

const AdminNavbar = () => {
  const isCohortPage = useMatch({
    path: '/admin/cohort',
    end: true,
    caseSensitive: false,
  });
  const { id } = useParams();

  return (
    <Navbar>
      {!isCohortPage && (
        <>
          <MenuItem to="/admin/cohort/">Cohort List</MenuItem>
          <MenuItem to={`/admin/cohort/${id}/dashboard`}>Dashboard</MenuItem>
          <MenuItem to={`/admin/cohort/${id}/class`}>Update Class</MenuItem>
        </>
      )}
      <div>Logout</div>
    </Navbar>
  );
};
// Logout onClick should call logout() from utilities/auth.tsx

export default AdminNavbar;

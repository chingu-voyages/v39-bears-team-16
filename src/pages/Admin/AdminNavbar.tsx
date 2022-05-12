import React from 'react';
import { useMatch, useParams } from 'react-router-dom';
import MenuItem from '../../components/Navbar/MenuItem';
import Navbar from '../../components/Navbar/Navbar';

const AdminNavbar = () => {
  const isCohortPage = useMatch({
    path: '/admin/cohorts',
    end: true,
    caseSensitive: false,
  });
  const { id } = useParams();

  return (
    <Navbar>
      {!isCohortPage && (
        <>
          <MenuItem to="/admin/cohorts/">Cohort List</MenuItem>
          <MenuItem to={`/admin/cohorts/${id}/dashboard`}>Dashboard</MenuItem>
          <MenuItem to={`/admin/cohorts/${id}/class`}>Update Class</MenuItem>
        </>
      )}
      <div>Logout</div>
    </Navbar>
  );
};
// Logout onClick should call logout() from utilities/auth.tsx

export default AdminNavbar;

import React from 'react';
import { useParams, useMatch } from 'react-router-dom';
import MenuItem from '../../components/Navbar/MenuItem';
import Navbar from '../../components/Navbar/Navbar';

const StudentNavbar = () => {
  const isCohortPage = useMatch({
    path: '/student/cohorts',
    end: true,
    caseSensitive: false,
  });
  const { id } = useParams();

  return (
    <Navbar>
      {!isCohortPage && (
        <>
          <MenuItem to="/student/cohorts/">Cohort List</MenuItem>
          <MenuItem to={`/student/cohorts/${id}/dashboard`}>Dashboard</MenuItem>
          <MenuItem to={`/student/cohorts/${id}/class`}>Class Tracker</MenuItem>
        </>
      )}
      <div>Logout</div>
    </Navbar>
  );
};
// Logout onClick should call logout() from utilities/auth.tsx

export default StudentNavbar;

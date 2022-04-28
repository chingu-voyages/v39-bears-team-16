import React from 'react';
import MenuItem from '../../components/Navbar/MenuItem';
import Navbar from '../../components/Navbar/Navbar';

const StudentNavbar = () => {
  return (
    <Navbar>
      <MenuItem to="/student/home">Dashboard</MenuItem>
      <MenuItem to="/student/class">Class Tracker</MenuItem>
      <div>Logout</div>
    </Navbar>
  );
};
// Logout onClick should call logout() from utilities/auth.tsx

export default StudentNavbar;

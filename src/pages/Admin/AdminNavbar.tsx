import React from 'react';
import MenuItem from '../../components/Navbar/MenuItem';
import Navbar from '../../components/Navbar/Navbar';

const AdminNavbar = () => {
  return (
    <Navbar>
      <MenuItem to="/admin/home">Dashboard</MenuItem>
      <MenuItem to="/admin/class">Update Class</MenuItem>
      <div>Logout</div>
    </Navbar>
  );
};
// Logout onClick should call logout() from utilities/auth.tsx

export default AdminNavbar;

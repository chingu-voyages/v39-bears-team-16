import React from 'react';
import { useMatch, useParams } from 'react-router-dom';
import MenuItem from '../../components/Navbar/MenuItem';
import Navbar from '../../components/Navbar/Navbar';
import { Avatar } from '../../components/Navbar/Navbar.styled';

const AdminNavbar = () => {
  const isCohortPage = useMatch({
    path: '/admin/cohorts',
    end: true,
    caseSensitive: false,
  });
  const { id } = useParams();

  return (
    <Navbar>
      <div>
        <p style={{ fontWeight: 'bold', fontSize: '18px' }}>NAME/LOGO</p>
        <br />
      </div>
      <div>
        <Avatar
          src="https://api.multiavatar.com/268ffa7121a2ff2573.svg"
          // width={50}
          // height={50}
          alt="User avatar"
        />
      </div>
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

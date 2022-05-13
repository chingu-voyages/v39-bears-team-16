import React from 'react';
import { useMatch, useParams } from 'react-router-dom';
import styled from 'styled-components';
import MenuItem from '../../components/Navbar/MenuItem';
import Navbar from '../../components/Navbar/Navbar';
import {
  NameLogo,
  Avatar,
  UserData,
  HomeIcon,
  DashboardIcon,
  UpdateIcon,
  LogoutIcon,
  UserInfoContainer,
} from '../../components/Navbar/Navbar.styled';

const Line = styled.div`
  width: 100%;
  height: 1.5px;
  background: white;
  opacity: 30%;
  border-radius: 4px;
`;

const AdminNavbar = () => {
  const isCohortPage = useMatch({
    path: '/admin/cohorts',
    end: true,
    caseSensitive: false,
  });
  const { id } = useParams();

  return (
    <Navbar>
      <NameLogo>NAME/LOGO</NameLogo>
      <Line />
      <UserInfoContainer>
        <Avatar
          src="https://api.multiavatar.com/268ffa7121a2ff2573.svg"
          alt="User avatar"
        />
        <UserData>
          <p>Name</p>
        </UserData>
        <UserData>
          <p>Administrator</p>
        </UserData>
      </UserInfoContainer>
      <Line />
      {!isCohortPage && (
        <>
          <MenuItem to="/admin/cohorts/">
            <HomeIcon />
            Home
          </MenuItem>

          <MenuItem to={`/admin/cohorts/${id}/dashboard`}>
            <DashboardIcon />
            Dashboard
          </MenuItem>

          <MenuItem to={`/admin/cohorts/${id}/class`}>
            <UpdateIcon />
            Update Class
          </MenuItem>

          <MenuItem to="/admin/signin">
            <LogoutIcon />
            Logout
          </MenuItem>
        </>
      )}
    </Navbar>
  );
};
// Logout onClick should call logout() from utilities/auth.tsx

export default AdminNavbar;

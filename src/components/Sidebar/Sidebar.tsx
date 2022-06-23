import React from 'react';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../../api/logout';
import MenuItem from '../MenuItem/MenuItem';
import {
  NameLogo,
  Avatar,
  StyledUserInfo,
  HomeIcon,
  DashboardIcon,
  UpdateIcon,
  LogoutIcon,
  UserInfoContainer,
  SidebarContainer,
} from './Sidebar.styled';

const Line = styled.div`
  width: 100%;
  height: 1.5px;
  background: ${({ theme }) => theme.background.white};
  opacity: 30%;
  border-radius: 1em;
`;

const Sidebar = () => {
  const isCohortPage = useMatch({
    path: '/admin/cohorts',
    end: true,
    caseSensitive: false,
  });

  const { id } = useParams();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/sign-in', { replace: true });
  };

  return (
    <SidebarContainer>
      <NameLogo>NAME/LOGO</NameLogo>
      <Line />
      <UserInfoContainer>
        <Avatar
          src="https://api.multiavatar.com/268ffa7121a2ff2573.svg"
          alt="User avatar"
        />
        <StyledUserInfo>
          <p>Name</p>
        </StyledUserInfo>
        <StyledUserInfo>
          <p>Administrator</p>
        </StyledUserInfo>
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
        </>
      )}
      <MenuItem to="/sign-in" onClick={() => handleLogout()}>
        <LogoutIcon />
        Logout
      </MenuItem>
    </SidebarContainer>
  );
};
// Logout onClick should call logout() from utilities/auth.tsx

export default Sidebar;

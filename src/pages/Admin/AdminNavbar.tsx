import React from 'react';
import { useMatch, useParams } from 'react-router-dom';
import styled from 'styled-components';
import MenuItem from '../../components/Navbar/MenuItem';
import Navbar from '../../components/Navbar/Navbar';
import { NameLogo } from '../../components/Navbar/Navbar.styled';
import { Avatar } from '../../components/Navbar/Navbar.styled';
import { UserData } from '../../components/Navbar/Navbar.styled';
import { HomeIcon } from '../../components/Navbar/Navbar.styled';
import { UpdateIcon } from '../../components/Navbar/Navbar.styled';
import { LogoutIcon } from '../../components/Navbar/Navbar.styled';
import { Logout } from '../../components/Navbar/Navbar.styled';

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
      {/* <p style={{ fontWeight: 'bold', fontSize: '18px' }}>NAME/LOGO</p> */}
      <Line />
      <div>
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
      </div>
      <Line />
      {/* I think this is giving me trouble because I can't assign properties to the MenuItem wording individually */}
      {/* Maybe we can split the icons and MenuItems and set up a grid container around them, but there may be an easier way to 
      make the icon and MenuItms line up nicely. */}
      {!isCohortPage && (
        <>
          <section>
            <HomeIcon />
            <MenuItem to="/admin/cohorts/">Cohort List</MenuItem>
          </section>
          <section>
            <UpdateIcon />
            <MenuItem to={`/admin/cohorts/${id}/dashboard`}>Dashboard</MenuItem>
          </section>
          <section>
            <UpdateIcon />
            <MenuItem to={`/admin/cohorts/${id}/class`}>Update Class</MenuItem>
          </section>
        </>
      )}
      <section>
        <LogoutIcon />
        <Logout>
          <p>Logout</p>
        </Logout>
      </section>
    </Navbar>
  );
};
// Logout onClick should call logout() from utilities/auth.tsx

export default AdminNavbar;

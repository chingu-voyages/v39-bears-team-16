import styled from 'styled-components';
import { HiOutlineHome } from 'react-icons/hi';
import {
  BsReverseLayoutTextWindowReverse,
  BsBoxArrowInDown,
} from 'react-icons/bs';
import { RiLogoutCircleLine } from 'react-icons/ri';

// should be styled and updated later
export const SidebarContainer = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  width: 250px;
  color: white;
  padding: 1em;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;
export const NameLogo = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  width: 100%;
  margin-bottom: 0.125em;
`;
export const MenuItems = styled.section`
  display: flex;
  gap: 1.5em;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  padding: 2.5em;
  align-items: flex-start;
`;
export const UserInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`;

export const Avatar = styled.img`
  height: 70%;
  border: 0.125em solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  padding: 0.5em;
  margin-bottom: 1em;
`;

export const StyledUserInfo = styled.div`
  text-align: center;
  padding: 0.5em;
`;

const iconStyles = {
  fontSize: '1.5rem',
  margin: '.175em',
  color: 'white',
};
export const HomeIcon = styled(HiOutlineHome)`
  ${iconStyles}
`;
export const DashboardIcon = styled(BsReverseLayoutTextWindowReverse)`
  ${iconStyles};
  font-size: '.5em';
`;
export const UpdateIcon = styled(BsBoxArrowInDown)`
  ${iconStyles}
`;
export const LogoutIcon = styled(RiLogoutCircleLine)`
  ${iconStyles}
`;

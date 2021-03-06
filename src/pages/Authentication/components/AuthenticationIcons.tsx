import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';

export const authIconStyles = {
  fontSize: '1.3rem',
  marginLeft: '1.2em',
};

export const UserIcon = styled(FaUserAlt)`
  ${authIconStyles};
  color: ${({ theme }) => theme.color.black};
`;

export const EmailIcon = styled(HiMail)`
  ${authIconStyles};
  color: ${({ theme }) => theme.color.black};
`;

export const PasswordIcon = styled(RiLockPasswordFill)`
  ${authIconStyles};
  color: ${({ theme }) => theme.color.black};
`;

export const LockIcon = styled(RiLockPasswordFill)`
  color: ${({ theme }) => theme.color.black};
  font-size: 3rem;
`;

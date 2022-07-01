import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiFillCloseCircle } from 'react-icons/ai';

export const authIconStyles = {
  fontSize: '1.3rem',
  marginLeft: '1.2em',
};

export const UserIcon = styled(FaUserAlt)`
  ${authIconStyles};
  color: ${({ theme }) => theme.color.primary};
`;

export const EmailIcon = styled(HiMail)`
  ${authIconStyles};
  color: ${({ theme }) => theme.color.primary};
`;

export const PasswordIcon = styled(RiLockPasswordFill)`
  ${authIconStyles};
  color: ${({ theme }) => theme.color.primary};
`;

export const LockIcon = styled(RiLockPasswordFill)`
  color: ${({ theme }) => theme.color.primary};
  font-size: 3rem;
`;

export const CloseIcon = styled(AiFillCloseCircle)`
  color: ${({ theme }) => theme.color.white};
  margin-right: 0.5em;
`;

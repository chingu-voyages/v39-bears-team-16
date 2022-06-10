import styled from 'styled-components';
import { FaUserAlt, FaTwitterSquare } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { HiMail } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineOrderedList } from 'react-icons/ai';
import { VscKey } from 'react-icons/vsc';

import { Link } from 'react-router-dom';
import { Input } from './Input';

export const AuthContainer = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.background.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthCard = styled.section`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  border-radius: 20px;
  padding: 2.5rem 3rem;
  color: ${({ theme }) => theme.color.secondary};
  background: ${({ theme }) => theme.background.white};
`;

export const AuthHead = styled.h1`
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
  margin: 0;
  font-size: 3rem;
  line-height: 1;
`;

export const TwitterIcon = styled(FaTwitterSquare)`
  color: ${({ theme }) => theme.color.black};
  font-size: 3rem;
  cursor: pointer;
`;

const iconStyles = {
  margin: '0 1.5em',
  color: 'black',
};

export const UserIcon = styled(FaUserAlt)`
  ${iconStyles}
`;

export const EmailIcon = styled(HiMail)`
  ${iconStyles};
`;

export const PasswordIcon = styled(RiLockPasswordFill)`
  ${iconStyles}
`;

export const ProgramIcon = styled(MdSchool)`
  ${iconStyles};
  font-size: 1.5rem;
  margin-left: 30px;
`;

export const CohortIcon = styled(AiOutlineOrderedList)`
  ${iconStyles};
  font-size: 1.5rem;
  margin-left: 30px;
`;

export const KeyIcon = styled(VscKey)`
  font-size: 3.5rem;
  margin: 0 auto;
  background: ${({ theme }) => theme.background.orange};
  color: ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  padding: 5px;
`;

export const KeySuccessIcon = styled(KeyIcon)`
  background: ${({ theme }) => theme.background.teal};
`;

export const AuthSpan = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-size: 1.25rem;
  font-weight: 200;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AuthField = styled.div`
  border-radius: 10px;
  background: rgba(168, 168, 168, 0.25);
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
`;

export const AuthInput = styled(Input)`
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.black};
    opacity: 1;
  }
`;

export const AuthButton = styled.button`
  border-radius: 10px;
  background: ${({ theme }) => theme.background.teal};
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border: none;
  cursor: pointer;
`;

export const AuthFoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthRedirectLink = styled(Link)`
  color: ${({ theme }) => theme.color.teal};
  text-decoration: none;
`;

export const AuthProgramContainer = styled.section`
  display: flex;
  gap: 20px;
`;

export const AuthProgramField = styled.div`
  border-radius: 10px;
  background: ${({ theme }) => theme.background.grey};
  opacity: 50%;
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3rem;
  width: 50%;
`;

export const AuthForgetHead = styled.h2`
  color: ${({ theme }) => theme.color.black};
  font-size: 2rem;
  font-weight: 200;
`;

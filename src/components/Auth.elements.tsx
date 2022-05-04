import styled from 'styled-components';
import { FaUserAlt, FaTwitterSquare } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { HiMail } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineOrderedList } from 'react-icons/ai';
import { VscKey } from 'react-icons/vsc';

import { Link } from 'react-router-dom';

export const AuthContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AuthCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  gap: 1rem;
  border-radius: 20px;
  padding: 3rem;
  margin: 10px;
  color: ${({ theme }) => theme.color.secondary};
  background: ${({ theme }) => theme.background.white};
  min-width: 400px;
`;
export const AuthHead = styled.h1`
  color: ${({ theme }) => theme.color.black};
  font-weight: 300;
  margin: 0;
  font-size: 3.5rem;
`;
const iconStyles = {
  fontSize: '1rem',
  margin: '0 20px',
  color: 'black',
};
export const TwitterIcon = styled(FaTwitterSquare)`
  color: ${({ theme }) => theme.color.black};
  font-size: 3rem;
  margin: 0 auto;
  cursor: pointer;
`;
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
export const AuthSub = styled.h2`
  color: ${({ theme }) => theme.color.black};
  font-size: 1rem;
  font-weight: 100;
`;
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const AuthField = styled.div`
  border-radius: 10px;
  background: ${({ theme }) => theme.background.grey};
  opacity: 50%;
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
`;
export const AuthInput = styled.input`
  background: none;
  border: none;
  height: 100%;
  color: ${({ theme }) => theme.color.black};
  font-weight: 200;
  :focus {
    outline: none;
    font-weight: 300;
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
export const AuthSelect = styled.select`
  background: none;
  border: none;
  height: 100%;
  color: ${({ theme }) => theme.color.black};
  font-weight: 200;
  width: 80%;
  cursor: pointer;
  :focus {
    outline: none;
    font-weight: 300;
  }
`;
export const AuthRedirectLink = styled(Link)`
  color: ${({ theme }) => theme.color.teal};
  text-decoration: none;
  font-weight: 200;
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

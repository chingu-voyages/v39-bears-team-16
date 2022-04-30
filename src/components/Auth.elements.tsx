import styled from 'styled-components';
import { FaUserAlt, FaTwitterSquare } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { HiMail } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineOrderedList } from 'react-icons/ai';

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
  margin: 0 0 0 -12px;
`;
export const PasswordIcon = styled(RiLockPasswordFill)`
  ${iconStyles}
  margin: 0 0 0 -12px;
`;
export const ProgramIcon = styled(MdSchool)`
  ${iconStyles};
  font-size: 1.5em;
`;
export const CohortIcon = styled(AiOutlineOrderedList)`
  ${iconStyles};
  font-size: 1.5em;
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
export const SignUpBtn = styled.button`
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
  :focus {
    outline: none;
    font-weight: 300;
  }
`;
export const AuthLogin = styled(Link)`
  color: ${({ theme }) => theme.color.teal};
  text-decoration: none;
  font-weight: 200;
`;
export const AuthProgram = styled.section`
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

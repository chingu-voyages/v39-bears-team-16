import styled from 'styled-components';
import { FaUserAlt, FaGithubSquare } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { HiMail } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineOrderedList, AiFillCloseCircle } from 'react-icons/ai';
import { VscKey } from 'react-icons/vsc';

import { Link } from 'react-router-dom';

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
  margin: 10px;
  color: ${({ theme }) => theme.color.secondary};
  background: ${({ theme }) => theme.background.white};
  min-width: 400px;
  position: relative;
`;
export const AuthHead = styled.h1`
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
  margin: 0;
  font-size: 3rem;
  line-height: 1;
  /* padding-bottom: 0.145em; */
`;
const iconStyles = {
  fontSize: '1rem',
  margin: '0 1.5em',
  color: 'black',
};
export const GithubIcon = styled(FaGithubSquare)`
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
export const KeySuccessIcon = styled(KeyIcon)`
  background: ${({ theme }) => theme.background.teal};
`;
export const CloseIcon = styled(AiFillCloseCircle)`
  color: black;
  margin-right: 0.5em;
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
  opacity: 50%;
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
`;
export const AuthInput = styled.input`
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

export const CookieRequest = styled.span`
  font-size: 1em;
  display: inline-block;
  padding: 0.65em 2.5em;
  text-align: center;
  position: absolute;
  z-index: 10;
  top: 0;
  background-color: rgba(253, 126, 20, 0.85);
  border-radius: 15px;
  color: ${({ theme }) => theme.color.black};
`;

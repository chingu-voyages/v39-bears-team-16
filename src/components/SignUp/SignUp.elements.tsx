import styled from 'styled-components';
import { FaUserAlt, FaTwitterSquare } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import * as global from '../../global-style';

export const AuthContainer = styled(global.Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AuthCard = styled(global.Card)`
  color: ${(p) => p.theme.color.secondary};
  background: ${(p) => p.theme.background.white};
  min-width: 400px;
`;
export const AuthHead = styled.h1`
  color: ${(p) => p.theme.color.black};
  font-weight: 300;
  margin: 0;
  font-size: 3.5rem;
`;
export const TwitterIcon = styled(FaTwitterSquare)`
  color: ${(p) => p.theme.color.black};
  font-size: 3rem;
  margin: 0 auto;
  cursor: pointer;
`;
export const UserIcon = styled(FaUserAlt)`
  font-size: 1rem;
  margin: 0 20px;
`;
export const EmailIcon = styled(HiMail)`
  font-size: 1rem;
  margin: 0 20px;
`;
export const PasswordIcon = styled(RiLockPasswordFill)`
  font-size: 1rem;
  margin: 0 20px;
`;
export const AuthSub = styled.h2`
  color: ${(p) => p.theme.color.black};
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
  background: ${(p) => p.theme.background.grey};
  opacity: 50%;
  color: ${(p) => p.theme.color.primary};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
`;
export const AuthInput = styled.input`
  background: none;
  border: none;
  height: 100%;
  color: ${(p) => p.theme.color.black};
  font-weight: 200;
  :focus {
    outline: none;
    font-weight: 300;
  }
`;
export const SignUpBtn = styled.button`
  border-radius: 10px;
  background: ${(p) => p.theme.background.teal};
  color: ${(p) => p.theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border: none;
  cursor: pointer;
`;
export const AuthLogin = styled(Link)`
  color: ${(p) => p.theme.color.teal};
  text-decoration: none;
  font-weight: 200;
`;

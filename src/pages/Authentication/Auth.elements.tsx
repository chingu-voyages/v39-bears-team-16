import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Input, InvertPrimaryButton } from 'components';

interface AuthFieldProps {
  hasError?: boolean;
}

export const AuthCard = styled.section`
  position: relative;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.5em;
  border-radius: 8px;
  padding: 2em;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.white};
  border: 2px solid ${({ theme }) => theme.color.secondary};
`;

export const AuthHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  img {
    max-width: 100%;
    width: 6rem;
    object-fit: contain;
  }
`;

export const AuthHead = styled.h1`
  color: ${({ theme }) => theme.color.primary};
  font-weight: 500;
  margin: 0;
  font-size: 2rem;
  line-height: 1;
`;

export const AuthSpan = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-size: 1rem;
  font-weight: 200;
`;

/* FORM */
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 90%;
`;

export const AuthField = styled.div<AuthFieldProps>`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-color: ${({ hasError, theme }) => hasError && theme.color.red};
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  gap: 1em;
  align-items: center;
  height: 3rem;
`;

export const AuthInput = styled(Input)`
  border: none;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.color.lightPrimary};
    opacity: 1;
  }
`;

export const AuthButton = styled(InvertPrimaryButton)`
  border-radius: 8px;
  height: 3rem;
`;

export const AuthFoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthRedirectLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const LockIconWrapper = styled.div`
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75em;
`;

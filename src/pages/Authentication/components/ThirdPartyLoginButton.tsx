import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { Button } from 'components';
import { GITHUB_AUTH_URL } from 'utilities/constants';

export const GithubIcon = styled(FaGithub)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.black};
`;

export const ThirdPartyLoginButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 4px;
  height: 2.5em;
  color: ${({ theme }) => theme.color.black};
  width: 90%;
`;

export const GithubLoginButton = () => {
  const handleGithubClick = () => {
    window.open(GITHUB_AUTH_URL);
  };

  return (
    <ThirdPartyLoginButton onClick={handleGithubClick}>
      <GithubIcon /> Continue with Github
    </ThirdPartyLoginButton>
  );
};

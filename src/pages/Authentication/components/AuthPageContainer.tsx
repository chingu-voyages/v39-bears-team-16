import React from 'react';
import styled from 'styled-components';
import illustration from 'assets/img/illustration-learning.svg';

export const AuthContainer = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.color.subtleWhite};
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 40%;
  }
`;

export const AuthPageContainer = ({ children }) => {
  return (
    <AuthContainer>
      {children}
      <img src={illustration} alt="" />
    </AuthContainer>
  );
};

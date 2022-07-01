import React from 'react';
import styled from 'styled-components';
import { CloseIcon } from './AuthenticationIcons';

export const CookieRequest = styled.span`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 1.5em;
  padding: 0.65em;
  text-align: center;
  position: absolute;
  z-index: 10;
  top: -20px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.white};
`;

export const CookieRequestBanner = () => {
  return (
    <CookieRequest>
      Please ensure cookies are enabled.
      <CloseIcon />
    </CookieRequest>
  );
};

import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';

export const CloseIcon = styled(AiFillCloseCircle)`
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  margin-right: 0.5em;
`;

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
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <CookieRequest>
      Please ensure cookies are enabled.
      <CloseIcon onClick={() => setShowBanner(false)} />
    </CookieRequest>
  );
};

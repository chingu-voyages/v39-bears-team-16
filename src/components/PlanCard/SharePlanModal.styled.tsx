import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

export const Text = styled.h4`
  gap: 1em;
  align-items: center;

  span {
    font-weight: bold;
  }
`;

export const ShareLinkContainer = styled.div`
  display: flex;
`;

export const LinkDisplay = styled.div`
  background-color: ${({ theme }) => theme.color.lightSecondary};
`;

export const CopyButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
`;

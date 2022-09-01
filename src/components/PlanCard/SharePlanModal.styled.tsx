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
  font-weight: 700;
  font-size: 1.25em;
  span {
    font-weight: bold;
  }
`;

export const ShareLinkContainer = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  font-family: 'Poppins';
  font-weight: 400;
`;

export const ShareLinkDisplay = styled.div`
  padding: 0.75em;
  background-color: ${({ theme }) => theme.color.lightSecondary};
`;

export const CopyButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
`;

import styled from 'styled-components';
import { Button } from 'components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

export const Text = styled.h4`
  font-weight: 700;
  font-size: 1.25em;
`;

export const ShareLinkContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const ShareLinkDisplay = styled.div`
  padding: 0.75em;
  background-color: ${({ theme }) => theme.color.lightSecondary};
  font-weight: 300;
  word-break: break-all;
`;

export const CopyButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  white-space: nowrap;
  min-width: 15%;
`;

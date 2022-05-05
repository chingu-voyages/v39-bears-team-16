import styled from 'styled-components';

export const ErrorMessageList = styled.ul`
  text-align: left;
  padding-left: 1em;
`;

export const StyledErrorMessage = styled.p`
  color: ${({ theme }) => theme.color.red};
`;

import styled from 'styled-components';

export const ErrorMessageList = styled.ul`
  text-align: left;
  list-style: none;
  font-weight: 300;
`;

export const StyledErrorMessage = styled.p`
  color: ${({ theme }) => theme.color.red};
  text-align: left;
  margin: 0.5em 0 0 0;
  font-size: 0.8rem;
`;

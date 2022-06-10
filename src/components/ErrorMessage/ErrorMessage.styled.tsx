import styled from 'styled-components';

export const ErrorMessageList = styled.ul`
  text-align: left;
  list-style: none;
  /* font-size: 0.8rem; */
  font-weight: 300;
`;

export const StyledErrorMessage = styled.p`
  color: ${({ theme }) => theme.color.red};
`;

import styled from 'styled-components';

export const StyledHome = styled.section`
  color: ${({ theme }) => theme.background.primary};
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.background.white};
`;

export const StyledMainSection = styled.section`
  margin-left: 15em;
`;

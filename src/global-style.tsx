import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}
`;

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background: ${(p) => p.theme.background.secondary};
`;

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  gap: 1rem;
  border-radius: 20px;
  padding: 3rem;
  margin: 10px;
`;

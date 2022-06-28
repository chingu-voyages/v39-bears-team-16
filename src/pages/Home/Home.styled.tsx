import styled from 'styled-components';

export const StyledHome = styled.section`
  width: 100%;
  height: 100%;
`;

export const StyledMainSection = styled.section`
  margin-left: 15em;
`;

export const HomePlansPageContainer = styled.div`
  width: 100%;
  padding: 2em 4em;
  overflow: auto;
  height: calc(100vh - 64px);
`;

export const StyledPlanCardsContainer = styled.div`
  padding-top: 2em;
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-template-columns: repeat(4, 1fr);
  gap: 3em;
`;

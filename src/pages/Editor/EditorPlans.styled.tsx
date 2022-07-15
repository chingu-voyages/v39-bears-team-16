import styled from 'styled-components';

export const EditorPlansPageContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2em 4em;
  overflow: hidden;
  height: calc(100vh - 64px);
`;

export const StyledPlanCardsContainer = styled.div`
  padding-top: 2em;
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-template-columns: repeat(4, 1fr);
  gap: 3em;
`;

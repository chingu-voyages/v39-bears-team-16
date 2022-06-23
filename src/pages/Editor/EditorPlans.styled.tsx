import styled from 'styled-components';
import { Card } from '../../components/Card';

export const EditorPlansPageContainer = styled.div`
  width: 100%;
  padding: 4em;
  overflow: auto;
`;

export const StyledPlanCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1em;
`;

export const StyledAddPlanCard = styled(Card)`
  align-items: center;
  justify-content: center;
  border: 3px solid white;
`;

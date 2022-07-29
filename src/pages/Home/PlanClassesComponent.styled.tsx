import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100vh;
  overflow: auto;
`;

export const ImageBanner = styled.img`
  width: 100%;
  height: 500px;
`;

export const PlanClassesContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 1.5em;
  padding: 1.5em;
  border-radius: 1em;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 5em;
`;

export const PlanInfoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PlanInfoHeadlineWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 1em;
  align-items: start;
  flex: 0.8;
`;

export const ProgressBarContainer = styled.div`
  flex: 0.1;
  align-items: center;
`;

export const StyledClassesContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #ffffff;
  border-radius: 8px;
  gap: 2em;
  margin-top: 5em;
`;

import styled from 'styled-components';

export const SyllabusPageContainer = styled.div`
  max-width: 1500px;
  margin: auto;
`;

export const SyllabusContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1.5em;
  padding: 1.5em;
  border-radius: 1em;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 5em;
`;

export const Line = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  opacity: 20%;
  height: 1px;
`;

export const SyllabusHeadlineWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  align-items: center;
`;

export const SyllabusHeadline = styled.h1`
  font-weight: 500;
`;

export const StyledClassesContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 8px;
  gap: 2em;
  margin-top: 5em;
`;

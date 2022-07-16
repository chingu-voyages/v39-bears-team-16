import styled from 'styled-components';

export const SyllabusContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 1.5em;
  padding: 1.5em;
  border-radius: 1em;
  color: ${({ theme }) => theme.color.primary};
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

export const Classes = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

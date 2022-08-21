import styled from 'styled-components';
import { Input } from 'components';

export const StyledClassContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 8px;
  gap: 2em;
`;

export const StyledDescription = styled.p`
  font-weight: 300;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.darkGrey};
  line-height: 1.6rem;
`;

export const StyledAccordionContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 85%;
  margin: auto;
`;

export const StyledClassTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0;
`;

export const StyledClassworkContainer = styled.section`
  display: flex;
  gap: 3em;
  padding: 2em 0;
  align-items: center;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.color.darkGrey};
`;

export const StyledClassworkDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5em;
`;

export const StyledClassworkTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
`;

export const StyledClassworkResourceContainer = styled.div`
  padding: 1em 0;
`;

export const StyledClassworkLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.blue};

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledSubmissionInput = styled(Input)`
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 0;
  width: 85%;
`;

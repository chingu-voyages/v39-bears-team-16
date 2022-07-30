import styled from 'styled-components';
import { BsCheckCircleFill, BsCircleFill } from 'react-icons/bs';
import { Input, PrimaryButton } from 'components';

export const StyledClassContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 8px;
  gap: 2em;
`;

export const StyledAccordionContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: auto;
`;

export const StyledClassHeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0.9;

  span,
  p {
    font-weight: 300;
    color: ${({ theme }) => theme.color.darkGrey};
  }
`;

export const StyledClassTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0;
`;

export const StyledClassDescription = styled.p`
  font-size: 1rem;
`;

export const StyledClassworkTotal = styled.span`
  font-size: 0.9rem;
`;

export const StyledClassworkContainer = styled.section`
  display: flex;
  gap: 3em;
  padding: 2em 0;
  align-items: center;
`;

export const Line = styled.hr`
  border-top: 0.8px solid ${({ theme }) => theme.color.darkGrey};
  width: 100%;
`;

export const StyledClassworkDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledClassworkTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
`;

export const StyledClassworkDescription = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

export const StyledClassworkLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.blue};

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledCheckmark = styled.div`
  padding: 0;
  &:hover {
    background: none;
  }

  svg {
    font-size: 1.5rem;
  }
`;

export const StyledFilledCheckmarkIcon = styled(BsCheckCircleFill)`
  color: ${({ theme }) => theme.color.green};
`;

export const StyledFilledCircleIcon = styled(BsCircleFill)`
  color: ${({ theme }) => theme.color.grey};
`;

export const StyledMarkDoneButton = styled(PrimaryButton)`
  align-self: flex-start;
  margin-top: 2em;
`;

export const StyledSubmissionInput = styled(Input)`
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 0;
  width: 85%;
`;

import styled from 'styled-components';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { Button, PrimaryButton } from 'components';

export const StyledClassContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #ffffff;
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
  padding: 2em 0 0 2em;

  .expanded {
    transform: rotate(0deg);
    transition: all 0.3s ease-out;
  }
  .closed {
    transform: rotate(180deg);
    transition: all 0.3s ease-out;
  }
`;

export const ClassTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
`;

export const ClassDescription = styled.h4`
  font-weight: 200;
  font-size: 1rem;
`;

export const StyledClassworkContainer = styled.section`
  display: flex;
  gap: 3em;
  padding: 1em;
  padding-bottom: 2em;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
`;

export const StyledClassworkDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledClassworkTitle = styled.h2`
  font-size: 1.2rem;
`;

export const StyledClassworkLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.blue};

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledCheckmarkButton = styled(Button)`
  padding: 0;
  &:hover {
    background: none;
  }

  svg {
    font-size: 1.5rem;
  }
`;

export const StyledFilledCheckmark = styled(IoCheckmarkCircleSharp)`
  color: ${({ theme }) => theme.color.green};
`;

export const StyledMarkDoneButton = styled(PrimaryButton)`
  align-self: flex-end;
`;

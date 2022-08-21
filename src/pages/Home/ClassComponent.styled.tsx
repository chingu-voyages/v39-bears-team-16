import styled from 'styled-components';
import { BsCheckCircleFill, BsCircleFill } from 'react-icons/bs';
import { PrimaryButton } from 'components';

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

export const StyledClassworkTotal = styled.span`
  font-size: 0.9rem;
`;

export const StyledClassworkDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

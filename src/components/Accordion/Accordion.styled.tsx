import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';

import { iconStyles } from 'components/Icon.styles';

export const StyledAccordionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 2em;
`;

export const StyledClassHeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  cursor: pointer;
`;

interface ExpandArrowProps {
  state: 'closed' | 'expanded';
}

export const ExpandArrow = styled(MdExpandMore)`
  ${iconStyles}
  margin: 0 10px;
  font-size: 30px;
  transition: all 0.3s ease-out;
  transform: ${({ state }: ExpandArrowProps) =>
    state === 'expanded' ? 'rotate(0deg)' : 'rotate(180deg)'};
`;

export const Appear = styled.div``;

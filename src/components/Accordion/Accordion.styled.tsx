import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';

import { iconStyles } from '../../pages/Admin/AdminUpdateClass/styles';

export const StyledAccordionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledClassHeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.01rem grey ridge;
  padding: 0.5rem;
  .expanded {
    transform: rotate(0deg);
    transition: all 0.3s ease-out;
  }
  .closed {
    transform: rotate(180deg);
    transition: all 0.3s ease-out;
  }
`;

export const ExpandArrow = styled(MdExpandMore)`
  ${iconStyles}
  margin: 0 10px;
  font-size: 3rem;
`;

export const Appear = styled.div``;

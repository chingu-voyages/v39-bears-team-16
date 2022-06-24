import styled from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Card } from '../Card';

export const CardContainer = styled(Card)`
  position: relative;
  background: ${({ theme }) => theme.background.grey};
`;

export const CohortInfoWrapper = styled.section`
  position: relative;
  border-radius: 10px;
  width: 100%;
  height: 75%;
`;
export const CohortInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;
export const CohortId = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: 1.1rem;
  font-weight: 700;
`;
export const CohortDate = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.7rem;
  font-weight: 100;
  font-style: italic;
`;
export const CohortImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
`;
export const CohortNav = styled.section`
  width: 100%;
  height: 25%;
  border-radius: 0 0 10px 10px;
  background: ${({ theme }) => theme.background.white};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const OptionIcon = styled(BsThreeDotsVertical)`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  outline: 1px white solid;
  color: white;
  border-radius: 50%;
  padding: 2px;
  font-size: 1.5rem;
`;

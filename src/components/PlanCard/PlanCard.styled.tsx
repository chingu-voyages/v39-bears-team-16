import styled from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Card } from '../Card';

export const CardContainer = styled(Card)`
  position: relative;
  border-radius: 0;
  background: ${({ theme }) => theme.color.primary};
  border: 1.75px solid ${({ theme }) => theme.color.grey};
`;
export const PlanInfoWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 75%;
  border-bottom: 1.75px solid ${({ theme }) => theme.color.grey};
`;
export const PlanInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;
export const PlanId = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.1rem;
  font-weight: 700;
`;
export const PlanDate = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 0.7rem;
`;
export const PlanImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  padding: 8px;
`;
export const PlanNav = styled.section`
  width: 100%;
  height: 25%;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1.75px solid ${({ theme }) => theme.color.grey};
`;
export const OptionIcon = styled(BsThreeDotsVertical)`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  color: white;
  padding: 2px;
  font-size: 1.5rem;
`;

import styled from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Card } from '../Card';

export const CardContainer = styled(Card)`
  position: relative;
  border-radius: 0;
  background: ${({ theme }) => theme.color.primary};
  border: 1.75px solid ${({ theme }) => theme.color.grey};
`;
export const CardTopNav = styled.section`
  height: 25%;
  background: ${({ theme }) => theme.color.white};
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
  color: ${({ theme }) => theme.color.primary};
  font-size: 1.4rem;
  font-weight: 700;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.5em;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const OptionIcon = styled(BsThreeDotsVertical)`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  color: ${({ theme }) => theme.color.primary};
  padding: 2px;
  font-size: 1.5rem;
`;

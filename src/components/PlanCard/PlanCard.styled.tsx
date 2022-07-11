import styled from 'styled-components';
import { BsThreeDotsVertical, BsHeart } from 'react-icons/bs';
import { Card } from '../Card';

export const CardContainer = styled(Card)`
  position: relative;
  border-radius: 0;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.primary};
`;
export const CardTopNav = styled.section`
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${({ theme }) => theme.color.white};
`;
export const PlanInfoWrapper = styled.section`
  background: ${({ theme }) => theme.color.primary};
  position: relative;
  width: 100%;
  height: 50%;
  border-bottom: 1.75px solid ${({ theme }) => theme.color.grey};
`;
export const PlanInfo = styled.section`
  padding: 15px;
  align-items: center;
`;
export const PlanId = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  padding-left: 6px;
  overflow: hidden;
  white-space: wrap;
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
  font-size: 0.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1em;
`;
export const OptionIcon = styled(BsThreeDotsVertical)`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  color: ${({ theme }) => theme.color.primary};
  padding: 2px;
  font-size: 1.5rem;
  margin: 2px;
`;
export const HeartIcon = styled(BsHeart)`
  color: ${({ theme }) => theme.color.primary};
  padding: 2px;
  font-size: 1.5rem;
  margin-right: 4px;
`;
export const HeartDisplay = styled.section`
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.8rem;
`;
export const PlanDescription = styled.section`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.primary};
  overflow: hidden;
  white-space: nowrap;
  max-height: 15%;
  text-overflow: ellipsis;
  padding: 2px;
`;

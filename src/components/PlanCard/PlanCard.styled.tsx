import styled from 'styled-components';
import { BsThreeDotsVertical, BsHeart } from 'react-icons/bs';
import { Card } from '../Card';

export const CardContainer = styled(Card)`
  position: relative;
  border-radius: 0;
  background: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
`;
export const CardTopNav = styled.section`
  height: 25%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
`;
export const PlanInfoWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 75%;
  border-bottom: 1.75px solid ${({ theme }) => theme.color.grey};
`;
export const PlanInfo = styled.section`
  padding: 15px;
`;
export const PlanId = styled.p`
  color: ${({ theme }) => theme.color.primary};
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
export const HeartIcon = styled(BsHeart)`
  color: ${({ theme }) => theme.color.primary};
  padding: 2px;
  font-size: 1.5rem;
`;
export const HeartDisplay = styled.section`
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.8rem;
  max-width: 10%;
`;
export const PlanDescription = styled.section`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.primary};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 70%;
  max-height: 90%;
`;

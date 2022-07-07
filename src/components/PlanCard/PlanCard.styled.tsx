import styled from 'styled-components';
import { BsThreeDotsVertical, BsHeart } from 'react-icons/bs';

export const Card = styled.div`
  position: relative;
  border-radius: 0;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.primary};
`;
export const CardTopNav = styled.section`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  padding: 1em;
  align-items: center;
`;
export const PlanId = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  padding-left: 0.25em;
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
  padding: 0.625em;
`;
export const PlanNav = styled.section`
  width: 100%;
  height: 10%;
  font-size: 0.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1.5em;
`;
export const OptionIcon = styled(BsThreeDotsVertical)`
  color: ${({ theme }) => theme.color.primary};
  padding: 0.125em;
  font-size: 1.5rem;
  margin: 2px;
`;
export const HeartIcon = styled(BsHeart)`
  color: ${({ theme }) => theme.color.primary};
  font-size: 1rem;
  margin-right: 4px;
`;
export const HeartDisplay = styled.section`
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.8rem;
`;
export const PlanDescription = styled.section`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.primary};
  border-bottom: 1.75px solid ${({ theme }) => theme.color.grey};
  overflow: hidden;
  white-space: nowrap;
  height: 20%;
  text-overflow: ellipsis;
  padding: 0.125em;
`;

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

export const PlanCardHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.color.primary};
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1em;
`;

export const PlanInfoWrapper = styled.section`
  background: ${({ theme }) => theme.color.primary};
  position: relative;
  width: 100%;
  height: 75%;
  background: ${({ theme }) => theme.color.primary};
  border-bottom: 1.75px solid ${({ theme }) => theme.color.grey};
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

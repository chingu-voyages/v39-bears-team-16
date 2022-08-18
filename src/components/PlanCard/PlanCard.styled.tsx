import styled from 'styled-components';
import { BsThreeDotsVertical, BsHeart } from 'react-icons/bs';

export const CardContainer = styled.div`
  position: relative;
  width: 270px;
`;

export const CardTopNav = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
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
`;

export const PlanImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  padding: 1em;
`;

export const PlanNav = styled.section`
  width: 100%;
  font-size: 0.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  padding: 1em;
`;

export const OptionIcon = styled(BsThreeDotsVertical)`
  color: ${({ theme }) => theme.color.black};
`;

export const HeartIcon = styled(BsHeart)`
  color: ${({ theme }) => theme.color.black};
  font-size: 1rem;
  margin-right: 4px;
`;

export const HeartDisplay = styled.section`
  color: ${({ theme }) => theme.color.black};
  font-size: 0.8rem;
`;

export const PlanDescription = styled.section`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 1em;
`;

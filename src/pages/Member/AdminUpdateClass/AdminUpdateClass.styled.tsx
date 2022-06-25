import styled from 'styled-components';
import { BsCalendarDate } from 'react-icons/bs';
import { iconStyles, StyledDateString } from './styles';

export const SyllabusContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 1.5em;
  padding: 1.5em;
  border-radius: 1em;
  color: ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.color.primary};
`;

export const Line = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  opacity: 20%;
  height: 1px;
`;

export const SyllabusHeadlineWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  align-items: center;
`;

export const SyllabusHeadline = styled.h1`
  font-weight: 500;
`;

export const SyllabusDate = styled(StyledDateString)`
  font-size: 1rem;
  margin: 0 10px;
`;

export const Classes = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const AddClassButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.color.primary};
  width: 120px;
  height: 40px;
  border-radius: 10px;
  font-weight: 400;
  cursor: pointer;
  border-color: white;

  &:hover {
    border: none;
    background-color: ${({ theme }) => theme.color.yellow};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const DateIcon = styled(BsCalendarDate)`
  ${iconStyles}
  opacity: 100%;
  color: ${({ theme }) => theme.color.primary};
`;

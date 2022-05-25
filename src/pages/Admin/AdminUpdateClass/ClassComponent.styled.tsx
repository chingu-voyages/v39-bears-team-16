import styled from 'styled-components';
import { AiOutlineEdit } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';
import { RiEditBoxFill } from 'react-icons/ri';
import { MdAdd } from 'react-icons/md';
import { iconStyles, StyledDateString } from './styles';

export const StyledClassContainer = styled.section`
  display: flex;
  width: 100%;
`;

export const StyledAccordionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledClassHeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const ClassDate = styled(StyledDateString)`
  color: ${({ theme }) => theme.color.secondary};
  font-weight: bold;
`;

export const ClassTitleWrapper = styled.section`
  display: flex;
  align-items: center;
`;

export const ClassTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  margin-left: 10px;
`;

export const ClassDescription = styled.h4`
  font-weight: 200;
  margin-left: 30px;
  font-size: 1rem;
`;

export const StyledClassItemsContainer = styled.ul`
  margin-left: 50px;
  margin-top: 10px;
  font-weight: 100;
`;

export const StyledClassItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
`;

export const AddClassWrapper = styled.section`
  display: flex;
  gap: 10px;
`;

export const EditClassIcon = styled(RiEditBoxFill)`
  ${iconStyles}
  margin-right: 20px;
  color: ${({ theme }) => theme.color.yellow};
  font-size: 2rem;
`;

export const EditClassContentIcon = styled(AiOutlineEdit)`
  ${iconStyles}
  color: ${({ theme }) => theme.color.yellow};
`;

export const TrashIcon = styled(BiTrash)`
  ${iconStyles}
  margin: 0 10px;
  color: ${({ theme }) => theme.color.red};
`;

export const AddClassContentIcon = styled(MdAdd)`
  ${iconStyles}
  color: ${({ theme }) => theme.color.yellow};
`;

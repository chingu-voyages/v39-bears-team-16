import styled from 'styled-components';
import { AiOutlineEdit } from 'react-icons/ai';
import { BiTrash, BiPencil } from 'react-icons/bi';
import { MdAdd } from 'react-icons/md';
import { iconStyles } from './styles';

export const StyledClassContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #ffffff;
  border-radius: 8px;
`;

export const StyledAccordionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledClassHeaderWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .expanded {
    transform: rotate(0deg);
    transition: all 0.3s ease-out;
  }
  .closed {
    transform: rotate(180deg);
    transition: all 0.3s ease-out;
  }
`;

export const ClassTitleWrapper = styled.section`
  display: flex;
  align-items: center;
`;

export const ClassTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 1em;
`;

export const ClassDescription = styled.h4`
  font-weight: 200;
  margin-left: 30px;
  font-size: 1rem;
`;

export const StyledClassItemsContainer = styled.ul`
  margin-top: 1em;
  font-weight: 100;
`;

export const StyledClassItem = styled.li`
  list-style-type: none;
  display: flex;
`;

export const AddClassWrapper = styled.section`
  display: flex;
  gap: 10px;
`;

export const EditClassIcon = styled(BiPencil)`
  ${iconStyles}
  color: ${({ theme }) => theme.color.primary};
`;

export const EditClassContentIcon = styled(AiOutlineEdit)`
  ${iconStyles}
  color: ${({ theme }) => theme.color.white};
`;

export const TrashIcon = styled(BiTrash)`
  ${iconStyles}
  color: ${({ theme }) => theme.color.red};
`;

export const AddClassContentIcon = styled(MdAdd)`
  ${iconStyles}
  color: ${({ theme }) => theme.color.primary};
`;

export const MaterialLists = styled.div`
  margin: 2rem;
  width: 15rem;
`;

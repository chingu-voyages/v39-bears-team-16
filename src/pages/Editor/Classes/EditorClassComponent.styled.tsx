/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { AiOutlineEdit, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { BiPencil, BiTrash } from 'react-icons/bi';
import { MdAdd } from 'react-icons/md';
import { iconStyles } from 'components/Icon.styles';
import { FaArrowLeft } from 'react-icons/fa';
import { StyledDescription } from 'components/ClassCommon.styled';

export const StyledEditorClassHeaderWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex: 0.9;
`;

export const EditClassIcon = styled(BiPencil)`
  ${iconStyles}
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.blue};
`;

export const ClassworkIcon = styled(AiOutlineAppstoreAdd)`
  ${iconStyles}
  cursor: unset;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.primary};
  margin: 0 1em;
`;

export const TrashIcon = styled(BiTrash)`
  ${iconStyles}
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.red};
`;

export const StyledEditorClassDescription = styled(StyledDescription)`
  padding-left: 0.5em;
`;
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
  flex-direction: column;
  padding-top: 1em;
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



export const EditClassContentIcon = styled(AiOutlineEdit)`
  ${iconStyles}
  color: ${({ theme }) => theme.color.white};
`;


export const AddClassContentIcon = styled(MdAdd)`
  ${iconStyles}
  color: ${({ theme }) => theme.color.primary};
`;

export const LeftArrow = styled(FaArrowLeft)`
  ${iconStyles}
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.938rem;
`;
export const MaterialLists = styled.div`
  margin: 2rem;
  width: 15rem;
`;
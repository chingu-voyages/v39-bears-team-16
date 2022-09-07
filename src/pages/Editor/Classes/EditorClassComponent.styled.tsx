import styled from 'styled-components';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { BiTrash, BiPencil } from 'react-icons/bi';
import { iconStyles } from 'components/Icon.styles';
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

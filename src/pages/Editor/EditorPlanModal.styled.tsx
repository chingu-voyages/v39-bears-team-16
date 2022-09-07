import styled from 'styled-components';
import { Input } from 'components/Input';
import { PillLabel } from 'components/PillLabel.styled';
import { IoCloseOutline } from 'react-icons/io5';

export const StyledTagsContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.color.black};
  padding: 0.5em;
  border-radius: 4px;
  width: 95%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;
`;

export const StyledTagItem = styled(PillLabel)`
  display: flex;
  align-items: center;
  gap: 0.5em;
  border-radius: 20px;
`;

export const StyledTagItemClose = styled(IoCloseOutline)`
  color: ${({ theme }) => theme.color.black};
  font-size: 1rem;
  cursor: pointer;
`;

export const StyledInput = styled(Input)`
  flex-grow: 1;
  padding: 0.5em 0;
  border: none;
  outline: none;
`;

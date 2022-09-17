/* eslint-disable prettier/prettier */
import { PrimaryButton } from 'components/Button';
import styled from 'styled-components';

export const iconStyles = {
  fontSize: '1.3rem',
  opacity: '80%',
  cursor: 'pointer',
  transition: 'all ease 0.1s',
  '&:hover': {
    opacity: '100%',
  },
};

export const StyledDateString = styled.span`
  font-weight: 100;
  font-style: italic;
`;

export const StyledForm = styled.form`
  margin: 0 5% 0 5%;
  font-family: 'Poppins';
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 1em;

`;

export const Classworks = styled.div`
  display: flex;
  flex-direction: column;

`;

export const ClassWorkHeading = styled.div`
  height: 50px;
  background: ${({ theme }) => theme.color.secondary};
  display: flex;
  justify-content: space-between;
  margin: 2px 0;
  padding: 10px;
  width:95%;
  span {
    height: 30px;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.875rem;
    letter-spacing: 0.031rem;
  }
`;
export const AddNewClassWorkBtn = styled(PrimaryButton)`
  border-radius: 20px;
  position: absolute;
  left: 15px;
`;
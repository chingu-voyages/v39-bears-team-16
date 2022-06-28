import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { iconStyles } from '../../pages/Member/AdminUpdateClass/styles';

export const Fade = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 3;
`;

export const Container = styled.div`
  position: fixed;
  top: 25%;
  left: 25%;
  z-index: 5;
  margin: auto;
  outline: 0;
  width: 50%;
  background: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.black};
  margin: 0;
`;

export const Content = styled.div`
  padding: 2rem 0;
  color: ${({ theme }) => theme.color.black};

  input,
  textarea {
    width: 100%;
  }
`;

export const CloseButton = styled(AiOutlineCloseCircle)`
  ${iconStyles}
  margin: 0 10px;
  color: ${({ theme }) => theme.color.black};
  font-size: 2rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

export const StyledActionContainer = styled.div`
  display: flex;
  gap: 1em;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1.5em;
  flex-wrap: wrap;
`;

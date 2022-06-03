import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { iconStyles } from '../../pages/Admin/AdminUpdateClass/styles';

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
  width: 40rem;
  height: 40rem;
  color: ${({ theme }) => theme.color.secondary};
  background: ${({ theme }) => theme.background.white};
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

export const Title = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-weight: 150;
  margin: 0;
  font-size: 3rem;
  margin-left: 10px;
`;

export const Content = styled.div`
  margin: auto;
  color: ${({ theme }) => theme.color.black};
`;

export const CloseButton = styled(AiOutlineCloseCircle)`
  ${iconStyles}
  margin: 0 10px;
  color: ${({ theme }) => theme.color.black};
  font-size: 3.5rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

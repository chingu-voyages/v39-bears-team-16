import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ThemeInterface } from '../../types';
import { iconStyles } from '../../pages/Editor/Classes/styles';

export const useModalStyles = (theme: ThemeInterface) => {
  return {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: 20,
    },
    content: {
      position: 'absolute',
      top: '50%',
      right: 0,
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: '1px solid #ccc',
      background: theme.color.white,
      WebkitOverflowScrolling: 'touch',
      borderRadius: '8px',
      outline: 'none',
      padding: '2em',
      paddingBottom: '1em',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '28rem',
    },
  } as ReactModal.Styles;
};

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
  padding: 2em 0;
  color: ${({ theme }) => theme.color.black};
  overflow: auto;

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
  width: 100%;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1em;
  padding-top: 1em;
`;

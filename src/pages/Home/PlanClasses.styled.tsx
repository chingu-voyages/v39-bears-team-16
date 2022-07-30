import styled from 'styled-components';

interface ImageBannerProps {
  src: string;
}

export const ImageBanner = styled.div`
  height: 25rem;
  background-image: url(${({ src }: ImageBannerProps) => src});
  background-size: cover;
`;

export const PlanClassesContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 1.5em;
  padding: 1.5em;
  border-radius: 1em;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 5em;
`;

export const PlanInfoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PlanInfoHeadlineWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 1em;
  align-items: start;
  flex: 0.8;

  h1 {
    font-weight: 600;
  }

  p {
    font-weight: 300;
    line-height: 1.5rem;
  }
`;

export const ProgressBarContainer = styled.div`
  flex: 0.1;
  align-items: center;
`;

export const StyledClassesContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 8px;
  gap: 2em;
  margin-top: 5em;
`;

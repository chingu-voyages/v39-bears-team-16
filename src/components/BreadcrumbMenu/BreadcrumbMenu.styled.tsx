import styled from 'styled-components';

export const navLinkStyles = {
  color: 'white',
  fontSize: '1.125em',
};

export const activeStyle = {
  fontWeight: 'bold',
};

export const BreadcrumbArea = styled.div`
  background: ${({ theme }) => theme.background.primary};
  margin: 1.5em;
  height: 90px;
  border-radius: 1em;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.background.white};
`;

export const CohortContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const CohortDash = styled.section`
  color: ${({ theme }) => theme.background.white};
  margin: 1em;
  font-size: 0.85em;
  font-weight: 600;
`;

export const BreadcrumbContainer = styled.span`
  padding-left: 1.5em;
  font-size: 0.75em;
  color: ${({ theme }) => theme.background.white};
`;

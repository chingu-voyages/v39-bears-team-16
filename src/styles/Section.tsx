import styled from 'styled-components';

export const Section = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  width: fit-content;
  height: auto;
  padding: 2rem;
  .twitterIcon {
    font-size: 3rem;
    cursor: pointer;
  }
  h1 {
    font-size: 3rem;
    margin: 0 0 1rem 0;
  }
  h2,
  h3 {
    font-size: 1rem;
    font-weight: 300;
  }
  .link {
    color: #20c997;
    text-decoration: none;
  }
`;

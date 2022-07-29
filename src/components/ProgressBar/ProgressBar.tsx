import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  progress[value] {
    appearance: none;
    ::-webkit-progress-bar {
      height: 10px;
      border-radius: 2px;
      background-color: lightgray;
    }
    ::-webkit-progress-value {
      height: 10px;
      border-radius: 2px;
      background-color: mediumspringgreen;
    }
  }
`;
const Value = styled.span`
  font-style: italic;
`;
export interface progressProps {
  value: number;
}
const ProgressBar = ({ value }: progressProps) => {
  return (
    <Container>
      <progress value={value} max="100" />
      <Value>{value}%</Value>
    </Container>
  );
};

export default ProgressBar;

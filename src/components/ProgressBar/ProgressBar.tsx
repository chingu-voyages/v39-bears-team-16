import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 1em;

  progress[value] {
    appearance: none;
    ::-webkit-progress-bar {
      height: 10px;
      border-radius: 2px;
      background-color: ${({ theme }) => theme.color.grey};
    }
    ::-webkit-progress-value {
      height: 10px;
      border-radius: 2px;
      background-color: ${({ theme }) => theme.color.green};
    }
  }
`;

const Value = styled.span`
  font-style: italic;
`;
export interface progressProps {
  value: number;
}

export const ProgressBar = ({ value }: progressProps) => {
  return (
    <Container>
      <progress value={value} max="100" />
      <Value>{value}%</Value>
    </Container>
  );
};

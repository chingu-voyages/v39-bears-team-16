import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { darkTheme } from 'theme';

export interface circularProgressProps {
  value: number;
}

const CircularProgress = ({ value }: circularProgressProps) => {
  return (
    <div style={{ width: '100px' }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={{
          text: {
            fill: 'black',
            fontStyle: 'italic',
          },
          trail: {
            stroke: darkTheme.color.grey,
          },
          path: {
            stroke: darkTheme.color.green,
          },
        }}
      />
    </div>
  );
};

export default CircularProgress;

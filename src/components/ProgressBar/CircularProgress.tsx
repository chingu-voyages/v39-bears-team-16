import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = (value: number) => {
  return (
    <div>
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
              stroke: 'lightgrey',
            },
            path: {
              stroke: 'mediumspringgreen',
            },
          }}
        />
      </div>
    </div>
  );
};

export default CircularProgress;

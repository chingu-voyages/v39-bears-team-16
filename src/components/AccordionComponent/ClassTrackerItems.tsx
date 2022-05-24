import React, { ReactNode } from 'react';
import styled from 'styled-components';


// Streamline Types, Integrate the types later to a single file

type ClassTrackerItemsType = {
  title: string;
  content: ReactNode;
};

//  Mock Data Source is ClassInformation  src/Data/ClassInformation.tsx

const ClassTrackerItems = ({
  data,
  isExpanded,
  handleClick,
}: {
  data: ClassTrackerItemsType;
  isExpanded: boolean;
  handleClick: () => void;
}) => {
  return (
    <div>
      <h2>
        <button onClick={handleClick}>{data.title} </button>
      </h2>
      <div>{isExpanded && data.content} </div>
    </div>
  );
};

export default ClassTrackerItems;

import React, { ReactNode, useState } from 'react';
import ClassTrackerItems from './ClassTrackerItems';

type ClassTrackerItemsType = {
  title: string;
  content: ReactNode;
};

const Accordion = ({ items }: { items: Array<ClassTrackerItemsType> }) => {
//   const [isExpanded, setIsExpanded] = useState<Boolean>(false);
  const [currentID, setCurrentID] = useState<number>();

  return (
    <div>
      {items.map((item, id) => (
        <ClassTrackerItems
          key={item.title}
          data={item}
          handleClick={() => {
            setCurrentID(currentID === id ? -1 : id);
          }}

          isExpanded={currentID==id?true:false}
        />
      ))}
    </div>
  );
};

export default Accordion;

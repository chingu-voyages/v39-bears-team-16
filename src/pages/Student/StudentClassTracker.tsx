import React from 'react';
import Accordion from '../../components/AccordionComponent/Accordion';
import { ClassInformation } from '../../Data/ClassInformation';

const StudentClassTracker = () => {
  return (
    <div>
      <Accordion items={ClassInformation} />
    </div>
  );
};

export default StudentClassTracker;

import React from 'react';

import {
  AddClassButton,
  Classes,
  DateIcon,
  Line,
  SyllabusContainer,
  SyllabusDate,
  SyllabusHeadline,
  SyllabusHeadlineWrapper,
} from './AdminUpdateClass.styled';
import ClassComponent from './ClassComponent';

const AdminUpdateClass = () => {
  return (
    <SyllabusContainer>
      <SyllabusHeadlineWrapper>
        <SyllabusHeadline>
          Syllabus
          <SyllabusDate>(March 1st, 2022 - December 1st, 2022)</SyllabusDate>
          <DateIcon />
        </SyllabusHeadline>
        <AddClassButton type="button">+ New Class</AddClassButton>
      </SyllabusHeadlineWrapper>
      <Line />
      <Classes>
        <ClassComponent />
      </Classes>
    </SyllabusContainer>
  );
};

export default AdminUpdateClass;

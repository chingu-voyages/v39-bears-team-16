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
import { useModal } from '../../../components/Modal/useModal';
import { Modal } from '../../../components/Modal/Modal';

const AdminUpdateClass = () => {
  const { isOpen, toggle } = useModal();

  return (
    <SyllabusContainer>
      <SyllabusHeadlineWrapper>
        <SyllabusHeadline>
          Syllabus
          <SyllabusDate>(March 1st, 2022 - December 1st, 2022)</SyllabusDate>
          <DateIcon />
        </SyllabusHeadline>
        <AddClassButton type="button" onClick={toggle}>
          + New Class
        </AddClassButton>
        <Modal titleText="Add New Class" isOpen={isOpen} hide={toggle}>
          Hello, This is where you will add New Class content
        </Modal>
      </SyllabusHeadlineWrapper>
      <Line />
      <Classes>
        <ClassComponent />
      </Classes>
    </SyllabusContainer>
  );
};

export default AdminUpdateClass;

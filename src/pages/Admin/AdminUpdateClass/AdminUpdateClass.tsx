import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
import { ErrorMessageType } from '../../../types';
import { ERROR_MESSAGES } from '../../../utilities/constants';
import {
  adminCreateClass,
  AdminCreateClassProps,
  getAdminClass,
} from '../../../api/getAdminClasses';
import { AddNewClassForm } from './AddNewClass';

interface ClassComponentDataProps {
  _id: string;
  date: string;
  name: string;
  subject: string;
  classworks?: [];
}

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
          <AddNewClassForm />
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

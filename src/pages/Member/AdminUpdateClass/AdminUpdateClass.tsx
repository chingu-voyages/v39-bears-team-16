import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import {
  AddClassButton,
  Classes,
  Line,
  SyllabusContainer,
  SyllabusHeadline,
  SyllabusHeadlineWrapper,
} from './AdminUpdateClass.styled';
import ClassComponent from './ClassComponent';
import { useModal } from '../../../components/Modal/useModal';

import { ErrorMessageInterface } from '../../../types';
import { ERROR_MESSAGES } from '../../../utilities/constants';
import { getPlanClasses } from '../../../api/getPlanClasses';
import { AddNewClassForm } from './AddNewClassModal';

interface ClassComponentDataProps {
  _id: string;
  date: string;
  name: string;
  subject: string;
  classworks?: [];
}

const AdminUpdateClass = () => {
  const { isOpen, toggle } = useModal();
  const [classes, setClasses] = useState<ClassComponentDataProps[]>([]);
  const { id } = useParams();

  const fetchAdminClasses = useCallback(async () => {
    try {
      const res = await getPlanClasses(id);
      setClasses(res.data.length ? res.data : []);
    } catch (error) {
      const errors = error as ErrorMessageInterface[];
      if (errors?.[0]?.msg === ERROR_MESSAGES.unauthorized) {
        // navigate('/sign-in', { replace: true });
      }
    }
  }, [id]);
  const handleCloseModal = () => {
    fetchAdminClasses();
  };
  useEffect(() => {
    fetchAdminClasses();
  }, [fetchAdminClasses]);

  return (
    <SyllabusContainer>
      <SyllabusHeadlineWrapper>
        <SyllabusHeadline>Syllabus</SyllabusHeadline>
        <AddClassButton type="button" onClick={toggle}>
          + New Class
        </AddClassButton>

        <AddNewClassForm
          isOpen={isOpen}
          toggle={toggle}
          handleClose={handleCloseModal}
        />
      </SyllabusHeadlineWrapper>
      <Line />
      <Classes>
        <ClassComponent classes={classes} handleClose={handleCloseModal} />
      </Classes>
    </SyllabusContainer>
  );
};

export default AdminUpdateClass;

import React, { useState, useEffect, useCallback } from 'react';
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

import { ErrorMessageType } from '../../../types';
import { ERROR_MESSAGES } from '../../../utilities/constants';
import { getAdminClass } from '../../../api/getAdminClasses';
import { AddNewClassForm } from './AddNewClass';
import { getCsrfToken } from '../../../api/getCsrfToken';

interface ClassComponentDataProps {
  _id: string;
  date: string;
  name: string;
  subject: string;
  classworks?: [];
}

const AdminUpdateClass = () => {
  const { isOpen, toggle } = useModal();
  const [classes, setClasses] = useState<ClassComponentDataProps[]>();
  const { id } = useParams();

  const fetchAdminClasses = useCallback(async () => {
    try {
      const res = await getAdminClass(id);
      setClasses(res.data);
    } catch (error) {
      const errors = error as ErrorMessageType[];
      if (errors?.[0]?.msg === ERROR_MESSAGES.unauthorized) {
        // navigate('/sign-in', { replace: true });
      }
    }
  }, [id]);
  const handleCloseModal = () => {
    toggle();
    fetchAdminClasses();
  };
  useEffect(() => {
    getCsrfToken();
    fetchAdminClasses();
  }, [fetchAdminClasses]);

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

        <AddNewClassForm
          isOpen={isOpen}
          toggle={toggle}
          handleClose={handleCloseModal}
        />
        {/* <Modal
          titleText="Add New Class"
          isOpen={isOpen}
          hide={toggle}
          primaryAction={
            <PrimaryButton type="submit" form="addClassForm">
              Submit
            </PrimaryButton>
          }
          secondaryAction={<Button onClick={handleCloseModal}>Cancel</Button>}
        >
          <AddNewClassForm />
        </Modal> */}
      </SyllabusHeadlineWrapper>
      <Line />
      <Classes>
        <ClassComponent classes={classes} />
      </Classes>
    </SyllabusContainer>
  );
};

export default AdminUpdateClass;

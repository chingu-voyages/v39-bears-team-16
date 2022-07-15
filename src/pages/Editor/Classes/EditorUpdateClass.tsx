import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import {
  Classes,
  Line,
  SyllabusContainer,
  SyllabusHeadline,
  SyllabusHeadlineWrapper,
} from 'pages/Editor/Classes/EditorUpdateClass.styled';
import { AddNewClassForm } from 'pages/Editor/Classes/UpdateClassModals/AddNewClassModal';
import ClassComponent from 'pages/Editor/Classes/ClassComponent';
import { useModal } from 'components/Modal/useModal';

import { ErrorMessageInterface } from 'types';
import { ERROR_MESSAGES } from 'utilities/constants';
import { getPlanClasses } from 'api/classes';
import { PrimaryButton } from 'components/Button';

interface ClassComponentDataProps {
  _id: string;
  date: string;
  name: string;
  subject: string;
  classworks?: [];
}

const EditorUpdateClass = () => {
  const { isOpen, toggle } = useModal();
  const [classes, setClasses] = useState<ClassComponentDataProps[]>([]);
  const { id } = useParams();

  const fetchClasses = useCallback(async () => {
    try {
      const { data } = await getPlanClasses(id);
      setClasses(data.classes);
    } catch (error) {
      const errors = error as ErrorMessageInterface[];
      if (errors?.[0]?.msg === ERROR_MESSAGES.unauthorized) {
        // navigate('/sign-in', { replace: true });
      }
    }
  }, [id]);

  useEffect(() => {
    fetchClasses();
  }, [fetchClasses]);

  return (
    <SyllabusContainer>
      <SyllabusHeadlineWrapper>
        <SyllabusHeadline>Syllabus</SyllabusHeadline>
        <PrimaryButton onClick={toggle}>
          <FaPlus /> New Class
        </PrimaryButton>

        <AddNewClassForm
          isOpen={isOpen}
          toggle={toggle}
          fetchClasses={fetchClasses}
        />
      </SyllabusHeadlineWrapper>
      <Line />
      <Classes>
        <ClassComponent classes={classes} fetchClasses={fetchClasses} />
      </Classes>
    </SyllabusContainer>
  );
};

export default EditorUpdateClass;

import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import {
  Line,
  StyledClassesContainer,
  SyllabusContainer,
  SyllabusHeadline,
  SyllabusHeadlineWrapper,
} from 'pages/Editor/Classes/EditorClasses.styled';
import { AddNewClassForm } from 'pages/Editor/Classes/UpdateClassModals/AddNewClassModal';
import EditorClassComponent from 'pages/Editor/Classes/EditorClassComponent';
import { useModal } from 'components/Modal/useModal';
import { ClassInterface, ErrorMessageInterface } from 'types';
import { ERROR_MESSAGES } from 'utilities/constants';
import { getPlanClasses } from 'api/classes';
import { PrimaryButton } from 'components/Button';

const EditorClasses = () => {
  const { isOpen, toggle } = useModal();
  const [classes, setClasses] = useState<ClassInterface[]>([]);
  const { id } = useParams();

  const fetchClasses = useCallback(async () => {
    try {
      const { data } = await getPlanClasses(id);
      setClasses(data.plan.classes);
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
          <FaPlus /> Add New Class
        </PrimaryButton>
        <AddNewClassForm
          isOpen={isOpen}
          toggle={toggle}
          fetchClasses={fetchClasses}
        />
      </SyllabusHeadlineWrapper>
      <Line />
      <StyledClassesContainer>
        {classes?.map((classData) => (
          <div key={classData._id}>
            <EditorClassComponent
              classData={classData}
              fetchClasses={fetchClasses}
            />
          </div>
        ))}
      </StyledClassesContainer>
    </SyllabusContainer>
  );
};

export default EditorClasses;

import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getPlanClasses } from 'api/classes';
import { ClassInterface } from 'types';
import { PrimaryButton } from 'components';
import {
  Classes,
  Line,
  SyllabusContainer,
  SyllabusHeadline,
  SyllabusHeadlineWrapper,
} from './PlanClassesComponent.styled';
import ClassComponent from './ClassComponent';

const PlanClassesComponent = () => {
  const [classes, setClasses] = useState<ClassInterface[]>([]);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { planId } = useParams();

  const fetchClasses = useCallback(async () => {
    try {
      const { data } = await getPlanClasses(planId);
      console.log('responseTEST', data);
      setClasses(data.classes.classes);
      const hasProgress = data.classes[0]?.classworks[0]?.progress >= 0;
      setIsEnrolled(hasProgress);
    } catch (error) {
      console.error(error);
    }
  }, [planId]);

  useEffect(() => {
    fetchClasses();
  }, [fetchClasses]);

  return (
    <SyllabusContainer>
      <SyllabusHeadlineWrapper>
        <SyllabusHeadline>Syllabus</SyllabusHeadline>
        {!isEnrolled && <PrimaryButton>Enroll</PrimaryButton>}
      </SyllabusHeadlineWrapper>
      <Line />
      <Classes>
        <ClassComponent classes={classes} isEnrolled={isEnrolled} />
      </Classes>
    </SyllabusContainer>
  );
};

export default PlanClassesComponent;

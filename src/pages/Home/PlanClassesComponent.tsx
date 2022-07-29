import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getPlanClasses } from 'api/classes';
import { ClassInterface, PlanInterface } from 'types';
import { PrimaryButton } from 'components';
import PLAN_BANNER_IMG from 'assets/img/plan-banner.jpg';
import {
  PageContainer,
  ImageBanner,
  StyledClassesContainer,
  PlanInfoContainer,
  PlanInfoHeadlineWrapper,
  PlanClassesContainer,
  ProgressBarContainer,
} from './PlanClassesComponent.styled';
import ClassComponent from './ClassComponent';

const PlanClassesComponent = () => {
  const [classes, setClasses] = useState<ClassInterface[]>([]);
  const [planInfo, setPlanInfo] = useState<PlanInterface>();
  const { planId } = useParams();

  const fetchClasses = useCallback(async () => {
    try {
      const { data } = await getPlanClasses(planId);
      console.log('responseTEST', data);
      setPlanInfo(data.plan);
      setClasses(data.plan.classes);
    } catch (error) {
      console.error(error);
    }
  }, [planId]);

  useEffect(() => {
    fetchClasses();
  }, [fetchClasses]);

  return (
    <PageContainer>
      <ImageBanner src={PLAN_BANNER_IMG} alt={`${planInfo?.name}`} />
      <PlanClassesContainer>
        <PlanInfoContainer>
          <PlanInfoHeadlineWrapper>
            <h1>{planInfo?.name}</h1>
            <p>
              {planInfo?.description} Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&lsquo;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <p>
              Created by{' '}
              <strong>
                <i>{planInfo?.createdBy}</i>
              </strong>
            </p>
            {!planInfo?.progress && <PrimaryButton>Enroll</PrimaryButton>}
          </PlanInfoHeadlineWrapper>
          <ProgressBarContainer>Progress bar</ProgressBarContainer>
        </PlanInfoContainer>
        <StyledClassesContainer>
          {classes?.map(({ _id: classId, ...classData }) => (
            <div key={classId}>
              <ClassComponent isEnrolled={!planInfo?.progress} {...classData} />
            </div>
          ))}
        </StyledClassesContainer>
      </PlanClassesContainer>
    </PageContainer>
  );
};

export default PlanClassesComponent;

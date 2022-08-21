import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getPlanClasses } from 'api/classes';
import { enrollToPlan } from 'api/enrollments';
import { ClassInterface, PlanInterface } from 'types';
import { PrimaryButton, CircularProgress } from 'components';
import PLAN_BANNER_IMG from 'assets/img/plan-banner.jpeg';
import {
  ImageBanner,
  StyledClassesContainer,
  PlanInfoContainer,
  PlanInfoHeadlineWrapper,
  PlanClassesContainer,
  ProgressBarContainer,
  PlanClassesPageContainer,
} from './PlanClasses.styled';
import ClassComponent from './ClassComponent';

const PlanClasses = () => {
  const [classes, setClasses] = useState<ClassInterface[]>([]);
  const [planInfo, setPlanInfo] = useState<PlanInterface>();
  const { planId } = useParams();

  const fetchClasses = useCallback(async () => {
    try {
      const { data } = await getPlanClasses(planId);
      setPlanInfo(data.plan);
      setClasses(data.plan.classes);
    } catch (error) {
      console.error(error);
    }
  }, [planId]);

  const onEnrollToPlan = async () => {
    try {
      await enrollToPlan({ planId: planInfo?._id || '' });
      fetchClasses();
      toast.success('Successfully enrolled to plan', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      // setErrorMessages(error as ErrorMessageInterface[]);
      toast.error('Failed to enroll to plan', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  useEffect(() => {
    fetchClasses();
  }, [fetchClasses]);

  const hasProgress =
    planInfo?.progress !== undefined && planInfo.progress >= 0;

  return (
    <div>
      <ImageBanner src={planInfo?.thumbnail || PLAN_BANNER_IMG} />
      <PlanClassesPageContainer>
        <PlanClassesContainer>
          <PlanInfoContainer>
            <PlanInfoHeadlineWrapper>
              <h1>{planInfo?.name}</h1>
              <p>
                {planInfo?.description} Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                Created by{' '}
                <strong>
                  <i>{planInfo?.createdBy}</i>
                </strong>
              </p>

              {!hasProgress && (
                <PrimaryButton onClick={onEnrollToPlan}>Enroll</PrimaryButton>
              )}
            </PlanInfoHeadlineWrapper>
            <ProgressBarContainer>
              <CircularProgress value={(planInfo?.progress ?? 0) * 100} />
            </ProgressBarContainer>
          </PlanInfoContainer>
          <StyledClassesContainer>
            {classes?.map(({ _id: classId, ...classData }) => (
              <div key={classId}>
                <ClassComponent
                  isEnrolled={!planInfo?.progress}
                  {...classData}
                />
              </div>
            ))}
          </StyledClassesContainer>
        </PlanClassesContainer>
      </PlanClassesPageContainer>
    </div>
  );
};

export default PlanClasses;

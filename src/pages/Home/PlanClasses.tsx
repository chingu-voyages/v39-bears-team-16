import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  getPlanClasses,
  markClassworkAsComplete,
  markClassworkAsIncomplete,
} from 'api/classes';
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
    const { data } = await getPlanClasses(planId);
    setPlanInfo(data.plan);
    setClasses(data.plan.classes);
  }, [planId]);

  const onEnrollToPlan = async () => {
    try {
      await enrollToPlan({ planId: planInfo?._id || '' });
      fetchClasses();
      toast.success('Successfully enrolled to plan', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      toast.error('Failed to enroll to plan', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const onMarkAsComplete = async (payload) => {
    try {
      await markClassworkAsComplete({
        ...payload,
        planId: planInfo?._id,
      });
      fetchClasses();
    } catch (error) {
      console.error(error);
    }
  };

  const onMarkAsIncomplete = async (payload) => {
    try {
      await markClassworkAsIncomplete({
        ...payload,
        planId: planInfo?._id,
      });
      fetchClasses();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, [fetchClasses]);

  const hasProgress =
    planInfo?.planProgress !== undefined && planInfo.planProgress >= 0;

  return (
    <div>
      <ImageBanner src={planInfo?.thumbnail || PLAN_BANNER_IMG} />
      <PlanClassesPageContainer>
        <PlanClassesContainer>
          <PlanInfoContainer>
            <PlanInfoHeadlineWrapper>
              <h1>{planInfo?.name}</h1>
              <p>{planInfo?.description}</p>
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
              <CircularProgress value={(planInfo?.planProgress ?? 0) * 100} />
            </ProgressBarContainer>
          </PlanInfoContainer>
          <StyledClassesContainer>
            {classes?.map(({ _id: classId, ...classData }) => (
              <div key={classId}>
                <ClassComponent
                  isEnrolled={hasProgress}
                  onMarkAsComplete={onMarkAsComplete}
                  onMarkAsIncomplete={onMarkAsIncomplete}
                  classId={classId}
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

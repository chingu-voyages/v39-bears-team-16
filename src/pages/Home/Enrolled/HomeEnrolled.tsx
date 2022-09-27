import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PlanCard, StyledDropdownItem } from 'components';
import { PlanInterface } from 'types';
import { unenrollPlan, getEnrolledPlans } from 'api/enrollments';
import {
  PlansPageContainer,
  StyledPlanCardsContainer,
} from 'pages/Member/MemberLayout';

const HomeEnrolled = () => {
  const [plans, setPlans] = useState<PlanInterface[]>();
  const navigate = useNavigate();

  const fetchPlans = async () => {
    const { data } = await getEnrolledPlans();
    const visiblePlans = data.plans.filter(({ visible }) => visible);
    setPlans(visiblePlans);
  };

  const onUnenrollPlan = async (planId) => {
    try {
      await unenrollPlan({ planId: planId || '' });
      fetchPlans();
      toast.success('Successfully unenrolled from plan', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      toast.error('Failed to unenroll from plan', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <PlansPageContainer>
      <StyledPlanCardsContainer>
        {plans?.map(({ _id, ...planData }: PlanInterface) => (
          <PlanCard
            _id={_id}
            key={_id}
            handleClick={() => navigate(`/member/plans/${_id}`)}
            dropdownOptions={
              <StyledDropdownItem onClick={() => onUnenrollPlan(_id)}>
                Unenroll
              </StyledDropdownItem>
            }
            {...planData}
          />
        ))}
      </StyledPlanCardsContainer>
    </PlansPageContainer>
  );
};

export default HomeEnrolled;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlanCard, StyledDropdownItem } from 'components';
import { PlanInterface } from 'types';
import { getPlans } from 'api/plans';
import {
  PlansPageContainer,
  StyledPlanCardsContainer,
} from 'pages/Member/MemberLayout';

const HomeEnrolled = () => {
  const [plans, setPlans] = useState<PlanInterface[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlans = async () => {
      const { data } = await getPlans();
      const visiblePlans = data.plans.filter(({ visible }) => visible);
      setPlans(visiblePlans);
    };

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
            dropdownOptions={<StyledDropdownItem>Enroll</StyledDropdownItem>}
            {...planData}
          />
        ))}
      </StyledPlanCardsContainer>
    </PlansPageContainer>
  );
};

export default HomeEnrolled;

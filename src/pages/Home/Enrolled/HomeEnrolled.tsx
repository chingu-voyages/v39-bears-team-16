import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlanCard from '../../../components/PlanCard/PlanCard';
import {
  CohortsPageContainer,
  StyledCohortCardsContainer,
} from './AdminCohortsPage.styled';
import { PlanInterface } from '../../../types';
import { getPlans } from '../../../api/getPlans';

const HomeEnrolled = () => {
  const [plans, setPlans] = useState<PlanInterface[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlans = async () => {
      const { data } = await getPlans();
      setPlans(data);
    };

    fetchPlans();
  }, []);

  return (
    <CohortsPageContainer>
      <StyledCohortCardsContainer>
        {plans?.map(({ _id, ...planData }: PlanInterface) => (
          <PlanCard
            _id={_id}
            key={_id}
            handleClick={() => navigate(`/member/plans/${_id}`)}
            isAdmin
            {...planData}
          />
        ))}
      </StyledCohortCardsContainer>
    </CohortsPageContainer>
  );
};

export default HomeEnrolled;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlanCard from '../../../components/PlanCard/PlanCard';
import { PlanInterface } from '../../../types';
import { getPlans } from '../../../api/plans';
import {
  HomePlansPageContainer,
  StyledPlanCardsContainer,
} from '../Home.styled';

const HomeEnrolled = () => {
  const [plans, setPlans] = useState<PlanInterface[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlans = async () => {
      const { data } = await getPlans();
      const visiblePlans = data.filter(({ visibility }) => visibility === true);
      setPlans(visiblePlans);
    };

    fetchPlans();
  }, []);

  return (
<<<<<<< HEAD
    <CohortsPageContainer>
      <StyledCohortCardsContainer>
        {plans?.map(({ _id, ...planData }: PlanInterface) => (
          <PlanCard
=======
    <HomePlansPageContainer>
      <StyledPlanCardsContainer>
        {plans?.map(({ _id, ...cohortData }: PlanInterface) => (
          <CohortCard
>>>>>>> 8ecd61a (add plan, modal, home page styling fixes)
            _id={_id}
            key={_id}
            handleClick={() => navigate(`/member/plans/${_id}`)}
            isAdmin
            {...planData}
          />
        ))}
      </StyledPlanCardsContainer>
    </HomePlansPageContainer>
  );
};

export default HomeEnrolled;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CohortCard from '../../../components/CohortCard/CohortCard';
import {
  CohortsPageContainer,
  StyledCohortCardsContainer,
} from './AdminCohortsPage.styled';
import { CohortInterface } from '../../../types';
import { getPlans } from '../../../api/getPlans';

const HomeEnrolled = () => {
  const [plans, setPlans] = useState<CohortInterface[]>();
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
        {plans?.map(({ _id, ...cohortData }: CohortInterface) => (
          <CohortCard
            _id={_id}
            key={_id}
            handleClick={() => navigate(`/member/plans/${_id}`)}
            isAdmin
            {...cohortData}
          />
        ))}
      </StyledCohortCardsContainer>
    </CohortsPageContainer>
  );
};

export default HomeEnrolled;

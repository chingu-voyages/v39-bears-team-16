import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPlusCircle } from 'react-icons/bs';
import { useAdminContext } from '../AdminMainLayout';
import CohortCard from '../../../components/CohortCard/CohortCard';
import {
  CohortsPageContainer,
  StyledAddCohortCard,
  StyledCohortCardsContainer,
} from './AdminCohortsPage.styled';

const AdminCohortsPage = () => {
  const { cohorts } = useAdminContext();
  const navigate = useNavigate();

  return (
    <CohortsPageContainer>
      <StyledCohortCardsContainer>
        {cohorts?.map(({ _id, ...cohortData }) => (
          <CohortCard
            _id={_id}
            key={_id}
            handleClick={() => navigate(`/admin/cohorts/${_id}`)}
            isAdmin
            {...cohortData}
          />
        ))}
        <StyledAddCohortCard>
          <BsPlusCircle color="white" fontSize="5em" />
        </StyledAddCohortCard>
      </StyledCohortCardsContainer>
    </CohortsPageContainer>
  );
};

export default AdminCohortsPage;

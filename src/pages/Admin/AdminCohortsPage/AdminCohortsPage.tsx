import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPlusCircle } from 'react-icons/bs';
import { useAdminContext } from '../AdminMainLayout';
import CohortCard from '../../../components/CohortCard/CohortCard';
import {
  CohortsPageContainer,
  StyledAddCohortCard,
  StyledCohortCardsContainer,
} from './AdminCohortsPage.styled';
import { Cohort } from '../../../types';
import { AddNewCohortModal } from './AddNewCohortModal';
import { useModal } from '../../../components/Modal/useModal';

const AdminCohortsPage = () => {
  const { cohorts } = useAdminContext();
  const [cohortsList, setCohortsList] = useState<Cohort[] | null>(cohorts);
  const navigate = useNavigate();

  const { isOpen: isModalOpen, toggle } = useModal();

  useEffect(() => {
    setCohortsList(cohorts);
  }, [cohorts]);

  return (
    <CohortsPageContainer>
      <StyledCohortCardsContainer>
        {cohortsList?.map(({ _id, ...cohortData }: Cohort) => (
          <CohortCard
            _id={_id}
            key={_id}
            handleClick={() => navigate(`/admin/cohorts/${_id}`)}
            isAdmin
            {...cohortData}
          />
        ))}
        <StyledAddCohortCard onClick={toggle}>
          <BsPlusCircle color="white" fontSize="5em" />
        </StyledAddCohortCard>
      </StyledCohortCardsContainer>
      <AddNewCohortModal
        isOpen={isModalOpen}
        toggle={toggle}
        setCohortsList={setCohortsList}
      />
    </CohortsPageContainer>
  );
};

export default AdminCohortsPage;

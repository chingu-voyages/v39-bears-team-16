import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPlusCircle } from 'react-icons/bs';
import CohortCard from '../../../components/CohortCard/CohortCard';
import {
  CohortsPageContainer,
  StyledAddCohortCard,
  StyledCohortCardsContainer,
} from './AdminCohortsPage.styled';
import { CohortInterface } from '../../../types';
import { AddNewCohortModal } from './AddNewCohortModal';
import { useModal } from '../../../components/Modal/useModal';
import { getPlans } from '../../../api/getPlans';

const AdminCohortsPage = () => {
  const [cohortsList, setCohortsList] = useState<CohortInterface[]>();
  const navigate = useNavigate();

  const { isOpen: isModalOpen, toggle } = useModal();

  useEffect(() => {
    const fetchPlans = async () => {
      const { data } = await getPlans();
      setCohortsList(data);
    };

    fetchPlans();
  }, []);

  return (
    <CohortsPageContainer>
      <StyledCohortCardsContainer>
        {cohortsList?.map(({ _id, ...cohortData }: CohortInterface) => (
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

import React, { useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import CohortCard from '../../components/CohortCard/CohortCard';
import { Cohort } from '../../types';
import { AddNewCohortModal } from '../Admin/AdminCohortsPage/AddNewCohortModal';
import {
  EditorPlansPageContainer,
  StyledPlanCardsContainer,
  StyledAddPlanCard,
} from './EditorPlans.styled';

const plans = [
  {
    _id: 'test1',
    name: 'test1',
    startDate: '10-10-2021',
    endDate: '10-12-2021',
  },
];

const EditorPlans = () => {
  // const [plans, setPlans] = useState([]);

  const navigate = useNavigate();

  return (
    <EditorPlansPageContainer>
      <StyledPlanCardsContainer>
        {plans?.map(({ _id, ...cohortData }: Cohort) => (
          <CohortCard
            _id={_id}
            key={_id}
            handleClick={() => navigate(`/admin/cohorts/${_id}`)}
            isAdmin
            {...cohortData}
          />
        ))}
        <StyledAddPlanCard>
          <BsPlusCircle color="white" fontSize="5em" />
        </StyledAddPlanCard>
      </StyledPlanCardsContainer>
      {/* <AddNewCohortModal
        isOpen={isModalOpen}
        toggle={toggle}
        setCohortsList={setCohortsList}
      /> */}
    </EditorPlansPageContainer>
  );
};

export default EditorPlans;

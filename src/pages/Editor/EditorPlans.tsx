import React, { useCallback, useEffect, useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { getPlans } from '../../api/getPlans';
import CohortCard from '../../components/CohortCard/CohortCard';
import { CohortInterface, ErrorMessageInterface } from '../../types';
import { ERROR_MESSAGES } from '../../utilities/constants';
// import { AddNewCohortModal } from '../Member/AdminCohortsPage/AddNewCohortModal';
import {
  EditorPlansPageContainer,
  StyledPlanCardsContainer,
  StyledAddPlanCard,
} from './EditorPlans.styled';

const EditorPlans = () => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  const fetchPlans = useCallback(async () => {
    try {
      const res = await getPlans();
      setPlans(res.data);
    } catch (error) {
      const errors = error as ErrorMessageInterface[];
      if (errors?.[0]?.msg === ERROR_MESSAGES.unauthorized) {
        // navigate('/sign-in', { replace: true });
      }
    }
  }, []);

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  return (
    <EditorPlansPageContainer>
      <StyledPlanCardsContainer>
        {plans?.map(({ _id, ...cohortData }: CohortInterface) => (
          <CohortCard
            _id={_id}
            key={_id}
            handleClick={() =>
              navigate(`/member/editor/plans/${_id}`, { replace: true })
            }
            isAdmin
            {...cohortData}
          />
        ))}
        <StyledAddPlanCard>
          <BsPlusCircle color="#212D40" fontSize="5em" />
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

import React, { useCallback, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { addNewPlan, getPlans } from '../../api/plans';
import { PrimaryButton } from '../../components/Button';
import PlanCard from '../../components/PlanCard/PlanCard';
import { useModal } from '../../components/Modal/useModal';
import { PlanInterface, ErrorMessageInterface } from '../../types';
import { ERROR_MESSAGES } from '../../utilities/constants';
import { EditorPlanModal } from './EditorPlanModal';
import {
  EditorPlansPageContainer,
  StyledPlanCardsContainer,
} from './EditorPlans.styled';

const EditorPlans = () => {
  const [plans, setPlans] = useState<PlanInterface[]>([]);
  const { isOpen, toggle } = useModal();
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
      <PrimaryButton onClick={toggle}>
        <FaPlus />
        Add New Plan
      </PrimaryButton>
      <StyledPlanCardsContainer>
<<<<<<< HEAD
        {plans?.map(({ _id, ...cohortData }: PlanInterface) => (
          <PlanCard
=======
        {plans?.map(({ _id, ...planData }: PlanInterface) => (
          <CohortCard
>>>>>>> 8ecd61a (add plan, modal, home page styling fixes)
            _id={_id}
            key={_id}
            handleClick={() =>
              navigate(`/member/editor/plans/${_id}`, { replace: true })
            }
            isAdmin
            {...planData}
          />
        ))}
      </StyledPlanCardsContainer>
      <EditorPlanModal
        submitCallback={addNewPlan}
        type="add"
        isOpen={isOpen}
        toggle={toggle}
        setPlans={setPlans}
      />
    </EditorPlansPageContainer>
  );
};

export default EditorPlans;

import React, { useCallback, useContext, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { addNewPlan, getOwnedPlans } from '../../api/plans';
// import { UserContext } from '../../App';
import { PrimaryButton } from '../../components/Button';
import PlanCard from '../../components/PlanCard/PlanCard';
import { useModal } from '../../components/Modal/useModal';
import { PlanInterface, ErrorMessageInterface } from '../../types';
import { ERROR_MESSAGES } from '../../utilities/constants';
import { EditorModalTypes, EditorPlanModal } from './EditorPlanModal';
import {
  EditorPlansPageContainer,
  StyledPlanCardsContainer,
} from './EditorPlans.styled';
import { StyledDropdownItem } from '../../components/DropDownMenuItem/DropDownMenuItem.styled';

const EditorPlans = () => {
  // const user = useContext(UserContext);
  const navigate = useNavigate();
  const [plans, setPlans] = useState<PlanInterface[]>([]);
  const [modalData, setModalData] = useState({
    type: EditorModalTypes.Add,
    submitCallback: (payload) => addNewPlan(payload),
  });
  const { isOpen, toggle } = useModal();

  const fetchEditorPlans = useCallback(async () => {
    try {
      const { data } = await getOwnedPlans();

      setPlans(data.plans);
    } catch (error) {
      const errors = error as ErrorMessageInterface[];
      if (errors?.[0]?.msg === ERROR_MESSAGES.unauthorized) {
        // navigate('/sign-in', { replace: true });
      }
    }
  }, []);

  useEffect(() => {
    fetchEditorPlans();
  }, [fetchEditorPlans]);

  return (
    <EditorPlansPageContainer>
      <PrimaryButton
        onClick={() => {
          toggle();
          setModalData({
            type: EditorModalTypes.Add,
            submitCallback: (payload) => addNewPlan(payload),
          });
        }}
      >
        <FaPlus />
        Add New Plan
      </PrimaryButton>
      <StyledPlanCardsContainer>
        {plans?.map(({ _id: planId, ...planData }: PlanInterface) => (
          <PlanCard
            _id={planId}
            key={planId}
            handleClick={() => {
              navigate(`/member/editor/plans/${planId}`, { replace: true });
            }}
            dropdownOptions={
              <div>
                <StyledDropdownItem
                  onClick={() => {
                    toggle();
                    setModalData({
                      type: EditorModalTypes.Update,
                      submitCallback: (payload) =>
                        updatePlan({ ...payload, planId }),
                      ...planData,
                    });
                  }}
                >
                  Edit
                </StyledDropdownItem>
                <StyledDropdownItem
                  onClick={() => {
                    toggle();
                    setModalData({
                      type: EditorModalTypes.Delete,
                      submitCallback: () => deletePlan({ planId }),
                      ...planData,
                    });
                  }}
                >
                  Delete
                </StyledDropdownItem>
              </div>
            }
            {...planData}
          />
        ))}
      </StyledPlanCardsContainer>
      {isOpen ? (
        <EditorPlanModal
          isOpen={isOpen}
          toggle={toggle}
          fetchEditorPlans={fetchEditorPlans}
          {...modalData}
        />
      ) : null}
    </EditorPlansPageContainer>
  );
};

export default EditorPlans;

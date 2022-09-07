import React, { useCallback, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addNewPlan, getOwnedPlans, updatePlan, deletePlan } from 'api/plans';
import {
  PlanCard,
  StyledDropdownItem,
  PrimaryButton,
  useModal,
} from 'components';
import { PlanInterface, ErrorMessageInterface } from 'types';
import { ERROR_MESSAGES } from 'utilities/constants';
import {
  PlansPageContainer,
  StyledPlanCardsContainer,
} from 'pages/Member/MemberLayout';
import { EditorModalTypes, EditorPlanModal } from './EditorPlanModal';
import { EditorPlansPageContentWrapper } from './EditorPlans.styled';

const EditorPlans = () => {
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

  const toggleVisibility = useCallback(
    async (plan) => {
      const planStatusChange = plan.visible ? 'private' : 'public';
      try {
        await updatePlan({
          ...plan,
          visible: !plan.visible,
        });

        toast.success(`Plan updated to be ${planStatusChange}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });

        fetchEditorPlans();
      } catch (error) {
        toast.error(`Failed to make plan ${planStatusChange}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    },
    [fetchEditorPlans]
  );

  useEffect(() => {
    fetchEditorPlans();
  }, [fetchEditorPlans]);

  return (
    <PlansPageContainer>
      <EditorPlansPageContentWrapper>
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
              canEdit
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
                  <StyledDropdownItem
                    onClick={() => toggleVisibility({ planId, ...planData })}
                  >
                    {planData.visible ? 'Make private' : 'Make public'}
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
      </EditorPlansPageContentWrapper>
    </PlansPageContainer>
  );
};

export default EditorPlans;

import React from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import CohortCard from '../../components/CohortCard/CohortCard';
import { CohortInterface } from '../../types';
// import { AddNewCohortModal } from '../Member/AdminCohortsPage/AddNewCohortModal';
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

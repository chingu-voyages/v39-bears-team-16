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
import { Cohort } from '../../../types';
// import { AddNewCohortForm } from './AddNewCohortForm';
// import { Modal } from '../../../components/Modal/Modal';
// import { Button, PrimaryButton } from '../../../components/Button';

const AdminCohortsPage = () => {
  const { cohorts } = useAdminContext();
  const navigate = useNavigate();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleCloseModal = () => {
  //   // call add cohort api here
  //   setIsModalOpen(false);
  // };

  return (
    <CohortsPageContainer>
      <StyledCohortCardsContainer>
        {cohorts?.map(({ _id, ...cohortData }: Cohort) => (
          <CohortCard
            _id={_id}
            key={_id}
            handleClick={() => navigate(`/admin/cohorts/${_id}`)}
            isAdmin
            {...cohortData}
          />
        ))}

        {/* <StyledAddCohortCard onClick={() => setIsModalOpen(true)}> */}
        <StyledAddCohortCard>
          <BsPlusCircle color="white" fontSize="5em" />
        </StyledAddCohortCard>
      </StyledCohortCardsContainer>
      {/* <Modal
        modalTitle="Add New Cohort"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        contentLabel="Add new cohort"
        primaryAction={<PrimaryButton>Submit</PrimaryButton>}
        secondaryAction={<Button>Cancel</Button>}
      >
        <AddNewCohortForm />
      </Modal> */}
    </CohortsPageContainer>
  );
};

export default AdminCohortsPage;

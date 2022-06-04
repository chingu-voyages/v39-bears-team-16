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
import { Cohort, ErrorMessageType } from '../../../types';
import {
  adminCreateCohort,
  AdminCreateCohortProps,
} from '../../../api/adminCreateCohort';
import { getAdminCohorts } from '../../../api/getAdminCohorts';
import { getCsrfToken } from '../../../api/getCsrfToken';
// import { AddNewCohortForm } from './AddNewCohortForm';
// import { Modal } from '../../../components/Modal/Modal';
// import { Button, PrimaryButton } from '../../../components/Button';

const AdminCohortsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { cohorts } = useAdminContext();
  const [cohortsList, setCohortsList] = useState<Cohort[] | null>(cohorts);
  const navigate = useNavigate();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleCloseModal = () => {
  //   // call add cohort api here
  //   setIsModalOpen(false);
  // };

  const addNewCohort = async (payload: AdminCreateCohortProps) => {
    try {
      await adminCreateCohort(payload);
      const { data } = await getAdminCohorts();
      setIsModalOpen(false);
      setCohortsList(data);
    } catch (error) {
      const { msg } = error as ErrorMessageType;
      setErrorMessage(msg);
    }
  };

  useEffect(() => {
    getCsrfToken();
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
        <StyledAddCohortCard
          onClick={() =>
            addNewCohort({
              name: 'cohort testing',
              startDate: '2022-01-03',
              endDate: '2022-04-30',
            })
          }
        >
          <BsPlusCircle color="white" fontSize="5em" />
        </StyledAddCohortCard>
        {isModalOpen && <div>Modal</div>}
        {errorMessage && <div>{errorMessage}</div>}
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

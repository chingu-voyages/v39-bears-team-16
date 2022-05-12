import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdOutlineSpaceDashboard, MdOutlineAnalytics } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { SiGoogleclassroom } from 'react-icons/si';
import { BsThreeDotsVertical } from 'react-icons/bs';
import cohortCard1 from '../../assets/img/cohort-card-1.png';

const CardContainer = styled.section`
  width: 270px;
  height: 170px;
  background: ${({ theme }) => theme.background.violet};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CohortInfoWrapper = styled.section`
  position: relative;
  border-radius: 10px;
  width: 100%;
  height: 75%;
  background: ${({ theme }) => theme.background.violet};
`;
const CohortInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;
const CohortId = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: 1.1rem;
  font-weight: 700;
`;
const CohortDate = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.7rem;
  font-weight: 100;
  font-style: italic;
`;
const CohortImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
`;
const CohortNav = styled.section`
  width: 100%;
  height: 25%;
  border-radius: 0 0 10px 10px;
  background: ${({ theme }) => theme.background.white};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const OptionIcon = styled(BsThreeDotsVertical)`
  outline: 1px white solid;
  color: white;
  border-radius: 50%;
  padding: 2px;
  font-size: 1.5rem;
`;

const AdminCohortPage = () => {
  const id = '1';
  return (
    <div>
      <div>Admin Cohort Page</div>
      <Link to={`/admin/cohorts/${id}`}>Cohort id {id}</Link>

      <CardContainer>
        {/* Cohort Info */}
        <CohortInfoWrapper>
          <CohortInfo>
            <div>
              <CohortId>COHORT 1</CohortId>
              <CohortDate>(3/10/2022 - 12/10/2022)</CohortDate>
            </div>
            <OptionIcon />
          </CohortInfo>
          <CohortImg src={cohortCard1} alt="" />
        </CohortInfoWrapper>
        {/* Cohort Nav */}
        <CohortNav>
          <MdOutlineSpaceDashboard />
          <FiEdit />
          <MdOutlineAnalytics />
          <SiGoogleclassroom />
        </CohortNav>
      </CardContainer>
    </div>
  );
};

export default AdminCohortPage;

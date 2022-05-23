import React from 'react';
import { MdOutlineSpaceDashboard, MdOutlineAnalytics } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { SiGoogleclassroom } from 'react-icons/si';
import cohortCard1 from '../../assets/img/cohort-card-1.png';
import {
  CardContainer,
  CohortInfoWrapper,
  CohortInfo,
  CohortId,
  CohortDate,
  CohortNav,
  OptionIcon,
  CohortImg,
} from './CohortCard.styled';
import { Cohort } from '../../types';

interface CohortCardProps extends Cohort {
  handleClick(): void;
  isAdmin?: boolean;
}

const lang = 'en-us';
const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const CohortCard = ({
  name,
  startDate,
  endDate,
  handleClick,
  isAdmin = false,
}: CohortCardProps) => {
  const formattedStartDate = new Date(startDate).toLocaleDateString(
    lang,
    options
  );
  const formattedEndDate = new Date(endDate).toLocaleDateString(lang, options);
  const cohortDate = `(${formattedStartDate} - ${formattedEndDate})`;
  return (
    <CardContainer onClick={handleClick}>
      {/* Cohort Info */}
      <CohortInfoWrapper>
        <CohortInfo>
          <div>
            <CohortId>{name}</CohortId>
            <CohortDate>{cohortDate}</CohortDate>
          </div>
          {isAdmin ? <OptionIcon /> : null}
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
  );
};

export default CohortCard;

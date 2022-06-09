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

const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();

  return new Intl.DateTimeFormat(lang, options).format(
    new Date(year, month, day)
  );
};

const CohortCard = ({
  name,
  startDate,
  endDate,
  handleClick,
  isAdmin = false,
}: CohortCardProps) => {
  const formattedStartDate = getFormattedDate(startDate);
  const formattedEndDate = getFormattedDate(endDate);
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

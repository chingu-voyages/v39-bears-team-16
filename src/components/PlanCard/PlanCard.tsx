import React from 'react';
import planCard1 from '../../assets/img/plan-card-1.png';
import {
  CardContainer,
  PlanInfoWrapper,
  PlanInfo,
  PlanId,
  PlanDate,
  PlanNav,
  OptionIcon,
  PlanImg,
} from './PlanCard.styled';
import { PlanInterface } from '../../types';
import { getFormattedDate } from '../../utilities/dateFormat';

interface PlanCardProps extends PlanInterface {
  handleClick(): void;
  isAdmin?: boolean;
}

const PlanCard = ({
  name,
  startDate,
  endDate,
  handleClick,
  isAdmin = false,
}: PlanCardProps) => {
  const formattedStartDate = getFormattedDate(startDate);
  const formattedEndDate = getFormattedDate(endDate);
  const planDate = `(${formattedStartDate} - ${formattedEndDate})`;
  return (
    <CardContainer onClick={handleClick}>
      {/* Plan Info */}
      <PlanInfoWrapper>
        <PlanInfo>
          <div>
            <PlanId>{name}</PlanId>
            <PlanDate>{planDate}</PlanDate>
          </div>
          {isAdmin ? <OptionIcon /> : null}
        </PlanInfo>
        <PlanImg src={planCard1} alt="" />
      </PlanInfoWrapper>
      <PlanNav>{/* Placeholder for icons */}</PlanNav>
    </CardContainer>
  );
};

export default PlanCard;

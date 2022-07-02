import React from 'react';
import planCard1 from '../../assets/img/plan-card-1.png';
import {
  CardContainer,
  PlanInfoWrapper,
  PlanInfo,
  PlanId,
  PlanNav,
  OptionIcon,
  PlanImg,
} from './PlanCard.styled';
import { PlanInterface } from '../../types';

interface PlanCardProps extends PlanInterface {
  handleClick(): void;
  isAdmin?: boolean;
}

const PlanCard = ({ name, handleClick, isAdmin = false }: PlanCardProps) => {
  return (
    <CardContainer onClick={handleClick}>
      {/* Plan Info */}
      <PlanInfoWrapper>
        <PlanInfo>
          <div>
            <PlanId>{name}</PlanId>
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

import React from 'react';
import planCard1 from '../../assets/img/plan-card-1.png';
import {
  CardContainer,
  CardTopNav,
  PlanInfoWrapper,
  PlanInfo,
  PlanId,
  PlanNav,
  OptionIcon,
  HeartIcon,
  HeartDisplay,
  PlanDescription,
  PlanImg,
} from './PlanCard.styled';
import { PlanInterface } from '../../types';

interface PlanCardProps extends PlanInterface {
  handleClick(): void;
}

const PlanCard = ({ name, handleClick, description }: PlanCardProps) => {
  return (
    <CardContainer onClick={handleClick}>
      <CardTopNav>
        <div>
          <PlanId>{name}</PlanId>
        </div>
        <PlanInfo>
          <OptionIcon />
        </PlanInfo>
      </CardTopNav>
      <PlanInfoWrapper>
        <PlanImg src={planCard1} alt="" />
      </PlanInfoWrapper>
      <PlanDescription>{description}</PlanDescription>
      <PlanNav>
        <HeartIcon />
        <HeartDisplay>182</HeartDisplay>
      </PlanNav>
    </CardContainer>
  );
};

export default PlanCard;

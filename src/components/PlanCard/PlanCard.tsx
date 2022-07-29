import React from 'react';
import planCard1 from '../../assets/img/plan-card-1.png';
import { PlanInterface } from '../../types';
import DropDownMenuItem from '../DropDownMenuItem/DropDownMenuItem';
import {
  CardContainer,
  CardTopNav,
  PlanInfoWrapper,
  PlanNav,
  OptionIcon,
  HeartIcon,
  HeartDisplay,
  PlanDescription,
  PlanImg,
} from './PlanCard.styled';
import { StyledPillLabelContainer, PillLabel } from '../PillLabel';

interface PlanCardProps extends PlanInterface {
  handleClick(): void;
  dropdownOptions?: JSX.Element;
}

export const PlanCard = ({
  name,
  handleClick,
  description,
  dropdownOptions,
}: PlanCardProps) => {
  return (
    <CardContainer>
      {/* Plan Info */}
      <CardTopNav>
        <span>{name}</span>
        {dropdownOptions ? (
          <DropDownMenuItem header={<OptionIcon />}>
            {dropdownOptions}
          </DropDownMenuItem>
        ) : null}
      </CardTopNav>
      <PlanInfoWrapper onClick={handleClick}>
        <PlanImg src={planCard1} alt="" />
      </PlanInfoWrapper>
      <PlanDescription>{description}</PlanDescription>
      <PlanNav>
        <PillLabel text="coding" type="primary" />
        <HeartIcon />
        <HeartDisplay />
      </PlanNav>
    </CardContainer>
  );
};

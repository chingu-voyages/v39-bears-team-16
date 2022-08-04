import React from 'react';
import { PillLabel } from 'components/PillLabel';
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
        <PillLabel type={'primary'}> test label</PillLabel>
        <PillLabel type={'secondary'}> test label</PillLabel>
        <HeartIcon />
        <HeartDisplay />
      </PlanNav>
    </CardContainer>
  );
};

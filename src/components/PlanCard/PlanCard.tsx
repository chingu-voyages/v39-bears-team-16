import React from 'react';
import planCard1 from '../../assets/img/plan-card-1.png';
import { PlanInterface } from '../../types';
import DropDownMenuItem from '../DropDownMenuItem/DropDownMenuItem';
import {
  Card,
  PlanInfoWrapper,
  PlanNav,
  OptionIcon,
  HeartIcon,
  HeartDisplay,
  PlanDescription,
  PlanImg,
  PlanCardHeader,
} from './PlanCard.styled';

interface PlanCardProps extends PlanInterface {
  handleClick(): void;
  dropdownOptions?: JSX.Element;
}

const PlanCard = ({
  name,
  handleClick,
  description,
  dropdownOptions,
}: PlanCardProps) => {
  console.log('dropdownOptions', dropdownOptions);
  return (
    <Card>
      {/* Plan Info */}
      <PlanCardHeader>
        <span>{name}</span>
        {dropdownOptions ? (
          <DropDownMenuItem header={<OptionIcon />}>
            {dropdownOptions}
          </DropDownMenuItem>
        ) : null}
      </PlanCardHeader>
      <PlanInfoWrapper onClick={handleClick}>
        <PlanImg src={planCard1} alt="" />
      </PlanInfoWrapper>
      <PlanDescription>{description}</PlanDescription>
      <PlanNav>
        <HeartIcon />
        <HeartDisplay />
      </PlanNav>
    </Card>
  );
};

export default PlanCard;

import React from 'react';
import { PillLabel } from 'components/PillLabel.styled';
import { useModal } from 'components/Modal';
import planCard1 from '../../assets/img/plan-card-1.png';
import { PlanInterface } from '../../types';
import { PrimaryButton, ArrowIcon } from '../Button';
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
import { SharePlanModal } from './SharePlanModal';

interface PlanCardProps extends PlanInterface {
  handleClick(): void;
  dropdownOptions?: JSX.Element;
}

export const PlanCard = ({
  name,
  _id,
  handleClick,
  description,
  dropdownOptions,
}: PlanCardProps) => {
  const { isOpen, toggle } = useModal();

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
      <PrimaryButton>
        <ArrowIcon />
        Go to Syllabus
      </PrimaryButton>
      <PlanNav>
        <PillLabel type="primary"> test label</PillLabel>
        <PillLabel type="secondary"> test label</PillLabel>
        <HeartIcon />
        <HeartDisplay />
      </PlanNav>
      <SharePlanModal id={_id} toggle={toggle} isOpen={isOpen} />
    </CardContainer>
  );
};

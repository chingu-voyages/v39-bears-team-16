import React from 'react';
import { PillLabel, ProgressBar } from 'components';
import { useModal } from 'components/Modal';
import PLAN_PLACEHOLDER from 'assets/img/plan-banner.jpeg';
import { PlanInterface } from '../../types';
import DropDownMenuItem from '../DropDownMenuItem/DropDownMenuItem';
import {
  CardContainer,
  CardTopNav,
  PlanImageWrapper,
  PlanBottomNav,
  OptionIcon,
  HeartIcon,
  PlanImg,
  PlanCardContent,
  PlanCardButton,
  ArrowIcon,
  EditIcon,
  StyledLabelContainer,
  ShareIcon,
  StyledSlugContainer,
  StyledLikeContainer,
  StyledBottomContainer,
  StyledPlanDescription,
  PublicIcon,
  PrivateIcon,
  CardTitleWrapper,
} from './PlanCard.styled';
import { SharePlanModal } from './SharePlanModal';

interface PlanCardProps extends PlanInterface {
  handleClick(): void;
  canEdit?: boolean;
  dropdownOptions?: JSX.Element;
}

export const PlanCard = ({
  name,
  _id,
  thumbnail,
  createdBy,
  likes,
  tags,
  progress,
  visible,
  handleClick,
  description,
  dropdownOptions,
  canEdit = false,
}: PlanCardProps) => {
  const { isOpen, toggle } = useModal();
  const visibilityIcon = visible ? <PublicIcon /> : <PrivateIcon />;

  return (
    <CardContainer>
      {/* Plan Info */}
      <CardTopNav>
        <CardTitleWrapper>
          <span>{name}</span>
          {canEdit ? visibilityIcon : null}
        </CardTitleWrapper>

        {dropdownOptions ? (
          <DropDownMenuItem header={<OptionIcon />}>
            {dropdownOptions}
          </DropDownMenuItem>
        ) : null}
      </CardTopNav>
      <PlanImageWrapper>
        <PlanImg src={thumbnail || PLAN_PLACEHOLDER} alt="" />
      </PlanImageWrapper>

      {/* Plan card content  */}
      <PlanCardContent>
        <StyledLabelContainer>
          {tags.map((tag) => (
            <span key={tag}>
              <PillLabel type="secondary">{tag}</PillLabel>
            </span>
          ))}
        </StyledLabelContainer>
        <StyledSlugContainer>
          <StyledPlanDescription>{description}</StyledPlanDescription>
          {!canEdit && (
            <>
              <StyledLikeContainer>
                <HeartIcon />
                {likes > 0 ? (
                  <span>
                    Liked by {likes} {likes > 1 ? 'others' : 'other'}
                  </span>
                ) : (
                  <span>Be the first one to like this plan</span>
                )}
              </StyledLikeContainer>
              <p>Created by {createdBy}</p>
            </>
          )}
        </StyledSlugContainer>
      </PlanCardContent>

      <StyledBottomContainer>
        <PlanCardButton onClick={handleClick}>
          {canEdit ? (
            <>
              <EditIcon />
              Edit Syllabus
            </>
          ) : (
            <>
              <ArrowIcon />
              Go to Syllabus
            </>
          )}
        </PlanCardButton>

        {!canEdit && (
          <PlanBottomNav>
            <ProgressBar value={progress ? progress * 100 : 0} />
            <ShareIcon onClick={toggle} />
          </PlanBottomNav>
        )}
      </StyledBottomContainer>
      <SharePlanModal id={_id} toggle={toggle} isOpen={isOpen} />
    </CardContainer>
  );
};

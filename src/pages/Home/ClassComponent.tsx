import React from 'react';
import { BiCircle } from 'react-icons/bi';
import { ClassInterface, ClassworkInterface } from 'types';
import AccordionWrapper from 'components/Accordion/Accordion';
import {
  StyledClassHeaderWrapper,
  ClassTitle,
  StyledClassworkContainer,
  StyledClassworkTitle,
  StyledAccordionContentWrapper,
  StyledFilledCheckmark,
  StyledCheckmarkButton,
  StyledClassworkDetails,
  StyledClassworkLink,
  StyledMarkDoneButton,
} from './ClassComponent.styled';

interface ClassComponentProps {
  classworks: ClassworkInterface[];
  isEnrolled: boolean;
  name: string;
  description: string;
}

const ClassComponent = ({
  isEnrolled,
  classworks,
  name: className,
  description: classDescription,
}: ClassComponentProps) => {
  return (
    <AccordionWrapper
      header={
        <StyledClassHeaderWrapper>
          <ClassTitle>{className}</ClassTitle>
          <p>{classDescription}</p>
        </StyledClassHeaderWrapper>
      }
    >
      <StyledAccordionContentWrapper>
        {classworks?.map(
          ({ _id: classworkId, name, description, completed, link }) => (
            <StyledClassworkContainer key={classworkId}>
              <StyledCheckmarkButton>
                {completed ? <StyledFilledCheckmark /> : <BiCircle />}
              </StyledCheckmarkButton>
              <StyledClassworkDetails>
                <StyledClassworkTitle>{name}</StyledClassworkTitle>
                <p>{description}</p>
                <StyledClassworkLink
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {link}
                </StyledClassworkLink>
                {isEnrolled ? (
                  <StyledMarkDoneButton>Mark as Complete</StyledMarkDoneButton>
                ) : null}
              </StyledClassworkDetails>
            </StyledClassworkContainer>
          )
        )}
      </StyledAccordionContentWrapper>
    </AccordionWrapper>
  );
};

export default ClassComponent;

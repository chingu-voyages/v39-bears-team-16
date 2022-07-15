import React from 'react';
import { BiCircle } from 'react-icons/bi';
import { ClassInterface } from 'types';
import AccordionWrapper from 'components/Accordion/Accordion';
import {
  StyledClassContainer,
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
  classes: ClassInterface[];
  isEnrolled: boolean;
}

interface ClassDetailsProps {
  name: string;
  description: string;
}

const ClassDetails = ({ name, description }: ClassDetailsProps) => {
  return (
    <StyledClassHeaderWrapper>
      <ClassTitle>{name}</ClassTitle>
      <p>{description}</p>
    </StyledClassHeaderWrapper>
  );
};

const ClassComponent = ({ classes, isEnrolled }: ClassComponentProps) => {
  console.log('classes', classes);

  return (
    <StyledClassContainer>
      {classes?.map(({ _id: classId, classworks, ...classData }) => (
        <div key={classId}>
          <AccordionWrapper header={<ClassDetails {...classData} />}>
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
                        <StyledMarkDoneButton>
                          Mark as Done
                        </StyledMarkDoneButton>
                      ) : null}
                    </StyledClassworkDetails>
                  </StyledClassworkContainer>
                )
              )}
            </StyledAccordionContentWrapper>
          </AccordionWrapper>
        </div>
      ))}
    </StyledClassContainer>
  );
};

export default ClassComponent;

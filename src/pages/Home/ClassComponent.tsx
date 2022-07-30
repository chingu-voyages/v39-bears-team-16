import React from 'react';
import { ClassworkInterface } from 'types';
import AccordionWrapper from 'components/Accordion/Accordion';
import {
  StyledClassHeaderWrapper,
  StyledClassTitle,
  StyledClassDescription,
  StyledClassworkTotal,
  StyledClassworkContainer,
  StyledClassworkTitle,
  StyledAccordionContentWrapper,
  StyledFilledCheckmarkIcon,
  StyledFilledCircleIcon,
  StyledCheckmark,
  StyledClassworkDetails,
  StyledClassworkLink,
  StyledSubmissionInput,
  StyledMarkDoneButton,
  Line,
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
          <StyledClassTitle>{className}</StyledClassTitle>
          <StyledClassDescription>
            {classDescription}Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
            dignissim, metus nec fringilla accumsan, risus sem sollicitudin
            lacus, ut interdum tellus elit sed risus
          </StyledClassDescription>
          <StyledClassworkTotal>
            {classworks.length} classworks
          </StyledClassworkTotal>
        </StyledClassHeaderWrapper>
      }
    >
      <StyledAccordionContentWrapper>
        {classworks?.map(
          (
            { _id: classworkId, name, description, completed, type, link },
            index
          ) => (
            <>
              {console.log('idx', index, classworks.length - 1)}
              <StyledClassworkContainer key={classworkId}>
                <StyledCheckmark>
                  {completed ? (
                    <StyledFilledCheckmarkIcon />
                  ) : (
                    <StyledFilledCircleIcon />
                  )}
                </StyledCheckmark>
                <StyledClassworkDetails>
                  <StyledClassworkTitle>{name}</StyledClassworkTitle>
                  <p>{description}</p>
                  {type === 'submission' ? (
                    <StyledSubmissionInput
                      placeholder="Insert your submission link here"
                      name="submission"
                    />
                  ) : (
                    <StyledClassworkLink
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link}
                    </StyledClassworkLink>
                  )}

                  {isEnrolled ? (
                    <StyledMarkDoneButton>
                      Mark as Complete
                    </StyledMarkDoneButton>
                  ) : null}
                </StyledClassworkDetails>
              </StyledClassworkContainer>
              {index !== classworks.length - 1 && <Line />}
            </>
          )
        )}
      </StyledAccordionContentWrapper>
    </AccordionWrapper>
  );
};

export default ClassComponent;

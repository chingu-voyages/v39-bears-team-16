import React from 'react';
import { ClassworkInterface, ClassworkTypes } from 'types';
import AccordionWrapper from 'components/Accordion/Accordion';
import {
  StyledClassTitle,
  StyledDescription,
  StyledClassworkContainer,
  StyledClassworkTitle,
  StyledAccordionContentWrapper,
  StyledClassworkDetails,
  StyledClassworkLink,
  StyledSubmissionInput,
  Line,
} from 'components/ClassCommon.styled';
import {
  StyledClassHeaderWrapper,
  StyledClassworkTotal,
  StyledFilledCheckmarkIcon,
  StyledFilledCircleIcon,
  StyledCheckmark,
  StyledMarkDoneButton,
} from './ClassComponent.styled';

interface ClassComponentProps {
  classId: string;
  classworks?: ClassworkInterface[];
  isEnrolled: boolean;
  name?: string;
  description?: string;
  onMarkAsComplete(payload): void;
}

const ClassComponent = ({
  classId,
  isEnrolled,
  classworks,
  name: className,
  description: classDescription,
  onMarkAsComplete,
}: ClassComponentProps) => {
  const handleMarkDoneClick = ({ completed, classworkId }) => {
    onMarkAsComplete({ classId, classworkId, val: completed ? 1 : 0 });
  };
  return (
    <AccordionWrapper
      header={
        <StyledClassHeaderWrapper>
          <StyledClassTitle>{className}</StyledClassTitle>
          <StyledDescription>{classDescription}</StyledDescription>
          <StyledClassworkTotal>
            {classworks?.length || 0} classworks
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
                  <StyledDescription>{description}</StyledDescription>
                  {type === ClassworkTypes.ASSIGNMENT ? (
                    <StyledSubmissionInput
                      placeholder="Insert your assignment submission link here"
                      name="assignment-submission"
                    />
                  ) : (
                    <StyledClassworkLink
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link || 'https://www.youtube.com'}
                    </StyledClassworkLink>
                  )}

                  {isEnrolled ? (
                    <StyledMarkDoneButton
                      onClick={() =>
                        handleMarkDoneClick({ completed, classworkId })
                      }
                    >
                      {completed ? 'Mark as Incomplete' : 'Mark as Complete'}
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

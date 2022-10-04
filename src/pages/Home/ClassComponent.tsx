import React from 'react';
import { ClassworkInterface, ClassworkTypes } from 'types';
import AccordionWrapper from 'components/Accordion/Accordion';
import { PillLabel } from 'components';
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
  StyledClassTitleWrapper,
} from './ClassComponent.styled';

interface ClassComponentProps {
  classId: string;
  classProgress: number;
  classworks?: ClassworkInterface[];
  isEnrolled: boolean;
  name?: string;
  description?: string;
  onMarkAsComplete(payload): void;
  onMarkAsIncomplete(payload): void;
}

const ClassComponent = ({
  classId,
  isEnrolled,
  classProgress,
  classworks,
  name: className,
  description: classDescription,
  onMarkAsComplete,
  onMarkAsIncomplete,
}: ClassComponentProps) => {
  const handleMarkDoneClick = ({ completed, classworkId }) => {
    if (completed) {
      onMarkAsIncomplete({ classId, classworkId });
    } else {
      onMarkAsComplete({ classId, classworkId });
    }
  };

  return (
    <AccordionWrapper
      header={
        <StyledClassHeaderWrapper>
          <StyledClassTitleWrapper>
            <StyledClassTitle>{className}</StyledClassTitle>
            {classProgress === 1 ? (
              <PillLabel type="primary">Completed</PillLabel>
            ) : null}
          </StyledClassTitleWrapper>

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
            {
              _id: classworkId,
              name,
              description,
              classworkProgress,
              type,
              link,
            },
            index
          ) => {
            const completed = classworkProgress === 1;
            return (
              <>
                <StyledClassworkContainer
                  key={`${classworkId}-${name}-${type}`}
                >
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
            );
          }
        )}
      </StyledAccordionContentWrapper>
    </AccordionWrapper>
  );
};

export default ClassComponent;

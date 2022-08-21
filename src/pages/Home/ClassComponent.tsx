import React from 'react';
import { ClassworkInterface } from 'types';
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
          <StyledDescription>
            {classDescription}Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
            dignissim, metus nec fringilla accumsan, risus sem sollicitudin
            lacus, ut interdum tellus elit sed risus
          </StyledDescription>
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
                  <StyledDescription>
                    {description}Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Etiam eu turpis molestie, dictum est a,
                    mattis tellus. Sed dignissim, metus nec fringilla accumsan,
                    risus sem sollicitudin lacus, ut interdum tellus elit sed
                    risus
                  </StyledDescription>
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
                      {link || 'https://www.youtube.com'}
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

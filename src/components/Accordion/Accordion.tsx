import React, { ReactNode, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import {
  StyledAccordionWrapper,
  StyledClassHeaderWrapper,
  ExpandArrow,
  Appear,
} from './Accordion.styled';

interface AccordionProps {
  header: ReactNode;
  children: ReactNode;
}

const AccordionWrapper = ({ header, children }: AccordionProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <StyledAccordionWrapper>
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading onClick={() => setExpanded(!expanded)}>
            {/* accordion header */}
            <AccordionItemButton>
              <StyledClassHeaderWrapper>
                {header}

                <ExpandArrow className={expanded ? 'closed' : 'expanded'} />
              </StyledClassHeaderWrapper>
            </AccordionItemButton>
          </AccordionItemHeading>

          {/* accordion content */}
          <AccordionItemPanel>
            <Appear className={expanded ? 'closed' : 'expanded'}>
              {children}
            </Appear>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </StyledAccordionWrapper>
  );
};

export default AccordionWrapper;

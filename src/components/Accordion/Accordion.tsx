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
} from './Accordion.styled';

interface AccordionProps {
  header: ReactNode;
  children: ReactNode;
}

const Example = ({ header, children }: AccordionProps) => {
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
          <AccordionItemPanel>{children}</AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </StyledAccordionWrapper>
  );
};

export default Example;

import React, { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import {
  StyledClassContainer,
  StyledAccordionWrapper,
  StyledClassHeaderWrapper,
  ClassDate,
  ClassDescription,
  ClassTitle,
  ClassTitleWrapper,
  EditClassContentIcon,
  EditClassIcon,
  StyledClassItem,
  StyledClassItemsContainer,
  TrashIcon,
} from './ClassComponent.styled';
import { ClassComponentData } from '../../../api/ClassComponentData';

interface ClassComponentData {
  id: string;
  date: string;
  title: string;
  classDescription: string;
  content?: [];
}

const ClassComponent = () => {
  const [expanded, setExpanded] = useState<boolean>();

  return (
    <StyledClassContainer>
      {ClassComponentData.map((item, idx) => (
        <div key={item.id}>
          <EditClassIcon />
          <StyledAccordionWrapper>
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  {/* accordion header */}
                  <AccordionItemButton>
                    <StyledClassHeaderWrapper
                      onClick={() => {
                        setExpanded(!expanded);
                      }}
                    >
                      <article>
                        <ClassDate>{item.date}</ClassDate>
                        <ClassTitleWrapper>
                          <ClassTitle>{item.title}</ClassTitle>
                          <TrashIcon />
                        </ClassTitleWrapper>
                        <ClassDescription>
                          {item.classDescription}
                        </ClassDescription>
                      </article>

                      <MdExpandMore
                        className={expanded ? 'closed' : 'expanded'}
                      />
                    </StyledClassHeaderWrapper>
                  </AccordionItemButton>
                </AccordionItemHeading>

                {/* accordion content */}
                <AccordionItemPanel>
                  {item.content?.map((innerElement) => (
                    <div key={innerElement}>
                      <StyledClassItemsContainer>
                        <StyledClassItem>
                          <EditClassContentIcon />
                          <TrashIcon />
                          <span>{innerElement}</span>
                        </StyledClassItem>
                      </StyledClassItemsContainer>
                    </div>
                  ))}
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </StyledAccordionWrapper>
        </div>
      ))}
    </StyledClassContainer>
  );
};

export default ClassComponent;

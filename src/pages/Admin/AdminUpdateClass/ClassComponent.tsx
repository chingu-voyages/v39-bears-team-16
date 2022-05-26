import React, { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import {
  AddClassContentIcon,
  AddClassWrapper,
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
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [currentId, setCurrentID] = useState<number>();

  return (
    <StyledClassContainer>
      {ClassComponentData.map((item, idx) => (
        <div key={item.id}>
          <EditClassIcon />
          <StyledAccordionWrapper
            onClick={() => {
              setCurrentID(currentId === idx ? -1 : idx);
              setIsExpanded(!isExpanded);
            }}
          >
            {/* accordion header */}
            <StyledClassHeaderWrapper>
              <article>
                <ClassDate>{item.date}</ClassDate>
                <ClassTitleWrapper>
                  <ClassTitle>{item.title}</ClassTitle>
                  <TrashIcon />
                </ClassTitleWrapper>
                <ClassDescription>{item.classDescription}</ClassDescription>
              </article>
              <MdExpandMore
                className={
                  isExpanded && currentId === idx ? 'closed' : 'expanded'
                }
              />
            </StyledClassHeaderWrapper>

            {/* accordion content */}

            {item.content?.map((innerElement, innerIdx) => (
              <div key={innerElement}>
                {currentId === idx && (
                  <StyledClassItemsContainer>
                    <StyledClassItem>
                      <EditClassContentIcon />
                      <TrashIcon />
                      <span>{innerElement}</span>
                    </StyledClassItem>
                  </StyledClassItemsContainer>
                )}
              </div>
            ))}
          </StyledAccordionWrapper>
        </div>
      ))}
    </StyledClassContainer>
  );
};

export default ClassComponent;

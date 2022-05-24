import React from 'react';
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

const ClassComponent = () => {
  return (
    <StyledClassContainer>
      <EditClassIcon />
      <StyledAccordionWrapper>
        {/* accordion header */}
        <StyledClassHeaderWrapper>
          <article>
            <ClassDate>March,10th,2022</ClassDate>
            <ClassTitleWrapper>
              <ClassTitle>Class 1: Introduction</ClassTitle>
              <TrashIcon />
            </ClassTitleWrapper>
            <ClassDescription>
              In this course, you will learn about JavaScript data types,
              built-in methods, and variables.
            </ClassDescription>
          </article>
          <MdExpandMore />
        </StyledClassHeaderWrapper>

        {/* accordion content */}
        <StyledClassItemsContainer>
          <StyledClassItem>
            <EditClassContentIcon />
            <TrashIcon />
            <span>Stream</span>
          </StyledClassItem>
          <AddClassWrapper>
            <AddClassContentIcon />
            Add new content
          </AddClassWrapper>
        </StyledClassItemsContainer>
      </StyledAccordionWrapper>
    </StyledClassContainer>
  );
};

export default ClassComponent;

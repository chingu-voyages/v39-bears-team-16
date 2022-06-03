import React, { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';

import {
  StyledClassContainer,
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
import Example from '../../../components/Accordion/Accordion';

interface ClassComponentDataProps {
  id: string;
  date: string;
  title: string;
  classDescription: string;
  content?: [];
}

const getHeaderComponent = (item: ClassComponentDataProps) => {
  return (
    <StyledClassHeaderWrapper>
      <article>
        <ClassDate>{item.date}</ClassDate>
        <ClassTitleWrapper>
          <ClassTitle>{item.title}</ClassTitle>
          <TrashIcon />
        </ClassTitleWrapper>
        <ClassDescription>{item.classDescription}</ClassDescription>
      </article>
    </StyledClassHeaderWrapper>
  );
};

const ClassComponent = () => {
  return (
    <StyledClassContainer>
      {ClassComponentData.map((item) => (
        <div key={item.id}>
          <EditClassIcon />
          <Example header={getHeaderComponent(item as ClassComponentDataProps)}>
            {/* accordion content */}

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
          </Example>
        </div>
      ))}
    </StyledClassContainer>
  );
};

export default ClassComponent;

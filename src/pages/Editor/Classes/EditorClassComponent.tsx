/* eslint-disable prettier/prettier */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  StyledClassContainer,
  ClassworkIcon,
  StyledClassItem,
  StyledClassItemsContainer,
} from 'pages/Editor/Classes/EditorClassComponent.styled';
import AccordionWrapper from 'components/Accordion/Accordion';
import ClassHeaderComponent from 'pages/Editor/Classes/EditorClassHeaderComponent';
import {
  ClassComponentDataProps,
  classesProps,
  headerProps,
  classWorkProps,
} from 'pages/Editor/Classes/classTypes';

/* eslint no-underscore-dangle: 0 */

const getHeaderComponent = ({ item, fetchClasses }: headerProps) => {
  return <ClassHeaderComponent item={item} fetchClasses={fetchClasses} />;
};

const EditorClassComponent = ({ classes, fetchClasses }: classesProps) => {
  const classWorkDetails = (innerElement: classWorkProps) => {
    if (innerElement.description) {
      return (
        <>
          <ClassworkIcon /> {innerElement.type}
          <ClassworkIcon /> {innerElement.name}
          <ClassworkIcon /> {innerElement.description}
        </>
      );
    }
    return null;
  };

  return (
    <StyledClassContainer>
      {classes?.map((item: ClassComponentDataProps) => (
        <div key={item._id}>
          <AccordionWrapper header={getHeaderComponent({ item, fetchClasses })}>
            {/* accordion content */}

            {item.classworks?.map((innerElement) => (
              <div key={uuidv4()}>
                <StyledClassItemsContainer>
                  <StyledClassItem>
                    {classWorkDetails(innerElement)}
                  </StyledClassItem>
                </StyledClassItemsContainer>
              </div>
            ))}
          </AccordionWrapper>
        </div>
      ))}
    </StyledClassContainer>
  );
};

export default EditorClassComponent;
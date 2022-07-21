import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  StyledClassContainer,
  ClassworkIcon,
  StyledClassItem,
  StyledClassItemsContainer,
} from 'pages/Editor/Classes/ClassComponent.styled';
import AccordionWrapper from 'components/Accordion/Accordion';

import ClassHeaderComponent from 'pages/Editor/Classes/ClassHeaderComponent';
import {
  ClassComponentDataProps,
  classesProps,
  headerProps,
  classesWorkProps,
} from 'types';
/* eslint no-underscore-dangle: 0 */

const getHeaderComponent = ({ item, fetchClasses }: headerProps) => {
  return <ClassHeaderComponent item={item} fetchClasses={fetchClasses} />;
};

const ClassComponent = ({ classes = [], fetchClasses }: classesProps) => {
  const classWorkDetails = (innerElement: classesWorkProps) => {
    if (innerElement.description) {
      return (
        <>
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

export default ClassComponent;

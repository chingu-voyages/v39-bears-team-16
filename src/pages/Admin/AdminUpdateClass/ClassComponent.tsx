import React from 'react';

import dateFormat from 'dateformat';
import {
  StyledClassContainer,
  StyledClassHeaderWrapper,
  ClassDate,
  ClassDescription,
  ClassTitle,
  AddClassContentIcon,
  ClassTitleWrapper,
  EditClassIcon,
  StyledClassItem,
  StyledClassItemsContainer,
  TrashIcon,
} from './ClassComponent.styled';
import AccordionWrapper from '../../../components/Accordion/Accordion';

interface ClassComponentDataProps {
  _id: string;
  date: string;
  name: string;
  subject: string;
  classworks?: [];
}

interface classesProps {
  classes: ClassComponentDataProps[] | undefined;
}

const getHeaderComponent = (item: ClassComponentDataProps) => {
  return (
    <StyledClassHeaderWrapper>
      <article>
        <ClassDate>{dateFormat(`${item.date}`, 'mmmm dS, yyyy')}</ClassDate>
        <ClassTitleWrapper>
          <ClassTitle>{item.name}</ClassTitle>
          <TrashIcon />
        </ClassTitleWrapper>
        <ClassDescription>{item.subject}</ClassDescription>
      </article>
    </StyledClassHeaderWrapper>
  );
};

const ClassComponent = ({ classes }: classesProps) => {
  // const classWorkDetails = (innerElement: any, index: any) => {
  //   if (innerElement.body) {
  //     return <span>{innerElement.body}</span>;
  //   }
  //   return null;
  // };
  return (
    <StyledClassContainer>
      {classes?.map((item: ClassComponentDataProps) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={item._id}>
          <EditClassIcon />
          <AccordionWrapper
            header={getHeaderComponent(item as ClassComponentDataProps)}
          >
            {/* accordion content */}

            {/* {item.classworks?.map((innerElement, index) => (
              <div key={index}>
                <StyledClassItemsContainer>
                  <StyledClassItem>
                    <EditClassContentIcon />
                    <TrashIcon />
                    {classWorkDetails(innerElement, index)}
                  </StyledClassItem>
                </StyledClassItemsContainer>
              </div>
            ))} */}

            <StyledClassItemsContainer>
              <StyledClassItem>
                <AddClassContentIcon /> Add Resources
              </StyledClassItem>
            </StyledClassItemsContainer>
          </AccordionWrapper>
        </div>
      ))}
    </StyledClassContainer>
  );
};

export default ClassComponent;

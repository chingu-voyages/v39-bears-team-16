import React, { useState } from 'react';
import { uid } from 'react-uid';
import {
  StyledClassContainer,
  StyledClassHeaderWrapper,
  ClassDate,
  EditClassContentIcon,
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
import { useModal } from '../../../components/Modal/useModal';
import { AddNewClassWorkForm } from './AddNewClassWorkModal';
import { getFormattedDate } from '../../../utilities/dateFormat';

/* eslint no-underscore-dangle: 0 */

interface ClassComponentDataProps {
  _id: string;
  date: string;
  name: string;
  subject: string;
  classworks?: [];
}

interface classesProps {
  classes: ClassComponentDataProps[] | undefined;
  handleClose(): void;
}

interface classesWorkProps {
  name: string;
  body: string;
}

const getHeaderComponent = (item: ClassComponentDataProps) => {
  return (
    <StyledClassHeaderWrapper>
      <article>
        <ClassDate>{getFormattedDate(item.date)}</ClassDate>
        <ClassTitleWrapper>
          <ClassTitle>{item.name}</ClassTitle>
          <TrashIcon />
        </ClassTitleWrapper>
        <ClassDescription>{item.subject}</ClassDescription>
      </article>
    </StyledClassHeaderWrapper>
  );
};

const ClassComponent = ({ classes, handleClose }: classesProps) => {
  const { isOpen, toggle } = useModal();
  const [ClassID, setClassID] = useState<string | undefined>();

  const handleClick = (classId: string | undefined) => {
    toggle();
    setClassID(classId);
  };

  const classWorkDetails = (innerElement: classesWorkProps) => {
    if (innerElement.body) {
      return (
        <>
          <div> {innerElement.name}</div>
          <div>{innerElement.body}</div>
        </>
      );
    }
    return null;
  };
  return (
    <StyledClassContainer>
      {classes?.map((item: ClassComponentDataProps) => (
        <div key={item._id}>
          <EditClassIcon />
          <AccordionWrapper
            header={getHeaderComponent(item as ClassComponentDataProps)}
          >
            {/* accordion content */}

            {item.classworks?.map((innerElement) => (
              <div key={uid(innerElement)}>
                <StyledClassItemsContainer>
                  <StyledClassItem>
                    <EditClassContentIcon />
                    <TrashIcon />
                    {classWorkDetails(innerElement)}
                  </StyledClassItem>
                </StyledClassItemsContainer>
              </div>
            ))}

            <StyledClassItemsContainer>
              <StyledClassItem
                onClick={() => {
                  handleClick(item._id);
                }}
              >
                <AddClassContentIcon />
                Add Resources
              </StyledClassItem>

              <AddNewClassWorkForm
                isOpen={isOpen}
                toggle={toggle}
                classId={ClassID}
                handleClose={handleClose}
              />
            </StyledClassItemsContainer>
          </AccordionWrapper>
        </div>
      ))}
    </StyledClassContainer>
  );
};

export default ClassComponent;

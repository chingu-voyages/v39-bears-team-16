import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  StyledClassContainer,
  EditClassContentIcon,
  AddClassContentIcon,
  StyledClassItem,
  StyledClassItemsContainer,
  TrashIcon,
} from './ClassComponent.styled';
import AccordionWrapper from '../../../components/Accordion/Accordion';
import { useModal } from '../../../components/Modal/useModal';

import { AddNewClassWorkForm } from './AddNewClassWorkModal';

import ClassHeaderComponent from './ClassHeaderComponent';

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

interface headerProps {
  item: ClassComponentDataProps;
  handleClose(): void;
}

interface classesWorkProps {
  name: string;
  body: string;
}

const getHeaderComponent = ({ item, handleClose }: headerProps) => {
  return <ClassHeaderComponent item={item} handleClose={handleClose} />;
};

const ClassComponent = ({ classes = [], handleClose }: classesProps) => {
  const { isOpen, toggle } = useModal();
  const [ClassID, setClassID] = useState<string | undefined>();

  const handleClick = (classId: string | undefined) => {
    setClassID(classId);
    toggle();
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
          <AccordionWrapper header={getHeaderComponent({ item, handleClose })}>
            {/* accordion content */}

            {item.classworks?.map((innerElement) => (
              <div key={uuidv4()}>
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

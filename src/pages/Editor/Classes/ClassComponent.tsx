import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  StyledClassContainer,
  EditClassContentIcon,
  AddClassContentIcon,
  StyledClassItem,
  StyledClassItemsContainer,
  TrashIcon,
} from 'pages/Editor/Classes/ClassComponent.styled';
import AccordionWrapper from 'components/Accordion/Accordion';
import { useModal } from 'components/Modal/useModal';

import { AddNewClassWorkForm } from 'pages/Editor/Classes/UpdateClassModals/AddNewClassWorkModal';

import ClassHeaderComponent from 'pages/Editor/Classes/ClassHeaderComponent';

/* eslint no-underscore-dangle: 0 */

interface ClassComponentDataProps {
  _id: string;
  createdAt: string;
  name: string;
  description: string;
  classworks?: [];
}

interface classesProps {
  classes: ClassComponentDataProps[] | undefined;
  fetchClasses(): void;
}

interface headerProps {
  item: ClassComponentDataProps;
  fetchClasses(): void;
}

interface classesWorkProps {
  name: string;
  description: string;
}

const getHeaderComponent = ({ item, fetchClasses }: headerProps) => {
  return <ClassHeaderComponent item={item} fetchClasses={fetchClasses} />;
};

const ClassComponent = ({ classes = [], fetchClasses }: classesProps) => {
  const { isOpen, toggle } = useModal();
  const [ClassID, setClassID] = useState<string | undefined>();

  const handleClick = (classId: string | undefined) => {
    setClassID(classId);
    toggle();
  };

  const classWorkDetails = (innerElement: classesWorkProps) => {
    if (innerElement.description) {
      return (
        <>
          <div> {innerElement.name}</div>
          <div>{innerElement.description}</div>
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
                fetchClasses={fetchClasses}
              />
            </StyledClassItemsContainer>
          </AccordionWrapper>
        </div>
      ))}
    </StyledClassContainer>
  );
};

export default ClassComponent;

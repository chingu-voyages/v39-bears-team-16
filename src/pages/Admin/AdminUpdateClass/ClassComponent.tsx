import React, { useState } from 'react';

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
import { useModal } from '../../../components/Modal/useModal';
import { Modal } from '../../../components/Modal/Modal';
import { Button, PrimaryButton } from '../../../components/Button';
import { AddNewClassWorkForm } from './AddNewClassWorkForm';
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

const ClassComponent = ({ classes }: classesProps) => {
  const { isOpen, toggle } = useModal();
  const [ClassID, setClassID] = useState<string | undefined>();

  const handleClick = (classId: string | undefined) => {
    toggle();
    setClassID(classId);
  };

  const handleCloseModal = () => {
    toggle();
  };

  // const classWorkDetails = (innerElement: any, index: any) => {
  //   if (innerElement.body) {
  //     return (
  //       <>
  //         <div> {innerElement.name}</div>
  //         <div>{innerElement.body}</div>
  //       </>
  //     );
  //   }
  //   return null;
  // };
  return (
    <StyledClassContainer>
      {classes?.map((item: ClassComponentDataProps) => (
        <div key={item._id}>
          <EditClassIcon />
          <AccordionWrapper
            header={getHeaderComponent(item as ClassComponentDataProps)}
          >
            {/* accordion content */}

            {/* {item.classworks?.map((innerElement, index) => (
              <div key={`${item._id}-${index}`}>
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
              <StyledClassItem
                onClick={() => {
                  handleClick(item._id);
                }}
              >
                <AddClassContentIcon />
                Add Resources
              </StyledClassItem>
              <Modal
                titleText="Add New Class Work"
                isOpen={isOpen}
                hide={toggle}
                primaryAction={
                  <PrimaryButton
                    type="submit"
                    form="addClassWork"
                    onClick={toggle}
                  >
                    Submit
                  </PrimaryButton>
                }
                secondaryAction={
                  <Button onClick={handleCloseModal}>Cancel</Button>
                }
              >
                <AddNewClassWorkForm classId={ClassID} />
              </Modal>
            </StyledClassItemsContainer>
          </AccordionWrapper>
        </div>
      ))}
    </StyledClassContainer>
  );
};

export default ClassComponent;

import React from 'react';
import { useModal } from 'components/Modal/useModal';
import {
  StyledClassHeaderWrapper,
  ClassTitleWrapper,
  ClassTitle,
  EditClassIcon,
  TrashIcon,
  ClassDescription,
} from 'pages/Editor/Classes/ClassComponent.styled';
import { DeleteClassModal } from 'pages/Editor/Classes/UpdateClassModals/DeleteClassModal';

/* eslint no-underscore-dangle: 0 */

interface itemProps {
  _id: string;
  date: string;
  name: string;
  subject: string;
  classworks?: [];
}
interface ClassHeaderComponentProps {
  item: itemProps;
  handleClose(): void;
}

const ClassHeaderComponent = ({
  handleClose,
  item,
}: ClassHeaderComponentProps) => {
  const { isOpen, toggle } = useModal();

  return (
    <StyledClassHeaderWrapper>
      <ClassTitleWrapper>
        <ClassTitle>{item.name}</ClassTitle>
        <EditClassIcon />
        <TrashIcon
          onClick={() => {
            toggle();
          }}
        />
        <DeleteClassModal
          className={item.name}
          classID={item._id}
          isOpen={isOpen}
          toggle={toggle}
          handleClose={handleClose}
        />
      </ClassTitleWrapper>
      <ClassDescription>{item.subject}</ClassDescription>
    </StyledClassHeaderWrapper>
  );
};

export default ClassHeaderComponent;

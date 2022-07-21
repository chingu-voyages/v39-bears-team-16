import React, { useState } from 'react';
import { useModal } from '../../../components/Modal/useModal';
import {
  StyledClassHeaderWrapper,
  ClassTitleWrapper,
  ClassTitle,
  EditClassIcon,
  TrashIcon,
  ClassDescription,
} from './ClassComponent.styled';
import { DeleteClassModal } from './UpdateClassModals/DeleteClassModal';
import { EditClassModal } from './UpdateClassModals/EditClassModal';

/* eslint no-underscore-dangle: 0 */

interface itemProps {
  _id: string;
  createdAt: string;
  name: string;
  description: string;
  classworks?: [];
}
interface ClassHeaderDataProps {
  item: itemProps;
  fetchClasses(): void;
}

const ClassHeaderComponent = ({ fetchClasses, item }: ClassHeaderDataProps) => {
  const { isOpen, toggle } = useModal();
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const editToggle = () => {
    setEditOpen(!editOpen);
  };

  return (
    <StyledClassHeaderWrapper>
      <ClassTitleWrapper
        onKeyDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
        onFocus={(e) => e.stopPropagation()}
        onMouseOver={(e) => e.stopPropagation()}
      >
        <EditClassIcon onClick={editToggle} />
        <EditClassModal
          item={item}
          isOpen={editOpen}
          toggle={editToggle}
          fetchClasses={fetchClasses}
        />
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
          fetchClasses={fetchClasses}
        />
      </ClassTitleWrapper>
      <ClassTitle>{item.name}</ClassTitle>
      <ClassDescription>{item.description}</ClassDescription>
    </StyledClassHeaderWrapper>
  );
};

export default ClassHeaderComponent;

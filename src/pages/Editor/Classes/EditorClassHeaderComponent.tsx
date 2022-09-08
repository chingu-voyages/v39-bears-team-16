/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { ClassHeaderDataProps } from 'pages/Editor/Classes/classTypes';
import { useModal } from 'components/Modal/useModal';
import { EditClassModal } from 'pages/Editor/Classes/UpdateClassModals/EditClassModal';
import { DeleteClassModal } from 'pages/Editor/Classes/UpdateClassModals/DeleteClassModal';
import {
    StyledClassHeaderWrapper,
    ClassTitleWrapper,
    ClassTitle,
    EditClassIcon,
    TrashIcon,
    ClassDescription,
} from './EditorClassComponent.styled';

/* eslint no-underscore-dangle: 0 */

const EditorClassHeaderComponent = ({ fetchClasses, item }: ClassHeaderDataProps) => {
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
                <ClassTitle>{item.name}</ClassTitle>
            </ClassTitleWrapper>

            <ClassDescription>{item.description}</ClassDescription>
        </StyledClassHeaderWrapper>
    );
};

export default EditorClassHeaderComponent;
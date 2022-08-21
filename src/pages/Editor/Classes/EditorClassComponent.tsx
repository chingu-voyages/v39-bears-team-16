import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AccordionWrapper from 'components/Accordion/Accordion';
import { useModal } from 'components/Modal/useModal';

import {
  ClassworkIcon,
  StyledEditorClassHeaderWrapper,
  EditClassIcon,
  TrashIcon,
  StyledEditorClassDescription,
} from 'pages/Editor/Classes/EditorClassComponent.styled';
import {
  StyledClassTitle,
  StyledClassworkContainer,
  StyledClassworkTitle,
  StyledDescription,
  StyledClassworkLink,
  StyledClassworkDetails,
  StyledAccordionContentWrapper,
  StyledClassworkResourceContainer,
  Line,
} from 'components/ClassCommon.styled';
import { EditClassModal } from 'pages/Editor/Classes/UpdateClassModals/EditClassModal';
import { DeleteClassModal } from 'pages/Editor/Classes/UpdateClassModals/DeleteClassModal';
import { EditorClassComponentProps } from './classTypes';

/* eslint no-underscore-dangle: 0 */

const EditorClassComponent = ({
  classData,
  fetchClasses,
}: EditorClassComponentProps) => {
  const { isOpen: deleteOpen, toggle: toggleDelete } = useModal();
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const toggleEdit = () => {
    setEditOpen(!editOpen);
  };

  return (
    <AccordionWrapper
      header={
        <StyledEditorClassHeaderWrapper>
          <StyledClassTitle>{classData.name}</StyledClassTitle>
          <div>
            <EditClassIcon onClick={toggleEdit} />
            <TrashIcon
              onClick={() => {
                toggleDelete();
              }}
            />
          </div>
        </StyledEditorClassHeaderWrapper>
      }
    >
      {/* accordion content */}
      <StyledEditorClassDescription>
        {classData.description}Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
        lacus, ut interdum tellus elit sed risus
      </StyledEditorClassDescription>
      <StyledAccordionContentWrapper>
        {classData.classworks?.map(
          ({ name, description, type, link }, index) => (
            <div key={uuidv4()}>
              <StyledClassworkContainer>
                <ClassworkIcon />
                <StyledClassworkDetails>
                  <StyledClassworkTitle>{name}</StyledClassworkTitle>
                  <StyledDescription>
                    {description}Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Etiam eu turpis molestie, dictum est a,
                    mattis tellus. Sed dignissim, metus nec fringilla accumsan,
                    risus sem sollicitudin lacus, ut interdum tellus elit sed
                    risus
                  </StyledDescription>
                  <StyledClassworkResourceContainer>
                    {type !== 'submission' && (
                      <StyledClassworkLink
                        href={link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {link || 'https://www.youtube.com'}
                      </StyledClassworkLink>
                    )}
                  </StyledClassworkResourceContainer>
                </StyledClassworkDetails>
              </StyledClassworkContainer>
              {index !== classData.classworks.length - 1 && <Line />}
            </div>
          )
        )}
      </StyledAccordionContentWrapper>
      <EditClassModal
        classData={classData}
        isOpen={editOpen}
        toggle={toggleEdit}
        fetchClasses={fetchClasses}
      />
      <DeleteClassModal
        className={classData.name}
        classID={classData._id}
        isOpen={deleteOpen}
        toggle={toggleDelete}
        fetchClasses={fetchClasses}
      />
    </AccordionWrapper>
  );
};

export default EditorClassComponent;

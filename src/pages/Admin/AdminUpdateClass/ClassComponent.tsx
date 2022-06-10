import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dateFormat from 'dateformat';
import {
  StyledClassContainer,
  StyledClassHeaderWrapper,
  ClassDate,
  ClassDescription,
  ClassTitle,
  AddClassContentIcon,
  ClassTitleWrapper,
  EditClassContentIcon,
  EditClassIcon,
  StyledClassItem,
  StyledClassItemsContainer,
  TrashIcon,
} from './ClassComponent.styled';
import AccordionWrapper from '../../../components/Accordion/Accordion';
import { ErrorMessageType } from '../../../types';
import { ERROR_MESSAGES } from '../../../utilities/constants';
import { getAdminClass } from '../../../api/getAdminClasses';
import { getCsrfToken } from '../../../api/getCsrfToken';

interface ClassComponentDataProps {
  _id: string;
  date: string;
  name: string;
  subject: string;
  classworks?: [];
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

const ClassComponent = () => {
  const [classes, setClasses] = useState<ClassComponentDataProps[]>();
  const { id } = useParams();

  const fetchAdminClasses = useCallback(async () => {
    try {
      const res = await getAdminClass(id);
      setClasses(res.data);
    } catch (error) {
      const errors = error as ErrorMessageType[];
      console.log(errors);
      if (errors?.[0]?.msg === ERROR_MESSAGES.unauthorized) {
        // navigate('/sign-in', { replace: true });
      }
    }
  }, []);

  useEffect(() => {
    getCsrfToken();
    fetchAdminClasses();
  }, [fetchAdminClasses]);

  // const classWorkDetails = (innerElement: any, index: any) => {
  //   if (innerElement.body) {
  //     return <span>{innerElement.body}</span>;
  //   }
  //   return null;
  // };

  return (
    <StyledClassContainer>
      {classes?.map((item) => (
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

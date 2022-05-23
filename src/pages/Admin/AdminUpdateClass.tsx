import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';
import { RiEditBoxFill } from 'react-icons/ri';
import { MdExpandMore, MdAdd } from 'react-icons/md';
import { BsCalendarDate } from 'react-icons/bs';
import styled from 'styled-components';

const SyllabusContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 50px;
  padding: 50px;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.background.primary};
`;
const Line = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background.white};
  opacity: 20%;
  height: 1px;
`;
const SyllabusHeadlineWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;
const SyllabusHeadline = styled.section`
  font-weight: 500;
  font-size: 1.5rem;
`;
const SyllabusDate = styled.span`
  font-weight: 100;
  font-size: 1rem;
  font-style: italic;
  margin: 0 10px;
`;
const Classes = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const Class = styled.section`
  display: flex;
`;
const ClassContent = styled.section`
  display: flex;
  flex-direction: column;
`;
const ClassDate = styled.h4`
  font-size: 0.8rem;
  font-weight: 100;
  font-style: italic;
  color: ${({ theme }) => theme.color.secondary};
`;
const ClassTitleWrapper = styled.section`
  display: flex;
  align-items: center;
`;
const ClassTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  margin-left: 10px;
`;
const ClassDescription = styled.h4`
  font-weight: 200;
  margin-left: 30px;
  font-size: 1rem;
`;
const AddClassButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.color.primary};
  width: 120px;
  height: 40px;
  border-radius: 10px;
  font-weight: 400;
  cursor: pointer;
  border-color: white;
  &:hover {
    border: none;
    background-color: ${({ theme }) => theme.background.yellow};
    color: ${({ theme }) => theme.color.primary};
  }
`;

const iconStyles = {
  fontSize: `1.3rem`,
  opacity: `50%`,
  cursor: `pointer`,
  transition: `all ease 0.1s`,
};

const EditClassIcon = styled(RiEditBoxFill)`
  ${iconStyles}
  margin-right: 20px;
  color: ${({ theme }) => theme.color.yellow};
  font-size: 2rem;
  &:hover {
    opacity: 100%;
  }
`;
const EditClassContentIcon = styled(AiOutlineEdit)`
  ${iconStyles}
  color: ${({ theme }) => theme.color.yellow};
  &:hover {
    opacity: 100%;
  }
`;
const TrashIcon = styled(BiTrash)`
  ${iconStyles}
  margin-left: 10px;
  margin-right: 10px;
  color: ${({ theme }) => theme.color.red};
  &:hover {
    opacity: 100%;
  }
`;
const DateIcon = styled(BsCalendarDate)`
  ${iconStyles}
  opacity: 100%;
  color: ${({ theme }) => theme.color.primary};
`;
const AddClassContentIcon = styled(MdAdd)`
  ${iconStyles}
  color: ${({ theme }) => theme.color.yellow};
  &:hover {
    opacity: 100%;
  }
`;
const Items = styled.ul`
  margin-left: 50px;
  margin-top: 10px;
  font-weight: 100;
`;
const Item = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
`;
const AddClassWrapper = styled.section`
  display: flex;
  gap: 10px;
`;
const Form = styled.form`
  display: flex;
  gap: 10px;
`;

const AdminUpdateClass = () => {
  return (
    <SyllabusContainer>
      <SyllabusHeadlineWrapper>
        <SyllabusHeadline>
          Syllabus
          <SyllabusDate>(March 1st, 2022 - December 1st, 2022)</SyllabusDate>
          <DateIcon />
        </SyllabusHeadline>
        <AddClassButton type="button">+ New Class</AddClassButton>
      </SyllabusHeadlineWrapper>
      <Line />
      <Classes>
        <Class>
          <EditClassIcon />
          <ClassContent>
            <article>
              <ClassDate>March,10th,2022</ClassDate>
              <ClassTitleWrapper>
                <ClassTitle>Class 1: Introduction</ClassTitle>
                <TrashIcon />
              </ClassTitleWrapper>
              <ClassDescription>
                In this course, you will learn about JavaScript data types,
                built-in methods, and variables.
              </ClassDescription>
            </article>
            <Items>
              <Item>
                <EditClassContentIcon />
                <TrashIcon />
                <span>Stream</span>
              </Item>
              <AddClassWrapper>
                <div>
                  <AddClassContentIcon />
                  Add new content
                </div>
              </AddClassWrapper>
            </Items>
          </ClassContent>
        </Class>
        <MdExpandMore />
      </Classes>
    </SyllabusContainer>
  );
};

export default AdminUpdateClass;

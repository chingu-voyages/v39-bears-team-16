import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { BiMessageSquareEdit } from 'react-icons/bi';
import { MdExpandMore } from 'react-icons/md';
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
const SyllabusHeadline = styled.section`
  display: flex;
  justify-content: space-between;
`;
const SyllabusClasses = styled.section`
  display: flex;
  justify-content: space-between;
`;
const SyllabusClass = styled.section`
  display: flex;
`;
const EditIcon = styled(BiMessageSquareEdit)`
  margin-right: 20px;
`;

const AdminUpdateClass = () => {
  return (
    <SyllabusContainer>
      <SyllabusHeadline>
        <h2>Syllabus</h2>
        <AiFillPlusCircle />
      </SyllabusHeadline>
      <Line />
      <SyllabusClasses>
        <SyllabusClass>
          <EditIcon />
          <div>
            <h4>March,10th,2022</h4>
            <h2>Class 1: Introduction</h2>
            <h3>
              In this course, you will learn about JavaScript data types,
              built-in methods, and variables.
            </h3>
          </div>
        </SyllabusClass>
        <MdExpandMore />
      </SyllabusClasses>
    </SyllabusContainer>
  );
};

export default AdminUpdateClass;

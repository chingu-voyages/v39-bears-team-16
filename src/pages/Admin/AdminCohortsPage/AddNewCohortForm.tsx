import React from 'react';
import styled from 'styled-components';

import { Input, InputField } from '../../../components/Input';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const AddNewCohortForm = () => {
  return (
    <StyledForm>
      <InputField htmlFor="name">
        <span>Cohort Name</span>
        <Input type="text" id="name" placeholder="Enter Cohort Name" />
      </InputField>
      <InputField htmlFor="name">
        <span>Start Date</span>
        <Input type="text" id="start-date" placeholder="DD-MM-YYYY" />
      </InputField>
      <InputField htmlFor="name">
        <span>End Date</span>
        <Input type="text" id="end-date" placeholder="DD-MM-YYYY" />
      </InputField>
    </StyledForm>
  );
};

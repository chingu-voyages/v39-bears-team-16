import React from 'react';
import { Link } from 'react-router-dom';

const StudentCohortPage = () => {
  const id = '1';
  return (
    <div>
      <div>Student Cohort Page</div>
      <Link to={`/student/cohorts/${id}`}>Cohort id {id}</Link>
    </div>
  );
};

export default StudentCohortPage;

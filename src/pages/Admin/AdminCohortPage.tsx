import React from 'react';
import { Link } from 'react-router-dom';

const AdminCohortPage = () => {
  const id = '1';
  return (
    <div>
      <div>Admin Cohort Page</div>
      <Link to={`/admin/cohort/${id}`}>Cohort id {id}</Link>
    </div>
  );
};

export default AdminCohortPage;

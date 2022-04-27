import React from 'react';

const Home = () => {
  return <div>Home</div>;
};

// This page is the traffic guide
// if not authenticated -> redirect to sign in page
// if authenticated -> check for user role, if admin: /admin, student: /student
// After sign in, it should redirect to this page, and this page will redirect to the right page

export default Home;

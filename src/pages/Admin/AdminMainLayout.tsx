import React from 'react';
import styled from 'styled-components';
import AdminNavbar from './AdminNavbar';
import { BreadcrumbMenu } from '../../components/BreadcrumbMenu/BreadcrumbMenu';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.background.secondary};
`;

// const Breadcrumbs = () => {
//   const breadcrumbs = useBreadcrumbs();
//   return (
//     <React.Fragment>
//       {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
//     </React.Fragment>
//   );
// };

const AdminMainLayout = () => {
  return (
    <div>
      <Container>
        <AdminNavbar />
        <BreadcrumbMenu />
      </Container>
    </div>
  );
};

export default AdminMainLayout;

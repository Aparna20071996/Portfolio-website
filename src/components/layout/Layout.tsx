import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px; /* To account for fixed navbar */
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
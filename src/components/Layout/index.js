import React from 'react';
import { useOutlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  const outlet = useOutlet();
  return (
    <>
      <Header />
      <div className="container mx-auto min-h-screen">{outlet}</div>
      <Footer />
    </>
  );
};

export default Layout;

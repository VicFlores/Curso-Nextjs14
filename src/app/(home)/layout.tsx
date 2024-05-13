import { Description, Hero } from 'app/components';
import React, { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Hero />
      <Description />

      {children}
    </>
  );
};

export default HomeLayout;

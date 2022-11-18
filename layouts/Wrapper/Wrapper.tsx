import React from 'react';

import { Footer, Navbar } from '../../exports/exports';

interface Wrapper {
  children: React.ReactNode;
}

const Wrapper: React.FC<Wrapper> = props => {
  return (
    <div className="">
      <Navbar />
      <main className="app">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;

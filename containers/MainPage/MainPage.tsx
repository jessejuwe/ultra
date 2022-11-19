import React from 'react';

import { LandingPage, Section, Pricing } from '../../exports/exports';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from '../../helpers/data';

const MainPage: React.FC = () => {
  return (
    <main>
      <LandingPage />
      <Section {...homeObjOne} />
      <Section {...homeObjTwo} />
      <Section {...homeObjThree} />
      <Pricing />
      <Section {...homeObjFour} />
    </main>
  );
};

export default MainPage;

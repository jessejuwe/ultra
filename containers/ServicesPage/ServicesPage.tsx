import React from 'react';

import { Section, Pricing } from '../../exports/exports';

import { homeObjOne, homeObjTwo } from '../../helpers/services-data';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Pricing />
      <Section {...homeObjOne} />
      <Section {...homeObjTwo} />
    </>
  );
};

export default ServicesPage;

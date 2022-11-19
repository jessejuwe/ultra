import React from 'react';

import { Section } from '../../exports/exports';

import { homeObjOne, homeObjTwo } from '../../helpers/signup-data';

const SignUpPage: React.FC = () => {
  return (
    <>
      <Section {...homeObjOne} />
      <Section {...homeObjTwo} />
    </>
  );
};

export default SignUpPage;

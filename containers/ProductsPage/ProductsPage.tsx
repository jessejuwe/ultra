import React from 'react';

import { Section } from '../../exports/exports';

import { homeObjOne, homeObjTwo } from '../../helpers/products-data';

const ProductsPage: React.FC = () => {
  return (
    <>
      <Section {...homeObjOne} />
      <Section {...homeObjTwo} />
    </>
  );
};

export default ProductsPage;

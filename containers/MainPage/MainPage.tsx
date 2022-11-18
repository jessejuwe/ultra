import React, { useEffect } from 'react';

import { LandingPage, Section } from '../../exports/exports';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from '../../helpers/data';

const MainPage: React.FC = () => {
  useEffect(() => {
    // Revealing Elements on Scroll
    const allSections = document.querySelectorAll('.section');

    if (!allSections) return;

    const revealSection = (entries: any, observer: any) => {
      const [entry] = entries;

      // Guard Clause
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    allSections.forEach(section => {
      sectionObserver.observe(section);
      section.classList.add('section--hidden');
    });

    return () => {};
  }, []);

  return (
    <main>
      <LandingPage />
      <Section {...homeObjOne} />
      <Section {...homeObjTwo} />
      <Section {...homeObjThree} />
      <Section {...homeObjFour} />
    </main>
  );
};

export default MainPage;

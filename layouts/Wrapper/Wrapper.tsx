import React, { useEffect } from 'react';

import { Footer, Navbar } from '../../exports/exports';

interface Wrapper {
  children: React.ReactNode;
}

const Wrapper: React.FC<Wrapper> = props => {
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
    <div>
      <Navbar />
      <main className="app">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;

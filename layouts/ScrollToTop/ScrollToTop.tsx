import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const ScrollToTop: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);

    return () => {};
  }, [pathname]);
  return null;
};

export default ScrollToTop;

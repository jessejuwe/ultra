import React, { useState, useEffect } from 'react';
import { MenuOutlined, CloseCircleOutlined } from '@ant-design/icons';

import {
  GlobalNavStyle,
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from './Navbar.elements';

import { Button } from '../../styles/globalStyles';
import { NAVIGATE } from '../../helpers/navbar';

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [button, setButton] = useState(true);

  const toggleHandler = () => setToggle(!toggle);
  const closeMobileHandler = () => setToggle(false);

  const hoverHandler = function (this: any, e: any) {
    if (button && e.target.classList.contains('nav__link')) {
      const link = e.target as HTMLInputElement;
      const siblings = link.closest('.nav')?.querySelectorAll('.nav__link');
      const logo = link.closest('.nav')?.querySelector('.logo') as HTMLElement;

      siblings?.forEach((el: any) => {
        if (el !== link) el.style.opacity = this;
      });

      logo.style.opacity = this;
    }
  };

  useEffect(() => {
    // Sticky Navigation: Intersection Observer API
    const nav = document.querySelector('.nav');
    const landingPage = document.querySelector('.app__landing-page');

    if (!nav || !landingPage) return;

    const obsCallback = (entries: any) => {
      const [entry] = entries;

      // prettier-ignore
      !entry.isIntersecting ? nav.classList.add('sticky') : nav.classList.remove('sticky');
    };

    const navHeight = nav.getBoundingClientRect().height;

    const obsOptions = {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    };

    const observer = new IntersectionObserver(obsCallback, obsOptions);
    observer.observe(landingPage);

    // displaying button based on window size
    const showButton = () => {
      window.innerWidth <= 960 ? setButton(false) : setButton(true);
    };

    showButton();

    window.addEventListener('resize', showButton);
  }, []);

  return (
    <>
      <GlobalNavStyle />
      <Nav
        button={button}
        className="nav"
        onMouseOver={hoverHandler.bind(0.5)}
        onMouseOut={hoverHandler.bind(1)}
      >
        <NavbarContainer>
          <NavLogo href="/" onClick={closeMobileHandler} className="logo">
            <NavIcon />
            Ultra
          </NavLogo>

          <MobileIcon onClick={toggleHandler}>
            {toggle ? <CloseCircleOutlined /> : <MenuOutlined />}
          </MobileIcon>

          <NavMenu clicked={toggle} className="nav__links">
            {NAVIGATE.map((nav, index) => (
              <NavItem key={index} onClick={toggleHandler}>
                <NavLinks href={nav.to} className="nav__link">
                  {nav.title}
                </NavLinks>
              </NavItem>
            ))}
            <NavItemBtn>
              {button ? (
                <NavBtnLink href="sign-up">
                  <Button className="nav__link" primary>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink href="sign-up">
                  <Button onClick={closeMobileHandler} primary big fontBig>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

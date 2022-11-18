import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import { HeatMapOutlined } from '@ant-design/icons';

import { Container } from '../../styles/globalStyles';

export const GlobalNavStyle = createGlobalStyle`
.nav {
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  z-index: 50;
}

.nav.sticky {
    display: fixed;
    background: #101522;
    transition: all 0.5s ease;
  }
`;

export const Nav = styled.nav<{ button: boolean }>``;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #ff6836;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  letter-spacing: 0.1rem;

  svg {
    fill: #ff6836;
  }
`;

export const NavIcon = styled(HeatMapOutlined)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;
  transition: all 1.5s;

  svg {
    fill: #fff;
  }

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 70%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

// prettier-ignore
export const NavMenu = styled.ul<{clicked: boolean}>`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  gap: 1.5rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ clicked }) => (clicked ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4bf9f7;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    width: initial;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    font-weight: 600;
    transition: all 0.1s ease;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #ff865e;
      transition: all 0.1s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    width: 90%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  padding: 8px 16px;

  @media screen and (max-width: 960px) {
    padding: initial;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
  }
`;

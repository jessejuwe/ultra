import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';

export const Page = styled.div`
  height: 100vh;
  width: 100%;
  display: block;
  padding-left: 15rem;
  padding-right: 15rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: #101522;

  @media screen and (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 0;
    height: 80vh;
  }
`;

export const Title = styled.h3`
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5rem;
  margin-bottom: 3rem;
  text-align: start;

  font-size: 3rem;
  font-weight: 600;
  line-height: 1.375;
  color: #a9b3c1;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    margin-top: 4rem;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`;

export const Heading = styled.h1`
  color: #ff6836;
  margin-bottom: 3rem;
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 600;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    font-size: 3rem;
  }
`;

export const Subtitle = styled.p`
  color: #fff;
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    font-weight: 500;
    max-width: 90%;
    margin-bottom: 2rem;
  }
`;

export const SignUp = styled(Link)`
  color: #ff6836;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    color: #ff774a;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    font-weight: 500;
  }
`;

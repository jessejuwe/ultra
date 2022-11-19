import { images } from '../constants';

type Props = {
  primary: boolean;
  lightBg: boolean;
  lightText: boolean;
  imgStart: boolean;
  start?: any;
  topline: string;
  heading: string;
  description: string;
  buttonLabel: string;
  img: any;
  imgSrc: any;
  alt: string;
  sectionID: string;
  style?: string;
};

export const homeObjOne: Props = {
  primary: true,
  lightBg: true,
  lightText: false,
  imgStart: false,
  topline: 'View Our Products',
  heading: 'Shop through our catalog of products',
  description:
    'We provide worldwide shipping to all countries. If there are any issues, just issue a refund and we will process your request',
  buttonLabel: 'Shop Now',
  img: images.svg1,
  imgSrc: images.svg1,
  alt: 'Credit Card',
  sectionID: 'section--1',
};

export const homeObjTwo: Props = {
  primary: true,
  lightBg: true,
  lightText: false,
  imgStart: false,
  topline: '100% Secure',
  heading: 'Stay protected 24/7 anywhere anytime',
  description:
    'We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime',
  buttonLabel: 'Learn More',
  img: images.svg3,
  imgSrc: images.svg3,
  alt: 'Vault',
  sectionID: 'section--2',
};

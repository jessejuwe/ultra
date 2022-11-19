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
  primary: false,
  lightBg: false,
  lightText: true,
  imgStart: false,
  topline: 'Exclusive Access',
  heading: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees',
  buttonLabel: 'Get Started',
  img: images.svg1,
  imgSrc: images.svg1,
  alt: 'Credit Card',
  sectionID: 'section--1',
};

export const homeObjTwo: Props = {
  primary: false,
  lightBg: false,
  lightText: true,
  imgStart: false,
  topline: 'DATA ANALYTICS',
  heading: 'Every transaction is stored on our secure cloud database',
  description:
    'Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.',
  buttonLabel: 'Sign Up Now',
  img: images.svg3,
  imgSrc: images.svg3,
  alt: 'Vault',
  sectionID: 'section--2',
};

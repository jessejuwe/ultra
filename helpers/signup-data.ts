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
  topline: 'Sign up Today',
  heading: 'Join today to receive an exclusive offer',
  description:
    'Get access to our exclusive diamond king package. Limited quantity available.',
  buttonLabel: 'Sign Up',
  img: images.svg2,
  imgSrc: images.svg2,
  alt: 'Credit Card',
  sectionID: 'section--1',
};

export const homeObjTwo: Props = {
  primary: true,
  lightBg: true,
  lightText: false,
  imgStart: true,
  topline: 'Easy Setup',
  heading: 'Super fast and simple onboarding process',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  img: images.svg1,
  imgSrc: images.svg1,
  alt: 'Vault',
  sectionID: 'section--2',
};
